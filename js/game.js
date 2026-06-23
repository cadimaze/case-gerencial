// ====================================================================
//  A GENTE VAI DE TURMA — O Incidente em Produção
//  Lógica do jogo (máquina de estados de telas)
// ====================================================================

const app   = document.getElementById('app');
const hud   = document.getElementById('hud');
const hudBar = document.getElementById('hud-bar');
const hudValue = document.getElementById('hud-value');
const hudThreshold = document.getElementById('hud-threshold');

const state = {
  pontos: 0,
  acertos: 0,
  round: 0,       // 0, 1, 2
  charIndex: 0,   // 0..4
  timer: null,
  respostas: []
};

const LETRAS = ['A', 'B', 'C'];

// ---------- Tela -------------------------------------------------------

function setScreen(html) {
  const old = app.querySelector('.screen');
  if (old) {
    old.classList.add('out');
    setTimeout(() => { app.innerHTML = html; }, 320);
  } else {
    app.innerHTML = html;
  }
}

function updateHUD() {
  const pct = (state.pontos / CONFIG.pontuacaoMaxima) * 100;
  hudBar.style.width = pct + '%';
  hudValue.textContent = state.pontos;
  hudThreshold.style.left =
    (CONFIG.limiteParaVencer / CONFIG.pontuacaoMaxima * 100) + '%';
}

function showHUD(show) {
  hud.classList.toggle('hidden', !show);
  if (show) updateHUD();
}

// ---------- Partículas de fundo ----------------------------------------

function makeStars(n = 70) {
  const wrap = document.getElementById('stars');
  let html = '';
  for (let i = 0; i < n; i++) {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const d = (2 + Math.random() * 4).toFixed(1);
    const delay = (Math.random() * 4).toFixed(1);
    html += `<span class="star" style="left:${x}%;top:${y}%;--dur:${d}s;animation-delay:${delay}s"></span>`;
  }
  wrap.innerHTML = html;
}

// ====================================================================
//  TELA 1 — INTRO
// ====================================================================
function screenIntro() {
  showHUD(false);
  const heroes = PERSONAGENS.map(p =>
    `<div>${pixelSVG(p.id, { pixel: 8 })}</div>`
  ).join('');

  setScreen(`
    <section class="screen intro">
      <div class="kicker">Reunião da Gerência · Pilar</div>
      <h1 class="pixel-title">A Gente Vai de Turma</h1>
      <div class="heroes-row">${heroes}</div>
      <p class="lead">
        Cinco especialistas. Cinco equipes. Um único objetivo: conter o
        <strong>Incidente em Produção</strong> antes que ele derrube tudo.<br/>
        Cada decisão certa acumula <strong>Pontos de Heroísmo</strong>.
        Mas só uma postura vence — <strong>ir de turma</strong>.
      </p>
      <button class="btn" onclick="screenRoster()">Conhecer o Time ⚔️</button>
    </section>
  `);
}

// ====================================================================
//  TELA 2 — APRESENTAÇÃO DO TIME
// ====================================================================
function screenRoster() {
  showHUD(false);
  const cards = PERSONAGENS.map((p, i) => `
    <div class="hero-card panel" style="--char:${p.cor}; animation-delay:${i * 0.08}s">
      ${pixelSVG(p.id, { pixel: 7 })}
      <div class="team">${p.equipe}</div>
      <div class="name">${p.nome}</div>
      <div class="epithet">${p.epiteto}</div>
      <div class="desc">${p.descricao}</div>
    </div>
  `).join('');

  setScreen(`
    <section class="screen roster">
      <h1 class="pixel-title">O Time</h1>
      <p class="lead">
        Cada equipe controla um especialista. Em cada uma das 3 rodadas,
        sua equipe enfrentará uma situação real do dia a dia.
      </p>
      <div class="roster-grid">${cards}</div>
      <div class="actions">
        <button class="btn" onclick="startRound(0)">Começar a Jornada 🗺️</button>
      </div>
    </section>
  `);
}

