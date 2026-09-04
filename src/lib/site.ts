export const site = {
  name: "Maria Parrilla Steakhouse",
  shortName: "Maria Parrilla",
  tagline: "Gastronomia Afetiva",
  // Placeholder pré-deploy — troca pro domínio real assim que a Vercel
  // gerar a URL definitiva no primeiro deploy (usado só em
  // metadataBase, pra resolver URLs relativas de Open Graph/Twitter
  // Card; não afeta nenhum link visível no site).
  siteUrl: "https://maria-parrila.vercel.app",
  description:
    "Gastronomia em brasa em Jardim Camburi, Vitória/ES. Carnes preparadas na parrilla com criatividade autoral e ingredientes amazônicos e capixabas.",
  address: {
    street: "Av. Eurico Rezende, 135",
    neighborhood: "Jardim Camburi",
    city: "Vitória",
    state: "ES",
    stateFull: "Espírito Santo",
    country: "BR",
    full: "Av. Eurico Rezende, 135, Jardim Camburi, Vitória/ES",
  },
  mapsEmbedSrc:
    "https://maps.google.com/maps?q=Av.+Eurico+Rezende,+135,+Jardim+Camburi,+Vit%C3%B3ria+-+ES&output=embed",
  mapsLinkSrc:
    "https://www.google.com/maps/search/?api=1&query=Av.+Eurico+Rezende%2C+135%2C+Jardim+Camburi%2C+Vit%C3%B3ria+-+ES",
  hours: [
    { days: "Segunda", hours: "Fechado" },
    { days: "Terça a quinta", hours: "17h às 22h30" },
    { days: "Sexta e sábado", hours: "17h às 23h30" },
    { days: "Domingo", hours: "11h às 17h" },
  ],
  hoursShort: "Ter–Dom, a partir das 17h (dom. desde as 11h)",
  links: {
    order: "https://pedido.takeat.app/mariaparrilla",
    ifood:
      "https://ifood.com.br/delivery/vitoria-es/maria-parrilla-jardim-camburi/c9ab8d6f-6560-4d48-acd6-440ca881930f",
    // Confirmado: @mariaparrillasteakhouse é o handle correto (corrige a
    // referência anterior a @mariaparrillafoodtruck).
    instagram: "https://www.instagram.com/mariaparrillasteakhouse/",
  },
} as const;

export const openingHoursSpecification = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Tuesday", "Wednesday", "Thursday"],
    opens: "17:00",
    closes: "22:30",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Friday", "Saturday"],
    opens: "17:00",
    closes: "23:30",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Sunday",
    opens: "11:00",
    closes: "17:00",
  },
];
