// ====================================================================
//  A GENTE VAI DE TURMA — O Incidente em Produção
//  Dados do jogo: personagens, cenários e configurações
// ====================================================================

const CONFIG = {
  pontosPorAcerto: 20,
  pontuacaoMaxima: 300,
  limiteParaVencer: 200,
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
//  CENÁRIOS — metáforas de situações reais de cada área
//  correta: true = opção alinhada ao pilar "A gente vai de turma"
// ---------------------------------------------------------------------

const CENARIOS = {
  frontend: [
    {
      titulo: 'Situação 1 — A dívida que só eu sei',
      situacao: `Sprint fecha amanhã. O Dev Front-End tem uma solução funcionando, mas a abordagem vai gerar problema sério de performance em dois meses. Documentou o risco no próprio código com um comentário técnico detalhado. Considera que fez a sua parte. Mas o time não sabe. O que faz?`,
      opcoes: [
        { texto: 'Entrega e deixa o comentário no código falar por si — quem passar pelo trecho vai ver o risco. Documentação técnica é responsabilidade individual.', correta: false, feedback: 'Risco documentado só no código é risco invisível para o time. "Vai de turma" significa compartilhar o que sabe de forma que todos possam agir — não só quem tropeçar no problema depois.' },
        { texto: 'Registra a dívida no backlog do time com contexto claro, menciona no standup e alinha com o Tech Lead o que deve ser priorizado — a decisão é da turma, não só sua.', correta: true, feedback: 'Tornar a informação visível para o time é o que transforma um risco individual num problema que a turma pode resolver junta. Pedir ajuda para priorizar é "ir de turma" na prática.' },
        { texto: 'Resolve a dívida técnica por conta própria, mesmo que atrase um dia — entregar algo que sabe que vai quebrar não combina com qualidade.', correta: false, feedback: 'Agir sozinho sem comunicar o time sobre o atraso e o motivo não é "ir de turma" — é trabalho invisível. A turma precisa saber o que está acontecendo para apoiar e decidir junto.' }
      ]
    },
    {
      titulo: 'Situação 2 — Travado e o relógio correndo',
      situacao: `O Dev Front-End está há três horas travado num problema de integração com a API. Sabe que o colega de Back-End provavelmente resolveria em minutos — mas não quer parecer que não sabe o que está fazendo. A demo com o cliente é em duas horas. O que faz?`,
      opcoes: [
        { texto: 'Continua tentando resolver sozinho e, se não conseguir, avisa o Tech Lead no último momento que o item não vai entrar na demo.', correta: false, feedback: 'Segurar a informação até o último momento retira do time a chance de ajudar. "Ajudar e pedir ajuda" começa antes de virar crise — não depois.' },
        { texto: 'Chama o colega de Back-End agora, explica o bloqueio e resolve junto. Se ainda assim não der tempo, avisa o time com antecedência para ajustar a demo.', correta: true, feedback: 'Pedir ajuda a tempo é sinal de maturidade, não fraqueza. E avisar o time com antecedência quando há risco é o que permite que a turma se adapte em vez de se surpreender.' },
        { texto: 'Remove o item da demo por conta própria e avisa só depois — melhor uma demo menor do que expor o problema na frente do cliente.', correta: false, feedback: 'Tomar a decisão sozinho sem consultar o time retira da turma a chance de encontrar outra saída. Decisões que afetam o coletivo pedem conversa coletiva.' }
      ]
    },
    {
      titulo: 'Situação 3 — O PR que ninguém aprova',
      situacao: `O Dev Front-End abriu um PR há dois dias. O colega de Back-End — único revisor disponível — está sobrecarregado. Sem o merge, outras três pessoas do time estão bloqueadas. O Dev sabe disso mas não quer parecer que está "cobrando" o colega. O que faz?`,
      opcoes: [
        { texto: 'Espera mais um dia. Pressionar colega sobrecarregado vai gerar atrito desnecessário — o bloqueio vai se resolver quando ele tiver espaço.', correta: false, feedback: 'Silêncio por cortesia quando o time está bloqueado não é cuidado com o colega — é omissão com a turma. Nomear o bloqueio com leveza é cuidar dos dois ao mesmo tempo.' },
        { texto: 'Mergeia por conta própria — já revisou o código, confia no que fez, e o bloqueio coletivo é urgente demais para esperar processo.', correta: false, feedback: '"Vai de turma" também significa confiar no processo que a turma acordou. Burlar a revisão sozinho remove a segurança coletiva, mesmo com boa intenção.' },
        { texto: 'Sinaliza o bloqueio no canal do time com objetividade, propõe um pair review rápido ao vivo com o colega e oferece ajudar no que ele estiver acumulado em troca.', correta: true, feedback: 'Nomear o problema, propor uma saída e oferecer ajuda de volta é "ir de turma" em sua forma mais concreta: colaboração sem cobrar, sem omitir.' }
      ]
    }
  ],

  backend: [
    {
      titulo: 'Situação 1 — Incidente às 23h e o fix na mão',
      situacao: `A API de pagamento está com latência crítica. O Dev Back-End identificou a causa e tem um fix pronto — mas sabe que não testou o impacto no módulo de conciliação. Está sozinho, são 23h, e ninguém do time foi acionado ainda. O que faz?`,
      opcoes: [
        { texto: 'Aplica o fix agora — clientes estão sendo impactados ativamente, e esperar para acionar o time vai prolongar o problema. É o trabalho dele resolver isso.', correta: false, feedback: 'Fix em produção às 23h sem acionar o time é assumir um risco que pertence à turma, não só a um indivíduo. Se quebrar a conciliação, ninguém estará preparado para reagir.' },
        { texto: 'Aciona o canal de incidente, compartilha o diagnóstico, o fix disponível e o risco não testado. A turma decide junta se aplica agora ou aguarda mais teste.', correta: true, feedback: '"Ajudar e pedir ajuda" vale também às 23h. Trazer o time para uma decisão de risco, mesmo que de forma assíncrona, é o que diferencia trabalho em equipe de trabalho solitário em crise.' },
        { texto: 'Aguarda até de manhã para ter mais pessoas disponíveis antes de agir — uma decisão com risco assim precisa de mais olhos, e o incidente pode se estabilizar sozinho.', correta: false, feedback: 'Esperar sem comunicar que o problema foi identificado e que existe um fix disponível priva o time de tomar uma decisão informada. A turma precisa saber o que você sabe.' }
      ]
    },
    {
      titulo: 'Situação 2 — O código do colega que vai dar problema',
      situacao: `O Dev Back-End percebe que a solução do colega — já em produção e elogiada pelo time — resolve o problema imediato mas cria um acoplamento que vai travar qualquer evolução futura. O colega não pediu feedback. Como age?`,
      opcoes: [
        { texto: 'Abre um PR refatorando o código com a explicação técnica na descrição — o argumento está documentado, e o colega pode aceitar ou recusar.', correta: false, feedback: 'Refatorar o trabalho do colega sem conversa direta, mesmo com intenção técnica boa, quebra confiança. "Vai de turma" começa com diálogo, não com ação unilateral.' },
        { texto: 'Registra a preocupação no backlog e deixa o problema aparecer sozinho com o tempo — não é o lugar dele questionar uma entrega já aprovada pelo time.', correta: false, feedback: 'Guardar uma informação técnica relevante por desconforto de abordagem não é respeito — é omissão. O time paga o preço do silêncio quando o problema escala.' },
        { texto: 'Conversa diretamente com o colega, reconhece o que funcionou na solução e compartilha a preocupação técnica com evidências concretas — propõe explorarem juntos a melhor saída.', correta: true, feedback: 'Compartilhar o que sabe com o colega antes de qualquer ação é "ir de turma": confiança, diálogo direto e construção coletiva do código — não só da feature.' }
      ]
    },
    {
      titulo: 'Situação 3 — O retrabalho que só eu enxergo',
      situacao: `No meio do desenvolvimento, o Dev Back-End descobre que outro time da empresa está construindo exatamente o mesmo serviço. Comunicar isso pode complicar a sprint atual — e talvez o problema seja resolvido antes de a duplicidade virar conflito. O que faz?`,
      opcoes: [
        { texto: 'Continua o desenvolvimento e monitora de longe o outro time. Se a sobreposição virar problema real, aí escala — por enquanto é especulação.', correta: false, feedback: '"Ser um só Itaú" significa que retrabalho que afeta outro time já é problema do time — não precisa virar crise para merecer atenção. A informação que você tem hoje evita o custo de amanhã.' },
        { texto: 'Para o desenvolvimento até que o conflito esteja resolvido — não faz sentido construir algo que pode ser redundante.', correta: false, feedback: 'Paralisar sozinho sem comunicar o time é tomar uma decisão coletiva de forma individual. A turma precisa de você com a informação na mesa, não desaparecido da sprint.' },
        { texto: 'Sinaliza a sobreposição ao Tech Lead e ao time com evidências, propõe uma conversa rápida entre os dois times para alinhar, e continua o que claramente não tem sobreposição enquanto isso.', correta: true, feedback: 'Trazer a informação estratégica para a superfície com uma proposta é "ser um só Itaú" na prática. Quem age assim não pensa só na própria sprint — pensa no coletivo.' }
      ]
    }
  ],

  dados: [
    {
      titulo: 'Situação 1 — O dado que incomoda',
      situacao: `A análise do Engenheiro de Dados contradiz a aposta estratégica anunciada pela diretoria semana passada. Os dados são sólidos. A reunião de resultados é amanhã. Ele sabe que apresentar isso pode gerar um momento difícil — mas não apresentar significa que decisões continuarão sendo tomadas com base em premissas erradas. O que faz?`,
      opcoes: [
        { texto: 'Apresenta os dados com a metodologia clara e se coloca disponível para ajudar na interpretação — o papel da área de dados é informar, e o time precisa dessas informações para decidir bem.', correta: true, feedback: '"Ajudar" também significa compartilhar o que é desconfortável. Dados que chegam ao time inteiros, com contexto e abertura para diálogo, são o que permitem que a turma tome as melhores decisões.' },
        { texto: 'Apresenta os dados, mas inclui ressalvas que suavizam a contradição — a mensagem chega de forma mais palatável, sem criar um confronto desnecessário no grupo.', correta: false, feedback: 'Suavizar dados para proteger o ambiente é reter informação do time. A turma que decide com dados incompletos paga o preço mais tarde — geralmente em dobro.' },
        { texto: 'Conversa em particular com o gestor antes da reunião e deixa que ele decida como levar os dados ao grupo — é mais respeitoso do que expor o conflito na frente de todos.', correta: false, feedback: 'Filtrar a informação pela liderança antes de compartilhar com o time cria um canal de controle que enfraquece a confiança coletiva nos dados — e no engenheiro que os produz.' }
      ]
    },
    {
      titulo: 'Situação 2 — O pipeline que só eu sei operar',
      situacao: `Dois incidentes em três semanas ocorreram no pipeline de dados crítico porque ninguém além do Engenheiro de Dados sabia como agir. Em ambos os casos, ele resolveu rapidamente. O pipeline funciona bem quando ele está presente. O que faz?`,
      opcoes: [
        { texto: 'Garante estar sempre disponível on-call — é a solução mais eficiente. Tentar transferir conhecimento de algo tão complexo vai tomar mais tempo do que os incidentes em si.', correta: false, feedback: '"Confiar e trabalhar com autonomia" significa que o time precisa conseguir agir sem depender de uma pessoa. Concentrar conhecimento é criar fragilidade para a turma toda — inclusive para quem concentra.' },
        { texto: 'Documenta o pipeline e disponibiliza no repositório. Se alguém precisar, já sabe onde está.', correta: false, feedback: 'Documentação sem transferência ativa raramente resolve dependência de conhecimento. "Ir de turma" é garantir que o time consiga agir, não apenas que a documentação exista em algum lugar.' },
        { texto: 'Propõe sessões práticas com o time, simplifica partes do pipeline para facilitar a operação por mais pessoas e cria runbooks de resposta a incidentes — o objetivo é que qualquer pessoa do time consiga agir.', correta: true, feedback: 'Distribuir conhecimento ativamente é o ato mais generoso que um especialista pode fazer pelo time. Quem faz isso não fica menos importante — fica mais confiável.' }
      ]
    },
    {
      titulo: 'Situação 3 — A análise que veio por fora',
      situacao: `Um VP de outra área pede diretamente ao Engenheiro de Dados uma análise urgente que não está no backlog do time. O VP pede discrição. O trabalho seria de dois dias. O Engenheiro sabe que aceitar significa dois dias invisíveis para o próprio time. O que faz?`,
      opcoes: [
        { texto: 'Atende com discrição — o VP tem autoridade, a demanda parece legítima, e criar atrito com liderança sênior não vale a pena.', correta: false, feedback: 'Trabalho invisível para o time é trabalho que não pode ser ajudado, priorizado ou reconhecido pelo coletivo. "Ser um só Itaú" também significa que o time sabe no que cada um está trabalhando.' },
        { texto: 'Recusa e explica que qualquer demanda precisa passar pela priorização do time — sem exceções para ninguém.', correta: false, feedback: 'Recusar sem oferecer um caminho fecha a conversa sem solução. "Ir de turma" com o VP também é encontrar uma saída que respeite o processo sem desconsiderar a necessidade dele.' },
        { texto: 'Escuta o pedido, avalia o esforço e propõe ao VP que a demanda entre no backlog de forma visível — explica que trabalho oculto prejudica a qualidade da análise e a capacidade do time de apoiá-lo.', correta: true, feedback: 'Tornar o trabalho visível é cuidar do time e do próprio trabalho. Um VP que entende isso vira aliado do processo. Um processo contornado vira padrão — e o próximo pedido não vai ser o último.' }
      ]
    }
  ],

  ux: [
    {
      titulo: 'Situação 1 — Os dados do usuário contra a decisão já tomada',
      situacao: `Os testes com usuários mostram que a funcionalidade nova, já anunciada externamente, vai gerar confusão e aumento de abandono. O UX Designer tem os dados sólidos. A entrega é em 10 dias e todos no time já estão construindo em cima do design aprovado. O que faz?`,
      opcoes: [
        { texto: 'Entrega o design como aprovado e envia um e-mail ao time registrando a preocupação formalmente — se der errado, a evidência está documentada.', correta: false, feedback: 'Registrar discordância sem levar o dado para a conversa é se proteger individualmente sem ajudar o time. "Ir de turma" é trazer a evidência para que a turma possa decidir melhor — não só se cobrir.' },
        { texto: 'Compartilha os dados com o time e com os stakeholders, propõe ajustes viáveis que reduzam o atrito sem derrubar o que já foi construído, e coloca a decisão na mesa do grupo — com os riscos documentados.', correta: true, feedback: 'Trazer o dado de volta para a turma, com proposta e abertura, é "ir de turma" com responsabilidade. O time que decide com informação completa entrega com mais confiança — e o usuário agradece.' },
        { texto: 'Apresenta os dados em particular para o líder de produto e deixa que ele decida se vale levar para o grupo — não quer criar ansiedade no time a 10 dias da entrega.', correta: false, feedback: 'Filtrar a informação antes de chegar ao time retira do grupo a chance de encontrar uma saída. "Ir de turma" significa que os dados pertencem à turma, não a uma cadeia de aprovação privada.' }
      ]
    },
    {
      titulo: 'Situação 2 — O problema que descobri depois da aprovação',
      situacao: `Já em execução, o UX Designer percebe que a jornada aprovada tem uma falha que vai gerar fricção real para o usuário. Corrigir exige retrabalho do time de Dev e atraso na entrega. O UX sabe que foi ele quem aprovou o design original. O que faz?`,
      opcoes: [
        { texto: 'Corrige o fluxo silenciosamente e apresenta a versão ajustada ao time como "melhoria de polimento" — evita a percepção de que o design original estava com problema.', correta: false, feedback: 'Ocultar informação do time para proteger a própria imagem é o oposto de "ir de turma". A turma que não sabe o que mudou e por quê não consegue se adaptar — e o problema volta.' },
        { texto: 'Apresenta o problema ao time com transparência — o que foi identificado, o impacto para o usuário e o custo da correção — e propõe que decidam juntos: corrigir agora ou endereçar na próxima versão.', correta: true, feedback: 'Trazer um problema difícil para o time, mesmo quando você foi parte da origem, é coragem e confiança na turma. Decisão tomada com informação completa é sempre melhor do que decisão tomada para proteger aparências.' },
        { texto: 'Registra o problema no backlog para a próxima versão e não menciona agora — o que foi aprovado pelo time deve ser respeitado, e o momento da entrega não é hora de abrir retrabalho.', correta: false, feedback: 'Guardar uma informação relevante "para não criar problema agora" é deixar o problema crescer. O time que não sabe do risco não pode ajudar a decidir o que fazer com ele.' }
      ]
    },
    {
      titulo: 'Situação 3 — O design system que o time ignorou',
      situacao: `Três semanas após a entrega do design system, o UX Designer percebe que os desenvolvedores estão construindo componentes próprios. A interface está ficando inconsistente. O UX sabe que não envolveu o time no processo de criação do sistema — foi desenvolvido de forma independente e entregue pronto. O que faz?`,
      opcoes: [
        { texto: 'Pede ao Tech Lead que torne obrigatório o uso do design system — se não houver enforcement, o esforço de construir o sistema foi em vão.', correta: false, feedback: 'Forçar adoção sem entender por que o time não está usando é tratar o sintoma, não a causa. E usar hierarquia para substituir conversa raramente constrói colaboração real.' },
        { texto: 'Atualiza a documentação com mais exemplos e um guia de uso mais visual, e reenvia para o time — talvez a barreira seja de clareza, não de disposição.', correta: false, feedback: 'Mais documentação para um problema de não-adoção raramente resolve. Se o time não está usando, a primeira pergunta é entender por quê — e isso só se descobre conversando com quem não está usando.' },
        { texto: 'Conversa com os desenvolvedores para entender as barreiras reais — o que está difícil, o que falta — e propõe co-construir a próxima versão do design system junto com eles.', correta: true, feedback: 'Design system construído sem o time tende a não ser usado pelo time. "Ir de turma" na construção de ferramentas coletivas significa que o time que vai usar precisa ter voz em como elas são feitas.' }
      ]
    }
  ],

  po: [
    {
      titulo: 'Situação 1 — O prazo que o time não acredita',
      situacao: `O negócio comprometeu a entrega de uma feature em 3 semanas. O Tech Lead consultou o time: a estimativa real é 6 semanas. O Tech Lead acredita que talvez com esforço extra seja possível chegar em 4 — mas sem garantias, e sem ter conversado com o time sobre essa possibilidade. O prazo já foi comunicado ao cliente. O que faz?`,
      opcoes: [
        { texto: 'Aceita as 3 semanas internamente e mobiliza o time para "dar o seu máximo" — mostrar comprometimento é importante, e o time vai se ajustar quando sentir a urgência real.', correta: false, feedback: 'Comprometer o time com prazo que não tem base real, sem transparência sobre o que se está assumindo, é gastar a confiança do time. "Ir de turma" começa com honestidade sobre o que é possível.' },
        { texto: 'Reúne o time para construírem juntos o cenário real — estimativas, riscos e alternativas — e leva essa posição coletiva ao negócio e ao cliente, propondo escopo reduzido em 3 semanas ou a feature completa em 6. O time fala a uma só voz.', correta: true, feedback: 'Construir a resposta com o time e levá-la unida ao negócio é "ir de turma" no sentido mais pleno: ninguém carrega a pressão sozinho, e o cliente decide com a informação real que a turma produziu junta.' },
        { texto: 'Convoca o time para uma sessão de re-estimativa e propõe tentar chegar em 4 semanas com foco — se o time topar, é uma decisão coletiva que o negócio pode apresentar ao cliente.', correta: false, feedback: 'Re-estimar sem levar o cenário real ao cliente é resolver o problema do prazo dentro do time sem resolver o problema do prazo com quem faz a demanda. A transparência precisa incluir quem está do outro lado.' }
      ]
    },
    {
      titulo: 'Situação 2 — O impasse que paralisa a sprint',
      situacao: `Dois seniores do time estão há duas semanas em desacordo técnico sobre como construir um módulo crítico. Ambos têm argumentos válidos. O Tech Lead já tentou facilitar uma conversa entre os dois sem sucesso. A sprint está parada. O que faz agora?`,
      opcoes: [
        { texto: 'Decide pela solução que avalia como tecnicamente superior e comunica ao time — impasse prolongado custa mais do que uma decisão imperfeita, e é responsabilidade do Tech Lead destravar.', correta: false, feedback: 'Decisão imposta resolve o bloqueio mas não resolve o conflito. Quem ficou de fora pode se desengajar — e o time perde o que o desacordo estava tentando proteger: a melhor solução técnica.' },
        { texto: 'Facilita uma sessão com o time inteiro onde cada side apresenta os argumentos, o grupo discute e chegam a uma decisão coletiva documentada — todos são co-responsáveis pelo caminho escolhido.', correta: true, feedback: 'Transformar um conflito bilateral em decisão coletiva é "ir de turma" na liderança técnica. O time que decide junto sustenta a decisão junto — e os dois seniores saem engajados, não derrotados.' },
        { texto: 'Propõe um spike de dois dias para cada abordagem e decide com base nos resultados práticos — dados concretos encerram o debate melhor do que qualquer argumento.', correta: false, feedback: 'Spike é útil quando há incerteza técnica genuína. Quando o impasse é sobre valores e arquitetura, mais dois dias de trabalho paralelo sem processo de decisão só adiou — não resolveu.' }
      ]
    },
    {
      titulo: 'Situação 3 — A boa ideia do júnior que o time não levou a sério',
      situacao: `Um dev júnior propôs uma mudança de arquitetura promissora em chat. Os seniores do time reagiram com ceticismo e o assunto foi encerrado. O Tech Lead, lendo depois, achou que a ideia tinha mérito real — mas o júnior já sinalizou que não vai insistir para não criar atrito. O que faz?`,
      opcoes: [
        { texto: 'Respeita o resultado da discussão do time — se os seniores reagiram com ceticismo, provavelmente há razões técnicas que o Tech Lead não captou completamente na leitura.', correta: false, feedback: 'Deixar uma boa ideia morrer por dinâmica de grupo sem investigar o mérito é deixar o time mais pobre. "Ir de turma" significa criar condições para que todas as vozes sejam ouvidas — especialmente as que têm menos espaço.' },
        { texto: 'Adota a proposta e anuncia a mudança no plano da sprint — se o Tech Lead avalia que tem mérito, é responsabilidade dele agir com base nessa avaliação.', correta: false, feedback: 'Adotar uma proposta que o time rejeitou sem reabrir o processo de decisão é passar por cima do coletivo com a autoridade da liderança. "Ir de turma" é abrir o espaço, não substituir o time.' },
        { texto: 'Reabre a conversa formalmente, convida o júnior a apresentar a ideia com mais tempo e estrutura para o time inteiro, e facilita uma avaliação genuína — sem que a dinâmica de hierarquia sênior/júnior defina o resultado.', correta: true, feedback: 'Dar espaço real para uma ideia que foi descartada por dinâmica de grupo é liderança inclusiva. "Vai de turma" também significa que a melhor ideia vence — não a mais antiga ou a mais alta na hierarquia.' }
      ]
    }
  ]
};
