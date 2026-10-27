import collectionImage from "@/assets/generated/colecao-mundos-de-papel.z4b1772dba6.png";
import missionsImage from "@/assets/generated/cartoes-missoes-divertidas.webp";
import storyCardsImage from "@/assets/generated/cartas-crie-sua-propria-historia.webp";
import passportImage from "@/assets/generated/passaporte-pequenos-exploradores.webp";
import playIdeasImage from "@/assets/generated/ideias-brincadeiras-em-familia.webp";
import accessoriesImage from "@/assets/generated/kit-acessorios-expandir-mundos.webp";
import heroImage from "@/assets/uploads/11437.z2eff9d08a7.png";
import familyPlayImage from "@/assets/uploads/11460.z2d9f6c2598.png";
import completeKitImage from "@/assets/uploads/11479.z14d652265b.png";
import essentialOfferCardImage from "@/assets/uploads/11547.z843cec8535.png";
import maxOfferCardImage from "@/assets/uploads/11522.png";
import cuttingIllustration from "@/assets/uploads/11469.zeeaa890d7d.png";
import farmImage from "@/assets/generated/fazendinha-divertida.webp";
import castleImage from "@/assets/uploads/11458.z5f5982f49d.png";
import forestImage from "@/assets/generated/floresta-encantada.webp";
import dinosaursImage from "@/assets/generated/mundo-dos-dinossauros.webp";
import villageImage from "@/assets/generated/vila-dos-bichinhos.webp";
import oceanImage from "@/assets/generated/fundo-do-mar.webp";
import spaceImage from "@/assets/uploads/11442.png";
import cityImage from "@/assets/uploads/11444.png";
import pirateIslandImage from "@/assets/uploads/11446.png";
import campingImage from "@/assets/uploads/11447.png";
import { Button } from "@/components/ui/button";
import { SmallWorldsOfferCard } from "@/components/SmallWorldsOfferCard";
import { type MouseEvent, type PointerEvent as ReactPointerEvent, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  BookOpen,
  Castle,
  Check,
  ChevronDown,
  Heart,
  House,
  Image as ImageIcon,
  Layers,
  Lightbulb,
  Printer,
  Rocket,
  ShoppingCart,
  ArrowRight,
  Scissors,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const modelScenarios = [
  {
    name: "Fazendinha Divertida",
    image: farmImage,
    alt: "Maquete artesanal de uma fazendinha de papel com celeiro, animais, lago e moinho",
  },
  {
    name: "Castelo Medieval",
    image: castleImage,
    alt: "Castelo medieval de papel com torres azuis, cavaleiro, princesa, dragão e ponte",
  },
  {
    name: "Floresta Encantada",
    image: forestImage,
    alt: "Floresta encantada de papel com casa na árvore, cogumelos, ponte e animais",
  },
  {
    name: "Mundo dos Dinossauros",
    image: dinosaursImage,
    alt: "Cenário de dinossauros de papel com vulcão, lago e vegetação pré-histórica",
  },
  {
    name: "Vila dos Bichinhos",
    image: villageImage,
    alt: "Pequena vila de papel com casas coloridas, praça, jardim e animais",
  },
  {
    name: "Fundo do Mar",
    image: oceanImage,
    alt: "Diorama submarino de papel com peixes, corais, conchas e criaturas marinhas",
  },
  {
    name: "Espaço Sideral",
    image: spaceImage,
    alt: "Cenário espacial infantil feito de papel, com foguete, astronautas, planetas e superfície lunar",
  },
  {
    name: "Cidade dos Pequenos",
    image: cityImage,
    alt: "Cidade em miniatura feita de papel, com casinhas coloridas, ruas, árvores e pequenos personagens",
  },
  {
    name: "Ilha dos Piratas",
    image: pirateIslandImage,
    alt: "Ilha de papel com navio pirata, palmeiras, baú do tesouro e personagens em uma mesa",
  },
  {
    name: "Acampamento na Natureza",
    image: campingImage,
    alt: "Cenário de acampamento de papel na natureza, com barraca, fogueira, riacho, montanhas e animais da floresta",
  },
];

const carouselRows = [modelScenarios.slice(0, 5), modelScenarios.slice(5)];

type CarouselDrag = {
  pointerId: number;
  startX: number;
  startTime: number;
  duration: number;
  distance: number;
  direction: number;
  animation: Animation;
};

const benefits = [
  "Um cenário de papel para montar e explorar.",
  "Uma atividade criativa para compartilhar com as crianças.",
  "Uma nova maneira de inventar histórias e brincar em casa.",
];

const benefitsCards = [
  {
    icon: Users,
    title: "Criem algo juntos",
    text: "A montagem pode fazer parte da experiência: preparar os materiais e acompanhar o cenário ganhar forma.",
  },
  {
    icon: Lightbulb,
    title: "Menos tempo planejando",
    text: "Vocês partem de uma atividade preparada, em vez de inventar uma brincadeira inteira do zero.",
  },
  {
    icon: BookOpen,
    title: "Imaginação em movimento",
    text: "O cenário oferece um ponto de partida para histórias e situações criadas pela própria criança.",
  },
  {
    icon: Heart,
    title: "Uma atividade para compartilhar",
    text: "Pais e responsáveis podem participar da montagem e da brincadeira, no ritmo da criança.",
  },
  {
    icon: Sparkles,
    title: "Novas histórias a cada vez",
    text: "O mesmo cenário pode inspirar personagens, aventuras e brincadeiras diferentes.",
  },
  {
    icon: Printer,
    title: "Um produto digital",
    text: "Os modelos são digitais e precisam ser impressos. Confira os requisitos antes da compra.",
  },
];

const assemblySteps = [
  {
    number: "1",
    title: "Imprima",
    description: "Escolha o cenário, imprima as folhas e separe os materiais necessários.",
    image: collectionImage,
    imageAlt: "Coleção de cenários de papel para imprimir e montar",
    icon: Printer,
    color: "bg-secondary/60",
  },
  {
    number: "2",
    title: "Recorte",
    description: "Recorte as peças seguindo os contornos indicados nas folhas.",
    image: cuttingIllustration,
    imageAlt: "Ilustração do passo de recorte das peças de papel",
    icon: Scissors,
    color: "bg-sky/30",
  },
  {
    number: "3",
    title: "Dobre e monte",
    description:
      "Acompanhe as orientações impressas, faça as dobras e encaixe as peças para formar o cenário.",
    image: castleImage,
    imageAlt: "Cenário de castelo montado com peças de papel",
    icon: Layers,
    color: "bg-accent/30",
  },
  {
    number: "4",
    title: "Comece a aventura",
    description:
      "Com o cenário montado, inventem histórias, criem personagens e aproveitem a brincadeira!",
    image: familyPlayImage,
    imageAlt: "Família brincando junta com cenários de papel",
    icon: House,
    color: "bg-coral/15",
  },
];

const playIdeas = [
  [
    "A missão dos animais",
    "Inventem uma história em que cada animal precisa encontrar seu lugar na fazenda.",
  ],
  [
    "Um dia especial",
    "A criança decide o que acontece naquele dia e escolhe quais personagens participam.",
  ],
  ["O mistério do celeiro", "Criem uma aventura em que algo precisa ser encontrado ou resolvido."],
  [
    "A história de vocês",
    "Escolham personagens, criem um problema e descubram juntos como a história termina.",
  ],
];

const faqs = [
  [
    "O produto é físico ou digital e como recebo?",
    "O Pequenos Mundos é 100% digital em formato PDF de alta resolução. Imediatamente após a confirmação da compra, você recebe o acesso completo no seu e-mail para baixar e começar a imprimir na hora.",
  ],
  [
    "Para qual idade os cenários são indicados?",
    "A proposta é ideal para famílias com crianças de 3 a 8 anos. A montagem é uma experiência criativa para fazer juntos longe das telas, e os cenários servem de palco para inúmeras histórias criadas pela própria criança.",
  ],
  [
    "Preciso de uma impressora especial ou materiais caros?",
    "Não! Os arquivos foram projetados para folhas comuns no formato A4 em qualquer impressora caseira ou papelaria. Para montar, você só precisa de tesoura sem ponta, cola comum e régua para auxiliar nas dobras.",
  ],
  [
    "Posso imprimir mais de uma vez?",
    "Sim! O seu acesso aos arquivos é vitalício. Você pode baixar e imprimir quantas cópias quiser sempre que quiser criar novas histórias, repor peças ou presentear.",
  ],
  [
    "Como funciona a garantia de 7 dias?",
    "Você tem 7 dias de garantia incondicional para testar. Se por qualquer motivo você e sua família não ficarem encantados com os cenários, basta solicitar o reembolso e você recebe 100% do seu dinheiro de volta.",
  ],
];

const bonusItems = [
  {
    image: missionsImage,
    alt: "Cartões coloridos de missões infantis com animais, estrelas e pistas",
    title: "Cartões de Missões Divertidas",
    description:
      "Transforme cada cenário em uma nova aventura com cartões de desafios que convidam a criança a explorar, procurar pistas e inventar soluções.",
    examples: [
      "Ajude o personagem perdido.",
      "Encontre o tesouro escondido.",
      "Descubra quem deixou as pegadas.",
    ],
    value: "R$ 9,90",
  },
  {
    image: storyCardsImage,
    alt: "Cartas imprimíveis com personagens, lugares mágicos e acontecimentos",
    title: "Cartas Crie Sua Própria História",
    description:
      "Combine personagens, lugares e acontecimentos para inventar histórias diferentes sempre que vocês começarem uma nova brincadeira.",
    highlight: "Uma nova história pode nascer a cada combinação.",
    value: "R$ 9,90",
  },
  {
    image: passportImage,
    alt: "Passaporte infantil imprimível com páginas para desenhos e descobertas",
    title: "Passaporte dos Pequenos Exploradores",
    description:
      "Um passaporte imprimível para registrar os mundos visitados, desenhar descobertas e guardar lembranças das aventuras criadas em família.",
    highlight: "Cada mundo explorado ganha seu lugar no passaporte.",
    value: "R$ 7,90",
  },
  {
    image: playIdeasImage,
    alt: "Guia digital imprimível com páginas de brincadeiras ilustradas",
    title: "30 Ideias de Brincadeiras em Família",
    description:
      "Ideias práticas para explorar cenários com jogos de observação, desafios imaginativos, histórias em turnos e brincadeiras de faz de conta.",
    highlight: "Menos tempo pensando no que fazer. Mais ideias para começar.",
    value: "R$ 12,90",
  },
  {
    image: accessoriesImage,
    alt: "Acessórios de papel em miniatura para expandir cenários de brincadeira",
    title: "Kit de Acessórios para Expandir os Mundos",
    description:
      "Elementos adicionais planejados para personalizar cenários e criar novas configurações, conforme os acessórios disponíveis na versão final.",
    value: "R$ 12,90",
  },
];

function OfferSticker({
  kind,
  className = "",
}: {
  kind: "dragon" | "princess" | "farm" | "leaves" | "sparkle" | "cloud";
  className?: string;
}) {
  const stickerStyle = {
    filter: "drop-shadow(0 3px 3px rgb(25 74 58 / 18%))",
  };

  return (
    <svg
      viewBox="0 0 100 100"
      className={`pointer-events-none absolute z-10 h-16 w-16 sm:h-20 sm:w-20 ${className}`}
      style={stickerStyle}
      aria-hidden="true"
      focusable="false"
    >
      {kind === "dragon" && (
        <g stroke="white" strokeWidth="7" strokeLinejoin="round" strokeLinecap="round">
          <path
            fill="#63a96d"
            d="M23 68 13 49l17 5c3-20 20-31 40-23l13 10-8 7 8 8-14 4-7 17-17 5-13-8-13 2z"
          />
          <path fill="#a9d889" d="m39 67 20 1-5 17-13-3z" />
          <path fill="#f4ad68" d="m28 46-1-14 13 10m12-11 5-13 8 17" />
          <path fill="#fff" d="M63 43a4 4 0 1 0 0 8 4 4 0 0 0 0-8" strokeWidth="3" />
          <path fill="none" d="m69 57 9 2" strokeWidth="3" />
        </g>
      )}
      {kind === "princess" && (
        <g stroke="white" strokeWidth="7" strokeLinejoin="round" strokeLinecap="round">
          <path fill="#f5c68f" d="M39 33c0-13 22-13 22 0v8H39z" />
          <path fill="#d985a8" d="m39 45-17 42h56L61 45z" />
          <path fill="#f2b7d0" d="m39 45 11 12 11-12 12 42H28z" />
          <path fill="#f4c58a" d="M40 37h20v14H40z" />
          <path fill="#f3cc5b" d="m39 31 5-12 7 7 7-9 5 14z" />
          <path fill="none" d="M45 42h.1m9 0h.1" stroke="#355b45" strokeWidth="3" />
          <path fill="none" d="M47 47q3 3 6 0" stroke="#b15f70" strokeWidth="2.5" />
        </g>
      )}
      {kind === "farm" && (
        <g stroke="white" strokeWidth="7" strokeLinejoin="round" strokeLinecap="round">
          <path fill="#f0d59c" d="M20 54q0-25 20-25t20 25v27H20z" />
          <path fill="#71975c" d="M23 48q17-11 34 0l-3-16H27z" />
          <path fill="#8b5839" d="m17 40 23-12 24 12-4 6H20z" />
          <path fill="#fff" d="M58 66q0-17 17-17t17 17v14H58z" />
          <path fill="#273e36" d="M59 62q8-9 17-3l8-3 8 8-9 4-6-4-8 5z" />
          <circle cx="69" cy="65" r="2" fill="#263d35" stroke="none" />
          <circle cx="82" cy="65" r="2" fill="#263d35" stroke="none" />
          <path fill="#efaa8e" d="M70 70q7-5 14 0l-2 7h-10z" />
        </g>
      )}
      {kind === "leaves" && (
        <g fill="#6e9651" stroke="white" strokeWidth="5" strokeLinejoin="round">
          <path d="M49 91V43M48 67C29 68 18 55 20 40c17-2 29 7 28 27Zm2-13c2-20 16-31 32-29 0 18-12 30-32 29ZM48 42C31 37 25 24 30 10c15 5 22 16 18 32Zm4 31c17 0 27-10 29-24-15-2-27 7-29 24Z" />
        </g>
      )}
      {kind === "sparkle" && (
        <g stroke="white" strokeWidth="6" strokeLinejoin="round">
          <path fill="#f3bc4f" d="m50 8 10 29 29 13-29 10-10 32-10-32-29-10 29-13z" />
          <circle cx="82" cy="23" r="5" fill="#f3bc4f" />
        </g>
      )}
      {kind === "cloud" && (
        <g stroke="white" strokeWidth="7" strokeLinejoin="round" strokeLinecap="round">
          <path fill="#d9f0f8" d="M25 69a19 19 0 0 1-2-38 28 28 0 0 1 52-7 23 23 0 0 1 3 45z" />
          <path
            fill="none"
            stroke="#8ec6dc"
            strokeWidth="3"
            d="M25 34a24 24 0 0 1 45-6 19 19 0 0 1 10 36"
          />
          <circle cx="42" cy="47" r="3" fill="#355b45" stroke="none" />
          <circle cx="62" cy="47" r="3" fill="#355b45" stroke="none" />
          <path fill="none" stroke="#355b45" strokeWidth="2.5" d="M45 55q7 7 14 0" />
          <circle cx="35" cy="54" r="3" fill="#f2a4a1" stroke="none" />
          <circle cx="69" cy="54" r="3" fill="#f2a4a1" stroke="none" />
        </g>
      )}
    </svg>
  );
}

function ProductImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="flex min-h-64 items-center justify-center rounded-3xl border-2 border-dashed border-border bg-muted p-8 text-center sm:min-h-80">
      <div className="max-w-sm">
        <Printer className="mx-auto h-9 w-9 text-primary" aria-hidden="true" />
        <p className="mt-4 font-bold">{label}</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Uma coleção de cenários de papel para imprimir, montar e explorar em família.
        </p>
      </div>
    </div>
  );
}

