# Maria Parrilla Steakhouse — Landing Page de Apresentação

## Objetivo da página
Landing page de DESCOBERTA, não de pedido/cardápio. Público-alvo: gente
que nunca ouviu falar da marca, chegando via busca no Google ou
compartilhamento social. Objetivo: gerar desejo visual + confiança
suficiente para clicar em "pedir" ou decidir visitar presencialmente.
Não exibir preços em destaque nem lista tipo cardápio.

## Sobre a marca
Maria Parrilla é um food truck/restaurante de "gastronomia em brasa" em
Jardim Camburi, Vitória/ES. Carnes preparadas na parrilla, misturando
tradição do churrasco com combinações autorais que unem ingredientes
amazônicos (Pará) e capixabas — tucupi, queijo do Marajó, castanha-do-
Pará, banana-da-terra — com referências de outras regiões e culturas.

Posicionamento: PARRILLA + CARNES + CRIATIVIDADE + INGREDIENTES
REGIONAIS. Não é churrascaria tradicional nem hamburgueria comum —
é gastronomia brasileira contemporânea contada através da parrilla.

Tagline real da marca (confirmada via Instagram oficial): "Gastronomia
Afetiva" — usar como elemento de identidade, ex: próximo ao logo ou
como assinatura de rodapé.

## Nossa História (fonte: Instagram oficial, destaque "Nossa história"
## + material fornecido pelo cliente — nada abaixo é inventado)

A marca nasceu em Belém do Pará. A bandeira do Pará na porta da loja
não é só decoração — tem significado explicado pela própria marca:
"A estrela solitária representa o Pará, o único estado brasileiro
acima da linha do Equador... nossa bandeira na porta é um pedacinho
das nossas raízes." Hoje a casa está em Jardim Camburi, Vitória/ES,
com a mesma essência.

Selo de credibilidade (confirmado via story de 27/07/2025): reconhecida
pelo Sebrae como "Empresa Destaque" no programa ALI Produtividade,
entre 37 selecionadas de mais de 200 participantes. Usar de forma
DISCRETA (rodapé ou próximo ao "Sobre") — nunca como banner grande,
foge do tom descontraído/rua da marca.

Origem do nome (CONFIRMADO — fonte: post oficial do Instagram
@mariaparrillasteakhouse de 27/05/2025): "Maria Parrilla" é uma
homenagem dupla — à Maria Fumaça, a antiga locomotiva que estampa a
identidade visual da marca (símbolo de movimento, força e mudança), e
às primeiras mulheres que ocuparam espaços de trabalho com coragem,
abrindo novos caminhos. Usar esse fato ao reescrever/expandir copy da
seção "Sobre" no futuro — não é apenas um nome de fantasia.

Copy atual da seção "Sobre" (implementada em `About.tsx`, texto real
publicado, não rascunho):
"Tudo começou em Belém do Pará, terra da estrela solitária que
carregamos até hoje na porta da casa: a bandeira do Pará, um
pedacinho das nossas raízes. Da parrilla paraense para a brisa
capixaba, a essência permanece a mesma: carnes na brasa, criatividade
sem fronteiras, e uma certeza: aqui, gastronomia é afeto.

O nome também é uma homenagem: Maria Parrilla se inspira na Maria
Fumaça, a antiga locomotiva que ainda hoje estampa nossa identidade,
símbolo de movimento, força e mudança. É um tributo às primeiras
mulheres que, com coragem, ocuparam espaços de trabalho e abriram
novos caminhos. Por isso, mais do que um restaurante, somos memória,
afeto e história contadas pela brasa.

Hoje, em Jardim Camburi, Vitória/ES, seguimos misturando sabores da
Amazônia, como tucupi, queijo do Marajó e castanha-do-Pará, com o
litoral capixaba, criação após criação."

Ano de fundação: 2019 [CONFIRMADO — fonte: cliente, arte oficial da
marca ("DESDE 2019"). Nota: o texto não é visível no arquivo de logo
atualmente em /public/images/brand/logo.png — se for usar "desde 2019"
como copy na página, confirmar contra a versão de logo/arte que
efetivamente traz esse texto antes de publicar].

[A CONFIRMAR — não usar como fato até validar com a chef: motivo
específico da mudança para o ES, background profissional da chef
Natália Ferreguete (@natiferreguete)]

## Identidade visual
- Mascote: "Maria", mulher segurando a parrilla, emblema circular
- Tom visual: rústico, artesanal, "gastronomia em brasa"
- Fotografia como protagonista visual — pratos em close, brasa, ambiente
- Logo e fachada em /referencia/marca; versão final sem fundo em
  /public/images/brand/logo.png

### Paleta oficial (v2 — confirmada contra os pixels de logo.png)
- Laranja primário/queimado `--color-orange` #C43A24 — cor DOMINANTE
  das seções laranja (nunca usar outra cor fora desta paleta ali, ex.:
  verde).
- Laranja secundário/vivo `--color-orange-bright` #F87000 — em Sobre e
  Localização, só como variação/acento sutil DENTRO da seção (glow
  radial), nunca como preenchimento inteiro. EXCEÇÃO deliberada: no
  Hero, é a cor DOMINANTE de um dos dois slides (Estação Belém),
  contra `--color-orange` no outro (Filé) — decisão v3, ver seção Hero
  para o porquê (fundo chapado como nos posts reais, sem gradiente).
- Preto `--color-ink` #0b0705 — moldura fixa (header, barra de
  utilidade) e cor de fundo das seções pretas; dobra como cor de TEXTO
  nas seções laranja (ver abaixo).
- `--color-flame` #e8321a / `--color-ember` #ff6a1a — família do
  VERMELHO do CTA, distinta do laranja de seção; o CTA "Pedir no
  iFood" permanece vermelho, nunca vira laranja.
- `--color-gold` #ffb648 / `--color-cream` #fbead2 + `--color-cream-dim`
  — inalterados, usados sobre fundo preto (ver hierarquia abaixo).

Ritmo de cor por seção (preto/laranja alternado, estilo feed do
Instagram — evita a página inteira em laranja contínuo):
1. Header + barra de utilidade (hero): PRETO — moldura fixa, sempre
   igual, independente do slide do hero.
2. Hero: LARANJA — fundo CHAPADO/sólido (não gradiente esfumaçado, como
   nos posts reais da marca), `#C43A24` no slide do Filé, `#F87000` no
   da Estação Belém — mais vinheta preta radial LOCALIZADA atrás do
   produto (não da seção inteira), para separação do fundo. Ver seção
   Hero abaixo para o detalhe completo.
3. Sobre + fachada: LARANJA — forma um bloco visual único com o Hero.
4. Vitrine de criações: PRETO — respiro entre os dois blocos laranja.
5. Localização: LARANJA — retoma o ritmo.
6. CTA final + Rodapé: PRETO — fecha a página simetricamente com o
   header.

Regra de texto por fundo: sobre PRETO, texto em creme/dourado (como
já era). Sobre LARANJA, texto em `--color-ink` (preto/quase-preto) —
é o único jeito de manter contraste aceitável contra esse laranja
específico (mesmo preto puro só alcança ~4:1 de contraste contra
#C43A24, já que o laranja não é claro o suficiente para mais — por
isso a hierarquia dentro de seções laranja usa peso/tamanho
tipográfico para diferenciar texto primário de secundário, não
opacidade de cor, que reduziria ainda mais o contraste já apertado).

Badges e botões sobre fundo laranja: qualquer chip/badge precisa de
fundo `bg-ink` SÓLIDO (não translúcido — `bg-ink/70` some contra o
laranja) para não sumir; foi o caso corrigido nos badges fixos do
hero ("Na brasa", "Parrilla") e nos badges interativos por produto. O
CTA principal ("Pedir no iFood") ganhou `border-2 border-ink` — mantém
o vermelho, só adiciona separação do laranja ao redor.

