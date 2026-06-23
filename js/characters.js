// ====================================================================
//  Pixel Art — renderizador e arte dos personagens
//  Cada arte é um mapa de grade. Cada caractere = uma cor da paleta.
//  '.' ou ' ' = transparente. A largura é calculada automaticamente.
// ====================================================================

// Paleta base compartilhada (cada arte pode sobrescrever chaves)
const PALETTE_BASE = {
  k: '#241c33', // contorno escuro
  s: '#f2c79b', // pele
  S: '#d89e6e', // pele sombra
  e: '#241c33', // olhos
  W: '#f5f5f5', // branco
  m: '#c9d1d9', // metal/prata
  M: '#8b95a1', // metal sombra
  g: '#f1b30b', // dourado
  w: '#8a5a2b', // madeira
  b: '#5e3a1c', // couro/marrom escuro
  h: '#6b4226', // cabelo/barba marrom
  n: '#cfeede', // corda/branco-verde
  r: '#d64545', // vermelho
  q: '#5aa469', // pele orc (verde)
  Q: '#3f7d4f', // pele orc sombra
  t: '#fdf6e3'  // presa/tusk
};

// ----- Artes (cada string é uma linha) ---------------------------------

const ART = {
  bardo: {
    palette: { o: '#2f80ed', O: '#1c5fc0', h: '#a8642f' },
    grid: [
      '.....oooooo',
      '....oooooooo',
      '...oooooooooo',
      '...hhhhhhhhhh',
      '..hssssssssh',
      '..hsessssesh',
      '..hssssssssh',
      '..hhhhhhhhhh',
      '...hhhhhhhh',
      '..bbboooobbb',
      '.wwboooooobww',
      '.wwwboooobwww',
      '..wwwwbbwwww',
      '...OOOOOOOO',
      '...OO....OO',
      '..kkk....kkk'
    ]
  },

  arqueiro: {
    palette: { o: '#27ae60', O: '#1c8049', h: '#e8d9a0' },
    grid: [
      '....oooooo',
      '...oooooooo',
      '..oooooooooo',
      '..ohhhhhhho',
      '.sshhhhhhhss',
      '..hsessssesh',
      '..hssssssssh',
      'w..oooooooo',
      'n..oOooooOo',
      'w..bOooooOb',
      'w...oooooo',
      'w...OOOOOO',
      '....OO..OO',
      '...kkk..kkk'
    ]
  },

  mago: {
    palette: { o: '#8e44ad', O: '#6c2f86', g: '#f1d44b' },
    grid: [
      '......gg',
      '.....oooo',
      '....oooooo',
      '...oooooooo',
      '..oooooooooo',
      '..oOOOOOOOo',
      '..WssssssW',
      '..WsessseW',
      '..WWssssWW',
      'g.WWWWWWWW',
      'g..WWWWWW',
      'g...ooooo',
      'g..oooOooo',
      'g..ooOOoo',
      '...OO..OO',
      '..kkk..kkk'
    ]
  },

  barbaro: {
    palette: { o: '#e8590c', O: '#bf3f00', h: '#2a1f1a' },
    grid: [
      '...hhhhhh',
      '..hhhhhhhh',
      '..qqqqqqqq',
      '.qqqqqqqqqq',
      '.qeqqqqqqeq',
      '.qqqqqqqqqq',
      '.qttqqqqttq',
      '..qqqqqqqq',
      '.ooqqqqqqoo.....m',
      'ooooooooooo...mmmmm',
      '.ooooooooo..wwmmmmm',
      '.oqOooooqo.ww.mmm',
      '..OOOOOOO.ww',
      '..OO..OO.ww',
      '.kkk..kkk',
    ]
  },

  paladino: {
    palette: { o: '#f1b30b', O: '#c98f06', m: '#d7dee6', M: '#9aa4b0' },
    grid: [
      '...mmmmmm',
      '..mmmmmmmm',
      '..mMMMMMMm',
      '..mssssssm',
      '..msesssem',
      '..mssssssm',
      '..mmMMMMmm',
      'gg.mmmmmm.....m',
      'gmg.mooom...mmmm',
      'gggmoooommmmmm',
      '.g.mooooom..mm',
      '...mmoomm',
      '...mm..mm',
      '..kkk..kkk'
    ]
  },

  dragon: {
    palette: { o: '#c0392b', O: '#8e2820', g: '#f1b30b', q: '#e07a5f', e: '#f1d44b', t: '#fdf6e3' },
    grid: [
      '...........................oo',
      '..o.......................oOOo',
      '.oOo.....................oOoo',
      '.oOOo...oooooo..........oOo',
      '.oOOOo.oooooooooo......oOo',
      '..oOOoooOooooooooo....oOo',
      '...oOOoOooooooooooo..oOOo',
      'tt.oOoooooooooooooooooOOo',
      '.ttoOoooeooooooooooooooOo',
      'ttoOoogggooooooooooooooOo',
      '.toOooooooooooooooooooOOo',
      '..oOOoooooooooooooooooOo',
      '...oOOOooooooooooooooOo',
      '....oOOOOoooooooooooOo',
      '.....oOOOOOOoooooOOOo',
      '......oOO..oOOOOOo.oo',
      '.....oOo....oOo...',
      '....ttt....ttt'
    ]
  }
};

// ----- Renderizador ----------------------------------------------------

function pixelSVG(key, { pixel = 8, idle = true, className = '' } = {}) {
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
