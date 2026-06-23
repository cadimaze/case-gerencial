// ====================================================================
//  Pixel Art — renderizador e arte dos personagens corporativos
//  Grade maior (~14×20) para mais detalhe e clareza visual.
//  '.' = transparente. A largura é o max de todas as linhas.
// ====================================================================

const PALETTE_BASE = {
  k: '#241c33',  // contorno escuro
  s: '#f2c79b',  // pele
  S: '#d89e6e',  // pele sombra
  e: '#1a1033',  // olhos
  W: '#f5f5f5',  // branco
  m: '#c9d1d9',  // metal/prata
  M: '#8b95a1',  // metal sombra
  g: '#f1b30b',  // dourado/amarelo
  w: '#8a5a2b',  // madeira/marrom
  b: '#5e3a1c',  // marrom escuro
  h: '#3d2b1a',  // cabelo escuro
  n: '#56ccf2',  // azul claro
  r: '#d64545',  // vermelho
  q: '#34c759',  // verde código
  t: '#fdf6e3',  // creme
  C: '#1a1033',  // tela escura
  L: '#a0aab4',  // laptop/prata médio
  P: '#2d3748',  // painel escuro
};

// ===== ARTES ==========================================================

const ART = {

  // ------------------------------------------------------------------
  // DEV FRONT-END — capuz azul, segura laptop aberto com pixels coloridos
  // ------------------------------------------------------------------
  frontend: {
    palette: {
      o: '#2f80ed',  // capuz azul
      O: '#1c5fc0',  // capuz sombra
      h: '#3d2b1a',  // cabelo
      L: '#c9d1d9',  // laptop prata
      C: '#1a1033',  // tela escura
      r: '#e05c5c',  // pixel vermelho
      q: '#34c759',  // pixel verde
      n: '#56ccf2',  // pixel azul claro
      g: '#f1b30b',  // pixel amarelo
    },
    grid: [
      '....khhhhhhk....',     // cabelo topo
      '...khssssssshk...',    // rosto
      '...khsesssseshk..',    // olhos
      '...khssssssshk...',    // rosto baixo
      '....khhhhhhk....',     // queixo
      '.....oooooooo...',     // gola capuz
      '....oossssssoo..',     // pescoço + ombros
      '....ossssssso...',     // torso
      '...oLLLLLLLLoo..',    // laptop aberto topo
      '...oLCrqnCrqLoo.',    // tela: pixels coloridos
      '...oLCngrCngLoo.',    // tela linha 2
      '...oLCqCnqCqLoo.',    // tela linha 3
      '...oLLLLLLLLoo..',    // teclado laptop
      '....ooooooooo...',     // cintura
      '....oOOOOOOoo...',    // quadril
      '.....OOO.OOO....',    // pernas
      '.....OOO.OOO....',
      '.....OOO.OOO....',
      '....kkkkkkkkk...',    // sapatos
    ]
  },

  // ------------------------------------------------------------------
  // DEV BACK-END — moletom verde escuro, óculos, terminal com código
  // ------------------------------------------------------------------
  backend: {
    palette: {
      o: '#1f6b3e',  // moletom verde escuro
      O: '#144d2c',  // moletom sombra
      h: '#3d2b1a',  // cabelo
      f: '#9aa4b0',  // armação óculos
      C: '#0d1117',  // tela terminal
      q: '#34c759',  // código verde
      g: '#f1b30b',  // prompt amarelo
    },
    grid: [
      '....khhhhhhhk...',     // cabelo
      '...khssssssshk..',     // rosto
      '...khffsfsffhk..',     // óculos (f=armação)
      '...khfsesefhk...',     // olhos através dos óculos
      '...khssssssshk..',     // rosto baixo
      '....khhhhhhk....',     // queixo
      '.....oooooooo...',     // gola
      '....oossssssoo..',     // ombros
      '....oCCCCCCCoo..',     // terminal topo
      '....oCgCCCCCoo..',     // prompt $ amarelo
      '....oCqqqqCCoo..',     // código verde linha 1
      '....oCCqqCqCoo..',     // código linha 2
      '....oCCCCCCCoo..',     // terminal base
      '....ooooooooo...',     // cintura
      '....oOOOOOOoo...',    // quadril
      '.....OOO.OOO....',
      '.....OOO.OOO....',
      '.....OOO.OOO....',
      '....kkkkkkkkk...',
    ]
  },

  // ------------------------------------------------------------------
  // ENGENHEIRO DE DADOS — outfit roxo, segura gráfico de barras
  // ------------------------------------------------------------------
  dados: {
    palette: {
      o: '#7b2fbe',  // roupa roxa
      O: '#5a1f8f',  // roupa sombra
      h: '#3d2b1a',  // cabelo
      g: '#f1b30b',  // barra alta (ouro)
      r: '#e05c5c',  // barra média (vermelho)
      n: '#56ccf2',  // barra baixa (azul)
      C: '#0d1117',  // fundo gráfico
      W: '#f0f0f0',  // eixo do gráfico
    },
    grid: [
      '....khhhhhhhhk..',     // cabelo
      '...khssssssssshk.',    // rosto
      '...khsesssseshk..',    // olhos
      '...khssssssshk...',    // rosto baixo
      '....khhhhhhk....',     // queixo
      '.....oooooooo...',     // gola
      '....oossssssoo..',     // ombros
      '....ossssssso...',     // torso
      '...oCCCCCCCCoo..',    // fundo do gráfico topo
      '...oCCgCCrCCoo..',    // barras (g=alta, r=média)
      '...oCCgCCrCnoo..',    // barras crescendo
      '...oCCgCCrCnoo..',    // barras
      '...oCCgCgrCnoo..',    // barras mais completas
      '...oWWWWWWWWoo..',    // eixo X branco
      '....ooooooooo...',    // cintura
      '....oOOOOOOoo...',
      '.....OOO.OOO....',
      '.....OOO.OOO....',
      '.....OOO.OOO....',
      '....kkkkkkkkk...',
    ]
  },

  // ------------------------------------------------------------------
  // UX DESIGNER — outfit laranja, tablet com esboço na tela
  // ------------------------------------------------------------------
  ux: {
    palette: {
      o: '#c75000',  // outfit laranja
      O: '#9c3d00',  // outfit sombra
      h: '#1a1033',  // cabelo escuro (diferente dos outros)
      m: '#d0d7de',  // tablet prata
      W: '#f8f8f8',  // tela do tablet branca
      r: '#e05c5c',  // esboço vermelho/wireframe
      p: '#b388ff',  // esboço lilás
      y: '#f9e04b',  // stylus amarelo
    },
    grid: [
      '....khhhhhhhhk..',     // cabelo diferente (comprido)
      '....khhhhhhhkhk.',     // cabelo laterais
      '...khssssssshk..',     // rosto
      '...khsesssseshk.',     // olhos
      '...khssssssshk..',     // rosto baixo
      '....kkhhhhkk....',     // queixo
      '.....oooooooo...',     // gola
      '....oossssssoo..',     // ombros
      '....ossssssso...',     // torso
      '...ommmmmmmmoo..',    // tablet moldura
      '...omWWWWWWmoo..',    // tela branca
      '...omWrrrpWmoo..',    // esboço wireframe
      '...omWWrWpWmoo..',    // esboço linha 2
      '...ommmmmmmoo..',     // tablet base
      '....ooooooooo...',    // cintura
      '....oOOOOOOoo...',
      '.....OOO.OOO....',
      '.....OOO.OOO....',
      '.....OOO.OOO....',
      '....kkkkkkkkk...',
    ]
  },

  // ------------------------------------------------------------------
  // PRODUCT OWNER — outfit dourado, segura quadro kanban
  // ------------------------------------------------------------------
  po: {
    palette: {
      o: '#c9930a',  // outfit dourado
      O: '#9c6f06',  // outfit sombra
      h: '#3d2b1a',  // cabelo
      w: '#8a5a2b',  // madeira do quadro
      r: '#e05c5c',  // post-it vermelho
      n: '#56ccf2',  // post-it azul
      g: '#f1b30b',  // post-it amarelo
      q: '#34c759',  // post-it verde
      W: '#f8f8f8',  // fundo quadro
    },
    grid: [
      '....khhhhhhk....',     // cabelo
      '...khssssssshk..',     // rosto
      '...khsesssseshk.',     // olhos
      '...khssssssshk..',     // rosto baixo
      '....khhhhhhk....',     // queixo
      '.....oooooooo...',     // gola
      '....oossssssoo..',     // ombros
      '....ossssssso...',     // torso
      '...owwwwwwwwoo..',    // quadro kanban moldura
      '...owrrnnnggoo..',    // post-its linha 1
      '...owrrqnnggoo..',    // post-its linha 2
      '...owqqnrrggoo..',    // post-its linha 3
      '...owwwwwwwwoo..',    // base do quadro
      '....ooooooooo...',    // cintura
      '....oOOOOOOoo...',
      '.....OOO.OOO....',
      '.....OOO.OOO....',
      '.....OOO.OOO....',
      '....kkkkkkkkk...',
    ]
  },

  // ------------------------------------------------------------------
  // INCIDENTE EM PRODUÇÃO — servidor vermelho glitchado com chamas
  // ------------------------------------------------------------------
  incident: {
    palette: {
      o: '#c0392b',  // servidor vermelho
      O: '#8e2820',  // servidor sombra
      F: '#ff6b35',  // chama laranja
      f: '#ffd93d',  // chama amarela
      g: '#f1b30b',  // olhos (brilho amarelo)
      Y: '#ffe066',  // íris amarela
      C: '#0d1117',  // tela preta
      q: '#34c759',  // texto verde (ERROR)
      r: '#ff5a5a',  // detalhes vermelhos brilhantes
      W: '#f0f0f0',  // luz branca
      P: '#2d3748',  // painel lateral
      M: '#8b95a1',  // metal
    },
    grid: [
      // chamas no topo
      '......fFf.FfF.fFf......',
      '.....fFFFF.FFFfFFF.....',
      '....fFFfFFFFFFFfFF.....',
      // corpo do servidor (caixa grande)
      '...kkkkkkkkkkkkkkkkk...',
      '...kooooooooooooooook...',
      '...kooooooooooooooook...',
      '...kooYYYooooYYYooook...',  // olhos
      '...koYgYgYooYgYgYoook...',  // pupila
      '...kooYYYooooYYYooook...',  // olhos baixo
      '...kooooooooooooooook...',
      '...kooCCCCCCCCCCCoook...',  // tela preta
      '...kooCrrrrrrrrCCook...',   // barra ERROR
      '...kooCCqCqCqCCCCook...',   // texto verde
      '...kooCCCCCCCCCCCoook...',
      '...kooooooooooooooook...',
      '...kkkkkkkkkkkkkkkkk...',
      // base/pés do servidor
      '....PPPPPkkPPPPkPPPP...',
      '....PPP..kk...kk..PPP..',
      '....kkk..........kkk...',
    ]
  }
};

// ===== RENDERIZADOR ===================================================

function pixelSVG(key, { pixel = 10, idle = true, className = '' } = {}) {
  const art = ART[key];
  if (!art) return '';
  const palette = Object.assign({}, PALETTE_BASE, art.palette || {});
  const grid = art.grid;
  const width = Math.max(...grid.map(r => r.length));
  const height = grid.length;

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
