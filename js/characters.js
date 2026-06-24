// ====================================================================
//  Ilustração vetorial dos personagens (SVG)
//  Estilo cartoon colorido, sombreamento suave, cada personagem
//  com uma característica marcante e única.
//  Mantém a função pixelSVG() para compatibilidade com o jogo.
// ====================================================================

// ---- helpers de desenho ---------------------------------------------

function eye(cx, cy, iris) {
  return `
    <ellipse cx="${cx}" cy="${cy}" rx="4.4" ry="5.2" fill="#fff"/>
    <circle cx="${cx + 0.6}" cy="${cy + 0.8}" r="2.6" fill="${iris}"/>
    <circle cx="${cx + 0.6}" cy="${cy + 1}" r="1.3" fill="#1a1033"/>
    <circle cx="${cx - 1.1}" cy="${cy - 1.4}" r="1.1" fill="#fff"/>`;
}

function face(c) {
  const iris = c.iris || '#5b4636';
  // sobrancelhas com leve variação de humor
  const by = 27 + (c.brow || 0);
  return `
    <!-- sobrancelhas -->
    <path d="M37 ${by} Q43 ${by - 2.5} 48 ${by}" stroke="${c.hair}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    <path d="M52 ${by} Q57 ${by - 2.5} 63 ${by}" stroke="${c.hair}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    <!-- olhos -->
    ${eye(43, 34, iris)}
    ${eye(57, 34, iris)}
    <!-- nariz -->
    <path d="M50 37 Q52 41 49.5 42.5" stroke="${c.skinShade}" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <!-- bochechas -->
    <ellipse cx="36" cy="42" rx="3.2" ry="1.9" fill="#ff8a8a" opacity="0.45"/>
    <ellipse cx="64" cy="42" rx="3.2" ry="1.9" fill="#ff8a8a" opacity="0.45"/>
    <!-- boca -->
    <path d="M43 46 Q50 ${50 + (c.smile || 0)} 57 46" stroke="#a85a3c" stroke-width="2" fill="none" stroke-linecap="round"/>`;
}

function bodyBase(c) {
  return `
    <!-- sombra no chão -->
    <ellipse cx="50" cy="128" rx="29" ry="4.5" fill="#000" opacity="0.2"/>
    <!-- pernas -->
    <rect x="39" y="92" width="9" height="30" rx="4.5" fill="${c.outfitDark}"/>
    <rect x="52" y="92" width="9" height="30" rx="4.5" fill="${c.outfitDark}"/>
    <!-- sapatos -->
    <ellipse cx="42" cy="123" rx="8" ry="4.5" fill="${c.shoe}"/>
    <ellipse cx="58" cy="123" rx="8" ry="4.5" fill="${c.shoe}"/>
    <!-- torso -->
    <path d="M30 60 Q30 53 40 52 L60 52 Q70 53 70 60 L72 96 Q72 102 64 102 L36 102 Q28 102 28 96 Z"
          fill="url(#${c.prefix}-out)" stroke="${c.outfitDark}" stroke-width="1.4"/>
    <!-- braços -->
    <path d="M31 60 Q21 74 26 91 Q28 96 34 92 L37 76 Q34 66 39 60 Z"
          fill="url(#${c.prefix}-out)" stroke="${c.outfitDark}" stroke-width="1.2"/>
    <path d="M69 60 Q79 74 74 91 Q72 96 66 92 L63 76 Q66 66 61 60 Z"
          fill="url(#${c.prefix}-out)" stroke="${c.outfitDark}" stroke-width="1.2"/>`;
}

function hands(c) {
  return `
    <ellipse cx="30" cy="93" rx="5" ry="4.6" fill="${c.skin}" stroke="${c.skinShade}" stroke-width="0.7"/>
    <ellipse cx="70" cy="93" rx="5" ry="4.6" fill="${c.skin}" stroke="${c.skinShade}" stroke-width="0.7"/>`;
}

