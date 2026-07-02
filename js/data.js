// ====================================================================
//  A GENTE VAI DE TURMA — Gincana RPG
//  Dados do jogo: personagens, cenários e configurações
// ====================================================================

const CONFIG = {
  pontosPorAcerto: 20,        // pontos de heroísmo por opção correta
  totalAcoes: 15,             // 5 personagens x 3 ações
  pontuacaoMaxima: 300,       // 15 x 20
  limiteParaVencer: 200,      // pontos necessários para derrotar o dragão

  // --- Equação do cronômetro ---------------------------------------
  // O tempo de discussão não é mais fixo: ele é calculado a partir do
  // tempo total que o apresentador tem disponível, para que as 15 ações
  // sempre caibam dentro da apresentação.
  tempoApresentacaoMin: 25,    // minutos totais disponíveis para apresentar
  tempoAberturaSeg: 150,       // reserva p/ intro, turma, transições de rodada e batalha final (2m30)
  tempoLeituraFeedbackSeg: 10, // segundos p/ ler o feedback e avançar, por ação
  tempoDiscussao: 0            // calculado logo abaixo — não editar direto
};

// tempoDiscussao = ((tempo total - abertura) / nº de ações) - leitura do feedback
CONFIG.tempoDiscussao = Math.max(15, Math.floor(
  ((CONFIG.tempoApresentacaoMin * 60 - CONFIG.tempoAberturaSeg) / CONFIG.totalAcoes)
  - CONFIG.tempoLeituraFeedbackSeg
));

// Ordem das equipes a cada rodada
const PERSONAGENS = [
  {
    id: 'bardo',
    nome: 'Bardo Anão',
    equipe: 'Equipe 1',
    cor: '#2f80ed',
    corClara: '#7fb1f5',
    epiteto: 'O Animador da Turma',
    descricao: 'Com sua música e bom humor, mantém o grupo unido nos momentos difíceis.'
  },
  {
    id: 'arqueiro',
    nome: 'Arqueiro Elfo',
    equipe: 'Equipe 2',
    cor: '#27ae60',
    corClara: '#6fe39b',
    epiteto: 'Os Olhos da Turma',
    descricao: 'Enxerga longe e compartilha o que vê para guiar todos com precisão.'
  },
  {
    id: 'mago',
    nome: 'Mago Ancião',
    equipe: 'Equipe 3',
    cor: '#8e44ad',
    corClara: '#c879ec',
    epiteto: 'A Sabedoria da Turma',
    descricao: 'Conhecimento poderoso que só faz sentido quando ensinado e dividido.'
  },
  {
    id: 'barbaro',
    nome: 'Bárbaro Orc',
    equipe: 'Equipe 4',
    cor: '#e8590c',
    corClara: '#ff9e6b',
    epiteto: 'A Força da Turma',
    descricao: 'Imensa força bruta que protege o grupo quando colocada a serviço de todos.'
  },
  {
    id: 'paladino',
    nome: 'Paladino Humano',
    equipe: 'Equipe 5',
    cor: '#f1b30b',
    corClara: '#ffd966',
    epiteto: 'O Escudo da Turma',
    descricao: 'Coragem e honra para defender os companheiros e pedir ajuda quando precisa.'
  }
];

// ---------------------------------------------------------------------
//  CENÁRIOS
//  Para cada personagem, 3 ações consecutivas. Cada ação tem 3 opções,
//  apenas uma alinhada ao pilar "A gente vai de turma".
//  "correta" = índice (0,1,2) da opção certa.
// ---------------------------------------------------------------------