// ====================================================================
//  TRANSIÇÃO DE RODADA
// ====================================================================
function startRound(r) {
  state.round     = r;
  state.charIndex = 0;
  showHUD(false);

  const titulos = ['O Alerta Chega', 'A Crise Escala', 'O Momento Decisivo'];
  const subs = [
    'Rodada 1 — Primeira decisão de cada especialista',
    'Rodada 2 — A pressão aumenta',
    'Rodada 3 — A última chance antes do Incidente'
  ];

  setScreen(`
    <section class="screen round-intro">
      <div class="big">Rodada ${r + 1}</div>
      <div class="sub">${titulos[r]}</div>
      <p class="lead" style="margin-top:22px">${subs[r]}</p>
      <div style="margin-top:30px">
        <button class="btn" onclick="screenAction()">Avançar ▶</button>
      </div>
    </section>
  `);
}

// ====================================================================
//  TELA DE AÇÃO (pergunta)
// ====================================================================
function screenAction() {
  const p       = PERSONAGENS[state.charIndex];
  const cenario = CENARIOS[p.id][state.round];
  showHUD(true);

  const opcoes = cenario.opcoes.map((op, i) => `
    <button class="option" data-i="${i}" onclick="answer(${i})">
      <span class="letter">${LETRAS[i]}</span>
      <span class="op-text">${op.texto}</span>
    </button>
  `).join('');

  setScreen(`
    <section class="screen action-screen" style="--char:${p.cor}">
      <aside class="action-hero panel">
        <div class="round-tag">Rodada ${state.round + 1} · ${state.charIndex + 1}/5</div>
        ${pixelSVG(p.id, { pixel: 8 })}
        <div class="name">${p.nome}</div>
        <div class="team">${p.equipe}</div>
        <div class="timer" id="timer">${CONFIG.tempoDiscussao}</div>
        <div class="timer-label">tempo de discussão</div>
      </aside>

      <div class="action-main">
        <div class="action-card panel">
          <div class="action-title">${cenario.titulo}</div>
          <div class="situacao">${cenario.situacao}</div>
        </div>
        <div class="options" id="options">${opcoes}</div>
        <div class="feedback panel" id="feedback"></div>
        <div class="action-footer" id="footer"></div>
      </div>
    </section>
  `);

  setTimeout(startTimer, 360);
}

function startTimer() {
  clearInterval(state.timer);
  let t = CONFIG.tempoDiscussao;
  const el = document.getElementById('timer');
  if (!el) return;
  state.timer = setInterval(() => {
    t--;
    if (!el.isConnected) { clearInterval(state.timer); return; }
    el.textContent = Math.max(t, 0);
    if (t <= 10) el.classList.add('low');
    if (t <= 0)  clearInterval(state.timer);
  }, 1000);
}

// ---------- Resposta --------------------------------------------------
function answer(i) {
  clearInterval(state.timer);

  const p            = PERSONAGENS[state.charIndex];
  const cenario      = CENARIOS[p.id][state.round];
  const optionsWrap  = document.getElementById('options');
  if (optionsWrap.classList.contains('locked')) return;
  optionsWrap.classList.add('locked');

  const acertou      = !!cenario.opcoes[i].correta;
  const correctIndex = cenario.opcoes.findIndex(o => o.correta);
  const opEls        = document.querySelectorAll('.option');

  opEls.forEach((el, idx) => {
    el.classList.add('locked');
    if (idx === correctIndex) el.classList.add('correct');
    else if (idx === i)       el.classList.add('wrong');
    else                      el.classList.add('dim');
  });

  if (acertou) {
    state.pontos  += CONFIG.pontosPorAcerto;
    state.acertos += 1;
    floatPoints();
  }
  updateHUD();
  state.respostas.push({ char: p.id, round: state.round, acertou });

  // feedback
  const fb = document.getElementById('feedback');
  fb.className = 'feedback panel show ' + (acertou ? 'good' : 'bad');
  fb.innerHTML = `
    <span class="emoji">${acertou ? '🛡️' : '💔'}</span>
    <span>
      ${acertou ? `<span class="pts">+${CONFIG.pontosPorAcerto} Heroísmo!</span> ` : ''}
      ${cenario.opcoes[i].feedback}
      ${!acertou
        ? `<br/><em style="color:var(--gold-soft)">Resposta alinhada: ${LETRAS[correctIndex]}) ${cenario.opcoes[correctIndex].texto}</em>`
        : ''}
    </span>
  `;

  // botão próximo
  const footer      = document.getElementById('footer');
  const isLastChar  = state.charIndex >= PERSONAGENS.length - 1;
  const isLastRound = state.round >= 2;

  let label, action;
  if (!isLastChar) {
    label = 'Próxima Equipe ▶';
    action = 'nextChar()';
  } else if (!isLastRound) {
    label = 'Próxima Rodada ▶▶';
    action = `startRound(${state.round + 1})`;
  } else {
    label = 'Ver Resultado Final 📊';
    action = 'screenPreBattle()';
  }
  footer.innerHTML = `<button class="btn" onclick="${action}">${label}</button>`;
}

