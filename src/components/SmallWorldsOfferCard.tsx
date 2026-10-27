import { type ComponentProps } from "react";
import {
  AlertCircle,
  ArrowRight,
  Check,
  FileText,
  Gift,
  Layers,
  Printer,
  Scissors,
  ShieldCheck,
  Sparkles,
  Star,
  X,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface BonusItem {
  title: string;
  description: string;
  value: string;
  image?: string;
  alt?: string;
}

export interface FeatureItem {
  text: string;
  subtitle?: string;
  included: boolean;
  highlight?: boolean;
  iconType?: "scenarios" | "guide" | "print" | "access" | "bonus" | "missing";
}

export interface SmallWorldsOfferCardProps extends ComponentProps<"article"> {
  packageName: "Kit Essencial" | "Kit Max";
  badge?: string;
  isPopular?: boolean;
  image: string;
  imageAlt: string;
  price: string;
  originalPrice?: string;
  tagline?: string;
  description?: string;
  features?: FeatureItem[];
  bonuses?: BonusItem[];
  bonusesTotalValue?: string;
  onDetails: () => void;
  ctaText?: string;
}

const DEFAULT_ESSENTIAL_FEATURES: FeatureItem[] = [
  {
    iconType: "print",
    text: "3 Cenários 3D (Castelo, Fazenda e Floresta)",
    subtitle: "Modelos em PDF de alta resolução para imprimir em folha A4 comum",
    included: true,
  },
  {
    iconType: "guide",
    text: "Guia Ilustrado de Montagem Passo a Passo",
    subtitle: "Instruções visuais fáceis para os 3 modelos básicos",
    included: true,
  },
  {
    iconType: "access",
    text: "Download Imediato e Acesso Vitalício",
    subtitle: "Receba no seu e-mail e imprima quantas cópias quiser em casa",
    included: true,
  },
  {
    iconType: "missing",
    text: "7 Cenários de Aventuras Ficam de Fora",
    subtitle: "Sem Dinossauros, Espaço, Piratas, Cidade, Acampamento, Mar e Bichinhos",
    included: false,
  },
  {
    iconType: "missing",
    text: "Sem os 5 Super Bônus (R$ 53,50 de valor)",
    subtitle: "Sem cartas de histórias, missões, passaporte infantil e acessórios",
    included: false,
  },
];

const DEFAULT_MAX_FEATURES: FeatureItem[] = [
  {
    iconType: "scenarios",
    text: "Todos os 10 Cenários 3D de Papel",
    subtitle: "Castelo, Fazenda, Dinossauros, Espaço, Piratas, Floresta e muito mais",
    included: true,
    highlight: true,
  },
  {
    iconType: "guide",
    text: "Guia Completo de Montagem Ilustrado",
    subtitle: "Passo a passo detalhado para a montagem de cada um dos 10 modelos",
    included: true,
  },
  {
    iconType: "access",
    text: "Acesso Vitalício & Impressões Ilimitadas",
    subtitle: "Imprima novas cópias sempre que quiser para novas histórias",
    included: true,
  },
  {
    iconType: "bonus",
    text: "TODOS OS 5 SUPER BÔNUS INCLUSOS (R$ 53,50)",
    subtitle: "Missões, histórias, passaporte e acessórios liberados gratuitamente",
    included: true,
    highlight: true,
  },
];

function FeatureIcon({
  iconType,
  included,
  highlight,
}: {
  iconType?: FeatureItem["iconType"];
  included: boolean;
  highlight?: boolean;
}) {
  if (!included) {
    return (
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-destructive/15 text-destructive">
        <X className="h-3 w-3 stroke-[3]" aria-hidden="true" />
      </span>
    );
  }

  if (highlight) {
    return (
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-2xs">
        <Sparkles className="h-3 w-3 text-accent" aria-hidden="true" />
      </span>
    );
  }

  switch (iconType) {
    case "guide":
      return (
        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-secondary/50 text-primary">
          <Scissors className="h-3 w-3" aria-hidden="true" />
        </span>
      );
    case "print":
    case "scenarios":
      return (
        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-secondary/50 text-primary">
          <Layers className="h-3 w-3" aria-hidden="true" />
        </span>
      );
    case "access":
      return (
        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-secondary/50 text-primary">
          <Zap className="h-3 w-3" aria-hidden="true" />
        </span>
      );
    default:
      return (
        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-success/20 text-success">
          <Check className="h-3 w-3 stroke-[3]" aria-hidden="true" />
        </span>
      );
  }
}

export function SmallWorldsOfferCard({
  packageName,
  badge,
  isPopular,
  image,
  imageAlt,
  price,
  originalPrice,
  tagline,
  description,
  features,
  bonuses = [],
  bonusesTotalValue = "R$ 53,50",
  onDetails,
  ctaText,
  className,
  ...props
}: SmallWorldsOfferCardProps) {
  const isMax = packageName === "Kit Max";
  const displayBadge = badge ?? (isMax ? "MAIS ESCOLHIDO PELAS FAMÍLIAS" : undefined);
  const activeFeatures = features ?? (isMax ? DEFAULT_MAX_FEATURES : DEFAULT_ESSENTIAL_FEATURES);
  const activeOriginalPrice = originalPrice ?? (isMax ? "R$ 81,40" : "R$ 37,00");
  const activeTagline =
    tagline ??
    (isMax
      ? "Todos os 10 mundos 3D + 5 super bônus inclusos"
      : "Cenários iniciais para começar a brincadeira");
  const buttonLabel =
    ctaText ??
    (isMax ? "Garantir o Kit Max com 5 Bônus" : "Quero apenas o Kit Essencial (3 cenários)");

  return (
    <article
      {...props}
      className={cn(
        "group/offer relative flex flex-col justify-between overflow-hidden rounded-3xl border transition-all duration-300",
        isMax
          ? "border-2 border-primary/90 bg-card shadow-xl shadow-primary/15 ring-2 ring-primary/20 lg:-translate-y-1.5"
          : "border-border/90 bg-card shadow-xs hover:border-primary/40 hover:shadow-md",
        className,
      )}
    >
      {/* Highlight Ribbon for Kit Max */}
      {isMax && (
        <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-b-xl bg-primary px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-primary-foreground shadow-md">
            <Sparkles
              className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-accent shrink-0"
              aria-hidden="true"
            />
            {displayBadge}
            <Star
              className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-accent text-accent shrink-0"
              aria-hidden="true"
            />
          </span>
        </div>
      )}

      {/* Top Banner Accent */}
      <div
        className={cn(
          "h-2 w-full",
          isMax ? "bg-gradient-to-r from-primary via-accent to-primary" : "bg-sky",
        )}
      />

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        {/* Mockup Image Container */}
        <div
          className={cn(
            "relative mb-3.5 overflow-hidden rounded-2xl border transition-all duration-200 group-hover/offer:shadow-xs",
            isMax ? "border-primary/30" : "border-border/70",
          )}
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted/20 sm:max-h-48">
            <img
              src={image}
              alt={imageAlt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-300 group-hover/offer:scale-[1.02]"
            />
            {/* Scrim Overlay with Information Tags */}
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-3 py-2 text-white">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold tracking-wide whitespace-nowrap drop-shadow-xs">
                <FileText className="h-3 w-3 shrink-0 text-secondary" aria-hidden="true" /> Produto
                Digital
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-accent whitespace-nowrap drop-shadow-xs">
                <Zap className="h-3 w-3 shrink-0" aria-hidden="true" /> Download imediato
              </span>
            </div>
          </div>
        </div>

        {/* Header Title & Tagline */}
        <div>
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              {packageName}
            </h3>
            {isMax ? (
              <span className="rounded-full bg-accent/35 px-3 py-1 text-xs font-extrabold text-foreground border border-accent/50 shadow-2xs">
                Completo + 5 Bônus
              </span>
            ) : (
              <span className="rounded-full bg-secondary/50 px-2.5 py-0.5 text-xs font-bold text-primary">
                Kit Inicial
              </span>
            )}
          </div>
          <p className="mt-1 text-xs sm:text-sm font-semibold text-primary">{activeTagline}</p>
        </div>

        {/* Dynamic & High-Perceived-Value Pricing Box */}
        <div
          className={cn(
            "mt-3.5 rounded-2xl border p-3.5 transition-colors",
            isMax
              ? "border-primary/40 bg-gradient-to-br from-primary/[0.09] via-secondary/20 to-primary/[0.04] shadow-xs"
              : "border-border/90 bg-gradient-to-br from-secondary/15 via-background to-secondary/10",
          )}
        >
          {/* Discount header inside box */}
          <div className="mb-2 flex items-center justify-between gap-2 border-b border-border/60 pb-2">
            <span className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
              {isMax ? "Super Combo Completo" : "Pacote Básico Inicial"}
            </span>
            <span
              className={cn(
                "rounded-full px-2 py-0.5 text-[10px] font-extrabold whitespace-nowrap border",
                isMax
                  ? "bg-emerald-600/15 text-emerald-800 dark:text-emerald-300 border-emerald-600/30"
                  : "bg-muted text-muted-foreground border-border font-bold",
              )}
            >
              {isMax ? "-66% OFF · Economize R$ 53,50" : "Apenas 3 Cenários"}
            </span>
          </div>

          {/* Pricing Row with clear strikethrough & large numbers */}
          <div className="flex items-baseline gap-2">
            <span className="text-xs sm:text-sm font-semibold text-muted-foreground line-through whitespace-nowrap">
              De {activeOriginalPrice}
            </span>
            <span className="text-xs font-bold text-primary">por apenas</span>
          </div>

          <div className="mt-1 flex flex-wrap items-baseline gap-2">
            <span className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-primary tabular-nums whitespace-nowrap">
              {price}
            </span>
            <span
              className={cn(
                "rounded-md px-2 py-0.5 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider whitespace-nowrap",
                isMax
                  ? "bg-primary/15 text-primary border border-primary/25"
                  : "bg-secondary/60 text-primary border border-secondary",
              )}
            >
              pagamento único
            </span>
          </div>

          {isMax ? (
            <div className="mt-2.5 flex items-center justify-between rounded-xl bg-accent/25 border border-accent/40 px-2.5 py-1.5 text-xs font-bold text-foreground">
              <span className="flex items-center gap-1.5">
                <Gift className="h-3.5 w-3.5 text-primary shrink-0" aria-hidden="true" />
                <span className="text-[11px] sm:text-xs">5 Super Bônus Inclusos:</span>
              </span>
              <span className="font-extrabold text-primary underline decoration-accent decoration-2 whitespace-nowrap text-[11px] sm:text-xs">
                +{bonusesTotalValue} GRÁTIS
              </span>
            </div>
          ) : (
            <p className="mt-2 flex items-center gap-1 text-[11px] text-muted-foreground">
              <Check className="h-3.5 w-3.5 text-success shrink-0" aria-hidden="true" />
              Acesso vitalício para imprimir quantas vezes quiser em casa
            </p>
          )}
        </div>

        {/* Rich Included Features List */}
        <div className="mt-4 border-t border-border/70 pt-3.5">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-primary">
              O QUE ESTÁ INCLUSO:
            </p>
            <span className="text-[10px] font-semibold text-muted-foreground">
              {isMax ? "Acesso completo" : "Acesso inicial"}
            </span>
          </div>

          <div className="mt-2.5 space-y-2">
            {activeFeatures.map((feat) => (
              <div
                key={feat.text}
                className={cn(
                  "flex items-start gap-2.5 rounded-xl p-2.5 transition-colors",
                  feat.included
                    ? feat.highlight
                      ? "bg-primary/[0.07] border border-primary/25 shadow-2xs"
                      : "bg-muted/40 border border-border/50"
                    : "opacity-75 bg-muted/20 border border-dashed border-border/60",
                )}
              >
                <FeatureIcon
                  iconType={feat.iconType}
                  included={feat.included}
                  highlight={feat.highlight}
                />
                <div className="min-w-0 flex-1">
                  <p
                    className={cn(
                      "text-xs sm:text-sm leading-snug",
                      feat.included
                        ? feat.highlight
                          ? "font-extrabold text-foreground"
                          : "font-semibold text-foreground"
                        : "text-muted-foreground font-medium",
                    )}
                  >
                    {feat.text}
                  </p>
                  {feat.subtitle && (
                    <p className="mt-0.5 text-[11px] leading-tight text-muted-foreground">
                      {feat.subtitle}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5 Bonuses Showcase for Kit Max - Visual, Polished & Compact */}
        {isMax && bonuses.length > 0 && (
          <div className="mt-4 rounded-2xl border-2 border-accent/50 bg-gradient-to-br from-accent/15 via-background to-secondary/25 p-3.5 shadow-xs">
            <div className="flex items-center justify-between border-b border-accent/30 pb-2.5">
              <div className="flex items-center gap-1.5">
                <Gift className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                <h4 className="text-xs font-extrabold uppercase tracking-wide text-primary">
                  5 BÔNUS EXCLUSIVOS INCLUSOS
                </h4>
              </div>
              <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-extrabold text-primary-foreground shadow-2xs whitespace-nowrap">
                {bonusesTotalValue} GRÁTIS
              </span>
            </div>

            <p className="mt-1.5 text-[11px] text-muted-foreground">
              Materiais complementares liberados imediatamente no Kit Max:
            </p>

            <div className="mt-2.5 space-y-1.5">
              {bonuses.map((bonus, idx) => (
                <div
                  key={bonus.title}
                  className="flex items-center justify-between gap-2 rounded-xl border border-border/80 bg-card/95 p-2 shadow-2xs transition-all hover:border-primary/40"
                >
                  <div className="flex items-center gap-2 min-w-0 flex-1">
                    {bonus.image ? (
                      <img
                        src={bonus.image}
                        alt=""
                        loading="lazy"
                        className="h-8 w-8 shrink-0 rounded-lg object-cover border border-border/70 shadow-2xs"
                      />
                    ) : (
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary/60 text-primary font-bold text-xs">
                        {idx + 1}
                      </span>
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[11px] sm:text-xs font-bold text-foreground">
                        <span className="text-primary mr-1">Bônus {idx + 1}:</span>
                        {bonus.title}
                      </p>
                      <p className="truncate text-[10px] text-muted-foreground">
                        {bonus.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <span className="text-[10px] text-muted-foreground line-through whitespace-nowrap">
                      {bonus.value}
                    </span>
                    <span className="rounded bg-success/20 px-1.5 py-0.5 text-[10px] font-extrabold text-success whitespace-nowrap">
                      GRÁTIS
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-2.5 flex items-center justify-between rounded-xl bg-primary/10 px-3 py-1.5 text-[11px] font-extrabold text-primary border border-primary/15">
              <span>Economia total nos 5 bônus:</span>
              <span className="text-xs font-extrabold text-primary">
                {bonusesTotalValue} → GRÁTIS
              </span>
            </div>
          </div>
        )}

        {/* Clear, objective breakdown of what is excluded in the base package */}
        {!isMax && (
          <div className="mt-4 rounded-2xl border border-amber-600/30 bg-amber-500/[0.06] p-3.5 shadow-2xs">
            <div className="flex items-center justify-between border-b border-amber-600/20 pb-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-foreground">
                <AlertCircle className="h-4 w-4 text-amber-600 shrink-0" aria-hidden="true" />O que
                fica de fora no Kit Essencial:
              </span>
              <span className="rounded-md bg-amber-600/15 px-1.5 py-0.5 text-[10px] font-extrabold text-amber-800 dark:text-amber-300">
                Atenção
              </span>
            </div>

            <div className="mt-2.5 space-y-2 text-[11px] leading-relaxed text-muted-foreground">
              <div className="flex items-start gap-2">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-destructive/15 text-destructive font-bold text-[10px]">
                  ✕
                </span>
                <p>
                  <strong className="text-foreground">7 Cenários 3D de Aventuras:</strong>{" "}
                  Dinossauros, Espaço Sideral, Ilha dos Piratas, Cidade, Acampamento, Fundo do Mar e
                  Vila dos Bichinhos não acompanham o pacote básico.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-destructive/15 text-destructive font-bold text-[10px]">
                  ✕
                </span>
                <p>
                  <strong className="text-foreground">Todos os 5 Super Bônus:</strong> Cartas de
                  Histórias, Missões Divertidas, Passaporte Infantil, 30 Brincadeiras e Acessórios
                  de Expansão (avaliados em R$ 53,50) são exclusivos do Kit Max.
                </p>
              </div>
            </div>

            {/* Clear and rational comparison banner */}
            <div className="mt-3 rounded-xl border border-primary/20 bg-card p-2.5 shadow-2xs">
              <p className="text-[11px] font-bold text-foreground">
                💡 Por apenas <span className="text-primary font-extrabold">+R$ 10,00</span> a mais:
              </p>
              <p className="mt-0.5 text-[11px] text-muted-foreground">
                No <strong className="text-primary font-bold">Kit Max (R$ 27,90)</strong> você
                desbloqueia a coleção inteira com os 10 cenários e garante todos os 5 bônus 100%
                grátis.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Card Footer / Call to Action with Safe Mobile Bottom Padding & Anti-Clipping Badges */}
      <div className="border-t border-border/70 bg-card p-4 pb-6 sm:p-5 sm:pb-7">
        <Button
          type="button"
          size="lg"
          variant={isMax ? "default" : "outline"}
          onClick={onDetails}
          className={cn(
            "w-full rounded-2xl text-sm font-extrabold shadow-sm transition-all duration-200 hover:-translate-y-0.5 cursor-pointer",
            isMax
              ? "h-12 bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary/25"
              : "h-12 border-2 border-primary/40 text-primary hover:bg-secondary/20",
          )}
        >
          {buttonLabel}
          <ArrowRight className="ml-1 h-4 w-4 shrink-0" aria-hidden="true" />
        </Button>

        {/* Clean, Non-Clipping Badges on Mobile */}
        <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-center text-[11px] font-semibold text-muted-foreground">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-muted/70 px-2.5 py-1 whitespace-nowrap">
            <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-success" aria-hidden="true" />
            Garantia de 7 dias
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-muted/70 px-2.5 py-1 whitespace-nowrap">
            <Printer className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
            Imprima quantas vezes quiser
          </span>
        </div>
      </div>
    </article>
  );
}