const CENARIOS = {
  bardo: [
    {
      titulo: 'Ação 1 — O grupo desanimado',
      situacao: 'A turma está cabisbaixa após uma derrota. O que o Bardo faz?',
      opcoes: [
        { texto: 'Toca uma música e relembra as conquistas do grupo.', correta: true, feedback: 'Confiar e apoiar: o Bardo eleva a turma inteira!' },
        { texto: 'Sai sozinho em busca de um grupo mais experiente.', correta: false, feedback: 'Abandonar a turma em vez de apoiá-la enfraquece a todos.' },
        { texto: 'Aponta os culpados pela derrota.', correta: false, feedback: 'Culpar os colegas só aprofunda o desânimo.' }
      ]
    },
    {
      titulo: 'Ação 2 — O segredo da taverna',
      situacao: 'O Bardo descobre uma rota que evita uma emboscada. O que faz com isso?',
      opcoes: [
        { texto: 'Guarda só para si, para fugir primeiro se precisar.', correta: false, feedback: 'Reter informação coloca a turma em risco.' },
        { texto: 'Compartilha a rota com todo o grupo.', correta: true, feedback: 'Informação dividida protege a turma toda.' },
        { texto: 'Conta só para o Paladino, o mais forte.', correta: false, feedback: 'Privilegiar um deixa o resto da turma vulnerável.' }
      ]
    },
    {
      titulo: 'Ação 3 — A canção final',
      situacao: 'Antes da batalha contra o Dragão, o medo toma conta. Como o Bardo prepara a turma?',
      opcoes: [
        { texto: 'Compõe um hino que une todos em um só propósito.', correta: true, feedback: 'Um só time: o Bardo transforma medo em coragem coletiva.' },
        { texto: 'Diz que cada um se vire sozinho no combate.', correta: false, feedback: '"Cada um por si" é o oposto de ir de turma.' },
        { texto: 'Foge discretamente para evitar o perigo.', correta: false, feedback: 'Abandonar a turma na hora decisiva quebra a confiança.' }
      ]
    }
  ],

  arqueiro: [
    {
      titulo: 'Ação 1 — A visão privilegiada',
      situacao: 'Do alto da colina, o Arqueiro vê inimigos que o grupo não vê. O que faz?',
      opcoes: [
        { texto: 'Atira sozinho, sem avisar ninguém.', correta: false, feedback: 'Agir sozinho expõe a turma desprevenida.' },
        { texto: 'Fica em silêncio para não dividir o crédito.', correta: false, feedback: 'Esconder informação por vaidade prejudica todos.' },
        { texto: 'Sinaliza os inimigos e orienta o grupo a se posicionar junto.', correta: true, feedback: 'Pedir e dar ajuda: o Arqueiro guia a turma com o que só ele vê.' }
      ]
    },
    {
      titulo: 'Ação 2 — A última flecha',
      situacao: 'Só uma flecha e dois aliados precisam de cobertura. Como o Arqueiro decide?',
      opcoes: [
        { texto: 'Conversa rápido com o grupo sobre qual flanco é mais crítico.', correta: true, feedback: 'Decisão em turma: ouvir o grupo gera a melhor escolha.' },
        { texto: 'Guarda a flecha para se proteger.', correta: false, feedback: 'Pensar só em si abandona os aliados.' },
        { texto: 'Atira no alvo mais fácil, para garantir seu acerto.', correta: false, feedback: 'Buscar mérito individual ignora a necessidade da turma.' }
      ]
    },
    {
      titulo: 'Ação 3 — O aprendiz',
      situacao: 'Um aliado quer aprender o arco, mas atrasa o ritmo. O que o Arqueiro faz?',
      opcoes: [
        { texto: 'Manda o aprendiz ficar para trás.', correta: false, feedback: 'Excluir quem aprende enfraquece a turma no futuro.' },
        { texto: 'Para para ensinar suas técnicas ao aprendiz.', correta: true, feedback: 'Ensinar é fazer a turma inteira evoluir.' },
        { texto: 'Faz tudo sozinho, ignorando o aprendiz.', correta: false, feedback: 'Centralizar tudo impede a turma de crescer.' }
      ]
    }
  ],

  mago: [
    {
      titulo: 'Ação 1 — O feitiço raro',
      situacao: 'O Mago domina um feitiço que ninguém mais conhece. Um aliado quer aprender. O que faz?',
      opcoes: [
        { texto: 'Ensina o feitiço: saber dividido fortalece a turma.', correta: true, feedback: 'A turma fica mais forte quando todos aprendem.' },
        { texto: 'Recusa, para continuar insubstituível.', correta: false, feedback: 'Reter conhecimento por status fragiliza a turma.' },
        { texto: 'Cobra um preço alto em ouro para ensinar.', correta: false, feedback: 'Transformar ajuda em barganha quebra a confiança.' }
      ]
    },
    {
      titulo: 'Ação 2 — A decisão arriscada',
      situacao: 'O Mago acha que tem o plano perfeito, mas o grupo tem dúvidas. Como conduz?',
      opcoes: [
        { texto: 'Ignora as dúvidas e segue do seu jeito.', correta: false, feedback: 'Atropelar o grupo despreza a inteligência coletiva.' },
        { texto: 'Escuta as dúvidas e ajusta o plano com a turma.', correta: true, feedback: 'Ouvir a turma torna o plano melhor.' },
        { texto: 'Desiste de opinar para evitar conflito.', correta: false, feedback: 'Omitir-se faz a turma perder sua contribuição.' }
      ]
    },
    {
      titulo: 'Ação 3 — A magia esgotada',
      situacao: 'A energia mágica do Mago está no fim e ele não dá conta sozinho. O que faz?',
      opcoes: [
        { texto: 'Esconde o problema por orgulho.', correta: false, feedback: 'Esconder a fraqueza coloca a turma em perigo.' },
        { texto: 'Pede ajuda ao grupo para compensar sua limitação.', correta: true, feedback: 'Pedir ajuda também é ir de turma.' },
        { texto: 'Abandona a missão em silêncio.', correta: false, feedback: 'Sumir deixa a turma desfalcada na hora errada.' }
      ]
    }
  ],

  barbaro: [
    {
      titulo: 'Ação 1 — A ponte quebrada',
      situacao: 'Uma ponte cedeu e o grupo precisa atravessar. O que o Bárbaro faz?',
      opcoes: [
        { texto: 'Atravessa sozinho e segue na frente.', correta: false, feedback: 'A força isolada não leva a turma a lugar nenhum.' },
        { texto: 'Segura uma tora e cria passagem segura para todos.', correta: true, feedback: 'Força a serviço da turma protege o grupo inteiro.' },
        { texto: 'Exige que os outros resolvam sozinhos.', correta: false, feedback: 'Negar ajuda quando se pode ajudar abandona a turma.' }
      ]
    },
    {
      titulo: 'Ação 2 — A provocação do inimigo',
      situacao: 'Um inimigo provoca o Bárbaro para atacar sozinho, longe do grupo. Como reage?',
      opcoes: [
        { texto: 'Avança furioso sozinho.', correta: false, feedback: 'Cair na provocação separa o Bárbaro da turma — o plano do inimigo.' },
        { texto: 'Mantém a formação e ataca junto com o grupo.', correta: true, feedback: 'Disciplina em turma: juntos resistem à armadilha.' },
        { texto: 'Manda o grupo recuar e decide tudo sozinho.', correta: false, feedback: 'Tomar o controle sozinho ignora a força da turma.' }
      ]
    },
    {
      titulo: 'Ação 3 — O aliado ferido',
      situacao: 'Um companheiro cai ferido, e a vitória individual está ao alcance. O que o Bárbaro prioriza?',
      opcoes: [
        { texto: 'Ignora o ferido e busca o golpe final e a glória.', correta: false, feedback: 'Buscar glória sozinho abandona quem precisa de você.' },
        { texto: 'Para, protege o aliado e chama o grupo para ajudar.', correta: true, feedback: 'Cuidar da turma vem antes do mérito individual!' },
        { texto: 'Grita com o ferido por ter se descuidado.', correta: false, feedback: 'Culpar quem caiu desmotiva e divide a turma.' }
      ]
    }
  ],

  paladino: [
    {
      titulo: 'Ação 1 — O escudo do grupo',
      situacao: 'Uma chuva de flechas vem na direção da turma. O que o Paladino faz?',
      opcoes: [
        { texto: 'Protege apenas a si mesmo.', correta: false, feedback: 'Proteger só a si mesmo deixa a turma exposta.' },
        { texto: 'Posiciona o escudo para cobrir o máximo de companheiros.', correta: true, feedback: 'Ser escudo da turma: protege os colegas antes de si.' },
        { texto: 'Recua para uma posição segura e observa de longe.', correta: false, feedback: 'Fugir do dever de proteger abandona o grupo.' }
      ]
    },
    {
      titulo: 'Ação 2 — A missão dividida',
      situacao: 'O Paladino conduz parte da missão com autonomia e surge uma dúvida importante. Como age?',
      opcoes: [
        { texto: 'Segue com autonomia e pede ajuda no ponto de dúvida.', correta: true, feedback: 'Autonomia com colaboração: confiar em si e na turma.' },
        { texto: 'Trava e espera alguém resolver por ele.', correta: false, feedback: 'Depender de tudo dos outros não é autonomia.' },
        { texto: 'Segue sozinho mesmo na dúvida, sem consultar ninguém.', correta: false, feedback: 'Autonomia não é isolamento; pedir ajuda também é ir de turma.' }
      ]
    },
    {
      titulo: 'Ação 3 — O voto final',
      situacao: 'Diante do covil do Dragão, o grupo decide a estratégia de ataque. Como o Paladino conduz?',
      opcoes: [
        { texto: 'Impõe sua estratégia, por ser o mais respeitado.', correta: false, feedback: 'Impor a decisão silencia a turma.' },
        { texto: 'Reúne todos, ouve cada um e constrói a estratégia junto.', correta: true, feedback: 'A melhor estratégia nasce da soma de todos.' },
        { texto: 'Deixa cada um atacar quando quiser, sem combinar nada.', correta: false, feedback: 'Falta de combinação dispersa a força da turma.' }
      ]
    }
  ]
};
