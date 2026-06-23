// ====================================================================
//  Pixel Art — personagens corporativos redesenhados
//  Grade 18×34 — silhuetas únicas, proporções verticais,
//  rostos distintos, props detalhados com sombreamento
// ====================================================================

const PALETTE_BASE = {
  k: '#1a1033',  // contorno
  s: '#f5c9a0',  // pele clara
  S: '#d89e6e',  // pele sombra
  D: '#b07345',  // pele sombra profunda
  e: '#1a1033',  // pupila
  i: '#4a6fa5',  // íris azul
  E: '#2a1a0a',  // sobrancelha
  W: '#ffffff',  // branco
  w: '#e8e8e8',  // branco sombra
  m: '#c9d1d9',  // metal/prata
  M: '#8b95a1',  // metal sombra
  g: '#f1b30b',  // dourado
  G: '#b8890a',  // dourado sombra
  r: '#e05c5c',  // vermelho
  R: '#a83030',  // vermelho sombra
  q: '#34c759',  // verde
  Q: '#1f8a3d',  // verde sombra
  n: '#56ccf2',  // azul claro
  N: '#2d86b0',  // azul escuro
  h: '#2a1f1a',  // cabelo preto
  H: '#4d3828',  // cabelo reflexo
  b: '#5e3a1c',  // marrom escuro
  C: '#0d1117',  // tela preta
  t: '#fef3c7',  // creme/dente
  p: '#f472b6',  // rosa
  P: '#c026a0',  // rosa escuro
  v: '#c084fc',  // lilás
  V: '#7c3aed',  // roxo profundo
};

