// ====================================================================
//  A GENTE VAI DE TURMA — Gincana RPG
//  Dados do jogo: personagens, cenários e configurações
// ====================================================================

const CONFIG = {
  pontosPorAcerto: 20,        // pontos de heroísmo por opção correta
  totalAcoes: 15,             // 5 personagens x 3 ações
  pontuacaoMaxima: 300,       // 15 x 20
  limiteParaVencer: 200,      // pontos necessários para derrotar o dragão
  tempoDiscussao: 60          // segundos de discussão por ação (cronômetro)
};

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
      situacao: 'Após uma derrota difícil, a turma está cabisbaixa e sem energia para seguir. O Bardo Anão percebe o clima pesado. O que ele faz?',
      opcoes: [
        { texto: 'Toca uma música épica e relembra as conquistas do grupo para reerguer o ânimo de todos.', correta: true, feedback: 'Confiar e dar suporte: o Bardo eleva a turma inteira. A gente vai de turma!' },
        { texto: 'Decide procurar sozinho um grupo de aventureiros mais experientes.', correta: false, feedback: 'Abandonar a turma em vez de apoiá-la enfraquece a todos.' },
        { texto: 'Aponta quem foram os culpados pela derrota para que aprendam a lição.', correta: false, feedback: 'Culpar os colegas só aprofunda o desânimo do grupo.' }
      ]
    },
    {
      titulo: 'Ação 2 — O segredo da taverna',
      situacao: 'Na taverna, o Bardo descobre uma rota secreta que evita uma emboscada perigosa. O que ele faz com essa informação?',
      opcoes: [
        { texto: 'Guarda só para si, garantindo vantagem caso precise fugir primeiro.', correta: false, feedback: 'Reter informação coloca a turma em risco.' },
        { texto: 'Compartilha a rota com todo o grupo para que ninguém caia na emboscada.', correta: true, feedback: 'Confiar e trabalhar junto: informação dividida protege a turma toda.' },
        { texto: 'Conta apenas para o Paladino, que é o mais forte.', correta: false, feedback: 'Privilegiar um deixa o restante da turma vulnerável.' }
      ]
    },
    {
      titulo: 'Ação 3 — A canção final',
      situacao: 'Antes da batalha contra o Dragão, o medo toma conta. O Bardo tem uma última chance de preparar a turma. Como ele age?',
      opcoes: [
        { texto: 'Compõe um hino que celebra a força de cada companheiro e une todos em um só propósito.', correta: true, feedback: 'Ser um só time: o Bardo transforma medo em coragem coletiva.' },
        { texto: 'Diz que cada um deve se virar sozinho na hora do combate.', correta: false, feedback: '"Cada um por si" é o oposto de ir de turma.' },
        { texto: 'Foge discretamente para evitar o perigo.', correta: false, feedback: 'Abandonar a turma na hora decisiva quebra a confiança.' }
      ]
    }
  ],

  arqueiro: [
    {
      titulo: 'Ação 1 — A visão privilegiada',
      situacao: 'Do alto de uma colina, o Arqueiro Elfo enxerga inimigos que o resto do grupo não consegue ver. O que ele faz?',
      opcoes: [
        { texto: 'Atira sozinho, sem avisar, para abater o máximo de inimigos primeiro.', correta: false, feedback: 'Agir sozinho expõe a turma desprevenida.' },
        { texto: 'Fica em silêncio para não dividir o crédito da vitória.', correta: false, feedback: 'Esconder informação por vaidade prejudica todos.' },
        { texto: 'Sinaliza a posição dos inimigos e orienta o grupo para se posicionar junto.', correta: true, feedback: 'Pedir e dar ajuda: o Arqueiro guia a turma com o que só ele vê.' }
      ]
    },
    {
      titulo: 'Ação 2 — A última flecha',
      situacao: 'Restou apenas uma flecha e dois aliados precisam de cobertura ao mesmo tempo. O Arqueiro hesita. Como decide?',
      opcoes: [
        { texto: 'Conversa rápido com o grupo para decidir juntos qual flanco é mais crítico.', correta: true, feedback: 'Decisão em turma: ouvir o grupo gera a melhor escolha.' },
        { texto: 'Guarda a flecha para se proteger caso ele mesmo seja atacado.', correta: false, feedback: 'Pensar só em si abandona os aliados.' },
        { texto: 'Atira no alvo mais fácil para garantir um acerto no seu placar.', correta: false, feedback: 'Buscar mérito individual ignora a necessidade da turma.' }
      ]
    },
    {
      titulo: 'Ação 3 — O aprendiz',
      situacao: 'Um jovem aliado quer aprender a usar o arco, mas está atrasando o ritmo. O Arqueiro percebe o esforço dele. O que faz?',
      opcoes: [
        { texto: 'Manda o aprendiz ficar para trás para não atrapalhar a missão.', correta: false, feedback: 'Excluir quem está aprendendo enfraquece a turma a longo prazo.' },
        { texto: 'Tira um tempo para ensinar suas técnicas e fortalecer o grupo como um todo.', correta: true, feedback: 'Ajudar a crescer: ensinar é fazer a turma inteira evoluir.' },
        { texto: 'Faz tudo sozinho para ser mais rápido, ignorando o aprendiz.', correta: false, feedback: 'Centralizar tudo impede que a turma fique mais forte.' }
      ]
    }
  ],

  mago: [
    {
      titulo: 'Ação 1 — O feitiço raro',
      situacao: 'O Mago Ancião domina um feitiço de cura que ninguém mais conhece. Um aliado quer aprender. O que ele faz?',
      opcoes: [
        { texto: 'Ensina o feitiço, pois conhecimento dividido fortalece toda a turma.', correta: true, feedback: 'Dividir saber: a turma fica mais forte quando todos aprendem.' },
        { texto: 'Recusa, para continuar sendo o único insubstituível do grupo.', correta: false, feedback: 'Reter conhecimento por status fragiliza a turma.' },
        { texto: 'Cobra um preço alto em ouro para ensinar.', correta: false, feedback: 'Transformar ajuda em barganha quebra a confiança do grupo.' }
      ]
    },
    {
      titulo: 'Ação 2 — A decisão arriscada',
      situacao: 'O Mago acredita que tem o plano perfeito, mas o restante do grupo tem dúvidas. Como ele conduz?',
      opcoes: [
        { texto: 'Ignora as dúvidas e executa o plano do seu jeito, afinal é o mais sábio.', correta: false, feedback: 'Atropelar o grupo despreza a inteligência coletiva.' },
        { texto: 'Escuta as preocupações e ajusta o plano junto com a turma.', correta: true, feedback: 'Trabalhar com autonomia e em conjunto: ouvir torna o plano melhor.' },
        { texto: 'Desiste de opinar para evitar conflito e deixa tudo por conta dos outros.', correta: false, feedback: 'Omitir-se não é colaborar; a turma perde sua contribuição.' }
      ]
    },
    {
      titulo: 'Ação 3 — A magia esgotada',
      situacao: 'No meio da jornada, o Mago percebe que sua energia mágica está quase no fim e ele não conseguirá sozinho. O que faz?',
      opcoes: [
        { texto: 'Esconde o problema por orgulho, fingindo que está tudo bem.', correta: false, feedback: 'Esconder a fraqueza coloca a turma em perigo.' },
        { texto: 'Pede ajuda ao grupo e combina como compensar sua limitação.', correta: true, feedback: 'Pedir ajuda também é ir de turma. Ninguém precisa carregar tudo sozinho.' },
        { texto: 'Abandona a missão silenciosamente para não ser visto fraco.', correta: false, feedback: 'Sumir deixa a turma desfalcada na hora errada.' }
      ]
    }
  ],

  barbaro: [
    {
      titulo: 'Ação 1 — A ponte quebrada',
      situacao: 'Uma ponte cedeu e o grupo precisa atravessar um abismo. O Bárbaro Orc é o mais forte de todos. O que ele faz?',
      opcoes: [
        { texto: 'Atravessa primeiro sozinho e segue na frente, deixando os outros para trás.', correta: false, feedback: 'A força isolada não leva a turma a lugar nenhum.' },
        { texto: 'Usa a força para segurar uma tora e criar uma passagem segura para todos.', correta: true, feedback: 'Força a serviço da turma: o poder dele protege o grupo inteiro.' },
        { texto: 'Exige que os outros resolvam, pois ele já fez muito esforço.', correta: false, feedback: 'Negar ajuda quando se pode ajudar abandona a turma.' }
      ]
    },
    {
      titulo: 'Ação 2 — A provocação do inimigo',
      situacao: 'Um inimigo provoca o Bárbaro para que ataque sozinho, longe do grupo. A raiva sobe. Como ele reage?',
      opcoes: [
        { texto: 'Avança furioso sozinho para mostrar quem é o mais forte.', correta: false, feedback: 'Cair na provocação separa o Bárbaro da turma — exatamente o plano do inimigo.' },
        { texto: 'Respira, mantém a formação e ataca em conjunto com o grupo.', correta: true, feedback: 'Disciplina em turma: juntos resistem à armadilha.' },
        { texto: 'Manda o grupo recuar enquanto ele decide tudo sozinho.', correta: false, feedback: 'Tomar o controle sozinho ignora a força da turma.' }
      ]
    },
    {
      titulo: 'Ação 3 — O aliado ferido',
      situacao: 'No calor da batalha, um companheiro cai ferido e a vitória individual está ao alcance do Bárbaro. O que ele prioriza?',
      opcoes: [
        { texto: 'Ignora o ferido e corre para dar o golpe final e levar a glória.', correta: false, feedback: 'Buscar glória sozinho abandona quem precisa de você.' },
        { texto: 'Para, protege o aliado caído e chama o grupo para ajudar.', correta: true, feedback: 'Cuidar da turma vem antes do mérito individual. A gente vai de turma!' },
        { texto: 'Grita com o ferido por ter se descuidado.', correta: false, feedback: 'Culpar quem caiu desmotiva e divide a turma.' }
      ]
    }
  ],

  paladino: [
    {
      titulo: 'Ação 1 — O escudo do grupo',
      situacao: 'Uma chuva de flechas vem na direção da turma. O Paladino Humano tem o maior escudo. O que ele faz?',
      opcoes: [
        { texto: 'Protege apenas a si mesmo, garantindo sua própria sobrevivência.', correta: false, feedback: 'Proteger só a si mesmo deixa a turma exposta.' },
        { texto: 'Posiciona o escudo para cobrir o máximo de companheiros possível.', correta: true, feedback: 'Ser escudo da turma: protege os colegas antes de si mesmo.' },
        { texto: 'Recua para uma posição segura e observa de longe.', correta: false, feedback: 'Fugir do dever de proteger abandona o grupo.' }
      ]
    },
    {
      titulo: 'Ação 2 — A missão dividida',
      situacao: 'O líder pede que o Paladino conduza uma parte da missão sozinho, com autonomia. Surge uma dúvida importante. Como ele age?',
      opcoes: [
        { texto: 'Toca em frente sozinho com autonomia e pede ajuda à turma no ponto em que tem dúvida.', correta: true, feedback: 'Autonomia com colaboração: confiar em si e na turma ao mesmo tempo.' },
        { texto: 'Trava completamente e espera alguém resolver tudo por ele.', correta: false, feedback: 'Depender de tudo dos outros não é autonomia.' },
        { texto: 'Faz tudo por conta própria mesmo na dúvida, sem consultar ninguém.', correta: false, feedback: 'Autonomia não é isolamento; pedir ajuda também é ir de turma.' }
      ]
    },
    {
      titulo: 'Ação 3 — O voto final',
      situacao: 'Diante do covil do Dragão, o grupo precisa decidir a estratégia de ataque. O Paladino é respeitado por todos. Como conduz?',
      opcoes: [
        { texto: 'Impõe sua estratégia, pois é o mais honrado e merece decidir.', correta: false, feedback: 'Impor a decisão silencia a turma.' },
        { texto: 'Reúne todos, ouve cada personagem e constrói a estratégia em conjunto.', correta: true, feedback: 'Decidir como turma: a melhor estratégia nasce da soma de todos.' },
        { texto: 'Deixa cada um atacar quando quiser, sem combinar nada.', correta: false, feedback: 'Falta de combinação dispersa a força da turma.' }
      ]
    }
  ]
};
