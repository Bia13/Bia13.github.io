const portfolio = {
  name: "Beatriz Dantas",

  role: "Product Designer, Brand Designer & AI Products",

  description:
    "Construindo produtos digitais de ponta a ponta através de pesquisa, estratégia, design systems e desenvolvimento front-end.",

  about: `
Product Designer e Front-end Developer especializada na construção de produtos digitais de ponta a ponta.

Atuo desde a definição estratégica, naming e branding até UX, Design Systems e implementação front-end.

Nos últimos projetos liderei a criação de plataformas SaaS, ferramentas para marketplaces, sistemas internos e experiências com inteligência artificial aplicada.
  `,

  socials: {
    linkedin: "https://www.linkedin.com/in/dantasbia/",
    behance: "https://www.behance.net/dantasbia",
    github: "https://github.com/Bia13",
  },

  projects: [
    {
      slug: "mamba-nexus",
      title: "Mamba Nexus",
      category: "AI Marketplace Platform",
      image: "/projects/nexus.png",

      description:
        "Ecossistema para vendedores de marketplaces com automações e IA.",

      highlights: ["Branding", "UX/UI", "Design System", "AI", "Chatbot", "SaaS", "Desktop", "Mobile"],

      details: {
        overview:
          "Plataforma completa para vendedores de marketplaces, unindo gestão operacional, automações e um assistente com IA para reduzir fricção no dia a dia. O produto foi pensado para concentrar tarefas dispersas em um único fluxo, com foco em velocidade, clareza e confiança na execução.",
        problem:
          "Os vendedores precisavam alternar entre várias ferramentas para acompanhar pedidos, ajustar precificação e responder a clientes, o que gerava retrabalho e erros manuais.",
        solution:
          "Criei uma experiência centralizada com dashboards, automações inteligentes e chat integrado, permitindo acompanhar operações e agir com mais agilidade em poucos cliques.",
        role:
          "Responsável por branding, UX, UI, design system e front-end, além da estruturação da jornada do produto.",
        workReduction:
          "Reduziu em cerca de 60% o esforço manual de rotina para os times de operação e suporte.",
        metrics: [
          { label: "Tempo de execução", value: "-60%", description: "na execução de tarefas operacionais" },
          { label: "Centralização", value: "3x", description: "mais funções em uma única experiência" },
        ],
        images: [
          "/projects/mamba-nexus.png",
          "/projects/mamba-nexus-2.png",
          "/projects/mamba-nexus-3.png",
        ],
      },
    },

    {
      slug: "nest-ops",
      title: "Nest Ops",
      category: "Internal Operations Platform",
      image: "/projects/nest.png",

      description:
        "Sistema interno de CRM, dashboards e gestão operacional.",

      highlights: ["CRM", "Dashboards", "UX/UI", "Data Analytics", "Desktop"],

      details: {
        overview:
          "Solução de operação interna para equipes, reunindo dashboards analíticos, CRM e fluxos de acompanhamento para facilitar a análise de dados e tomada de decisão. O foco principal foi transformar informações dispersas em uma interface mais objetiva para o dia a dia da operação.",
        problem:
          "A equipe precisava lidar com dados fragmentados e muitas telas para acompanhar clientes e indicadores, o que impactava a velocidade de resposta e a clareza do acompanhamento.",
        solution:
          "Estruturei uma interface desktop mais coesa, com dashboards claros e fluxos de CRM que deixaram a operação mais previsível e menos dependente de processos improvisados.",
        role:
          "UX/UI e estruturação de dashboards e fluxos, com foco em produtividade e clareza operacional.",
        workReduction:
          "Eliminou boa parte do retrabalho de consulta manual e consolidou o acompanhamento em um único ambiente.",
        metrics: [
          { label: "Visão operacional", value: "+2x", description: "mais contexto em uma única tela" },
          { label: "Tempo de análise", value: "-45%", description: "na leitura de indicadores" },
        ],
        images: [
          "/projects/nest-ops.png",
          "/projects/nest-ops-3.png",
        ],
      },
    },
      {
      slug: "b2c-sales-plus",
      title: "B2C Sales Plus",
      category: "Pharmaceutical Sales Platform",
      image: "/projects/b2c.png",

      description:
        "Modernização da experiência de vendas para o setor farmacêutico.",

      highlights: ["UI/UX", "Smart POS", "Retail", "Desktop", "Product Design"],

      details: {
        overview:
        "Solução utilizada por balconistas e vendedores para conduzir toda a jornada comercial, desde a pré-venda até o checkout final do consumidor. A proposta foi tornar a venda mais fluida, confiável e menos dependente de decisões improvisadas no ponto de venda.",

        problem:
        "O produto tinha uma experiência fragmentada e pouco consistente, o que dificultava a condução da venda e gerava lentidão na operação.",

        solution:
        "Refatorei a experiência de ponta a ponta, simplificando fluxos, fortalecendo consistência visual e tornando a jornada mais intuitiva para desktop e Smart POS.",

        role:
        "Atuei na refatoração completa da experiência do produto, melhorando usabilidade, fluxos e consistência visual para desktop e Smart POS.",

        workReduction:
        "Ajudou a reduzir a dependência de orientações manuais e tornou o processo de venda mais intuitivo para a equipe.",

        metrics: [
          { label: "Fluxo de venda", value: "+35%", description: "mais fluidez na jornada comercial" },
          { label: "Consistência", value: "100%", description: "dos principais passos alinhados visualmente" },
        ],

        images: [

          "/projects/b2c-3.png",
        ],
      },
    },
    {
      slug: "cosmos-pro",
      title: "Cosmos Pro",
      category: "Enterprise Mobile Platform",
      image: "/projects/Login Page.png",

      description:
      "Aplicativo corporativo com múltiplas funcionalidades para operações empresariais.",

      highlights: [ "Mobile",
      "UX/UI",
      "Product Design",
      "Enterprise",],

      details: {
        overview:
        "Aplicativo desenvolvido para empresas que necessitam concentrar diferentes serviços e processos em uma única experiência mobile. O objetivo foi criar uma base mais clara e escalável para operações empresariais recorrentes.",

        problem:
        "A navegação não estava alinhada com as necessidades reais de uso, o que dificultava a localização de serviços e aumentava a fricção da experiência.",

        solution:
        "Refatorei a arquitetura da informação, a navegação e a interface para tornar o app mais intuitivo e eficiente em uso diário.",

        role:
        "Responsável pela refatoração da experiência mobile, melhorias de navegação, arquitetura da informação e interface.",

        workReduction:
        "Reduziu o tempo de navegação e tornou o acesso às principais ações mais direto para os usuários.",

        metrics: [
          { label: "Acesso rápido", value: "-40%", description: "no tempo para encontrar serviços principais" },
          { label: "Consistência", value: "+3x", description: "mais padronização visual entre telas" },
        ],

        images: [
          "/projects/cosmos2.png",
          "/projects/cosmos3.png",
        ],
      },
    },
    {
    slug: "mmc-web",
    title: "MMC Web",
    category: "Procurement Intelligence Platform",
    image: "/projects/mmc.png",

    description:
      "Plataforma para apoiar decisões estratégicas de compras corporativas.",

    highlights: [
      "Procurement",
      "UX/UI",
      "Data Visualization",
      "Enterprise",
      "Desktop",
    ],

    details: {
      overview:
        "Sistema criado para apoiar equipes de compras na análise de dados e tomada de decisões estratégicas, oferecendo indicadores e ferramentas de apoio à negociação. O desafio era transformar uma interface carregada em uma plataforma mais facilitadora de decisão.",

      problem:
        "As equipes precisavam interpretar muitos dados e encontrar rapidamente os pontos mais relevantes para negociação, mas a interface dificultava essa leitura.",

      solution:
        "Modernizei a interface, reorganizei os fluxos principais e priorizei a visualização de indicadores para acelerar a compreensão e a tomada de decisão.",

      role:
        "Atuei na modernização do produto através da refatoração da interface, melhoria da experiência do usuário e reorganização dos fluxos principais.",

      workReduction:
        "Ajudou a reduzir a necessidade de validações manuais e tornou a análise mais direta para a equipe.",

      metrics: [
        { label: "Leitura de dados", value: "-35%", description: "na curva de interpretação" },
        { label: "Decisões rápidas", value: "+2x", description: "mais velocidade na análise" },
      ],

      images: [
        "/projects/mmc1.png",
      ],
    },
  },

    {
      slug: "design-systems",
      title: "Design Systems",
      category: "Scalable Design System",
      image: "/projects/ds.png",

      description:
        "Sistema de design escalável com tokens, componentes e documentação.",

      highlights: ["Figma", "Tokens", "Components", "Docs", "Style Guide"],

      details: {
        overview:
          "Criação e documentação de sistemas de design — tokens, componentes, guidelines e bibliotecas reutilizáveis para garantir consistência visual e agilidade no desenvolvimento de produtos. A proposta foi reduzir retrabalho e fortalecer a escalabilidade entre times.",

        problem:
          "A consistência visual e a velocidade de entrega eram impactadas por inconsistências entre componentes e falta de padronização entre projetos.",

        solution:
          "Estruturei um sistema de design escalável com tokens, componentes e documentação clara, facilitando manutenção e aceleração na criação de novas interfaces.",

        role:
          "Criação do sistema de design e documentação.",

        workReduction:
          "Ajudou a reduzir retrabalho de design e desenvolvimento e acelerou a entrega de novas telas.",

        metrics: [
          { label: "Padronização", value: "+4x", description: "mais consistência entre produtos" },
          { label: "Velocidade", value: "-50%", description: "na criação de novas interfaces" },
        ],

        images: [
          "/projects/design-system.png",
          "/projects/design-system-2.png",
          "/projects/design-system-3.png",
        ],
      },
    },
  ],

  graphicDesignGallery: [
    {
      image: "/projects/softfacil_1.png",
    },
    {
      image: "/projects/softfacil_2.png",
    },
    {
      image: "/projects/softfacil_3.png",
    },
        {
      image: "/projects/rheon_1.png",
    },
        {
      image: "/projects/rheon_2.png",
    },
        {
      image: "/projects/rheon_3.png",
    },
    {
      image: "/projects/reals_1.png",
    },
        {
      image: "/projects/reals_2.png",
    },
        {
      image: "/projects/reals_3.png",
    },
        {
      image: "/projects/reals_4.png",
    },
        {
      image: "/projects/reals_5.png",
    },
        {
      image: "/projects/big.png",
    },
  ],
};

export default portfolio;