// ====================================================================
//  A GENTE VAI DE TURMA — A Lenda do Dragão
//  Lógica do jogo (máquina de estados de telas)
// ====================================================================

const app = document.getElementById('app');
const hud = document.getElementById('hud');
const hudBar = document.getElementById('hud-bar');
const hudValue = document.getElementById('hud-value');
const hudThreshold = document.getElementById('hud-threshold');

const state = {
  pontos: 0,
  acertos: 0,
  round: 0,        // 0,1,2
  charIndex: 0,    // 0..4
  timer: null,
  respostas: []    // histórico
};

const LETRAS = ['A', 'B', 'C'];

// ---------- Utilidades de tela ----------------------------------------

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
  hudThreshold.style.left = (CONFIG.limiteParaVencer / CONFIG.pontuacaoMaxima * 100) + '%';
}

function showHUD(show) {
  hud.classList.toggle('hidden', !show);
  if (show) updateHUD();
}

// ---------- Estrelas de fundo -----------------------------------------

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
    `<div>${pixelSVG(p.id, { pixel: 7 })}</div>`
  ).join('');

  setScreen(`
    <section class="screen intro">
      <div class="kicker">Reunião da Gerência · Pilar</div>
      <h1 class="pixel-title">A Gente Vai de Turma</h1>
      <div class="heroes-row">${heroes}</div>
      <p class="lead">
        Cinco heróis. Cinco equipes. Um único objetivo: derrotar o <strong>Dragão</strong>.<br/>
        Mas só há um jeito de vencer — <strong>indo de turma</strong>. A cada decisão, escolha
        a atitude que reflete confiança, colaboração e o espírito de um só time para acumular
        <strong>Pontos de Heroísmo</strong>.
      </p>
      <button class="btn" onclick="screenRoster()">Conhecer os Heróis ⚔️</button>
    </section>
  `);
}