Textura distressed (componente `<TexturedHeading>`) — blend mode é
`luminosity`, não multiply/screen: por spec, `luminosity` usa o
matiz+saturação da cor de fundo (a cor da marca) e só impõe a
luminosidade da camada de cima (o ruído) — o grão NUNCA pode desviar o
matiz do texto, só clareia/escurece pontualmente. Isso corrigiu um bug
real: com multiply, "MARIA PARRILLA" (creme) saía cinza/prateado,
porque escurecer uma cor de saturação muito baixa o bastante sempre
tende a cinza neutro, seja qual for o blend mode — não é só uma
questão de matiz. Por isso existe também a prop `intensity` (0-1,
multiplica a opacidade padrão do nível): cores muito claras/pouco
saturadas (creme) precisam de intensity baixa (usado 0.35 em "Maria
Parrilla") para não escurecer demais e ficar acinzentado; cores mais
saturadas (dourado) seguram bem a intensidade padrão (intensity=1,
usado em "Steakhouse") porque não desaturam tão rápido. A prop `dark`
(grão branco em vez de preto, para texto escuro sobre fundo laranja —
"Nossa história", "Onde estamos") continua a mesma lógica.

## Identidade Tipográfica
Estética de pôster vintage brasileiro / cartaz de rua — NÃO deve
parecer restaurante gourmet sofisticado. Transmitir: cultura popular,
festa, rua, música, energia, identidade regional. Evitar: fontes
serifadas elegantes, estética minimalista/Apple, template SaaS.

Fontes (via next/font/google — self-hosted, sem custo de licença;
decisão tomada: Opção B, sem comprar licença web da Boycott):
- Display/título: Bebas Neue (fallback: Anton, depois Oswald)
- Secundário condensado: Oswald (peso 600/700)
- Corpo/informações pequenas: Inter (peso 500/600)

Hierarquia:
1. Títulos principais — Bebas Neue, caixa alta, tracking levemente
   negativo, tamanho grande, COM textura distressed sutil (componente
   <TexturedHeading>).
2. Palavra de destaque (hero) — mesma fonte, escala muito maior,
   quase ilustração. Cores: amarelo/dourado, creme, vermelho, laranja.
   NUNCA substitui o H1 semântico real (indexável pelo Google).
3. Textos secundários — Oswald, condensada, pesada, textura sutil ou
   nenhuma.
4. Informações pequenas (endereço, corpo de texto) — Inter, sem
   textura, alta legibilidade.

Implementação da textura: aplicar via CSS/SVG filter (feTurbulence)
ou grão em mix-blend-mode: multiply, reutilizando o mesmo componente
em toda a página. Nível 1 (títulos): sutil, mantém legibilidade
perfeita. Nível 2 (palavra de destaque no hero): mais forte, pode
ganhar leve rotação, como recorte de pôster.

### Padronização dos títulos de seção no nível 2 (revisão)
A regra acima (nível 1 para títulos, nível 2 só para a palavra de
destaque do Hero) foi a intenção original, mas na prática o CTA final
"Bora pra brasa?" (SiteFooter.tsx) já tinha sido implementado com
`level={2}` + `rotate={-1.5}` — mais pesado que os demais títulos de
seção, que ainda usavam `level={1}` sem rotação (Nossa História,
Vitrine de criações, Onde estamos). Decisão explícita do cliente:
usar "Bora pra brasa?" como fonte da verdade e padronizar TODOS os
títulos de seção de mesmo nível hierárquico (`h2`) para `level={2}` +
`rotate={-1.5}`, mantendo apenas tamanho de fonte e `color`/`dark`
calibrados individualmente por seção (já eram, cada `TexturedHeading`
já ajusta `color`/`dark` conforme o fundo). Ou seja: esta nota supera
o texto acima — nível 2 deixou de ser exclusivo da palavra de destaque
do Hero, agora é o tratamento padrão de qualquer heading de seção.

Achado ao aplicar: nível 2 tem grão mais pesado (`baseFrequency: 0.7,
opacity: 0.55` vs nível 1's `0.85/0.35`, ver `TexturedHeading.tsx`) —
em cores de saturação baixa isso pode acinzentar o texto (mesmo
problema já documentado e resolvido no Hero, ver "Textura distressed"
acima). A "Vitrine de criações" usa `color` padrão (creme, pálido) e
precisou do mesmo ajuste do Hero: `intensity={0.35}`. "Nossa história"
e "Onde estamos" usam `color="var(--color-ink)"` + `dark` (ink é bem
saturado/escuro, não precisou de `intensity` reduzida). "Bora pra
brasa?" (a fonte da verdade) também não usa `intensity` — seu `color`
default é creme, mas por estar em `text-5xl`/`sm:text-7xl` (bem maior
que os títulos de seção, `text-4xl`/`sm:text-5xl`) o efeito de
acinzentamento é menos perceptível em glifos grandes; mesmo assim,
verificado visualmente que não precisou de correção ali.

## Localização e horário
Av. Eurico Rezende, 135 — Jardim Camburi, Vitória/ES [CONFIRMADO —
fonte: cliente, corrigindo resultado de busca desatualizado]
Segunda: fechado | Terça a quinta: 17h-22h30
Sexta e sábado: 17h-23h30 | Domingo: 11h-17h

## Links
- Pedido/retirada: https://pedido.takeat.app/mariaparrilla
- iFood: https://ifood.com.br/delivery/vitoria-es/maria-parrilla-jardim-camburi/c9ab8d6f-6560-4d48-acd6-440ca881930f
- Instagram: @mariaparrillasteakhouse [CONFIRMADO pelo cliente — handle
  correto, substitui a referência anterior a @mariaparrillafoodtruck
  onde o conteúdo oficial (stories "Nossa história", selo Sebrae) havia
  sido encontrado durante a pesquisa inicial]

## Pendências pré-deploy resolvidas
Rodada dedicada a limpar 3 itens sinalizados antes do primeiro deploy
em produção:

1. **`metadataBase`**: o `next build` emitia aviso usando
   `http://localhost:3000` como fallback (nenhum valor configurado).
   Adicionado `site.siteUrl` em `site.ts` (placeholder
   `https://maria-parrila.vercel.app`, com comentário explícito
   marcando que precisa ser trocado pro domínio real assim que a
   Vercel gerar a URL definitiva no primeiro deploy) e referenciado em
   `layout.tsx` via `metadataBase: new URL(site.siteUrl)`. Confirmado
   via `next build` que o aviso não aparece mais.

2. **Handle do Instagram**: já estava correto no código antes desta
   rodada — `site.links.instagram` (`SiteFooter.tsx`) já apontava para
   `@mariaparrillasteakhouse`, com um comentário já documentando a
   correção antiga (`@mariaparrillafoodtruck` só sobrevive num
   comentário histórico em `site.ts`, nunca num link ativo). Confirmado
   via busca em todo `src/` (zero ocorrências de `mariaparrillafoodtruck`
   fora de comentário) e via `getAttribute("href")` no link real
   renderizado — nenhuma alteração de código foi necessária, só a
   confirmação pedida.

3. **`moldura.png`**: confirmado via busca em todo `src/` que não havia
   mais nenhum `<Image src=".../moldura.png">` nem import — só
   aparecia em comentários explicando o histórico (o sistema de
   overlay via código foi substituído por fotos com moldura floral já
   integrada no próprio arquivo, ver "Foto principal — moldura passou a
   vir integrada no arquivo" mais abaixo). Removido
   `public/images/sobre/moldura.png`; `next build` limpo depois da
   remoção confirma que nada dependia dele.

Validação: `next build` sem o aviso de `metadataBase`; `next lint`
limpo; screenshot do link "Instagram" no rodapé; stress test do
carrossel do Hero sem regressão (confirma que a remoção do arquivo não
quebrou nada em runtime, não só no build).

## Vitrine de criações (NÃO é cardápio — sem preços)
Fotos em /referencia/cardapio-destaque. Apresentar como "criações"
com 1-2 frases de storytelling cada:
1. Filé — rosbife de filé-mignon na parrilla, queijo cremoso do
   Marajó, tomate grelhado, chutney de manga, chimichurri
2. Estação Marajoara — Black Angus, queijo coalho do Marajó, bacon
   caramelizado com castanha-do-Pará — homenagem à Amazônia
3. Estação 2 — CONFIRMADO: "Blend suculento 180g black angus, coberto
   com mussarela de búfala, tomate grelhado, rúcula e chimichurri
   artesanal, no pão brioche australiano. Um hambúrguer leve, fresco e
   cheio de personalidade."
4. Picanha — CONFIRMADO: "O queridinho da casa: tiras de picanha na
   brasa (150g), queijo mussarela derretido, vinagrete, tudo no nosso
   pão de alho artesanal de 17cm que é puro segredo e sabor!"

Abaixo dos 4 cards, CTA "Ver cardápio completo" com dois botões: um
para o iFood (`site.links.ifood`) e um "Pedir / Retirar" para
`site.links.order` (https://pedido.takeat.app/mariaparrilla, URL
limpa, sem parâmetros de rastreamento) — mesmos links já usados no
Hero e no rodapé, reaproveitados via `site.ts`, sem duplicar lógica.

## Seção Sobre — composição editorial (colagem)
Reformulação completa: a versão anterior (foto única da fachada numa
coluna, ao lado do texto) foi substituída por uma composição tipo
colagem editorial. Texto direto sobre o laranja (sem card branco).
Corrigida numa segunda rodada logo em seguida (ver "Correção" abaixo)
— o texto desta seção já reflete o estado corrigido/final, não a
primeira versão.

Fotos em `/public/images/sobre/` (copiadas de `/referencia/Sobre/`,
mesmo padrão dos demais assets de produção). Trocadas numa rodada
posterior (ver "Ajustes seguintes" abaixo) para fotos da chef Natália
Ferreguete — os nomes de arquivo abaixo já são os atuais:
- `foto-principal-punho-erguido.png` — foto principal, maior destaque,
  `object-cover` dentro de `rounded-2xl border border-ink`, SEM
  filtro/textura (cores e qualidade originais).
- `foto-secundaria-embalagem-dupla.png` — menor (`w-[58%]` do
  contêiner da foto principal), posicionada `absolute` deslocada
  para baixo-direita e rotacionada (`rotate-6`), como um recorte de
  colagem — não alinhada como uma segunda coluna.
- `moldura.png` — moldura floral/tropical, aplicada nas DUAS fotos
  (ver "Correção" abaixo — na primeira versão só a foto secundária
  tinha moldura). Verificado via `sharp` que o PNG tem canal alpha
  real (`colorType: 6`, RGBA): o centro é totalmente transparente
  (alpha 0) e os elementos florais se concentram nos cantos/bordas,
  com bastante área transparente entre eles — por isso o asset já
  produz o efeito "irregular, elementos saindo dos cantos" pedido,
  sem precisar recortar/editar a imagem. Implementada como uma
  segunda `<Image>` posicionada `absolute` (maior que a própria foto,
  para as pontas florais ultrapassarem a borda) com `object-contain`.
  Cada aplicação varia escala/inset e a da foto principal é espelhada
  (`scale-x-[-1]`) com rotação própria mais sutil (`rotate-1`) —
  diferente da foto secundária (sem espelhamento, herda o `rotate-6`
  do próprio wrapper da foto) — para não ler como dois cards
  clonados.
- Badge "Belém do Pará → Vitória/ES" no canto superior direito da
  foto principal (`-top-3 right-2`) — reposicionado na correção porque
  o canto superior esquerdo passou a ter a moldura da própria foto
  principal ali (antes só a foto secundária tinha moldura, então o
  canto esquerdo da principal ficava livre).

Título ("Nossa história"): usa `TexturedHeading` nível 2 (mesmo
componente de "Bora pra brasa?", ver "Padronização dos títulos de
seção" acima) — nunca foi uma implementação separada, mas a primeira
versão desta reformulação usava `color="var(--color-ink)"` + `dark`
(herdado do padrão das outras seções laranja) e ficou fraca demais
visualmente ao lado das fotos grandes e coloridas. Corrigido para
`color="var(--color-gold)"`, sem `dark`, tamanho `text-5xl sm:text-6xl`
(subiu de `text-4xl sm:text-5xl` — ver "Correção" abaixo para o porquê
de ser maior que os outros títulos de seção, não igual).

Responsivo: abaixo do breakpoint `lg` (1024px), a coluna de fotos
muda de ordem para depois do texto (`order-2 lg:order-1` no bloco de
fotos) — mas a composição interna (foto principal + secundária
deslocada/rotacionada + moldura) usa unidades relativas ao próprio
contêiner (`%`, `inset`), então a colagem se mantém coerente e
proporcional em qualquer largura, sem precisar de breakpoints extras
dedicados só a isso. Testado em 375/768/1440px.

### Ilustração divisora entre Sobre e Vitrine
Componente `SobreDivider.tsx`, renderizado em `page.tsx` entre
`<About />` e `<Showcase />`, usando
`/public/images/ilustracao-floresta-divisor.png` (copiada de
`/referencia/marca/`, versão SEM o selo "Maria Parrilla · Desde
2019"). Nota: uma busca em todo o projeto não encontrou nenhuma
ilustração divisora previamente implementada em código antes da
reformulação original — implementado como elemento novo a partir da
descrição, mesmo caso do mockup do Hero não encontrado numa rodada
anterior.

Corrigido numa segunda rodada (ver "Correção" abaixo): a primeira
versão usava altura fixa (`h-32 sm:h-48 lg:h-64`) + `object-cover
object-bottom`, que CORTAVA a arte (só a parte de baixo aparecia). A
versão corrigida usa `width`/`height` (não `fill`) com `h-auto w-full`
— a altura do contêiner passa a ser puramente a proporção intrínseca
da imagem (1672×941) na largura de 100%, então a imagem inteira
sempre aparece, sem crop e sem distorção. Isso deixa a faixa bem mais
alta (na faixa de ~800px em 1440px de largura) do que a versão
anterior — intencional, conforme pedido explicitamente ("se isso
deixar a seção mais alta, está correto").

### Correção — 4 problemas da reformulação original
Reportados numa rodada seguinte à reformulação, todos corrigidos no
mesmo `About.tsx`/`SobreDivider.tsx` (não criada nenhuma solução
paralela):

1. **Ilustração cortada**: root cause documentado acima
   (`object-cover` + altura fixa). Corrigido trocando para `h-auto
   w-full` com `width`/`height` intrínsecos — nunca mais corta,
   qualquer altura extra é preenchida com `bg-orange-sobre` (mesma cor
   do céu da ilustração, ver item 2), nunca cortando a arte.

2. **Continuidade de cor Sobre↔ilustração**: medido via `sharp`
   (média de uma linha inteira de pixels no topo da ilustração) que o
   céu da arte é `#e7560b` — diferente do `--color-orange` (`#c43a24`)
   usado no Hero e, até esta correção, também no fundo da seção Sobre.
   Também não bate com `--color-orange-bright` (`#f87000`), o outro
   tom já definido na paleta. Como o pedido priorizou explicitamente
   a continuidade COM A ILUSTRAÇÃO sobre manter a mesma cor do Hero,
   foi criado um novo token `--color-orange-sobre: #e7560b` (só em
   `globals.css`, `:root` + `@theme inline`, mesmo padrão dos outros
   tokens de cor) e a seção Sobre passou a usar `bg-orange-sobre` em
   vez de `bg-orange`. Efeito colateral relatado explicitamente
   (não decidido em silêncio): Hero e Sobre, que antes compartilhavam
   exatamente `--color-orange` e liam como um bloco único sem costura
   (ver nota correspondente na seção do Hero), agora têm uma leve
   diferença de tom entre si — a costura que sumiu foi a de
   Sobre↔ilustração, à custa de introduzir uma (mais sutil) entre
   Hero↔Sobre. O Hero em si não foi tocado nesta rodada.

3. **Moldura só numa foto**: não era um bug — era a instrução
   explícita da reformulação original ("aplicar SOMENTE ao redor da
   foto secundária"). Corrigido aplicando também na foto principal,
   com variação (espelhamento + rotação própria) para não ficar
   clonado — ver detalhes na composição acima.

4. **Título fraco/bege**: o componente já era o correto
   (`TexturedHeading` nível 2, mesmo de "Bora pra brasa?") — o
   problema era a escolha de cor (`ink` com grão branco, herdada do
   padrão de outras seções laranja) somada ao tamanho igual aos
   títulos "menores" (Localização, Vitrine), que ficou fraco ao lado
   da colagem de fotos grandes. Trocado para dourado + tamanho maior
   (`text-5xl sm:text-6xl`, entre o padrão de seção de 48px e o CTA
   final de 72px). Achado ao trocar: dourado sobre `--color-orange-
   sobre` mede só **~2,1:1 de contraste** (WCAG pede ≥3:1 para texto
   grande) — pior até que dourado sobre o laranja antigo (~3,0:1,
   já no limite). Esse é o motivo documentado (ver "Regra de texto por
   fundo" na paleta oficial) de o projeto usar `ink` como texto padrão
   sobre laranja, não dourado. Como a cor dourada foi pedido explícito
   desta correção, mantida, mas com um contorno fino em `ink`
   (`filter` com 4 `drop-shadow` empilhados, ±1px em cada direção,
   aplicado num `<div>` ao redor do `TexturedHeading` — não alterado o
   componente em si, que é usado em várias outras seções) — mesmo
   princípio já usado nos badges do projeto (fundo/contorno sólido
   para não sumir sobre o laranja), preservando legibilidade pela
   borda das letras mesmo com preenchimento de baixo contraste.

Validação: screenshot full-page em 1440px confirmando a ilustração
inteira visível (céu, personagens, trem, pássaro, montanhas, nuvens,
vegetação, base) sem corte em nenhuma borda; zero costura perceptível
entre o fundo da seção Sobre e o topo da ilustração; as duas fotos
com moldura visivelmente diferentes entre si (espelhamento + rotação);
título maior, dourado, com contorno legível, mesma textura de "Bora
pra brasa?"; repetido em 375px (mobile) com os mesmos resultados;
`next build` e `next lint` limpos.

### Ajustes seguintes — textura de fundo, novas fotos, novo texto
Três mudanças na mesma rodada, tratadas juntas por mexerem todas em
`About.tsx`.

**Textura do fundo laranja**: antes era `bg-orange-sobre` chapado.
Pedido era reproduzir a granulação/ruído de impressão real da
ilustração, não sintetizar ruído genérico. Processo: recortada via
`sharp` uma amostra 700×400px de uma área limpa do céu da ilustração
(sem nuvens/pássaro/torres — testadas 3 áreas candidatas, escolhida a
mais uniforme), salva como `/public/images/sobre/textura-fundo-
sobre.webp` (~56KB, qualidade 92). Aplicada via `style` inline no
`<section>` (`backgroundImage` + `backgroundRepeat: repeat`, mesmo
padrão já usado em `Location.tsx` para o gradiente radial daquela
seção) — CSS puro, não Tailwind, porque a técnica de tile pede um
`background-image` de imagem real, não um utilitário de cor. Testada
a repetição isoladamente (página HTML de teste, tile 700×400 renderi-
zado em grade 1440×1200) antes de aplicar: zoom na costura exata entre
tiles não mostra linha de emenda perceptível — o grão é fino/alta-
frequência o bastante (não tem blotches grandes de baixa frequência)
para a repetição não formar padrão óbvio, como o pedido já antecipava.
`ilustracao-floresta-divisor.png` não foi tocada (conferido por
checksum MD5 antes/depois — idêntico ao arquivo em `/referencia/marca/`).

**Fotos trocadas**: `foto-principal-bone-vermelho.png` /
`foto-secundaria-picanha-sorriso.png` (removidas de `/public/images/
sobre/`) substituídas por `foto-principal-punho-erguido.png` /
`foto-secundaria-embalagem-dupla.png` (fotos da chef Natália
Ferreguete). Nota: o pedido descrevia os arquivos de origem como
`.jpg`, mas os arquivos reais em `/referencia/Sobre/` são `.png` —
copiados com a extensão real, mesmo padrão de outras rodadas onde a
referência textual não bateu 100% com o que estava no disco (ex.:
mockup do Hero, ilustração divisora).

Recalibração manual (não reaproveitado crop/rotação das fotos
antigas, conforme pedido): a foto principal nova tem proporção quase
quadrada (1313×1198, ~1,10) bem diferente da secundária antiga
(que era ~4:5 = 0,8, a mesma proporção do contêiner). Mantido o
contêiner em `aspect-[4/5]` (consistência com o resto da colagem), mas
ajustado `object-[38%_22%]` (em vez do `object-cover` centralizado
padrão) para manter tanto o punho erguido (canto superior esquerdo da
foto original) quanto o rosto sorridente dentro do corte — verificado
via screenshot ampliado que os dois elementos aparecem claramente. A
foto secundária nova (1111×1416, ~0,785, já próxima de 4:5) precisou
só de `object-top` para manter os dois rostos e a embalagem no corte
sem cortar peito/braços demais nas laterais. Moldura floral mantida
nas duas fotos (técnica e variação já documentadas acima) — as `src`
mudaram; a lógica de POSICIONAMENTO da moldura em si tinha um bug
latente que só apareceu depois (ver "Correção de alinhamento da
moldura" abaixo), não relacionado à troca de foto.

**Texto "Nossa história"**: adicionado um parágrafo entre o parágrafo
de origem (Belém do Pará) e o de atualidade (Jardim Camburi),
contando a origem do nome da marca — inspiração na locomotiva "Maria
Fumaça" (que estampa a identidade visual da marca) e homenagem às
mulheres pioneiras que ocuparam espaços de trabalho. Fonte: post
oficial do Instagram @mariaparrillasteakhouse de 27/05/2025 — reescrito
no tom do site (não copiado literalmente do post). Os travessões "—"
do texto fornecido foram convertidos para vírgulas, mesmo padrão de
remoção de travessões já aplicado ao restante do texto renderizado do
site numa rodada anterior. Testado que o parágrafo extra não quebra o
layout em nenhum dos 3 breakpoints de referência.

Validação: screenshot da seção completa em 1440px e 375px confirmando
fundo com granulação visível e sem costura com a ilustração, as duas
novas fotos bem enquadradas (punho + rosto na principal; os dois
rostos + embalagem na secundária) com moldura variada entre si, texto
novo (3 parágrafos) renderizando sem quebra estranha; checksum MD5 da
ilustração confirmando arquivo inalterado; `next build` e `next lint`
limpos.

### Correção de alinhamento da moldura
Reportado numa rodada seguinte: moldura e foto desencaixando nas duas
fotos. Causa raiz: `moldura.png` não tem uma "janela" retangular fixa
(confirmado via varredura de alpha com `sharp` — o design é irregular
de propósito, flores só nos cantos ligadas por vinhas finas, sem
janela central definida), então o alinhamento correto depende só de
a moldura ocupar a MESMA caixa que a foto, escalada de forma
uniforme — e a implementação anterior não garantia isso. Ela usava
`-inset-Npx` (valor FIXO em pixels, diferente por breakpoint) somado
a `calc(100% + 2×N)`: como a caixa da foto (`aspect-[4/5]`) tem
largura real em pixels que varia CONTINUAMENTE com a viewport (não só
nos breakpoints), um inset em px representa uma fração diferente da
caixa a cada largura — o alinhamento só "batia" por coincidência
perto dos 3 breakpoints testados na rodada anterior, e desalinhava em
qualquer largura intermediária. Também distorcia a proporção da
caixa da moldura (px fixo somado a uma caixa não-quadrada muda a
razão largura/altura), então mesmo dentro de um breakpoint o
`object-contain` centralizava a moldura de forma desigual entre os
eixos.

Corrigido trocando para `fill` (a moldura passa a ocupar exatamente a
mesma caixa da foto, por ser irmã do wrapper interno da foto dentro
do mesmo pai `relative`) + `object-contain` (encaixe proporcional,
escala-invariante) + `transform: scale(N)` para o "vazamento" das
flores para fora da foto — `scale()` é um multiplicador da caixa já
corretamente ajustada, não um valor fixo em px, então o alinhamento
se mantém em QUALQUER largura de tela, não só nos breakpoints. Escala
diferente preservada entre as duas aplicações (`scale(-1.18, 1.18)`
espelhada + leve rotação na principal; `scale(1.3)` sem espelhar na
secundária, herdando o `rotate-6` do próprio wrapper da foto) — mesma
diferenciação de antes, só a base de cálculo do tamanho mudou.

Validação: screenshot das duas fotos com moldura em 4 larguras —
1440px, 890px, 620px e 375px, incluindo duas larguras
INTERMEDIÁRIAS (não coincidentes com nenhum breakpoint do Tailwind)
especificamente para confirmar que o alinhamento não depende mais de
estar exatamente num breakpoint testado; `next build` e `next lint`
limpos.

### Foto principal — moldura passou a vir integrada no arquivo
Rodada seguinte: a foto principal (`foto-principal-punho-erguido.png`
em `/public/images/sobre/`, mesmo nome de arquivo, só o CONTEÚDO foi
substituído) passou a vir com a moldura floral já pintada dentro da
própria imagem (1024×1536, mesma proporção de `moldura.png`, canal
alpha real confirmado via `sharp`), em vez de uma foto "crua" que
recebia a moldura via `<Image>` separada em código. A moldura por
código para esta foto foi REMOVIDA por completo (não só desativada) —
mantê-la ativa duplicaria a moldura visualmente. A foto secundária
continua com a técnica antiga (moldura.png aplicada via código,
`scale(1.3)`, herda `rotate-6` do wrapper) — intocada nesta rodada.

Contêiner trocado de `aspect-[4/5]` + `object-cover` (que cortava
uma fatia da foto para caber num box 4:5, adequado para a foto "crua"
antiga mas cortaria parte da moldura agora integrada) para a
proporção nativa do arquivo (`width={1024} height={1536}` +
`h-auto w-full`, sem `fill`/`object-cover`) — mostra a imagem
inteira, moldura incluída, sem cortar nada. Trocado também
`shadow-2xl` (box-shadow, que desenharia uma sombra retangular
descolada do contorno real, já que a arte tem cantos transparentes/
irregulares) por `drop-shadow-2xl` (segue a forma do alpha real da
imagem). Como a foto principal cresceu de aspecto 0,8 (4:5) para
0,667 (a proporção nativa, mais alta) na mesma largura, a coluna de
fotos ficou mais alta — a foto secundária (ancorada via
`-bottom-10`/`-right-2` etc., relativa ao wrapper da coluna) se
reposicionou automaticamente para baixo, sem precisar de ajuste
manual nos offsets; conferido via screenshot que a composição
continua equilibrada em 1440px e 375px.

Validação: screenshot da seção em 1440px e 375px confirmando moldura
única (sem duplicação) na foto principal, foto secundária inalterada
com sua própria moldura via código, transparência da nova imagem
renderizando limpa contra o fundo laranja (sem caixa branca/preta nos
cantos); `next build` e `next lint` limpos.

### Foto secundária — mesma migração para moldura integrada
Rodada seguinte: repetido para `foto-secundaria-embalagem-dupla.png`
(mesmo nome de arquivo, só o conteúdo trocado) o mesmo tratamento já
aplicado à principal — moldura floral pintada dentro do próprio
arquivo (1024×1536, canal alpha real). Removido o `<Image>` de
`moldura.png` que era aplicado via código sobre esta foto (`fill` +
`object-contain` + `scale(1.3)`), e removido também o wrapper interno
`aspect-[4/5] overflow-hidden rounded-xl border-2 border-cream
shadow-2xl` (mesmo motivo da principal: cortaria a moldura integrada,
e uma borda cream sólida ficaria redundante/destoante por cima de uma
moldura já pintada com bordas orgânicas). A imagem renderiza agora na
proporção nativa (`width={1024} height={1536}` + `h-auto w-full`,
`drop-shadow-2xl` em vez de `box-shadow`) — mesma técnica da
principal, ponto por ponto.

Preservado: o wrapper EXTERNO da foto secundária (`absolute
-bottom-10 -right-2 w-[58%] rotate-6 ...`), responsável pelo
deslocamento/rotação/escala que dá a sensação de colagem editorial em
relação à principal — como pedido explicitamente, essa variação
continua vindo só da POSIÇÃO do wrapper agora (antes vinha também de
uma escala própria da moldura via `scale()`; a escala do `w-[58%]`
sozinha já é suficiente para diferenciar do tamanho da principal).

**`moldura.png` sem uso no código**: confirmado via busca em `src/` —
depois desta rodada, o arquivo só aparece em comentários (histórico/
contexto), nenhum `<Image src="/images/sobre/moldura.png">` resta em
lugar nenhum do projeto. As DUAS fotos da seção Sobre agora usam
moldura integrada na própria imagem; o sistema de overlay por código
ficou sem consumidor. O arquivo `/public/images/sobre/moldura.png`
permanece no projeto sem uso — não foi excluído (não pedido, e pode
voltar a ser útil se uma futura foto "crua" precisar do tratamento
antigo).

Validação: screenshot da seção em 1440px e 375px confirmando moldura
única e limpa nas DUAS fotos (sem duplicação em nenhuma), boa
variação de colagem entre principal e secundária (tamanho + rotação),
transparência renderizando limpa contra o fundo laranja; `next build`
e `next lint` limpos. Nota de processo: o primeiro `next build` desta
rodada falhou com um erro de TypeScript em
`.next/dev/types/validator.ts` (arquivo autogerado, corrompido) —
causa raiz identificada como o dev server (`npm run dev`) ainda rodando
e escrevendo no mesmo diretório `.next` concorrentemente com o build;
resolvido matando os processos `node` antes de rodar `next build`
de novo, não relacionado a nenhuma mudança de código desta rodada.

### Espaço excessivo entre o conteúdo de Sobre e a ilustração
Reportado numa rodada seguinte: vão vazio grande demais entre o fim
do conteúdo de "Sobre" (fotos + texto + selo Sebrae) e a ilustração
da floresta. Medido via `getBoundingClientRect` (não estimado) antes
de qualquer mudança, seguindo o padrão já estabelecido neste projeto
de que esse tipo de bug costuma vir de um valor fixo desatualizado
após mudança de composição (mesma causa-raiz já vista na altura do
Hero e na ancoragem dos badges do lettering):

- Causa raiz encontrada: a coluna de fotos ficou bem mais alta numa
  rodada anterior (troca da foto principal para a versão com moldura
  integrada, que tem proporção nativa 0,667 em vez do antigo box
  4:5) — isso por si só é intencional e não foi alterado aqui. O
  problema é que `lg:items-center` no grid (`About.tsx`) centralizava
  verticalmente a coluna de TEXTO (bem mais curta) dentro da altura
  da LINHA do grid, que passou a ser definida pela coluna de fotos,
  agora bem mais alta. Isso empurrava ~30px de vão vazio extra abaixo
  do texto, somado ao padding-bottom uniforme da seção (`py-20 sm:
  py-28`, 112px em desktop) — total medido de 141,7px de vão do lado
  do texto em 1440px, contra só 42px do lado da foto (limitado pela
  sobra da foto secundária, posicionada via `-bottom-14` absoluto).
  Mobile/tablet (abaixo de `lg`, onde as colunas empilham em vez de
  ficar lado a lado) já media um vão correto de 31px — não precisou
  de ajuste, e não foi tocado.
- Corrigido com duas mudanças, ambas restritas a `lg:` (não afetam
  mobile/tablet):
  1. `lg:items-center` → `lg:items-end`: alinha o texto pela base da
     linha do grid em vez de centralizar, eliminando o offset de
     ~30px sem tocar na coluna de fotos.
  2. `py-20 sm:py-28` (uniforme topo+base) dividido em `pt-20 sm:
     pt-28` (inalterado — não mexe no espaço logo abaixo da chama
     divisora, que fica no topo da seção) + `pb-20 sm:pb-28 lg:pb-24`
     (só o padding-bottom reduzido, e só em desktop, de 112px para
     96px). Não deu pra reduzir mais: como a foto secundária já só
     tinha 42px de sobra ANTES do ajuste, cortar demais o
     padding-bottom arriscava esconder parte dela atrás do
     `overflow-hidden` da seção — 96px foi escolhido para deixar
     ~26px de sobra segura desse lado, calculado via medição real
     antes de aplicar (não por tentativa).
- Resultado medido depois do ajuste: vão do lado do texto caiu de
  141,7px para 96px (alinhado exatamente com `lg:pb-24`, já que sem a
  centralização o texto agora termina rente à borda da linha do
  grid); vão do lado da foto caiu de 42px para 26,4px (positivo,
  sem risco de corte).
- Nota importante sobre o que NÃO foi tocado: o vão visível "grande"
  que ainda aparece ao rolar até a ilustração (visível em screenshot)
  é, na maior parte, a margem de céu própria da PRÓPRIA ilustração
  (que continua 100% visível, sem corte, na proporção original —
  ver `SobreDivider.tsx`, intocado nesta rodada) — não é espaço vazio
  da seção Sobre. O ajuste desta rodada mexeu especificamente no
  trecho ANTES da ilustração começar (dentro da seção Sobre), que é
  o que estava fora do padrão.

Validação: `getBoundingClientRect` reconferido em 1440×900 confirmando
os números acima; screenshot de scroll completo (desktop 1440px e
mobile 375px) confirmando espaçamento equilibrado, sem vão excessivo
nem conteúdo espremido, foto secundária sem corte; divisória de fogo
entre Hero e Sobre (elemento overlay, `position:absolute`) confirmada
sem alteração — vive fora de `About.tsx`, esta mudança não a toca;
`next build` e `next lint` limpos.

### Vão vazio da própria ilustração — a causa apontada (mas não corrigida) na rodada anterior
Rodada seguinte, exatamente a causa já identificada e sinalizada como
"não tocada" na rodada acima ("a margem de céu própria da PRÓPRIA
ilustração... não é espaço vazio da seção Sobre"): o vão entre o fim
do conteúdo de "Sobre" e o início visível da ilustração continuava
grande demais. Desta vez, corrigido.

**Investigação obrigatória feita ANTES de mexer em qualquer código**
(mesma técnica já usada em `divisoria-chamas.png`/`divisoria-floral-
horizontal.png`, que tinham 70-73% de margem transparente morta):
medido `ilustracao-floresta-divisor.png` via `sharp`. Achado
importante, diferente dos outros dois assets: este arquivo NÃO TEM
canal alpha (`hasAlpha: false`) — não é margem TRANSPARENTE, é uma
margem OPACA (céu laranja sólido pintado até a borda do canvas), então
a técnica de bounding-box por alpha (que funcionou nos outros dois
assets) não detecta nada aqui (o "conteúdo" trivialmente preenche o
canvas inteiro, já que tudo é opaco). Trocado para análise de
VARIÂNCIA de cor por linha (`sharp` + cálculo de variância RGB por
linha, mesmo princípio já usado em outras análises deste projeto):
linhas 0-418 (de 941) mostram variância baixíssima e uniforme (~32-77,
o "chão de ruído" da própria textura de grão impressa no arquivo — não
confundir com conteúdo real), então a variância salta pra 134+ na
linha 419 e sobe rápido daí em diante (milhares de unidades) — essa é
a transição real de "céu vazio" para "cena ilustrada" (personagens,
trem, folhagem, pássaros, nuvens). Confirmado visualmente abrindo o
arquivo: o topo ~44% do canvas é de fato só céu laranja liso, sem
nenhum elemento ilustrado. Base do arquivo (linhas ~926-940)
reconferida com variância alta (milhares) até a última linha — sem
margem morta na base, só no topo.

**Descartada a hipótese de CSS/layout** (item 3 do pedido) antes de
decidir a correção: medido via `getBoundingClientRect` que o gap entre
o fim de `#sobre` e o início de `SobreDivider` é EXATAMENTE 0px — os
dois são irmãos diretos em `page.tsx`, sem margem entre eles (mesmo
padrão já documentado pros outros divisores do projeto, ver "Chama
divisora" e "Divisória floral" acima). Ou seja, 100% do vão vazio
reportado vinha do próprio arquivo de imagem, não de padding/margin/
altura de container — confirma a hipótese #2 do pedido, não a #3.

**Correção**: cortada a margem de céu vazio do arquivo (mesma técnica
já validada nos outros dois divisores do projeto) — `top=409` (~10px
de folga mantida acima da nuvem mais alta, pra não arriscar cortar
nenhum elemento sutil por uma margem de segurança curta demais),
`height=941-409=532`, largura mantida em 1672 (sem crop horizontal —
o conteúdo já toca as duas bordas laterais do canvas). Novo arquivo
`ilustracao-floresta-divisor-cortada.png` (2,1MB, contra 2,7MB do
original — mesmo assim menor), copiado a partir do arquivo de
referência (`/referencia/marca/`, não do já-usado em produção, pra não
perder qualidade numa segunda geração) — arquivo original mantido no
projeto, sem uso mas não apagado (mesmo padrão já usado com
`moldura.png` e `divisoria-chamas.png` nesta base de código).
`SobreDivider.tsx` atualizado só na `src` e nas props `width`/`height`
do `next/image` (`1672×941` → `1672×532`) — nenhuma outra lógica do
componente mudou (continua `width`/`height` fixos, não `fill`, com
`h-auto w-full`, então a imagem inteira sempre aparece na proporção
correta, sem crop nem distorção, exatamente como já documentado
acima).

**Isso NÃO viola a regra do projeto de nunca cortar a ilustração**:
essa regra sempre foi sobre não cortar a ARTE (personagens, trem,
folhagem — ver "Ilustração cortada" no item 1 da correção acima, o bug
original que essa regra existe pra prevenir), não sobre preservar
espaço vazio ao redor dela. A arte em si continua 100% presente e sem
corte — só a margem de céu sem nenhum elemento ilustrado foi reduzida.

Validação: screenshot da imagem cortada isolada (não só a página
inteira) em 1440px e 375px confirmando TODOS os elementos da cena
presentes e sem corte (as 4 personagens, o trem, a raposa, os
pássaros, o papagaio, as nuvens, toda a folhagem/flores/cacau nas duas
bordas); proporção reconferida via `naturalWidth`/`naturalHeight`
renderizados (1254×399 servido pelo `next/image` em 1440px — razão
3,143, idêntica a 1672/532 — sem distorção); gap medido via
`getBoundingClientRect` entre a foto mais baixa de "Sobre" e o topo do
divisor: 26px em 1440px (era ~388px de vão visualmente vazio antes,
contando a margem morta dentro da imagem) e 31px em 375px (era ~125px
antes); screenshot de scroll na região de transição em 1440px e 375px
confirmando o vão visivelmente reduzido e a ilustração começando logo
após o selo Sebrae, sem cortar nada; stress test do carrossel do Hero
sem regressão; `next build` e `next lint` limpos.

## SEO e descoberta (crítico para este projeto)
- Title tag e meta description: "restaurante parrilla Vitória ES" /
  "gastronomia em brasa Jardim Camburi"
- H1 único, texto real (não imagem), marca + proposta + localização
- Schema.org LocalBusiness/Restaurant (endereço, horário, faixa de
  preço, tipo de cozinha)
- Open Graph e Twitter Card com imagem apetitosa
- Alt text descritivo em cada imagem de prato (não genérico)
- Performance mobile-first — maioria das buscas locais é no celular

## Hero — Loop de Produtos + Lettering Interativo
Referência de composição/motion (NÃO de cor/identidade): Hotbite, em
/referencia/inspiracao-visual — usar somente como referência de
sobreposição produto/texto, profundidade de camadas e comportamento
de loop cinematográfico. Não copiar cores, logo, textos ou identidade
de terceiros.

Produtos: Filé (sanduíche) e Estação Belém (hambúrguer) — fotos em
/referencia/hero-produtos, recortes com fundo transparente em
/public/images/hero/ (file-cutout.png, estacao-belem-cutout.png).

Lettering "Maria Parrilla Steakhouse" — referência tipográfica:
/referencia/tipografia (poster "Almoço Paraense"). Duas linhas, cores
diferentes: "MARIA PARRILLA" em creme (--color-cream) e "STEAKHOUSE"
em dourado (--color-gold), via <TexturedHeading level={2}>. Texto
FIXO (não muda por slide) — por isso é o <h1> real e semântico da
página (com um sr-only complementando com localização/proposta para
SEO); não existe mais h1 escondido separado.

Camadas (fundo → frente): fundo com ambientação por slide (ver
abaixo) → faixa preta única de utilidade (ver abaixo) → selo circular
da logo + badges decorativos fixos → lettering "Maria Parrilla
Steakhouse" (duas linhas, duas cores) → produto (PNG fundo
transparente, sobrepõe parcialmente o lettering seguindo o contorno
do alimento — sem container/vinheta) → badges interativos por produto
(ver abaixo) → descrição curta → CTAs ("Pedir no iFood" / "Ver no
mapa") → dots → setas de navegação (bordas do hero). O produto é
sempre o ponto focal; nenhum elemento novo pode reduzir sua
legibilidade nem a dos CTAs.

Ambientação por slide (fundo): seção do hero é LARANJA, fundo
ESTRITAMENTE CHAPADO (sólido) — zero gradiente, como nos posts reais
da marca (já foi tentado com gradiente diagonal e com um "lift" de
luminosidade sutil no centro; os dois foram removidos por criar
variação perceptível de tom). Filé usa `var(--color-orange)`
(#C43A24) puro, Estação Belém usa `var(--color-orange-bright)`
(#F87000) puro — SEM nenhuma outra camada de cor, exceto uma vinheta
preta radial LOCALIZADA atrás do produto (não atrás da seção inteira)
para separação/foco, já que produto e fundo ficam ambos em tons
quentes. Essa vinheta usa tamanho em PIXELS FIXOS, não porcentagem —
porcentagem é relativa à altura do próprio container, e como o hero é
bem mais alto que largo no mobile, uma vinheta em % vira uma faixa
vertical enorme e deixa de ser "pequena e discreta" (bug já visto e
corrigido). Implementado como duas camadas de fundo empilhadas
(absolute, mesma área), cada uma com o `background` do respectivo
slide, alternando via opacity (crossfade suave ~1s) — nunca anima
background-color diretamente. Nunca uma cor fora da paleta (ex.:
verde). Os botões (CTAs) e os badges FIXOS ("Na brasa", "Parrilla")
mantêm cor e identidade da marca em todos os slides; só o fundo muda
de tom.

O slide do Filé usa exatamente o mesmo token (`var(--color-orange)`)
que a seção "Sobre" logo abaixo (ver Identidade Visual) — de propósito,
para as duas lerem como um único bloco contínuo sem costura ao rolar
a página. Ressalva conhecida: essa continuidade vale enquanto o hero
está no slide do Filé (o estado padrão/inicial); no slide da Estação
Belém (`--color-orange-bright`, uma cor visivelmente diferente), existe
sim uma diferença de tom perceptível na emenda com "Sobre" — isso é
uma consequência direta de manter a alternância de cor por slide (pedida
explicitamente) enquanto "Sobre" continua com uma única cor fixa; não
há como as duas coisas serem 100% verdadeiras ao mesmo tempo sem
sincronizar a cor de "Sobre" com o carrossel do hero (não implementado
— mudaria "Sobre" de seção estática para dependente do estado do hero).

Faixa preta de utilidade: ÚNICA faixa no topo do Hero (o header
separado com logo/tagline/bairro que existia antes foi removido — ver
"Logo" abaixo), tom neutro/escuro fixo, NÃO acompanha a cor do slide
atual. Conteúdo: endereço, bairro e horário resumido, três itens
separados por "·" (`AV. EURICO REZENDE, 135 · JARDIM CAMBURI ·
TER-DOM, A PARTIR DAS 17H...`). A tagline "Gastronomia Afetiva"
(`site.tagline`) não aparece mais nesta faixa nem em nenhum outro
ponto do topo — continua em uso no rodapé (SiteFooter, junto ao nome
da marca), não foi removida do projeto. Em viewports estreitos os
itens quebram em múltiplas linhas centralizadas (flex-wrap).

Logo: NÃO fica mais numa faixa/header separada acima do Hero. Mora
dentro da composição do Hero como um selo circular preto (`rounded-
full bg-ink`), no canto superior esquerdo, ancorado à mesma cópia
invisível do lettering que ancora os badges fixos (mesma técnica —
ver "Badges FIXOS" abaixo), posicionado ao lado do badge "Na brasa".
Fica parado durante a transição de slide, como os demais elementos
fixos da marca.

Badges FIXOS da marca ("Na brasa", "Parrilla") — colados ao próprio
lettering (estilo "Beefy" da referência Hotbite: selo sobreposto/
tangenciando a letra grande), NUNCA soltos nas margens/bordas do hero
(isso já foi um bug: badges ancorados na STAGE larga acabavam isolados
longe do bloco headline+produto, que é bem mais estreito que a
stage). "Na brasa" fica no canto superior esquerdo da 1ª linha ("Maria
Parrilla"); "Parrilla" no canto da 2ª linha ("Steakhouse") — bottom-
right no desktop/tablet, top-right no mobile (o bottom-right colide
com os badges interativos do produto em viewports baixos; ver abaixo).
Continuam parados, sem animação, em todos os slides.

Técnica de ancoragem (sem medição via JS): como o texto do lettering é
fixo, existe uma cópia invisível (`invisible`, mesma tipografia/
tamanho, `aria-hidden`) do lettering SEMPRE montada na posição de
repouso (centro) — os badges (`visible`, sobrescrevendo a
visibilidade herdada) ficam `absolute` dentro dessa cópia, ancorados à
caixa real de cada linha de texto em qualquer breakpoint. Isso mantém
os badges parados mesmo enquanto o lettering ANIMADO (de verdade)
desliza durante a transição.

Cuidado conhecido (já causou regressão real): o offset negativo de
cada badge (quanto ele "sai" da caixa da linha, ex. `-top-N`) precisa
ser modesto — a altura da stage varia com a altura TOTAL do viewport
(vh), não só a largura, então em janelas mais baixas (ex. 1024×768,
comum em laptop) a stage fica mais comprimida e um offset grande pode
extrapolar por cima do lettering e invadir o header. "Na brasa" (que
sempre estica pra cima, em qualquer breakpoint) já quebrou assim uma
vez; corrigido reduzindo o offset (`-left-3 -top-2` mobile,
`sm:-left-4 sm:-top-3` desktop, bem mais conservador que antes). Ao
mexer nesses badges de novo, testar especificamente em viewport baixo
(1024×768), não só 1440×900 — é o caso que engana.

Badges interativos por produto (distintos dos badges fixos): 2-3 pills
pequenos por slide, próximos ao produto (estilo "Beefy/Juicy/Saucy" da
referência Hotbite), com leve rotação alternada por pill. Ficam em
fluxo normal logo abaixo da imagem do produto (não `absolute`) para
que o espaço abaixo seja sempre reservado e nunca sobreponha a
descrição — essa foi a causa de um bug de sobreposição já corrigido.
Compartilham a MESMA animação do wrapper do produto (nenhuma
animação extra/concorrente): entram/saem juntos, na mesma direção,
sob o mesmo guard de isTransitioning.

Setas de navegação: fixas nas bordas esquerda/direita do HERO inteiro
(não da stage/produto), centralizadas verticalmente na altura total
da section (`absolute` no `<section>`, `top-1/2`). Os dots continuam
na posição abaixo dos CTAs.

Comportamento: produto, lettering E badges interativos participam
juntos da transição entre slides (mesma direção esquerda/direita da
navegação), cada elemento com seu próprio estado de animação
(lettering com leve defasagem de tempo/distância em relação ao
produto, para dar profundidade/parallax; badges interativos herdam a
mesma transform do produto, sem timing próprio). Produto centralizado:
floating sutil (translateY + microrotação + microscale). Somente
transform e opacity em todos — nunca propriedades que causam reflow.
Timing: ~4-5s de permanência por produto, transição rápida (~0.6-0.7s
produto, lettering levemente mais longa, fundo crossfade ~1s).

Navegação: setas, dots, E gesto de arrastar/swipe (pan gesture da lib
motion). Guard de estado (isTransitioning) bloqueia novos cliques/
swipes até a transição atual terminar, evitando acúmulo em cliques
repetidos rápidos — chave de animação (transitionId) incrementa a
cada navegação para AnimatePresence nunca reutilizar uma key "em
trânsito" (causa comum de travamento ao alternar direção rapidamente).

Implementação técnica:
- Biblioteca: motion (antes Framer Motion) — pacote npm "motion",
  import de "motion/react"
- Acessibilidade: useReducedMotion — se ativado, crossfade simples,
  sem translate/rotate
- Autoplay pausa no hover/foco; reinicia após interação manual
- Performance: produto do slide inicial é o provável elemento de LCP
  — preload, sem lazy loading

### Correção de escala/composição (v3 — produto maior, lettering de fundo)
Ajuste feito sobre a versão já validada — sem mudar mecânica de
transição, tipografia, cores, badges ou header.

Restrição geométrica que guiou o ajuste: se a altura do produto
ultrapassar a altura total do bloco de lettering (as duas linhas
juntas), nenhum reposicionamento vertical consegue revelar lettering
por trás do produto — centralizar ou deslocar só redistribui a folga
que sobra ALÉM do texto, nunca descobre texto por baixo de um
elemento mais alto que ele. Por isso a primeira tentativa (produto
1.55×, lettering -12%) enterrou o lettering quase por completo
(produto ficou com 265px de altura contra 197px do lettering, em
desktop) e teve que ser corrigida para valores mais conservadores
(produto ~1.24×, lettering ~-8%) que preservam `altura do produto <
altura do lettering`.

Lettering: além do tamanho reduzido, ganhou `opacity-90` +
`blur-[1.5px]` num wrapper próprio (envolvendo só as duas linhas de
texto, sem o `sr-only`) para reforçar leitura de elemento de fundo —
o produto continua nítido, sem blur, com drop-shadow mais forte
(`drop-shadow-[0_32px_60px_rgba(0,0,0,0.7)]`) para separação de
profundidade.

Espaço morto abaixo dos indicadores: causa era `min-height` fixo do
hero maior do que a composição (mais compacta após o ajuste)
precisava. Reduzido de `min-h-[82vh] lg:min-h-[74vh]` para
`min-h-[64vh] lg:min-h-[58vh]`.

Setas de navegação: movidas de filhas da `<section>` para filhas da
STAGE (`motion.div`), recentralizando verticalmente em relação ao
novo centro visual da composição produto+lettering (não mais a altura
total do hero). Mantido o truque de "full-bleed breakout" via
`left: calc(50% - 50vw + Xrem)` para preservar a posição horizontal
original nas bordas do viewport, mesmo com o container pai mais
estreito que a stage.

Bug pego na própria verificação deste round: o badge fixo "Parrilla"
tinha uma variante `sm:top-auto sm:-bottom-6` (ancorado embaixo da 2ª
linha em desktop/tablet) que passou a colidir com o badge interativo
"Artesanal" em 768px depois do aperto de espaçamento dos badges de
produto. Corrigido unificando "Parrilla" para ancorar sempre no topo
da linha ("Steakhouse"), em todos os breakpoints — mesmo
comportamento que mobile já usava, agora aplicado também a
desktop/tablet. A nota anterior sobre "Parrilla" com ancoragem
inferior em desktop está superada por esta mudança.

### Correção de performance (v4 — jank no loop de floating e na transição)
Diagnóstico feito com trace real via CDP (Playwright + `Tracing.start`/
`Tracing.end`, categorias `devtools.timeline`), medindo tempo de
`RasterTask` (raster/repaint) e FPS via contagem de `requestAnimation
Frame` — não só "parece mais fluido". Achados:

- Causa raiz: `filter: drop-shadow(...)` aplicado direto na `<Image>`
  do produto, que fica dentro do `motion.div` do loop de floating
  infinito (`y`/`rotate`/`scale`, `repeat: Infinity`) e também dentro
  do `motion.div` da transição de slide. `filter` não é uma operação
  puramente de compositor como `transform`/`opacity` — o Chrome
  precisa re-rasterizar o efeito do filtro sempre que o conteúdo
  filtrado muda visualmente, o que acontecia a CADA FRAME do floating
  (para sempre, enquanto o Hero estiver montado), não só durante as
  transições. Medido: no loop idle (10s), ~15.5-20s de tempo cumulativo
  de `RasterTask` (somado entre threads de raster) — ou seja, raster
  rodando continuamente a ~150-200% do tempo real.
- Hipóteses descartadas por medição direta (não por suposição):
  - Textura SVG (`feTurbulence`) do `TexturedHeading` no lettering:
    contribui ~5% do custo de raster na transição (dentro da margem de
    ruído) — TexturedHeading não re-renderiza a cada frame (só remonta
    por `transitionId`, uma vez por slide), então a textura em si não é
    o problema. Deixado como estava.
  - `scale` especificamente (vs. `y`/`rotate`) como gatilho de
    re-raster: testado isoladamente removendo só `scale` do floating —
    resultado, sem mudança no custo de raster (~15.7s antes e depois).
    Hipótese descartada, revertida.
  - Asset de imagem sobredimensionado: `next/image` já serve o
    tamanho correto (129.5KB, bucket 640w para um render de ~420px) —
    não era o problema.
  - Propriedades não-transform sendo animadas (box-shadow, width/
    height): nenhuma encontrada — todas as animações no Hero já
    usavam somente `opacity`/`x`/`y`/`rotate`/`scale`.
  - `will-change` sozinho (sem tocar o filtro): testado isoladamente —
    piorou o resultado (60fps → 41fps), porque promover a um layer
    próprio um elemento que TEM filtro adiciona overhead de composição
    sem eliminar o gatilho de re-raster. Só funciona combinado com a
    correção abaixo.

Correção aplicada: o produto agora renderiza como DUAS cópias da
mesma imagem (mesmo `src`, sem custo extra de rede — o browser reusa
o cache). A cópia de baixo é estática (não participa do loop de
floating, só da transição de slide, que é curta ~0.6s) e é a ÚNICA
que carrega `drop-shadow` — seu raster fica cacheado pela composição
em vez de recalculado a cada frame. A cópia de cima é nítida, sem
filtro nenhum, e é a única que sofre a animação contínua — caminho
puramente compositor (`transform`), sem gatilho de raster. Como a
amplitude do floating (±14px/±1.2°/±1.5%) é muito menor que o blur da
sombra (60px), a sombra não acompanhar o wiggle em tempo real é
imperceptível.

`will-change: transform` foi adicionado de duas formas: permanente na
cópia nítida animada pelo floating (justificado por ser uma animação
de duração infinita, sem um "depois" natural para remover — só um
elemento pequeno, sem custo de memória relevante); e pontual (via
`style` condicional a `isTransitioning`, removido depois) no
`motion.div` do produto e no `motion.h1` do lettering, só durante a
transição de slide.

Resultado medido (mesma metodologia, antes/depois):
- Loop idle (6-10s): `RasterTask` de ~15.500-20.000ms → ~0-7ms
  (praticamente eliminado); 60fps estável, 0-1 frame longo (>32ms) em
  ~360-560 frames.
- Transição de slide (~1.3-1.4s, média de 3 repetições após aquecimento
  — o primeiro clique após carregar a página paga um custo único de
  decode da imagem do 2º slide, descartado da medição): `RasterTask`
  de ~2.150-2.430ms → ~660-820ms (queda de ~62-70%).
- Mobile (iPhone SE, CPU throttling 4x, loop idle): `RasterTask`
  0.0ms, 57.6fps, 9/346 frames longos.
- Nota sobre ruído de medição: o FPS bruto de uma única janela de
  ~1.3s (a transição) varia muito entre execuções neste ambiente
  headless/software-rendered (ex.: 17-58fps para o MESMO código, em
  execuções diferentes) — por isso `RasterTask` (mais estável entre
  repetições) foi usado como métrica principal para atribuir causa e
  confirmar a correção, não o FPS isolado de uma única janela curta.
- Confirmado sem regressão: stress test de navegação rápida
  (`check-hero2.js` — clique alternado em rajada) sem travamento e
  sem erros de console, desktop e mobile; screenshots dos dois slides
  em 1440px e 375px confirmam sombra renderizando normal, sem
  duplicação visível ou desalinhamento.

### Ajustes de hierarquia do topo, Hero e altura (v5)
Consolidação de topo + recalibração de escala + correção estrutural
do bug de "imagem fantasma" + recálculo de altura do zero. Nota: o
mockup `mockup-hero-v3.html` referenciado no pedido não foi encontrado
em `/referencia` nem em nenhum outro ponto do projeto — o
posicionamento da logo foi implementado a partir da descrição textual
("selo circular preto, canto superior esquerdo, ao lado do badge
Na brasa"), validado por screenshot; se não bater com o mockup
original, ajustar a partir do que está publicado.

- **Faixa preta única**: o header separado (logo + tagline +
  bairro/cidade) foi removido; sobrou só a faixa de utilidade
  (endereço · bairro · horário). `site.tagline` ("Gastronomia
  Afetiva") não foi apagado do código — continua renderizado no
  rodapé (SiteFooter). Ver "Faixa preta de utilidade" acima.
- **Logo**: virou selo circular (`rounded-full bg-ink`, ~44-64px
  conforme breakpoint) dentro da composição do Hero, ancorado à mesma
  cópia invisível do lettering que ancora "Na brasa"/"Parrilla" (ver
  "Logo" acima), então também fica parado durante a transição.
- **Lettering + produto recalibrados juntos**: ambos escalados pelo
  mesmo fator (~1.17×) para preservar a relação já validada
  (`altura do produto < altura do lettering` — sem essa relação
  nenhum reposicionamento revela o lettering atrás do produto, lição
  da rodada anterior). Lettering: `13.25vw/10.5vw/7.5rem` →
  `15.5vw/12.25vw/8.75rem`. Produto: `20vw (max 118px)/16.75vw/205px`
  → `23.25vw (max 138px)/19.5vw/240px`. Diferença medida
  produto-lettering ficou entre -6px e -16px em todos os 4 viewports
  (mantém a mesma margem de segurança de antes).
- **Bug da "imagem fantasma" corrigido estruturalmente**: a versão
  anterior (correção de performance) tinha a cópia com sombra
  ESTÁTICA e a cópia nítida com seu PRÓPRIO `motion.div` de floating —
  quando o floating afastava a cópia nítida do repouso, a cópia
  estática (sempre no lugar) ficava exposta como um duplicado
  fantasma. Corrigido unificando as duas cópias dentro de um ÚNICO
  `motion.div`: ele é o único elemento que recebe qualquer transform
  (tanto do floating idle quanto, por herança do `motion.div` pai, da
  transição de slide) — nenhuma das duas cópias tem transform
  independente entre si, então nunca se separam visualmente. Medido
  via screenshots em frames intermediários do floating E da transição
  (não só no repouso) para confirmar ausência de fantasma.
  Contraintuitivamente, essa unificação NÃO reintroduziu o custo de
  raster do bug de performance original: `RasterTask` continuou em
  ~0ms no loop idle e caiu para a mesma faixa de antes (~520-640ms) na
  transição — a hipótese é que, como as duas cópias nunca mudam de
  posição RELATIVA entre si (só o wrapper como um todo transforma), o
  conteúdo do layer composto fica estável e pode ser cacheado/
  reaproveitado pelo compositor mesmo com o filtro presente; o gatilho
  de re-raster do bug original era o CONTEÚDO do layer mudando frame a
  frame (cópia nítida se afastando da estática), não simplesmente
  "ancestral com transform + filtro em algum lugar dentro".
- **Altura do Hero recalculada do zero**: `min-h-[64vh] lg:min-h-
  [58vh]` foi REMOVIDO — não substituído por um novo `min-h-[Xpx]`.
  Medido via script Playwright, com o container em fluxo natural (sem
  nenhum min-height), a altura resultante já é idêntica entre os dois
  slides em cada viewport (505px@375, 472px@768, 563px@1440 e @1920 —
  1440 e 1920 batem porque o conteúdo do breakpoint `lg` é fixo em
  `rem`, não em `vh`, então não varia com a altura do viewport) e tem
  zero sobreposição com `#sobre` em qualquer um. Tentativa de travar
  essa altura impondo `min-h-[Ypx]` com esses mesmos valores foi
  testada e descartada: qualquer `min-height` no container fez o
  filho `flex-1` (flex-basis 0%) entrar em modo "grow" e o resultado
  final ficou ~33-51px MAIOR que o fluxo natural — um quirk de
  flexbox (basis 0% + min-height do container ativa redistribuição de
  espaço livre que não acontece em altura auto), não um problema de
  conteúdo. Conclusão: o próprio fluxo `auto` já É a altura fixa
  correta; a causa original do vão morto (768×1024 chegava a ter
  142px só entre a barra e o lettering) era inteiramente o `vh` sendo
  relativo à ALTURA do viewport enquanto o conteúdo só varia com a
  LARGURA — remover o `vh` sozinho já resolve, sem precisar de
  nenhuma substituição.
- **Travessões "—" (revisão global)**: busca em todo `src/` confirmou
  zero ocorrências em texto renderizado (copy do site, alt text,
  meta description, sr-only) — todas as ~26 ocorrências restantes
  estão em comentários de código (`//`, `/* */`), nunca vistos pelo
  usuário. Substituições usadas: vírgula na maioria dos casos, dois-
  pontos onde o trecho introduzia uma explicação/lista. Arquivos
  tocados: `site.ts` (`address.full`), `layout.tsx` (meta
  description), `About.tsx`, `Showcase.tsx` (descrição + alt text),
  `Hero.tsx` (descrição do produto, sr-only, alt text — este último
  alinhado ao padrão que o `Showcase.tsx` já usava).
- Validação: screenshots dos dois slides nos 4 viewports de
  referência confirmando selo/badge sem colisão, lettering maior lendo
  como fundo, produto em primeiro plano sem fantasma em nenhum frame
  amostrado (floating e transição), faixa preta única, Hero terminando
  exatamente onde "Nossa história" começa (zero sobreposição/zero vão)
  em todos os casos; performance re-medida (RasterTask idle + transição
  + mobile CPU throttling 4x) sem regressão da correção anterior;
  stress test de navegação rápida sem travamento nem erros de console;
  `next build` e `next lint` limpos.

### Recalibração estrutural e proporcional para desktop (v6)
Ajuste sobre a v5: Hero baixo demais em 1440×900 (563px medido),
fazendo "Nossa História" aparecer cedo. Alvo 720-780px, atingido só
por espaçamento (gaps/margens), nunca por min-height/height fixo —
ver justificativa do quirk de flexbox na v5 acima, reconfirmada aqui:
qualquer tentativa de travar a altura por valor fixo reintroduziria o
mesmo problema.

- **Altura via espaçamento**: aumentado `mt` da stage (`sm:mt-3` →
  `sm:mt-6 lg:mt-14`), padding da faixa de utilidade (`py-2` →
  `sm:py-3`), margem do bloco de texto/CTA/dots (`mt-8` → `sm:mt-14
  lg:mt-20`, `gap-6` → `sm:gap-7 lg:gap-8`), e o deslocamento vertical
  do produto foi convertido de `translate-y` (transform, não ocupa
  espaço de layout) para `margin-top` real (`sm:mt-10 lg:mt-14`) —
  esse último é o que faz a diferença estrutural: antes, o produto só
  era deslocado visualmente sem nunca contribuir para a altura do
  container pai (já que a stage só tem UM filho em fluxo normal, o
  wrapper do produto — o lettering é `absolute`, centralizado sobre a
  altura da stage). Resultado medido em 1440×900: 730px, dentro da
  faixa alvo, idêntico entre os dois slides. `pb-10` do container
  (gap entre os dots e o fim da section) não foi tocado — já estava
  em 40px, o teto da faixa pedida (25-40px) para esse gap específico.
- **Recalibração conjunta de largura (lettering/produto/logo/texto)**:
  medido antes de mexer — lettering já estava dentro do alvo (645px
  a linha "Maria Parrilla", 600-720px pedido), então não foi alterado.
  Produto, logo e bloco de descrição precisaram de ajuste:
  - **Produto**: antes, sizing só por altura fixa (`h-[240px]
    w-auto`) produzia larguras muito diferentes entre os dois cutouts
    por causa da proporção de cada foto (Filé ~2:1 bem largo, Estação
    Belém ~1,08:1 quase quadrado) — medido 486px vs 263px, uma
    inconsistência que não aparecia nos números da v5 porque ninguém
    tinha medido largura antes, só altura. Corrigido trocando de
    `width`/`height` explícitos do `next/image` para `fill` +
    `object-contain` dentro de um contêiner de tamanho FIXO (mesma
    caixa para os dois slides: `340×235px` em desktop, `280×193px`
    em tablet, `~200×138px` em mobile) — a técnica de duas camadas
    (cópia com sombra + cópia nítida, um único `motion.div` como
    fonte de transform) foi preservada, só o sizing interno mudou.
    Resultado: caixa idêntica (~345×240px) para os dois slides,
    satisfazendo a largura-alvo (300-360px) de forma consistente.
    Conflito geométrico encontrado e resolvido por prioridade
    explícita: a proporção quase quadrada da Estação Belém, dentro
    dessa caixa, é a dimensão limitante por ALTURA (não largura) —
    seu conteúdo visível real fica em ~253×235px. Ou seja, o produto
    Belém não atinge o piso de 300px de largura pedido; isso foi uma
    escolha deliberada, não um descuido: a alternativa (deixar Belém
    mais largo, até 300-360px) exigiria uma altura de ~280-306px,
    ultrapassando a altura do bloco de lettering (238px) e quebrando a
    relação já validada ("produto mais baixo que o lettering", para o
    texto não ficar totalmente coberto). Dado o conflito entre as duas
    instruções explícitas do pedido (largura 300-360px E preservar
    essa relação), priorizei a relação (motivo documentado e já
    testado em rodadas anteriores) sobre o piso de largura para esse
    slide especificamente. Se o cliente preferir Belém mais largo
    mesmo violando um pouco essa relação, ou puder fornecer um recorte
    menos quadrado da foto, é possível revisar.
  - **Logo**: de 44/56/64px (mobile/tablet/desktop) para 44/80/96px —
    o alvo (85-100px) é do viewport de referência (1440px), então só
    desktop foi levado a esse valor; mobile ficou como estava (44px)
    depois de uma tentativa de aumentá-lo também (56px) ter colidido
    com a letra "M" do lettering — a offset negativa que afasta o
    selo do texto (`-left-Npx -top-Npx`) precisou crescer proporcional
    ao tamanho do selo para não invadir a letra, e em mobile não há
    largura de viewport sobrando para isso: uma tentativa de offset
    maior (`-left-20`, -80px) empurrou o selo para fora da viewport,
    sendo cortado pelo `overflow-hidden` da section. Mobile manteve o
    tamanho e offset já validados na v5.
  - **Bloco de descrição**: `max-w-md` (448px) → `max-w-xl` (576px),
    dentro do alvo pedido (520-600px).
- **Verificação de performance pós-recalibração**: a rodada mediu
  RasterTask de novo (mesma metodologia CDP das rodadas anteriores) e
  encontrou um aumento real no cenário IDLE (antes ~0-7ms/10s medido
  na v4/v5, agora ~500-1000ms/6s, ~800-1700ms proporcional a 10s) —
  não reproduz o bug catastrófico original (15.500-20.000ms/10s, que
  causava frames perceptivelmente travados), mas é um aumento
  mensurável, então foi investigado a fundo em vez de ignorado.
  Isolamento (toggling de uma variável por vez, mesma técnica das
  rodadas anteriores): remover o `filter` da cópia com sombra não
  reduziu o custo (descarta a hipótese do filtro); congelar o
  transform do floating via `style` inline não reduziu (descarta a
  animação em si); `prefers-reduced-motion` (que remove a prop
  `animate` inteira via React, não só via CSS) reduziu mas não zerou;
  esconder a section INTEIRA via `display:none` zerou completamente
  (confirma que a causa está dentro do Hero); esconder só as imagens
  do produto OU só as camadas de backdrop, isoladamente, não reduziu
  de forma proporcional. Rodado também contra build de produção
  (`next build && next start`, não só dev server) para descartar
  overlay de desenvolvimento como causa — custo persistiu igual.
  Conclusão mais provável (não 100% confirmada por falta de uma
  categoria de trace mais granular): a stage tem um `motion.div` com
  `onPanEnd` (suporte a swipe), e componentes de gesto do Framer
  Motion mantêm um heartbeat de compositor de baixa frequência
  (~23-24Hz medido, ~140 eventos/6s, estável entre execuções) mesmo
  sem nenhuma animação ativa — isso já existia antes desta rodada,
  mas antes tocava uma área composta pequena (produto ~240×110px) e
  portanto custava perto de zero; nesta rodada a área composta cresceu
  (produto ~340×235px, mais o espaçamento geral maior), então o mesmo
  heartbeat pré-existente agora tem mais pixels para re-rasterizar a
  cada tick, custando mais no total sem que a FREQUÊNCIA do problema
  tenha mudado. Evidência a favor: a contagem de eventos de raster é
  estável entre execuções (~140-142/6s) mesmo quando a DURAÇÃO total
  varia bastante (245-680ms) — sugere um número fixo de "toques"
  periódicos, com custo por toque proporcional à área, não um novo
  vazamento/loop introduzido pelo código desta rodada. Cenário de
  TRANSIÇÃO de slide não regrediu: 601-674ms medidos (média ~633ms,
  3 repetições), dentro da faixa já documentada na v4 (660-820ms).
  Mobile com CPU throttling 4x: ~197ms/6s no idle — baixo em termos
  absolutos, também consistente com a hipótese de área composta menor
  em mobile (caixa do produto ali é ~200×138px, a menor das três).
  FPS idle seguiu saudável (~51fps, poucos frames longos) apesar do
  aumento em RasterTask, ou seja, o aumento não se traduziu em jank
  perceptível nas medições — mas o número em si é honestamente maior
  que o da v4/v5, e está documentado como tal em vez de reportado como
  "sem regressão" sem qualificação. Não foi aplicada nenhuma correção
  adicional para este achado (ele não estava nos requisitos desta
  rodada e não reproduz o sintoma original de travamento); se o
  cliente quiser eliminar esse custo residual, o próximo passo seria
  investigar se dá pra desativar o heartbeat do gesto de pan quando
  não há interação de ponteiro ativa.
- Validação: alturas medidas via Playwright nos 4 viewports de
  referência (375/768/1440/1920), idênticas entre os dois slides em
  cada um, zero sobreposição com `#sobre`; 1440×900 em 730px (dentro
  de 720-780px pedido); larguras de lettering/produto/logo/descrição
  medidas e conferidas contra os alvos pedidos (conflito do produto
  Belém documentado acima); screenshots dos dois slides nos 4
  viewports confirmando composição sem colisão (selo, badges, produto,
  CTAs); stress test de navegação rápida (clique em rajada + swipe)
  sem travamento nem erros de console, desktop e mobile; `next build`
  limpo (só o aviso pré-existente de `metadataBase`); `next lint`
  limpo.

### v7 — direção da transição do carrossel e correção de stutter
Reportado: a animação de troca de produto (não a chama, nem a altura —
só a transição do carrossel em si) sempre parecia deslizar da direita
para a esquerda, independente da seta clicada, e apresentava uma
pequena travada no meio do movimento.

**Causa raiz** (identificada por leitura do código antes de qualquer
alteração, não por tentativa e erro): a lógica de direção em si
(`direction` state, `dir=1`/`dir=-1`, variantes com `x: dir*90` no
enter/exit) já seguia corretamente o padrão documentado do Framer
Motion para carrosséis com swipe — não era um bug de matemática de
sinal. O problema real: o `motion.div` do produto era `position:
relative` (fluxo normal), diferente do `motion.h1` do lettering, que
já era `absolute`. O `AnimatePresence` (modo `sync`, padrão) mantém o
produto que está saindo E o que está entrando montados ao mesmo tempo
por ~0,6s — como nenhum dos dois produtos era `absolute`, os dois
existiam simultaneamente como itens de um `flex items-center
justify-center`, e o layout flex recalculava a posição de cada um
enquanto o outro existia. Isso causava dois sintomas ao mesmo tempo:
a travada (reflow no instante em que o elemento que estava saindo era
desmontado, deslocando de repente o elemento que ainda estava
animando) e a direção aparentemente sempre igual (o reflow do flex se
sobrepunha ao `translateX` pretendido, mascarando a trajetória real).

**Correção**: o elemento em `exit` passou a assumir `position:
"absolute"` dentro da própria variante (`exit: (dir) => ({ opacity: 0,
x: dir * -110, position: "absolute" })`) — Framer Motion aplica
propriedades não-animáveis como `position` instantaneamente (não
interpola), então o elemento que está saindo é tirado do fluxo no
exato instante em que começa a sair. Sem `top`/`left` explícitos, o
navegador usa a posição estática (onde o elemento já estava no fluxo)
como base para o `position: absolute`, então não há salto visual no
momento da troca — confirmado via trace `getBoundingClientRect` frame
a frame (abaixo). O elemento em `center` (o atual, ainda em fluxo)
continua sendo o único responsável por sustentar a altura da stage —
como tudo mais dentro dela já é `absolute` (setas, badges fixos,
lettering), o produto é o único conteúdo em fluxo que dá altura ao
Hero; manter exatamente UM produto em fluxo a cada instante (nunca
dois simultâneos) preserva essa altura sem qualquer mudança de
layout.

De quebra, a mesma rodada removeu `rotate`/`scale` das variantes do
produto (`scale: 0.85→1`, `rotate: dir*8→0`) — pedido explícito desta
rodada ("o lanche não pode alterar seu tamanho durante a transição",
"não deve haver zoom/bounce/overshoot"): a transição do produto agora
é puramente `opacity` + `x` (mesmo padrão que o lettering já usava,
que nunca teve scale/rotate). A distância de entrada/saída subiu de
90px para 110px (compensando visualmente a perda do rotate/scale, que
antes ajudava a vender a sensação de movimento). `TRANSITION_S=0.6s`
e a curva de easing (`EASE = [0.22, 1, 0.36, 1]`, uma "ease-out"
forte sem overshoot) não foram alterados — a travada já estava
inteiramente explicada pelo reflow, não pela curva.

Validação: trace `getBoundingClientRect` (frame a frame, via
`requestAnimationFrame`) nos dois sentidos — clique na seta direita:
elemento que sai vai de `left:541→437` (monotonicamente decrescente,
move para a esquerda) enquanto o que entra vai de `left:649→546`
(começa à direita do repouso, decresce até o centro), sem nenhum
salto/inversão no meio, ambos com `width` constante (345px/348px,
sem variação) do início ao fim; clique na seta esquerda: trajetórias
espelhadas (`left:557→657` para quem sai, `left:446→546` para quem
entra), mesma ausência de salto; screenshots antes/depois de um ciclo
completo próximo→anterior confirmando que o produto volta ao pixel
exato de repouso original, sem deriva de posição ou tamanho; stress
test de navegação em rajada (várias vezes em cada seta, alternando
rapidamente os dois sentidos) sem erros de console, desktop e mobile;
`next build` e `next lint` limpos. Nenhum outro elemento do Hero
(layout, cores, textos, botões, badges, setas, dots, fundo) foi
alterado.

### v8 — efeito "ímã no cursor" nos CTAs do Hero
Adicionado nos dois botões do Hero ("Pedir no iFood" e "Ver no mapa"),
idêntico nos dois slides do carrossel (são os mesmos dois botões,
fora do carrossel em si — ver `page.tsx`/`Hero.tsx`, o bloco de CTAs
é irmão da `AnimatePresence` do produto, não remonta por slide).

**Hook novo**: `src/hooks/useMagnetic.ts` — `useMagnetic<T extends
HTMLElement>(limit = 16)`, primeiro hook reutilizável do projeto
(pasta `src/hooks/` criada nesta rodada). Escreve direto em
`el.style.transform` a cada `mousemove` (sem `setState`/re-render do
React por movimento de mouse — o hook usa `useRef`, nunca `useState`,
para não reintroduzir custo de performance por evento de altíssima
frequência). `mouseleave` limpa o `transform`. Respeita
`prefers-reduced-motion` via `useReducedMotion()` (mesmo hook de
`motion/react` já usado no carrossel do Hero, por consistência) — se
ativo, os listeners nem são registrados; o efeito fica completamente
desligado, não só mais lento.

**"Área de detecção" — por que cada botão precisou de um wrapper
próprio**: o hook escuta `mousemove`/`mouseleave` no `parentElement`
do elemento (não no `document`/`window` inteiro), para o raio de ação
ficar restrito à vizinhança do próprio botão. Antes desta rodada, os
dois `<a>` eram filhos DIRETOS do mesmo `<div>` (a linha de CTAs) —
se o hook usasse esse `parentElement` compartilhado, mover o mouse
perto de UM botão também moveria o OUTRO, já que os dois estariam
escutando o mesmo fluxo de eventos do mesmo container. Corrigido
envolvendo cada `<a>` num `<div>` próprio (`w-full sm:w-auto`,
replicado também no `<a>` via `block w-full ... sm:w-auto`, já que um
`<a>` fora de um contexto flex volta a ser `inline` por padrão e
precisa de `block` explícito para respeitar largura) — cada botão
passou a ter sua própria área de detecção, sem vazar para o vizinho.
Testado que isso não alterou o comportamento responsivo herdado do
`flex items-stretch` (mobile, botão ocupa 100% da largura) vs
`sm:items-center` (desktop, botão do tamanho do próprio conteúdo):
como o wrapper replica exatamente os mesmos breakpoints (`w-full
sm:w-auto`) que o `<a>` agora também carrega, a largura final em
qualquer viewport é idêntica à de antes da mudança.

**CSS**: `.fx-magnet` em `globals.css` (não Tailwind puro) — decisão
deliberada, não estética: os dois botões já tinham um `transition`
Tailwind (150ms, cobrindo `hover:bg-ember`/`hover:border-ink
hover:bg-ink/10`) que, por padrão, JÁ inclui `transform` na sua lista
de propriedades. Simplesmente empilhar uma SEGUNDA classe Tailwind
`transition-*` para dar ao `transform` uma duração/curva diferentes
(250ms, `cubic-bezier(.16,1,.3,1)`, pedido explicitamente para o ímã)
não funciona: `transition-property`/`transition-duration`/
`transition-timing-function` não se mesclam entre regras CSS
diferentes aplicadas ao mesmo elemento — a regra que vence na cascata
sobrescreve as três por inteiro, não por propriedade individual
listada. A única forma correta de ter "cor a 150ms" E "transform a
250ms com curva própria" no mesmo elemento é UMA declaração `transition`
só, com as durações corretas por propriedade — daí o `.fx-magnet`
consolidar as duas em uma regra: `background-color 150ms ease,
border-color 150ms ease, transform 250ms cubic-bezier(0.16, 1, 0.3,
1)`. O `transition` Tailwind genérico foi removido dos dois `<a>` e
substituído por `fx-magnet` (nenhuma outra classe alterada). A regra
`@media (prefers-reduced-motion: reduce)` já existente em
`globals.css` (força `transition-duration: 0.01ms !important`
globalmente) cobre `.fx-magnet` automaticamente — redundante com o
`useReducedMotion()` do hook (que evita os listeners), mas
intencional: mesmo se algo escapasse de um dos dois mecanismos, o
outro ainda garante o efeito desligado.

**Sem interferência com o swipe do carrossel**: os listeners do ímã
vivem nos wrappers dos CTAs, que ficam num `<div>` IRMÃO da stage
pannable (`motion.div` com `onPanEnd`, ver v7 acima) — nunca
descendente dela — então não competem por eventos de ponteiro com o
gesto de arrastar do carrossel; confirmado via teste de swipe real
(arrastar a stage) depois de testar o ímã, trocando de slide
normalmente.

Validação: script Playwright medindo `getBoundingClientRect` do botão
antes/depois de mover o cursor para dentro da área (deslocamento
medido: ~8,8-8,9px na direção do cursor, dentro do limite de 16px,
consistente entre os dois botões e idêntico nos dois slides) e
depois de afastar o mouse (retorno exato a 0,0 de deslocamento em
ambos); teste de swipe/drag na stage confirmando troca de slide
funcionando normalmente após interagir com os botões
(`aria-current` mudou de "Ver Estação Belém" para "Ver Filé");
screenshots em 1440px e 375px em repouso confirmando zero mudança
visual de layout (botões no mesmo tamanho/posição/largura responsiva
de antes); `next build` e `next lint` limpos.

### v9 — efeito "ímã no cursor" também na foto do produto
Mesmo hook (`useMagnetic`, reaproveitado sem alterações — só uma nova
chamada, `useMagnetic<HTMLDivElement>(24)`, limite maior que o dos
CTAs de propósito, por ser um elemento visual maior) aplicado também
à foto do produto centralizada do Hero, nos dois slides.

**Selo "PARRILLA" — constatação pedida explicitamente, não uma
decisão**: verificado ANTES de mexer em qualquer código que esse selo
(canto superior direito, visualmente encostado no produto) é um
elemento SEPARADO — vive no grupo "Badges fixos da marca", ancorado à
cópia invisível (ghost) do lettering, não é filho do contêiner de
movimento das duas camadas do produto. Medido via
`getBoundingClientRect` que ele já SE SOBREPÕE ao box do produto por
construção (não é coincidência de layout, é a composição pretendida:
"Parrilla" tangenciando a letra "S" de "Steakhouse"/o canto do
produto, estilo "Beefy" da referência Hotbite). Por instrução
explícita do pedido, NÃO foi movido — confirmado por medição que sua
posição (`x`/`y`/`width`/`height`) é bit-a-bit idêntica em repouso e
durante o ímã do produto puxando. Se o cliente quiser esse selo
"colado" ao produto durante o ímã também, ele precisaria migrar para
DENTRO do wrapper do ímã — não implementado nesta rodada, por não ter
sido pedido.

**Estrutura — dois divs novos, por fora do contêiner de movimento**:
o `motion.div` das duas camadas (sombra cacheada + nítida animada,
ver v4 na seção de performance do Hero acima) e seu `transform`
continuam completamente intocados. Dois wrappers novos, ambos FORA
dele:
- Externo (`-mx-5 -mt-5 px-5 pt-5`, sem padding/margem embaixo): a
  "área de detecção" que `useMagnetic` escuta (`el.parentElement`).
  Padding só em cima/laterais (20px, dentro do ~20-30px pedido);
  ZERO embaixo. Medido via `getBoundingClientRect` antes de decidir o
  valor: a fileira de badges de sabor (Suculento/Na parrilla/
  Artesanal) fica a só 6-7px da foto em mobile (375px) — qualquer
  padding ali tocaria essa fileira, o que o pedido proíbe
  explicitamente ("reduzir o padding em vez de deixar a sobreposição
  acontecer"). O padding nos outros 3 lados é seguro: a única coisa
  próxima ali é o selo "Parrilla" (já sobreposto por design, não-
  interativo) e as setas de navegação (protegidas por z-index, ver
  abaixo). Margem negativa espelhando o padding (`-mx-5 -mt-5`)
  cancela sua contribuição ao fluxo do documento — confirmado via
  medição que a altura do Hero e a posição de todo o resto (badges,
  descrição, CTAs, dots) ficaram bit-a-bit idênticas às da v8 (556/
  608/730/730px em 375/768/1440/1920px, mesmos valores já
  estabelecidos em rodadas anteriores).
- Interno (`ref={productMagnetRef}`, classe `fx-magnet` reaproveitada
  de globals.css): o elemento que efetivamente recebe o `transform:
  translate()` do hook. Por ser um `<div>` comum (não um `motion.div`
  controlado pela lib motion), seu transform nunca compete com o
  transform que a própria lib já controla no `motion.div` interno
  (floating idle + troca de slide) — os dois simplesmente compõem
  (translate do ímã no pai, floating/slide do motion no filho),
  cada um em elemento diferente, sem qualquer conflito.

**Setas de navegação vs. área de detecção maior**: medido que a
folga até a seta direita cai para só 14px em 320px de largura — bem
menor que o padding de 20px do lado direito. Como as setas têm
`z-30` e a árvore inteira do produto (incluindo os dois wrappers
novos) vive dentro do `motion.div` do produto em si, que é `z-20`
(mais baixo), a seta continua recebendo cliques/hover normalmente
mesmo onde a área de detecção do ímã se sobrepõe geometricamente a
ela — z-index mais alto intercepta o evento de ponteiro antes que
chegue à área por baixo, então não há nenhuma interferência funcional
(confirmado clicando as setas repetidamente durante o stress test,
sem regressão).

**Bug real encontrado e corrigido nesta rodada: `dragstart` nativo do
`<img>` quebrava o swipe quando o arrasto começava exatamente sobre a
foto**: não é causado pelo hook em si (que só escuta `mousemove`/
`mouseleave`, nunca `mousedown`/`drag`), mas por uma característica
pré-existente das duas tags `<Image>` do produto — nenhuma delas
tinha `draggable={false}`, então o navegador intercepta um
`mousedown`+arrasto iniciado sobre a imagem como o gesto NATIVO de
"arrastar esta imagem" (ghost image), que compete com o
reconhecimento de gesto de pan da lib motion no `onPanEnd` da stage.
Confirmado via listener de diagnóstico (`dragstart` disparando no
`<img>`) antes de qualquer alteração — provavelmente já existia desde
sempre (as tags `<Image>` não mudaram nesta rodada), só nunca tinha
sido testado especificamente com o arrasto começando nos pixels
exatos da foto (os testes de swipe de rodadas anteriores usavam
coordenadas relativas à seção inteira, não à imagem). Como o pedido
desta rodada EXIGE explicitamente testar "swipe/drag... com o mouse
sobre o produto", virou um requisito real, não escopo adicional.
Corrigido com `draggable={false}` nas duas `<Image>` do produto (a
com sombra e a nítida) — nada mais foi alterado nelas. Reconfirmado
via o mesmo listener de diagnóstico que `dragstart` não dispara mais,
e via teste de swipe iniciado literalmente em cima da foto (mouse e
toque) que agora troca de slide normalmente.

**Duas camadas continuam alinhadas durante o ímã**: medido via
`getBoundingClientRect` das duas tags `<img>` dentro de `.fx-magnet`
enquanto o ímã está puxado — retângulos idênticos byte a byte
(mesma posição, mesmo tamanho), confirmando que não há duplicação/
fantasma nem durante o movimento do ímã.

**Performance**: mesma preocupação documentada na correção de
performance do Hero (RasterTask 15.000-20.000ms/10s, já corrigido
antes) foi re-testada especificamente para este novo gatilho de
`mousemove` de alta frequência — trace via CDP (`Tracing.start`/
`Tracing.end`, mesma técnica das rodadas anteriores) durante 4s de
movimento contínuo do mouse ao redor da foto: apenas ~24ms de
`RasterTask` acumulado, zero eventos acima de 32ms — não reproduz o
bug antigo, confirma que escrever `style.transform` num `<div>` puro
via ref (sem `setState`, sem re-render) continua barato mesmo em alta
frequência.

**Mobile/touch**: `useMagnetic` só registra listeners de `mousemove`/
`mouseleave` (nunca eventos de touch), então não tem NENHUM código
que rode em telas de toque — confirmado via swipe simulado com
eventos de touch reais (`Input.dispatchTouchEvent` via CDP, não
`mouse.move`) iniciado sobre a foto em 375px: troca de slide
normalmente, sem erros de console.

Validação completa: script Playwright confirmando puxão do produto
(~22px, dentro do limite de 24px) com retorno exato a 0,0 ao afastar
o mouse; hover sobre badge de sabor ("Suculento") e sobre o CTA
"Pedir no iFood" confirmando ZERO movimento do produto nos dois casos
(áreas de detecção continuam isoladas); swipe/drag testado iniciando
tanto fora quanto literalmente em cima da foto, mouse e touch, antes
e depois da correção do `draggable`; posição do selo "Parrilla"
idêntica em repouso e com o produto puxado; duas camadas da foto
permanecem alinhadas durante o movimento; `getBoundingClientRect` do
Hero e da fileira de badges idêntico à v8 em 375/768/1440/1920px
(zero mudança de layout); trace de performance de 4s sem regressão;
stress test de navegação em rajada (setas + swipe) sem erros de
console; `next build` e `next lint` limpos.

### Mapa embutido (Location.tsx) — contenção de popup/iframe
Reportado: popup do Google Maps aparecendo sobreposto no topo da
viewport, fora dos limites da seção Localização. Diagnóstico: a
estrutura de contenção do iframe já estava correta (`<section>` com
`overflow-hidden`, mais o `<div>` do mapa também com `relative
overflow-hidden rounded-2xl`, iframe `absolute inset-0` dentro dele)
— testado via clique direto no mapa (abre o card "Open in Maps" do
Google) em várias posições de scroll, inclusive voltando ao topo da
página logo depois: o popup nunca escapou da caixa arredondada do
mapa em nenhum teste. Isso é esperado — conteúdo de iframe cross-
origin é fisicamente contido pelo browser à própria caixa do iframe,
não existe combinação de z-index/position que vaze isso de dentro do
iframe para a página pai.

O único mecanismo que realmente pode "escapar" de um iframe sem
`sandbox` é abrir uma popup/nova aba (`window.open` ou navegação de
top-level) — e o iframe não tinha nenhum atributo `sandbox`, ou seja,
tinha permissão irrestrita para isso. Se o que o cliente viu foi uma
tentativa de popup/nova janela do próprio Google Maps (comum em
embeds antigos no formato `output=embed`, sem chave de API), isso
apareceria "por cima de tudo" exatamente como descrito, sem qualquer
relação com o layout da seção. Corrigido adicionando `sandbox=
"allow-scripts allow-same-origin"` ao iframe — bloqueia popups e
navegação de top-level, mantém scripts e a origem do Google (necessário
para o mapa renderizar, arrastar e dar zoom normalmente). Verificado
via Playwright (clique no mapa, clique na área do link "Open in Maps",
desktop 1440×900 e mobile 375×812): mapa continua funcional (pin,
controles de zoom, atribuição "Google", link "Open in Maps" visível
dentro da caixa), zero popups/novas abas abertas em nenhum teste, e
nada aparece fora da seção ao rolar de volta ao topo da página depois
da interação.

## Estrutura da landing page
1. Hero — loop de produtos (ver seção acima), CTAs "Pedir no iFood"
   e "Ver no mapa", chama divisora (HeroFlameDivider) como elemento
   irmão logo após o Hero em `page.tsx` (fluxo normal, margem negativa
   em %, a cavaleiro da fronteira Hero/Sobre — ver "v9" na seção da
   chama abaixo), fazendo a transição para Sobre
2. Sobre / Nossa História — composição editorial (foto principal +
   foto secundária com moldura floral), bandeira do Pará, "essência
   permanece", selo Sebrae discreto
3. Ilustração divisora (SobreDivider) — faixa full-bleed, transição
   sem separação rígida até a Vitrine
4. Vitrine de criações — 4 itens com descrição, fotos grandes, sem
   preço, CTA "Ver cardápio completo" (iFood + Pedir/Retirar)
5. Localização — título bicolor, mapa customizado (filtro de cor,
   marcador próprio, card inteiro clicável), endereço + botão "Abrir no
   Google Maps", "Horários da brasa"; divisória floral (FloralDivider)
   como elemento irmão logo após, mesma técnica de margem negativa em %
   da chama do Hero (ver "Seção Localização" e "Divisória floral"
   acima), fazendo a transição para o CTA final
6. CTA final + rodapé — Instagram, links de pedido, horário resumido

## Chama divisora entre Hero e Sobre (HeroFlameDivider.tsx)
Substituída nesta rodada: a v1 era uma silhueta em SVG puro
(path gerado por PRNG com seed fixa) que, apesar de tecnicamente
funcionar (grão reaproveitando `GRAIN_LEVEL_CONFIG[2]` de
`src/lib/grain.ts`, contorno, posicionamento), lia visualmente como
gráfico de barras/serra, não como chama — problema de FORMA, não de
implementação técnica. Removida por completo (arquivo recriado do
zero, sem código morto) e substituída por uma imagem real ilustrada:
`/referencia/marca/divisoria-chamas.png` → copiada para
`/public/images/divisoria-chamas.png` (mesmo padrão dos demais assets
de produção). `src/lib/grain.ts` continua em uso — não ficou órfão,
`TexturedHeading.tsx` ainda importa de lá.

**Asset**: fonte original 2172×724px (~3:1), canal alpha real
confirmado via `sharp` (`hasAlpha: true`), silhueta de chamas
orgânicas com folhas/flores entremeadas (identidade botânica do
projeto), grão/textura já pintados na própria arte.

**Correção de crop**: a arte tem as chamas apoiadas numa "faixa de
solo" ~98% opaca por volta de y≈590-609 (de 724), seguida de ~115px
de margem TOTALMENTE transparente até a borda inferior real do
arquivo (724), e mais ~240px de margem transparente acima do pico
mais alto. Usar o arquivo como veio, com `object-position: bottom`,
ancora na borda REAL do arquivo (y=724) — ou seja, mostraria a margem
morta abaixo da faixa de solo, não a própria faixa, o que na prática
produzia uma barra escura sólida seguida de um vão visível até a cor
da seção Sobre (bug pego em teste, print incluído no processo). Como
a margem removida era 100% canvas vazio (nenhum conteúdo visível foi
tocado/escalado), croppada via `sharp` para `top=240, height=372`
(mantém a largura inteira, 2172px) — isso não é "distorcer" a
proporção original (nenhum pixel visível foi esticado), só descarta
moldura vazia. Nota: a mesma técnica de "ancorar via `object-position:
bottom` numa caixa de altura menor que a imagem" que funcionou bem
para o produto do Hero (ver `Hero.tsx`) não se aplicava aqui do mesmo
jeito, porque lá a imagem inteira é conteúdo relevante; aqui havia
margem morta real para descartar primeiro.

**Cor de fundo do wrapper**: `bg-orange-sobre` (mesmo token da seção
Sobre) — não é preenchimento da chama em si (a chama já vem colorida
na própria arte, em blocos vinho/laranja/dourado fixos, não segue o
token de cor da seção), é o fundo do `<div>` que contém a imagem.

**Posicionamento — dois bugs encontrados e corrigidos em sequência**:
1. Primeira tentativa: replicar a técnica v1 (margem negativa
   EXATAMENTE igual à altura do elemento, para contribuição líquida
   zero ao fluxo da página). Gerou um gap de fato (`sobreTop` deixou
   de bater com `sectionHeight` do Hero), porque a altura escolhida
   para mostrar a chama inteira sem cortar (~128px em desktop) era
   maior que a distância segura até os CTAs do Hero (80px) e os
   dots (40px) — usar margem = altura nessas condições cobria
   visualmente os CTAs/dots (bug real, pego em screenshot: "PEDIR NO
   IFOOD" parcialmente coberto pela arte).
2. Corrigido DESACOPLANDO altura de sobreposição: a imagem renderiza
   na proporção natural do arquivo já croppado (`h-auto w-full`, sem
   `fill`/`object-cover`, então nunca mais cortada por CSS depois do
   crop do arquivo), com margem negativa bem mais modesta
   (`-mt-6`/`-mt-8`/`-mt-10`, 24-40px) — suficiente para ler como
   "chama entrando no Hero" sem alcançar CTAs (80px de folga) nem
   dots (40px de folga). Como a altura do elemento (bem maior que a
   sobreposição) faz parte dele "sobrar" abaixo da borda real do
   Hero, essa sobra fica sobre `bg-orange-sobre` (mesmo token do
   Sobre) — lê como uma extensão contínua da própria seção Sobre, sem
   costura, em vez de expor o preto padrão do `<body>`
   (`var(--color-ink)`) que apareceria ali sem esse fundo.

`HeroFlameDivider` continua IRMÃO do Hero em `page.tsx` (nunca filho)
— `sectionHeight` do Hero reconferido em 730px em 1440×900 nas duas
versões (v1 e v2), sem mudança em nenhuma.

Validação: screenshot da transição em 1440px e 375px, nos dois slides
do Hero (contraste confirmado entre o vinho do Filé e o âmbar da
Estação Belém, ambos visíveis atrás da faixa antes da chama), CTAs e
dots do Hero visivelmente livres de sobreposição, transição sem
costura até o título/fotos da seção Sobre (confirmado com scroll
adicional); `sectionHeight` do Hero reconferido; dots reconfirmados
clicáveis (regressão do bug de `pointer-events` da v1, ainda
presente/corrigido do mesmo jeito nesta versão); `next build` e
`next lint` limpos.

### v3 — de "seção com espaço próprio" para overlay puro
A v2 (acima) ainda tinha um problema conceitual, mesmo sem bug visual
óbvio: `HeroFlameDivider` era um `<div>` no FLUXO normal de
`page.tsx` (irmão do Hero, com altura própria + margem negativa
menor que essa altura) — ou seja, ainda ocupava espaço de página e
empurrava `#sobre` para baixo (`sobreTop` ficava ~200px+ acima de
`sectionHeight`, preenchido por `bg-orange-sobre` no próprio wrapper
da chama). Corrigido para um overlay de verdade, sem espaço próprio:

- **Estrutura**: `page.tsx` agora envolve só `<Hero />` (não
  `Hero.tsx` em si — arquivo intocado) num `<div className="relative
  z-10">`. `HeroFlameDivider` virou filho desse wrapper, IRMÃO do
  Hero (não descendente dele), com
  `absolute inset-x-0 bottom-0 translate-y-[45%]`. Motivo de não
  aninhar dentro do próprio `<section>` do Hero: essa section tem
  `overflow-hidden` (usado para conter o crossfade de fundo e as
  transições do carrossel) — qualquer filho tentando ultrapassar essa
  borda seria cortado ali, então a chama precisa estar num
  contêiner-irmão sem overflow-hidden, ancorado à MESMA borda inferior
  via `position:relative` no wrapper (que tem exatamente a altura do
  Hero, já que Hero é seu único filho em fluxo normal).
- **z-index no wrapper, não só na chama**: como `#sobre` vem DEPOIS do
  wrapper no DOM e nenhum dos dois tinha z-index antes, a ordem de
  pintura seguiria a ordem do DOM (`#sobre` por cima do wrapper,
  escondendo a parte da chama que entra visualmente na área do
  Sobre). `z-10` no WRAPPER (não só no elemento da chama) resolve
  isso — compara com `#sobre` (z-index automático/0) no mesmo
  contexto de empilhamento de `<main>`, então o grupo inteiro
  (Hero + chama) pinta por cima de `#sobre` onde há sobreposição
  visual.
- **`translateY(45%)`, não pixels fixos**: porcentagem é relativa à
  própria altura do elemento (não da viewport nem de um valor fixo),
  então a proporção entre a parte que fica "dentro" do Hero e a parte
  que "vaza" para o Sobre se mantém idêntica em qualquer largura de
  tela — mesmo comportamento proporcional em 375px e 1440px sem
  nenhum valor específico por breakpoint.
- **Sem `bg-orange-sobre` no wrapper da chama (diferente da v2)**:
  não é mais necessário. Como `#sobre` agora começa EXATAMENTE onde o
  Hero termina (zero gap — a v2 tinha um gap real ali, coberto pelo
  fundo do próprio wrapper), a parte da chama que "vaza" para baixo
  sobrepõe o fundo REAL da seção Sobre (não um vão vazio), então os
  vãos transparentes entre as labaredas já mostram o fundo/textura
  real do Sobre por trás — nenhum fundo de segurança é preciso.
- **Asset re-croppado, mais compacto**: pedido explícito de reduzir o
  tamanho. Recortado mais uma vez a partir do arquivo de referência
  original (não do já-croppado da v2, para não perder qualidade) —
  de `top=240,height=372` (v2) para `top=350,height=262` (v3), descar-
  tando o pico mais alto e fino da arte, mantendo o corpo principal
  das labaredas + folhas/flores (conferido visualmente que a variação
  de forma continua boa). Resultado: ~174px de altura natural em
  1440px de largura (era ~246px na v2, redução de ~29%).

Validação: `sectionHeight` do Hero conferido em 730px E `sobreTop`
conferido EXATAMENTE igual a 730px (zero gap, diferente da v2) em
1440×900, nos dois slides; screenshot full-Hero confirmando setas,
dots e os dois CTAs completamente livres de sobreposição, chama mais
compacta que a v2, transição sem costura até "Nossa história"; mesmo
teste repetido em 375px; dots reconfirmados clicáveis
(`pointer-events-none` preservado); `next build` e `next lint`
limpos.

### v4 — novo asset (2172×724 sem crop) + correção de sobreposição real
Cliente substituiu `/referencia/marca/divisoria-chamas.png` por uma
versão nova (mesmo nome de arquivo) — não mais o arquivo já
pré-croppado da v3, mas o original em 2172×724, com a silhueta de
chamas ocupando só ~45%-72% da altura (margem transparente grande
acima E abaixo, dentro do próprio PNG). `/public/images/` estava
desatualizado com a cópia antiga (262px de altura) — copiado de novo
a partir da referência.

Diagnóstico obrigatório feito antes de corrigir (medido, não
presumido): `getBoundingClientRect` confirmou que o fundo do Hero
(camadas de crossfade `absolute inset-0` dentro da `<section>`) cobre
exatamente a caixa inteira do Hero, e que `#sobre` começa exatamente
onde o Hero termina (`sobreTop === heroBottom`, zero gap — herdado
da v3, continua válido). Varredura de alpha via `sharp` no NOVO
arquivo: primeira linha opaca em y≈327 (45,2%), linha de base real
(onde a opacidade cai de ~97% para <50%) em y≈484-494 (66,9%-68,2%),
última linha tecnicamente opaca em y≈517 (só pétalas soltas de flor).

**Conflito real encontrado entre dois requisitos do pedido**: "largura
100%" + "nunca cobrir CTAs/dots/setas" são incompatíveis usando o
arquivo inteiro sem nenhum ajuste. Nas proporções nativas do arquivo,
a distância do pico mais alto até a linha de base, escalada para
100% de largura em 1440px, é de ~108px (pico mais alto, que fica nas
pontas/flores, fora do centro) ou ~58px (medindo só na faixa central,
onde ficam os dots/CTAs/logo) — as duas ultrapassam a folga real dos
dots (40px, medida via `getBoundingClientRect`, igual em 1440 e
375px) mesmo usando só a faixa central. Ou seja, não existe um jeito
de mostrar o arquivo inteiro a 100% de largura sem cobrir os dots.
Resolvido priorizando a regra CRÍTICA (nunca sobrepor), sem alterar o
arquivo entregue: usado `object-fit: cover` + `object-position`
(`center 65%`, calculado via a fórmula padrão de cover positioning)
para selecionar uma janela mais curta e ancorada na base do arquivo
completo — sem recortar/re-exportar o arquivo, sem `translateY`
(desnecessário: a própria janela de recorte já termina exatamente na
linha de base, então `bottom-0` sozinho já alinha a base na emenda).

**Segundo problema encontrado durante o teste** (não previsto no
pedido, mas quebraria a regra em telas largas): uma altura baseada
só em `aspect-ratio` (proporcional à largura da viewport) cresce sem
limite — medido 48px de altura em 1920px (contra 35px em 1440px),
ultrapassando a folga fixa de 40px dos dots (que NÃO cresce com a
viewport além do `max-w-6xl` do conteúdo do Hero, confirmado
igual — 40px — em 1440, 375 E 1920px). Isso gerou uma sobreposição
real de -7px nos dots em 1920px durante o teste. Corrigido com
`h-[min(2.44vw,35px)]` em vez de `aspect-ratio` puro: proporcional
(2,44vw) em qualquer largura até ~1434px (cobre mobile/tablet/desktop
comum sem nenhum valor por breakpoint), depois trava em 35px fixo daí
pra cima — o que efetivamente mantém a MESMA folga segura de 1440px
em qualquer tela mais larga, em vez de deixar a altura crescer sem
limite contra uma folga que não cresce.

Validação: `getBoundingClientRect` re-testado num intervalo contínuo
de 16 larguras (320px a 2200px, não só os breakpoints fixos) —
`flameTopVsDotsBottom` (distância entre o topo da chama e a base dos
dots) positivo em TODAS as larguras testadas (de 32px em 320px até
5px em 1440px+, nunca negativo), e `gapHeroToSobre` exatamente 0 em
todas — confirma zero sobreposição e zero costura de cor em qualquer
tamanho de tela, não só nos pontos testados manualmente. Screenshot
com zoom na transição em 1440px, 375px e 1920px, nos dois slides
(Filé/vinho e Estação Belém/âmbar), confirmando CTAs totalmente
visíveis, dots visíveis acima da chama, base das chamas rente à
seção Sobre sem gap de cor; dots reconfirmados clicáveis
(`pointer-events-none` preservado); `next build` e `next lint`
limpos. Nota: o `next build` desta rodada precisou dos processos
`node` (dev server) parados antes de rodar, mesmo cuidado já
documentado numa rodada anterior — não relacionado a nenhuma mudança
de código desta rodada.

### v5 — a v4 cortava arte real, não só margem (chama "sem presença")
Reportado: a chama perdeu presença visual. Diagnóstico obrigatório
antes de corrigir — remedido o arquivo do zero via `sharp`, scan
pixel-a-pixel completo (sem amostragem, ao contrário de estimativas
anteriores): conteúdo opaco real vai da linha 325 à 523 (44,9%-72,2%
de 724px). A janela da v4 (`object-position: center 65%`, altura
`min(2,44vw,35px)`) mostrava só as linhas-fonte ~436-489 — cortando
111 linhas de arte real no topo (os picos mais altos das chamas) e 34
na base. Confirmado: a v4 cortava DESENHO, não só a margem
transparente — causa raiz da perda de presença.

**Conflito real, reportado ao cliente antes de decidir sozinho** (a
faixa completa de arte real, 198 linhas-fonte, precisa de ~131px em
1440px — mas só há 40px disponíveis acima da fronteira antes dos dots,
contra ~109px necessários se a base das chamas ficasse exatamente na
fronteira Hero/Sobre): resolvido com a opção confirmada pelo cliente —
deslocar o ponto de ancoragem PARA DENTRO da faixa fixa de arte real
(não mudar a faixa em si, que é fixa: 325-523), em vez de manter a
base visual das chamas exatamente na linha de cor. Resultado: 35px da
faixa ficam acima da fronteira (dentro do Hero, com folga segura sob
os 40px dos dots) e os ~96px restantes ficam abaixo (dentro do Sobre,
com folga segura sob os 112px até a foto/título de Sobre) — a faixa
INTEIRA aparece, sem cortar nada, só que a "base" visual das chamas
passa a ficar dentro da seção Sobre em vez de exatamente na linha de
cor. Lê como "chamas nascendo do Sobre, com as pontas subindo até o
Hero" — o cliente confirmou essa leitura como aceitável.

Implementação: `object-position: center 62%` (recalculado para a nova
janela) + `translate-y-[73.3%]` (a estratégia decisiva desta correção
— diferente de `bottom`/`top`, uma porcentagem em `transform` resolve
contra a altura do PRÓPRIO elemento, não do bloco de contenção; então
73,3% sempre desloca a caixa por 73,3% da SUA altura atual, mantendo a
proporção 35:96 entre a parte que fica no Hero e a que fica no Sobre
em qualquer largura de tela, inclusive quando a altura está no modo
proporcional OU já travada pelo `min()`). Altura recalculada para
`min(9,097vw,131px)` (era `min(2,44vw,35px)` na v4) — mesmo padrão de
"proporcional até ~1440px, trava fixo depois" já usado, só com os
novos números da faixa completa.

**"Sem costura de cor" — verificado, não é preciso nenhuma cor de
fundo nova no elemento**: pedido explícito do cliente para garantir
que a área transparente da caixa mostre a cor certa em cada ponto
(Hero atrás da parte sobre o Hero, Sobre atrás da parte sobre o
Sobre), não uma cor fixa aplicada à caixa inteira — confirmado que a
arquitetura já implementada em rodada anterior satisfaz isso por
construção, sem precisar adicionar nada: o elemento da chama (e o
wrapper que o contém, ao redor de `<Hero />`) não tem `background`
próprio, então onde está transparente, o que aparece por trás é
literalmente o que está pintado ali — o crossfade do Hero na parte
que ainda está dentro da caixa do wrapper (acima da fronteira), e o
fundo/textura reais da seção Sobre na parte que passou a ultrapassar
a borda do wrapper (abaixo da fronteira, sem `overflow-hidden` para
cortar, e com `z-10` só reordenando a pintura por cima do Sobre, sem
inserir nenhuma cor própria). Nenhuma cor de fundo foi adicionada ao
elemento — fazer isso teria recriado o mesmo bug de costura já
corrigido numa rodada anterior deste projeto.

Validação: `getBoundingClientRect` medido em 9 larguras (320px a
2200px) — margem de segurança positiva em TODOS os pontos-chave
(dots, CTA, título de Sobre) em todas as larguras (de 5px em 1440px+
até 32px em 320px, nunca negativo) e `gapHeroToSobre` exatamente 0 em
todas; screenshot com zoom em 1440px e 375px, nos dois slides,
confirmando a faixa de chamas completa e com presença visual clara
(picos altos, folhas, flores todos visíveis, nada cortado), CTAs
100% visíveis com folga clara, e a transição de cor correta (cor do
Hero acima, textura granulada de Sobre abaixo, sem faixa de cor
errada nem costura); dots reconfirmados clicáveis; `next build` e
`next lint` limpos.

### v6 — a v5 tecnicamente mostrava mais chama no Sobre, mas lia como "presa ao Hero"
Reportado numa rodada seguinte: mesmo com a v5 (35px da chama acima da
fronteira / 96px abaixo — MAIS chama tecnicamente do lado do Sobre),
o elemento ainda lia como "dentro/na parte inferior do Hero". Causa
raiz encontrada por amostragem de pixel direta (não só geometria do
DOM): medida a cobertura horizontal de opacidade linha a linha (que
fração da LARGURA tem pixel opaco em cada linha, não só "existe algum
pixel") — a faixa 325-523 usada na v5 é majoritariamente ESPARSA: a
cobertura sobe gradualmente de ~0% (linha 325) para só ~50% na linha
440, e só fica realmente densa (80-96%) numa faixa estreita, linhas
~455-495 (o "tronco" sólido das chamas). Como a v5 ancorava a
fronteira dentro da parte esparsa da faixa, em boa parte da largura
NÃO havia chama nenhuma visível acima da linha de cor — só o tronco
denso (já abaixo da linha, dentro do Sobre) lia como "fogo de
verdade". Confirmado via amostragem de pixel real no screenshot
renderizado (não só cálculo): no slide Filé, a cor de fundo ficava
constante (197,59,37 — Hero) até bem perto da linha de transição, sem
nenhum traço de chama visível ali, e só depois da mudança de cor
(230,87,12 — Sobre) é que a arte aparecia. Resultado: mesmo com mais
linhas tecnicamente do lado do Sobre, a experiência visual era "fogo
decorando o rodapé do Hero", não "fogo atravessando a fronteira".

Corrigido ancorando a fronteira dentro da faixa DENSA (linha ≈475, o
meio do tronco sólido) em vez de em qualquer ponto da faixa completa.
Janela exibida: linhas 430-523 (em vez de toda a faixa 325-523) — ~30px
de chama densa e contínua acima da fronteira (dentro do Hero, com
~10px de folga sob os 40px dos dots — uma primeira tentativa mirou
38px e sobrou só 2px de folga, considerado arriscado demais dado o
cuidado histórico com esse limite; recuado para a versão atual) e
~32px abaixo (dentro do Sobre, folga confortável sob os 112px
disponíveis). Os dois lados agora mostram chama substancial, não só
um. `object-position: center 68.2%` (recalculado para a nova janela)
+ `translate-y-[51.5%]` (mesma técnica da v5 — porcentagem de
`transform` resolve contra a altura do próprio elemento, mantendo a
proporção em qualquer largura). Altura recalculada para
`min(4,282vw,61,7px)` (era `min(9,097vw,131px)` na v5 — janela mais
estreita, focada na parte densa, resultando num elemento mais
compacto).

Validação: `getBoundingClientRect` re-testado em 9 larguras (320px a
2200px) — margem de segurança sob os dots de 10px em 1440px+ (era
2px na primeira tentativa desta rodada, corrigido) subindo até 33px
em 320px (folga maior nas larguras menores), nunca negativa;
`gapHeroToSobre` exatamente 0 em todas; `sectionHeight` do Hero
reconferido em 730px (sem mudança); screenshot com zoom em 1440px e
375px, nos dois slides, confirmando a mudança de cor (onde visível —
no slide Filé, as cores de Hero e Sobre são bem distintas; no slide
Estação Belém, `--color-orange-bright` e `--color-orange-sobre` são
próximas o bastante para a costura não ficar perceptível, então esse
slide depende mais da posição do fogo em si do que do contraste de
cor) passando pelo meio do corpo denso das chamas, com arte
substancial visível dos dois lados da linha; CTAs com folga clara;
`next build` e `next lint` limpos.

### v7 — asset trocado por versão pré-cortada; `object-fit: contain` em vez de `cover`
Cliente reportou (com análise de pixel própria) que a v6 ainda
cortava as pontas das chamas no topo em vez de deixá-las afinar
naturalmente — consequência esperada de usar `object-fit: cover` +
`object-position` para selecionar uma JANELA da arte: por definição,
qualquer janela menor que a arte completa corta alguma coisa. Cliente
forneceu um novo arquivo já cortado no bounding box real:
`divisoria-chamas-cortada.png` (2172×214, ~10,15:1) — copiado de
`/referencia/marca/` para `/public/images/`, substituindo a
referência à `divisoria-chamas.png` antiga (2172×724) no componente.
Confirmado via `sharp`: conteúdo opaco do novo arquivo vai de y=8 a
y=206 (de 214) — praticamente sem margem morta sobrando, só ~3px de
respiro em cada ponta.

Como a arte agora vem sem margem morta, `object-fit: cover` deixou de
fazer sentido — usá-lo continuaria recortando arte real, exatamente o
bug reportado. Trocado por `object-fit: contain` (nunca corta, só
aplica letterbox se a caixa não bater com a proporção da imagem) e
removido o `object-position` (não há mais janela para escolher — a
imagem inteira sempre aparece).

**Conflito de espaço, mais apertado que nas rodadas anteriores**: a
arte completa precisa de ~142px em 1440px de largura (proporção
2172:214), contra um orçamento combinado de só 152px (40px até os
dots + 112px até a foto do Sobre) — sobram só ~10px de folga TOTAL
para distribuir como margem de segurança dos dois lados
simultaneamente (bem menos do que nas correções anteriores, que só
mostravam parte da arte e tinham dezenas de px de sobra). Resolvido
com uma divisão de ~35px acima da fronteira (5px de folga sob os
40px dos dots) e ~107px abaixo (5px de folga sob os 112px do Sobre)
via `translate-y-[75.3%]` — mesma técnica de porcentagem-sobre-a-
própria-altura das rodadas anteriores. Nota para o futuro: essa
margem de 5px é bem mais apertada que os ~10px usados quando havia
folga de sobra — se o layout do Hero ou do Sobre mudar o suficiente
para reduzir ainda mais esses orçamentos, essa é a primeira coisa que
precisaria ser revista.

**Telas muito largas**: como a largura é sempre 100% mas a altura tem
que travar (`min(9,853vw,141,9px)`, mesmo padrão de rodadas
anteriores) para não crescer sem limite contra uma folga que não
cresce, em viewports muito largos (acima de ~1440px) `object-fit:
contain` passa a redesenhar a imagem MENOR que 100% da largura
(centralizada) para caber na altura travada, em vez de cortar. É uma
troca deliberada: a arte nunca é cortada nem distorcida em nenhuma
largura, mas deixa de ocupar 100% da largura especificamente acima
de ~1440px — considerado aceitável frente às duas alternativas piores
(cortar a arte ou cobrir os dots).

`divisoria-chamas.png` (arquivo antigo) ficou sem uso — só aparece em
comentário no código agora, nenhum `<Image src>` aponta mais para ele.
Não foi excluído (mesmo padrão já usado com `moldura.png` numa rodada
anterior).

Validação: `getBoundingClientRect` testado em 9 larguras (320px a
2200px) — margem de segurança sob os dots de 5px em 1440px+ (o mínimo
de todas as rodadas até aqui, mas positivo) subindo para 32px em
320px; `gapHeroToSobre` exatamente 0 em todas; `sectionHeight` do
Hero reconferido em 730px; screenshot com zoom em 1440px e 375px, nos
dois slides, confirmando as pontas das chamas afinando naturalmente
no topo E na base (sem corte abrupto em nenhuma extremidade),
comparado visualmente contra o arquivo `divisoria-chamas-cortada.png`
isolado — mesma proporção entre chama/flor/folha, sem distorção;
CTAs 100% visíveis; `next build` e `next lint` limpos.

### v8 — mudança estrutural: de overlay `position: absolute` para fluxo normal
Todas as versões anteriores (v3 a v7) eram variações de uma mesma
abordagem: a chama como elemento `position: absolute; bottom: 0`
ancorado a um wrapper ao redor do Hero, tentando calcular (via
`translateY`, `object-position`, alturas em `min(vw, px)`) qual
fração da imagem deveria ficar acima vs. abaixo da fronteira Hero/
Sobre. Isso funcionava, mas exigia recalcular a ancoragem toda vez
que o conteúdo do Hero ou o orçamento de espaço disponível mudava —
uma classe inteira de bug (documentada repetidamente nas seções
acima) que só existe PORQUE a chama vive fora do fluxo normal do
documento.

Pedido do cliente nesta rodada: eliminar essa classe de bug pela
raiz, tornando a chama um elemento NORMAL do fluxo — sem
`position`, sem `bottom`, sem `translateY`, sem cálculo de ancoragem
nenhum. Implementado:

- `HeroFlameDivider.tsx` simplificado drasticamente: virou só um
  `<Image>` com `width={2172} height={214}` (dimensões intrínsecas do
  asset já cortado) + `className="block h-auto w-full"` — sem `fill`,
  sem `object-fit`, sem `absolute`. `w-full h-auto` preserva a
  proporção 2172:214 do arquivo em qualquer largura, sem nunca
  distorcer nem precisar de lógica de crop.
- Renderizado agora DENTRO do JSX do `Hero.tsx` (não mais em
  `page.tsx` como elemento externo) — último filho da `<div
  className="relative z-10 flex w-full flex-col">` que envolve todo o
  conteúdo do Hero, mas FORA da coluna interna `mx-auto max-w-6xl
  px-6 sm:px-10` que contém o produto/lettering/descrição/CTAs/dots.
  Motivo de ficar fora dessa coluna interna: ela tem `max-w-6xl` e
  padding horizontal — um filho dela nunca ocuparia 100% da largura
  da viewport, só até ~1152px. Ficando um nível acima (irmã dessa
  coluna, não filha), a chama herda só o `w-full` do wrapper externo,
  sem o teto de largura nem o padding lateral.
- `page.tsx` simplificado de volta: removido o `<div
  className="relative z-10">` que existia só para dar ao overlay um
  contexto de posicionamento fora do `overflow-hidden` do Hero — sem
  overlay, não tem mais nada para esse wrapper fazer.
  `<Hero /><About />...` direto, mesma estrutura de antes de toda essa
  história de overlay começar.
- `overflow-hidden` na `<section>` do Hero deixou de ser um problema:
  antes, ele existia especificamente para impedir que o overlay
  "vazasse" para fora do Hero (e por isso o overlay tinha que morar
  FORA da section, num wrapper irmão) — agora a chama é conteúdo
  normal DENTRO da própria altura do Hero, não tenta ultrapassar a
  borda de nada, então `overflow-hidden` nunca entra em conflito com
  ela.
- Confirmado que a `<section>` do Hero continua sem `min-height` (já
  documentado em rodada bem anterior) — a altura do Hero é 100%
  definida pela soma do conteúdo (produto + lettering + badges +
  descrição + CTAs + dots + agora a chama), crescendo naturalmente
  conforme a largura da viewport muda a altura renderizada da chama
  (que é proporcional à sua própria largura, que é sempre 100% da
  viewport).

Efeito colateral esperado e aceito: a altura TOTAL do Hero aumentou
(de 730px para 871px em 1440×900, por exemplo — a chama antes
"roubava" altura do Sobre ao invadir seu espaço; agora ela soma à
altura do próprio Hero). Isso empurra a seção Sobre um pouco mais
para baixo na página — comportamento explicitamente esperado e
aprovado pelo cliente ("ela só vai começar um pouco mais abaixo na
página, o que é esperado").

Validação: `getBoundingClientRect` testado em 13 larguras contínuas
(320px a 1920px, não só breakpoints) — `flameBottom === heroBottom
=== sobreTop` (gap zero) em TODAS, sem exceção, e
`flameWidth === viewportWidth` (100% de largura) em todas também;
`position: static` e `transform: none` confirmados no elemento (zero
posicionamento especial); `sectionHeight` idêntico entre os dois
slides (871px em 1440×900, antes 730px — mudança esperada, ver
acima); screenshot com zoom em 1440px e 375px, nos dois slides,
confirmando a chama grudada na transição real sem gap laranja "puro"
nem sobreposição; stress test de navegação rápida (clique em rajada +
troca de slide) sem erros de console e ainda responsivo; `next build`
e `next lint` limpos.

### v9 — chama a cavaleiro da fronteira Hero/Sobre (margem negativa em %)
Depois da v8, a chama ficava inteiramente DENTRO da altura do Hero
(era o último conteúdo, então terminava exatamente onde o fundo do
Hero terminava) — visualmente ela lia como "parte do Hero", não como
uma transição entre as duas seções: a cor de fundo do Sobre só
começava DEPOIS da chama acabar, nunca no meio dela.

Pedido do cliente nesta rodada: reposicionar a chama para ficar
CENTRALIZADA exatamente sobre a linha de fronteira (metade sobre a
cor do Hero, metade sobre a cor do Sobre), sem mover essa linha nem
alterar a altura do Hero/Sobre/qualquer outro conteúdo, usando
especificamente margem negativa em porcentagem (não `translateY`, não
JS, não offset calculado uma vez) — a técnica exata fornecida:
`margin-top: -4.93%; margin-bottom: -4.93%` (metade de 214/2172,
proporção do arquivo `divisoria-chamas-cortada.png`).

**Por que a técnica funciona sem JS**: margem vertical em porcentagem
sempre resolve contra a LARGURA do bloco continente, nunca a altura —
e a altura renderizada da própria chama também é function da mesma
largura (proporção fixa 2172:214, via `next/image` com
`width={2172} height={214}` + `h-auto w-full`). Então uma margem
negativa expressa como % de largura é sempre metade da altura
renderizada da própria imagem, em qualquer viewport, sem recalcular
nada. Com `margin-top` e `margin-bottom` iguais e negativos, a altura
própria do elemento (H) é cancelada pelas duas margens (H + -H/2 +
-H/2 = 0) — contribuição líquida zero para o fluxo do documento, ou
seja, os elementos vizinhos (Hero acima, Sobre abaixo) ficam
posicionados exatamente onde ficariam se a chama não existisse, mas a
arte em si renderiza centralizada no ponto onde ela apareceria sem
margens, puxada metade para cima.

**Problema identificado ANTES de implementar (via leitura do código
existente, não só do pedido)**: a `<section>` do Hero mantém
`overflow-hidden` (necessário para o crossfade do fundo e as
transições do carrossel, que usam `absolute inset-0`). A chama, desde
a v8, vivia DENTRO dessa section como seu último filho — se a margem
negativa fosse aplicada ali, a metade inferior da imagem (que
precisa se estender para ALÉM da borda do Hero, sobre o Sobre)
seria cortada pelo `overflow-hidden`, invalidando a técnica inteira.

**Solução**: mover `<HeroFlameDivider />` de volta para fora da
`<section>` do Hero, como IRMÃ de `<Hero />` e `<About />` direto em
`page.tsx` (`<Hero /><HeroFlameDivider /><About />`) — `<main>` não
tem `overflow-hidden`, então nada corta a metade inferior. Isso reduz
a altura do próprio Hero de volta ao valor "só conteúdo" (730px em
1440×900, o valor de ANTES da v8 inflar para 871px ao herdar a altura
da chama) — consequência direta e esperada de tirar a chama do fluxo
interno do Hero: a fronteira Hero/Sobre volta a ficar exatamente onde
o conteúdo do Hero (produto/lettering/CTAs/dots) naturalmente termina,
sem a chama "inflando" artificialmente essa altura como acontecia na
v8. `HeroFlameDivider.tsx` ganhou `relative z-10` (só para o
`z-index` ter efeito — não tem efeito em elemento `static`) e
`pointer-events-none` (não intercepta cliques na metade que sobrepõe
o Sobre).

**Empilhamento (z-index) na zona de sobreposição**: em viewports
largos (⪆1024px), a caixa delimitadora da chama (incluindo a franja
esparsa/quase-transparente do topo do desenho) chega a se sobrepor
verticalmente à linha dos CTAs/dots do Hero — mas essa linha vive
dentro de um `<div className="relative z-30 ...">`, e como a
`<section>` do Hero não define seu próprio contexto de empilhamento
(só `position: relative` sem `z-index` não cria um), o `z-30` dos
CTAs/dots é comparado direto contra o `z-10` da chama (irmã em
`page.tsx`) no MESMO contexto — CTAs e dots continuam renderizando por
cima da chama nessa zona, confirmado visualmente via screenshot em
1920px (nenhuma sobreposição visível da arte sobre os botões).

Validação: `getBoundingClientRect` em 13 larguras (320px a 1920px) —
`flameCenter - heroBottom === 0` (chama perfeitamente centralizada na
fronteira) em TODAS, sem exceção; `seamGap` (sobreTop - heroBottom)
igual a 0 em todas (fronteira não se moveu); `heroHeight` de volta a
730px em breakpoints ≥1024px (valor "só conteúdo", consistente entre
os dois slides); screenshots em 375/768/1440/1920px, nos dois slides
(Filé e Estação Belém, cores de fundo `--color-orange` e
`--color-orange-bright`), confirmando a chama a cavaleiro da linha de
cor em ambos, flores das extremidades visíveis e alinhadas às bordas
da página sem corte, nenhuma sobreposição visual com CTA/dots; stress
test de navegação rápida (clique em rajada + troca de slide) sem
erros de console; `next build` e `next lint` limpos.

### v10 — base visual da chama alinhada à linha (não o centro geométrico)
Reportado numa rodada seguinte: mesmo com a v9 (chama tecnicamente
centralizada na fronteira, `flameCenter - heroBottom === 0`), as
chamas ainda liam como "dentro da seção laranja" — desciam demais
para dentro de "Nossa História".

Causa raiz encontrada por análise de densidade de opacidade linha a
linha do PNG (`sharp`, não estimativa visual): a v9 usava margens
iguais (`-4.93%`/`-4.93%`), que centralizam o PONTO MÉDIO GEOMÉTRICO
da imagem (linha 107 de 214) sobre a fronteira. Mas a silhueta do
fogo não é simétrica: linhas 0-150 são as pontas esparsas das chamas
subindo (cobertura de opacidade por linha sobe gradualmente de 0% a
~90%), linhas ~155-172 são uma faixa densa e quase contínua (88-97%
de cobertura) — a "base visual" real do desenho — e linhas ~173-206
caem rápido (80% → 0%) nas pontinhas esparsas de flor/folha que
pendem abaixo da base. Como a linha 107 (o centro geométrico usado
pela v9) ainda está bem dentro da região esparsa de cima, centralizar
nela empurrava a faixa densa real (linha ~172) para bem abaixo da
fronteira, dentro do Sobre — exatamente o bug relatado.

**Correção**: trocar a divisão 50/50 por uma divisão PONDERADA, que
alinha a linha da BASE VISUAL (não o centro geométrico) à fronteira.
margin-top e margin-bottom continuam sendo os únicos dois valores
(sem JS, sem `translateY`, mesma técnica de percentual-sobre-largura
da v9 — a soma dos dois continua igual a `-(214/2172) ≈ -9,85%`,
então a contribuição líquida ao fluxo da página continua zero,
preservando `heroHeight`/`seamGap` inalterados), só que agora
DESIGUAIS: `margin-top = -(linha/214) × 9,85%`, `margin-bottom =
-(1 - linha/214) × 9,85%`.

Duas iterações testadas (visual + medição, conforme pedido
explicitamente — "pequenos ajustes incrementais"):
1. **linha 172** (bem no meio da faixa densa): `-7,92%`/`-1,93%`.
   Screenshot em 1440px ficou exatamente como pedido (base do fogo
   rente à linha, só as pontinhas de flor abaixo dela). Mas como a
   arte é `100vw` sem teto de altura (decisão da v8, não alterada
   aqui — a proporção 2172:214 vale em qualquer largura), em
   1920px a imagem fica bem mais alta (189px) e essa divisão puxou
   línguas de fogo individuais alto o bastante para tocar visualmente
   o botão "Pedir no iFood" — confirmado por screenshot recortado
   exatamente na caixa do botão (`getBoundingClientRect` do CTA),
   não só por medição de bounding-box da imagem inteira (que inclui
   bastante moldura vazia no topo e por isso não capturava esse
   toque pontual de uma língua de fogo específica).
2. **linha 150** (pouco antes do início do platô denso, não no meio
   dele): `-6,91%`/`-2,95%`. Recuado da linha 172 especificamente
   para abrir mais folga até o CTA/dots em telas largas. Reconferido
   por screenshot recortado: em 1920px, gap visível claro entre as
   pontas mais altas do fogo e o botão (sem toque); em 1440/768/375px
   a base do fogo continua lendo claramente "na linha", com boa folga
   dos CTAs/dots em todos. Valor final adotado.

Trade-off documentado (não um bug, uma escolha deliberada dentro do
pedido): a linha 150 deixa uma faixa de transição um pouco mais
"suave" (menos línguas de fogo agressivas empurradas para cima) que a
linha 172 deixaria — e por consequência a `flameBottom` fica ~15px
mais funda no Sobre que a tentativa da linha 172 (42px vs 27px em
1440px, contra os ~70px da v9 e os fixos "dezenas de pixels" do
problema original) — ainda assim uma fração pequena da sobreposição
antiga, e a prioridade explícita do pedido (nunca sobrepor CTA/dots,
já um princípio antigo e repetidamente reforçado neste projeto) pesou
mais que espremer os últimos pixels de sobreposição no Sobre.

Nada na seção "Nossa História" foi tocado (sem herança de margem,
sem padding, sem alteração de conteúdo) — confirmado que `heroHeight`
e `seamGap` seguem idênticos à v9 em todas as larguras testadas.

Validação: `getBoundingClientRect` em 13 larguras (320px a 1920px) —
`heroHeight`/`seamGap` idênticos à v9 (zero mudança) em todas;
`flameBottom - heroBottom` (profundidade da sobreposição no Sobre)
entre 32px em 320px e 56px em 1920px, sempre positivo e pequeno
(nunca "dezenas" no sentido do problema original, que era ~70-190px);
screenshots recortados especificamente na caixa do CTA/dots (não só
na área geral da chama) em 1440px e 1920px confirmando folga real,
sem toque; screenshots completos da transição em 375/768/1440/1920px,
nos dois slides (Filé e Estação Belém), confirmando a base do fogo
visualmente "na linha" com pequena sobreposição de flores/folhas;
stress test de navegação rápida sem erros de console; `next build` e
`next lint` limpos.

## Seção Localização — reformulação (mapa customizado, horários, divisória floral)
Reescrita completa de `Location.tsx` a partir de uma imagem de referência
compartilhada pelo cliente (usada só para estrutura/hierarquia/organização
dos elementos, não para copiar texto ou tratamento gráfico literal — a
identidade visual do projeto, palette v2 + TexturedHeading + estética
pôster vintage, se mantém). Nenhuma outra seção da página foi alterada
(Hero, Sobre, Vitrine, CTA final continuam intocados) — só `Location.tsx`,
o novo `FloralDivider.tsx`, e a inserção desse componente em `page.tsx`
entre `<Location />` e `<SiteFooter />`.

Composição final (título → mapa → endereço+botão → horários →
divisória floral, esta última fora de `Location.tsx`, ver seção própria
abaixo):

**Título**: dois `TexturedHeading` separados (mesmo padrão de composição
bicolor já usado no Hero e em outros títulos — um único `TexturedHeading`
não permite duas cores num mesmo elemento, já que `background-clip:text`
se aplica ao texto inteiro do elemento) — "Onde" em ink (`dark`, seguro
sobre laranja) + "estamos" em dourado. Palavra dourada usa o MESMO
contorno em ink via 4 `drop-shadow` empilhados já estabelecido em
`About.tsx` para "Nossa história" (motivo documentado ali: dourado puro
sobre este laranja específico mede só ~2-3:1 de contraste, abaixo do
mínimo do WCAG) — reaproveitado tal qual, não uma solução nova.

**Mapa** (`<iframe>` do Google Maps Embed clássico, mantido — decisão
explícita do cliente de não migrar para a API paga):
- Filtro de cor via `filter` CSS direto no iframe (`sepia(0.5)
  saturate(1.5) hue-rotate(-10deg) contrast(1.05) brightness(0.95)`) —
  tira o tom azul/verde genérico do Google e aproxima da paleta laranja/
  terrosa da marca, mantendo as ruas/nomes legíveis.
- `pointer-events: none` no iframe — desativa drag/zoom/cliques próprios
  do embed por completo (mais simples e mais confiável entre viewports
  que tentar travar zoom/centro via parâmetros de URL, que esse formato
  legado de embed — `output=embed&q=`, sem chave de API — não suporta de
  forma consistente).
- Card inteiro (moldura + mapa + marcador) envolvido num único `<a
  href={site.mapsLinkSrc} target="_blank">` — como o iframe não intercepta
  mais nenhum clique (`pointer-events: none`), qualquer ponto do card
  propaga o clique direto para esse link, abrindo o endereço real no
  Google Maps em nova aba. Confirmado via Playwright clicando tanto no
  centro do card quanto no botão "Abrir no Google Maps" — os dois abrem a
  mesma URL correta em nova aba.
- Moldura: `rounded-2xl border border-ink shadow-2xl shadow-black/40` —
  já era a classe usada aqui antes desta rodada (o padrão "borda
  arredondada preta" pedido já existia neste componente específico,
  mesmo que as fotos de `About.tsx` tenham migrado para um tratamento
  diferente — moldura floral integrada na própria imagem — em rodadas
  anteriores). Mantida sem alteração.
- Marcador customizado: SVG próprio inline (pino teardrop clássico,
  `fill="var(--color-flame)"` com contorno `var(--color-ink)` e um
  círculo `var(--color-cream)` no centro) + um anel `animate-pulse`
  (utilitário padrão do Tailwind, já disponível sem CSS customizado —
  não existia nenhuma animação de pulso pré-existente no projeto para
  reaproveitar) atrás do pino, sutil (`bg-flame/50 blur-[3px]`). Sem
  nenhum texto tipo "É AQUI, Ó!" — só o ícone, conforme pedido.
  Posicionado nos 50%/50% do card (`left-1/2 top-1/2 -translate-x-1/2
  -translate-y-full`, a PONTA do pino tocando o centro, não o SVG
  inteiro centralizado) porque o embed clássico `output=embed&q=`
  centraliza o endereço buscado no meio do iframe por padrão — o
  marcador nativo do Google continua lá (sem forma de removê-lo,
  conteúdo cross-origin), só fica coberto visualmente pelo customizado.
- **Achado durante a implementação, não pedido mas necessário**: o embed
  `q=` do Google desenha seu PRÓPRIO chip de UI (nome do local + botão
  "Open in Maps"/atalho de rota) sempre ancorado no canto superior
  esquerdo do iframe — conteúdo e tamanho variam por zoom/viewport
  (confirmado via screenshot em 375px e 1440px: tamanhos e textos
  diferentes), então uma caixa de cobertura de tamanho fixo por cima
  seria frágil. Resolvido com uma vinheta (`radial-gradient` escuro,
  mais forte no canto superior esquerdo especificamente + mais sutil nas
  bordas em geral) sobre TODO o card — mesma técnica (radial-gradient
  escuro localizado) já usada atrás do produto no Hero, só com raio/
  posição diferentes. Escurece esse chip até ficar ilegível sem cortar
  nem esconder nenhuma parte real do mapa — lê como tratamento
  fotográfico/vintage intencional, não como um "remendo" por cima do
  widget do Google.

**Botão "Abrir no Google Maps"**: reaproveita literalmente a classe do
botão "Ver no mapa" do Hero (`rounded-full border border-ink/50 ...
hover:border-ink hover:bg-ink/10`) — nenhum estilo de botão novo. Ícone
de localização: um SVG inline pequeno (o projeto não tem nenhuma
biblioteca de ícones instalada — confirmado via busca em `package.json`
e em todo `src/`, o "sistema de ícones" do projeto é só glifos
tipográficos diretos como `‹ › →`, sem nenhum `<svg>` em componente
nenhum antes desta rodada) — então um SVG inline simples, sem introduzir
dependência nova, é a opção mais consistente com o padrão já existente,
não uma biblioteca nova. Seta reaproveita o mesmo caractere `→` que já
era usado no link antigo desta seção.

**Horários da brasa**: `TexturedHeading` (`as="h3"`, mesmo tratamento de
"Nossa história" — nível 2, `dark`, `rotate={-1.5}`) ladeado por dois
asteriscos tipográficos (`✳`, cor dourada) como elemento decorativo — o
projeto não tem nenhum ícone/motivo de estrela ou asterisco pré-
-desenhado para reaproveitar, então um glifo Unicode no mesmo sistema
tipográfico (Bebas Neue via `font-display`) evita tanto criar uma
ilustração nova quanto introduzir uma biblioteca de ícones só para isso.
Quatro blocos (`grid grid-cols-2 sm:grid-cols-4`, `border-l` entre eles
a partir de `sm:`) na ordem de EXIBIÇÃO "Terça a quinta / Sexta e sábado
/ Domingo / Segunda" (fechado por último) — só a ordem de renderização
muda (um array `HOURS_DISPLAY_ORDER` local que faz `.find()` em
`site.hours`), a fonte de dados (`site.ts`) não foi tocada nem
reordenada.

**"Segunda — Fechado" — bug de contraste pego e corrigido antes de
finalizar, não só por instrução do pedido**: a primeira tentativa seguiu
a sugestão do pedido ("cor mais apagada/vermelha, itálico") literalmente
— texto `text-flame/80 italic` direto sobre o fundo laranja da seção.
Medido via cálculo de contraste WCAG (mesma fórmula de luminância
relativa): `flame` (#e8321a) contra `orange` (#c43a24) mede só ~1,23:1 —
bem abaixo do mínimo de 3:1 do WCAG para texto grande, e pior ainda com
a opacidade 80% reduzindo mais o contraste (o `/80` aproxima ainda mais
a cor do próprio fundo). Isso replica exatamente o mesmo problema já
documentado no projeto para dourado-sobre-laranja (ver "Regra de texto
por fundo" na paleta oficial) — texto colorido direto sobre este laranja
específico quase sempre falha em contraste, não é peculiaridade do
dourado. Corrigido reaproveitando o OUTRO padrão já estabelecido no
projeto para esse mesmo problema (badges sobre laranja sempre com fundo
`bg-ink` sólido, nunca texto colorido direto — ver "Badges e botões
sobre fundo laranja" na paleta oficial): "Fechado" virou um chip
(`rounded-full bg-ink px-3 py-1`) com o texto `flame` italic DENTRO dele
— flame sobre ink mede ~4,68:1, confortável acima do mínimo. Efeito
colateral positivo: o chip também cumpre sozinho o "tratamento visual
distinto dos horários abertos" pedido (os outros 3 dias são texto plano,
sem chip), sem precisar de mais nenhum ajuste.

### Divisória floral (FloralDivider.tsx) — mesma técnica validada da chama
Usa `divisoria-floral-cortada.png` (referência do cliente, copiada para
`/public/images/`, 2172×228px, ~9,53:1, já cortada sem margem
transparente morta — confirmado via `sharp`, conteúdo opaco ocupa as
linhas 8-220 de 228). Implementada seguindo o MESMO método já validado
(depois de várias iterações documentadas acima) para
`HeroFlameDivider.tsx` — não uma técnica nova, a mesma:

- Renderizada como IRMÃ de `<Location />` e `<SiteFooter />` em
  `page.tsx`, nunca aninhada dentro de nenhuma das duas seções.
  Motivo, confirmado por leitura do código ANTES de implementar (o
  pedido exigia explicitamente essa análise, dado o histórico de bug
  documentado com a chama): o `<footer>` de `SiteFooter.tsx` é
  `overflow-hidden` (`className="bg-grain relative overflow-hidden
  bg-ink"`) — um elemento aninhado dentro dele nunca conseguiria
  ultrapassar visualmente sua própria borda, exatamente o que
  "sobrepor a linha de transição" exige (parte da arte sobre o laranja
  de Localização, parte sobre o preto do CTA final). Como irmã dentro
  de `<main>`, que não tem overflow clipping, essa restrição não existe.
- Margem negativa em porcentagem — `margin-top`/`margin-bottom`
  resolvem sempre contra a LARGURA do bloco continente (mesmo em
  propriedades verticais), e a altura renderizada da própria imagem
  também é função dessa mesma largura (proporção fixa 2172:228) — então
  uma margem em % de largura é sempre a mesma fração da altura
  renderizada da imagem, em qualquer viewport, sem JS, sem
  `translateY`, sem cálculo feito uma vez só.
- Margens DESIGUAIS, não 50/50 — mesma lição já documentada para a
  chama: o "peso visual" desta arte não é simétrico. Densidade de alpha
  por linha (via `sharp`) mostra uma curva em sino larga e suave
  (bem mais gradual que o platô+queda abrupta da chama), com o
  centroide ponderado por densidade na linha ~135 de 228 (59,2% da
  altura) — abaixo do meio geométrico (linha 114, 50%). Centralizar no
  meio geométrico (50/50) puxaria mais peso visual da arte para BAIXO
  da linha do que para cima. Corrigido ponderando a divisão para a
  linha 135 cair exatamente na costura: `margin-top = -(135/228) ×
  (228/2172) ≈ -6,21%`, `margin-bottom = -(1 − 135/228) × (228/2172) ≈
  -4,28%` (a soma continua igual a `-(228/2172) ≈ -10,50%` — contribuição
  líquida zero ao fluxo da página preservada, então a altura de
  Localização e a posição do rodapé não mudam).
- `position: relative` (sem nenhum offset) + `z-10` só para o `z-index`
  ter efeito (não funciona em elemento `static`) — desenha a arte por
  cima do conteúdo do rodapé na zona de sobreposição.
  `pointer-events-none` evita interceptar cliques do que está por baixo.

Validação: `getBoundingClientRect` em 15 larguras contínuas (320px a
1920px, incluindo valores fora de qualquer breakpoint do Tailwind, ex.
360/414/900/1200/1366/1536) — `seamGap` (topo do rodapé menos base de
Localização) exatamente 0 em TODAS, sem exceção; `floralWidth` igual à
largura do viewport em todas (100% de largura, full-bleed); folga entre
a base da arte e o botão "Pedir no iFood" do CTA final sempre positiva e
confortável (135px em 1920px até 190px em 640px, nunca perto de tocar);
screenshots da transição em 1440px e 375px confirmando a arte completa
(sem corte de topo/base), flores visíveis dos dois lados da linha de
cor (laranja de Localização acima, preto do rodapé abaixo), sem gap nem
degrau; `next build` e `next lint` limpos.

Validação geral da seção: screenshots completos em 1440px e 375px
confirmando filtro de cor aplicado ao mapa, chip de UI do Google
escurecido/ilegível pela vinheta, marcador customizado no ponto certo
(sem o texto de tipo "É aqui, ó!"), clique no card inteiro E no botão
"Abrir no Google Maps" abrindo `https://www.google.com/maps/search/
?api=1&query=...` (o mesmo `site.mapsLinkSrc` já usado no resto do
site) em nova aba nos dois casos; chip "Fechado" com contraste
recalculado e corrigido antes de finalizar; nenhuma outra seção da
página alterada (confirmado via screenshot full-page e stress test do
carrossel do Hero, sem regressão); `next build` e `next lint` limpos.

### v2 — duas colunas no desktop + 3 correções (vinheta virou mancha, marcador confundível com o padrão do Google, título fraco)
Reportado numa rodada seguinte: a vinheta radial da v1 (escurecer o
canto onde o Google desenha seu chip de UI) renderizava como uma
mancha preta amorfa — sem forma clara, lida como bug de renderização,
não como tratamento visual intencional. Também reportado que o print
mostrava "o pino padrão vermelho do Google", e que o título "Onde
estamos" estava pequeno demais pra ter a mesma presença de "Nossa
história".

**Diagnóstico do chip do Google (medido, não estimado, antes de
corrigir)**: testado com Playwright se algum parâmetro de URL do embed
clássico (`iwloc=near`, entre outras variações) desativa o chip —
nenhum funciona nesse formato legado. Testado trocar `q=endereço` por
coordenadas (`q=lat,lng` ou `ll=lat,lng`) — isso REALMENTE remove o
chip (confirmado visualmente comparando os dois), mas as coordenadas
obtidas via geocodificação gratuita (Nominatim/OpenStreetMap, único
serviço sem chave de API) resolvem só no nível da RUA, não do número
135 específico — o pino ficava visivelmente num quarteirão diferente
do que a busca por endereço (que já resolve certo hoje). Arriscar
mostrar a localização errada do restaurante pra resolver um problema
puramente visual não vale a pena — descartada essa rota. Medido então
o chip diretamente por dentro do iframe (`frame.evaluate` via
Playwright, cross-origin mas acessível via CDP): é um custom element
(`embed-place-card-element`) de tamanho FIXO em pixels — 301×113px,
ancorado 8px do canto — idêntico em 1440px e 1920px, não escala com o
iframe. Esse foi o bug real da v1: a vinheta usava raio em `%` do
container (relativo), então cobria bem em ALGUM tamanho de card mas
não em outros — na coluna de mapa mais estreita desta rodada (55% de
max-w-6xl, ~540px), sobrava um pedaço do chip (ícone de rota azul,
borda branca) visível na quina, contribuindo pra leitura de "algo
quebrado".

**Correção**: painel sólido (`linear-gradient(135deg, ink 62%,
transparent 100%)`, não mais radial) com `width/height` em `min(Npx,
%)` — 340×145px de piso fixo (folga real sobre os 301×113px medidos),
com teto em 92% pra não dominar cards muito estreitos (mobile, onde o
Google já troca sozinho pra uma variante de chip menor, então cobrir
menos ainda é suficiente — confirmado sem chip visível em 375px). Uma
aresta diagonal reta lê como recorte/etiqueta de canto intencional,
não como mancha difusa.

**Marcador trocado de vermelho para ink+dourado**: a causa provável do
"parece o pino padrão do Google" não era falta de marcador customizado
(já existia desde a v1) — era a similaridade visual: forma de gota +
vermelho saturado é quase indistinguível do pino clássico do Google à
primeira vista, mesmo sendo tecnicamente um SVG próprio. Trocado pra
`fill="var(--color-ink)"` + anel `var(--color-gold)` + centro dourado
— a mesma dupla ink+dourado já usada no selo circular da logo no Hero,
uma combinação que o Google nunca usaria, então inconfundível como
"da marca" à primeira vista. Glow de pulso trocado de flame para
gold/50 para combinar.

**Título aumentado**: `text-4xl sm:text-5xl` → `text-5xl sm:text-6xl`
— mesma escala exata de "Nossa história" em `About.tsx`, já que o
pedido pediu explicitamente presença comparável a esse título
específico como referência.

**Reestruturação em duas colunas (desktop)**: `grid lg:grid-cols-
[45%_1fr] lg:items-stretch` — coluna de conteúdo (título, endereço,
botão, horários — os quatro agora dentro do MESMO bloco, "Horários da
brasa" migrou de um bloco full-width separado para dentro desta
coluna) à esquerda, mapa à direita, nunca ocupando a largura inteira.
`items-stretch` (comportamento padrão do grid, não precisou de classe
extra) faz as duas colunas equilibrarem a mesma altura — como o
conteúdo agora é bem mais alto (título+endereço+botão+horários
empilhados) que o mapa sozinho, é o CONTEÚDO que dita a altura da
linha, e o mapa (`lg:h-full` em vez de uma altura fixa como `lg:h-
[480px]`) estica para acompanhar. Abaixo de `lg`: sem `grid-cols`
definido, cai pra uma coluna só, empilhado na ordem do documento
(conteúdo primeiro, mapa depois — já era essa ordem no JSX, não
precisou de `order-*`).

Efeito colateral do bloco de horários migrar pra uma coluna mais
estreita: a grade `sm:grid-cols-4` original (4 dias lado a lado)
ficaria espremida numa coluna de só ~45% de max-w-6xl (~500px,
comparável à largura de mobile, não à de desktop full-width que a
regra `sm:` original tinha como referência). Trocado pra `grid-cols-2`
fixo (2×2, sem variação por breakpoint) — cabe bem tanto na coluna
estreita do desktop quanto no mobile empilhado, com divisória vertical
entre os dois itens de cada linha (`border-l` no item ímpar do par).

Validação: `getBoundingClientRect` do chip do Google (via CDP,
cross-origin) confirmando 301×113px fixo em 1440px E 1920px; screenshot
recortado bem de perto no canto do mapa nos dois tamanhos confirmando
cobertura completa (nenhum ícone/texto do chip vazando, aresta diagonal
limpa); `pointer-events` computado do iframe confirmado `"none"`;
scroll da PÁGINA (não do mapa) mudando ao rolar o mouse sobre o card
(3887px → 3587px, exatamente os -300 do wheel simulado) — confirma que
o evento de scroll/zoom não é interceptado pelo mapa, prova direta de
que o "travamento" funciona, não só teórica; clique no centro do card
E no botão "Abrir no Google Maps" abrindo a mesma URL correta em nova
aba (seletor do teste corrigido nesta rodada — a reordenação de DOM da
coluna de conteúdo antes do mapa quebrou a suposição antiga de "o
primeiro `<a>` da seção é o do mapa"); divisória de flores reconferida
em 15 larguras contínuas (320px-1920px) com `seamGap` exatamente 0 em
todas — a técnica de margem negativa em % não depende da altura
específica de Localização, então a restruturação não a afetou, mas
validado mesmo assim conforme pedido; screenshots completos em 1440px
e 375px confirmando duas colunas no desktop (mapa visivelmente mais
estreito que a coluna de conteúdo) e uma coluna empilhada no mobile
(conteúdo antes do mapa); título com presença visual igual à de "Nossa
história"; "Fechado" com o mesmo tratamento distinto já corrigido na
v1; stress test do carrossel do Hero sem regressão; `next build` e
`next lint` limpos.

### v3 — a mancha no canto do mapa era o próprio painel de cobertura (cor errada, não posição/tamanho)
Reportado numa rodada seguinte: ainda existe uma mancha preta visível
no canto superior esquerdo do mapa. Pedido explícito de NÃO tocar no
filtro de cor do iframe nem em mais nada do mapa — só essa mancha.

**Confirmado (screenshot "antes" com crop largo o bastante pra incluir
a borda do card, não só o canto do iframe) que a "mancha" É o próprio
painel de cobertura da v2** (o `linear-gradient(135deg, var(--color-
ink) ...)` adicionado ali pra esconder o chip de UI do Google) — não
era o chip do Google, nem o filtro, nem um bug de renderização; era um
retângulo `--color-ink` (quase preto) sólido, sem nenhuma relação
visual com o resto da composição — lia como mancha porque, de fato,
era uma cor completamente alheia ao fundo laranja ao redor. A v2 já
tinha resolvido o problema de TAMANHO/COBERTURA (garantir que o chip
do Google, um custom element de 301×113px fixos, ficasse
completamente escondido) — mas nunca tinha resolvido a cor em si, que
continuava sendo ink por causa do histórico (era a cor usada desde a
v1, antes de o problema de tamanho/cobertura ser sequer diagnosticado).

**Canto arredondado — verificado ANTES de mexer que já funcionava
corretamente**: testada a hipótese de que o painel precisava de
`border-radius` próprio pra não criar uma quina reta sobre o canto
arredondado do card — screenshot com crop incluindo a borda do card
(não só o iframe) confirmou que o `overflow-hidden rounded-2xl` do
card ANCESTRAL já recorta corretamente qualquer filho (incluindo um
painel retangular sem `border-radius` próprio) para a curva do card —
comportamento padrão de `overflow-hidden` + `border-radius` em CSS,
que se aplica a QUALQUER conteúdo do elemento, não só à borda visual
dele. Nenhuma mudança foi necessária aqui; documentado pra não
reintroduzir esse trabalho numa rodada futura achando que é preciso.

**Correção real — cor do painel, medida, não escolhida**: em vez de
uma cor sólida "chutada" (que precisaria bater com um gradiente
diagonal que muda de tom pela página), medida a cor REAL do fundo da
seção especificamente no ponto onde o canto do mapa cai — técnica:
Playwright esconde o card do mapa inteiro (`visibility: hidden`,
temporário, só para a medição) pra revelar o fundo verdadeiro por
trás, tira um screenshot de um recorte de 10×10px exatamente nesse
ponto, e lê o pixel central via `sharp` — repetido em 5 larguras
(375/768/1024/1440/1920px). Resultado: no layout de duas colunas
(`lg:`, ≥1024px) a cor medida bate EXATAMENTE com `--color-orange`
sólido nas 3 larguras testadas (o canto do mapa, na coluna direita,
fica longe o bastante da origem do radial-gradient de fundo — ancorado
em 8%/90% da seção — que a contribuição do gradiente ali é
praticamente zero, e a base sólida já é a resposta certa, sem precisar
reproduzir gradiente nenhum). Empilhado (mobile/tablet, abaixo de
`lg:`, mapa mais perto da origem do gradiente por ficar mais embaixo
na seção) a cor é um pouco mais quente, ~rgb(199,62,34), consistente
entre 375px e 768px. Os dois tons viram uma custom property CSS
(`--panel-color`), só trocada no breakpoint `lg:` via classes Tailwind
(`[--panel-color:#c73e22] lg:[--panel-color:var(--color-orange)]`) —
o `linear-gradient` do painel passou a referenciar essa variável em
vez de `var(--color-ink)` fixo; o resto da lógica (ângulo 135deg,
parada em 62%, fade pra transparente, tamanho `min(340px,92%) ×
min(145px,92%)`) não mudou.

Validação: screenshot "antes"/"depois" no mesmo recorte (incluindo a
borda do card, não só o canto do iframe) em 1440px e 375px — o "antes"
mostra claramente o retângulo ink sólido; o "depois" mostra o canto se
misturando por completo com o laranja ao redor, sem nenhuma linha ou
mancha perceptível, como se o próprio fundo da página estivesse
"aparecendo" através do canto arredondado do card; reconferido também
em 768px e 1920px (as duas larguras não usadas no antes/depois
principal), mesmo resultado; clique no card inteiro e no botão "Abrir
no Google Maps" reconferidos abrindo a URL certa em nova aba;
`pointer-events: none` do iframe e o teste de scroll-passa-pra-página
(não pro mapa) reconferidos sem mudança; filtro de cor do iframe
(`sepia/saturate/hue-rotate/contrast/brightness`) confirmado
intocado — mesmos valores da v2; marcador customizado, moldura,
tamanho do card e o resto da seção (título, endereço, horários, duas
colunas) visualmente idênticos ao antes; stress test do carrossel do
Hero sem regressão; `next build` e `next lint` limpos.

### v4 — limpeza dos controles nativos do Google (botão de tela cheia, thumbnail de satélite)
Pedido nesta rodada: deixar o widget do mapa mais limpo, escondendo
controles do Google (zoom, tela cheia, tipo de mapa, mini-mapa/
thumbnail), preservando o marcador customizado, a moldura arredondada,
o filtro de cor já aplicado e o botão externo "Abrir no Google Maps".

**Diagnóstico obrigatório antes de mexer**: confirmado que a
implementação é o Google Maps Embed CLÁSSICO
(`maps.google.com/maps?q=...&output=embed`, sem chave de API) — não
Maps JavaScript API, não Maps Embed API "moderna" com parâmetros tipo
`&maptype=`. Esse formato legado não expõe NENHUM parâmetro de URL
equivalente a `disableDefaultUI`/`zoomControl`/`fullscreenControl` da
API paga — a única forma de afetar a UI nativa dele é cobrir
visualmente por cima (já era a técnica em uso desde a v1 pro chip de
endereço), não removê-la de fato do DOM cross-origin do iframe.

Catalogado via Playwright (`aria-label`/`title` de cada elemento
dentro do iframe, cross-origin mas legível via CDP) TUDO que o embed
renderiza:
- controles de zoom (+/-): existem no DOM (`aria-label="Zoom in"` /
  `"Zoom out"`) mas medidos com `getBoundingClientRect` retornando
  0×0 — o próprio Google já os deixa invisíveis neste modo de embed,
  nada a esconder aqui.
- "Map camera controls" (botão de tela cheia): 40×40px, canto
  inferior direito, ~24px de distância da borda.
- "Show satellite imagery" (toggle com thumbnail do mapa em modo
  satélite): 42×42px, canto inferior esquerdo, ~10px da borda. Em
  telas mais estreitas (375px, testado 3× para confirmar
  consistência) o Google às vezes substitui esse toggle por uma
  bússola pequena ("N") no mesmo canto — comportamento do próprio
  Google, não determinístico e fora de controle da implementação;
  como a bússola é pequena e não lê como "mancha" (documentado o
  motivo abaixo), decidido não perseguir esconder essa variante
  também.
- Faixa de atribuição obrigatória (~14px de altura, canto inferior):
  logo "Google", "Map data © [ano]", "Keyboard shortcuts", "Terms",
  "Report a map error" — API classificada como cross-origin, mas os
  termos do Google Maps EXIGEM manter o logo e o aviso de "Map data"
  visíveis; os outros três (atalhos, termos, reportar erro) são links
  secundários, não atribuição obrigatória.

**Correção**: dois novos `<div>` de cobertura (mesmo padrão dos dois
painéis já existentes desta seção — `pointer-events-none`,
`position: absolute`, dentro do mesmo `overflow-hidden rounded-2xl`
do card, então o recorte no canto arredondado já funciona de graça,
sem `border-radius` próprio precisar ser adicionado):
- Canto inferior direito (cobre "Map camera controls"): 64×64px,
  `linear-gradient(to top left, ...)`.
- Canto inferior esquerdo (cobre "Show satellite imagery"): 68×68px,
  `linear-gradient(to top right, ...)`.
Os dois posicionados com offset em PIXELS fixos a partir do canto
(não `%`) — mesma lição já documentada nesta seção pro painel do chip
de endereço: os controles do Google são de tamanho fixo em pixels,
não relativos ao iframe, então um cover em `%` desalinha em tamanhos
de card diferentes.

**Bug pego e corrigido durante a implementação, não só reportado no
final**: a primeira tentativa usou a MESMA cor do painel do chip
(laranja da página, `--color-orange`/`--panel-color`) nesses dois
novos cantos — resultado visualmente PIOR que o problema original: um
retângulo laranja flutuando sobre terreno claro do mapa (não colado
na borda do card, como o painel do chip estava) lia como uma mancha
nova, só que criada por esta correção. Causa raiz: o painel do chip
cobre uma área que já nasce na quina do card (onde a cor de fundo da
PÁGINA já é o vizinho natural, por estar fora da área realmente
mapeada); os dois controles desta rodada ficam 10-24px PRA DENTRO do
card, cercados por terreno do mapa em vários lados — o vizinho
natural ali é a cor do MAPA, não da página. Corrigido amostrando a
cor real do terreno do mapa já filtrado (mesmo filtro sépia do
iframe) em 3 pontos abertos via Playwright/`sharp`: consistente em
~rgb(242,242,215/223), um creme pálido — usado esse tom (não a cor da
página) nos dois covers, e a borda do gradiente apertada de 55% para
85% de parada sólida (a versão inicial, mais suave, ainda deixava um
resíduo perceptível numa ampliação 2×) até a transição ficar
imperceptível mesmo de perto.

Validação: catalogados TODOS os elementos com `aria-label`/`title`
dentro do iframe via CDP antes de decidir o que cobrir (não só os
visualmente óbvios); zoom in/out confirmados já 0×0 (nada a fazer);
screenshot ampliado (2-3× `deviceScaleFactor`) dos dois cantos
confirmando transição imperceptível com o terreno do mapa ao redor,
nos dois lados; atribuição obrigatória (logo Google + "Map data ©")
reconferida sempre visível e sem sobreposição em 1440px e 375px;
clique no card inteiro e no botão "Abrir no Google Maps" reconferidos
abrindo a URL certa em nova aba; `pointer-events: none` do iframe e o
teste de scroll-passa-pra-página reconferidos sem mudança; filtro de
cor do iframe confirmado intocado; painel do chip de endereço
(canto superior esquerdo, correção da v3) confirmado intocado;
divisória de flores reconferida em 15 larguras contínuas com
`seamGap` exatamente 0 em todas; marcador customizado, moldura,
duas colunas e resto da seção visualmente idênticos ao antes; stress
test do carrossel do Hero sem regressão; `next build` e `next lint`
limpos.

### v5 — o painel de cor sólida do chip virou o selo circular da marca
Pedido explícito nesta rodada: a v4 cobriu zoom/tela-cheia/satélite,
mas deixou pra trás a parte principal pedida numa rodada anterior — o
painel de cor sólida no canto superior esquerdo (o mais antigo, que
cobre o chip/popup de endereço do Google) continuava lá; o pedido era
trocá-lo pelo selo circular da marca já usado no Hero, não mantê-lo.

**Reaproveitado, não recriado**: mesmo asset/tratamento visual do selo
do Hero (`Hero.tsx`, ao lado do badge "Na brasa") —
`rounded-full bg-ink ring-1 ring-gold/40` + `<Image src="/images/
brand/logo.png" fill className="object-contain" />`.

**Descoberta central desta rodada, que mudou a abordagem**: um círculo
sozinho, de um tamanho que ainda pareça um selo/badge de marca (não um
disco gigante dominando o mapa), matematicamente NÃO consegue cobrir
por completo um retângulo tão largo quanto alto quanto o chip do
Google — a diagonal mínima pra um círculo inscrever um retângulo de
301×113px (o tamanho do chip em telas largas, medido em rodadas
anteriores) é ~324px, bem maior que qualquer selo de marca razoável.
Confirmado empiricamente antes de decidir a abordagem final: um selo
sozinho de até 224px de diâmetro, em 5 reloads seguidos, deixava
sistematicamente um pedaço do chip visível (texto do endereço e/ou os
2 ícones de atalho, que ficam em cantos DIFERENTES da caixa dependendo
de qual das duas variantes de chip o Google decide renderizar naquele
carregamento — achado à parte, ver abaixo). Uma vinheta radial atrás
do selo (em vez de um painel retangular) também foi testada e
descartada: pra alcançar o canto oposto do chip de forma confiável, a
vinheta precisava crescer tanto que virava, na prática, um retângulo
quase opaco do mesmo tamanho do painel antigo, só mais arredondado —
sem ganho real sobre a solução mais simples.

**Achado à parte, confirmado via medição repetida (não só uma vez)**:
o chip do Google (`embed-place-card-element`) realmente varia de
CONTEÚDO entre carregamentos da mesma página, não só de tamanho.
Medido 6 reloads seguidos, com travessia do shadow DOM do custom
element (via Playwright) pra achar a posição real do conteúdo visível
(não só a caixa externa do custom element): na maioria das vezes (5 de
6) o Google renderiza a variante "cartão de endereço" (caixa 301×113,
ícones de atalho perto do canto SUPERIOR direito); ocasionalmente (1
de 6) troca sozinho pra uma variante "Open in Maps" mais compacta
(caixa 252×120, mas com o conteúdo perto do canto INFERIOR esquerdo).
Isso explica por que tentativas anteriores de cobrir só uma região
específica (ex.: só a parte de cima) funcionavam num reload e falhavam
no próximo.

**Solução final**: manter a MESMA geometria de cobertura já validada
em rodadas anteriores (o painel `min(340px,92%) × min(145px,92%)`,
com folga confirmada sobre o pior caso das duas variantes do chip) —
só a COR mudou de laranja (pensada pra se camuflar com o fundo
variável da página, documentado na v1/v3) pra ink sólido, a mesma cor
do próprio selo. Isso muda o que o painel COMUNICA visualmente: deixa
de tentar "desaparecer" se camuflando com o fundo (nunca funcionava
100% bem, daí a "mancha" original) e passa a ler como a base/sombra do
próprio selo — mesma família visual (`bg-ink`), com o selo sobreposto
no canto como elemento dominante e intencional, exatamente como
pedido.

**Bug pego e corrigido antes de finalizar (não só reportado)**: a
fórmula `min(340px,92%)` original foi desenhada pra uma cor LARANJA
que se camufla com o fundo mesmo cobrindo quase o card inteiro num
mobile estreito (~325px) — mas cor INK não se camufla com nada, então
os mesmos 92% viravam um retângulo escuro enorme, obviamente dominando
o mapa (pego em screenshot em 375px antes de finalizar, não deixado
passar). Corrigido calibrando o cap por FAIXA de largura real do chip,
medida via Playwright em 7 viewports (375 a 768px): o chip cresce em
DOIS degraus, não um só — 129×33px até ~420px, 234-252×61px entre
460-500px, e só atinge o tamanho máximo 301×113px a partir de 640px
(que por coincidência bate exatamente com o breakpoint `sm:` do
Tailwind). Uma primeira tentativa com só DOIS níveis (pequeno até
`sm:`, grande a partir de `lg:`) deixou a faixa 460-1023px sem
cobertura correta — pego em screenshot num viewport de 768px (o card
nessa largura já é bem mais largo que a versão mobile, ~688px, grande
o bastante pro Google renderizar o chip no tamanho máximo, mas o
painel ainda estava no nível "pequeno" por só trocar em `lg:`, 1024px)
— corrigido com um terceiro nível intermediário via breakpoint
arbitrário do Tailwind v4 (`min-[460px]:`), alinhando os 3 níveis do
painel aos 3 degraus reais medidos do chip.

Validação: screenshot em 5 reloads seguidos de 1440px confirmando
cobertura completa e consistente do chip nas duas variantes (endereço
completo e "Open in Maps"), sem nenhum fragmento de texto/ícone visível
em nenhum dos 5; screenshot em 9 larguras contínuas (375, 420, 460,
500, 550, 640, 768, 1024, 1440px) confirmando cobertura completa em
toda a faixa responsiva, sem sobra em nenhuma; atribuição obrigatória
do Google ("Terms", "Report a map error", logo) reconferida visível e
legível, sem sobreposição; painéis de zoom/tela-cheia/satélite
(v4, canto inferior) confirmados intocados; clique no card inteiro e
no botão "Abrir no Google Maps" reconferidos abrindo a URL certa em
nova aba; `pointer-events: none` do iframe e o teste de
scroll-passa-pra-página reconferidos sem mudança; filtro de cor do
iframe confirmado intocado; marcador customizado, moldura, duas
colunas e resto da seção visualmente idênticos ao antes; divisória de
flores reconferida em 15 larguras contínuas com `seamGap` exatamente 0
em todas; stress test do carrossel do Hero sem regressão; `next build`
e `next lint` limpos.

### v6 — reversão para o mapa nativo do Google, selo como "carimbo" fora da moldura
Pedido explícito nesta rodada: as rodadas v1-v5 foram sucessivas
tentativas de disfarçar/cobrir partes do conteúdo do Google (filtro de
cor, painel do chip, painéis de zoom/tela-cheia/satélite) — decisão do
cliente de reverter essa direção por completo e voltar ao mapa 100%
nativo, sem nenhum elemento tentando esconder algo por cima dele.

**Removido** (tudo documentado em detalhe nas seções v1-v5 acima, que
permanecem no arquivo como histórico, não apagadas): o `[filter:
sepia(...)...]` do iframe; o painel de cor sólida do canto superior
esquerdo (histórico completo da v1→v5, incluindo a descoberta de que o
chip do Google varia de conteúdo/posição entre reloads); os dois
painéis de canto inferior que escondiam os controles nativos de
zoom/tela-cheia/satélite (v4). O iframe voltou a ser só `<iframe
... className="pointer-events-none absolute inset-0 h-full w-full"
/>`, sem filtro nem overlay algum.

**Selo movido de DENTRO do mapa para FORA da moldura** — mudança
estrutural, não só de posição CSS: antes, o selo vivia dentro do
mesmo `<div className="... overflow-hidden rounded-2xl ...">` que
contém o iframe (fazia sentido quando ele precisava ficar embutido no
canto, sobrepondo conteúdo). Pedido desta rodada era um efeito "selo
de carta/carimbo" — parte do selo sobre a moldura, parte projetada
pra FORA dela — o que um container `overflow-hidden` corta por
definição. Resolvido reestruturando: o `overflow-hidden rounded-2xl
border` (a moldura em si) ficou isolado num DIV INTERNO só ao redor
do iframe+marcador; o `<a>` externo (que já envolvia tudo, mantém o
card inteiro clicável) virou `relative` sem `overflow-hidden`, e o
selo passou a ser filho DIRETO desse `<a>`, IRMÃO do div da moldura —
livre para se projetar pra fora dela sem ser cortado.

**Canto escolhido: superior DIREITO, não esquerdo**: o chip nativo do
Google (endereço/atalhos) sempre nasce ancorado no canto ESQUERDO do
embed, em qualquer variante — usar o canto direito para o selo garante
que ele nunca dispute espaço visual com o chip do Google, mesmo sem
nenhum painel de cobertura por baixo (que não existe mais nesta
versão). Confirmado visualmente nos 3 viewports de validação: os dois
elementos (chip à esquerda, selo à direita) convivem sem sobreposição
em nenhum caso.

**Reaproveitado, não recriado**: mesmo asset/tratamento visual do selo
do Hero (`rounded-full bg-ink ring-1 ring-gold/40` + `/images/brand/
logo.png` com `object-contain`) — só o anel ficou `ring-2` (mais
espesso que o `ring-1` do Hero) e o offset/tamanho são específicos
deste componente, calibrados para o efeito de carimbo: `-right-4
-top-4` (mobile) até `lg:-right-7 lg:-top-7` (desktop), com o próprio
selo crescendo de `h-14 w-14` (56px) a `lg:h-24 lg:w-24` (96px) —
metade do selo fica visualmente sobre a borda arredondada do card,
metade projetada para fora dela, exatamente o efeito pedido.

Validação: `getBoundingClientRect` do selo em 7 larguras (320px a
1920px) confirmando que ele nunca causa overflow horizontal da página
(`document.body.scrollWidth === window.innerWidth` em todas, sem
exceção) apesar de se projetar pra fora do card — a folga do `<section
overflow-hidden>` ao redor dele é suficiente em qualquer largura;
screenshots do mapa completo em 375/768/1440px confirmando cores 100%
nativas do Google (azul/branco/cinza padrão, sem filtro), todos os
controles/atribuição do Google visíveis normalmente (chip de
endereço, ícones de rota/tela-cheia, "Google", "Map data ©", "Terms",
"Report a map error"), selo pendurado no canto superior direito como
um carimbo, sem sobreposição com o chip do Google em nenhum viewport;
clique no card inteiro e no botão "Abrir no Google Maps" reconferidos
abrindo a URL certa em nova aba; `pointer-events: none` do iframe e o
teste de scroll-passa-pra-página (mapa continua travado, sem
drag/zoom) reconferidos sem mudança; marcador customizado (ink+
dourado) confirmado intocado, ainda ancorado sobre o pino nativo do
Google; moldura simples (borda arredondada preta) do card confirmada
intocada; layout de duas colunas e resto da seção (título, horários,
endereço, botão) visualmente idênticos ao antes; divisória de flores
reconferida em 15 larguras contínuas com `seamGap` exatamente 0 em
todas; stress test do carrossel do Hero sem regressão; `next build` e
`next lint` limpos.
