// ====================================================================
//  A GENTE VAI DE TURMA — O Incidente em Produção
//  Dados do jogo: personagens, cenários e configurações
// ====================================================================

const CONFIG = {
  pontosPorAcerto: 20,
  pontuacaoMaxima: 300,
  limiteParaVencer: 200,
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
    nome: 'Product Owner',
    equipe: 'Equipe 5',
    cor: '#f1b30b',
    corClara: '#ffd966',
    epiteto: 'O Maestro da Turma',
    descricao: 'Conecta visão de negócio e execução técnica. O backlog mais saudável é o mais alinhado.'
  }
];

// ---------------------------------------------------------------------
//  CENÁRIOS — metáforas de situações reais de cada área
//  correta: true = opção alinhada ao pilar "A gente vai de turma"
// ---------------------------------------------------------------------

const CENARIOS = {
  frontend: [
    {
      titulo: 'Ação 1 — Bug em produção',
      situacao: 'A tela principal do app trava para os usuários em produção. Reclamações chegam em tempo real. O que o Dev Front-End faz?',
      opcoes: [
        { texto: 'Avisa o canal do time, compartilha o erro e aciona Back-End e QA para investigarem juntos.', correta: true, feedback: 'Comunicar e convocar a turma é a resposta mais rápida e segura para incidentes.' },
        { texto: 'Tenta corrigir sozinho no código sem avisar ninguém para não parecer que não sabe.', correta: false, feedback: 'Silêncio em incidente prolonga o impacto e priva o time de ajudar.' },
        { texto: 'Aguarda — parece bug pequeno que vai se resolver sozinho.', correta: false, feedback: 'Esperar sem comunicar é a pior decisão em produção.' }
      ]
    },
    {
      titulo: 'Ação 2 — Prazo vs. qualidade',
      situacao: 'Uma feature nova depende de uma API que o Back-End ainda não terminou. A sprint fecha em dois dias. O que fazer?',
      opcoes: [
        { texto: 'Alinha com o Back-End para criar um mock e segue em paralelo, avisando o PO do ajuste.', correta: true, feedback: 'Trabalhar em paralelo com comunicação transparente mantém a turma avançando.' },
        { texto: 'Entrega a feature pela metade sem avisar o PO para não decepcionar.', correta: false, feedback: 'Entregar incompleto sem avisar quebra a confiança do time.' },
        { texto: 'Para tudo e fica esperando, bloqueado, sem falar com ninguém.', correta: false, feedback: 'Travar sem comunicar paralisa a turma inteira.' }
      ]
    },
    {
      titulo: 'Ação 3 — O feedback do usuário',
      situacao: 'Pesquisa de satisfação indica que os usuários acham a navegação confusa. O Dev Front-End tem suas próprias ideias, mas o UX Designer tem outro ponto de vista. Como age?',
      opcoes: [
        { texto: 'Ignora o UX e implementa do jeito que acha certo, afinal é ele quem coda.', correta: false, feedback: 'Ignorar o UX fragmenta o produto e a turma.' },
        { texto: 'Senta com o UX Designer para co-criar a solução unindo visão técnica e de experiência.', correta: true, feedback: 'Front-End e UX juntos entregam a melhor experiência. A gente vai de turma!' },
        { texto: 'Escala para o PO decidir sozinho para não entrar em conflito.', correta: false, feedback: 'Fugir do diálogo direto adia o problema e sobrecarrega o PO.' }
      ]
    }
  ],

  backend: [
    {
      titulo: 'Ação 1 — Alerta às 3h da manhã',
      situacao: 'A API caiu em produção às 3h durante um deploy crítico. O Dev Back-End é o único on-call. Como age?',
      opcoes: [
        { texto: 'Tenta resolver sozinho em silêncio para não parecer fraco ou desinformado.', correta: false, feedback: 'Incidente crítico sem time aumenta o tempo de resposta e o impacto.' },
        { texto: 'Aciona o canal de incidente, compartilha os logs e chama quem puder ajudar a diagnosticar.', correta: true, feedback: 'Ninguém resolve incidente crítico melhor do que uma turma alinhada.' },
        { texto: 'Deixa para manhã para não incomodar os colegas fora do horário.', correta: false, feedback: 'Produção parada não espera o horário comercial.' }
      ]
    },
    {
      titulo: 'Ação 2 — Vulnerabilidade no código alheio',
      situacao: 'Revisando o código, o Dev Back-End encontra uma vulnerabilidade de segurança no PR de um colega. O que faz?',
      opcoes: [
        { texto: 'Ignora — não é o código dele, e apontar isso pode gerar conflito.', correta: false, feedback: 'Omitir vulnerabilidade por conforto expõe o produto e a turma.' },
        { texto: 'Corrige o código silenciosamente sem avisar o colega, para ganhar tempo.', correta: false, feedback: 'Corrigir sem comunicar impede o colega de aprender e cria dependência.' },
        { texto: 'Avisa o colega com respeito, explica o risco e sugere corrigirem ou revisarem juntos.', correta: true, feedback: 'Feedback direto e respeitoso fortalece o código e a turma.' }
      ]
    },
    {
      titulo: 'Ação 3 — Documentação desatualizada',
      situacao: 'Ninguém usa a documentação das APIs porque está defasada. O Front-End perde horas toda semana tentando entender os endpoints. O que o Back-End faz?',
      opcoes: [
        { texto: 'Atualiza por conta própria, em silêncio, sem comunicar o time.', correta: false, feedback: 'Atualizar sem envolver o time não resolve o problema estrutural.' },
        { texto: 'Propõe uma sessão rápida com o time para definir juntos um padrão e dividir a responsabilidade.', correta: true, feedback: 'Documentação é responsabilidade coletiva. A turma que define junta, usa junta.' },
        { texto: 'Considera que é problema de quem vai usar — quem precisa que pergunte.', correta: false, feedback: '"Quem precisar que pergunte" desperdiça tempo e quebra autonomia do time.' }
      ]
    }
  ],

  dados: [
    {
      titulo: 'Ação 1 — Relatório inconsistente',
      situacao: 'O relatório gerencial está com dados incorretos e a reunião começa em 30 minutos. O Engenheiro de Dados percebe o problema. O que faz?',
      opcoes: [
        { texto: 'Esconde o problema e apresenta mesmo sabendo que os dados estão errados.', correta: false, feedback: 'Apresentar dados errados mina a confiança em toda a área.' },
        { texto: 'Avisa o gestor e o time imediatamente, explica o problema e propõe um plano de contingência.', correta: true, feedback: 'Transparência rápida e solução em turma é o que salva a reunião e a credibilidade.' },
        { texto: 'Cancela a reunião por conta própria sem consultar ninguém.', correta: false, feedback: 'Cancelar unilateralmente sem comunicar gera caos desnecessário.' }
      ]
    },
    {
      titulo: 'Ação 2 — Dado que ninguém entende',
      situacao: 'Um analista de negócio não consegue interpretar o dashboard entregue pelo Engenheiro de Dados e está tomando decisões erradas. Como age?',
      opcoes: [
        { texto: 'Manda um e-mail técnico longo e considera o assunto resolvido.', correta: false, feedback: 'E-mail técnico sem diálogo não garante entendimento nem decisão correta.' },
        { texto: 'Diz que interpretar é responsabilidade do analista — ele que aprenda.', correta: false, feedback: 'Dado sem contexto não serve ao negócio. O valor é no entendimento, não na entrega.' },
        { texto: 'Agenda uma sessão rápida, escuta a dúvida e explica o dado em linguagem do negócio.', correta: true, feedback: 'Dado que une engenharia e negócio é dado que gera valor. A gente vai de turma!' }
      ]
    },
    {
      titulo: 'Ação 3 — Risco invisível no pipeline',
      situacao: 'O Engenheiro percebe que o pipeline de ETL vai falhar no próximo mês com o aumento de volume previsto. Ninguém mais sabe disso. O que faz?',
      opcoes: [
        { texto: 'Espera o problema acontecer e conserta na hora — menos trabalho agora.', correta: false, feedback: 'Deixar o risco explodir cria crise evitável e sobrecarrega toda a turma.' },
        { texto: 'Compartilha a análise com o time e planeja a solução preventiva junto com os envolvidos.', correta: true, feedback: 'Antecipar e compartilhar riscos é o maior presente que a turma pode dar a si mesma.' },
        { texto: 'Resolve sozinho sem falar nada para mostrar que é indispensável.', correta: false, feedback: 'Ser indispensável por sigilo é fragilidade disfarçada de força.' }
      ]
    }
  ],

  ux: [
    {
      titulo: 'Ação 1 — Design vs. prazo',
      situacao: 'O UX Designer propôs uma interação inovadora, mas o time de Dev avisa que levaria o triplo do tempo para implementar no prazo. Como age?',
      opcoes: [
        { texto: 'Insiste no design original — é responsabilidade do Dev encontrar como implementar.', correta: false, feedback: 'Ignorar viabilidade técnica produz atrito e atraso para a turma toda.' },
        { texto: 'Simplifica tudo sozinho sem consultar ninguém, entregando algo genérico.', correta: false, feedback: 'Simplificar sem diálogo pode perder o ponto central da experiência.' },
        { texto: 'Senta com o Dev para co-criar uma solução que equilibre a experiência desejada e o prazo real.', correta: true, feedback: 'Design e engenharia em diálogo: o resultado é sempre melhor do que sozinhos.' }
      ]
    },
    {
      titulo: 'Ação 2 — Feedbacks contraditórios',
      situacao: 'Testes com usuários apontam um caminho, mas a liderança pede o oposto. O UX Designer está no meio. Como conduz?',
      opcoes: [
        { texto: 'Segue a liderança sem questionar — hierarquia acima de tudo.', correta: false, feedback: 'Ceder sem trazer a evidência do usuário é desperdiçar o papel do UX.' },
        { texto: 'Ignora a liderança e vai com os dados dos usuários, sem comunicar o conflito.', correta: false, feedback: 'Agir sem alinhar cria retrabalho e desconfiança.' },
        { texto: 'Apresenta os dados dos usuários para a liderança e facilita uma decisão conjunta baseada em evidência.', correta: true, feedback: 'O UX que conecta dados e decisão protege o usuário e alinha a turma.' }
      ]
    },
    {
      titulo: 'Ação 3 — Protótipo sem teste',
      situacao: 'O prazo apertou e o UX precisaria entregar o protótipo sem fazer os testes com usuários reais. O que faz?',
      opcoes: [
        { texto: 'Entrega sem testar e não fala nada para não parecer que ficou devendo.', correta: false, feedback: 'Silenciar o risco coloca a turma em posição vulnerável na entrega.' },
        { texto: 'Adia a entrega por conta própria sem avisar o time.', correta: false, feedback: 'Decisão unilateral sem comunicar quebra o fluxo da sprint.' },
        { texto: 'Comunica o risco ao PO e propõe alternativas: teste rápido com colegas ou entrega marcada como hipótese.', correta: true, feedback: 'Transparência sobre risco é parte do trabalho. A turma decide junta.' }
      ]
    }
  ],

  po: [
    {
      titulo: 'Ação 1 — Times em conflito',
      situacao: 'Dois times divergem sobre qual funcionalidade priorizar na próxima sprint e o debate está esquentando. O PO precisa agir. Como?',
      opcoes: [
        { texto: 'Impõe a própria prioridade unilateralmente para encerrar o debate logo.', correta: false, feedback: 'Decisão imposta sem escuta gera resistência e desmotivação.' },
        { texto: 'Deixa cada time decidir por conta própria para evitar conflito.', correta: false, feedback: 'Ausência de alinhamento resulta em times remando em direções opostas.' },
        { texto: 'Facilita uma sessão de refinamento com os dois times, trazendo critérios de valor e impacto para decidir juntos.', correta: true, feedback: 'O PO que facilita decisão coletiva constrói times mais autônomos e alinhados.' }
      ]
    },
    {
      titulo: 'Ação 2 — Pressão por prazo',
      situacao: 'Uma entrega importante está atrasada e a liderança cobra prazo com urgência. O que o PO faz?',
      opcoes: [
        { texto: 'Promete uma data para a liderança sem consultar o time técnico.', correta: false, feedback: 'Promessa sem respaldo do time cria expectativas falsas e pressão injusta.' },
        { texto: 'Culpa o time técnico pelo atraso diante da liderança.', correta: false, feedback: 'Culpar o time quebra a confiança e desintegra a colaboração.' },
        { texto: 'Conversa com o time, entende os impedimentos reais e comunica à liderança com transparência e proposta concreta.', correta: true, feedback: 'Transparência com proposta é a linguagem que une negócio e técnico.' }
      ]
    },
    {
      titulo: 'Ação 3 — Demanda urgente no meio da sprint',
      situacao: 'No terceiro dia da sprint, o negócio traz uma demanda urgente que muda tudo. O PO precisa decidir. Como age?',
      opcoes: [
        { texto: 'Interrompe a sprint imediatamente e muda o backlog sem consultar o time.', correta: false, feedback: 'Mudança unilateral destrói o ritmo e a confiança do time.' },
        { texto: 'Ignora a demanda do negócio completamente para proteger o time.', correta: false, feedback: 'Ignorar o negócio não é proteger o time — é criar conflito futuro.' },
        { texto: 'Avalia o impacto com o time, negocia o que pode entrar ou sair e comunica a decisão a todas as partes.', correta: true, feedback: 'O PO que decide com o time e comunica com o negócio é o elo que mantém tudo junto.' }
      ]
    }
  ]
};
