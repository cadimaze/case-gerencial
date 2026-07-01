// ====================================================================
//  A GENTE VAI DE TURMA — O Incidente em Produção
//  Lógica do jogo (máquina de estados de telas)
// ====================================================================

const app    = document.getElementById('app');
const hud    = document.getElementById('hud');
const hudBar = document.getElementById('hud-bar');
const hudVal = document.getElementById('hud-value');

const state = {
  vidaIncidente: CONFIG.vidaInicialIncidente,
  vidaMaxima:    CONFIG.vidaInicialIncidente,
  questionIndex: 0,
  questions:     [],
  timer:         null,
  danosPorChar:  {}   // { charId: netDamage }
};

const LETRAS = ['A', 'B', 'C'];

// ---------- Monta lista plana de perguntas ----------------------------
function buildQuestions() {
  const list = [];
  const maxQ = Math.max(...PERSONAGENS.map(p => CENARIOS[p.id].length));
  for (let r = 0; r < maxQ; r++) {
    for (const p of PERSONAGENS) {
      const arr = CENARIOS[p.id];
      if (arr[r]) list.push({ personagem: p, cenario: arr[r] });
    }
  }
  return list;
}

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

// ---------- HUD — barra de vida do incidente --------------------------
function updateHUD() {
  const pct = Math.min(100, Math.max(0, (state.vidaIncidente / state.vidaMaxima) * 100));
  hudBar.style.width = pct + '%';
  hudVal.textContent = Math.max(0, state.vidaIncidente);

  if (pct > 60)      hudBar.style.background = 'linear-gradient(90deg,#c0392b,#e74c3c)';
  else if (pct > 30) hudBar.style.background = 'linear-gradient(90deg,#e74c3c,#ff9a3c)';
  else               hudBar.style.background = 'linear-gradient(90deg,#ff9a3c,var(--gold))';
}

function showHUD(show) {
  hud.classList.toggle('hidden', !show);
  if (show) updateHUD();
}