function nextChar() {
  state.charIndex++;
  screenAction();
}

function floatPoints() {
  const hero = document.querySelector('.action-hero');
  const r = hero
    ? hero.getBoundingClientRect()
    : { left: window.innerWidth / 2, top: 120, width: 0 };
  const el = document.createElement('div');
  el.className = 'float-pts';
  el.textContent = '+' + CONFIG.pontosPorAcerto;
  el.style.left = (r.left + r.width / 2 - 20) + 'px';
  el.style.top  = (r.top + 40) + 'px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1300);
}

// ====================================================================
//  TELA PRÉ-BATALHA — placar geral + botão de enfrentar o incidente
// ====================================================================
function screenPreBattle() {
  showHUD(false);
  clearInterval(state.timer);

  const venceu  = state.pontos >= CONFIG.limiteParaVencer;
  const faltou  = CONFIG.limiteParaVencer - state.pontos;
  const pct     = Math.round((state.pontos / CONFIG.pontuacaoMaxima) * 100);
  const statusCor  = venceu ? 'var(--green)' : '#ff9a3c';
  const statusIcon = venceu ? '⚡' : '⚠️';
  const statusMsg  = venceu
    ? `Com <strong>${state.pontos}</strong> pontos, o time está pronto para o confronto!`
    : `Com <strong>${state.pontos}</strong> pontos, faltam <strong>${faltou}</strong> para a meta — mas é hora de agir!`;

  // mini-placar por personagem
  const miniCards = PERSONAGENS.map(p => {
    const rs = state.respostas.filter(r => r.char === p.id);
    const pts = rs.filter(r => r.acertou).length * CONFIG.pontosPorAcerto;
    const stars = rs.map(r => r.acertou ? '★' : '☆').join('');
    return `
      <div class="pre-battle-card panel" style="--char:${p.cor}">
        ${pixelSVG(p.id, { pixel: 5, idle: false })}
        <div class="pbc-name">${p.nome}</div>
        <div class="pbc-stars">${stars}</div>
        <div class="pbc-pts" style="color:${p.cor}">${pts} pts</div>
      </div>`;
  }).join('');

  setScreen(`
    <section class="screen pre-battle">
      <h2 class="pixel-title" style="text-align:center; margin-bottom:6px">Placar Final da Turma</h2>

      <div class="pre-battle-cards">${miniCards}</div>

      <div class="pre-battle-total panel">
        <div class="pbt-bar-wrap">
          <div class="pbt-bar" style="width:${pct}%; background: ${venceu ? 'linear-gradient(90deg,var(--gold),var(--green))' : 'linear-gradient(90deg,var(--gold),#ff9a3c)'}"></div>
          <div class="pbt-threshold"></div>
        </div>
        <div class="pbt-numbers">
          <span style="color:${statusCor}; font-family:var(--pixel); font-size:clamp(18px,3vw,30px)">${statusIcon} ${state.pontos}</span>
          <span style="color:var(--ink-soft); font-size:15px">/ ${CONFIG.pontuacaoMaxima} Pontos de Heroísmo</span>
        </div>
        <p class="pbt-msg">${statusMsg}</p>
      </div>

      <div class="pre-battle-action">
        <div class="incident-warning">
          ${pixelSVG('incident', { pixel: 7, idle: true })}
        </div>
        <button class="btn btn-incident" onclick="screenFinale()">
          ⚠️ Enfrentar o Incidente em Produção
        </button>
      </div>
    </section>
  `);
}

// ====================================================================
//  TELA FINAL — BATALHA CONTRA O INCIDENTE EM PRODUÇÃO
// ====================================================================
function screenFinale() {
  showHUD(false);
  const venceu = state.pontos >= CONFIG.limiteParaVencer;

  const party = PERSONAGENS.map(p => pixelSVG(p.id, { pixel: 5 })).join('');

  setScreen(`
    <section class="screen finale">
      <h2 class="pixel-title">Incidente em Produção</h2>
      <div class="battle-stage panel">
        <div class="battle-party">${party}</div>
        <div class="battle-incident" id="incident">${pixelSVG('incident', { pixel: 6, idle: false })}</div>
      </div>
      <div id="finale-result"></div>
    </section>
  `);

  setTimeout(() => runBattle(venceu), 700);
}

