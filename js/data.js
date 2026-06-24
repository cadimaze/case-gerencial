// ====================================================================
//  A GENTE VAI DE TURMA — O Incidente em Produção
//  Dados do jogo: personagens, cenários e configurações
// ====================================================================

const CONFIG = {
  vidaInicialIncidente: 300,
  tempoDiscussao: 120
};

const PERSONAGENS = [
  {
    id: 'frontend',
    nome: 'Dev Front-End',
    equipe: 'Equipe 1',
    cor: '#2f80ed',
    corClara: '#7fb1f5',
    epiteto: 'A Interface da Turma',
    descricao: 'Dá rosto ao produto. Sabe que a melhor tela é aquela construída junto com quem vai usá-la.'
  },
  {
    id: 'backend',
    nome: 'Dev Back-End',
    equipe: 'Equipe 2',
    cor: '#27ae60',
    corClara: '#6fe39b',
    epiteto: 'O Motor da Turma',
    descricao: 'Faz a mágica acontecer nos bastidores. Código robusto nasce do diálogo com o time.'
  },
  {
    id: 'dados',
    nome: 'Engenheiro de Dados',
    equipe: 'Equipe 3',
    cor: '#8e44ad',
    corClara: '#c879ec',
    epiteto: 'A Bússola da Turma',
    descricao: 'Transforma caos em clareza. Dados bem compartilhados iluminam o caminho de todos.'
  },
  {
    id: 'ux',
    nome: 'UX Designer',
    equipe: 'Equipe 4',
    cor: '#e8590c',
    corClara: '#ff9e6b',
    epiteto: 'A Empatia da Turma',
    descricao: 'Coloca o usuário no centro e o time ao seu lado. Design bom é design co-criado.'
  },
  {
    id: 'po',
    nome: 'Tech Lead',
    equipe: 'Equipe 5',
    cor: '#f1b30b',
    corClara: '#ffd966',
    epiteto: 'A Âncora da Turma',
    descricao: 'Equilibra decisões técnicas e pessoas. Sabe que o melhor código nasce de um time bem alinhado.'
  }
];

// ---------------------------------------------------------------------
//  CENÁRIOS — situações reais de cada área
//  pontos: 20 = resposta certa   (tira 20 de vida do incidente)
//  pontos: 10 = meio certa       (tira 10 de vida do incidente)
//  pontos: -10 = errada          (aumenta em 10 a vida do incidente)
// ---------------------------------------------------------------------