// Animação do monstro no HUD ao receber dano ou se curar
function animateHUDMonster(pontos) {
  const wrap = document.getElementById('hud-monster');
  if (!wrap) return;
  wrap.classList.remove('hud-monster-hit', 'hud-monster-heal');
  void wrap.offsetWidth;
  wrap.classList.add(pontos > 0 ? 'hud-monster-hit' : 'hud-monster-heal');
  setTimeout(() => wrap.classList.remove('hud-monster-hit', 'hud-monster-heal'), 650);
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
//  KAIJU — helpers de imagem e efeitos sobre a imagem estática
// ====================================================================

const KAIJU_FMTS = [
  'assets/kaiju-scene.gif',
  'assets/kaiju-scene.png',
  'assets/kaiju-scene.jpg',
  'assets/kaiju-scene.jpeg'
];

function kaijuNextFmt(img) {
  const next = (parseInt(img.dataset.fmt) || 0) + 1;
  if (next < KAIJU_FMTS.length) {
    img.dataset.fmt = next;
    img.src = KAIJU_FMTS[next];
  } else {
    img.style.display = 'none';
    const css = document.getElementById('kaiju-css-scene');
    if (css) css.style.display = 'flex';
  }
}

function kaijuImgLoaded() {
  const overlay = document.getElementById('kaiju-overlay');
  if (overlay) overlay.style.display = 'block';
  generateEmbers();
}

function generateEmbers(n = 22) {
  const container = document.getElementById('kaiju-embers');
  if (!container) return;
  const colors = ['#FFD93D', '#FF6B35', '#FFF3A0', '#ffd166', '#ff9a3c', '#ff5a5a'];
  let html = '';
  for (let i = 0; i < n; i++) {
    const x     = (8 + Math.random() * 84).toFixed(1);
    const y     = (35 + Math.random() * 55).toFixed(1);
    const dur   = (2.2 + Math.random() * 3.5).toFixed(1);
    const delay = (Math.random() * 5).toFixed(1);
    const drift  = ((Math.random() * 50) - 25).toFixed(0);
    const drift2 = ((Math.random() * 36) - 18).toFixed(0);
    const size  = (2 + Math.random() * 3.5).toFixed(1);
    const color = colors[Math.floor(Math.random() * colors.length)];
    html += `<div class="ember" style="left:${x}%;top:${y}%;width:${size}px;height:${size}px;background:${color};color:${color};--dur:${dur}s;--delay:${delay}s;--drift:${drift}px;--drift2:${drift2}px"></div>`;
  }
  container.innerHTML = html;
}

// ====================================================================
//  TELA 0A — LANDING (imagem + título, sem scroll)
// ====================================================================
function screenKaiju() {
  showHUD(false);

  const heroesSmall = PERSONAGENS.map(p =>
    `<div class="kaiju-hero-wrap" style="--char:${p.cor}">${pixelSVG(p.id, { pixel: 5, idle: true })}</div>`
  ).join('');

  setScreen(`
    <section class="screen kaiju-landing">

      <div class="kaiju-scene">
        <img class="kaiju-img" id="kaiju-img"
             src="${KAIJU_FMTS[0]}"
             data-fmt="0"
             onload="kaijuImgLoaded()"
             onerror="kaijuNextFmt(this)"
             alt="Incidente em Produção como Kaiju" />

        <div class="kaiju-overlay" id="kaiju-overlay">
          <div class="kaiju-fire-glow"></div>
          <div class="kaiju-vignette"></div>
          <div class="kaiju-embers" id="kaiju-embers"></div>
        </div>

        <div class="kaiju-css-scene" id="kaiju-css-scene">
          <div class="kaiju-flames">
            <div class="flame f1"></div><div class="flame f2"></div>
            <div class="flame f3"></div><div class="flame f4"></div>
            <div class="flame f5"></div>
          </div>
          <div class="kaiju-city">
            <div class="building b1"></div><div class="building b2"></div>
            <div class="building b3 crumbling"></div><div class="building b4"></div>
            <div class="building b5 crumbling"></div><div class="building b6"></div>
          </div>
          <div class="kaiju-monster">${pixelSVG('incident', { pixel: 14, idle: false })}</div>
          <div class="kaiju-heroes-row">${heroesSmall}</div>
        </div>
      </div>

      <div class="landing-footer">
        <h1 class="pixel-title landing-title">O Incidente em Produção</h1>
        <button class="btn btn-landing" onclick="screenKaijuExplain()">
          Entender o Desafio ▶
        </button>
      </div>

    </section>
  `);
}

// ====================================================================
//  TELA 0B — EXPLICAÇÃO (evils + por que turma + botão, sem scroll)
// ====================================================================
function screenKaijuExplain() {
  showHUD(false);
  setScreen(`
    <section class="screen kaiju-explain">

      <div class="explain-header">
        <h1 class="pixel-title explain-title">Incidente em Produção</h1>
        <p class="explain-sub">O monstro que nenhum sistema vence sozinho</p>
      </div>

      <div class="explain-body">
        <div class="kaiju-evils">
          <div class="evil-item">
            <span class="evil-icon">💸</span>
            <span><strong>Prejuízo imediato</strong> — cada minuto fora do ar é receita perdida e cliente insatisfeito</span>
          </div>
          <div class="evil-item">
            <span class="evil-icon">🔥</span>
            <span><strong>Pressão extrema</strong> — todo mundo olhando, o relógio correndo, decisões pesadas demais para um só carregar</span>
          </div>
          <div class="evil-item">
            <span class="evil-icon">🔗</span>
            <span><strong>Efeito cascata</strong> — um serviço fora derruba outros, e quem não sabe do problema não pode ajudar</span>
          </div>
          <div class="evil-item">
            <span class="evil-icon">😰</span>
            <span><strong>Paralisia por isolamento</strong> — especialistas agindo sozinhos fazem o incidente crescer. Só juntos ele cai.</span>
          </div>
        </div>

        <div class="explain-why panel">
          <p class="kaiju-why-title">Por que a gente vai de turma?</p>
          <p>Incidente não se vence com herói solitário. Vence-se com <strong>comunicação rápida</strong>, <strong>decisões coletivas</strong> e <strong>confiança entre especialistas</strong>. É o pilar <em>Vai de Turma</em> em ação.</p>
        </div>
      </div>

      <div class="explain-footer">
        <button class="btn btn-kaiju" onclick="screenRoster()">
          ⚔️ Aceitar o Desafio
        </button>
      </div>

    </section>
  `);
}

// ====================================================================
//  TELA 1 — APRESENTAÇÃO DO TIME
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
      <h1 class="pixel-title" style="text-align:center; margin-bottom:10px">O Time</h1>
      <p class="lead" style="text-align:center; margin-bottom:28px">
        Cinco especialistas. Vinte decisões. Um incidente para derrotar.<br/>
        Cada resposta certa tira <strong style="color:var(--green)">20 de vida</strong> do incidente,
        a meio certa tira <strong style="color:var(--gold)">10</strong>,
        e a errada <strong style="color:var(--red)">aumenta em 10</strong>. Discutam antes de responder.
      </p>
      <div class="roster-grid">${cards}</div>
      <div class="actions" style="text-align:center">
        <button class="btn" onclick="startGame()">Começar a Batalha ⚔️</button>
      </div>
    </section>
  `);
}

// ====================================================================
//  INÍCIO DO JOGO — monta questões e vai para a primeira
// ====================================================================
function startGame() {
  state.vidaIncidente = CONFIG.vidaInicialIncidente;
  state.vidaMaxima    = CONFIG.vidaInicialIncidente;
  state.questionIndex = 0;
  state.questions     = buildQuestions();
  state.danosPorChar  = {};
  PERSONAGENS.forEach(p => { state.danosPorChar[p.id] = 0; });
  screenAction();
}

// ====================================================================
//  TELA DE AÇÃO (pergunta)
// ====================================================================
function screenAction() {
  if (state.questionIndex >= state.questions.length) {
    screenFinale();
    return;
  }

  const q   = state.questions[state.questionIndex];
  const p   = q.personagem;
  const cen = q.cenario;
  const total = state.questions.length;
  const atual = state.questionIndex + 1;
  showHUD(true);

  const opcoes = cen.opcoes.map((op, i) => `
    <button class="option" data-i="${i}" onclick="answer(${i})">
      <span class="letter">${LETRAS[i]}</span>
      <span class="op-text">${op.texto}</span>
    </button>
  `).join('');

  setScreen(`
    <section class="screen action-screen" style="--char:${p.cor}">
      <aside class="action-hero panel">
        <div class="round-tag">Pergunta ${atual} / ${total}</div>
        ${pixelSVG(p.id, { pixel: 8 })}
        <div class="name">${p.nome}</div>
        <div class="team">${p.equipe}</div>
        <div class="timer" id="timer">${fmtTimer(CONFIG.tempoDiscussao)}</div>
        <div class="timer-label">tempo de discussão</div>
      </aside>

      <div class="action-main">
        <div class="action-card panel">
          <div class="action-title">${cen.titulo}</div>
          <div class="situacao">${cen.situacao}</div>
        </div>
        <div class="options" id="options">${opcoes}</div>
        <div class="feedback panel" id="feedback"></div>
        <div class="action-footer" id="footer"></div>
      </div>
    </section>
  `);

  setTimeout(startTimer, 360);
}

function fmtTimer(s) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return m > 0 ? `${m}:${String(sec).padStart(2, '0')}` : String(sec);
}

function startTimer() {
  clearInterval(state.timer);
  let t = CONFIG.tempoDiscussao;
  const el = document.getElementById('timer');
  if (!el) return;
  el.textContent = fmtTimer(t);
  state.timer = setInterval(() => {
    t--;
    if (!el.isConnected) { clearInterval(state.timer); return; }
    el.textContent = fmtTimer(Math.max(t, 0));
    if (t <= 20) el.classList.add('low');
    if (t <= 0)  clearInterval(state.timer);
  }, 1000);
}

// ---------- Resposta --------------------------------------------------
function answer(i) {
  clearInterval(state.timer);

  const q           = state.questions[state.questionIndex];
  const cen         = q.cenario;
  const optionsWrap = document.getElementById('options');
  if (optionsWrap.classList.contains('locked')) return;
  optionsWrap.classList.add('locked');

  const pontos      = cen.opcoes[i].pontos;
  const bestIndex   = cen.opcoes.reduce((best, op, idx, arr) =>
    op.pontos > arr[best].pontos ? idx : best, 0);

  // Aplica dano / cura ao incidente
  // pontos = 20 → tira 20; pontos = 10 → tira 10; pontos = -10 → adiciona 10
  state.vidaIncidente -= pontos;
  state.vidaMaxima = Math.max(state.vidaMaxima, state.vidaIncidente);

  // Acumula dano por personagem
  const charId = q.personagem.id;
  state.danosPorChar[charId] = (state.danosPorChar[charId] || 0) + pontos;

  const opEls = document.querySelectorAll('.option');
  opEls.forEach((el, idx) => {
    el.classList.add('locked');
    if (idx === bestIndex)  el.classList.add('correct');
    else if (idx === i)     el.classList.add(pontos === 10 ? 'half' : 'wrong');
    else                    el.classList.add('dim');
  });

  updateHUD();
  animateHUDMonster(pontos);

  // Indicador flutuante
  floatDamage(pontos);

  // Determina ícone e classe do feedback
  let fbClass, fbIcon, ptLabel;
  if (pontos === 20) {
    fbClass = 'good'; fbIcon = '🛡️';
    ptLabel = `<span class="pts">−20 de vida do Incidente!</span> `;
  } else if (pontos === 10) {
    fbClass = 'half'; fbIcon = '⚡';
    ptLabel = `<span class="pts-half">−10 de vida do Incidente</span> `;
  } else {
    fbClass = 'bad'; fbIcon = '💥';
    ptLabel = `<span class="pts-bad">+10 de vida do Incidente!</span> `;
  }

  const fb = document.getElementById('feedback');
  fb.className = 'feedback panel show ' + fbClass;
  fb.innerHTML = `
    <span class="emoji">${fbIcon}</span>
    <span>
      ${ptLabel}
      ${cen.opcoes[i].feedback}
      ${pontos < 20
        ? `<br/><em style="color:var(--gold-soft)">Melhor resposta: ${LETRAS[bestIndex]}) ${cen.opcoes[bestIndex].texto}</em>`
        : ''}
    </span>
  `;

  // Botão próximo
  const footer = document.getElementById('footer');
  const isLast = state.questionIndex >= state.questions.length - 1;
  const venceu = state.vidaIncidente <= 0;

  if (venceu) {
    footer.innerHTML = `<button class="btn btn-win-pulse" onclick="screenFinale()">🎉 Incidente Derrotado! Ver Resultado</button>`;
  } else if (isLast) {
    footer.innerHTML = `<button class="btn" onclick="screenFinale()">Ver Resultado Final 📊</button>`;
  } else {
    footer.innerHTML = `<button class="btn" onclick="nextQuestion()">Próxima Pergunta ▶</button>`;
  }
}

function nextQuestion() {
  state.questionIndex++;
  screenAction();
}

function floatDamage(pontos) {
  const hero = document.querySelector('.action-hero');
  const r = hero
    ? hero.getBoundingClientRect()
    : { left: window.innerWidth / 2, top: 120, width: 0 };
  const el = document.createElement('div');
  el.className = 'float-pts' + (pontos > 0 ? '' : ' float-bad');
  el.textContent = pontos > 0 ? `−${pontos} ❤️` : `+${Math.abs(pontos)} ❤️`;
  el.style.left = (r.left + r.width / 2 - 30) + 'px';
  el.style.top  = (r.top + 40) + 'px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1300);
}

// ====================================================================
//  TELA FINAL — resultado da batalha
// ====================================================================
function screenFinale() {
  showHUD(false);
  clearInterval(state.timer);

  const venceu = state.vidaIncidente <= 0;
  const party  = PERSONAGENS.map(p => pixelSVG(p.id, { pixel: 5 })).join('');

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
  const party    = document.querySelector('.battle-party');

  if (party) party.classList.add('battle-charging');

  setTimeout(() => {
    if (party) party.classList.remove('battle-charging');

    const totalShots = Math.max(PERSONAGENS.length, 7);
    let shot = 0;

    const fireNext = () => {
      if (shot >= totalShots) {
        setTimeout(() => revealResult(venceu, incident), 800);
        return;
      }
      const pIdx = shot % PERSONAGENS.length;
      const cor  = PERSONAGENS[pIdx].cor;

      const charSvgs = document.querySelectorAll('.battle-party .pixel-svg');
      charSvgs.forEach((el, i) => el.style.filter = i === pIdx ? `drop-shadow(0 0 8px ${cor})` : 'none');

      shootBeam(stage, cor);

      if (incident) {
        incident.classList.remove('shake');
        void incident.offsetWidth;
        incident.classList.add('shake');
      }
      if (stage) {
        const flash = document.createElement('div');
        flash.style.cssText = `position:absolute;inset:0;background:${cor};opacity:0;border-radius:inherit;pointer-events:none;transition:opacity .08s`;
        stage.appendChild(flash);
        requestAnimationFrame(() => { flash.style.opacity = '0.22'; });
        setTimeout(() => { flash.style.opacity = '0'; setTimeout(() => flash.remove(), 120); }, 80);
      }

      shot++;
      setTimeout(fireNext, shot < PERSONAGENS.length ? 420 : 300);
    };

    setTimeout(fireNext, 300);
  }, 900);
}

function shootBeam(stage, cor) {
  if (!stage) return;
  cor = cor || '#f1b30b';
  const beam = document.createElement('div');
  beam.className = 'beam';
  beam.style.setProperty('--beam-color', cor);
  const r      = stage.getBoundingClientRect();
  const startY = r.height * (0.42 + Math.random() * 0.22);
  beam.style.left       = '18%';
  beam.style.top        = startY + 'px';
  beam.style.width      = '0px';
  beam.style.background = `linear-gradient(90deg, transparent, ${cor}cc, #fff, ${cor}cc)`;
  beam.style.boxShadow  = `0 0 8px 2px ${cor}88`;
  stage.appendChild(beam);
  requestAnimationFrame(() => {
    beam.style.transition = 'width .3s cubic-bezier(.2,.8,.4,1)';
    beam.style.width = '58%';
  });
  setTimeout(() => {
    beam.style.transition = 'opacity .15s';
    beam.style.opacity = '0';
    setTimeout(() => beam.remove(), 200);
  }, 350);
}

function buildRankingHTML() {
  const ranking = PERSONAGENS
    .map(p => ({ p, dano: state.danosPorChar[p.id] || 0 }))
    .sort((a, b) => b.dano - a.dano);

  const mvp = ranking[0];

  const cards = ranking.map(({ p, dano }, i) => {
    const isWinner = i === 0;
    const danoLabel = dano > 0
      ? `<span style="color:var(--green)">−${dano} HP</span>`
      : dano < 0
        ? `<span style="color:var(--red)">+${Math.abs(dano)} HP ao incidente</span>`
        : `<span style="color:var(--ink-soft)">0 HP</span>`;
    return `
      <div class="rank-card panel ${isWinner ? 'rank-mvp' : ''}" style="--char:${p.cor}; animation-delay:${i * 0.1}s">
        ${isWinner ? '<div class="rank-crown">👑 MVP</div>' : `<div class="rank-pos">#${i + 1}</div>`}
        ${pixelSVG(p.id, { pixel: 4, idle: false })}
        <div class="rank-name">${p.nome}</div>
        <div class="rank-dano">${danoLabel}</div>
      </div>`;
  }).join('');

  return `
    <div class="ranking-section">
      <div class="ranking-title">Dano causado ao Incidente</div>
      <div class="ranking-cards">${cards}</div>
      <p class="ranking-mvp-msg">
        Melhor desempenho: <strong style="color:${mvp.p.cor}">${mvp.p.nome}</strong>
        com <strong>${Math.max(0, mvp.dano)} HP</strong> de dano ao Incidente
      </p>
    </div>`;
}

function revealResult(venceu, incident) {
  const box = document.getElementById('finale-result');
  const total = state.questions.length;
  const qRespondidas = Math.min(state.questionIndex + 1, total);
  const ranking = buildRankingHTML();

  if (venceu) {
    if (incident) incident.classList.add('flee');
    launchConfetti();
    box.innerHTML = `
      <div class="result win">INCIDENTE DERROTADO!</div>
      <div class="score-line">O incidente foi contido em <strong>${qRespondidas}</strong> de ${total} perguntas</div>
      <p class="message">
        Não pela força de um só — mas porque cada especialista comunicou,
        pediu ajuda e agiu junto. É exatamente assim que <strong>a gente vai de turma</strong>. 🎉
      </p>
      ${ranking}
      <button class="btn secondary" onclick="screenKaiju()">Jogar Novamente 🔁</button>
    `;
  } else {
    if (incident) incident.classList.add('victory-incident');
    const vidaRestante = Math.max(0, state.vidaIncidente);
    box.innerHTML = `
      <div class="result lose">INCIDENTE PERSISTE...</div>
      <div class="score-line">O incidente ainda tem <strong>${vidaRestante} HP</strong> restante</div>
      <p class="message">
        O incidente resistiu desta vez. Cada decisão de ir de turma —
        comunicar, colaborar, pedir e dar ajuda — é o que transforma crises em vitórias. 💪
      </p>
      ${ranking}
      <button class="btn secondary" onclick="screenKaiju()">Tentar Novamente 🔁</button>
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

// ---------- Boot ------------------------------------------------------
makeStars();
// Injeta o SVG do incidente no HUD (pixelSVG só existe após characters.js carregar)
const _hudMonster = document.getElementById('hud-monster');
if (_hudMonster) _hudMonster.innerHTML = pixelSVG('incident', { pixel: 4, idle: false });
screenKaiju();
