"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type PanInfo,
} from "motion/react";
import { TexturedHeading } from "./TexturedHeading";
import { useMagnetic } from "@/hooks/useMagnetic";
import { site } from "@/lib/site";

type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  badges: string[];
  // Background for this slide's crossfade layer. Strictly flat/chapada —
  // no gradient at all across the fill, matching the brand's real
  // Instagram posts. One slide sits on --color-orange (#C43A24, the same
  // token the "Sobre" section below uses, so the two read as one
  // continuous block), the other on --color-orange-bright (#F87000).
  // The dark vignette behind the product used to live HERE, as a small
  // radial-gradient layered into this same section-wide background
  // string, positioned by percentage of the whole SECTION's box. That
  // made it fragile: the section's height varies by breakpoint (and even
  // between mobile widths, depending on how the description text wraps),
  // while the product's own on-screen position is fixed in real pixels —
  // so on mobile the vignette drifted ~113px below the product, reading
  // as a stray dark patch instead of a glow behind it. Moved to a
  // dedicated element anchored to the product's own box instead (see the
  // product wrapper below) — this string is now just the flat color.
  backdrop: string;
};

const PRODUCTS: Product[] = [
  {
    id: "file",
    name: "Filé",
    description:
      "Rosbife de filé-mignon na parrilla, queijo cremoso do Marajó, tomate grelhado, chutney de manga e chimichurri.",
    image: "/images/hero/file-cutout.png",
    badges: ["Suculento", "Na parrilla", "Artesanal"],
    backdrop: "var(--color-orange)",
  },
  {
    id: "estacao-belem",
    name: "Estação Belém",
    description:
      "Black Angus, queijo coalho do Marajó e bacon caramelizado com castanha-do-Pará, uma homenagem à Amazônia.",
    image: "/images/hero/estacao-belem-cutout.png",
    badges: ["Amazônico", "Black Angus", "Defumado"],
    backdrop: "var(--color-orange-bright)",
  },
];

