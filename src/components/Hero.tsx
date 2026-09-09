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
  // continuous block), the other on --color-orange-bright (#F87000). A
  // dark radial vignette used to sit behind the product (first as part
  // of this same string, later as its own dedicated element anchored to
  // the product's box) — removed entirely by request; no darkening
  // behind the product at all now, just this flat color.
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
      // h-dvh flex flex-col, só mobile (sm:h-auto sm:block reverte pro
      // comportamento antigo a partir de 640px, sem nenhuma mudança pro
      // desktop): critério do produto passou a ser "no mobile, a
      // primeira tela precisa mostrar SOMENTE o Hero, sem nenhuma
      // fatia de Nossa História visível antes de rolar" — isso exige
      // altura TRAVADA na viewport, não mais a altura automática por
      // conteúdo que o comentário mais abaixo ainda documenta (esse
      // comentário permanece válido para o desktop, onde nada mudou).
      // dvh (dynamic viewport height) em vez de vh: vh não desconta a
      // barra de endereço/UI do navegador de forma consistente entre
      // iOS Safari e Android Chrome (a barra pode estar expandida ou
      // recolhida), então 100vh podia ficar maior que a área realmente
      // visível, sobrando um pedaço da próxima seção na primeira
      // dobra mesmo sem rolar — exatamente o bug que este critério
      // pede pra evitar. dvh acompanha a UI do navegador em tempo
      // real; suportado desde iOS Safari 15.4 e Chrome Android 108
      // (2022), confortavelmente coberto hoje.
      className="bg-grain relative flex h-dvh flex-col overflow-hidden bg-orange sm:block sm:h-auto"
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

      {/* Desktop/tablet (≥640px): continua SEM min-height/height explícito,
          pelo mesmo motivo de sempre — min-h-[Xvh] crescia o Hero além do
          necessário em viewports altos/estreitos (768×1024 chegava a ter
          142px de vão morto só entre a barra e o lettering), porque vh é
          relativo à ALTURA do viewport enquanto o conteúdo (fonte em vw,
          com teto fixo em rem no desktop) só varia com a LARGURA. Medido
          via script de diagnóstico Playwright nos dois slides, nos 4
          viewports de referência (375/768/1440/1920): o fluxo natural
          (sem nenhum min-height) já produz uma altura idêntica entre os
          dois slides em cada viewport, e zero sobreposição com #sobre em
          qualquer um — o próprio fluxo auto já É a altura correta aí, e
          nada disso mudou nesta rodada.

          Mobile (<640px): critério mudou (ver comentário na <section>) —
          agora É pra travar a altura em 100dvh, então este wrapper
          precisa de flex-1 + min-h-0 pra herdar essa altura fixa e
          repassá-la pro filho logo abaixo (o `justify-center` mora lá,
          não aqui — ver comentário nele pra saber por quê). min-h-0 é o
          que faz um filho flex-1 conseguir ENCOLHER de verdade dentro do
          espaço travado, em vez de insistir no tamanho mínimo do próprio
          conteúdo (o quirk padrão de flexbox — sem min-h-0, um filho
          flex-1 não encolhe abaixo do min-content, e o conjunto vazaria
          pra fora do 100dvh em telas mais baixas). No desktop, como a
          SECTION volta a `block` (sm:block, sem altura fixa), essas
          mesmas classes ficam inertes — flex-1/min-h-0 só têm efeito
          dentro de um contêiner flex com altura definida, nenhuma das
          duas condições vale mais a partir de 640px — por isso não
          precisam de override sm:. */}
      <div className="relative z-10 flex w-full min-h-0 flex-1 flex-col">
        {/* pb-6 sm:pb-10: antes era só `pb-10` (sem variante), ou seja a
            MESMA regra pro mobile inteiro e pro desktop — reduzir o valor
            base teria encolhido o desktop também. Adicionado `sm:pb-10`
            pra restaurar explicitamente o valor de sempre a partir de
            640px (idêntico ao que já era, em qualquer tamanho ≥sm), e
            `pb-6` como override específico do mobile (<640px) — a técnica
            que este projeto já usa (media query/breakpoint dedicado) em
            vez de mexer numa regra compartilhada.

            justify-center (mobile): primeira tentativa tinha só a STAGE
            como flex-1 (centralizando produto+lettering dentro da PRÓPRIA
            caixa), com o bloco de descrição/CTAs logo depois em fluxo
            normal. Resultado medido/visto em screenshot: em telas mais
            altas (375×812+), isso cria DOIS vazios grandes e desconectados
            — um entre a faixa de utilidade e a imagem, outro entre as tags
            e a descrição — porque toda a folga sobra em volta da imagem
            especificamente, sem nenhuma ir pro resto da composição. Trocado
            para justify-center AQUI (não na stage): a stage volta a ter
            altura NATURAL (sem flex-1/min-h-0 própria — ver abaixo), então
            o conjunto [stage + bloco de descrição/CTAs] passa a se
            comportar como um bloco ÚNICO e coeso, com o espaçamento interno
            entre os dois (mt-* do bloco de CTAs) sempre fixo — e é esse
            bloco INTEIRO que fica centralizado dentro do espaço disponível
            (herdado do flex-1 do wrapper pai). A folga extra em telas altas
            passa a se concentrar só em DOIS lugares (acima da stage, abaixo
            do bloco de CTAs), nunca DENTRO da composição — lê como
            respiro intencional nas bordas, não como buraco no meio. */}
        <div className="mx-auto flex w-full max-w-6xl min-h-0 flex-1 flex-col justify-center px-6 pb-6 sm:justify-start sm:px-10 sm:pb-10">
          <motion.div
            className="touch-pan-y relative mt-1 flex items-center justify-center sm:mt-6 lg:mt-14"
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
                  <div className="-mx-5 -mt-5 px-5 pt-5">
                    {/* A vinheta radial escura que existia aqui atrás do
                      produto foi removida numa rodada anterior. Depois, o
                      drop-shadow do próprio produto foi suavizado (60px→
                      40px, 0,7→0,45) numa tentativa de reduzir o
                      escurecimento reportado — mas o pedido final foi
                      remover o filtro por completo, sem nenhum grau de
                      escurecimento atrás do produto. Removido.

                      Isso também aposentou a técnica de duas camadas que
                      existia aqui (uma cópia aria-hidden com drop-shadow,
                      cacheada/estática por baixo, mais uma cópia nítida
                      animada por cima, dentro de um único motion.div) —
                      ela existia especificamente para resolver um bug de
                      performance real, documentado neste projeto:
                      re-rasterizar um filtro CSS (o drop-shadow, caro) a
                      cada frame do floating idle (~15-20s de RasterTask
                      acumulado em 10s, medido via CDP na época) e/ou da
                      transição de slide. Sem filtro nenhum sobre a
                      imagem, não existe mais nada caro pra cachear dessa
                      forma — as duas cópias ficariam pixel-a-pixel
                      idênticas (mesmo src, mesmo fill/object-contain,
                      mesmo sizes), então mantê-las seria só DOM
                      redundante sem função. Simplificado pra uma única
                      <Image>, mas só depois de MEDIR (não assumir) que
                      isso não reabre o bug antigo: RasterTask ~0ms/4s de
                      movimento de mouse continuo perto do produto, tanto
                      ANTES desta simplificação (com o filtro já suave,
                      0,45/40px, ainda em duas camadas) quanto DEPOIS (sem
                      filtro, uma única camada) — sem regressão em
                      nenhuma medição, consistente com a explicação
                      acima (nada de custoso restando pra cachear). */}
                    <div ref={productMagnetRef} className="fx-magnet">
                      {/* fill + object-contain (em vez de width/height explícitos
                        do next/image) porque os dois cutouts têm proporções bem
                        diferentes entre si (Filé ~2:1 bem largo, Estação Belém
                        ~1,08:1 quase quadrado) — sizing por altura fixa como
                        antes produzia larguras muito inconsistentes entre os
                        slides (486px vs 263px medido). Uma caixa de tamanho
                        fixo com contain deixa os dois dentro da MESMA área,
                        preservando a proporção interna de cada imagem. */}
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
                        <Image
                          src={product.image}
                          alt={`${product.name}, criação da Maria Parrilla`}
                          fill
                          draggable={false}
                          sizes="(max-width: 640px) 58vw, (max-width: 1023px) 280px, 340px"
                          priority={index === 0}
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
