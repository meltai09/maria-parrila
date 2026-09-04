import Image from "next/image";
import { TexturedHeading } from "./TexturedHeading";

export function About() {
  return (
    <section
      // pb split from pt (was a single `py-20 sm:py-28`) with an lg-only
      // override: measured via getBoundingClientRect that the gap between
      // this section's lowest content and the illustration below it had
      // grown to 141.7px on the text column's side at 1440px — the photo
      // column (taller since a previous round's aspect-ratio change) sets
      // the grid row's height, and `items-center` (below) was vertically
      // centering the now much-shorter text column within that taller
      // row, adding ~30px on top of the uniform bottom padding. The photo
      // side itself only had 42px of real slack (constrained by the
      // secondary photo's absolute overhang, `-bottom-14`), so pb couldn't
      // just be cut uniformly without risking clipping it — lg:pb-24
      // (96px, down from the inherited 112px) keeps ~26px of breathing
      // room there while still meaningfully tightening the text side once
      // combined with the alignment fix. Mobile/tablet stack in a single
      // column below lg and already measured a tight, correct 31px gap —
      // untouched, pt unchanged everywhere (doesn't affect this gap, and
      // touching it would shift spacing after the flame divider above).
      className="relative overflow-hidden bg-orange-sobre pb-20 pt-20 sm:pb-28 sm:pt-28 lg:pb-24"
      id="sobre"
      style={{
        // Real grain/print-noise sample cropped from a clean patch of the
        // divider illustration's own sky (not synthetic noise), tiled —
        // makes this section's background read as the same physical
        // surface as the illustration below it, not two flat/different
        // graphics. The illustration file itself is never touched.
        backgroundImage: "url('/images/sobre/textura-fundo-sobre.webp')",
        backgroundRepeat: "repeat",
      }}
    >
      {/* lg:items-end (was lg:items-center): the text column is much
          shorter than the photo column, and centering it inside a row
          height set by the taller photo column left ~30px of unwanted
          gap below the text before the section's own padding even
          started (see padding comment above) — end-aligning removes that
          extra offset without affecting the photo column at all. */}
      <div className="mx-auto grid max-w-6xl gap-20 px-6 sm:px-10 lg:grid-cols-[1fr_1.1fr] lg:items-end lg:gap-12">
        <div className="relative order-2 mx-auto w-full max-w-xs pb-14 pr-8 sm:max-w-sm sm:pb-16 sm:pr-10 lg:order-1 lg:mx-0 lg:max-w-none lg:pb-20 lg:pr-14">
          {/* Foto principal — a moldura floral já vem PINTADA dentro do
              próprio arquivo (1024×1536, mesma proporção de moldura.png),
              não é mais aplicada via código: sem overlay de moldura.png
              aqui (evita duplicação — a foto secundária, abaixo, continua
              com a técnica antiga). Sem crop/aspect-ratio forçado — a
              imagem renderiza na sua proporção nativa via `width`/`height`
              + `h-auto w-full`, então nenhuma parte da moldura integrada
              é cortada. `drop-shadow` em vez de `box-shadow`: a arte tem
              cantos transparentes/irregulares (não um retângulo fechado),
              e `drop-shadow` segue a forma real do alpha, enquanto
              `box-shadow` desenharia uma sombra retangular que não bate
              com o contorno visível. */}
          <Image
            src="/images/sobre/foto-principal-punho-erguido.png"
            alt="Chef Natália Ferreguete com o punho erguido, de uniforme da Maria Parrilla, com moldura floral"
            width={1024}
            height={1536}
            sizes="(max-width: 1024px) 70vw, 40vw"
            className="h-auto w-full drop-shadow-2xl"
          />

          {/* Foto secundária — menor, deslocada e rotacionada em relação à
              principal (`rotate-6` no wrapper), como um recorte de colagem
              editorial. Moldura floral também já vem PINTADA dentro do
              próprio arquivo agora (mesmo tratamento aplicado à principal
              numa rodada anterior) — sem overlay de moldura.png, sem
              crop/aspect-ratio forçado, `drop-shadow` em vez de
              `box-shadow` pelo mesmo motivo (cantos transparentes/
              irregulares da arte). A variação editorial em relação à
              principal agora vem só da escala (`w-[58%]`) e rotação do
              wrapper, não mais de uma escala própria da moldura. */}
          <div className="absolute -bottom-10 -right-2 w-[58%] rotate-6 sm:-right-4 lg:-bottom-14 lg:-right-8">
            <Image
              src="/images/sobre/foto-secundaria-embalagem-dupla.png"
              alt="Duas integrantes da equipe da Maria Parrilla sorrindo com a embalagem da marca, com moldura floral"
              width={1024}
              height={1536}
              sizes="(max-width: 1024px) 40vw, 22vw"
              className="h-auto w-full drop-shadow-2xl"
            />
          </div>

          <span className="absolute -top-3 right-2 rotate-2 rounded-full bg-ink px-4 py-2 font-condensed text-xs uppercase tracking-[0.2em] text-gold ring-1 ring-gold/40 sm:right-4">
            Belém do Pará → Vitória/ES
          </span>
        </div>

        <div className="order-1 lg:order-2">
          {/* Dourado sobre este laranja mede só ~2.1:1 de contraste (abaixo
              do piso de 3:1 do WCAG para texto grande) — pior que o ink já
              usado nos outros títulos sobre laranja (~5.5:1), que é a cor
              padrão do projeto justamente por isso. Mantido dourado por ser
              o pedido explícito desta correção, mas com um contorno fino em
              ink (mesmo princípio dos badges: fundo/contorno sólido para não
              sumir sobre o laranja) para preservar legibilidade pela borda
              das letras mesmo com o preenchimento de baixo contraste. */}
          <div className="[filter:drop-shadow(1px_0_0_var(--color-ink))_drop-shadow(-1px_0_0_var(--color-ink))_drop-shadow(0_1px_0_var(--color-ink))_drop-shadow(0_-1px_0_var(--color-ink))]">
            <TexturedHeading
              as="h2"
              level={2}
              color="var(--color-gold)"
              rotate={-1.5}
              className="font-display text-5xl uppercase tracking-tight sm:text-6xl"
            >
              Nossa história
            </TexturedHeading>
          </div>

          <div className="mt-6 space-y-4 font-condensed text-lg leading-relaxed text-ink sm:text-xl">
            <p>
              Tudo começou em Belém do Pará, terra da estrela solitária que carregamos até hoje
              na porta da casa: a bandeira do Pará, um pedacinho das nossas raízes. Da parrilla
              paraense para a brisa capixaba, a essência permanece a mesma: carnes na brasa,
              criatividade sem fronteiras, e uma certeza: aqui, gastronomia é afeto.
            </p>
            <p>
              O nome também é uma homenagem: Maria Parrilla se inspira na Maria Fumaça, a antiga
              locomotiva que ainda hoje estampa nossa identidade, símbolo de movimento, força e
              mudança. É um tributo às primeiras mulheres que, com coragem, ocuparam espaços de
              trabalho e abriram novos caminhos. Por isso, mais do que um restaurante, somos
              memória, afeto e história contadas pela brasa.
            </p>
            <p>
              Hoje, em Jardim Camburi, Vitória/ES, seguimos misturando sabores da Amazônia, como
              tucupi, queijo do Marajó e castanha-do-Pará, com o litoral capixaba, criação após
              criação.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-3 border-t border-ink/25 pt-6">
            <span className="text-xl" aria-hidden="true">
              🏅
            </span>
            <p className="font-body text-sm text-ink">
              Reconhecida pelo <strong>Sebrae</strong> como <strong>Empresa Destaque</strong> no
              programa ALI Produtividade, entre 37 selecionadas de mais de 200 participantes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