const DISPLAY_MS = 4500;
const TRANSITION_S = 0.6;
const BACKDROP_TRANSITION_S = 1;
const EASE = [0.22, 1, 0.36, 1] as const;
const SWIPE_THRESHOLD = 50;
const CHIP_ROTATIONS = [-3, 2, -2];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionId, setTransitionId] = useState(0);
  const reduceMotion = useReducedMotion();

  const transitionIdRef = useRef(0);
  const resumeRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const ifoodMagnetRef = useMagnetic<HTMLAnchorElement>(16);
  const mapMagnetRef = useMagnetic<HTMLAnchorElement>(16);
  const productMagnetRef = useMagnetic<HTMLDivElement>(24);

  // Unguarded — drives autoplay. Always allowed to proceed; every successful
  // navigation (manual or auto) restarts the same DISPLAY_MS countdown below,
  // so in normal use it never actually overlaps a manual transition.
  const advance = useCallback((nextIndex: number, dir: number) => {
    transitionIdRef.current += 1;
    setTransitionId(transitionIdRef.current);
    setDirection(dir);
    setIndex(nextIndex);
    setIsTransitioning(true);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(() => {
      advance((index + 1) % PRODUCTS.length, 1);
    }, DISPLAY_MS);
    return () => clearTimeout(timer);
  }, [index, paused, advance]);

  // Guarded — drives arrows, dots and swipe. Blocked while a transition is
  // still in flight so rapid input can't pile up overlapping animations.
  const handleManualNav = (nextIndex: number, dir: number) => {
    if (isTransitioning) return;
    advance(nextIndex, dir);
    setPaused(true);
    if (resumeRef.current) clearTimeout(resumeRef.current);
    resumeRef.current = setTimeout(() => setPaused(false), DISPLAY_MS * 1.5);
  };

  const handlePanEnd = (
    _event: PointerEvent | MouseEvent | TouchEvent,
    info: PanInfo,
  ) => {
    if (isTransitioning) return;
    if (info.offset.x <= -SWIPE_THRESHOLD) {
      handleManualNav((index + 1) % PRODUCTS.length, 1);
    } else if (info.offset.x >= SWIPE_THRESHOLD) {
      handleManualNav((index - 1 + PRODUCTS.length) % PRODUCTS.length, -1);
    }
  };

  const product = PRODUCTS[index];

  // Pure horizontal slide + fade — no rotate/scale (the product must never
  // change size mid-transition). `exit` switches to `position: "absolute"`:
  // Framer Motion applies non-animatable properties like `position`
  // instantly rather than tweening them, so the outgoing element is pulled
  // out of flow the moment it starts leaving. Without this, both the
  // outgoing and incoming motion.div exist simultaneously as siblings
  // inside the stage's `flex items-center justify-center` — neither is
  // absolutely positioned (unlike the lettering h1, which already is) — so
  // flex recalculates both elements' positions while they coexist,
  // producing a reflow-driven jump partway through the animation (the
  // reported "stutter") and masking the intended slide direction. Only the
  // `center` (current, in-flow) element stays in normal flow, so it alone
  // keeps contributing the height the stage needs — Hero's own height,
  // which depends entirely on the product (everything else in the stage is
  // already absolute), stays exactly as it is today.
  const productVariants = {
    enter: (dir: number) =>
      reduceMotion ? { opacity: 0 } : { opacity: 0, x: dir * 110 },
    center: { opacity: 1, x: 0, position: "relative" as const },
    exit: (dir: number) =>
      reduceMotion
        ? { opacity: 0, position: "absolute" as const }
        : { opacity: 0, x: dir * -110, position: "absolute" as const },
  };

  const letteringVariants = {
    enter: (dir: number) =>
      reduceMotion ? { opacity: 0 } : { opacity: 0, x: dir * 130 },
    center: { opacity: 1, x: 0 },
    exit: (dir: number) =>
      reduceMotion ? { opacity: 0 } : { opacity: 0, x: dir * -130 },
  };

  return (
    <section
      className="bg-grain relative overflow-hidden bg-orange"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Criações em destaque"
    >
      {/* Fundo: duas camadas empilhadas, uma por slide, alternando por
          opacity (crossfade) — nunca anima background-color diretamente. */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {PRODUCTS.map((p, i) => (
          <motion.div
            key={`backdrop-${p.id}`}
            className="absolute inset-0"
            style={{ background: p.backdrop }}
            animate={{ opacity: i === index ? 1 : 0 }}
            transition={{ duration: BACKDROP_TRANSITION_S, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Faixa preta única no topo — endereço, bairro, horário. Tom neutro
          fixo, não acompanha a cor do slide atual. A logo saiu daqui e foi
          para dentro da composição do Hero (selo circular, ver abaixo); a
          tagline "Gastronomia Afetiva" (site.tagline) não aparece mais nesta
          faixa, mas continua em uso no rodapé (SiteFooter) — não foi
          removida do projeto, só deste ponto específico. */}
      <div className="relative z-20 border-b border-ink-line bg-ink">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-6 py-2 text-center font-condensed text-[10px] uppercase tracking-[0.15em] text-cream-dim sm:px-10 sm:py-3 sm:text-xs">
          <span>{site.address.street}</span>
          <span className="text-cream-dim/40">·</span>
          <span>{site.address.neighborhood}</span>
          <span className="text-cream-dim/40">·</span>
          <span>{site.hoursShort}</span>
        </div>
      </div>

      {/* SEM min-height explícito (nem vh, nem px) — de propósito. Antes,
          min-h-[Xvh] crescia o Hero além do necessário em viewports altos/
          estreitos (768×1024 chegava a ter 142px de vão morto só entre a
          barra e o lettering), porque vh é relativo à ALTURA do viewport
          enquanto o conteúdo (fonte em vw, com teto fixo em rem no desktop)
          só varia com a LARGURA. Medido via script de diagnóstico Playwright
          nos dois slides, nos 4 viewports de referência (375/768/1440/1920):
          o fluxo natural (sem nenhum min-height) já produz uma altura
          idêntica entre os dois slides em cada viewport — 505px@375,
          472px@768, 563px@1440 e 1920 (mesma, já que o conteúdo do
          breakpoint lg é fixo em rem, não muda com a altura do viewport) —
          e zero sobreposição com #sobre em qualquer um. Tentativa de travar
          essa altura via min-h-[Ypx] com esses mesmos valores foi descartada:
          um min-height qualquer no container flex empurra o item flex-1
          filho (que usa flex-basis 0%) para o modo "grow", e nesse modo o
          layout resultante ficava ~33-51px MAIOR que o fluxo natural
          (quirk de flexbox, não um bug de conteúdo) — ou seja, o próprio
          fluxo auto já É a altura fixa correta; impor min-height por cima
          dele piorava, não travava. */}
      <div className="relative z-10 flex w-full flex-col">
        {/* pb-6 sm:pb-10: antes era só `pb-10` (sem variante), ou seja a
            MESMA regra pro mobile inteiro e pro desktop — reduzir o valor
            base teria encolhido o desktop também. Adicionado `sm:pb-10`
            pra restaurar explicitamente o valor de sempre a partir de
            640px (idêntico ao que já era, em qualquer tamanho ≥sm), e
            `pb-6` como override específico do mobile (<640px) — a técnica
            que este projeto já usa (media query/breakpoint dedicado) em
            vez de mexer numa regra compartilhada. */}
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 pb-6 sm:px-10 sm:pb-10">
          <motion.div
            className="touch-pan-y relative mt-1 flex flex-1 items-center justify-center sm:mt-6 lg:mt-14"
            onPanEnd={handlePanEnd}
          >
            {/* Setas de navegação — filhas da stage (não da section) para que
                top-1/2 centralize na altura do CONJUNTO produto+lettering,
                não na altura total do hero. O breakout left/right via calc()
                mantém a posição horizontal na borda do hero (viewport),
                como antes — só a referência vertical mudou. */}
            <button
              type="button"
              onClick={() =>
                handleManualNav(
                  (index - 1 + PRODUCTS.length) % PRODUCTS.length,
                  -1,
                )
              }
              disabled={isTransitioning}
              aria-label="Criação anterior"
              className="absolute left-[calc(50%-50vw+0.75rem)] top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-cream-dim/30 bg-ink/80 text-cream-dim backdrop-blur-sm transition hover:border-gold hover:text-gold disabled:opacity-40 sm:left-[calc(50%-50vw+1.5rem)] sm:h-11 sm:w-11"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => handleManualNav((index + 1) % PRODUCTS.length, 1)}
              disabled={isTransitioning}
              aria-label="Próxima criação"
              className="absolute right-[calc(50%-50vw+0.75rem)] top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-cream-dim/30 bg-ink/80 text-cream-dim backdrop-blur-sm transition hover:border-gold hover:text-gold disabled:opacity-40 sm:right-[calc(50%-50vw+1.5rem)] sm:h-11 sm:w-11"
            >
              ›
            </button>

            {/* Badges fixos da marca — colados ao próprio lettering (estilo
              "Beefy" da referência Hotbite), não soltos nas bordas do hero.
              Ancorados a uma cópia invisível (mesma tipografia/tamanho) do
              lettering, sempre na posição de repouso (centro), para que
              fiquem parados mesmo enquanto o lettering real desliza durante
              a transição — cor/identidade fixas, sem animação. O tamanho de
              fonte AQUI precisa ficar idêntico ao do lettering real abaixo,
              sempre — se um mudar sem o outro, os badges desancoram de
              novo (bug já visto). */}
            <div
              aria-hidden="true"
              className="invisible pointer-events-none absolute inset-x-0 top-1/2 z-30 flex -translate-y-1/2 flex-col items-center text-center"
            >
              <span className="relative inline-block select-none whitespace-nowrap font-display uppercase leading-[0.85] tracking-tight text-[15.5vw] sm:text-[12.25vw] lg:text-[8.75rem]">
                Maria Parrilla
                {/* Selo circular da logo — canto superior esquerdo da
                  composição, ao lado do badge "Na brasa". Ancorado ao mesmo
                  ghost copy (mesma técnica), então fica parado durante a
                  transição de slide como os demais badges fixos. */}
                <span className="visible absolute -left-14 -top-8 h-11 w-11 overflow-hidden rounded-full bg-ink ring-1 ring-gold/40 sm:-left-24 sm:-top-14 sm:h-20 sm:w-20 lg:-left-28 lg:-top-16 lg:h-24 lg:w-24">
                  <Image
                    src="/images/brand/logo.png"
                    alt="Maria Parrilla Steakhouse"
                    fill
                    sizes="(max-width: 639px) 44px, (max-width: 1023px) 80px, 96px"
                    className="object-contain p-1"
                    priority
                  />
                </span>
                <span className="visible absolute -left-3 -top-2 -rotate-6 rounded-full border border-gold/40 bg-ink px-3 py-1 font-condensed text-[10px] uppercase tracking-[0.2em] text-gold/80 sm:-left-4 sm:-top-3">
                  Na brasa
                </span>
              </span>
              <span className="relative inline-block select-none whitespace-nowrap font-display uppercase leading-[0.85] tracking-tight text-[15.5vw] sm:text-[12.25vw] lg:text-[8.75rem]">
                Steakhouse
                <span className="visible absolute -right-3 -top-2 rotate-6 rounded-full border border-flame/50 bg-ink px-3 py-1 font-condensed text-[10px] uppercase tracking-[0.2em] text-flame/90 sm:-right-6 sm:-top-3">
                  Parrilla
                </span>
              </span>
            </div>

            <AnimatePresence
              custom={direction}
              onExitComplete={() => setIsTransitioning(false)}
            >
              {/* Lettering: fixed brand text, the page's real H1. It re-mounts
                (unique key per navigation) to ride the same slide transition
                as the product, but its text never changes — safe for SEO. */}
              <motion.h1
                key={`lettering-${transitionId}`}
                custom={direction}
                variants={letteringVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: TRANSITION_S * 1.2, ease: EASE }}
                className="pointer-events-none absolute inset-x-0 top-1/2 z-10 flex -translate-y-1/2 flex-col items-center text-center"
                style={{ willChange: isTransitioning ? "transform, opacity" : "auto" }}
              >
                {/* Opacidade+blur sutis num wrapper próprio (não no motion.h1,
                    que já usa opacity para o enter/exit da transição —
                    inline style de framer sobrescreveria uma classe Tailwind
                    na MESMA propriedade no MESMO elemento). Reforça que o
                    lettering é fundo, nunca compete com o produto nítido. */}
                <div className="flex flex-col items-center opacity-90 blur-[1.5px]">
                  <TexturedHeading
                    as="span"
                    level={2}
                    intensity={0.35}
                    rotate={-1.5}
                    className="select-none whitespace-nowrap font-display uppercase leading-[0.85] tracking-tight text-[15.5vw] sm:text-[12.25vw] lg:text-[8.75rem]"
                  >
                    Maria Parrilla
                  </TexturedHeading>
                  <TexturedHeading
                    as="span"
                    level={2}
                    color="var(--color-gold)"
                    rotate={-1.5}
                    className="select-none whitespace-nowrap font-display uppercase leading-[0.85] tracking-tight text-[15.5vw] sm:text-[12.25vw] lg:text-[8.75rem]"
                  >
                    Steakhouse
                  </TexturedHeading>
                </div>
                <span className="sr-only">
                  , gastronomia em brasa em {site.address.neighborhood},{" "}
                  {site.address.city}/{site.address.state}
                </span>
              </motion.h1>

              <motion.div
                key={`product-${transitionId}`}
                custom={direction}
                variants={productVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: TRANSITION_S, ease: EASE }}
                className="relative z-20"
                style={{ willChange: isTransitioning ? "transform, opacity" : "auto" }}
              >
                {/* Mobile usava translate-y-4 (transform, sem contribuição de
                    layout) em vez de margem real — a mesma pegadinha já
                    documentada para o desktop na v6 do Hero. Isso deslocava
                    a imagem visualmente para baixo sem nunca reservar esse
                    espaço no fluxo. Removido por completo no mobile (sem
                    mt-* aqui), não substituído por um mt-* real menor:
                    o gap contra os badges de sabor abaixo é controlado
                    inteiramente pela margem PRÓPRIA da badges row (ver
                    mt-4 mais abaixo), não por este offset — então este
                    valor não precisa ser positivo para o bug de
                    compressão original ficar corrigido, só precisa não
                    ser um transform fantasma. Uma rodada anterior tinha
                    somado mt-3 (12px) aqui mesmo sem precisar, inflando a
                    altura total do Hero (+34px no total, medido) sem
                    ganho de legibilidade correspondente — revertido para
                    reduzir esse crescimento. */}
                <div className="flex flex-col items-center sm:mt-10 lg:mt-14">
                  {/* Magnetic-cursor detection area for the product photo
                      (useMagnetic, same hook as the CTAs — see
                      src/hooks/useMagnetic.ts). Two nested divs, both new,
                      both OUTSIDE the two-layer movement motion.div below —
                      never touching its internals:
                      - Outer: the "detection area" (`el.parentElement`,
                        where useMagnetic listens for mousemove/mouseleave).
                        Padding on three sides only (pt-5/px-5 = 20px, per
                        the requested ~20-30px radius) gives a small buffer
                        so the pull starts slightly before the cursor
                        actually touches the photo. No pb- (bottom padding):
                        measured via getBoundingClientRect that the flavor
                        badges row directly below sits only 6px away at
                        mobile widths (375px) — any bottom padding here
                        would reach into that row, which the brief
                        explicitly rules out. The negative margin
                        (-mt-5/-mx-5, mirroring the padding) cancels the
                        padding's contribution to normal-flow layout, so
                        this wrapper's presence is invisible to surrounding
                        spacing (badges row stays pixel-identical) — same
                        "padding cancelled by equal negative margin"
                        technique already used for the CTAs' own detection
                        areas.
                      - Inner (ref={productMagnetRef}, className="fx-magnet"):
                        the element useMagnetic actually writes
                        `transform: translate()` to. Being a plain div (not
                        a motion.div Framer Motion controls), its transform
                        can never fight with the floating/slide transforms
                        below — the two simply compose (this wrapper's
                        translate, then the child motion.div's own
                        translate/rotate/scale on top), on two different
                        elements. */}
                  <div className="relative -mx-5 -mt-5 px-5 pt-5">
                    {/* Vinheta atrás do produto — elemento próprio, estático
                      (não participa da técnica de duas camadas do produto
                      logo abaixo, nem do floating/transição dela: um bug de
                      performance já documentado neste projeto veio
                      exatamente de conteúdo re-rasterizando a cada frame, e
                      esta camada não precisa acompanhar o wiggle de ±14px
                      do floating em tempo real para ler bem, mesma lógica
                      já usada para a sombra da própria foto). Vive FORA do
                      motion.div animado e FORA do .fx-magnet (não herda o
                      puxão do ímã, nem a flutuação/transição do produto) —
                      só centralizada dentro deste wrapper, que por sua vez
                      já tem exatamente o tamanho da caixa da imagem (o
                      padding em 3 lados é cancelado por uma margem negativa
                      igual, técnica já usada aqui para a área de detecção
                      do ímã). Tamanho em INSET NEGATIVO (não px/vw fixos):
                      cresce/encolhe automaticamente junto com a caixa da
                      imagem em qualquer breakpoint, sem precisar de valores
                      próprios por tamanho de tela. inset-[12%] encolhe a
                      vinheta pra ~76% da caixa — menor que a própria caixa
                      de propósito, para o alimento (que já preenche uma
                      das duas dimensões da caixa via object-contain,
                      dependendo do recorte) ultrapassar visivelmente a
                      vinheta nessa dimensão, em vez de ficar 100% contido
                      nela. `radial-gradient(... closest-side ...)` faz a
                      elipse encostar exatamente nas bordas DESTA caixa
                      (já menor que a da imagem), garantindo fade suave sem
                      nunca formar canto reto.

                      SEM `blur-*`: uma primeira versão somava um filtro de
                      blur por cima do gradiente para suavizar ainda mais —
                      parecia correto no Chromium (confirmado visualmente e
                      via amostragem de pixel), mas reproduzido no WebKit
                      (Playwright + iPhone 13 emulado) o MESMO elemento
                      renderizava como um retângulo sólido de cantos duros,
                      cortando contra o laranja sem gradiente nenhum — bug
                      real de engine, não CSS incorreto: `filter: blur()`
                      combinado com `background: radial-gradient(...
                      transparent ...)` e `border-radius` no MESMO elemento
                      faz o WebKit compositar a camada de forma diferente do
                      Chromium (alpha pré-multiplicado tratado errado no
                      blur, aparentemente). Confirmado isolando a variável:
                      removendo só o `filter` (mantendo gradiente e
                      border-radius intactos) via `el.style.filter='none'`
                      no mesmo teste, o WebKit passou a renderizar a elipse
                      perfeitamente suave, idêntica ao Chromium — ou seja, o
                      próprio gradiente (sem blur nenhum) já é suave o
                      bastante nos dois engines; o blur era só polimento
                      supérfluo que teve o efeito colateral de quebrar o
                      WebKit. Compensado com mais paradas de cor no
                      gradiente (curva mais gradual) em vez do blur. */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-[12%] z-0 rounded-full"
                      style={{
                        background:
                          "radial-gradient(ellipse closest-side, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.32) 30%, rgba(0,0,0,0.16) 60%, rgba(0,0,0,0.05) 85%, transparent 100%)",
                      }}
                    />
                    <div ref={productMagnetRef} className="fx-magnet relative z-10">
                      {/* Duas cópias da mesma imagem, mas um ÚNICO contêiner
                        (este motion.div) recebe qualquer transform — tanto do
                        floating idle quanto (por herança do motion.div pai da
                        transição) da troca de slide. Nenhuma das duas cópias tem
                        transform independente entre si, então nunca se separam
                        visualmente durante o movimento (bug de "imagem
                        fantasma" corrigido: antes, a cópia com sombra ficava
                        parada enquanto só a cópia nítida flutuava, expondo a
                        cópia de baixo como um duplicado estático sempre que o
                        floating se afastava do repouso). A cópia de baixo carrega
                        o drop-shadow; a de cima é nítida, sem filtro, sobreposta
                        via absolute inset-0 — ambas se movem juntas porque estão
                        dentro do mesmo elemento animado. */}
                      <motion.div
                        className="relative h-[40vw] w-[58vw] max-h-[138px] max-w-[200px] will-change-transform sm:h-[193px] sm:w-[280px] sm:max-h-none sm:max-w-none lg:h-[235px] lg:w-[340px]"
                        animate={
                          reduceMotion
                            ? undefined
                            : {
                                y: [0, -14, 0],
                                rotate: [0, 1.2, 0],
                                scale: [1, 1.015, 1],
                              }
                        }
                        transition={
                          reduceMotion
                            ? undefined
                            : { duration: 5, repeat: Infinity, ease: "easeInOut" }
                        }
                      >
                        {/* fill + object-contain (em vez de width/height explícitos
                          do next/image) porque os dois cutouts têm proporções bem
                          diferentes entre si (Filé ~2:1 bem largo, Estação Belém
                          ~1,08:1 quase quadrado) — sizing por altura fixa como
                          antes produzia larguras muito inconsistentes entre os
                          slides (486px vs 263px medido). Uma caixa de tamanho
                          fixo com contain deixa os dois dentro da MESMA área,
                          preservando a proporção interna de cada imagem. */}
                        <Image
                          aria-hidden="true"
                          alt=""
                          src={product.image}
                          fill
                          draggable={false}
                          sizes="(max-width: 640px) 58vw, (max-width: 1023px) 280px, 340px"
                          priority={index === 0}
                          className="object-contain drop-shadow-[0_32px_60px_rgba(0,0,0,0.7)]"
                        />
                        <Image
                          src={product.image}
                          alt={`${product.name}, criação da Maria Parrilla`}
                          fill
                          draggable={false}
                          sizes="(max-width: 640px) 58vw, (max-width: 1023px) 280px, 340px"
                          className="object-contain"
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* Badges interativos por produto — mesma transform do
                    produto (nenhuma animação extra), em fluxo normal para
                    que o espaço embaixo seja sempre reservado (nunca
                    sobrepõe a descrição abaixo). */}
                  <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5 sm:mt-2 sm:gap-2">
                    {product.badges.map((label, i) => (
                      <span
                        key={label}
                        style={{
                          transform: `rotate(${CHIP_ROTATIONS[i % CHIP_ROTATIONS.length]}deg)`,
                        }}
                        className="rounded-full border border-gold/40 bg-ink px-3.5 py-1.5 font-condensed text-[11px] uppercase tracking-[0.15em] text-gold sm:text-[13px]"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <div className="relative z-30 mt-6 flex flex-col items-center gap-4 text-center sm:mt-14 sm:gap-7 lg:mt-20 lg:gap-8">
            <p className="max-w-xl font-condensed text-base font-medium text-ink sm:text-lg">
              {product.description}
            </p>

            <div className="flex w-full max-w-xs flex-col items-stretch gap-2 sm:w-auto sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4">
              {/* Each CTA gets its own dedicated wrapper div — this is the
                  "detection area" useMagnetic listens on. If both buttons
                  shared one parent (e.g. this whole row), moving the mouse
                  near one would also drag the other, since both hooks would
                  react to the same mousemove stream. w-full/sm:w-auto is
                  repeated on the wrapper AND the anchor so the anchor still
                  fills it identically to how it filled this flex row
                  directly before the wrapper existed (mobile: stretched
                  full width; desktop: shrunk to its own content). */}
              <div className="w-full sm:w-auto">
                <a
                  ref={ifoodMagnetRef}
                  href={site.links.ifood}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fx-magnet block w-full rounded-full border-2 border-ink bg-flame px-7 py-3.5 text-center font-condensed text-sm font-semibold uppercase tracking-wider text-cream shadow-lg shadow-black/30 hover:bg-ember sm:w-auto"
                >
                  Pedir no iFood
                </a>
              </div>
              <div className="w-full sm:w-auto">
                <a
                  ref={mapMagnetRef}
                  href={site.mapsLinkSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fx-magnet block w-full rounded-full border border-ink/50 px-7 py-3.5 text-center font-condensed text-sm font-semibold uppercase tracking-wider text-ink hover:border-ink hover:bg-ink/10 sm:w-auto"
                >
                  Ver no mapa
                </a>
              </div>
            </div>

            <div className="flex gap-2">
              {PRODUCTS.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => handleManualNav(i, i > index ? 1 : -1)}
                  aria-label={`Ver ${p.name}`}
                  aria-current={i === index}
                  className={`h-2 w-2 rounded-full transition ${
                    i === index ? "bg-gold" : "bg-cream-dim/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
