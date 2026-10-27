// Conteúdo da oferta "Caixinhas para Canecas". Links de checkout centralizados aqui
// para serem trocados facilmente quando os novos links forem enviados.
export const CHECKOUT = {
  completo: "https://pay.wiapy.com/7eZTbLqujZEY",
  completoDesconto: "https://pay.wiapy.com/qxF4C9bG9b2",
  basico: "https://pay.wiapy.com/l1yhgv5Cujs6",
} as const;

const ib = (p: string) => `https://i.ibb.co/${p}`;

export const IMAGES = {
  hero: ib("xqjdhQZ9/CAPAS-DIGITAL-2.png"),
  receive: ib("B53LCdnm/CAPAS-DIGITAL-6.png"),
  completo: ib("nNKLmn4N/CAPAS-DIGITAL-11.png"),
  seal: ib("HLrZbwj9/Selo-Garantia-7-Dias.png"),
};

export const MODELS: string[] = [
  "Y4wKnjvP/1779978304226-9f4c63c8-f490-4c8a-a7c8-ef545b39044b.jpg",
  "Y7sPZvVZ/1781946566965-0abedcd5-7db2-4dc6-82e3-ed187e23b439.png",
  "jPYh0LRC/1784912279841-0634ba94-bbee-46f5-8881-2e25afe4d4ff.jpg",
  "hFppFH1F/1784912456298-acf64c3a-b986-46a3-b7cb-1ff90b0829fc.jpg",
  "mrPxbsFL/1784912525833-237f3a78-05a8-4f2b-94d2-f8873d46cb49.jpg",
  "nND7Xd8R/1784912599505-ed3159e6-c788-49b6-b5d9-40cdbcd0500a.jpg",
  "BHsfNv0m/1784912649049-7a889333-6ffb-4606-b0d1-d1ef04fc69f1.jpg",
  "N6BPJbZ6/1784913286835-955a10f2-7af0-4634-ba9d-75fc8fb61f26.jpg",
  "cSXzc6SQ/1784913388969-1606374b-9db8-434c-863d-f8f97ce01b97.jpg",
  "4Rv61NZF/1784913453799-06665c8f-062b-4530-971e-4943cf805ba5.jpg",
  "7xrMWhJ3/CAPAS-DIGITAL-5.png",
  "xphb0nB/CAPAS-DIGITAL-4.png",
  "VpNsdq6x/CAPAS-DIGITAL-3.png",
].map(ib);

export const BENEFITS = [
  {
    icon: "📦",
    title: "Valorize suas canecas",
    text: "Embalagens bonitas aumentam o valor percebido do seu produto.",
  },
  {
    icon: "🎯",
    title: "Comece sem experiência",
    text: "Mesmo sem experiência você consegue montar os moldes.",
  },
  {
    icon: "⚡",
    title: "Monte em minutos",
    text: "Cada molde leva de 10 a 15 minutos para montar.",
  },
  {
    icon: "💰",
    title: "Gaste centavos para produzir",
    text: "O material sai por centavos e você vende com margem alta.",
  },
  {
    icon: "🛒",
    title: "Os modelos mais procurados",
    text: "Não são moldes aleatórios: são os modelos com alta saída no mercado.",
  },
  {
    icon: "🗂️",
    title: "Tudo organizado num só lugar",
    text: "Acesse a qualquer hora, de qualquer lugar, tudo pronto para usar.",
  },
];

export const IDEAL_FOR = [
  "Precisa de dinheiro para pagar as contas",
  "Não sabe por onde começar",
  "Quer uma renda sem sair de casa",
  "Precisa de algo fácil, prático e sem experiência",
  "Já tentou outras formas e nunca deu certo",
  "Não tem muito tempo, mas precisa de dinheiro agora",
  "Quer entregar canecas com aparência premium",
];