const ART = {

  // ================================================================
  // DEV FRONT-END
  // Silhueta: fones de ouvido GRANDES saindo lateralmente
  // Cabelo espetado. Hoodie azul. Laptop com pixels RGB na tela.
  // ================================================================
  frontend: {
    palette: {
      o: '#2f80ed',  // hoodie azul
      O: '#1c5fc0',  // hoodie sombra
      A: '#6db3f5',  // hoodie highlight
      f: '#1a1a2e',  // fone escuro
      F: '#2d2d5e',  // fone highlight
      L: '#dce3ea',  // laptop prata
      l: '#a0aab4',  // laptop sombra
      C: '#0d1117',  // tela
    },
    grid: [
      // ── cabelo espetado ──────────────────────
      '....khhHhhhHhhhk....',   // topo espetado
      '...khhHhHhHhHhhhk...',  // espetos
      // ── cabeça com fones saindo dos lados ────
      'ffk.khhsssssshhk.kff',  // fone esq | rosto | fone dir
      'fFk.khsssssssshk.kFf',  // fone corpo
      'fFk.khsEssssEshk.kFf',  // sobrancelhas
      'fFk.khssiessieshk.kFf', // olhos com íris
      'fFk.khssssssssshk.kFf', // mid face
      'fFk.khssDssssDshk.kFf', // nariz
      'ffk.khssSttsssshk.kff', // boca / dente
      '....khhhhhhhhhhk.....',  // queixo
      // ── pescoço ──────────────────────────────
      '.....ksssssssk......',
      // ── hoodie + laptop ──────────────────────
      '....oAoossssooAo....',  // gola
      '...oAooossssooooAo...',  // ombros
      '..oAoossssssssooAo..',   // torso com pele braços
      '..oAoLLLLLLLLLooAo..',  // laptop borda topo
      '..oAoLCrrqqnnppLooAo',  // tela: pixels R G B P
      '..oAoLCqnnpprrqLooAo',  // pixels linha 2
      '..oAoLCnnpprqgnLooAo',  // pixels linha 3
      '..oAoLCqqrrnnppLooAo',  // pixels linha 4
      '..oAoLlllllllllooAo..',  // teclado
      '...oAoooooooooooAo...',  // cintura
      // ── pernas ───────────────────────────────
      '....OOOOOOOOOOOo.....',  // quadril
      '.....OO.......OO.....',  // coxas
      '.....OO.......OO.....',
      '.....OO.......OO.....',
      '.....OO.......OO.....',
      '.....OO.......OO.....',
      '....kOOk.....kOOk....',  // tornozelo
      '...kkkkkk...kkkkkk...',  // sapatos
    ]
  },

  // ================================================================
  // DEV BACK-END
  // Silhueta: óculos REDONDOS bem marcados, cabelo curto lateral
  // Moletom verde escuro. Terminal com código verde e prompt.
  // ================================================================
  backend: {
    palette: {
      o: '#1f6b3e',  // moletom verde
      O: '#144d2c',  // verde sombra
      A: '#2d9e5c',  // verde highlight
      G2:'#3dba72',  // verde suave óculos/reflexo
      f: '#9aa4b0',  // armação óculos prata
      F: '#dce3ea',  // lente óculos
      C: '#0d1117',  // terminal tela
      q: '#39ff6a',  // código verde brilhante
      x: '#1a8c40',  // código verde sombra
      g: '#ffd166',  // prompt amarelo ($)
      c: '#56ccf2',  // comentário azul
      d: '#a0b0c8',  // barba / detalhe
    },
    grid: [
      // ── cabelo curto lateral, reto no topo ───
      '....khhhhhhhhhhk.....',  // topo reto
      '...khhhhhhhhhhhhhk...',  // cabelo
      // ── rosto com óculos redondos grandes ────
      '...khssssssssssshk...',  // testa
      '...khsEEsssssEEshk...',  // sobrancelhas
      '...khsfffssfffffshk..',  // armação óculos — linha topo
      '...khsFFesFseFfshk...',  // lentes + olhos
      '...khsfffssfffffshk..',  // armação óculos — linha base
      '...khssssssssssshk...',  // entre óculos e boca
      '...khssSsssssSsshk...',  // nariz
      '...khssdddddddshk....',  // barba rala
      '....khhhhhhhhhhk.....',  // queixo
      // ── pescoço ──────────────────────────────
      '.....sssssssss.......',
      // ── moletom + terminal ───────────────────
      '....oAoossssooAo.....',  // gola
      '...oAooossssooooAo...',  // ombros
      '..oAoooooooooooooAo..',  // torso
      '..oAooCCCCCCCCCoooAo',  // terminal moldura
      '..oAooCgCCCCCCCCoooAo', // prompt $
      '..oAooCqxxqxqqCCoooAo', // código verde
      '..oAooCxqqxCxqxCoooAo', // código linha 2
      '..oAooCcCcCcCcCCoooAo', // comentário azul
      '..oAooCCCCCCCCCCoooAo', // terminal base
      '...oAoooooooooooAo...',  // cintura
      // ── pernas ───────────────────────────────
      '....OOOOOOOOOOOo.....',
      '.....OO.......OO.....',
      '.....OO.......OO.....',
      '.....OO.......OO.....',
      '.....OO.......OO.....',
      '.....OO.......OO.....',
      '....kOOk.....kOOk....',
      '...kkkkkk...kkkkkk...',
    ]
  },

  // ================================================================
  // ENGENHEIRO DE DADOS
  // Silhueta: AFRO grande, bem mais largo que os ombros
  // Outfit roxo. Clipboard com gráfico de barras colorido.
  // ================================================================
  dados: {
    palette: {
      o: '#7b2fbe',  // roupa roxa
      O: '#5a1f8f',  // roxa sombra
      A: '#a85de0',  // roxa highlight
      h: '#1a1a1a',  // afro preto
      H: '#3d3020',  // afro reflexo
      J: '#2d2010',  // afro sombra profunda
      B: '#7c5c3a',  // clipboard borda
      c: '#f5f0e8',  // clipboard fundo creme
      G2:'#f1b30b',  // barra amarela
      Z: '#b8890a',  // barra amarela sombra
      r: '#e05c5c',  // barra vermelha
      n: '#56ccf2',  // barra azul
      q: '#34c759',  // barra verde
      L: '#ff6b35',  // linha tendência laranja
      x: '#e0e0e0',  // eixo do gráfico
    },
    grid: [
      // ── afro MUITO largo ─────────────────────
      '.kJhHhHhHhHhHhHhHhJk',  // afro topo
      'kJhHhHhHhHhHhHhHhHhJk', // afro largo (22 wide!)
      'kJhHssssssssssssHhHJk', // afro encontra testa
      'kJhHssssssssssssHhHJk', // testa
      // ── rosto ────────────────────────────────
      'kJhHsEEsssssssEEsHhJk', // sobrancelhas
      'kJhHssiesissiesisHhJk', // olhos com íris
      'kJhHssssssssssssHhJk',  // mid face
      'kJhHsssSDsssDSssHhJk',  // nariz com sombra
      'kJhHssssttttssssHhJk',  // sorriso largo
      '.kJhHhhhhhhhhhhHhJk.',  // queixo
      // ── pescoço ──────────────────────────────
      '.......sssssss.......',
      // ── roupa + clipboard ────────────────────
      '......oAoooooAo......',  // gola
      '.....oAooooooooAo....',  // ombros
      '....oAooBBBBBBooooAo.',  // clipboard moldura
      '....oAooBccccccBooAo.',  // clipboard fundo
      '....oAooBcG2G2crccBooAo', // barras: amarela e vermelha
      '....oAooBcG2G2crccnBooAo',// barras + azul
      '....oAooBcG2ZZcrcZnBooAo',// sombreamento barras
      '....oAooBcG2G2crZcnqBooAo',// verde entra
      '....oAooBcLLLLLLLLBooAo.',  // linha tendência
      '....oAooBcxxxxxxxxBooAo.',  // eixo X
      '....oAooBBBBBBBBBBooAo.',  // clipboard base
      '.....oAooooooooooAo.....',  // cintura
      // ── pernas ───────────────────────────────
      '......OOOOOOOOOOo......',
      '.......OO.......OO.....',
      '.......OO.......OO.....',
      '.......OO.......OO.....',
      '.......OO.......OO.....',
      '......kOOk.....kOOk....',
      '.....kkkkkk...kkkkkk...',
    ]
  },

  // ================================================================
  // UX DESIGNER
  // Silhueta: coque ALTO saindo do topo da cabeça (bump visível)
  // Outfit laranja. Tablet com wireframe. Stylus na mão.
  // ================================================================
  ux: {
    palette: {
      o: '#c75000',  // outfit laranja
      O: '#9c3d00',  // laranja sombra
      A: '#e87034',  // laranja highlight
      h: '#1a1033',  // cabelo preto
      H: '#2d1a4d',  // cabelo roxo-escuro
      u: '#3d1a5a',  // coque escuro
      U: '#6b3a8a',  // coque highlight
      m: '#dce3ea',  // tablet borda
      c: '#f8fbff',  // tablet tela branca
      x: '#b0bec9',  // tablet sombra
      r: '#e05c5c',  // wireframe coral
      R: '#c03030',  // wireframe sombra
      n: '#56ccf2',  // wireframe azul
      v: '#c084fc',  // wireframe lilás
      y: '#fde68a',  // stylus amarelo
      Y: '#c9930a',  // stylus sombra
    },
    grid: [
      // ── coque alto (bump acima da cabeça) ────
      '......kuUUUUUUuk......',  // coque topo
      '.....kuUuuuuuuuUuk....',  // coque corpo
      '.....kUuhhhhhhhuUk....',  // coque base + transição
      // ── cabeça ───────────────────────────────
      '....khhhhhsssshhhhk...',  // testa
      '....khhsssssssssshhk..',  // rosto topo
      '....khhssEsssssEsshhk.',  // sobrancelhas finas
      '....khhsssiessiesshhk.',  // olhos amendoados
      '....khhssssssssssshhk.',  // mid face
      '....khhsssDssssDssshhk',  // nariz
      '....khhssssWWWsssshhk.',  // sorriso
      '.....khhhhhhhhhhhhk...',  // queixo
      // ── pescoço ──────────────────────────────
      '......ssssssssss......',
      // ── outfit + tablet ──────────────────────
      '.....oAoossssooAo.....',  // gola
      '....oAooossssooooAo...',  // ombros
      '...oAooommmmmmmoooAo...',  // tablet moldura topo
      '...oAoooxccccccxooAo...',  // tablet tela
      '...oAoooxcrrrrrcxooAo..',  // wireframe retângulo
      '...oAoooxcrvvvrcxooAo..',  // wireframe interior lilás
      '...oAoooxcrnnnrcxooAo..',  // wireframe + azul
      '...oAoooxcccccccxooAo..',  // tela base
      '...oAooommmmmmmoooAo...',  // tablet moldura baixo
      '....oAoossssssssooAo...',  // mão + stylus
      '.....yYYYYYYYYYYYy.....',  // stylus atravessado
      '.....oAoooooooooAo.....',  // cintura
      // ── pernas ───────────────────────────────
      '......OOOOOOOOOOo......',
      '.......OO.......OO.....',
      '.......OO.......OO.....',
      '.......OO.......OO.....',
      '.......OO.......OO.....',
      '......kOOk.....kOOk....',
      '.....kkkkkk...kkkkkk...',
    ]
  },

  // ================================================================
  // TECH LEAD
  // Silhueta: cabelo POMPADOUR para cima + polo elegante
  // com emblema. Laptop aberto com diagrama de arquitetura.
  // ================================================================
  po: {
    palette: {
      o: '#c9930a',  // polo dourado
      O: '#9c6f06',  // dourado sombra
      A: '#e8b535',  // dourado highlight
      h: '#3d2b1a',  // cabelo marrom
      H: '#6b4226',  // cabelo claro (pompadour)
      Z: '#9e6630',  // cabelo sombra
      L: '#dce3ea',  // laptop prata
      l: '#b0bec9',  // laptop sombra
      C: '#0d1117',  // tela preta
      n: '#56ccf2',  // box azul (componente)
      N: '#2d86b0',  // box azul sombra
      q: '#34c759',  // box verde
      Q: '#1f8a3d',  // box verde sombra
      r: '#e05c5c',  // alerta vermelho
      x: '#f0f4f8',  // seta/conexão branca
      g: '#f1b30b',  // emblema polo
    },
    grid: [
      // ── pompadour (inclinado para cima) ──────
      '...kZhHHHHHHHHHHHHk...',  // pompadour topo
      '..kZhhHHHHHHHHHHHhhk..',  // pompadour corpo
      '..kZhhhHHHHHHHHhhhk...',  // transição
      // ── cabeça ───────────────────────────────
      '..khhhsssssssssshhk....',  // testa
      '..khssEEEsssEEEssshk...',  // sobrancelhas marcadas
      '..khsssieesssieessshk..',  // olhos com íris
      '..khssssssssssssssshk..',  // mid face
      '..khssssDssssDsssshk...',  // nariz
      '..khssssWWWWWWssshk....',  // sorriso confiante
      '...khhhhhhhhhhhhhk.....',  // queixo
      // ── pescoço ──────────────────────────────
      '.....sssssssss.......',
      // ── polo com emblema + laptop ─────────────
      '....oAoossssooAo.....',   // gola polo (V-neck)
      '...oAooossssooooAo...',   // ombros
      '..oAoooogooooooooAo..',   // emblema no peito
      '..oAooooooooooooooAo.',   // torso
      '..oAooLLLLLLLLLLoooAo',  // laptop borda
      '..oAooLCCCCCCCCCLoooAo', // tela topo
      '..oAooLCnnnxqqqCLoooAo', // box azul → box verde
      '..oAooLCnxnxqxqCLoooAo', // interior dos boxes
      '..oAooLCnnnxqqqCLoooAo', // box base
      '..oAooLCCxxxxxCCLoooAo', // seta conectando
      '..oAooLCCCrrrCCCLoooAo', // alerta vermelho
      '..oAoolLLLLLLLLlloooAo', // teclado
      '...oAoooooooooooAo.....',  // cintura
      // ── pernas ───────────────────────────────
      '....OOOOOOOOOOOo.....',
      '.....OO.......OO.....',
      '.....OO.......OO.....',
      '.....OO.......OO.....',
      '.....OO.......OO.....',
      '....kOOk.....kOOk....',
      '...kkkkkk...kkkkkk...',
    ]
  },

  // ================================================================
  // INCIDENTE EM PRODUÇÃO
  // Servidor rack GRANDE com chamas detalhadas em 3 tons,
  // olhos irados com brilho, tela ERROR 500, grade de ventilação,
  // parafusos visíveis, base com pés
  // ================================================================
  incident: {
    palette: {
      o: '#c0392b',  // servidor vermelho
      O: '#8e2820',  // sombra
      A: '#e05040',  // highlight
      F: '#ff6b35',  // chama laranja
      f: '#ffd93d',  // chama amarela
      Y: '#fff8d0',  // chama ponta clara
      C: '#0d1117',  // tela preta
      q: '#39ff6a',  // texto verde
      r: '#ff5a5a',  // texto/barra vermelha
      g: '#ffd166',  // olho amarelo brilhante
      G: '#c9930a',  // olho âmbar
      X: '#ff2200',  // olho vermelho (raiva)
      P: '#2d3748',  // painel lateral escuro
      m: '#718096',  // parafuso
      M: '#4a5568',  // painel slot
      w: '#f0f4f8',  // texto ERROR branco
      L: '#1a2533',  // slot ventilação
      Z: '#e8edf2',  // slot ventilação claro
    },
    grid: [
      // ── chamas em 3 tons ─────────────────────
      '....YYYff..ffYYY.....',   // chamas topo
      '...YfFff.fFff.fFfY...',  // chamas meio
      '..YfFFFffFFFffFFFfY..',  // chamas largas
      '.YfFFfYfYfFFFfYfYfFfY.', // chamas elaboradas
      // ── topo do servidor ─────────────────────
      '.kkkkkkkkkkkkkkkkkkk.',  // borda topo
      '.koAoooooooooooooook.',  // rack topo com highlight
      '.kmmmmmmmmmmmmmmmmk.',   // faixa parafusos
      // ── olhos grandes e irados ───────────────
      '.koAooooooooooooook.',   // rack
      '.koAoggggXooXggggook.',  // olhos: íris amarela, pupila vermelha
      '.koAogGgGXooXgGgGook.',  // detalhe olho
      '.koAoggggXooXggggook.',  // olho base
      '.koAooooooooooooook.',   // entre olhos e tela
      // ── tela ERROR 500 ───────────────────────
      '.koAooCCCCCCCCCCCoook.', // tela topo
      '.koAooCCwwwwwwwwCCoook.',// ERROR em branco
      '.koAooCCCCCCCCCCCoook.', // tela linha
      '.koAooCqCqCqCqCCCCoook.',// código verde
      '.koAooCrrrrrrrrrCCoook.',// barra vermelha
      '.koAooCCCCCCCCCCCoook.', // tela base
      // ── grade de ventilação ──────────────────
      '.koAooLZLZLZLZLZLoook.', // grade slot
      '.koAooLZLZLZLZLZLoook.', // grade slot
      // ── base do rack ─────────────────────────
      '.koAoooooooooooooook.',
      '.kOkkkkkkkkkkkkkkkOk.',  // base rack
      // ── pés ──────────────────────────────────
      '..PPPPPPk.......kPPPPP.',
      '..PPP....k.....k....PPP',
      '..kkk...............kkk',
    ]
  }
};

// ====================================================================
//  Renderizador
// ====================================================================
function pixelSVG(key, { pixel = 9, idle = true, className = '' } = {}) {
  const art = ART[key];
  if (!art) return '';
  const palette = Object.assign({}, PALETTE_BASE, art.palette || {});
  const grid    = art.grid;
  const width   = Math.max(...grid.map(r => r.length));
  const height  = grid.length;

  let rects = '';
  for (let y = 0; y < height; y++) {
    const row = grid[y];
    for (let x = 0; x < row.length; x++) {
      const ch = row[x];
      if (ch === '.' || ch === ' ') continue;
      const color = palette[ch];
      if (!color) continue;
      rects += `<rect x="${x}" y="${y}" width="1" height="1" fill="${color}"/>`;
    }
  }

  const w = width * pixel;
  const h = height * pixel;
  const idleClass = idle ? 'pix-idle' : '';
  return `<svg class="pixel-svg ${idleClass} ${className}" viewBox="0 0 ${width} ${height}" width="${w}" height="${h}" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg" style="image-rendering:pixelated">${rects}</svg>`;
}
