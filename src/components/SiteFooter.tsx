import { TexturedHeading } from "./TexturedHeading";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-grain relative overflow-hidden bg-ink">
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 text-center sm:px-10 sm:py-28">
        <TexturedHeading
          as="h2"
          level={2}
          rotate={-1.5}
          className="font-display text-5xl uppercase tracking-tight text-gold sm:text-7xl"
        >
          Bora pra brasa?
        </TexturedHeading>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={site.links.ifood}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-flame px-8 py-3 font-condensed text-sm font-semibold uppercase tracking-wider text-cream shadow-lg shadow-flame/30 transition hover:bg-ember"
          >
            Pedir no iFood
          </a>
          <a
            href={site.links.order}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gold/60 px-8 py-3 font-condensed text-sm font-semibold uppercase tracking-wider text-cream transition hover:border-gold hover:bg-gold/10"
          >
            Pedir / retirar
          </a>
        </div>

        <div className="mx-auto mt-16 flex max-w-2xl flex-col items-center gap-6 border-t border-ink-line pt-10 sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-condensed text-base text-cream">{site.address.full}</p>
            <p className="font-condensed text-sm text-cream-dim">{site.hoursShort}</p>
          </div>

          <div className="flex items-center gap-2 font-condensed text-sm uppercase tracking-wider">
            <a
              href={site.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream-dim underline decoration-cream-dim/40 underline-offset-4 hover:text-gold"
            >
              Instagram
            </a>
          </div>
        </div>

        <p className="mt-10 font-condensed text-xs uppercase tracking-[0.3em] text-cream-dim/60">
          {site.tagline} · {site.name}
        </p>
      </div>
    </footer>
  );
}