export const BONUSES = [
  {
    img: ib("zV2CTCFf/CAPAS-DIGITAL-9.png"),
    title: "+30 Moldes Prontos de Buquê",
    text: "Moldes para criar buquês encantadores e personalizados — fácil de vender em qualquer época do ano.",
    price: 37,
  },
  {
    img: ib("MYb0YJX/CAPAS-DIGITAL-8.png"),
    title: "+100 Moldes Caixa Cenário",
    text: "Mais de 100 moldes de caixa cenário, um item super procurado e com ótimo valor percebido.",
    price: 47,
  },
  {
    img: ib("mm9xVqB/B-NUS-1.png"),
    title: "100 Formas de Postar + Planner 30 Dias",
    text: "100 ideias de posts e um planner de 30 dias para divulgar sem travar.",
    price: 47,
  },
  {
    img: ib("9kyJjNFW/Capa-do-Produto-13.png"),
    title: "100 Mensagens Prontas Para Vender",
    text: "Copie, cole no WhatsApp e chame clientes na hora, sem pensar no que escrever.",
    price: 37,
  },
  {
    img: ib("Pv9nLLcD/B-nus-2.png"),
    title: "Kit Primeira Venda",
    text: "Um direcionamento simples e direto para você sair do zero e fazer a sua primeira venda.",
    price: 57,
  },
  {
    img: ib("n84MXJZg/CAPAS-DIGITAL-10.png"),
    title: "Tag, Adesivo e Lapela",
    text: "Kit completo para personalizar suas embalagens com cara de loja profissional.",
    price: 35,
  },
  {
    img: ib("4n4tjn9j/CAPAS-DIGITAL-7.png"),
    title: "Maleta do Stitch",
    text: "Produto fofo e super procurado, fácil de vender para o público infantil.",
    price: 37,
  },
];

export const CORE_ITEMS = [
  "+100 Moldes de Caixas para Canecas",
  "+60 Artes para Canecas",
  "Videoaula Passo a Passo de Montagem",
];

export const TESTIMONIALS = [
  {
    name: "Ana Maria P.",
    meta: "Recife, PE",
    img: ib("1fgcR59S/296352808-375680588013690-6272023175404857598-n.jpg"),
    text: "Tava com 3 contas atrasadas e sem esperança… fiquei com medo, porque já tinha caído em golpe antes. Mas resolvi tentar. Fiz minhas primeiras caixinhas com canecas e vendi no mesmo dia. Consegui pagar as 3 contas no mesmo dia, não acreditei.",
  },
  {
    name: "Camila S.",
    meta: "Fortaleza, CE",
    img: ib("hxYwsBVs/Captura-de-tela-2026-01-13-134916.png"),
    text: "Eu nunca tinha feito nada de papelaria ou artesanato… achei que não ia conseguir. Mas é muito simples mesmo. Segui a videoaula e ficou lindo, consegui vender pelo WhatsApp no mesmo dia.",
  },
  {
    name: "Juliana R.",
    meta: "Belém, PA",
    img: ib("fd5svnnL/Captura-de-tela-2026-04-13-214740.png"),
    text: "Comprei sem acreditar muito… Mas quando vi que dava pra fazer em minutos e já vender no mesmo dia, comecei a postar. Os pedidos apareceram rápido. Esse dinheiro foi direto pra conta de casa.",
  },
];

export const FAQ = [
  [
    "Eu preciso ter experiência com papelaria ou artesanato?",
    "Não. Os moldes foram feitos para quem está começando do zero. A videoaula passo a passo mostra exatamente como montar.",
  ],
  [
    "Eu preciso desenhar ou criar algo?",
    "Não. Tudo já vem pronto. Você só imprime, monta e vende.",
  ],
  [
    "Preciso de muitos materiais para começar?",
    "Não. Basicamente papel, cola e tesoura. O custo de produção é mínimo e a margem de venda é alta.",
  ],
  [
    "Dá para fazer usando só o celular?",
    "Sim. Você acessa tudo pelo celular, monta os produtos e já pode começar a vender no mesmo dia.",
  ],
  [
    "Onde posso vender esses produtos?",
    "Pelo WhatsApp, Instagram, Facebook e grupos. Você monta, fotografa e divulga.",
  ],
  [
    "Em quanto tempo eu consigo começar a vender?",
    "Em 10 a 15 minutos você já tem a primeira caixinha pronta.",
  ],
  [
    "O acesso é por quanto tempo?",
    "O acesso é imediato e vitalício. Você paga uma vez e acessa para sempre.",
  ],
  [
    "Funciona em qualquer impressora?",
    "Sim. Qualquer impressora doméstica comum (jato de tinta ou laser), copiadora ou gráfica.",
  ],
  [
    "Como recebo o material após a compra?",
    "Assim que o pagamento for confirmado, você recebe no seu e-mail o link de acesso. É instantâneo.",
  ],
  [
    "Isso é seguro? Tenho medo de ser golpe.",
    "A compra é feita pela plataforma oficial de pagamento, você recebe o acesso na hora e ainda tem 7 dias de garantia total.",
  ],
  [
    "Quais papéis são recomendados?",
    "Folhas A4 com gramatura de 180g a 240g (Fotográfico Matte, Offset ou Opaline) para uma estrutura profissional.",
  ],
  [
    "Preciso de máquina de corte para montar as caixinhas?",
    "De jeito nenhum! Você recorta perfeitamente usando tesoura, estilete e régua.",
  ],
] as const;
