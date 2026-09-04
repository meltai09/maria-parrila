import Image from "next/image";
import { TexturedHeading } from "./TexturedHeading";
import { site } from "@/lib/site";

// Display order only (never mutates site.hours, the source of truth) —
// closed day last, matching the reference composition's grouping
// ("Terça-Quinta / Sexta-Sábado / Domingo / Segunda").
const HOURS_DISPLAY_ORDER = ["Terça a quinta", "Sexta e sábado", "Domingo", "Segunda"];
const orderedHours = HOURS_DISPLAY_ORDER.map(
  (days) => site.hours.find((item) => item.days === days)!,
);

// Same "gold needs an ink outline on orange" fix already established in
// About.tsx's "Nossa história" title — gold-on-orange measures too low a
// contrast ratio on its own (documented there: ~2.1-3:1 against this
// specific orange, under WCAG's 3:1 floor for large text); the 4 stacked
// 1px drop-shadows trace a solid ink outline around each glyph so the
// accent color stays legible without darkening/desaturating it.
const GOLD_OUTLINE_FILTER =
  "[filter:drop-shadow(1px_0_0_var(--color-ink))_drop-shadow(-1px_0_0_var(--color-ink))_drop-shadow(0_1px_0_var(--color-ink))_drop-shadow(0_-1px_0_var(--color-ink))]";

function PinIcon({ className }: { className?: string }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 32" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 20 12 20s12-11 12-20C24 5.4 18.6 0 12 0zm0 16.5A4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 0 1 0 9z" />
    </svg>
  );
}