function headAndNeck(c) {
  return `
    <!-- pescoço -->
    <rect x="44" y="47" width="12" height="11" rx="4" fill="${c.skinShade}"/>
    <!-- orelhas -->
    <ellipse cx="29.5" cy="35" rx="4" ry="6" fill="${c.skin}" stroke="${c.skinShade}" stroke-width="0.7"/>
    <ellipse cx="70.5" cy="35" rx="4" ry="6" fill="${c.skin}" stroke="${c.skinShade}" stroke-width="0.7"/>
    <!-- cabeça -->
    <ellipse cx="50" cy="33" rx="20" ry="21" fill="${c.skin}" stroke="${c.skinShade}" stroke-width="1"/>`;
}

// Monta um personagem completo a partir das partes
function buildPerson(c) {
  return `
    <defs>
      <linearGradient id="${c.prefix}-out" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="${c.outfitLight}"/>
        <stop offset="1" stop-color="${c.outfit}"/>
      </linearGradient>
    </defs>
    ${bodyBase(c)}
    ${c.prop || ''}
    ${hands(c)}
    ${c.hairBack || ''}
    ${headAndNeck(c)}
    ${c.beard || ''}
    ${face(c)}
    ${c.hairFront || ''}
    ${c.accessories || ''}`;
}

// ====================================================================
//  Personagens
// ====================================================================
const VCHAR = {

  // ---- DEV FRONT-END: fones de ouvido + laptop com UI colorida ------
  frontend() {
    const c = {
      prefix: 'fe', iris: '#3b6ea5', brow: -1, smile: 1.5,
      skin: '#f6c9a0', skinShade: '#dca878',
      outfit: '#2f80ed', outfitLight: '#5a9bf2', outfitDark: '#1c5fc0',
      hair: '#2a1f1a', shoe: '#16243f'
    };
    c.prop = `
      <path d="M28 98 L72 98 L76 105 L24 105 Z" fill="#b9c1cb"/>
      <rect x="30" y="75" width="40" height="23" rx="2.5" fill="#cfd6dd"/>
      <rect x="32.5" y="77.5" width="35" height="17.5" rx="1.5" fill="#11151c"/>
      <rect x="35" y="80" width="15" height="4" rx="1" fill="#56ccf2"/>
      <rect x="35" y="86" width="9" height="3" rx="1" fill="#f472b6"/>
      <rect x="46" y="86" width="13" height="3" rx="1" fill="#34c759"/>
      <rect x="35" y="91" width="21" height="3" rx="1" fill="#f1b30b"/>
      <circle cx="62.5" cy="84" r="3.2" fill="#ff6b6b"/>`;
    c.hairFront = `
      <path d="M30 31 Q30 22 34 19 L36 27 L41 14 L45 26 L50 12 L55 26 L59 15 L64 27 L66 20
               Q70 23 70 31 Q60 24 50 24 Q40 24 30 31 Z" fill="${c.hair}"/>`;
    c.accessories = `
      <path d="M27 31 Q50 5 73 31" stroke="#23233e" stroke-width="4.5" fill="none" stroke-linecap="round"/>
      <rect x="21.5" y="30" width="9.5" height="15" rx="4.5" fill="#23233e"/>
      <rect x="69" y="30" width="9.5" height="15" rx="4.5" fill="#23233e"/>
      <rect x="24" y="33" width="4" height="9" rx="2" fill="#2f80ed" opacity="0.8"/>
      <rect x="72" y="33" width="4" height="9" rx="2" fill="#2f80ed" opacity="0.8"/>`;
    return { vb: '0 0 100 132', svg: buildPerson(c) };
  },

  // ---- DEV BACK-END: óculos redondos + barba + monitor + café -------
  backend() {
    const c = {
      prefix: 'be', iris: '#3a2a1a', brow: 0, smile: 0,
      skin: '#d99b6c', skinShade: '#bd8050',
      outfit: '#1f8a4d', outfitLight: '#34b366', outfitDark: '#145f34',
      hair: '#241a12', shoe: '#0f3a22'
    };
    c.prop = `
      <rect x="33" y="73" width="34" height="25" rx="2.5" fill="#2b2f36"/>
      <rect x="35.5" y="75.5" width="29" height="17.5" rx="1.5" fill="#0d1117"/>
      <rect x="38" y="78" width="6" height="2.6" rx="0.8" fill="#ffd166"/>
      <rect x="46" y="78" width="14" height="2.6" rx="0.8" fill="#39ff6a"/>
      <rect x="38" y="82.5" width="19" height="2.6" rx="0.8" fill="#39ff6a"/>
      <rect x="38" y="87" width="10" height="2.6" rx="0.8" fill="#56ccf2"/>
      <rect x="38" y="91.5" width="15" height="2.6" rx="0.8" fill="#39ff6a"/>
      <rect x="48" y="98" width="4" height="4" fill="#2b2f36"/>
      <rect x="42" y="102" width="16" height="3" rx="1.5" fill="#2b2f36"/>`;
    c.beard = `
      <path d="M31 36 Q33 56 50 59 Q67 56 69 36 Q60 49 50 49 Q40 49 31 36 Z" fill="${c.hair}"/>`;
    c.hairFront = `
      <path d="M30 32 Q31 17 50 16 Q69 17 70 32 Q60 24 50 24 Q40 24 30 32 Z" fill="${c.hair}"/>`;
    c.accessories = `
      <g stroke="#1a1a1a" stroke-width="2" fill="rgba(255,255,255,0.12)">
        <circle cx="43" cy="34" r="7.5"/>
        <circle cx="57" cy="34" r="7.5"/>
      </g>
      <line x1="50.2" y1="33" x2="49.8" y2="33" stroke="#1a1a1a" stroke-width="2"/>
      <path d="M50 33 h0" stroke="#1a1a1a" stroke-width="2"/>
      <line x1="49" y1="33" x2="51" y2="33" stroke="#1a1a1a" stroke-width="2.2"/>`;
    return { vb: '0 0 100 132', svg: buildPerson(c) };
  },

  // ---- ENG. DE DADOS: cabelo afro grande + clipboard com gráfico ----
  dados() {
    const c = {
      prefix: 'da', iris: '#2a1a0a', brow: 0, smile: 2,
      skin: '#8d5524', skinShade: '#6e3f17',
      outfit: '#7b2fbe', outfitLight: '#9d5fd6', outfitDark: '#5a1f8f',
      hair: '#161616', shoe: '#2a1240'
    };
    c.hairBack = `
      <g fill="#161616">
        <circle cx="50" cy="20" r="23"/>
        <circle cx="29" cy="30" r="14"/>
        <circle cx="71" cy="30" r="14"/>
        <circle cx="33" cy="14" r="12"/>
        <circle cx="67" cy="14" r="12"/>
        <circle cx="50" cy="9" r="14"/>
      </g>
      <g fill="#2e2e2e" opacity="0.6">
        <circle cx="44" cy="11" r="4"/>
        <circle cx="58" cy="13" r="3.5"/>
        <circle cx="34" cy="22" r="3.5"/>
        <circle cx="66" cy="22" r="3.5"/>
      </g>`;
    c.prop = `
      <rect x="30" y="73" width="40" height="27" rx="2.5" fill="#caa472"/>
      <rect x="32.5" y="77" width="35" height="21" rx="1.5" fill="#f7f3e9"/>
      <rect x="43" y="71" width="14" height="4.5" rx="1.5" fill="#9aa4b0"/>
      <line x1="37" y1="94" x2="64" y2="94" stroke="#555" stroke-width="1"/>
      <line x1="37" y1="80" x2="37" y2="94" stroke="#555" stroke-width="1"/>
      <rect x="40" y="88" width="4.5" height="6" fill="#56ccf2"/>
      <rect x="46" y="84" width="4.5" height="10" fill="#34c759"/>
      <rect x="52" y="86" width="4.5" height="8" fill="#f1b30b"/>
      <rect x="58" y="81" width="4.5" height="13" fill="#e05c5c"/>
      <polyline points="42,87 48,83 54,84 60,79" fill="none" stroke="#ff6b35" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>`;
    c.accessories = `
      <g transform="rotate(28 71 28)">
        <rect x="69" y="20" width="3.5" height="15" rx="1" fill="#f1b30b"/>
        <polygon points="69,20 72.5,20 70.75,16" fill="#3a2a1a"/>
        <rect x="69" y="33" width="3.5" height="2.5" fill="#e05c5c"/>
      </g>`;
    return { vb: '0 0 100 132', svg: buildPerson(c) };
  },

  // ---- UX DESIGNER: coque no topo + brinco + tablet com wireframe ---
  ux() {
    const c = {
      prefix: 'ux', iris: '#3a1a4d', brow: -1, smile: 2.5,
      skin: '#f1c27d', skinShade: '#d9a85f',
      outfit: '#e8590c', outfitLight: '#ff7a33', outfitDark: '#b5430a',
      hair: '#2d1a4d', shoe: '#5a2a08'
    };
    c.hairBack = `
      <path d="M30 36 Q26 14 50 12 Q74 14 70 36 L70 46 Q72 28 58 24 L42 24 Q28 28 30 46 Z" fill="${c.hair}"/>
      <circle cx="50" cy="9" r="8.5" fill="${c.hair}"/>
      <ellipse cx="50" cy="16" rx="7" ry="3" fill="#e8590c"/>`;
    c.prop = `
      <rect x="31" y="73" width="38" height="27" rx="3" fill="#2b2f36"/>
      <rect x="33.5" y="75.5" width="33" height="22" rx="2" fill="#f8fbff"/>
      <rect x="36" y="78" width="28" height="5" rx="1" fill="#ffd8c2" stroke="#e05c5c" stroke-width="0.8"/>
      <rect x="36" y="85" width="13" height="9.5" rx="1" fill="#eef0f5" stroke="#c084fc" stroke-width="0.8"/>
      <rect x="51" y="85" width="13" height="9.5" rx="1" fill="#eef0f5" stroke="#56ccf2" stroke-width="0.8"/>
      <circle cx="42.5" cy="89.5" r="2" fill="#c084fc"/>
      <line x1="54" y1="88" x2="61" y2="88" stroke="#56ccf2" stroke-width="1"/>
      <line x1="54" y1="91" x2="61" y2="91" stroke="#56ccf2" stroke-width="1"/>
      <!-- caneta stylus -->
      <g transform="rotate(38 70 86)">
        <rect x="68" y="76" width="3.2" height="17" rx="1.5" fill="#fde68a" stroke="#d4a017" stroke-width="0.6"/>
        <polygon points="68,76 71.2,76 69.6,72" fill="#3a3a3a"/>
      </g>`;
    c.hairFront = `
      <path d="M30 31 Q31 17 50 16 Q69 17 70 31 Q60 23 50 23 Q40 23 30 31 Z" fill="${c.hair}"/>`;
    c.accessories = `
      <circle cx="70.5" cy="43" r="2.6" fill="none" stroke="#f1b30b" stroke-width="1.6"/>
      <circle cx="29.5" cy="43" r="2.6" fill="none" stroke="#f1b30b" stroke-width="1.6"/>`;
    return { vb: '0 0 100 132', svg: buildPerson(c) };
  },

  // ---- TECH LEAD: pompadour + óculos + crachá + laptop arquitetura --
  po() {
    const c = {
      prefix: 'tl', iris: '#2a1a0a', brow: -1.5, smile: 1,
      skin: '#c68642', skinShade: '#a86c30',
      outfit: '#d99e0b', outfitLight: '#f0b92a', outfitDark: '#a8770a',
      hair: '#4d3828', shoe: '#4a3208'
    };
    c.prop = `
      <path d="M28 98 L72 98 L76 105 L24 105 Z" fill="#b9c1cb"/>
      <rect x="30" y="75" width="40" height="23" rx="2.5" fill="#cfd6dd"/>
      <rect x="32.5" y="77.5" width="35" height="17.5" rx="1.5" fill="#0d1117"/>
      <rect x="35" y="80" width="9" height="6" rx="1" fill="#56ccf2" stroke="#fff" stroke-width="0.7"/>
      <rect x="56" y="80" width="9" height="6" rx="1" fill="#34c759" stroke="#fff" stroke-width="0.7"/>
      <rect x="45" y="88.5" width="10" height="6" rx="1" fill="#f1b30b" stroke="#fff" stroke-width="0.7"/>
      <line x1="44" y1="83" x2="56" y2="83" stroke="#fff" stroke-width="0.8"/>
      <line x1="50" y1="86" x2="50" y2="88.5" stroke="#fff" stroke-width="0.8"/>`;
    c.hairFront = `
      <path d="M29 30 Q28 12 50 11 Q72 12 71 30 Q68 18 56 18 Q52 9 46 16 Q38 14 32 22
               Q30 25 29 30 Z" fill="${c.hair}"/>
      <path d="M34 20 Q44 14 54 17" stroke="#6b4f36" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.7"/>`;
    c.accessories = `
      <g stroke="#2a2a2a" stroke-width="1.8" fill="rgba(255,255,255,0.1)">
        <rect x="36" y="29.5" width="13" height="9" rx="3"/>
        <rect x="51" y="29.5" width="13" height="9" rx="3"/>
      </g>
      <line x1="49" y1="33.5" x2="51" y2="33.5" stroke="#2a2a2a" stroke-width="1.8"/>
      <!-- crachá / lanyard -->
      <path d="M44 53 L49 62" stroke="#c0392b" stroke-width="2" fill="none"/>
      <path d="M56 53 L51 62" stroke="#c0392b" stroke-width="2" fill="none"/>
      <rect x="45" y="61" width="10" height="13" rx="1.5" fill="#fff" stroke="#9aa4b0" stroke-width="1"/>
      <rect x="46.5" y="63" width="7" height="2.2" rx="0.5" fill="#56ccf2"/>
      <rect x="46.5" y="66.5" width="7" height="1.6" rx="0.5" fill="#cbd2da"/>
      <rect x="46.5" y="69" width="5" height="1.6" rx="0.5" fill="#cbd2da"/>`;
    return { vb: '0 0 100 132', svg: buildPerson(c) };
  },

  // ---- INCIDENTE EM PRODUÇÃO: servidor monstro em chamas ------------
  incident() {
    const svg = `
      <defs>
        <linearGradient id="inc-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#e05040"/>
          <stop offset="1" stop-color="#a82c20"/>
        </linearGradient>
        <radialGradient id="inc-eye" cx="0.5" cy="0.4" r="0.7">
          <stop offset="0" stop-color="#fff3a0"/>
          <stop offset="0.6" stop-color="#ffd166"/>
          <stop offset="1" stop-color="#c9930a"/>
        </radialGradient>
      </defs>
      <!-- sombra -->
      <ellipse cx="60" cy="126" rx="40" ry="6" fill="#000" opacity="0.22"/>
      <!-- chamas -->
      <g>
        <path d="M28 30 Q24 14 34 6 Q33 16 40 18 Q38 8 48 2 Q47 14 54 16 Q54 6 62 2
                 Q60 14 68 18 Q72 10 78 8 Q74 18 84 22 Q92 18 96 22 Q88 26 92 34 Z"
              fill="#ff6b35"/>
        <path d="M34 30 Q31 18 38 12 Q38 20 44 21 Q43 12 50 8 Q50 18 56 19 Q57 11 63 9
                 Q61 19 69 21 Q73 14 79 14 Q75 22 84 26 Z" fill="#ffd93d"/>
        <path d="M42 28 Q41 20 46 16 Q47 22 51 22 Q51 16 56 14 Q57 21 62 21 Q63 16 68 16 Z"
              fill="#fff3a0"/>
      </g>
      <!-- corpo do servidor -->
      <rect x="22" y="28" width="76" height="80" rx="9" fill="url(#inc-body)" stroke="#7a2018" stroke-width="2.5"/>
      <!-- painel detalhe -->
      <rect x="28" y="34" width="64" height="6" rx="3" fill="#7a2018" opacity="0.5"/>
      <circle cx="33" cy="37" r="1.6" fill="#ffd166"/>
      <circle cx="38" cy="37" r="1.6" fill="#39ff6a"/>
      <!-- olhos irados -->
      <path d="M30 50 L48 54" stroke="#7a2018" stroke-width="3" stroke-linecap="round"/>
      <path d="M90 50 L72 54" stroke="#7a2018" stroke-width="3" stroke-linecap="round"/>
      <ellipse cx="42" cy="60" rx="9" ry="8" fill="url(#inc-eye)"/>
      <ellipse cx="78" cy="60" rx="9" ry="8" fill="url(#inc-eye)"/>
      <circle cx="43" cy="61" r="3.6" fill="#c0392b"/>
      <circle cx="77" cy="61" r="3.6" fill="#c0392b"/>
      <circle cx="41.5" cy="59" r="1.4" fill="#fff" opacity="0.8"/>
      <circle cx="76.5" cy="59" r="1.4" fill="#fff" opacity="0.8"/>
      <!-- tela ERROR -->
      <rect x="33" y="74" width="54" height="20" rx="2.5" fill="#0d1117"/>
      <text x="60" y="82" font-family="monospace" font-size="7" fill="#ff5a5a" text-anchor="middle" font-weight="bold">ERROR 500</text>
      <rect x="37" y="85" width="10" height="2.6" fill="#39ff6a"/>
      <rect x="49" y="85" width="14" height="2.6" fill="#39ff6a"/>
      <rect x="65" y="85" width="8" height="2.6" fill="#39ff6a"/>
      <rect x="37" y="89.5" width="40" height="2.6" fill="#ff5a5a"/>
      <!-- grade de ventilação (boca) -->
      <g fill="#2a0d0a">
        <rect x="34" y="99" width="52" height="5" rx="1.5"/>
      </g>
      <g fill="#e0a">
        <rect x="37" y="100" width="3" height="3" fill="#ffd166"/>
        <rect x="44" y="100" width="3" height="3" fill="#ffd166"/>
        <rect x="51" y="100" width="3" height="3" fill="#ffd166"/>
        <rect x="58" y="100" width="3" height="3" fill="#ffd166"/>
        <rect x="65" y="100" width="3" height="3" fill="#ffd166"/>
        <rect x="72" y="100" width="3" height="3" fill="#ffd166"/>
        <rect x="79" y="100" width="3" height="3" fill="#ffd166"/>
      </g>
      <!-- pés -->
      <rect x="30" y="108" width="14" height="9" rx="2" fill="#3a1410"/>
      <rect x="76" y="108" width="14" height="9" rx="2" fill="#3a1410"/>`;
    return { vb: '0 0 120 130', svg };
  }
};

// ====================================================================
//  Renderizador (mantém o nome pixelSVG p/ compatibilidade)
// ====================================================================
function pixelSVG(key, { pixel = 9, idle = true, className = '' } = {}) {
  const builder = VCHAR[key];
  if (!builder) return '';
  const { vb, svg } = builder();
  const [, , vbW, vbH] = vb.split(' ').map(Number);
  const width  = pixel * 12;
  const height = width * (vbH / vbW);
  const idleClass = idle ? 'pix-idle' : '';
  return `<svg class="pixel-svg ${idleClass} ${className}" viewBox="${vb}" width="${width.toFixed(0)}" height="${height.toFixed(0)}" xmlns="http://www.w3.org/2000/svg">${svg}</svg>`;
}
