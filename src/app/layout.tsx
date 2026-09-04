import type { Metadata } from "next";
import { Bebas_Neue, Anton, Oswald, Inter } from "next/font/google";
import "./globals.css";
import { openingHoursSpecification, site } from "@/lib/site";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["500", "600"],
  subsets: ["latin"],
});

const title = "Maria Parrilla Steakhouse | Gastronomia em Brasa em Jardim Camburi, Vitória/ES";
const description =
  "Restaurante parrilla em Jardim Camburi, Vitória/ES. Carnes na brasa com criatividade autoral e ingredientes amazônicos e capixabas, como tucupi, queijo do Marajó e castanha-do-Pará.";

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title,
  description,
  keywords: [
    "restaurante parrilla Vitória ES",
    "gastronomia em brasa Jardim Camburi",
    "churrasco Vitória",
    "carnes na brasa Espírito Santo",
    "Maria Parrilla Steakhouse",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
    images: [{ url: "/images/brand/logo.png", width: 1254, height: 1254, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/brand/logo.png"],
  },
  icons: {
    icon: "/images/brand/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: site.name,
  description: site.description,
  servesCuisine: ["Brasileira", "Churrasco", "Parrilla", "Contemporânea"],
  image: "/images/brand/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: `${site.address.neighborhood}, ${site.address.city}`,
    addressRegion: site.address.state,
    addressCountry: site.address.country,
  },
  openingHoursSpecification,
  sameAs: [site.links.instagram],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${bebasNeue.variable} ${anton.variable} ${oswald.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-ink font-body text-cream">{children}</body>
    </html>
  );
}
