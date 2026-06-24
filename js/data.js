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
      titulo: 'Situação 1 — Dois caminhos, uma deadline',
      situacao: `Sprint fecha amanhã. O Dev Front-End já tem uma solução funcionando, mas percebe que a abordagem escolhida vai criar um problema de performance grave em dois meses. Refatorar agora atrasa a entrega; entregar assim prejudica o futuro. O Tech Lead não está disponível. O que fazer?`,
      opcoes: [
        { texto: 'Entrega como está e registra a dívida técnica no backlog com uma nota explicando o risco — decisão de prioridade é do time, não minha sozinha.', correta: true, feedback: 'Entregar com transparência e registrar o risco é colaborar com o time mesmo à distância. Quem decide a prioridade é a turma, não um indivíduo isolado.' },
        { texto: 'Refatora por conta própria e comunica depois, assumindo o atraso como necessário — melhor pedir perdão do que autorização.', correta: false, feedback: 'Tomar decisão unilateral que afeta toda a sprint sem comunicar viola a autonomia coletiva do time, mesmo com boas intenções.' },
        { texto: 'Paralisa e aguarda o Tech Lead — uma decisão assim não deve ser tomada sem a liderança técnica presente.', correta: false, feedback: 'Travar a entrega enquanto espera aprovação que pode não chegar gera bloqueio desnecessário. O time precisa fluir com autonomia responsável.' }
      ]
    },
    {
      titulo: 'Situação 2 — O colega que sabe mais',
      situacao: `O Dev Front-End está travado num problema de CSS complexo há três horas. Sabe que o colega de Back-End já resolveu algo parecido antes, mas hesita em pedir ajuda — parece que está pedindo para o Back-End "fazer o trabalho dele". A reunião de demo é em duas horas. O que faz?`,
      opcoes: [
        { texto: 'Continua tentando resolver sozinho — pedir ajuda de Back-End num problema de Front-End seria embaraçoso e desviaria o colega do trabalho dele.', correta: false, feedback: 'Orgulho técnico que paralisa é inimigo do time. Dois colegas desbloqueiam em 10 minutos o que um levaria horas — e a demo não espera.' },
        { texto: 'Pede ajuda ao colega de Back-End diretamente, explica o contexto e resolve junto — resolver problemas cruzando fronteiras é trabalho em equipe na prática.', correta: true, feedback: 'Pedir ajuda a tempo é competência, não fraqueza. Fronteiras entre especialidades não devem existir quando o prazo e o produto estão em risco.' },
        { texto: 'Avisa o Tech Lead que não vai conseguir entregar e pede para retirar o item da demo — melhor ser honesto do que entregar algo ruim.', correta: false, feedback: 'Desistir sem antes tentar buscar ajuda disponível é desperdiçar um recurso que o time tem. Comunicar o risco é certo; tentar a solução colaborativa primeiro é melhor ainda.' }
      ]
    },
    {
      titulo: 'Situação 3 — Aprovação que não chega',
      situacao: `O Dev Front-End finalizou o componente novo e está esperando aprovação de PR do colega de Back-End há dois dias. O colega está sobrecarregado. Sem o merge, três outras pessoas do time estão bloqueadas. Como agir?`,
      opcoes: [
        { texto: 'Mergeia o PR por conta própria — já revisou o próprio código, está confiante, e o bloqueio do time é mais urgente que o processo.', correta: false, feedback: 'Burlar o processo de revisão, mesmo com boa intenção, cria precedente perigoso e retira a segunda visão que o PR review serve justamente para dar.' },
        { texto: 'Continua esperando em silêncio para não parecer impaciente ou que está "cobrando" o colega ocupado.', correta: false, feedback: 'Silêncio quando o time está bloqueado não é cortesia — é omissão. Nomear o bloqueio em voz alta é parte do trabalho.' },
        { texto: 'Sinaliza o bloqueio no canal do time de forma objetiva, oferece fazer um pair review ao vivo com o colega para agilizar e propõe uma solução para as pessoas travadas enquanto isso.', correta: true, feedback: 'Tornar o bloqueio visível e propor uma saída colaborativa é exatamente o que mantém o time fluindo sem jogar pressão sobre ninguém.' }
      ]
    }
  ],

  backend: [
    {
      titulo: 'Situação 1 — O hotfix que pode quebrar mais',
      situacao: `São 23h. A API de pagamento está com latência crítica em produção afetando os clientes. O Dev Back-End identificou a causa e tem um fix rápido pronto — mas sabe que não testou o impacto no módulo de conciliação. Aplicar agora pode resolver ou piorar. Esperar até amanhã mantém o problema. O que faz?`,
      opcoes: [
        { texto: 'Aplica o hotfix agora — a latência está impactando clientes ativamente, e o risco de esperar é maior do que o risco do fix não testado.', correta: false, feedback: 'Decisão sob pressão sem validar o risco secundário é a principal causa de incidentes que viram dois incidentes. O fix que quebra a conciliação pode ser pior do que a latência.' },
        { texto: 'Aciona o canal de incidente, apresenta o diagnóstico, o fix disponível e o risco não testado — e decide com o time qual caminho tomar.', correta: true, feedback: 'Decisão de risco em produção à noite não é para ser tomada sozinho. Trazer o dilema para o time, mesmo que de forma assíncrona, é responsabilidade técnica e coletiva.' },
        { texto: 'Espera até a manhã para ter mais pessoas disponíveis e testar adequadamente — melhor um problema contido a noite do que um incidente maior amanhã de manhã.', correta: false, feedback: 'Aguardar sem comunicar que o problema foi identificado e que existe um fix disponível priva o time e a liderança de tomar uma decisão informada.' }
      ]
    },
    {
      titulo: 'Situação 2 — A solução do colega que funciona, mas está errada',
      situacao: `O Dev Back-End percebe que a solução implementada pelo colega na semana passada — já em produção — resolve o problema imediato mas cria um acoplamento forte que vai dificultar qualquer evolução futura. O colega ficou orgulhoso da entrega. Como age?`,
      opcoes: [
        { texto: 'Abre um PR com a refatoração que considera correta, sem avisar o colega, e explica na descrição do PR o motivo técnico.', correta: false, feedback: 'Refatorar o trabalho do colega sem conversa direta, mesmo com argumento técnico válido, gera atrito, quebra confiança e priva o colega de participar da decisão.' },
        { texto: 'Marca uma conversa com o colega, reconhece o que funcionou na solução e apresenta a preocupação técnica com dados concretos — propõe que decidam juntos o próximo passo.', correta: true, feedback: 'Feedback técnico bem dado é presente, não crítica. Reconhecer o que funcionou antes de apontar o problema é o que transforma a conversa em colaboração.' },
        { texto: 'Registra a preocupação no backlog técnico e não fala nada diretamente — o colega vai descobrir o problema quando o sistema escalar.', correta: false, feedback: 'Deixar o problema para "o futuro descobrir" é terceirizar a responsabilidade. O time paga o custo do silêncio técnico mais cedo do que parece.' }
      ]
    },
    {
      titulo: 'Situação 3 — A feature que está sendo feita em duplicata',
      situacao: `O Dev Back-End descobre, no meio do desenvolvimento, que outro time na empresa está construindo exatamente o mesmo serviço. Não há overlap formal entre os projetos. Comunicar isso pode atrasar a sprint atual, mas não comunicar pode gerar retrabalho enorme para toda a organização. O que faz?`,
      opcoes: [
        { texto: 'Continua desenvolvendo — a duplicidade é problema de planejamento da empresa, não responsabilidade técnica do desenvolvedor de um time.', correta: false, feedback: 'Ignorar informação que evitaria retrabalho organizacional por não ser "responsabilidade minha" é um exemplo claro do custo do trabalho em silos.' },
        { texto: 'Para completamente o desenvolvimento e escala o problema para a gestão resolver antes de continuar qualquer linha de código.', correta: false, feedback: 'Paralisar sem proposta é gerar ansiedade sem saída. Sinalizar o problema e continuar com o que já está claro enquanto a conversa acontece é mais eficiente.' },
        { texto: 'Sinaliza a duplicidade para o Tech Lead e para o time imediatamente com evidências, propõe uma reunião rápida entre os dois times para alinhar, e continua o desenvolvimento do que não tem sobreposição enquanto isso.', correta: true, feedback: 'Trazer informação estratégica para a superfície com uma proposta concreta é o que transforma um desenvolvedor em alguém que pensa no coletivo, não só na tarefa.' }
      ]
    }
  ],

  dados: [
    {
      titulo: 'Situação 1 — O número que contradiz a liderança',
      situacao: `O Engenheiro de Dados conclui a análise e os resultados contradizem diretamente a aposta estratégica que a diretoria anunciou na semana passada. Os dados são sólidos, mas apresentá-los pode ser politicamente desconfortável. A reunião de revisão de resultados é amanhã. O que faz?`,
      opcoes: [
        { texto: 'Apresenta os dados como estão, com clareza metodológica, e oferece contexto para ajudar na interpretação — a função dos dados é informar a decisão, não confirmá-la.', correta: true, feedback: 'Dados que desafiam a narrativa são os mais valiosos. Um engenheiro que suaviza números por conforto político destrói o único ativo que a área de dados tem: a confiança.' },
        { texto: 'Apresenta os dados mas inclui ressalvas e limitações de forma a suavizar a contradição — a mensagem chega, mas de forma mais palatável para o momento.', correta: false, feedback: 'Suavizar intencionalmente a leitura dos dados para proteger uma narrativa é uma forma sutil de desonestidade analítica. O time perde a chance de corrigir o rumo com as informações reais.' },
        { texto: 'Agenda uma conversa privada com o gestor antes da reunião para apresentar os dados de forma reservada e deixar que ele decida como levar isso ao grupo.', correta: false, feedback: 'Filtrar os dados pela liderança antes de compartilhar com o time cria um canal de controle da informação que mina a transparência e a confiança coletiva nos dados.' }
      ]
    },
    {
      titulo: 'Situação 2 — O pipeline que o time não entende',
      situacao: `O Engenheiro de Dados construiu um pipeline de dados complexo que só ele entende completamente. Nas últimas semanas, dois incidentes ocorreram quando o pipeline falhou e ninguém mais sabia como agir. O eng. percebe que está se tornando um gargalo crítico. O que faz?`,
      opcoes: [
        { texto: 'Documenta o pipeline detalhadamente e disponibiliza a documentação no repositório — quem precisar saber é só ler.', correta: false, feedback: 'Documentação estática não transfere conhecimento tácito de forma eficiente. A dependência de um único indivíduo é risco estrutural que documentação escrita raramente resolve sozinha.' },
        { texto: 'Propõe sessões de transferência de conhecimento com o time, refatora partes do pipeline para reduzir complexidade e estabelece uma rotina de revisão coletiva das pipelines críticas.', correta: true, feedback: 'Reduzir a própria indispensabilidade é um ato de maturidade técnica e de confiança no time. Conhecimento que circula é conhecimento que protege a turma toda.' },
        { texto: 'Mantém como está mas garante estar sempre disponível on-call para intervir rapidamente quando necessário — é mais eficiente do que tentar explicar algo muito complexo.', correta: false, feedback: '"Estar sempre disponível" como solução para concentração de conhecimento é uma bomba-relógio. Férias, desligamentos e emergências simultâneas não combinam com ponto único de falha humano.' }
      ]
    },
    {
      titulo: 'Situação 3 — A demanda que chega por fora',
      situacao: `Um VP de outra área procura diretamente o Engenheiro de Dados pedindo uma análise urgente "off the books" — não está no backlog, não tem alinhamento com o time. O VP deixa claro que é prioridade alta para ele, mas pede discrição. O que faz?`,
      opcoes: [
        { texto: 'Atende o pedido com discrição conforme solicitado — é um VP, a hierarquia tem que ser respeitada, e contraria-lo pode ter consequências.', correta: false, feedback: 'Aceitar demandas paralelas por pressão hierárquica sem transparência com o time cria desequilíbrio no backlog, sobrecarrega o indivíduo e opera fora do processo coletivo que o time acordou.' },
        { texto: 'Recusa diretamente — qualquer demanda precisa passar pelo processo oficial de priorização do time, sem exceções.', correta: false, feedback: 'Recusar sem oferecer um caminho viável pode ser correto em princípio, mas desrespeita a urgência legítima do interlocutor e fecha a conversa sem solução.' },
        { texto: 'Escuta o pedido, avalia o esforço, e propõe ao VP que a demanda entre no backlog do time de forma visível — explica que trabalho invisível prejudica tanto o time quanto a qualidade da análise.', correta: true, feedback: 'Tornar o trabalho visível não é burocracia — é respeito pelo time e pelo próprio trabalho. Um VP que entende o processo é um aliado; um processo contornado vira precedente.' }
      ]
    }
  ],

  ux: [
    {
      titulo: 'Situação 1 — O usuário contra o negócio',
      situacao: `Os testes com usuários mostram claramente que a funcionalidade nova confunde as pessoas e aumentaria o abandono. Mas ela representa uma receita significativa para a empresa e já foi anunciada externamente. O UX Designer tem os dados. A entrega é em 10 dias. O que faz?`,
      opcoes: [
        { texto: 'Apresenta os dados de pesquisa de forma completa para os stakeholders, propõe ajustes que poderiam reduzir o atrito sem abandonar a funcionalidade, e deixa a decisão final com o grupo — mas com os riscos claramente documentados.', correta: true, feedback: 'UX não é poder de veto — é poder de evidência. Trazer os dados com uma proposta construtiva é o que transforma tensão em decisão informada e coletiva.' },
        { texto: 'Bloqueia internamente a entrega e escala o problema para a liderança de produto — não é ético entregar algo que sabe que vai prejudicar o usuário.', correta: false, feedback: 'Bloquear unilateralmente sem proposta alternativa é transformar evidência em obstrução. O papel do UX é iluminar, não vetar.' },
        { texto: 'Implementa o design como pedido e registra sua discordância formalmente em e-mail — protegeu-se tecnicamente e cumpriu o que foi pedido.', correta: false, feedback: 'Cumprir e registrar discordância sem tentar mudar o resultado é conforto burocrático. O time perdeu a chance de uma decisão melhor porque o UX não insistiu com dados na mesa.' }
      ]
    },
    {
      titulo: 'Situação 2 — O redesign que o time não pediu',
      situacao: `Durante o desenvolvimento, o UX Designer percebe que a jornada aprovada tem um problema estrutural que vai criar fricção real para o usuário. Corrigir exigiria reprojetar parte do fluxo, o que atrasa a entrega e exige retrabalho do time de Dev. Mas entregar como está vai gerar reclamações. O que faz?`,
      opcoes: [
        { texto: 'Corrige o fluxo por conta própria e apresenta ao time como "melhoria identificada durante a implementação" — evita a impressão de que a aprovação anterior foi um erro.', correta: false, feedback: 'Mudar o escopo sem comunicar o time gera retrabalho invisível, cria desconfiança e priva a turma de decidir coletivamente sobre o trade-off.' },
        { texto: 'Entrega como aprovado e registra o problema identificado para a próxima versão — o que foi aprovado em conjunto deve ser respeitado, mesmo com limitações.', correta: false, feedback: 'Respeitar o processo anterior a ponto de entregar algo que já sabe que vai falhar é confundir processo com produto. O time precisa de informação nova para tomar decisão nova.' },
        { texto: 'Apresenta o problema ao time com clareza: o que foi identificado, qual o impacto para o usuário, qual seria o custo da correção — e propõe que decidam juntos entre corrigir agora ou fazer uma versão 1.1 com o fix.', correta: true, feedback: 'Trazer um problema novo com dados e opções é colaborar, não complicar. O time que decide com informação completa entrega com mais confiança.' }
      ]
    },
    {
      titulo: 'Situação 3 — O design que ninguém usa',
      situacao: `O UX Designer entrega um sistema de design completo e documentado. Três semanas depois, percebe que os desenvolvedores estão ignorando os componentes e construindo soluções próprias. A interface está ficando inconsistente. Como age?`,
      opcoes: [
        { texto: 'Escalona o problema para o Tech Lead pedindo que seja obrigatório seguir o design system — sem enforcement, o sistema não funciona.', correta: false, feedback: 'Usar hierarquia para forçar adoção de ferramenta que o time não está usando é sintoma de que o problema é de adoção, não de disciplina. A causa real precisa ser investigada antes da solução.' },
        { texto: 'Atualiza a documentação tornando-a mais detalhada e visual, e reenvia ao time com um guia de uso — talvez não estejam usando por falta de clareza.', correta: false, feedback: 'Mais documentação para resolver um problema de não-adoção raramente funciona. O problema pode ser de processo, ferramenta, ou de como o design system foi construído — sem escutar o time, não se sabe.' },
        { texto: 'Conversa com os desenvolvedores para entender por que não estão usando o sistema — o que está difícil, o que está faltando — e propõe um ciclo de melhoria do design system com input deles.', correta: true, feedback: 'Design system que o time não usa é design system que foi construído sem o time. Escutar quem não está usando é o primeiro passo para transformar rejeição em adoção.' }
      ]
    }
  ],

  po: [
    {
      titulo: 'Situação 1 — A estimativa que o time não acredita',
      situacao: `O negócio comprometeu externamente a entrega de uma feature em 3 semanas. O Tech Lead vai ao time estimar e a resposta coletiva é: mínimo 6 semanas com qualidade. O prazo já foi comunicado ao cliente. Como o Tech Lead age?`,
      opcoes: [
        { texto: 'Aceita o prazo de 3 semanas com o time e tenta comprar velocidade cortando escopo internamente sem avisar o cliente — entrega algo, negocia o resto depois.', correta: false, feedback: 'Comprometer o time com prazo que não acredita gera queima de energia, qualidade comprometida e, quase sempre, o problema de prazo só adiado — não resolvido.' },
        { texto: 'Leva para o negócio e para o cliente os dados reais de estimativa com o risco técnico documentado, e propõe um plano alternativo: escopo reduzido em 3 semanas ou feature completa em 6.', correta: true, feedback: 'Tech Lead que protege o time da pressão de prazo impossível, com dados e proposta na mão, é liderança. Quem decide o trade-off é o cliente informado, não o desenvolvedor sozinho.' },
        { texto: 'Divide o time em dois grupos para trabalhar em paralelo e tentar comprimir o prazo — com mais pessoas focadas, talvez 4 semanas seja possível.', correta: false, feedback: 'A Lei de Brooks diz que adicionar pessoas a um projeto atrasado o atrasa mais. Compressão de prazo com paralelismo de pessoas raramente funciona sem custo em coordenação e qualidade.' }
      ]
    },
    {
      titulo: 'Situação 2 — O conflito que o time não está resolvendo',
      situacao: `Há duas semanas, dois membros seniores do time têm visões técnicas opostas sobre como construir um módulo crítico. O impasse está bloqueando a sprint inteira. Ambos têm argumentos válidos. Nenhum cede. O Tech Lead precisa agir. O que faz?`,
      opcoes: [
        { texto: 'Escolhe a solução tecnicamente mais sólida na sua avaliação e anuncia a decisão ao time — Tech Lead existe para destravar impasses técnicos, e ambiguidade prolongada custa mais do que uma decisão imperfeita.', correta: false, feedback: 'Decisão imposta sem processo pode resolver o impasse imediato mas cria ressentimento. O membro desconsiderado pode se desengajar — e o time perde perspectiva valiosa.' },
        { texto: 'Organiza uma sessão estruturada onde cada um apresenta os argumentos, o time inteiro vota, e o resultado é documentado como decisão coletiva — todos são responsáveis pelo caminho escolhido.', correta: true, feedback: 'Transformar um conflito bilateral em decisão coletiva redistribui a responsabilidade e reduz o ego investido nas opções. O time sai alinhado e os dois seniores continuam engajados.' },
        { texto: 'Propõe fazer um spike de dois dias com cada abordagem e decidir com base nos resultados — deixa o código falar, não a opinião.', correta: false, feedback: 'Spikes são úteis para incerteza técnica genuína, não para impasses onde os dois lados já têm dados. Quatro dias de spike quando o time já está há duas semanas parado piora o bloqueio.' }
      ]
    },
    {
      titulo: 'Situação 3 — A inovação que vem de fora da hierarquia',
      situacao: `Um desenvolvedor júnior do time propõe uma mudança de arquitetura que, na avaliação inicial do Tech Lead, parece promissora e pode poupar semanas de trabalho futuro. Mas implementar a proposta agora muda o plano da sprint atual. O time está cético com a ideia do júnior. Como o Tech Lead conduz?`,
      opcoes: [
        { texto: 'Agradece a ideia ao júnior e registra para avaliar na próxima planning — o momento não é o certo e mudar o plano da sprint por iniciativa de um júnior pode gerar precedente ruim.', correta: false, feedback: 'Guardar uma ideia boa para "depois" por razões de protocolo ou hierarquia pode significar nunca. O timing do valor é parte do valor.' },
        { texto: 'Adota a proposta imediatamente e anuncia a mudança de plano ao time — se é boa ideia, é boa ideia, independente de quem veio.', correta: false, feedback: 'Mudar o plano da sprint sem processo de decisão coletivo, mesmo com boa intenção, retira a agência do time e pode gerar resistência — especialmente se a proposta ainda não foi validada com o grupo.' },
        { texto: 'Abre espaço para o júnior apresentar a proposta ao time completo, facilita uma avaliação coletiva dos trade-offs, e se o time convergir, incorpora na sprint com escopo ajustado.', correta: true, feedback: 'Dar visibilidade a uma boa ideia independente de quem veio é sinal de cultura saudável. Tech Lead que amplifica vozes subrepresentadas constrói o time que inova junto.' }
      ]
    }
  ]
};