function runBattle(venceu) {
  const incident = document.getElementById('incident');
  const stage    = document.querySelector('.battle-stage');

  let shots = 0;
  const totalShots = Math.max(3, Math.round(state.acertos / 2));

  const fire = setInterval(() => {
    shootBeam(stage);
    if (incident) {
      incident.classList.remove('shake');
      void incident.offsetWidth;
      incident.classList.add('shake');
    }
    shots++;
    if (shots >= totalShots) {
      clearInterval(fire);
      setTimeout(() => revealResult(venceu, incident), 700);
    }
  }, 520);
}

function shootBeam(stage) {
  if (!stage) return;
  const beam = document.createElement('div');
  beam.className = 'beam';
  const r = stage.getBoundingClientRect();
  const startY = r.height * (0.45 + Math.random() * 0.25);
  beam.style.left = '24%';
  beam.style.top  = startY + 'px';
  beam.style.width = '0px';
  stage.appendChild(beam);
  requestAnimationFrame(() => {
    beam.style.transition = 'width .35s ease';
    beam.style.width = '52%';
  });
  setTimeout(() => beam.remove(), 600);
}

function revealResult(venceu, incident) {
  const box = document.getElementById('finale-result');

  if (venceu) {
    if (incident) incident.classList.add('flee');
    launchConfetti();
    box.innerHTML = `
      <div class="result win">INCIDENTE RESOLVIDO!</div>
      <div class="score-line">A turma reuniu <strong>${state.pontos}</strong> de ${CONFIG.pontuacaoMaxima} Pontos de Heroísmo</div>
      <p class="message">
        O Incidente em Produção foi contido! Não pela força de um só —
        mas porque cada especialista comunicou, pediu ajuda e agiu junto.
        É exatamente assim que <strong>a gente vai de turma</strong>. 🎉
      </p>
      <button class="btn secondary" onclick="screenIntro()">Jogar Novamente 🔁</button>
    `;
  } else {
    if (incident) incident.classList.add('victory-incident');
    const faltou = CONFIG.limiteParaVencer - state.pontos;
    box.innerHTML = `
      <div class="result lose">INCIDENTE PERSISTE...</div>
      <div class="score-line">A turma reuniu <strong>${state.pontos}</strong> de ${CONFIG.pontuacaoMaxima} Pontos de Heroísmo</div>
      <div class="score-line">Faltaram <strong>${faltou}</strong> pontos para atingir a meta de ${CONFIG.limiteParaVencer}</div>
      <p class="message">
        O incidente resistiu desta vez. A lição fica: cada decisão de
        ir de turma — comunicar, colaborar, pedir e dar ajuda — é o que
        transforma crises em vitórias coletivas. Bora tentar de novo! 💪
      </p>
      <button class="btn secondary" onclick="screenIntro()">Tentar Novamente 🔁</button>
    `;
  }
}

function launchConfetti() {
  const cores = ['#f1b30b', '#34c759', '#2f80ed', '#ec7000', '#c879ec', '#ff5a5a'];
  for (let i = 0; i < 90; i++) {
    const c = document.createElement('div');
    c.className = 'confetti';
    c.style.left       = Math.random() * 100 + 'vw';
    c.style.background = cores[Math.floor(Math.random() * cores.length)];
    c.style.setProperty('--d', (2 + Math.random() * 2.5) + 's');
    c.style.animationDelay = (Math.random() * 0.6) + 's';
    c.style.transform  = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 5000);
  }
}

// ====================================================================
//  Fullscreen
// ====================================================================
document.getElementById('btn-fullscreen').addEventListener('click', () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen?.();
  } else {
    document.exitFullscreen?.();
  }
});

// Reinício completo ao voltar para intro
const _origIntro = screenIntro;
screenIntro = function () {
  state.pontos = 0; state.acertos = 0;
  state.round  = 0; state.charIndex = 0; state.respostas = [];
  updateHUD();
  _origIntro();
};

// ---------- Boot ------------------------------------------------------
makeStars();
screenIntro();
