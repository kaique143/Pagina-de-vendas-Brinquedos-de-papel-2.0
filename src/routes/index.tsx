import { createFileRoute } from "@tanstack/react-router";
import SmallWorldsLanding from "@/components/SmallWorldsLanding";
import { useEffect, useState, type ReactNode } from "react";
import { Check, ChevronDown, Clock, Gift, Lock, ShieldCheck, Star, X, Zap } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import {
  BENEFITS,
  BONUSES,
  CHECKOUT,
  CORE_ITEMS,
  FAQ,
  IDEAL_FOR,
  IMAGES,
  MODELS,
  TESTIMONIALS,
} from "@/lib/offer-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pequenos Mundos — Kit de Aventuras em Família" },
      {
        name: "description",
        content:
          "Kit digital de cenários de papel 3D para imprimir, montar e explorar em brincadeiras imaginativas em família.",
      },
      { property: "og:title", content: "Pequenos Mundos — Kit de Aventuras em Família" },
      {
        property: "og:description",
        content:
          "Transforme papel em cenários cheios de imaginação e invente novas histórias em família.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: IMAGES.hero },
      { name: "twitter:image", content: IMAGES.hero },
    ],
  }),
  component: SmallWorldsLanding,
});

const BONUS_TOTAL = BONUSES.reduce((s, b) => s + b.price, 0);

function todayBR() {
  return new Date().toLocaleDateString("pt-BR");
}

function Cta({
  children,
  href,
  onClick,
  className,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}) {
  const cls = cn(
    "inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-success px-6 py-5 text-center text-base font-extrabold uppercase tracking-wide text-success-foreground shadow-[var(--shadow-cta)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40 sm:text-lg",
    className,
  );
  return href ? (
    <a href={href} className={cls}>
      {children}
    </a>
  ) : (
    <button type="button" onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("px-4 py-16 sm:py-20", className)}>
      <div className="mx-auto max-w-5xl">{children}</div>
    </section>
  );
}

function Heading({ kicker, children }: { kicker?: string; children: ReactNode }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      {kicker && (
        <span className="mb-3 inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-secondary-foreground">
          {kicker}
        </span>
      )}
      <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl">{children}</h2>
    </div>
  );
}