export function Location() {
  return (
    <section
      className="relative overflow-hidden bg-orange py-20 sm:py-28"
      id="localizacao"
      style={{
        backgroundImage:
          "radial-gradient(70% 60% at 8% 90%, rgba(248,112,0,0.4), transparent 60%)",
      }}
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        {/* Duas colunas no desktop (conteúdo 45% / mapa 55%, o mapa nunca
            ocupa a largura inteira) — items-stretch (padrão do grid) faz
            as duas colunas equilibrarem a mesma altura, definida pelo
            conteúdo (mais alto que o mapa sozinho, já que agora "Horários
            da brasa" mora dentro dessa coluna também). Mobile/tablet:
            uma coluna só, conteúdo primeiro, mapa depois — ordem de
            documento já é essa (sem necessidade de order-*). */}
        <div className="grid gap-10 lg:grid-cols-[45%_1fr] lg:items-stretch lg:gap-12">
          <div className="flex flex-col justify-between gap-10">
            <div>
              <h2 className="flex flex-wrap items-baseline gap-x-3">
                <TexturedHeading
                  as="span"
                  level={2}
                  color="var(--color-ink)"
                  dark
                  rotate={-1.5}
                  className="font-display text-5xl uppercase tracking-tight sm:text-6xl"
                >
                  Onde
                </TexturedHeading>
                <span className={`inline-block ${GOLD_OUTLINE_FILTER}`}>
                  <TexturedHeading
                    as="span"
                    level={2}
                    color="var(--color-gold)"
                    rotate={-1.5}
                    className="font-display text-5xl uppercase tracking-tight sm:text-6xl"
                  >
                    estamos
                  </TexturedHeading>
                </span>
              </h2>

              <div className="mt-8">
                <h3 className="font-condensed text-sm uppercase tracking-[0.25em] text-ink">
                  Endereço
                </h3>
                <p className="mt-1 font-condensed text-xl text-ink sm:text-2xl">
                  {site.address.street}
                </p>
                <p className="font-condensed text-lg text-ink/80">
                  {site.address.neighborhood}, {site.address.city}/{site.address.state}
                </p>
              </div>

              {/* Mesmo estilo de botão de "Ver no mapa" (Hero.tsx) —
                  outline em ink sobre fundo laranja, sem inventar um
                  estilo novo. */}
              <a
                href={site.mapsLinkSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-ink/50 px-7 py-3.5 text-center font-condensed text-sm font-semibold uppercase tracking-wider text-ink transition hover:border-ink hover:bg-ink/10"
              >
                <PinIcon />
                Abrir no Google Maps
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="border-t border-ink/20 pt-10">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="font-display text-lg text-gold/80">
                  ✳
                </span>
                <TexturedHeading
                  as="h3"
                  level={2}
                  color="var(--color-ink)"
                  dark
                  rotate={-1.5}
                  className="font-display text-2xl uppercase tracking-tight sm:text-3xl"
                >
                  Horários da brasa
                </TexturedHeading>
                <span aria-hidden="true" className="font-display text-lg text-gold/80">
                  ✳
                </span>
              </div>

              {/* grid-cols-2 fixo (não sm:grid-cols-4): a coluna de
                  conteúdo desktop tem só ~45% de max-w-6xl (~500px) —
                  bem mais estreita que a largura de viewport que o
                  4-across original usava como referência (640px+), então
                  4 colunas ficariam espremidas aqui. 2x2 cabe bem em
                  qualquer largura de coluna, mobile ou desktop. */}
              <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-6">
                {orderedHours.map((item, i) => {
                  const closed = item.hours === "Fechado";
                  return (
                    <div
                      key={item.days}
                      className={i % 2 === 1 ? "border-l border-ink/20 pl-6" : ""}
                    >
                      <p className="font-condensed text-xs uppercase tracking-[0.2em] text-ink/60">
                        {item.days}
                      </p>
                      {closed ? (
                        // Texto colorido direto sobre o laranja não
                        // funciona aqui — flame (#e8321a) mede só ~1,2:1
                        // de contraste contra este laranja (#c43a24),
                        // bem abaixo do mínimo de 3:1 do WCAG. Mesma
                        // solução já padronizada no projeto pra esse
                        // problema (badges sobre laranja sempre com
                        // fundo ink sólido): um chip em bg-ink, com o
                        // texto flame DENTRO dele — flame sobre ink mede
                        // ~4,7:1, confortável.
                        <span className="mt-2 inline-block rounded-full bg-ink px-3 py-1 font-condensed text-sm italic uppercase tracking-wider text-flame">
                          {item.hours}
                        </span>
                      ) : (
                        <p className="mt-2 font-condensed text-xl font-semibold text-ink">
                          {item.hours}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mapa: card inteiro clicável (abre o endereço real no Google
              Maps em nova aba) — o iframe embutido é puramente decorativo
              (pointer-events-none, sem drag/zoom próprio), então o
              clique nunca é interceptado por ele e sempre chega no <a>.

              Simplificação desta rodada: removidos o filtro de cor do
              iframe e todos os painéis de cobertura (chip de endereço,
              zoom/tela-cheia/satélite) de rodadas anteriores — o mapa
              volta a mostrar o conteúdo nativo do Google sem tentar
              disfarçar nada. `relative` (sem overflow-hidden) neste
              wrapper externo, com o overflow-hidden/rounded-2xl movido
              para um DIV INTERNO só ao redor do iframe: o selo da marca
              (abaixo) precisa poder se projetar PRA FORA da moldura
              (efeito "selo de carta"/carimbo no canto), o que um
              container com overflow-hidden vizinho ao selo cortaria. */}
          <a
            href={site.mapsLinkSrc}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir ${site.address.full} no Google Maps`}
            className="relative block"
          >
            <div className="relative h-[320px] overflow-hidden rounded-2xl border border-ink shadow-2xl shadow-black/40 transition hover:shadow-black/60 sm:h-[420px] lg:h-full">
              <iframe
                title="Localização da Maria Parrilla Steakhouse no Google Maps"
                src={site.mapsEmbedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                sandbox="allow-scripts allow-same-origin"
                tabIndex={-1}
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full"
              />

              {/* Marcador customizado — deliberadamente NÃO um pino
                  vermelho (a forma clássica de pino + vermelho saturado
                  é visualmente quase idêntica ao pino padrão do Google,
                  fácil de confundir com "não trocaram o marcador"). Usa
                  a mesma dupla ink+dourado do selo circular da logo no
                  Hero — inconfundivelmente da marca, nunca a cor que o
                  Google usaria. O embed clássico `output=embed&q=`
                  centraliza o endereço buscado no meio do iframe, então
                  ancorar este marcador em 50%/50% (com a PONTA do pino,
                  não o centro do SVG, tocando esse ponto) cai
                  exatamente sobre o pino nativo do Google (que continua
                  lá, embutido no iframe — cross-origin, sem forma de
                  removê-lo — só fica coberto por este). */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full"
              >
                <span className="absolute left-1/2 top-[27px] -z-10 h-5 w-5 -translate-x-1/2 animate-pulse rounded-full bg-gold/50 blur-[3px]" />
                <svg
                  width="34"
                  height="46"
                  viewBox="0 0 24 32"
                  className="drop-shadow-[0_6px_10px_rgba(0,0,0,0.5)]"
                >
                  <path
                    d="M12 0C5.4 0 0 5.4 0 12c0 9 12 20 12 20s12-11 12-20C24 5.4 18.6 0 12 0z"
                    fill="var(--color-ink)"
                    stroke="var(--color-gold)"
                    strokeWidth="1.5"
                  />
                  <circle cx="12" cy="12" r="4.5" fill="var(--color-gold)" />
                </svg>
              </div>
            </div>

            {/* Selo da marca — movido pra FORA do conteúdo do mapa,
                "pendurado" no canto superior direito da moldura, estilo
                selo de carta/carimbo (metade sobre a borda do card,
                metade projetada pra fora dela). Canto direito escolhido
                em vez do esquerdo porque é onde o chip nativo do Google
                NÃO fica (o chip sempre nasce no canto esquerdo do
                embed) — mantém o selo livre de qualquer sobreposição
                com o conteúdo do mapa, mesmo sem nenhum painel de
                cobertura por baixo dele. Mesmo asset/tratamento visual
                do selo do Hero (`rounded-full bg-ink ring-1
                ring-gold/40` + `/images/brand/logo.png`), reaproveitado
                tal qual — só o tamanho/offset são deste componente. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-4 -top-4 h-14 w-14 overflow-hidden rounded-full bg-ink ring-2 ring-gold/50 drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)] sm:-right-6 sm:-top-6 sm:h-20 sm:w-20 lg:-right-7 lg:-top-7 lg:h-24 lg:w-24"
            >
              <Image
                src="/images/brand/logo.png"
                alt=""
                fill
                sizes="(max-width: 639px) 56px, (max-width: 1023px) 80px, 96px"
                className="object-contain p-1.5"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