const CENARIOS = {
  frontend: [
    // --- Q1 ---
    {
      titulo: 'Situação — A dívida que só eu sei',
      situacao: `Sprint fecha amanhã. O Dev Front-End tem uma solução funcionando, mas a abordagem vai gerar problema sério de performance em dois meses. Documentou o risco no próprio código com um comentário técnico detalhado. Considera que fez a sua parte. Mas o time não sabe. O que faz?`,
      opcoes: [
        {
          texto: 'Entrega e deixa o comentário no código falar por si — quem passar pelo trecho vai ver o risco. Documentação técnica é responsabilidade individual.',
          pontos: 10,
          feedback: 'Documentar é melhor do que silenciar, mas comentário no código é invisível para quem precisa tomar uma decisão agora. "Vai de turma" exige que o risco chegue às pessoas certas, não apenas ao repositório.'
        },
        {
          texto: 'Registra a dívida no backlog do time com contexto claro, menciona no standup e alinha com o Tech Lead o que deve ser priorizado — a decisão é da turma, não só sua.',
          pontos: 20,
          feedback: 'Tornar o risco visível para o time é o que transforma um problema individual em algo que a turma pode resolver junta. Pedir ajuda para priorizar é "ir de turma" na prática.'
        },
        {
          texto: 'Resolve a dívida técnica por conta própria, mesmo que atrase um dia — entregar algo que vai quebrar não combina com qualidade.',
          pontos: -10,
          feedback: 'Agir sozinho sem comunicar o time sobre o atraso e o motivo não é "ir de turma" — é trabalho invisível. A turma precisa saber o que está acontecendo para apoiar e decidir junto.'
        }
      ]
    },
    // --- Q2 ---
    {
      titulo: 'Situação — Travado e o relógio correndo',
      situacao: `O Dev Front-End está há três horas travado num problema de integração com a API. Sabe que o colega de Back-End provavelmente resolveria em minutos — mas não quer parecer que não sabe o que está fazendo. A demo com o cliente é em duas horas. O que faz?`,
      opcoes: [
        {
          texto: 'Continua tentando resolver sozinho e, se não conseguir, avisa o Tech Lead no último momento que o item não vai entrar na demo.',
          pontos: -10,
          feedback: 'Segurar a informação até o último momento retira do time a chance de ajudar. "Ajudar e pedir ajuda" começa antes de virar crise — não depois.'
        },
        {
          texto: 'Chama o colega de Back-End agora, explica o bloqueio e resolve junto. Se ainda assim não der tempo, avisa o time com antecedência para ajustar a demo.',
          pontos: 20,
          feedback: 'Pedir ajuda a tempo é sinal de maturidade, não fraqueza. E avisar o time com antecedência quando há risco é o que permite que a turma se adapte em vez de se surpreender.'
        },
        {
          texto: 'Remove o item da demo por conta própria e avisa só depois — melhor uma demo menor do que expor o problema na frente do cliente.',
          pontos: 10,
          feedback: 'Proteger a demo é sensato, mas tomar a decisão sozinho sem consultar o time tira da turma a chance de encontrar outra saída. Pelo menos comunica — mas comunicar antes vale muito mais.'
        }
      ]
    },
    // --- Q3 ---
    {
      titulo: 'Situação — O PR que ninguém aprova',
      situacao: `O Dev Front-End abriu um PR há dois dias. O colega de Back-End — único revisor disponível — está sobrecarregado. Sem o merge, outras três pessoas do time estão bloqueadas. O Dev sabe disso mas não quer parecer que está "cobrando" o colega. O que faz?`,
      opcoes: [
        {
          texto: 'Espera mais um dia. Pressionar colega sobrecarregado vai gerar atrito desnecessário — o bloqueio vai se resolver quando ele tiver espaço.',
          pontos: -10,
          feedback: 'Silêncio por cortesia quando o time está bloqueado não é cuidado com o colega — é omissão com a turma. Nomear o bloqueio com leveza é cuidar dos dois ao mesmo tempo.'
        },
        {
          texto: 'Mergeia por conta própria — já revisou o código, confia no que fez, e o bloqueio coletivo é urgente demais para esperar processo.',
          pontos: 10,
          feedback: 'Resolver o bloqueio é o objetivo certo, mas burlar a revisão acordada pelo time remove a segurança coletiva. O processo existe por boas razões — contorná-lo cria riscos que o time inteiro paga depois.'
        },
        {
          texto: 'Sinaliza o bloqueio no canal do time com objetividade, propõe um pair review rápido ao vivo com o colega e oferece ajudar no que ele estiver acumulado em troca.',
          pontos: 20,
          feedback: 'Nomear o problema, propor uma saída e oferecer ajuda de volta é "ir de turma" em sua forma mais concreta: colaboração sem cobrar, sem omitir.'
        }
      ]
    },
    // --- Q4 ---
    {
      titulo: 'Situação — A lib não homologada',
      situacao: `O Dev Front-End precisa integrar uma API de terceiros. Encontrou uma lib open-source que resolveria em horas, mas ela não foi homologada pelo time de segurança. Construir do zero levaria 3 dias extras. A entrega é amanhã.`,
      opcoes: [
        {
          texto: 'Usa a lib sem homologação agora e registra um TODO para homologação futura. A entrega não pode esperar 3 dias.',
          pontos: -10,
          feedback: 'Contornar o processo de segurança cria um risco real que o time inteiro vai carregar — mesmo que ninguém saiba. TODO no código não é processo: é uma dívida invisível de segurança.'
        },
        {
          texto: 'Contata o responsável de segurança informalmente pedindo uma aprovação rápida e usa a lib se ele der OK verbal.',
          pontos: 10,
          feedback: 'Envolver segurança é um passo na direção certa, mas aprovação informal é a mesma coisa que nenhuma aprovação para quem não estava nessa conversa. O time e o Tech Lead precisam estar no loop.'
        },
        {
          texto: 'Escala o dilema para o Tech Lead e para o time, inclui segurança no processo formal e propõe: adiar a entrega, reduzir o escopo ou iniciar a homologação com urgência — o time decide junto.',
          pontos: 20,
          feedback: 'Trazer o trade-off real para o time é "ir de turma": ninguém carrega o risco sozinho, e a melhor saída aparece quando todas as perspectivas estão na mesa.'
        }
      ]
    },
    // --- Q5 ---
    {
      titulo: 'Situação — O design system que eu não quero adotar',
      situacao: `A empresa lançou um novo design system corporativo. O Dev Front-End acha que a solução atual do time é tecnicamente superior em vários aspectos. O Tech Lead pediu para migrar na próxima sprint.`,
      opcoes: [
        {
          texto: 'Documenta os pontos fracos do novo design system, envia por e-mail ao Tech Lead e migra mesmo assim. "Registrei minha preocupação."',
          pontos: 10,
          feedback: 'Documentar e migrar é respeitar a decisão do time — e isso conta. Mas e-mail como único canal limita o diálogo. Uma conversa direta permite construir uma solução melhor juntos.'
        },
        {
          texto: 'Continua usando a solução atual sem comunicar ao Tech Lead. O produto funciona, ninguém vai notar de imediato.',
          pontos: -10,
          feedback: 'Ignorar uma orientação do Tech Lead sem comunicar é agir fora do time. Mesmo que a solução atual seja melhor tecnicamente, decidir sozinho quebra a confiança coletiva.'
        },
        {
          texto: 'Conversa diretamente com o Tech Lead, apresenta as preocupações técnicas com exemplos concretos e propõe um período de comparação — demonstrando disposição para migrar se o time decidir pelo novo sistema.',
          pontos: 20,
          feedback: 'Trazer o argumento técnico com abertura para a decisão coletiva é "ir de turma": você contribui com o que sabe, mas respeita que a decisão pertence ao time.'
        }
      ]
    },
    // --- Q6 ---
    {
      titulo: 'Situação — O erro de acessibilidade do sênior',
      situacao: `O Dev Front-End percebe que um colega sênior (8 anos de casa) está cometendo um erro grave de acessibilidade em vários componentes. Corrigir depois será muito mais caro. O prazo está apertado e ninguém mais percebeu.`,
      opcoes: [
        {
          texto: 'Não fala nada agora. Questionar um sênior durante prazo apertado vai criar atrito desnecessário.',
          pontos: -10,
          feedback: 'Guardar uma informação técnica relevante por medo de conflito não é respeito — é omissão. O time e o usuário pagam o preço do silêncio quando o problema cresce.'
        },
        {
          texto: 'Corrige os componentes que estão na sua área de responsabilidade, sem comentar com o colega. Pelo menos parte do problema fica resolvida.',
          pontos: 10,
          feedback: 'Agir no que é seu é melhor do que silenciar. Mas deixar o colega sem a informação de que há um problema maior significa que o erro continua nos componentes dele — e o custo do silêncio acumula.'
        },
        {
          texto: 'Aborda o colega sênior diretamente com respeito, mostra o impacto com dados e exemplos concretos e propõe fazer uma revisão conjunta dos componentes.',
          pontos: 20,
          feedback: 'Compartilhar o que sabe, com dados e com respeito, é o ato mais maduro que um time pode praticar — independente de hierarquia. Senioridade não é imunidade a feedback técnico.'
        }
      ]
    }
  ],

  backend: [
    // --- Q1 ---
    {
      titulo: 'Situação — Incidente às 23h e o fix na mão',
      situacao: `A API de pagamento está com latência crítica. O Dev Back-End identificou a causa e tem um fix pronto — mas sabe que não testou o impacto no módulo de conciliação. Está sozinho, são 23h, e ninguém do time foi acionado ainda. O que faz?`,
      opcoes: [
        {
          texto: 'Aplica o fix agora — clientes estão sendo impactados ativamente, e esperar para acionar o time vai prolongar o problema. É o trabalho dele resolver isso.',
          pontos: -10,
          feedback: 'Fix em produção às 23h sem acionar o time é assumir um risco que pertence à turma, não a um indivíduo. Se quebrar a conciliação, ninguém estará preparado para reagir.'
        },
        {
          texto: 'Aciona o canal de incidente, compartilha o diagnóstico, o fix disponível e o risco não testado. A turma decide junta se aplica agora ou aguarda mais teste.',
          pontos: 20,
          feedback: '"Ajudar e pedir ajuda" vale também às 23h. Trazer o time para uma decisão de risco, mesmo que de forma assíncrona, é o que diferencia trabalho em equipe de trabalho solitário em crise.'
        },
        {
          texto: 'Aguarda até de manhã para ter mais pessoas disponíveis — uma decisão assim precisa de mais olhos, e o incidente pode se estabilizar sozinho.',
          pontos: 10,
          feedback: 'Preservar a segurança da decisão é correto, mas esperar sem comunicar que o problema foi diagnosticado e que existe um fix disponível priva o time de uma escolha informada. Acionar o canal agora não exige aplicar o fix — só coloca o time no loop.'
        }
      ]
    },
    // --- Q2 ---
    {
      titulo: 'Situação — O código do colega que vai dar problema',
      situacao: `O Dev Back-End percebe que a solução do colega — já em produção e elogiada pelo time — resolve o problema imediato mas cria um acoplamento que vai travar qualquer evolução futura. O colega não pediu feedback. Como age?`,
      opcoes: [
        {
          texto: 'Abre um PR refatorando o código com a explicação técnica na descrição — o argumento está documentado, e o colega pode aceitar ou recusar.',
          pontos: 10,
          feedback: 'Documentar o argumento num PR é transparente, mas refatorar o trabalho de alguém sem conversa direta primeiro cria atrito. Um PR sem diálogo anterior soa como crítica, não como colaboração.'
        },
        {
          texto: 'Registra a preocupação no backlog e deixa o problema aparecer sozinho com o tempo — não é o lugar dele questionar uma entrega já aprovada.',
          pontos: -10,
          feedback: 'Guardar uma informação técnica relevante por desconforto de abordagem não é respeito — é omissão. O time paga o preço do silêncio quando o problema escala.'
        },
        {
          texto: 'Conversa diretamente com o colega, reconhece o que funcionou na solução e compartilha a preocupação técnica com evidências concretas — propõe explorarem juntos a melhor saída.',
          pontos: 20,
          feedback: 'Compartilhar o que sabe com o colega antes de qualquer ação é "ir de turma": confiança, diálogo direto e construção coletiva do código — não só da feature.'
        }
      ]
    },
    // --- Q3 ---
    {
      titulo: 'Situação — O retrabalho que só eu enxergo',
      situacao: `No meio do desenvolvimento, o Dev Back-End descobre que outro time da empresa está construindo exatamente o mesmo serviço. Comunicar isso pode complicar a sprint atual. O problema pode se resolver antes de virar conflito. O que faz?`,
      opcoes: [
        {
          texto: 'Continua o desenvolvimento e monitora de longe o outro time. Se a sobreposição virar problema real, aí escala — por enquanto é especulação.',
          pontos: -10,
          feedback: '"Ser um só Itaú" significa que retrabalho que afeta outro time já é problema do time — não precisa virar crise para merecer atenção. A informação que você tem hoje evita o custo de amanhã.'
        },
        {
          texto: 'Para o desenvolvimento até que o conflito esteja resolvido — não faz sentido construir algo que pode ser redundante.',
          pontos: 10,
          feedback: 'Evitar retrabalho é o objetivo certo, mas paralisar sozinho sem comunicar o time é tomar uma decisão coletiva de forma individual. A turma precisa de você com a informação na mesa, não desaparecido da sprint.'
        },
        {
          texto: 'Sinaliza a sobreposição ao Tech Lead e ao time com evidências, propõe uma conversa rápida entre os dois times para alinhar, e continua o que claramente não tem sobreposição enquanto isso.',
          pontos: 20,
          feedback: 'Trazer a informação estratégica com uma proposta é "ser um só Itaú" na prática. Quem age assim não pensa só na própria sprint — pensa no coletivo.'
        }
      ]
    },
    // --- Q4 ---
    {
      titulo: 'Situação — A falha de segurança no PR do outro time',
      situacao: `O Dev Back-End está revisando um PR de um colega de outra squad e encontra uma vulnerabilidade grave que poderia expor dados de usuários. O PR está prestes a ser aprovado por outros revisores que não perceberam o problema.`,
      opcoes: [
        {
          texto: 'Aprova o PR com um comentário sinalizando a vulnerabilidade, esperando que alguém da squad do colega resolva antes do deploy.',
          pontos: -10,
          feedback: 'Aprovar um PR com vulnerabilidade conhecida é assumir um risco que não deveria existir. Aprovar e comentar ao mesmo tempo envia sinais contraditórios — e o risco segue para produção.'
        },
        {
          texto: 'Rejeita o PR com comentário técnico claro sobre a vulnerabilidade, sinaliza no canal de segurança da empresa e se oferece para ajudar o colega a resolver.',
          pontos: 20,
          feedback: 'Rejeitar com clareza técnica, escalar para o canal certo e oferecer ajuda é a trifeta do "vai de turma" em revisão de código: protege o produto, é transparente e não abandona o colega.'
        },
        {
          texto: 'Bloqueia o PR e escala diretamente para o gerente do colega pela cadeia de liderança, reportando a falha de segurança.',
          pontos: 10,
          feedback: 'Bloquear e escalar protege o produto — mas ir direto à liderança sem falar primeiro com o colega quebra a relação de pares. "Vai de turma" começa pela conversa direta, não pela escalada.'
        }
      ]
    },
    // --- Q5 ---
    {
      titulo: 'Situação — A otimização que afeta três times',
      situacao: `O Dev Back-End descobriu uma forma de otimizar uma query que reduz o tempo de resposta em 40%. A mudança envolve uma alteração no schema do banco que afeta outras 3 equipes. A ideia é boa e ele tem certeza disso.`,
      opcoes: [
        {
          texto: 'Implementa a otimização para demonstrar o ganho com dados reais. Fica mais fácil convencer com resultados do que com teoria.',
          pontos: -10,
          feedback: 'Implementar uma mudança que afeta 3 equipes sem alinhamento prévio é criar um incidente em potencial — mesmo com boa intenção. Resultados obtidos às custas da confiança do time têm preço alto.'
        },
        {
          texto: 'Apresenta a ideia ao Tech Lead e aguarda aprovação antes de qualquer ação. A decisão de envolver outras equipes é dele.',
          pontos: 10,
          feedback: 'Envolver o Tech Lead é correto, mas parar aí limita o processo: as outras 3 equipes afetadas também precisam ser ouvidas. "Vai de turma" nessa escala exige um alinhamento mais amplo.'
        },
        {
          texto: 'Documenta a proposta com métricas de ganho e impacto esperado, alinha com as 3 equipes afetadas e com o Tech Lead, e propõe um plano de migração conjunto.',
          pontos: 20,
          feedback: 'Uma boa ideia que envolve outros times pede um processo de alinhamento à altura. Quem faz isso transforma uma otimização técnica em colaboração real entre equipes.'
        }
      ]
    },
    // --- Q6 ---
    {
      titulo: 'Situação — O processo crítico sem documentação',
      situacao: `Um colega saiu de férias e deixou um processo crítico rodando em produção sem documentação. O processo começou a falhar. O Dev Back-End diagnostica o problema, mas para corrigir precisa de acesso que não tem.`,
      opcoes: [
        {
          texto: 'Tenta obter o acesso por meios alternativos para resolver rápido. O sistema em produção não pode ficar parado esperando burocracia.',
          pontos: -10,
          feedback: 'Contornar controles de acesso — mesmo com boa intenção — cria riscos de segurança e auditoria. O caminho certo é acionar o canal de incidente para que alguém com acesso legítimo possa agir.'
        },
        {
          texto: 'Espera o colega voltar das férias. Não é sua responsabilidade tocar em algo que não é seu.',
          pontos: 10,
          feedback: 'Respeitar responsabilidades é sensato, mas sistema crítico falhando em produção é responsabilidade do time inteiro. "Vai de turma" significa acionar o canal de incidente agora — não esperar.'
        },
        {
          texto: 'Documenta o diagnóstico com clareza, aciona o canal de incidente com as informações disponíveis e trabalha com quem tem o acesso para implementar a correção.',
          pontos: 20,
          feedback: 'Usar o que você tem — o diagnóstico — para habilitar quem tem o acesso é colaboração em ação. O canal de incidente existe exatamente para esses momentos.'
        }
      ]
    }
  ],

  dados: [
    // --- Q1 ---
    {
      titulo: 'Situação — O dado que incomoda',
      situacao: `A análise do Engenheiro de Dados contradiz a aposta estratégica anunciada pela diretoria semana passada. Os dados são sólidos. A reunião de resultados é amanhã. Ele sabe que apresentar isso pode gerar um momento difícil.`,
      opcoes: [
        {
          texto: 'Apresenta os dados com a metodologia clara e se coloca disponível para ajudar na interpretação — o papel da área de dados é informar, e o time precisa dessas informações para decidir bem.',
          pontos: 20,
          feedback: '"Ajudar" também significa compartilhar o que é desconfortável. Dados que chegam ao time inteiros, com contexto e abertura para diálogo, são o que permitem que a turma tome as melhores decisões.'
        },
        {
          texto: 'Apresenta os dados, mas inclui ressalvas que suavizam a contradição — a mensagem chega de forma mais palatável, sem criar confronto desnecessário.',
          pontos: -10,
          feedback: 'Suavizar dados para proteger o ambiente é reter informação do time. A turma que decide com dados incompletos paga o preço mais tarde — geralmente em dobro.'
        },
        {
          texto: 'Conversa em particular com o gestor antes da reunião e deixa que ele decida como apresentar os dados ao grupo.',
          pontos: 10,
          feedback: 'Alinhar com a liderança antes é prudente, mas filtrar a informação pela liderança antes de chegar ao time cria um canal de controle que enfraquece a confiança coletiva nos dados — e em quem os produz.'
        }
      ]
    },
    // --- Q2 ---
    {
      titulo: 'Situação — O pipeline que só eu sei operar',
      situacao: `Dois incidentes em três semanas ocorreram no pipeline de dados crítico porque ninguém além do Engenheiro de Dados sabia como agir. Em ambos os casos, ele resolveu rapidamente. O pipeline funciona bem quando ele está presente.`,
      opcoes: [
        {
          texto: 'Garante estar sempre disponível on-call — é a solução mais eficiente. Transferir conhecimento de algo tão complexo vai tomar mais tempo do que os incidentes em si.',
          pontos: -10,
          feedback: '"Confiar e trabalhar com autonomia" significa que o time precisa conseguir agir sem depender de uma pessoa. Concentrar conhecimento é criar fragilidade para a turma toda — inclusive para quem concentra.'
        },
        {
          texto: 'Documenta o pipeline e disponibiliza no repositório. Se alguém precisar, já sabe onde está.',
          pontos: 10,
          feedback: 'Documentação é melhor do que nada, mas sem transferência ativa raramente resolve dependência de conhecimento. "Ir de turma" é garantir que o time consiga agir — não apenas que a documentação exista em algum lugar.'
        },
        {
          texto: 'Propõe sessões práticas com o time, simplifica partes do pipeline para facilitar a operação por mais pessoas e cria runbooks de resposta a incidentes — o objetivo é que qualquer um do time consiga agir.',
          pontos: 20,
          feedback: 'Distribuir conhecimento ativamente é o ato mais generoso que um especialista pode fazer pelo time. Quem faz isso não fica menos importante — fica mais confiável.'
        }
      ]
    },
    // --- Q3 ---
    {
      titulo: 'Situação — A análise que veio por fora',
      situacao: `Um VP de outra área pede diretamente ao Engenheiro de Dados uma análise urgente que não está no backlog do time. O VP pede discrição. O trabalho seria de dois dias — invisíveis para o próprio time.`,
      opcoes: [
        {
          texto: 'Atende com discrição — o VP tem autoridade, a demanda parece legítima, e criar atrito com liderança sênior não vale a pena.',
          pontos: -10,
          feedback: 'Trabalho invisível para o time é trabalho que não pode ser ajudado, priorizado ou reconhecido pelo coletivo. "Ser um só Itaú" também significa que o time sabe no que cada um está trabalhando.'
        },
        {
          texto: 'Recusa e explica que qualquer demanda precisa passar pela priorização do time — sem exceções para ninguém.',
          pontos: 10,
          feedback: 'Proteger o processo do time é correto, mas recusar sem oferecer um caminho fecha a conversa sem solução. "Ir de turma" com o VP também é encontrar uma saída que respeite o processo sem desconsiderar a necessidade dele.'
        },
        {
          texto: 'Escuta o pedido, avalia o esforço e propõe ao VP que a demanda entre no backlog de forma visível — explica que trabalho oculto prejudica a qualidade da análise e a capacidade do time de apoiá-lo.',
          pontos: 20,
          feedback: 'Tornar o trabalho visível é cuidar do time e do próprio trabalho. Um VP que entende isso vira aliado do processo. Um processo contornado vira padrão — e o próximo pedido não vai ser o último.'
        }
      ]
    },
    // --- Q4 ---
    {
      titulo: 'Situação — A análise em 2 horas',
      situacao: `A equipe de produto pediu uma análise urgente em 2 horas. O Engenheiro de Dados sabe que uma análise feita com tanta pressa terá margem de erro alta — mas a reunião com os stakeholders é hoje e o produto precisa de alguma referência numérica.`,
      opcoes: [
        {
          texto: 'Entrega a análise no prazo com as limitações claramente documentadas, explica o que pode ser concluído com confiança e se compromete com uma análise mais robusta para o dia seguinte.',
          pontos: 20,
          feedback: 'Entregar o que é possível com transparência sobre o que não é — e propor o próximo passo — é "ir de turma": o time toma a melhor decisão que os dados disponíveis permitem, sem ser enganado sobre a qualidade deles.'
        },
        {
          texto: 'Entrega a análise no prazo, sem mencionar as limitações para não enfraquecer o argumento na reunião. Os dados são bons o suficiente.',
          pontos: -10,
          feedback: 'Omitir limitações é entregar uma análise falsa de precisão. Decisões tomadas com confiança equivocada nos dados geram consequências que o time inteiro vai pagar — e o engenheiro que a omitiu perde credibilidade.'
        },
        {
          texto: 'Recusa entregar em 2 horas e explica que uma análise mal feita é pior que nenhuma análise. A reunião vai ter que ser remarcada.',
          pontos: 10,
          feedback: 'Preservar a qualidade é um valor real, mas recusar sem oferecer alternativa ignora a necessidade do produto. "Vai de turma" é encontrar o que é possível entregar bem dentro das restrições — não apenas dizer o que não é possível.'
        }
      ]
    },
    // --- Q5 ---
    {
      titulo: 'Situação — O pipeline que gerou dados errados',
      situacao: `O Engenheiro de Dados percebe que o pipeline que alimenta os relatórios da diretoria está gerando números inconsistentes há 3 dias. Os relatórios já foram apresentados. Ele suspeita de uma mudança de schema feita por outra equipe, mas ainda não tem certeza.`,
      opcoes: [
        {
          texto: 'Conserta o pipeline silenciosamente e envia um relatório corrigido por e-mail, sem mencionar a inconsistência anterior. O que importa é ter os dados certos daqui pra frente.',
          pontos: -10,
          feedback: 'Corrigir em silêncio é proteger a própria imagem às custas da confiança coletiva. Quem tomou decisões com os dados errados nos últimos 3 dias precisa saber — para revisitar ou para entender o contexto.'
        },
        {
          texto: 'Espera confirmar a causa raiz com certeza antes de comunicar. Não quer apontar dedo para outra equipe sem provas.',
          pontos: 10,
          feedback: 'Responsabilidade com a comunicação é um valor. Mas esperar certeza absoluta quando os dados já chegaram à diretoria é deixar o time vulnerável. É possível comunicar a suspeita com clareza sobre o que ainda não está confirmado.'
        },
        {
          texto: 'Comunica imediatamente ao time e aos stakeholders que os relatórios dos últimos 3 dias podem ter inconsistências, documenta o problema suspeito e coordena com a outra equipe para correção e reprocessamento.',
          pontos: 20,
          feedback: 'Comunicar com transparência — mesmo sem certeza absoluta — e coordenar a correção com quem pode ter causado o problema é "ir de turma": o time é avisado, e a solução é construída em colaboração, não em culpa.'
        }
      ]
    },
    // --- Q6 ---
    {
      titulo: 'Situação — O modelo com dados insuficientes',
      situacao: `O Engenheiro de Dados está no meio de um projeto de modelo preditivo. Percebe que os dados históricos disponíveis são insuficientes para um modelo confiável. O prazo está na metade e a entrega é esperada pelo time de produto.`,
      opcoes: [
        {
          texto: 'Continua o projeto usando os dados disponíveis e entrega o modelo com um disclaimer técnico na documentação sobre as limitações do dataset.',
          pontos: 10,
          feedback: 'Documentar as limitações é honesto — e melhor do que silêncio. Mas deixar a descoberta para a entrega priva o time de reagir. Antecipar a conversa permite decidir juntos: continuar, ajustar o escopo ou buscar mais dados.'
        },
        {
          texto: 'Entrega o modelo sem mencionar as limitações, esperando que os resultados mostrem o problema por conta própria.',
          pontos: -10,
          feedback: 'Entregar um modelo sabendo de limitações críticas sem comunicar é distribuir um risco que só você conhece. O time vai usar o modelo — e pagar o custo de uma decisão tomada com informação incompleta.'
        },
        {
          texto: 'Para e comunica ao time a limitação de dados descoberta, apresenta alternativas — dados externos, escopo reduzido, prazo estendido — e propõe que o time decida o caminho junto.',
          pontos: 20,
          feedback: 'Trazer um problema com opções para o time é "ir de turma" na forma mais prática. A entrega pode mudar — mas a confiança no trabalho e no engenheiro que foi honesto fica.'
        }
      ]
    }
  ],

  ux: [
    // --- Q1 ---
    {
      titulo: 'Situação — Os dados do usuário contra a decisão já tomada',
      situacao: `Os testes com usuários mostram que a funcionalidade nova — já anunciada externamente — vai gerar confusão e aumento de abandono. O UX Designer tem os dados sólidos. A entrega é em 10 dias e todos no time já estão construindo em cima do design aprovado.`,
      opcoes: [
        {
          texto: 'Entrega o design como aprovado e envia um e-mail ao time registrando a preocupação formalmente — se der errado, a evidência está documentada.',
          pontos: -10,
          feedback: 'Registrar discordância sem levar o dado para a conversa é se proteger individualmente sem ajudar o time. "Ir de turma" é trazer a evidência para que a turma possa decidir melhor — não só se cobrir.'
        },
        {
          texto: 'Compartilha os dados com o time e com os stakeholders, propõe ajustes viáveis que reduzam o atrito sem derrubar o que já foi construído, e coloca a decisão na mesa do grupo — com os riscos documentados.',
          pontos: 20,
          feedback: 'Trazer o dado de volta para a turma, com proposta e abertura, é "ir de turma" com responsabilidade. O time que decide com informação completa entrega com mais confiança — e o usuário agradece.'
        },
        {
          texto: 'Apresenta os dados em particular para o líder de produto e deixa que ele decida se vale levar para o grupo — não quer criar ansiedade no time a 10 dias da entrega.',
          pontos: 10,
          feedback: 'Alinhar com o produto antes é prudente, mas filtrar a informação antes de chegar ao time retira do grupo a chance de encontrar uma saída. "Ir de turma" significa que os dados pertencem à turma, não a uma cadeia de aprovação privada.'
        }
      ]
    },
    // --- Q2 ---
    {
      titulo: 'Situação — O problema que descobri depois da aprovação',
      situacao: `Já em execução, o UX Designer percebe que a jornada aprovada tem uma falha que vai gerar fricção real para o usuário. Corrigir exige retrabalho do time de Dev e atraso na entrega. O UX sabe que foi ele quem aprovou o design original.`,
      opcoes: [
        {
          texto: 'Corrige o fluxo silenciosamente e apresenta a versão ajustada ao time como "melhoria de polimento" — evita a percepção de que o design original estava com problema.',
          pontos: -10,
          feedback: 'Ocultar informação do time para proteger a própria imagem é o oposto de "ir de turma". A turma que não sabe o que mudou e por quê não consegue se adaptar — e o problema volta.'
        },
        {
          texto: 'Apresenta o problema ao time com transparência — o que foi identificado, o impacto para o usuário e o custo da correção — e propõe que decidam juntos: corrigir agora ou endereçar na próxima versão.',
          pontos: 20,
          feedback: 'Trazer um problema difícil para o time, mesmo quando você foi parte da origem, é coragem e confiança na turma. Decisão tomada com informação completa é sempre melhor do que decisão tomada para proteger aparências.'
        },
        {
          texto: 'Registra o problema no backlog para a próxima versão e não menciona agora — o que foi aprovado pelo time deve ser respeitado, e o momento da entrega não é hora de abrir retrabalho.',
          pontos: 10,
          feedback: 'Registrar para a próxima versão é uma opção legítima — mas a decisão de quando endereçar pertence ao time, não só ao UX. Guardar a informação sem levar ao grupo priva a turma de fazer essa escolha conscientemente.'
        }
      ]
    },
    // --- Q3 ---
    {
      titulo: 'Situação — O design system que o time ignorou',
      situacao: `Três semanas após a entrega do design system, o UX Designer percebe que os desenvolvedores estão construindo componentes próprios. A interface está ficando inconsistente. O UX sabe que não envolveu o time no processo de criação — foi desenvolvido de forma independente e entregue pronto.`,
      opcoes: [
        {
          texto: 'Pede ao Tech Lead que torne obrigatório o uso do design system — se não houver enforcement, o esforço de construção foi em vão.',
          pontos: -10,
          feedback: 'Forçar adoção sem entender por que o time não está usando é tratar o sintoma, não a causa. Usar hierarquia para substituir conversa raramente constrói colaboração real.'
        },
        {
          texto: 'Atualiza a documentação com mais exemplos e um guia de uso mais visual, e reenvia para o time — talvez a barreira seja de clareza, não de disposição.',
          pontos: 10,
          feedback: 'Melhorar a documentação é um esforço válido, mas parte de uma suposição. Se o time não está usando, a primeira pergunta é entender por quê — e isso só se descobre conversando com quem não está usando.'
        },
        {
          texto: 'Conversa com os desenvolvedores para entender as barreiras reais e propõe co-construir a próxima versão do design system junto com eles.',
          pontos: 20,
          feedback: 'Design system construído sem o time tende a não ser usado pelo time. "Ir de turma" na construção de ferramentas coletivas significa que o time que vai usar precisa ter voz em como elas são feitas.'
        }
      ]
    },
    // --- Q4 ---
    {
      titulo: 'Situação — A pesquisa que contradiz a liderança',
      situacao: `O UX Designer coletou dados de usuários que vão contra a direção que o time inteiro já decidiu e comunicou para a liderança. O feedback é válido e baseado em dados sólidos. A liderança está animada com a direção atual.`,
      opcoes: [
        {
          texto: 'Apresenta os dados de usuário para o time e para a liderança com transparência, reconhece o conflito com a decisão anterior e propõe um workshop para avaliar as opções.',
          pontos: 20,
          feedback: 'Dados de usuário que contradizem a direção atual são informação valiosa — não uma ameaça. Trazê-los com transparência e proposta de processo é "ir de turma" com a liderança e com os usuários ao mesmo tempo.'
        },
        {
          texto: 'Compartilha os dados com o time de design mas não leva à liderança agora. O time decide internamente se e como comunicar.',
          pontos: 10,
          feedback: 'Compartilhar com parte do time é melhor do que silêncio, mas filtrar a informação da liderança cria um silo de conhecimento. "Vai de turma" inclui a liderança na conversa — não apenas o time de design.'
        },
        {
          texto: 'Documenta o feedback no relatório de pesquisa e arquiva. A decisão já foi tomada, e questionar agora só vai atrasar tudo.',
          pontos: -10,
          feedback: 'Arquivar uma informação relevante para não criar conflito é silenciar os usuários — e o time. A decisão pode até não mudar, mas a turma tem direito de saber o que os usuários estão dizendo.'
        }
      ]
    },
    // --- Q5 ---
    {
      titulo: 'Situação — A dor que está fora do escopo',
      situacao: `Numa sessão de descoberta, o UX Designer coleta dados que mostram que a principal dor dos usuários é algo completamente fora do escopo atual do produto. O time está focado em entregar features já prometidas.`,
      opcoes: [
        {
          texto: 'Registra os insights no repositório de pesquisa para consulta futura. Não é o momento certo para desviar o foco do time.',
          pontos: 10,
          feedback: 'Registrar os dados é responsável — mas guardar para si significa que o time decide sem a informação. Mesmo fora do escopo atual, uma descoberta sobre a principal dor dos usuários merece aparecer na conversa do time.'
        },
        {
          texto: 'Não menciona os dados para não criar discussão sobre escopo. O time já tem o suficiente no prato.',
          pontos: -10,
          feedback: 'Filtrar informação de usuário para "não sobrecarregar" o time é decidir pelo time o que ele deve ou não saber. Isso fragiliza a confiança no processo de discovery e na área de UX.'
        },
        {
          texto: 'Compartilha os insights com o time e o PM, propõe uma conversa rápida para avaliar se há como endereçar a dor maior sem comprometer as entregas atuais.',
          pontos: 20,
          feedback: 'Trazer a informação com uma proposta de conversa — sem impor mudança de escopo — é "ir de turma": o time decide com dados reais, não com suposições protegidas do designer.'
        }
      ]
    },
    // --- Q6 ---
    {
      titulo: 'Situação — A inconsistência visual na semana de entrega',
      situacao: `O UX Designer percebe uma inconsistência visual grave entre o que foi aprovado no design e o que está sendo implementado. A sprint termina em 3 dias e o time está em modo de entrega intensa.`,
      opcoes: [
        {
          texto: 'Abre um bug no board com a especificação correta e prioridade alta. A responsabilidade de corrigir está formalmente registrada.',
          pontos: 10,
          feedback: 'Registrar no board é transparente — mas abrir um ticket e esperar, sem falar com quem está implementando, reduz as chances de a correção acontecer nessa sprint. Uma conversa direta resolve em minutos o que um ticket resolve em dias.'
        },
        {
          texto: 'Decide que vai corrigir na próxima sprint para não atrapalhar a entrega. A inconsistência é grande mas não quebra a funcionalidade.',
          pontos: -10,
          feedback: 'Tomar a decisão de adiar sozinho, sem consultar o time, é assumir que todo mundo está de acordo. A gravidade da inconsistência é informação que o time precisa para decidir junto — não só o UX.'
        },
        {
          texto: 'Conversa diretamente com o desenvolvedor responsável, avalia o impacto real da correção no prazo e envolve o Tech Lead para decidir: corrigir agora ou documentar como dívida de design para priorizar na próxima sprint.',
          pontos: 20,
          feedback: 'Avaliar o impacto real antes de decidir, e envolver quem precisa estar na decisão, é "ir de turma" — mesmo em semana de entrega. O resultado pode ser o mesmo, mas a decisão é coletiva e informada.'
        }
      ]
    }
  ],

  po: [
    // --- Q1 ---
    {
      titulo: 'Situação — O prazo que o time não acredita',
      situacao: `O negócio comprometeu a entrega de uma feature em 3 semanas. O Tech Lead consultou o time: a estimativa real é 6 semanas. Com esforço extra, talvez 4 — mas sem garantias, e sem ter conversado com o time sobre essa possibilidade. O prazo já foi comunicado ao cliente.`,
      opcoes: [
        {
          texto: 'Aceita as 3 semanas internamente e mobiliza o time para "dar o seu máximo" — comprometimento importa, e o time vai se ajustar quando sentir a urgência real.',
          pontos: -10,
          feedback: 'Comprometer o time com prazo sem base real, sem transparência sobre o que se está assumindo, é gastar a confiança do time. "Ir de turma" começa com honestidade sobre o que é possível.'
        },
        {
          texto: 'Reúne o time para construírem juntos o cenário real — estimativas, riscos e alternativas — e leva essa posição coletiva ao negócio e ao cliente, propondo escopo reduzido em 3 semanas ou a feature completa em 6. O time fala a uma só voz.',
          pontos: 20,
          feedback: 'Construir a resposta com o time e levá-la unida ao negócio é "ir de turma" no sentido mais pleno: ninguém carrega a pressão sozinho, e o cliente decide com a informação real que a turma produziu junta.'
        },
        {
          texto: 'Convoca o time para uma sessão de re-estimativa e propõe tentar chegar em 4 semanas com foco — se o time topar, é uma decisão coletiva que o negócio pode apresentar ao cliente.',
          pontos: 10,
          feedback: 'Envolver o time na re-estimativa é correto. Mas propor 4 semanas ao cliente sem levar o cenário real de 6 é resolver o problema interno sem resolver o problema externo. A transparência precisa incluir quem faz a demanda.'
        }
      ]
    },
    // --- Q2 ---
    {
      titulo: 'Situação — O impasse que paralisa a sprint',
      situacao: `Dois seniores do time estão há duas semanas em desacordo técnico sobre como construir um módulo crítico. Ambos têm argumentos válidos. O Tech Lead já tentou facilitar uma conversa entre os dois sem sucesso. A sprint está parada.`,
      opcoes: [
        {
          texto: 'Decide pela solução que avalia como tecnicamente superior e comunica ao time — impasse prolongado custa mais do que uma decisão imperfeita, e é responsabilidade do Tech Lead destravar.',
          pontos: -10,
          feedback: 'Decisão imposta resolve o bloqueio mas não resolve o conflito. Quem ficou de fora pode se desengajar — e o time perde o que o desacordo estava tentando proteger: a melhor solução técnica.'
        },
        {
          texto: 'Facilita uma sessão com o time inteiro onde cada lado apresenta os argumentos, o grupo discute e chegam a uma decisão coletiva documentada — todos são co-responsáveis pelo caminho escolhido.',
          pontos: 20,
          feedback: 'Transformar um conflito bilateral em decisão coletiva é "ir de turma" na liderança técnica. O time que decide junto sustenta a decisão junto — e os dois seniores saem engajados, não derrotados.'
        },
        {
          texto: 'Propõe um spike de dois dias para cada abordagem e decide com base nos resultados práticos — dados concretos encerram o debate melhor do que qualquer argumento.',
          pontos: 10,
          feedback: 'Spike é útil quando há incerteza técnica genuína. Quando o impasse é sobre valores e arquitetura, mais dois dias de trabalho paralelo sem processo de decisão só adiou — não resolveu. Mas ao menos envolve o time na experimentação.'
        }
      ]
    },
    // --- Q3 ---
    {
      titulo: 'Situação — A boa ideia do júnior que o time não levou a sério',
      situacao: `Um dev júnior propôs uma mudança de arquitetura promissora em chat. Os seniores reagiram com ceticismo e o assunto foi encerrado. O Tech Lead, lendo depois, achou que a ideia tinha mérito real — mas o júnior já sinalizou que não vai insistir para não criar atrito.`,
      opcoes: [
        {
          texto: 'Respeita o resultado da discussão do time — se os seniores reagiram com ceticismo, provavelmente há razões técnicas que o Tech Lead não captou completamente na leitura.',
          pontos: -10,
          feedback: 'Deixar uma boa ideia morrer por dinâmica de grupo sem investigar o mérito é deixar o time mais pobre. "Ir de turma" significa criar condições para que todas as vozes sejam ouvidas — especialmente as que têm menos espaço.'
        },
        {
          texto: 'Adota a proposta e anuncia a mudança no plano da sprint — se o Tech Lead avalia que tem mérito, é responsabilidade dele agir com base nessa avaliação.',
          pontos: -10,
          feedback: 'Adotar uma proposta que o time rejeitou sem reabrir o processo é passar por cima do coletivo com a autoridade da liderança. "Ir de turma" é abrir o espaço, não substituir o time.'
        },
        {
          texto: 'Reabre a conversa formalmente, convida o júnior a apresentar a ideia com mais tempo e estrutura para o time inteiro, e facilita uma avaliação genuína — sem que a dinâmica sênior/júnior defina o resultado.',
          pontos: 20,
          feedback: 'Dar espaço real para uma ideia descartada por dinâmica de grupo é liderança inclusiva. "Vai de turma" também significa que a melhor ideia vence — não a mais antiga ou a mais alta na hierarquia.'
        }
      ]
    },
    // --- Q4 ---
    {
      titulo: 'Situação — O conhecimento que pode ir embora',
      situacao: `O Tech Lead soube por pessoas do time que um membro sênior está cogitando sair da empresa. Se sair, o conhecimento sobre um módulo crítico vai junto. A pessoa ainda não sinalizou nada oficialmente.`,
      opcoes: [
        {
          texto: 'Não faz nada até a pessoa sinalizar oficialmente. Especular sobre saída com base em rumores pode criar um clima negativo.',
          pontos: -10,
          feedback: 'Aguardar o oficial enquanto um módulo crítico depende de uma única pessoa é um risco que o time inteiro carrega. "Vai de turma" significa agir no risco agora — não esperar a crise para reconhecer que ele existia.'
        },
        {
          texto: 'Conversa com RH confidencialmente para entender se há algo que possa ser feito para reter o profissional.',
          pontos: 10,
          feedback: 'Conversar com RH é um movimento legítimo, mas resolve só uma parte do problema. A dependência de conhecimento existe independente da saída da pessoa — e esse risco precisa ser endereçado com o time também.'
        },
        {
          texto: 'Inicia um processo de documentação e transferência de conhecimento do módulo crítico com o time, independente da saída ou não, e tem uma conversa direta e honesta com o profissional sobre o que está sentindo.',
          pontos: 20,
          feedback: 'Agir no risco de conhecimento concentrado — sem esperar a crise — e ter uma conversa honesta com a pessoa é "ir de turma": cuida do time e cuida do indivíduo ao mesmo tempo.'
        }
      ]
    },
    // --- Q5 ---
    {
      titulo: 'Situação — A feature que ninguém usa',
      situacao: `O Tech Lead percebe que uma feature construída com muito esforço tem utilização muito baixa — os usuários simplesmente não estão usando. Há pressão da liderança para construir mais features rapidamente.`,
      opcoes: [
        {
          texto: 'Parte para a próxima feature. O time entregou o que foi pedido; a baixa utilização é problema de produto, não de tech.',
          pontos: -10,
          feedback: 'Construir mais sem entender por que o que foi entregue não funciona é acumular desperdício — e o time sente isso. "Vai de turma" também significa parar para aprender antes de acelerar de volta.'
        },
        {
          texto: 'Comunica ao product manager a baixa utilização com os dados e aguarda instrução sobre o que fazer.',
          pontos: 10,
          feedback: 'Trazer os dados ao produto é um passo correto. Mas aguardar instrução passivamente, sem proposta, reduz a contribuição do time técnico na decisão. Tech Lead e produto constroem a resposta juntos — não em sequência.'
        },
        {
          texto: 'Traz os dados de utilização para uma conversa com o time e o produto, propõe investigar a causa raiz antes de partir para a próxima feature e envolve o time na decisão sobre o que fazer.',
          pontos: 20,
          feedback: 'Parar para entender antes de avançar, e fazer isso com o time e o produto juntos, é "ir de turma": a decisão é coletiva, o aprendizado é compartilhado, e o próximo passo é mais consciente.'
        }
      ]
    },
    // --- Q6 ---
    {
      titulo: 'Situação — O conflito técnico invisível na reunião',
      situacao: `O Tech Lead está numa reunião de alinhamento e percebe que dois times diferentes estão apresentando planos que vão criar conflito de dados em produção. Nenhum dos outros participantes percebeu. A reunião está quase acabando.`,
      opcoes: [
        {
          texto: 'Anota o conflito para endereçar depois com cada time separadamente. Interromper a reunião agora vai criar constrangimento.',
          pontos: -10,
          feedback: 'Guardar uma informação crítica para não criar constrangimento é deixar dois times saírem da reunião no caminho errado. O custo de interromper é muito menor do que o custo de dois planos conflitantes chegando à produção.'
        },
        {
          texto: 'Fala com um dos tech leads em particular depois da reunião para alinhar bilateralmente.',
          pontos: 10,
          feedback: 'Resolver bilateralmente é melhor do que não resolver. Mas um conflito que envolve dois times merece uma conversa com os dois times — não uma solução negociada nos bastidores que o outro time não viu.'
        },
        {
          texto: 'Sinaliza o conflito na própria reunião com clareza e propõe que os dois times incluam um alinhamento técnico conjunto antes de implementar os respectivos planos.',
          pontos: 20,
          feedback: 'Trazer o problema à superfície no momento em que todos estão presentes — com uma proposta de solução — é "ir de turma": economiza tempo do time inteiro e evita que o conflito chegue à produção.'
        }
      ]
    }
  ]
};