function scrollToOffer(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
  document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function ActionButton() {
  return (
    <Button
      asChild
      size="lg"
      className="w-full rounded-full bg-primary font-extrabold text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:bg-primary/90 sm:w-auto"
    >
      <a href="#oferta" onClick={scrollToOffer}>
        Quero escolher meu kit
      </a>
    </Button>
  );
}

export default function SmallWorldsLanding() {
  const carouselDrag = useRef<CarouselDrag | null>(null);
  const [selectedOffer, setSelectedOffer] = useState<string | null>(null);

  function handleCarouselPointerDown(event: ReactPointerEvent<HTMLDivElement>, rowIndex: number) {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    const animation = event.currentTarget.getAnimations()[0];
    if (!animation) return;

    const duration = Number(animation.effect?.getTiming().duration) || 25000;
    const distance = event.currentTarget.scrollWidth / 2;
    if (!distance) return;

    carouselDrag.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startTime: Number(animation.currentTime) || 0,
      duration,
      distance,
      direction: rowIndex === 1 ? 1 : -1,
      animation,
    };

    animation.pause();
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handleCarouselPointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    const drag = carouselDrag.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    const deltaX = event.clientX - drag.startX;
    drag.animation.currentTime =
      drag.startTime + (deltaX * drag.duration * drag.direction) / drag.distance;
  }

  function finishCarouselDrag(event: ReactPointerEvent<HTMLDivElement>) {
    const drag = carouselDrag.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    drag.animation.play();
    carouselDrag.current = null;
  }

  function handleCarouselKeyDown(event: React.KeyboardEvent<HTMLDivElement>, rowIndex: number) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;

    const animation = event.currentTarget.querySelector("[data-marquee-track]")?.getAnimations()[0];
    if (!animation) return;

    event.preventDefault();
    const duration = Number(animation.effect?.getTiming().duration) || 25000;
    const distance =
      event.currentTarget.querySelector<HTMLElement>("[data-marquee-track]")?.scrollWidth ?? 0;
    const direction = rowIndex === 1 ? -1 : 1;
    const keyDirection = event.key === "ArrowLeft" ? 1 : -1;

    animation.currentTime =
      (Number(animation.currentTime) || 0) +
      (keyDirection * direction * duration * 288) / (distance / 2 || 1);
  }

  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <section className="relative isolate overflow-hidden bg-background px-4 py-10 sm:py-16 lg:py-20">
        <div
          className="absolute right-0 top-0 -z-10 h-72 w-72 translate-x-1/3 -translate-y-1/3 rounded-full bg-sky/25 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 -z-10 h-64 w-64 -translate-x-1/3 translate-y-1/3 rounded-full bg-secondary/40 blur-3xl"
          aria-hidden="true"
        />

        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-primary shadow-sm">
              <Sparkles className="h-4 w-4 text-coral" aria-hidden="true" />
              Uma nova aventura começa em casa
            </span>

            <h1 className="mx-auto mt-6 max-w-2xl text-3xl font-extrabold leading-[1.1] tracking-tight text-balance sm:text-5xl lg:mx-0 lg:text-6xl">
              Transforme folhas de papel em{" "}
              <span className="relative inline-block text-primary">
                pequenos mundos
                <span
                  className="absolute -bottom-1 left-0 -z-10 h-3 w-full rounded-full bg-accent/60"
                  aria-hidden="true"
                />
              </span>{" "}
              para viver grandes aventuras em família.
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground lg:mx-0">
              Com o Pequenos Mundos, vocês podem transformar papel em cenários 3D para montar,
              explorar e usar como ponto de partida para novas histórias em família.
            </p>

            <ul className="mx-auto mt-7 grid max-w-xl gap-3 text-left sm:grid-cols-2 lg:mx-0">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 rounded-2xl border border-border/70 bg-card p-3.5 sm:p-4 text-sm font-semibold shadow-sm"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/60">
                    <Check className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <p className="mx-auto mt-6 max-w-lg text-sm font-semibold leading-relaxed lg:mx-0">
              Você não precisa inventar a brincadeira do zero. Comece com um mundo pronto para
              montar e deixe a imaginação fazer o resto.
            </p>

            <div className="mt-7 flex justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="h-auto min-h-12 w-full max-w-sm whitespace-normal rounded-full border-2 border-card bg-primary px-7 py-3.5 text-center text-base font-extrabold leading-tight text-primary-foreground shadow-xl shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-2xl focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 sm:w-auto"
              >
                <a href="#oferta" onClick={scrollToOffer}>
                  Quero conhecer o Pequenos Mundos
                </a>
              </Button>
            </div>

            <p className="mt-3 text-xs text-muted-foreground">
              Produto digital · Arquivos para impressão · Confira as condições de acesso no
              checkout.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
            <div
              className="absolute -inset-3 -z-10 rotate-2 rounded-[2rem] bg-secondary/60 sm:-inset-4"
              aria-hidden="true"
            />
            <div className="relative rounded-[1.75rem] border border-border/70 bg-card p-2.5 shadow-xl sm:rounded-[2rem] sm:p-4">
              <img
                src={heroImage}
                alt="Cenários de papel de floresta, dinossauros, castelo e fazenda montados sobre uma mesa"
                fetchPriority="high"
                decoding="async"
                className="aspect-[4/3] sm:aspect-square w-full rounded-[1.35rem] object-cover sm:rounded-[1.5rem]"
              />
            </div>
            <p className="mt-5 text-center text-sm font-medium text-muted-foreground">
              Diferentes possibilidades para imaginar em família
            </p>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-sky/35 px-4 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Veja os modelos prontos para brincar
            </h2>
            <p className="mt-3 text-muted-foreground">
              Descubra mundos encantadores para montar, explorar e inventar novas histórias em
              família.
            </p>
          </div>

          <div role="region" aria-label="Galeria de cenários Pequenos Mundos" className="space-y-4">
            {carouselRows.map((scenarios, rowIndex) => (
              <div
                key={rowIndex}
                tabIndex={0}
                role="group"
                aria-label={`Fileira ${rowIndex + 1} de cenários. Use as setas do teclado para navegar.`}
                onKeyDown={(event) => handleCarouselKeyDown(event, rowIndex)}
                className="overflow-hidden rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <div
                  data-marquee-track
                  onPointerDown={(event) => handleCarouselPointerDown(event, rowIndex)}
                  onPointerMove={handleCarouselPointerMove}
                  onPointerUp={finishCarouselDrag}
                  onPointerCancel={finishCarouselDrag}
                  className={`flex w-max select-none touch-pan-y cursor-grab active:cursor-grabbing ${
                    rowIndex === 1
                      ? "animate-marquee [animation-direction:reverse]"
                      : "animate-marquee"
                  }`}
                >
                  {[0, 1].map((copy) => (
                    <div key={copy} aria-hidden={copy === 1} className="flex shrink-0 gap-4 pr-4">
                      {scenarios.map((scenario) => (
                        <article
                          key={`${copy}-${scenario.name}`}
                          className="w-64 shrink-0 overflow-hidden rounded-3xl border border-border/70 bg-card shadow-sm sm:w-72"
                        >
                          <img
                            src={scenario.image}
                            alt={copy === 0 ? scenario.alt : ""}
                            loading="lazy"
                            decoding="async"
                            draggable={false}
                            className="pointer-events-none aspect-[5/4] w-full select-none object-cover"
                          />
                          <h3 className="flex h-14 items-center px-5 py-2 text-base font-extrabold leading-tight">
                            {scenario.name}
                          </h3>
                        </article>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="relative">
              <div
                className="absolute -inset-3 -z-10 -rotate-2 rounded-[2rem] bg-secondary/60"
                aria-hidden="true"
              />
              <div className="overflow-hidden rounded-[2rem] border-4 border-card bg-card p-2 shadow-xl ring-4 ring-sky/50 sm:rounded-[2.25rem] sm:p-3">
                <img
                  src={familyPlayImage}
                  alt="Família brincando junta com cenários tridimensionais de papel montados em casa"
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full rounded-[1.4rem] border border-primary/15 object-contain sm:rounded-[1.6rem]"
                />
              </div>
            </div>
            <div className="min-w-0">
              <span className="inline-flex rounded-full bg-secondary/60 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-primary">
                UMA AVENTURA PARA CRIAR JUNTOS
              </span>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
                Muito mais do que papel: um mundo inteiro para imaginar!
              </h2>
              <p className="mt-4 text-xl font-bold text-primary">
                Imprimam, montem e deixem a imaginação ganhar vida!
              </p>
              <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                Transformem folhas de papel em cenários 3D para montar em família, inventar
                histórias e viver novas aventuras a cada brincadeira.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "✂️",
                title: "Montem juntos",
                text: "Recortem, dobrem e montem os cenários seguindo as orientações. Uma atividade criativa para compartilhar momentos longe das telas.",
                color: "bg-secondary/60",
              },
              {
                icon: "🦕",
                title: "Inventem novas aventuras",
                text: "Um dinossauro pode visitar um castelo. Um bichinho pode se perder na floresta. Cada cenário abre espaço para uma história diferente!",
                color: "bg-sky/35",
              },
              {
                icon: "💚",
                title: "Brinquem do jeito de vocês",
                text: "Não existe uma única maneira de brincar. As crianças imaginam os personagens, criam as histórias e decidem o rumo de cada aventura.",
                color: "bg-accent/40",
              },
            ].map(({ icon, title, text, color }) => (
              <article
                key={title}
                className="rounded-3xl border border-border/70 bg-card p-6 shadow-sm"
              >
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl text-xl ${color}`}
                  aria-hidden="true"
                >
                  {icon}
                </span>
                <h3 className="mt-4 text-xl font-extrabold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl rounded-3xl bg-accent/30 px-4 py-4 text-center text-base font-extrabold leading-relaxed text-foreground sm:px-6 sm:py-5 sm:text-xl">
            O papel vira cenário. O cenário vira aventura. E a aventura vira memória em família.
          </p>
        </div>
      </section>

      <section className="bg-secondary/35 px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Do papel à aventura em poucos passos
            </h2>
            <p className="mt-3 text-muted-foreground">
              Uma experiência criativa que começa com a impressão e continua na imaginação.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "1",
                "Receba os arquivos",
                "Acesse os materiais digitais conforme as condições informadas na compra.",
              ],
              [
                "2",
                "Prepare e monte",
                "Imprima os modelos e prepare os materiais. O adulto deve cuidar dos cortes e acompanhar a montagem.",
              ],
              [
                "3",
                "Entrem na brincadeira",
                "Com o cenário pronto, inventem histórias, criem desafios e explorem juntos.",
              ],
            ].map(([number, title, text]) => (
              <article key={number} className="rounded-3xl bg-card p-6 shadow-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-extrabold text-primary-foreground">
                  {number}
                </span>
                <h3 className="mt-4 text-xl font-extrabold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-primary font-extrabold text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:bg-primary/90"
            >
              <a href="#oferta">Quero começar nossa aventura</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-secondary/25 px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="inline-flex rounded-full bg-card px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-primary shadow-sm">
              É MAIS SIMPLES DO QUE PARECE
            </span>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Do papel à brincadeira em 4 passos <span aria-hidden="true">✂️</span>
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Imprima os modelos, acompanhe as orientações e transforme as folhas em cenários para
              brincar.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {assemblySteps.map(
              ({ number, title, description, image, imageAlt, icon: Icon, color }) => (
                <article
                  key={number}
                  className="overflow-hidden rounded-2xl border border-border/70 bg-card p-3 shadow-sm sm:rounded-3xl sm:p-5"
                >
                  <div
                    className={`relative mb-3 aspect-[16/9] w-full overflow-hidden rounded-xl sm:mb-4 sm:aspect-[1.8/1] sm:rounded-2xl ${color}`}
                  >
                    <img
                      src={image}
                      alt={imageAlt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-extrabold uppercase tracking-widest text-primary sm:mt-5">
                      Passo {number}
                    </p>
                    <h3 className="mt-1 text-lg font-extrabold sm:text-xl">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground sm:mt-2">
                      {description}
                    </p>
                  </div>
                </article>
              ),
            )}
          </div>

          <p className="mx-auto mt-5 max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
            As orientações podem variar entre os modelos. Siga as instruções disponíveis nas folhas
            impressas; a montagem deve ser acompanhada por um adulto.
          </p>
          <p className="mx-auto mt-6 max-w-3xl rounded-3xl bg-accent/30 px-4 py-3.5 text-center text-base font-extrabold leading-relaxed sm:px-5 sm:py-4 sm:text-xl">
            Pronto! Agora é só deixar a imaginação criar a próxima aventura.{" "}
            <span aria-hidden="true">💚</span>
          </p>
        </div>
      </section>

      <section className="bg-secondary/50 px-4 py-10 sm:py-14">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-6 max-w-2xl text-center sm:mb-8">
            <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl">
              Uma brincadeira que começa antes mesmo da primeira história
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {benefitsCards.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-2xl border border-border/60 bg-card p-3 shadow-sm sm:rounded-3xl sm:p-5"
              >
                <Icon className="h-5 w-5 text-primary sm:h-6 sm:w-6" aria-hidden="true" />
                <h3 className="mt-2 text-sm font-extrabold leading-snug sm:mt-3 sm:text-base">
                  {title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:mt-2 sm:text-sm">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              O Pequenos Mundos é para famílias que…
            </h2>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              "Querem ter mais ideias de atividades para fazer com crianças pequenas.",
              "Gostam de criar, construir e imaginar histórias em conjunto.",
              "Procuram uma brincadeira que possa começar em casa.",
              "Querem participar de momentos criativos com os filhos.",
              "Preferem ter uma atividade preparada em vez de planejar tudo do zero.",
              "Gostam de atividades manuais e de acompanhar a construção de algo.",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border bg-card p-4 font-semibold"
              >
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            Você não precisa ser artista nem ter experiência com artesanato. Prepare os materiais
            adequados e participe da aventura no ritmo da criança.
          </p>
          <p className="mt-3 flex items-start gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" />
            Use sempre com a supervisão de um adulto. O adulto deve realizar os cortes e manter
            tesouras e peças pequenas fora do alcance das crianças quando necessário.
          </p>
        </div>
      </section>

      <section className="bg-sky/35 px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Imaginem as histórias que podem nascer de cada mundo…
            </h2>
            <p className="mt-3 text-muted-foreground">
              Cada cenário é um convite para explorar ideias e inventar brincadeiras em família.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {playIdeas.map(([title, text]) => (
              <article key={title} className="rounded-3xl bg-card p-6 shadow-sm">
                <h3 className="text-lg font-extrabold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
          <p className="mt-5 text-center text-xs text-muted-foreground">
            São ideias de brincadeira; não representam materiais extras incluídos no kit.
          </p>
        </div>
      </section>

      <section className="bg-secondary/50 px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="mb-3 inline-block rounded-full bg-card px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-primary shadow-xs">
              E TEM MAIS!
            </span>
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              5 Super Bônus Inclusos no Kit Max
            </h2>
            <p className="mt-4 text-muted-foreground">
              Materiais complementares desenvolvidos para enriquecer cada história e ampliar as
              possibilidades de brincar em família.
            </p>
            <p className="mt-3 text-sm font-bold text-primary">
              ⭐ Todos os 5 bônus (avaliados em R$ 53,50) vêm 100% gratuitos ao escolher o Kit Max!
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {bonusItems.map((bonus, index) => (
              <article
                key={bonus.title}
                className={`overflow-hidden rounded-3xl border border-border/70 bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md ${index < 3 ? "lg:col-span-2" : `lg:col-span-2 ${index === 3 ? "lg:col-start-2" : "lg:col-start-4"}`}`}
              >
                <img
                  src={bonus.image}
                  alt={bonus.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="p-5 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-secondary-foreground">
                      BÔNUS {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="rounded-full bg-success/20 px-2.5 py-1 text-[11px] font-bold text-success">
                      Grátis no Kit Max
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-extrabold">{bonus.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {bonus.description}
                  </p>
                  {bonus.examples && (
                    <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                      {bonus.examples.map((example) => (
                        <li key={example} className="flex items-start gap-2">
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                            aria-hidden="true"
                          />
                          {example}
                        </li>
                      ))}
                    </ul>
                  )}
                  {bonus.highlight && (
                    <p className="mt-3 rounded-xl bg-muted p-3 text-sm font-bold">
                      {bonus.highlight}
                    </p>
                  )}
                  <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3 text-xs">
                    <span className="text-muted-foreground">Valor individual:</span>
                    <div className="flex items-center gap-1.5 font-bold">
                      <span className="text-muted-foreground line-through">{bonus.value}</span>
                      <span className="text-success font-extrabold">GRÁTIS</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button
              asChild
              size="lg"
              className="w-full max-w-sm rounded-full bg-primary font-extrabold text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:bg-primary/90 sm:w-auto"
            >
              <a href="#oferta" onClick={scrollToOffer}>
                Quero o Kit Max com os 5 Bônus Inclusos
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section
        id="oferta"
        className="scroll-mt-4 overflow-hidden bg-background px-4 py-12 sm:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <span className="inline-flex rounded-full border border-primary/20 bg-card px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-primary shadow-xs">
              ENCONTRE A AVENTURA IDEAL
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Escolha seu Pequeno Mundo
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Garanta acesso imediato aos modelos digitais em alta resolução prontos para imprimir e
              comece a transformar papel em memórias em família.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl items-stretch gap-6 lg:grid-cols-2">
            <SmallWorldsOfferCard
              packageName="Kit Essencial"
              image={essentialOfferCardImage}
              imageAlt="Imagem do pacote Pequenos Mundos Essencial com cenários de papel para montar"
              price="R$ 17,90"
              originalPrice="R$ 37,00"
              onDetails={() => setSelectedOffer("Pequenos Mundos — Essencial")}
            />
            <SmallWorldsOfferCard
              packageName="Kit Max"
              isPopular
              badge="MAIS ESCOLHIDO PELAS FAMÍLIAS"
              image={completeKitImage}
              imageAlt="Kit Pequenos Mundos Max com castelo, cenários e materiais de papel para criar aventuras"
              price="R$ 27,90"
              originalPrice="R$ 81,40"
              bonusesTotalValue="R$ 53,50"
              bonuses={bonusItems.map((b) => ({
                title: b.title,
                description: b.description,
                value: b.value,
                image: b.image,
                alt: b.alt,
              }))}
              onDetails={() => setSelectedOffer("Pequenos Mundos — Max")}
            />
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
            Acesso instantâneo aos arquivos em PDF em alta resolução prontos para impressão.
            Pagamento único com 7 dias de garantia incondicional.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Perguntas frequentes</h2>
          </div>
          <div className="space-y-3">
            {faqs.map(([question, answer]) => (
              <details
                key={question}
                className="group rounded-2xl border border-border/70 bg-card p-4 sm:p-5 transition-all"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-3 text-left font-bold text-foreground list-none [&::-webkit-details-marker]:hidden">
                  <span>{question}</span>
                  <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground border-t border-border/40 pt-2.5">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 px-4 py-16 text-center sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            O próximo pequeno mundo pode começar na sua casa.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Escolham um mundo, montem o cenário e descubram juntos as histórias que podem nascer de
            uma folha de papel.
          </p>
          <div className="mt-7">
            <ActionButton />
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Produto digital · Download imediato após a confirmação.
          </p>
        </div>
      </section>

      <Dialog
        open={selectedOffer !== null}
        onOpenChange={(open) => !open && setSelectedOffer(null)}
      >
        <DialogContent className="w-[calc(100%-2rem)] max-w-md max-h-[90vh] overflow-y-auto rounded-3xl p-5 sm:p-6 mx-auto">
          <DialogHeader>
            <DialogTitle className="font-display text-xl sm:text-2xl font-extrabold text-foreground">
              {selectedOffer}
            </DialogTitle>
            <DialogDescription className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
              {selectedOffer === "Pequenos Mundos — Max"
                ? "Você selecionou o pacote completo com todos os 10 cenários 3D de papel e os 5 super bônus inclusos gratuitamente (R$ 53,50 em valor de bônus)."
                : "Você selecionou o Kit Essencial para iniciar a montagem dos primeiros cenários de papel em família."}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4 rounded-2xl border border-primary/25 bg-secondary/20 p-3.5 sm:p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs sm:text-sm font-bold text-foreground">
                Investimento único:
              </span>
              <span className="font-display text-2xl font-extrabold text-primary">
                {selectedOffer === "Pequenos Mundos — Max" ? "R$ 27,90" : "R$ 17,90"}
              </span>
            </div>
            {selectedOffer === "Pequenos Mundos — Max" ? (
              <p className="mt-2 text-xs font-bold text-success">
                ⭐ Economia superior a 65% + 5 Bônus exclusivos liberados imediatamente!
              </p>
            ) : (
              <div className="mt-3 rounded-xl border border-amber-600/30 bg-amber-500/[0.08] p-2.5 text-left text-xs">
                <p className="font-extrabold text-foreground">
                  ⚠️ Aviso importante sobre o pacote básico:
                </p>
                <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
                  Você está levando apenas 3 cenários. Os outros <strong>7 cenários</strong> e os{" "}
                  <strong>5 super bônus avaliados em R$ 53,50</strong> ficam de fora.
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedOffer("Pequenos Mundos — Max")}
                  className="mt-2 flex w-full items-center justify-center gap-1 rounded-lg border border-primary/30 bg-primary/10 py-1.5 text-[11px] font-extrabold text-primary transition-colors hover:bg-primary/20 cursor-pointer"
                >
                  <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                  Quero mudar para o Kit Max por +R$ 10,00
                </button>
              </div>
            )}
          </div>

          <div className="mt-5 space-y-2">
            <Button
              className="w-full rounded-2xl bg-primary text-base font-extrabold text-primary-foreground shadow-md hover:bg-primary/90"
              size="lg"
              onClick={() => setSelectedOffer(null)}
            >
              {selectedOffer === "Pequenos Mundos — Max"
                ? "Confirmar e Garantir o Kit Max"
                : "Continuar apenas com o Kit Essencial"}
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              Garantia de 7 dias · Acesso imediato aos arquivos para download
            </p>
          </div>
        </DialogContent>
      </Dialog>

      <footer className="bg-ink px-4 py-8 pb-12 sm:pb-8 text-center text-sm text-ink-foreground">
        <p className="font-bold">Pequenos Mundos — Kit de Aventuras em Família</p>
        <p className="mx-auto mt-2 max-w-xl text-ink-foreground/70">
          Atividades criativas para imprimir, montar e transformar momentos em família em novas
          histórias.
        </p>
        <p className="mt-3 text-xs text-ink-foreground/60">
          Configure e confira os links reais de termos, privacidade, suporte e reembolso antes da
          publicação.
        </p>
      </footer>
    </main>
  );
}