function Index() {
  const [date, setDate] = useState("");
  const [upsell, setUpsell] = useState(false);
  useEffect(() => setDate(todayBR()), []);
  const toOffer = () => document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <div className="sticky top-0 z-40 bg-ink px-4 py-2.5 text-center text-xs font-bold text-ink-foreground sm:text-sm">
        <Clock className="mr-1.5 inline" size={14} /> Oferta válida até{" "}
        <span className="text-accent">{date || "hoje"}</span> — preço promocional por tempo limitado
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden px-4 pb-16 pt-10 sm:pt-16">
        <div className="absolute inset-x-0 top-0 -z-0 h-2/3 bg-secondary/60 [clip-path:ellipse(90%_100%_at_50%_0%)]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-primary shadow-sm">
              <Zap size={14} /> Acesso imediato · Pronto para imprimir
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
              +100 Moldes de Caixas para <span className="text-primary">Canecas</span> com aparência
              premium
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground lg:mx-0">
              Modelos profissionais prontos para{" "}
              <strong className="text-foreground">
                imprimir, montar e começar a vender hoje mesmo
              </strong>{" "}
              — mesmo sem nenhuma experiência.
            </p>
            <ul className="mx-auto mt-6 grid max-w-md gap-2 text-left sm:grid-cols-2 lg:mx-0">
              {[
                "Monte em 10–15 minutos",
                "Só papel, cola e tesoura",
                "Videoaula passo a passo",
                "Garantia de 7 dias",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm font-bold">
                  <Check size={18} className="text-success" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-8 max-w-md lg:max-w-sm">
              <Cta onClick={toOffer} className="animate-pulse-cta">
                Quero começar hoje
              </Cta>
            </div>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground lg:justify-start">
              <Lock size={13} /> Compra 100% segura · A partir de R$10
            </p>
          </div>
          <img
            src={IMAGES.hero}
            alt="Moldes de caixas para canecas"
            width={900}
            height={900}
            className="mx-auto w-full max-w-lg drop-shadow-2xl"
          />
        </div>
      </section>

      {/* MODELOS */}
      <section className="overflow-hidden bg-ink py-14 text-ink-foreground">
        <h2 className="mb-8 px-4 text-center font-display text-2xl font-extrabold sm:text-3xl">
          Veja os modelos que você pode montar e vender
        </h2>
        <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
          {[...MODELS, ...MODELS].map((src, i) => (
            <img
              key={`${src}-${i}`}
              src={src}
              alt="Modelo de caixinha para caneca"
              loading="lazy"
              className="h-64 w-52 shrink-0 rounded-2xl object-cover sm:h-80 sm:w-64"
            />
          ))}
        </div>
        <p className="mt-8 text-center text-sm font-bold uppercase tracking-widest text-accent">
          ⚡ Acesso imediato após a compra
        </p>
      </section>

      {/* O QUE RECEBE */}
      <Section>
        <Heading kicker="Conteúdo principal">O que você vai receber</Heading>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <img
            src={IMAGES.receive}
            alt="O que você vai receber"
            loading="lazy"
            className="mx-auto w-full max-w-md"
          />
          <div className="space-y-4">
            <div className="rounded-3xl border-2 border-primary/20 bg-card p-6">
              <p className="text-xs font-extrabold text-primary">ITEM 01</p>
              <h3 className="font-display text-xl font-extrabold">
                +100 Moldes de Caixas para Canecas
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Organizados e prontos para imprimir, montar e vender os produtos mais desejados.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Infantil",
                  "Masculino e Feminino",
                  "Aniversários",
                  "Frases",
                  "Motivacionais",
                  "Mãe e Pai",
                  "E muito mais",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground"
                  >
                    ✔ {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border bg-card p-6">
              <p className="text-xs font-extrabold text-primary">ITEM 02</p>
              <h3 className="font-display text-xl font-extrabold">+60 Artes para Canecas</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Artes prontas de diversos temas para usar nas canecas.
              </p>
            </div>
            <div className="rounded-3xl border bg-card p-6">
              <p className="text-xs font-extrabold text-primary">ITEM 03</p>
              <h3 className="font-display text-xl font-extrabold">Videoaula Passo a Passo</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Assista, siga o passo a passo e saia com o produto pronto para vender.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* BENEFÍCIOS */}
      <Section className="bg-muted">
        <Heading kicker="Por que funciona">Por que escolher esses moldes?</Heading>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="rounded-3xl bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <span className="text-3xl" aria-hidden>
                {b.icon}
              </span>
              <h3 className="mt-3 text-lg font-extrabold">{b.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{b.text}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-md">
          <Cta onClick={toOffer}>Quero os moldes agora</Cta>
        </div>
      </Section>

      {/* IDEAL PARA */}
      <Section>
        <Heading kicker="Isso é pra você">Ideal para você que…</Heading>
        <div className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
          {IDEAL_FOR.map((t) => (
            <div
              key={t}
              className="flex items-start gap-3 rounded-2xl border bg-card p-4 font-semibold"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success text-success-foreground">
                <Check size={14} />
              </span>
              {t}
            </div>
          ))}
        </div>
      </Section>

      {/* BÔNUS */}
      <Section className="bg-secondary/50">
        <Heading kicker={`7 bônus exclusivos · R$${BONUS_TOTAL} em valor`}>
          E não para por aí… você também recebe
        </Heading>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BONUSES.map((b, i) => (
            <article
              key={b.title}
              className="flex flex-col overflow-hidden rounded-3xl bg-card shadow-sm"
            >
              <div className="relative bg-muted p-4">
                <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-extrabold text-primary-foreground">
                  BÔNUS {i + 1}
                </span>
                <img
                  src={b.img}
                  alt={b.title}
                  loading="lazy"
                  className="mx-auto h-48 object-contain"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-extrabold">{b.title}</h3>
                <p className="mt-1 flex-1 text-sm text-muted-foreground">{b.text}</p>
                <p className="mt-4 flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground line-through">De R${b.price}</span>
                  <span className="rounded-md bg-success px-2 py-0.5 font-extrabold text-success-foreground">
                    GRÁTIS HOJE
                  </span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* PLANOS */}
      <Section id="planos">
        <Heading kicker="Oferta de hoje">Escolha o melhor plano para você</Heading>
        <div className="mx-auto grid max-w-4xl items-start gap-6 md:grid-cols-2">
          <div className="order-2 rounded-3xl border bg-card p-6 md:order-1">
            <h3 className="text-center font-display text-2xl font-extrabold">Plano Básico</h3>
            <img
              src={IMAGES.receive}
              alt="Plano Básico"
              loading="lazy"
              className="mx-auto my-4 h-40 object-contain"
            />
            <ul className="space-y-2 text-sm">
              {CORE_ITEMS.map((t) => (
                <li key={t} className="flex gap-2">
                  <Check size={18} className="shrink-0 text-success" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-4 rounded-xl bg-destructive/10 p-3 text-center text-xs font-bold text-destructive">
              ⚠️ Você fica sem os 7 bônus
            </p>
            <p className="mt-5 text-center">
              <span className="text-sm text-muted-foreground line-through">R$47,00</span>
              <span className="block font-display text-4xl font-extrabold">R$10</span>
            </p>
            <button
              type="button"
              onClick={() => setUpsell(true)}
              className="mt-4 w-full rounded-2xl border-2 border-foreground/20 py-4 font-extrabold uppercase transition hover:bg-muted"
            >
              Quero o básico
            </button>
          </div>

          <div className="relative order-1 rounded-3xl border-4 border-primary bg-card p-6 shadow-2xl md:order-2 md:-mt-4">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-5 py-1.5 text-xs font-extrabold uppercase text-primary-foreground">
              ⭐ Mais escolhido
            </span>
            <h3 className="mt-2 text-center font-display text-2xl font-extrabold">
              Plano Completo
            </h3>
            <img
              src={IMAGES.completo}
              alt="Plano Completo"
              loading="lazy"
              className="mx-auto my-4 h-48 object-contain"
            />
            <ul className="space-y-2 text-sm">
              {CORE_ITEMS.map((t) => (
                <li key={t} className="flex gap-2">
                  <Check size={18} className="shrink-0 text-success" />
                  {t}
                </li>
              ))}
              {BONUSES.map((b) => (
                <li key={b.title} className="flex gap-2">
                  <Gift size={18} className="shrink-0 text-primary" />
                  <span>
                    <strong>BÔNUS:</strong> {b.title}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-center">
              <span className="text-sm text-muted-foreground line-through">R$197,00</span>
              <span className="block font-display text-5xl font-extrabold text-primary">R$27</span>
              <span className="text-xs text-muted-foreground">
                pagamento único · acesso vitalício
              </span>
            </p>
            <Cta href={CHECKOUT.completo} className="mt-4 animate-pulse-cta">
              Quero o completo
            </Cta>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
              <ShieldCheck size={14} /> Acesso imediato e compra segura
            </p>
          </div>
        </div>
      </Section>

      {/* DEPOIMENTOS */}
      <Section className="bg-muted">
        <Heading kicker="Quem já começou">O que as clientes estão dizendo</Heading>
        <div className="grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="rounded-3xl bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <img
                  src={t.img}
                  alt={t.name}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <figcaption className="font-extrabold">{t.name}</figcaption>
                  <p className="text-xs text-muted-foreground">{t.meta}</p>
                </div>
              </div>
              <div className="mt-3 flex text-accent">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <blockquote className="mt-3 text-sm leading-relaxed text-muted-foreground">
                “{t.text}”
              </blockquote>
            </figure>
          ))}
        </div>
      </Section>

      {/* GARANTIA */}
      <Section>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl border-2 border-dashed border-success/50 bg-card p-8 text-center md:flex-row md:text-left">
          <img
            src={IMAGES.seal}
            alt="Selo de garantia de 7 dias"
            loading="lazy"
            className="h-36 w-36 shrink-0 object-contain"
          />
          <div>
            <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
              Garantia total de 7 dias
            </h2>
            <p className="mt-2 text-muted-foreground">
              Se por qualquer motivo sentir que o material não foi útil, é só avisar e devolvemos
              100% do seu dinheiro — sem perguntas, sem burocracia.{" "}
              <strong className="text-foreground">O risco é todo nosso.</strong>
            </p>
            <div className="mt-5 md:max-w-xs">
              <Cta onClick={toOffer}>Comprar sem risco</Cta>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-muted">
        <Heading kicker="Tire suas dúvidas">Perguntas frequentes</Heading>
        <div className="mx-auto max-w-3xl space-y-3">
          {FAQ.map(([q, a]) => (
            <details key={q} className="group rounded-2xl bg-card p-5 shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">
                {q}
                <ChevronDown
                  size={20}
                  className="shrink-0 text-primary transition group-open:rotate-180"
                />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-md">
          <Cta onClick={toOffer}>Quero garantir meu acesso</Cta>
        </div>
      </Section>

      <footer className="bg-ink px-4 py-8 text-center text-xs text-ink-foreground/70">
        Produto digital · Acesso imediato por e-mail após a confirmação do pagamento
      </footer>

      <Dialog open={upsell} onOpenChange={setUpsell}>
        <DialogContent className="max-w-md rounded-3xl p-0 [&>button]:hidden">
          <div className="rounded-t-3xl bg-primary p-5 text-center text-primary-foreground">
            <DialogTitle className="font-display text-2xl font-extrabold">
              Espere! Oferta especial 🔥
            </DialogTitle>
          </div>
          <div className="p-6 text-center">
            <DialogDescription className="text-base text-foreground">
              Leve o <strong>Plano Completo com os 7 bônus</strong> por apenas mais R$9:
            </DialogDescription>
            <p className="mt-3">
              <span className="text-muted-foreground line-through">R$27</span>{" "}
              <span className="font-display text-5xl font-extrabold text-primary">R$19</span>
            </p>
            <Cta href={CHECKOUT.completoDesconto} className="mt-5">
              Quero o completo por R$19
            </Cta>
            <a
              href={CHECKOUT.basico}
              className="mt-4 inline-flex items-center gap-1 text-sm text-muted-foreground underline"
            >
              <X size={14} />
              Continuar com o Plano Básico
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