// ====================================================================
//  TELA 2 — APRESENTAÇÃO DOS PERSONAGENS
// ====================================================================
function screenRoster() {
  showHUD(false);
  const cards = PERSONAGENS.map((p, i) => `
    <div class="hero-card panel" style="--char:${p.cor}; animation-delay:${i * 0.08}s">
      ${pixelSVG(p.id, { pixel: 6 })}
      <div class="team">${p.equipe}</div>
      <div class="name">${p.nome}</div>
      <div class="epithet">${p.epiteto}</div>
      <div class="desc">${p.descricao}</div>
    </div>
  `).join('');

  setScreen(`
    <section class="screen roster">
      <h1 class="pixel-title">A Turma</h1>
      <p class="lead">Cada equipe controla um herói. Em cada uma das 3 rodadas, sua equipe terá uma decisão a tomar.</p>
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
  state.round = r;
  state.charIndex = 0;
  showHUD(false);
  const titulos = ['A Jornada Começa', 'O Caminho se Estreita', 'Diante do Covil'];
  const subs = [
    'Rodada 1 — A primeira decisão de cada equipe',
    'Rodada 2 — A turma é testada',
    'Rodada 3 — A última escolha antes do Dragão'
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
  const p = PERSONAGENS[state.charIndex];
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
        ${pixelSVG(p.id, { pixel: 7 })}
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
    if (t <= 0) { clearInterval(state.timer); }
  }, 1000);
}

// ---------- Resposta --------------------------------------------------
function answer(i) {
  clearInterval(state.timer);
  const p = PERSONAGENS[state.charIndex];
  const cenario = CENARIOS[p.id][state.round];
  const opEls = document.querySelectorAll('.option');
  const optionsWrap = document.getElementById('options');
  if (optionsWrap.classList.contains('locked')) return;
  optionsWrap.classList.add('locked');

  const acertou = !!cenario.opcoes[i].correta;
  let correctIndex = cenario.opcoes.findIndex(o => o.correta);

  opEls.forEach((el, idx) => {
    el.classList.add('locked');
    if (idx === correctIndex) el.classList.add('correct');
    else if (idx === i) el.classList.add('wrong');
    else el.classList.add('dim');
  });

  // pontos
  if (acertou) {
    state.pontos += CONFIG.pontosPorAcerto;
    state.acertos++;
    floatPoints();
  }
  updateHUD();
  state.respostas.push({ char: p.id, round: state.round, acertou });

  // feedback
  const fb = document.getElementById('feedback');
  const opChosen = cenario.opcoes[i];
  fb.className = 'feedback panel show ' + (acertou ? 'good' : 'bad');
  fb.innerHTML = `
    <span class="emoji">${acertou ? '🛡️' : '💔'}</span>
    <span>
      ${acertou ? '<span class="pts">+' + CONFIG.pontosPorAcerto + ' Heroísmo!</span> ' : ''}
      ${opChosen.feedback}
      ${!acertou ? '<br/><em style="color:var(--gold-soft)">Resposta alinhada: ' + LETRAS[correctIndex] + ') ' + cenario.opcoes[correctIndex].texto + '</em>' : ''}
    </span>
  `;

  // próximo
  const footer = document.getElementById('footer');
  const isLastChar = state.charIndex >= PERSONAGENS.length - 1;
  const isLastRound = state.round >= 2;
  let label, action;
  if (!isLastChar) {
    label = 'Próxima Equipe ▶'; action = 'nextChar()';
  } else if (!isLastRound) {
    label = 'Próxima Rodada ▶▶'; action = 'startRound(' + (state.round + 1) + ')';
  } else {
    label = 'Enfrentar o Dragão 🐉'; action = 'screenFinale()';
  }
  footer.innerHTML = `<button class="btn" onclick="${action}">${label}</button>`;
}

function nextChar() {
  state.charIndex++;
  screenAction();
}

function floatPoints() {
  const hero = document.querySelector('.action-hero');
  const r = hero ? hero.getBoundingClientRect() : { left: window.innerWidth / 2, top: 120, width: 0 };
  const el = document.createElement('div');
  el.className = 'float-pts';
  el.textContent = '+' + CONFIG.pontosPorAcerto;
  el.style.left = (r.left + r.width / 2 - 20) + 'px';
  el.style.top = (r.top + 40) + 'px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1300);
}

// ====================================================================
//  TELA FINAL — BATALHA CONTRA O DRAGÃO
// ====================================================================
function screenFinale() {
  showHUD(false);
  const venceu = state.pontos >= CONFIG.limiteParaVencer;

  const party = PERSONAGENS.map(p => pixelSVG(p.id, { pixel: 5 })).join('');

  setScreen(`
    <section class="screen finale">
      <h2 class="pixel-title">O Covil do Dragão</h2>
      <div class="battle-stage panel">
        <div class="battle-party">${party}</div>
        <div class="battle-dragon" id="dragon">${pixelSVG('dragon', { pixel: 6, idle: false })}</div>
      </div>
      <div id="finale-result"></div>
    </section>
  `);

  // Sequência da batalha
  setTimeout(() => runBattle(venceu), 700);
}

function runBattle(venceu) {
  const dragon = document.getElementById('dragon');
  const stage = document.querySelector('.battle-stage');

  // dispara feixes de ataque da party em direção ao dragão
  let shots = 0;
  const totalShots = Math.max(3, Math.round(state.acertos / 2));
  const fire = setInterval(() => {
    shootBeam(stage);
    if (dragon) { dragon.classList.remove('shake'); void dragon.offsetWidth; dragon.classList.add('shake'); }
    shots++;
    if (shots >= totalShots) {
      clearInterval(fire);
      setTimeout(() => revealResult(venceu, dragon), 700);
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
  beam.style.top = startY + 'px';
  beam.style.width = '0px';
  stage.appendChild(beam);
  requestAnimationFrame(() => {
    beam.style.transition = 'width .35s ease, left .35s ease';
    beam.style.width = '52%';
  });
  setTimeout(() => beam.remove(), 600);
}

function revealResult(venceu, dragon) {
  const box = document.getElementById('finale-result');
  if (venceu) {
    if (dragon) dragon.classList.add('flee');
    launchConfetti();
    box.innerHTML = `
      <div class="result win">VITÓRIA!</div>
      <div class="score-line">A turma reuniu <strong>${state.pontos}</strong> de ${CONFIG.pontuacaoMaxima} Pontos de Heroísmo</div>
      <div class="score-line">(meta: ${CONFIG.limiteParaVencer})</div>
      <p class="message">
        O Dragão foi derrotado! E não por força isolada — mas porque cada herói confiou no outro,
        pediu e ofereceu ajuda, e agiu como <strong>um só time</strong>. É assim que a gente vai de turma. 🎉
      </p>
      <button class="btn secondary" onclick="screenIntro()">Jogar Novamente 🔁</button>
    `;
  } else {
    if (dragon) dragon.classList.add('victory-dragon');
    const faltou = CONFIG.limiteParaVencer - state.pontos;
    box.innerHTML = `
      <div class="result lose">QUASE LÁ...</div>
      <div class="score-line">A turma reuniu <strong>${state.pontos}</strong> de ${CONFIG.pontuacaoMaxima} Pontos de Heroísmo</div>
      <div class="score-line">Faltaram <strong>${faltou}</strong> pontos para a meta de ${CONFIG.limiteParaVencer}</div>
      <p class="message">
        O Dragão resistiu desta vez. A lição fica: cada decisão de ir de turma — confiar, colaborar,
        pedir e dar ajuda — soma forças para os desafios reais. Bora tentar de novo, juntos! 💪
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
    c.style.left = Math.random() * 100 + 'vw';
    c.style.background = cores[Math.floor(Math.random() * cores.length)];
    c.style.setProperty('--d', (2 + Math.random() * 2.5) + 's');
    c.style.animationDelay = (Math.random() * 0.6) + 's';
    c.style.transform = `rotate(${Math.random() * 360}deg)`;
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

// Reinício total das pontuações ao voltar para a intro
const _origIntro = screenIntro;
screenIntro = function () {
  state.pontos = 0; state.acertos = 0; state.round = 0; state.charIndex = 0; state.respostas = [];
  updateHUD();
  _origIntro();
};

// ---------- Boot ------------------------------------------------------
makeStars();
screenIntro();
