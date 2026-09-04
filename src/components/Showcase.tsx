import Image from "next/image";
import { TexturedHeading } from "./TexturedHeading";
import { site } from "@/lib/site";

type Creation = {
  name: string;
  image: string;
  description: string;
};

const CREATIONS: Creation[] = [
  {
    name: "Filé",
    image: "/images/prato-file.avif",
    description:
      "Rosbife de filé-mignon na parrilla, queijo cremoso do Marajó, tomate grelhado, chutney de manga e chimichurri.",
  },
  {
    name: "Estação Marajoara",
    image: "/images/prato-estacao-marajoara.png",
    description:
      "Black Angus, queijo coalho do Marajó e bacon caramelizado com castanha-do-Pará, uma homenagem à Amazônia.",
  },
  {
    name: "Estação 2",
    image: "/images/prato-estacao-2.avif",
    description:
      "Blend suculento 180g black angus, coberto com mussarela de búfala, tomate grelhado, rúcula e chimichurri artesanal, no pão brioche australiano. Um hambúrguer leve, fresco e cheio de personalidade.",
  },
  {
    name: "Picanha",
    image: "/images/prato-picanha.avif",
    description:
      "O queridinho da casa: tiras de picanha na brasa (150g), queijo mussarela derretido, vinagrete, tudo no nosso pão de alho artesanal de 17cm que é puro segredo e sabor!",
  },
];

export function Showcase() {
  return (
    <section className="bg-ink py-20 sm:py-28" id="criacoes">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="max-w-2xl">
          <TexturedHeading
            as="h2"
            level={2}
            intensity={0.35}
            rotate={-1.5}
            className="font-display text-4xl uppercase tracking-tight text-cream sm:text-5xl"
          >
            Vitrine de criações
          </TexturedHeading>
          <p className="mt-4 font-condensed text-lg text-cream-dim">
            Um recorte do que sai da parrilla: cada criação une tradição do churrasco a
            ingredientes amazônicos e capixabas.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {CREATIONS.map((creation) => (
            <article
              key={creation.name}
              className="group relative overflow-hidden rounded-2xl border border-ink-line bg-ink-soft"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={creation.image}
                  alt={`${creation.name}, ${creation.description}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl uppercase tracking-tight text-gold">
                  {creation.name}
                </h3>
                <p className="mt-2 font-condensed text-base leading-relaxed text-cream-dim">
                  {creation.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-ink-line pt-10 text-center sm:mt-16 sm:pt-12">
          <p className="font-condensed text-sm uppercase tracking-[0.25em] text-cream-dim">
            Ver cardápio completo
          </p>
          <div className="flex w-full max-w-xs flex-col items-stretch gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4">
            <a
              href={site.links.ifood}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-ink bg-flame px-7 py-3.5 text-center font-condensed text-sm font-semibold uppercase tracking-wider text-cream shadow-lg shadow-black/30 transition hover:bg-ember"
            >
              Pedir no iFood
            </a>
            <a
              href={site.links.order}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-cream-dim/40 px-7 py-3.5 text-center font-condensed text-sm font-semibold uppercase tracking-wider text-cream transition hover:border-cream hover:bg-cream/10"
            >
              Pedir / Retirar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
