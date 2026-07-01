// ====================================================================
//  A GENTE VAI DE TURMA — O Incidente em Produção
//  Dados do jogo: personagens, cenários e configurações
// ====================================================================

const CONFIG = {
  vidaInicialIncidente: 200,
  tempoDiscussao: 60
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
    {
      titulo: 'A dívida que só eu sei',
      situacao: `Sprint fecha amanhã. A solução funciona, mas vai gerar problema grave de performance em 2 meses. O risco está num comentário no código — mas o time não sabe. O que faz?`,
      opcoes: [
        {
          texto: 'Entrega. Documentou o risco no código; quem passar pelo trecho vai ver.',
          pontos: 10,
          feedback: 'Documentar é melhor do que silenciar, mas comentário no código é invisível para quem precisa decidir agora. O risco precisa chegar às pessoas certas, não apenas ao repositório.'
        },
        {
          texto: 'Registra a dívida no backlog com contexto claro, menciona no standup e alinha com o Tech Lead — a decisão é da turma.',
          pontos: 20,
          feedback: 'Tornar o risco visível para o time é o que transforma um problema individual em algo que a turma resolve junta. Pedir ajuda para priorizar é "ir de turma" na prática.'
        },
        {
          texto: 'Resolve a dívida sozinho, mesmo que atrase um dia — entregar algo que vai quebrar não combina com qualidade.',
          pontos: -10,
          feedback: 'Agir sozinho sem comunicar o atraso e o motivo não é "ir de turma" — é trabalho invisível. A turma precisa saber o que está acontecendo para apoiar e decidir junto.'
        }
      ]
    },
    {
      titulo: 'Travado e o relógio correndo',
      situacao: `3 horas travado numa integração de API. O colega de Back-End resolveria em minutos — mas pedir ajuda parece fraqueza. A demo com o cliente é em 2 horas. O que faz?`,
      opcoes: [
        {
          texto: 'Continua tentando solo e avisa o Tech Lead no último momento se não conseguir.',
          pontos: -10,
          feedback: 'Segurar a informação até o limite retira do time a chance de ajudar. "Ajudar e pedir ajuda" começa antes de virar crise — não depois.'
        },
        {
          texto: 'Chama o colega de Back-End agora. Se não der tempo, avisa o time com antecedência para ajustar a demo.',
          pontos: 20,
          feedback: 'Pedir ajuda a tempo é sinal de maturidade, não fraqueza. Avisar o time com antecedência permite que a turma se adapte em vez de se surpreender.'
        },
        {
          texto: 'Remove o item da demo por conta própria e avisa só depois — melhor uma demo menor do que expor o problema ao cliente.',
          pontos: 10,
          feedback: 'Proteger a demo é sensato, mas decidir sozinho tira da turma a chance de encontrar outra saída. Comunicar antes vale muito mais do que comunicar depois.'
        }
      ]
    },
    {
      titulo: 'A lib não homologada',
      situacao: `Dev Front-End precisa integrar uma API de terceiros. Encontrou uma lib que resolve em horas, mas não foi homologada por segurança. Construir do zero: 3 dias extras. Entrega: amanhã.`,
      opcoes: [
        {
          texto: 'Usa a lib sem homologação e registra um TODO para depois. A entrega não pode esperar.',
          pontos: -10,
          feedback: 'Contornar o processo de segurança cria um risco que o time inteiro carrega — mesmo sem saber. TODO no código não é processo: é dívida invisível de segurança.'
        },
        {
          texto: 'Contata segurança informalmente pedindo aprovação rápida e usa a lib se ele der OK verbal.',
          pontos: 10,
          feedback: 'Envolver segurança é um passo certo, mas aprovação informal é como nenhuma aprovação para quem não estava nessa conversa. O Tech Lead também precisa estar no loop.'
        },
        {
          texto: 'Escala o dilema ao Tech Lead e ao time, inclui segurança no processo formal e propõe: adiar, reduzir escopo ou homologar com urgência — o time decide junto.',
          pontos: 20,
          feedback: 'Trazer o trade-off real para o time é "ir de turma": ninguém carrega o risco sozinho, e a melhor saída aparece quando todas as perspectivas estão na mesa.'
        }
      ]
    },
    {
      titulo: 'O erro de acessibilidade do sênior',
      situacao: `Dev Front-End percebe que um colega sênior está cometendo um erro grave de acessibilidade em vários componentes. Corrigir depois será muito mais caro. Prazo apertado, ninguém mais percebeu.`,
      opcoes: [
        {
          texto: 'Não fala nada. Questionar um sênior durante prazo apertado vai criar atrito desnecessário.',
          pontos: -10,
          feedback: 'Guardar informação técnica relevante por medo de conflito não é respeito — é omissão. O time e o usuário pagam o preço do silêncio quando o problema cresce.'
        },
        {
          texto: 'Corrige os componentes na sua área sem comentar com o colega. Pelo menos parte do problema fica resolvida.',
          pontos: 10,
          feedback: 'Agir no que é seu é melhor do que silenciar. Mas o erro continua nos componentes do colega — e o custo do silêncio acumula.'
        },
        {
          texto: 'Aborda o colega sênior com respeito, mostra o impacto com dados e exemplos e propõe uma revisão conjunta dos componentes.',
          pontos: 20,
          feedback: 'Compartilhar o que sabe, com dados e com respeito, é o ato mais maduro que um time pode praticar — independente de hierarquia. Senioridade não é imunidade a feedback técnico.'
        }
      ]
    }
  ],

  backend: [
    {
      titulo: 'Incidente às 23h e o fix na mão',
      situacao: `API de pagamento com latência crítica. Fix pronto — mas não testou o impacto no módulo de conciliação. São 23h, está sozinho, ninguém do time foi acionado. O que faz?`,
      opcoes: [
        {
          texto: 'Aplica o fix agora — clientes impactados ativamente, e é o trabalho dele resolver.',
          pontos: -10,
          feedback: 'Fix em produção às 23h sem acionar o time é assumir um risco que pertence à turma. Se quebrar a conciliação, ninguém estará preparado para reagir.'
        },
        {
          texto: 'Aciona o canal de incidente com o diagnóstico, o fix disponível e o risco não testado. O time decide junto se aplica agora.',
          pontos: 20,
          feedback: '"Ajudar e pedir ajuda" vale também às 23h. Trazer o time para uma decisão de risco — mesmo de forma assíncrona — é o que diferencia trabalho em equipe de trabalho solitário em crise.'
        },
        {
          texto: 'Aguarda até de manhã para ter mais pessoas disponíveis — uma decisão assim precisa de mais olhos.',
          pontos: 10,
          feedback: 'Preservar a segurança da decisão é correto, mas esperar sem comunicar o diagnóstico priva o time de uma escolha informada. Acionar o canal não exige aplicar o fix — só coloca o time no loop.'
        }
      ]
    },
    {
      titulo: 'O código do colega que vai dar problema',
      situacao: `A solução do colega — já em produção e elogiada — resolve o problema imediato mas cria um acoplamento que vai travar qualquer evolução futura. O colega não pediu feedback. Como age?`,
      opcoes: [
        {
          texto: 'Abre um PR refatorando o código com a explicação técnica na descrição.',
          pontos: 10,
          feedback: 'Documentar o argumento num PR é transparente, mas refatorar o trabalho de alguém sem conversa direta primeiro soa como crítica, não colaboração.'
        },
        {
          texto: 'Registra a preocupação no backlog e deixa o problema aparecer com o tempo — não é o lugar dele questionar entrega já aprovada.',
          pontos: -10,
          feedback: 'Guardar informação técnica relevante por desconforto de abordagem não é respeito — é omissão. O time paga o preço do silêncio quando o problema escala.'
        },
        {
          texto: 'Conversa com o colega, reconhece o que funcionou na solução e compartilha a preocupação com evidências — propõe explorarem juntos a melhor saída.',
          pontos: 20,
          feedback: 'Compartilhar o que sabe com o colega antes de qualquer ação é "ir de turma": confiança, diálogo direto e construção coletiva do código.'
        }
      ]
    },
    {
      titulo: 'A falha de segurança no PR do outro time',
      situacao: `Revisando um PR de outra squad, o Dev Back-End encontra uma vulnerabilidade grave que poderia expor dados de usuários. O PR está prestes a ser aprovado por revisores que não perceberam.`,
      opcoes: [
        {
          texto: 'Aprova com um comentário sinalizando a vulnerabilidade — espera que a squad do colega resolva antes do deploy.',
          pontos: -10,
          feedback: 'Aprovar um PR com vulnerabilidade conhecida envia sinais contraditórios — e o risco segue para produção.'
        },
        {
          texto: 'Rejeita com comentário técnico claro, sinaliza no canal de segurança e se oferece para ajudar o colega a resolver.',
          pontos: 20,
          feedback: 'Rejeitar com clareza, escalar para o canal certo e oferecer ajuda é a trifeta do "vai de turma" em revisão de código: protege o produto e não abandona o colega.'
        },
        {
          texto: 'Bloqueia o PR e escala diretamente para o gerente do colega pela cadeia de liderança.',
          pontos: 10,
          feedback: 'Bloquear e escalar protege o produto — mas ir à liderança sem falar primeiro com o colega quebra a relação de pares. "Vai de turma" começa pela conversa direta.'
        }
      ]
    },
    {
      titulo: 'A otimização que afeta três times',
      situacao: `Dev Back-End descobriu otimização que reduz latência em 40%, mas exige alteração no schema do banco — o que afeta outras 3 equipes. A ideia é boa e ele tem certeza disso.`,
      opcoes: [
        {
          texto: 'Implementa para demonstrar o ganho com dados reais. Fica mais fácil convencer com resultados.',
          pontos: -10,
          feedback: 'Implementar uma mudança que afeta 3 equipes sem alinhamento é criar um incidente em potencial — mesmo com boa intenção. Resultados obtidos às custas da confiança do time têm preço alto.'
        },
        {
          texto: 'Apresenta a ideia ao Tech Lead e aguarda aprovação. A decisão de envolver outras equipes é dele.',
          pontos: 10,
          feedback: 'Envolver o Tech Lead é correto, mas insuficiente: as outras 3 equipes afetadas também precisam ser ouvidas. "Vai de turma" nessa escala exige alinhamento mais amplo.'
        },
        {
          texto: 'Documenta a proposta com métricas, alinha com as 3 equipes afetadas e com o Tech Lead, e propõe um plano de migração conjunto.',
          pontos: 20,
          feedback: 'Uma boa ideia que envolve outros times pede um processo de alinhamento à altura. Quem faz isso transforma uma otimização técnica em colaboração real entre equipes.'
        }
      ]
    }
  ],

  dados: [
    {
      titulo: 'O dado que incomoda',
      situacao: `A análise contradiz a aposta estratégica anunciada pela diretoria semana passada. Os dados são sólidos. A reunião de resultados é amanhã.`,
      opcoes: [
        {
          texto: 'Apresenta os dados com metodologia clara e se coloca disponível para ajudar na interpretação.',
          pontos: 20,
          feedback: '"Ajudar" também significa compartilhar o que é desconfortável. Dados que chegam ao time inteiros, com contexto e abertura, permitem que a turma tome as melhores decisões.'
        },
        {
          texto: 'Apresenta os dados com ressalvas que suavizam a contradição — a mensagem chega mais palatável, sem confronto.',
          pontos: -10,
          feedback: 'Suavizar dados para proteger o ambiente é reter informação do time. A turma que decide com dados incompletos paga o preço mais tarde — geralmente em dobro.'
        },
        {
          texto: 'Conversa em particular com o gestor antes da reunião e deixa que ele decida como apresentar ao grupo.',
          pontos: 10,
          feedback: 'Alinhar com a liderança antes é prudente, mas filtrar a informação pela liderança antes do time enfraquece a confiança coletiva nos dados — e em quem os produz.'
        }
      ]
    },
    {
      titulo: 'O pipeline que só eu sei operar',
      situacao: `Dois incidentes em 3 semanas no pipeline crítico — em ambos, só o Engenheiro de Dados sabia agir. O pipeline funciona bem quando ele está presente.`,
      opcoes: [
        {
          texto: 'Garante estar sempre disponível on-call. Transferir conhecimento vai tomar mais tempo do que os incidentes em si.',
          pontos: -10,
          feedback: 'Concentrar conhecimento é criar fragilidade para a turma toda — inclusive para quem concentra. O time precisa conseguir agir sem depender de uma única pessoa.'
        },
        {
          texto: 'Documenta o pipeline e disponibiliza no repositório. Se alguém precisar, já sabe onde encontrar.',
          pontos: 10,
          feedback: 'Documentação é melhor do que nada, mas sem transferência ativa raramente resolve dependência de conhecimento. "Ir de turma" é garantir que o time consiga agir — não só que a documentação exista.'
        },
        {
          texto: 'Propõe sessões práticas com o time, simplifica partes do pipeline e cria runbooks de resposta a incidentes — o objetivo é que qualquer um do time consiga agir.',
          pontos: 20,
          feedback: 'Distribuir conhecimento ativamente é o ato mais generoso que um especialista pode fazer pelo time. Quem faz isso não fica menos importante — fica mais confiável.'
        }
      ]
    },
    {
      titulo: 'A análise que veio por fora',
      situacao: `Um VP de outra área pede diretamente ao Engenheiro de Dados uma análise urgente fora do backlog, pedindo discrição. Seriam 2 dias de trabalho invisíveis para o próprio time.`,
      opcoes: [
        {
          texto: 'Atende com discrição — o VP tem autoridade e criar atrito com liderança sênior não vale.',
          pontos: -10,
          feedback: 'Trabalho invisível para o time não pode ser ajudado, priorizado ou reconhecido pelo coletivo. "Ser um só time" também significa que todos sabem no que cada um está trabalhando.'
        },
        {
          texto: 'Recusa e explica que qualquer demanda precisa passar pela priorização do time, sem exceções.',
          pontos: 10,
          feedback: 'Proteger o processo é correto, mas recusar sem oferecer um caminho fecha a conversa sem solução. "Ir de turma" com o VP também é encontrar uma saída que respeite o processo.'
        },
        {
          texto: 'Escuta o pedido e propõe ao VP que a demanda entre no backlog de forma visível — explica que trabalho oculto prejudica a qualidade e a capacidade do time de apoiá-lo.',
          pontos: 20,
          feedback: 'Tornar o trabalho visível cuida do time e do próprio trabalho. Um VP que entende isso vira aliado do processo — e o próximo pedido não virá por fora.'
        }
      ]
    },
    {
      titulo: 'A análise em 2 horas',
      situacao: `Time de produto pediu análise urgente em 2 horas. O Engenheiro de Dados sabe que a pressa vai gerar margem de erro alta — mas a reunião com stakeholders é hoje.`,
      opcoes: [
        {
          texto: 'Entrega no prazo com as limitações claramente documentadas e se compromete com análise mais robusta para o dia seguinte.',
          pontos: 20,
          feedback: 'Entregar o que é possível com transparência sobre o que não é — e propor o próximo passo — é "ir de turma": o time decide com os dados disponíveis, sem ser enganado sobre a qualidade deles.'
        },
        {
          texto: 'Entrega no prazo sem mencionar as limitações — os dados são bons o suficiente para a reunião.',
          pontos: -10,
          feedback: 'Omitir limitações é entregar falsa precisão. Decisões tomadas com confiança equivocada nos dados geram consequências que o time inteiro paga — e o engenheiro perde credibilidade.'
        },
        {
          texto: 'Recusa entregar em 2 horas. Uma análise mal feita é pior que nenhuma — a reunião vai ter que ser remarcada.',
          pontos: 10,
          feedback: 'Preservar a qualidade é um valor real, mas recusar sem oferecer alternativa ignora a necessidade do produto. "Vai de turma" é encontrar o que é possível entregar bem dentro das restrições.'
        }
      ]
    }
  ],

  ux: [
    {
      titulo: 'Os dados do usuário contra a decisão já tomada',
      situacao: `Testes mostram que a funcionalidade nova — já anunciada externamente — vai gerar confusão e aumento de abandono. Dados sólidos. Entrega em 10 dias. O time já está construindo.`,
      opcoes: [
        {
          texto: 'Entrega o design como aprovado e envia um e-mail ao time registrando a preocupação formalmente.',
          pontos: -10,
          feedback: 'Registrar discordância sem levar o dado para a conversa é se proteger individualmente sem ajudar o time. "Ir de turma" é trazer a evidência para que a turma decida melhor — não só se cobrir.'
        },
        {
          texto: 'Compartilha os dados com o time e stakeholders, propõe ajustes viáveis sem derrubar o que já foi construído, e coloca a decisão na mesa do grupo.',
          pontos: 20,
          feedback: 'Trazer o dado de volta para a turma, com proposta e abertura, é "ir de turma" com responsabilidade. O time que decide com informação completa entrega com mais confiança.'
        },
        {
          texto: 'Apresenta os dados em particular para o líder de produto e deixa que ele decida se leva ao grupo.',
          pontos: 10,
          feedback: 'Alinhar com o produto antes é prudente, mas filtrar a informação antes de chegar ao time retira do grupo a chance de encontrar uma saída. Os dados pertencem à turma.'
        }
      ]
    },
    {
      titulo: 'O problema que descobri depois da aprovação',
      situacao: `Já em execução, o UX Designer percebe falha na jornada aprovada que vai gerar fricção real. Corrigir exige retrabalho e atraso. Foi ele quem aprovou o design original.`,
      opcoes: [
        {
          texto: 'Corrige silenciosamente e apresenta ao time como "melhoria de polimento" — evita a percepção de que o design original tinha problema.',
          pontos: -10,
          feedback: 'Ocultar informação do time para proteger a própria imagem é o oposto de "ir de turma". O time que não sabe o que mudou e por quê não consegue se adaptar.'
        },
        {
          texto: 'Apresenta o problema ao time com transparência — o que foi identificado, o impacto e o custo — e propõe que decidam juntos: corrigir agora ou endereçar na próxima versão.',
          pontos: 20,
          feedback: 'Trazer um problema difícil para o time, mesmo quando você foi parte da origem, é coragem e confiança na turma. Decisão com informação completa é sempre melhor do que decisão para proteger aparências.'
        },
        {
          texto: 'Registra no backlog para a próxima versão e não menciona agora — o que foi aprovado pelo time deve ser respeitado.',
          pontos: 10,
          feedback: 'Registrar é uma opção legítima — mas a decisão de quando endereçar pertence ao time. Guardar a informação priva a turma de fazer essa escolha conscientemente.'
        }
      ]
    },
    {
      titulo: 'A pesquisa que contradiz a liderança',
      situacao: `UX Designer coletou dados de usuários que contradizem a direção já decidida pelo time e comunicada à liderança. O feedback é sólido, mas a liderança está animada com o rumo atual.`,
      opcoes: [
        {
          texto: 'Apresenta os dados para o time e para a liderança, reconhece o conflito com a decisão anterior e propõe um workshop para avaliar as opções.',
          pontos: 20,
          feedback: 'Dados de usuário que contradizem a direção atual são informação valiosa — não uma ameaça. Trazê-los com transparência e proposta de processo é "ir de turma" com a liderança e os usuários ao mesmo tempo.'
        },
        {
          texto: 'Compartilha os dados com o time de design mas não leva à liderança agora — o time decide internamente se e como comunicar.',
          pontos: 10,
          feedback: 'Compartilhar com parte do time é melhor do que silêncio, mas filtrar a informação da liderança cria silo de conhecimento. "Vai de turma" inclui a liderança na conversa.'
        },
        {
          texto: 'Documenta o feedback no relatório de pesquisa e arquiva. A decisão já foi tomada — questionar agora só vai atrasar.',
          pontos: -10,
          feedback: 'Arquivar informação relevante para não criar conflito é silenciar os usuários — e o time. A turma tem direito de saber o que os usuários estão dizendo.'
        }
      ]
    },
    {
      titulo: 'A inconsistência visual na semana de entrega',
      situacao: `UX Designer percebe inconsistência visual grave entre o design aprovado e o que está sendo implementado. A sprint termina em 3 dias e o time está em modo de entrega intensa.`,
      opcoes: [
        {
          texto: 'Abre um bug no board com a especificação correta e prioridade alta. A responsabilidade de corrigir está formalmente registrada.',
          pontos: 10,
          feedback: 'Registrar no board é transparente — mas sem falar com quem está implementando, um ticket resolve em dias o que uma conversa resolve em minutos.'
        },
        {
          texto: 'Decide que vai corrigir na próxima sprint para não atrapalhar a entrega. A inconsistência não quebra a funcionalidade.',
          pontos: -10,
          feedback: 'Tomar a decisão de adiar sozinho é assumir que o time concorda. A gravidade da inconsistência é informação que a turma precisa para decidir — não só o UX.'
        },
        {
          texto: 'Conversa com o desenvolvedor responsável, avalia o impacto no prazo e envolve o Tech Lead: corrigir agora ou documentar como dívida de design para a próxima sprint.',
          pontos: 20,
          feedback: 'Avaliar o impacto real antes de decidir, e envolver quem precisa estar na decisão, é "ir de turma" — mesmo em semana de entrega. A decisão é coletiva e informada.'
        }
      ]
    }
  ],

  po: [
    {
      titulo: 'O prazo que o time não acredita',
      situacao: `O negócio comprometeu entrega em 3 semanas. O time estimou 6. Com esforço extra, talvez 4 — sem garantias. O prazo já foi comunicado ao cliente.`,
      opcoes: [
        {
          texto: 'Aceita as 3 semanas e mobiliza o time para "dar o seu máximo" — o time vai se ajustar quando sentir a urgência.',
          pontos: -10,
          feedback: 'Comprometer o time com prazo sem base real é gastar a confiança do time. "Ir de turma" começa com honestidade sobre o que é possível.'
        },
        {
          texto: 'Reúne o time para construírem juntos o cenário real e leva essa posição coletiva ao negócio: escopo reduzido em 3 semanas ou feature completa em 6. O time fala a uma só voz.',
          pontos: 20,
          feedback: 'Construir a resposta com o time e levá-la unida ao negócio é "ir de turma" no sentido mais pleno: ninguém carrega a pressão sozinho, e o cliente decide com a informação real.'
        },
        {
          texto: 'Convoca re-estimativa e propõe tentar chegar em 4 semanas — se o time topar, é decisão coletiva que o negócio pode apresentar ao cliente.',
          pontos: 10,
          feedback: 'Envolver o time na re-estimativa é correto, mas propor 4 semanas sem levar o cenário real de 6 é resolver o problema interno sem resolver o externo.'
        }
      ]
    },
    {
      titulo: 'O impasse que paralisa a sprint',
      situacao: `Dois seniores estão há 2 semanas em desacordo técnico sobre um módulo crítico. Ambos têm argumentos válidos. O Tech Lead já tentou facilitar sem sucesso. A sprint está parada.`,
      opcoes: [
        {
          texto: 'Decide pela solução tecnicamente superior e comunica ao time — impasse prolongado custa mais do que uma decisão imperfeita.',
          pontos: -10,
          feedback: 'Decisão imposta resolve o bloqueio mas não resolve o conflito. Quem ficou de fora pode se desengajar — e o time perde o que o desacordo estava tentando proteger: a melhor solução.'
        },
        {
          texto: 'Facilita uma sessão com o time inteiro onde cada lado apresenta os argumentos e chegam a uma decisão coletiva documentada — todos co-responsáveis pelo caminho.',
          pontos: 20,
          feedback: 'Transformar um conflito bilateral em decisão coletiva é "ir de turma" na liderança técnica. O time que decide junto sustenta a decisão junto — e os dois seniores saem engajados.'
        },
        {
          texto: 'Propõe um spike de 2 dias para cada abordagem e decide com base nos resultados práticos.',
          pontos: 10,
          feedback: 'Spike é útil quando há incerteza técnica genuína. Quando o impasse é sobre valores e arquitetura, mais dois dias paralelos sem processo de decisão só adiou — não resolveu.'
        }
      ]
    },
    {
      titulo: 'O conhecimento que pode ir embora',
      situacao: `Tech Lead soube que um membro sênior está cogitando sair. Se sair, o conhecimento sobre um módulo crítico vai junto. A pessoa não sinalizou nada oficialmente.`,
      opcoes: [
        {
          texto: 'Não faz nada até a pessoa sinalizar oficialmente — especular com base em rumores pode criar clima negativo.',
          pontos: -10,
          feedback: 'Aguardar o oficial enquanto um módulo crítico depende de uma única pessoa é um risco que o time inteiro carrega. "Vai de turma" significa agir no risco agora — não esperar a crise.'
        },
        {
          texto: 'Conversa com RH confidencialmente para entender se há algo que possa ser feito para reter o profissional.',
          pontos: 10,
          feedback: 'Conversar com RH é legítimo, mas resolve só parte do problema. A dependência de conhecimento existe independente da saída — e esse risco precisa ser endereçado com o time também.'
        },
        {
          texto: 'Inicia documentação e transferência de conhecimento do módulo com o time, independente da saída ou não, e tem uma conversa direta e honesta com o profissional.',
          pontos: 20,
          feedback: 'Agir no risco de conhecimento concentrado sem esperar a crise, e ter uma conversa honesta com a pessoa, é "ir de turma": cuida do time e cuida do indivíduo ao mesmo tempo.'
        }
      ]
    },
    {
      titulo: 'O conflito técnico invisível na reunião',
      situacao: `Em reunião de alinhamento, o Tech Lead percebe que dois times estão apresentando planos que vão criar conflito de dados em produção. Ninguém mais percebeu. A reunião está quase acabando.`,
      opcoes: [
        {
          texto: 'Anota o conflito para endereçar depois com cada time separadamente — interromper agora vai criar constrangimento.',
          pontos: -10,
          feedback: 'Guardar informação crítica para não criar constrangimento é deixar dois times saírem da reunião no caminho errado. O custo de interromper é menor do que dois planos conflitantes chegando à produção.'
        },
        {
          texto: 'Fala com um dos tech leads em particular depois da reunião para alinhar bilateralmente.',
          pontos: 10,
          feedback: 'Resolver bilateralmente é melhor do que não resolver. Mas um conflito que envolve dois times merece uma conversa com os dois — não uma solução negociada nos bastidores.'
        },
        {
          texto: 'Sinaliza o conflito na própria reunião e propõe que os dois times incluam um alinhamento técnico conjunto antes de implementar os planos.',
          pontos: 20,
          feedback: 'Trazer o problema à superfície quando todos estão presentes — com proposta de solução — economiza tempo do time inteiro e evita que o conflito chegue à produção.'
        }
      ]
    }
  ]
};
