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
  timer:         null
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

  // cor varia: cheio = vermelho, quase vazio = amarelo
  if (pct > 60)      hudBar.style.background = 'linear-gradient(90deg,#c0392b,#e74c3c)';
  else if (pct > 30) hudBar.style.background = 'linear-gradient(90deg,#e74c3c,#ff9a3c)';
  else               hudBar.style.background = 'linear-gradient(90deg,#ff9a3c,var(--gold))';
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
//  TELA 0 — KAIJU INTRO (o incidente chega como um monstro)
// ====================================================================
function screenKaiju() {
  showHUD(false);

  const heroesSmall = PERSONAGENS.map(p =>
    `<div class="kaiju-hero-wrap" style="--char:${p.cor}">${pixelSVG(p.id, { pixel: 5, idle: true })}</div>`
  ).join('');

  // Se um GIF externo for fornecido, ele aparece; senão usa a cena CSS
  setScreen(`
    <section class="screen kaiju-intro">

      <!-- CENA ANIMADA -->
      <div class="kaiju-scene">
        <!-- Tenta carregar GIF externo; se falhar, mostra a cena CSS -->
        <img class="kaiju-gif" src="assets/kaiju-scene.gif"
             onerror="this.style.display='none'; document.getElementById('kaiju-css-scene').style.display='flex';"
             alt="Incidente em Produção como Kaiju" />

        <div class="kaiju-css-scene" id="kaiju-css-scene">
          <!-- Chamas de fundo -->
          <div class="kaiju-flames">
            <div class="flame f1"></div><div class="flame f2"></div>
            <div class="flame f3"></div><div class="flame f4"></div>
            <div class="flame f5"></div>
          </div>
          <!-- Cidade destruída -->
          <div class="kaiju-city">
            <div class="building b1"></div>
            <div class="building b2"></div>
            <div class="building b3 crumbling"></div>
            <div class="building b4"></div>
            <div class="building b5 crumbling"></div>
            <div class="building b6"></div>
          </div>
          <!-- Monstro Incidente (SVG grande) -->
          <div class="kaiju-monster">
            ${pixelSVG('incident', { pixel: 14, idle: false })}
          </div>
          <!-- Heróis observando de baixo -->
          <div class="kaiju-heroes-row">
            ${heroesSmall}
          </div>
        </div>
      </div>

      <!-- TEXTO EXPLICATIVO -->
      <div class="kaiju-text panel">
        <h1 class="pixel-title kaiju-title">INCIDENTE EM<br/>PRODUÇÃO</h1>
        <p class="kaiju-subtitle">O monstro que nenhum sistema quer enfrentar</p>

        <div class="kaiju-evils">
          <div class="evil-item">
            <span class="evil-icon">💸</span>
            <span><strong>Prejuízo imediato</strong> — cada minuto de sistema fora do ar é receita perdida e cliente insatisfeito</span>
          </div>
          <div class="evil-item">
            <span class="evil-icon">🔥</span>
            <span><strong>Pressão extrema</strong> — todo mundo olhando, o relógio correndo e as decisões pesadas demais para um só carregar</span>
          </div>
          <div class="evil-item">
            <span class="evil-icon">🔗</span>
            <span><strong>Efeito cascata</strong> — um serviço fora derruba outros, e quem não sabe do problema não pode ajudar</span>
          </div>
          <div class="evil-item">
            <span class="evil-icon">😰</span>
            <span><strong>Paralisia por isolamento</strong> — quando cada especialista age sozinho, o incidente cresce. Só juntos ele cai.</span>
          </div>
        </div>

        <div class="kaiju-why panel">
          <p class="kaiju-why-title">Por que a gente vai de turma?</p>
          <p>Incidente em produção não se vence com o herói solitário. Vence-se com <strong>comunicação rápida</strong>, <strong>decisões coletivas</strong> e <strong>cada especialista confiando nos outros</strong>. É o pilar <em>Vai de Turma</em> em ação — e é exatamente o que vocês vão praticar agora.</p>
        </div>

        <div style="text-align:center; margin-top:24px">
          <button class="btn btn-kaiju" onclick="screenRoster()">
            ⚔️ Aceitar o Desafio
          </button>
        </div>
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
        Cinco especialistas. Trinta decisões. Um incidente para derrotar.<br/>
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
  // Permite que a vida suba acima do máximo (respostas erradas)
  state.vidaMaxima = Math.max(state.vidaMaxima, state.vidaIncidente);

  const opEls = document.querySelectorAll('.option');
  opEls.forEach((el, idx) => {
    el.classList.add('locked');
    if (idx === bestIndex)  el.classList.add('correct');
    else if (idx === i)     el.classList.add(pontos === 10 ? 'half' : 'wrong');
    else                    el.classList.add('dim');
  });

  updateHUD();

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

function revealResult(venceu, incident) {
  const box = document.getElementById('finale-result');
  const total = state.questions.length;
  const qRespondidas = Math.min(state.questionIndex + 1, total);

  if (venceu) {
    if (incident) incident.classList.add('flee');
    launchConfetti();
    box.innerHTML = `
      <div class="result win">INCIDENTE DERROTADO!</div>
      <div class="score-line">O incidente foi contido em <strong>${qRespondidas}</strong> de ${total} perguntas</div>
      <p class="message">
        O Incidente em Produção foi vencido! Não pela força de um só —
        mas porque cada especialista comunicou, pediu ajuda e agiu junto.
        É exatamente assim que <strong>a gente vai de turma</strong>. 🎉
      </p>
      <button class="btn secondary" onclick="screenKaiju()">Jogar Novamente 🔁</button>
    `;
  } else {
    if (incident) incident.classList.add('victory-incident');
    const vidaRestante = Math.max(0, state.vidaIncidente);
    box.innerHTML = `
      <div class="result lose">INCIDENTE PERSISTE...</div>
      <div class="score-line">O incidente ainda tem <strong>${vidaRestante}</strong> pontos de vida</div>
      <div class="score-line">A turma respondeu todas as <strong>${total}</strong> perguntas sem zerar a vida do monstro</div>
      <p class="message">
        O incidente resistiu desta vez. A lição fica: cada decisão de
        ir de turma — comunicar, colaborar, pedir e dar ajuda — é o que
        transforma crises em vitórias coletivas. Bora tentar de novo! 💪
      </p>
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
screenKaiju();
