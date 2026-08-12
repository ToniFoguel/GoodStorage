# Design System — goodstorage (fonte de verdade)

> **Catálogo canônico do que existe neste repositório.** Nenhum componente,
> variante ou token pode ser usado em código se não estiver aqui **ou** no
> código-fonte deste repo. A regra do projeto (`CLAUDE.md`) é: **nunca inventar
> em silêncio**. Se a tela pede algo que não está catalogado, o Claude **avisa
> antes** e então: cria o componente novo **dentro do padrão do DS** (ver seção
> 1.1 do `CLAUDE.md` e o "Template de componente" no fim deste arquivo), ou —
> quando for token/cor/dependência — **para e espera** decisão de design.
>
> Arquivo Figma: `estudo` — file key `EPHZw7duAVSjyhosJfSSs8`.

---

## Mapa do repositório (onde cada coisa vive)

```
tokens/tokens.css        ← variáveis (cor, tipografia, espaço, raio). FONTE dos valores visuais.
ds/ds.css                ← estados de runtime (aberto/fechado, foco, overlay). Carregar DEPOIS dos CSS.
ds/ds.js                 ← comportamento auto-init (data-ds="..."). Carregar com defer.
components/<nome>/        ← 1 pasta por componente: <nome>.css (estilo) + <nome>.html (exemplo).
journeys/<fluxo>/         ← "bases de tela": telas montadas SÓ com componentes+tokens (molde de novos fluxos).
index.html               ← catálogo visual dos componentes.
```

**Ordem de carregamento obrigatória** em qualquer tela:
`tokens.css` → CSS dos componentes usados → `ds/ds.css` → (`<body>`) → `ds/ds.js` (defer).

---

## 1. Tokens

Os valores visuais vivem em `tokens/tokens.css`, com os nomes espelhando o Figma
1:1 (`Grupo/nome` → `--grupo-nome`). **Nunca** use hex/px cru — sempre `var(--token)`.
Grupos existentes:

- **Cor:** `--background-bg-main` (#fff), `--background-bg-aux`, `--background-bg-alt` (#313131), `--background-neutral`, `--background-primary` (laranja de marca), `--border-default` (#f2f2f2), `--border-icon` (#1a1a1a), `--content-title` (#1a1a1a), `--content-text` (#313131), `--content-title-inverse` (#fff), `--content-disable`, `--error`.
- **Tipografia:** família `--font-family-title-text` (Halvar Mittelschrift); pesos `regular/medium/bold`; tamanhos `--font-size-h1|h2|h3|paragraph|label` + `--line-hight-*` correspondentes; escala Inter (`--family-sans`, `--size-*`, `--leading-*`) para Calendar/DatePicker. Classes compostas: `.title-h1`, `.title-h3`, `.text-paragraph-*`, `.text-label-*`.
- **Espaçamento:** `--xs, --sm, --md, --lg, --xl, --2xl, --3xl` + escala numérica (`--gap-*`, `--p-*`, `--py-*`).
- **Borda/raio/sombra:** `--thin`, `--border`, `--stroke-*`, `--rounded-*`, `--radius-*`, `--shadows-*`.

> ⚠️ **`--font-size-h2` / `--line-hight-h2`**: usados nos títulos das telas mas
> ausentes das variáveis lidas do Figma. Foram adicionados a `tokens.css` com
> valor **provisório** (20/24, interpolado entre H1 e H3). **Confirmar no Figma.**

---

## 2. Runtime (comportamento) — `ds/ds.js`

Camada auto-init: você escreve o HTML com as classes do DS e marca a raiz com
`data-ds="<nome>"`. Ao carregar a página, o runtime liga o componente sozinho.
Cada componente dispara `CustomEvent`s com prefixo `ds:`.

API pública (`window.DS`): `DS.init(root)`, `DS.refresh()` (após inserir markup
dinâmico), `DS.openModal(id)`, `DS.closeModal(el)`, `DS.openLightbox(id, caption)`,
`DS.closeLightbox(el)`, `DS.on(el,evt,fn)`.

Utilitário `data-ds-toggle="<id>"` (em `<input type="checkbox">`): quando marcado,
**esconde** o elemento alvo (`#id`); ao desmarcar, mostra. Ex.: "usar o e-mail
principal" esconde o campo de e-mail alternativo. Estado inicial aplicado no init.

Componentes **com runtime** (precisam de `data-ds` + `ds/ds.js`): select,
dropdown, modal, lightbox, datepicker, collapsible, input, pagination, search,
sidebar, table, segmented, breadcrumb, repeater.
Componentes **estáticos** (só HTML+CSS): avatar, badge, banner, button, card,
checkbox-card, data-item, empty-state, footer, header, kpi, profile-hero,
progress, product-card, scrollbar, selfrow.

---

## 3. Inventário de componentes

| Componente | Runtime | Evento(s) `ds:` | Exemplo | Figma node |
|---|---|---|---|---|
| Avatar | — | — | `components/avatar/avatar.html` | 1:188 |
| Badge | — | — | `components/badge/badge.html` | 1:485 |
| Banner | — | — | `components/banner/banner.html` | 1:595 |
| Breadcrumb | ✅ | (dropdown do "…") | `components/breadcrumb/breadcrumb.html` | 1:340 |
| Button | — | — | `components/button/button.html` | 1:706 |
| Card | — | — | `components/card/card.html` | 1:893 |
| Checkbox-card | — | — | `components/checkbox-card/checkbox-card.html` | 1:965 |
| Collapsible | ✅ | `toggle` | `components/collapsible/collapsible.html` | 1:1069 |
| Data-item | — | — | `components/data-item/data-item.html` | 1:5627 |
| Datepicker | ✅ | `change`, `clear` | `components/datepicker/datepicker.html` | 1:3392 |
| Dropdown | ✅ | `select`, `filterchange`, `filterclear` | `components/dropdown/dropdown.html` | 1:3625 |
| Empty-state | — | — | `components/empty-state/empty-state.html` | 1:4001 |
| Footer | — | — | `components/footer/footer.html` | 1:4118 |
| Header | — | — | `components/header/header.html` | — |
| Input | ✅ | `input` | `components/input/input.html` | 1:4681 / 1:4982 |
| KPI ⚠️ | — | — | `components/kpi/kpi.html` | (a formalizar) |
| Lightbox ⚠️ | ✅ | `open`, `close` | `components/lightbox/lightbox.html` | (a formalizar) |
| Profile-hero ⚠️ | — | — | `components/profile-hero/profile-hero.html` | (a formalizar) |
| Selfrow ⚠️ | — | — | `components/selfrow/selfrow.html` | (a formalizar) |
| Modal | ✅ | `open`, `close` | `components/modal/modal.html` | 1:5697 |
| Product-card ⚠️ | — | — | `components/product-card/product-card.html` | (a formalizar) |
| Pagination | ✅ | `page`, `pagesize` | `components/pagination/pagination.html` | 1:1348 |
| Progress | — | — | `components/progress/progress.html` | 1:1473 |
| Scrollbar | — | — | `components/scrollbar/scrollbar.html` | 1:8129 |
| Search | ✅ | `search`, `filter` | `components/search/search.html` | — |
| Segmented | ✅ | `change` | `components/segmented/segmented.html` | (a formalizar) |
| Select | ✅ | `change` | `components/select/select.html` | 1:6664 |
| Sidebar | ✅ | `navigate` | `components/sidebar/sidebar.html` | 46:118032 |
| Table | ✅ | `sort`, `action`, `select` | `components/table/table.html` | 1:1354 |

---

## 4. Fichas (variantes e estados extraídos do código)

> Para cada componente: variantes/modificadores reais no CSS + hook de runtime.
> A **estrutura de markup** de referência está sempre no `.html` de exemplo —
> copie de lá, não recrie do zero.

### Avatar — `Type=Image | Text`
Modificadores: `.avatar--image` (logo/foto 32×32, fundo `bg-main`), `.avatar--text` (iniciais, fundo `primary`, texto `title-inverse`). Estático.

### Badge — 16 variantes
`.badge--default` · `--secondary` · `--secondary-icon` · `--secondary-number` · `--default-number` · `--destructive` · `--destructive-number` · `--success` · `--warning` · `--yellow` · `--outline` · `--tag` (removível, com `.badge__close`) · `--add` (chip "+") · `--lock` (cadeado) · `--perm` (pílula permissão) · `--count` (contador). Ícones: `.badge__icon--sm|md`. Estático.
> ⚠️ `--warning`/âmbar não tem token de cor nomeado — sugerido `Status/warning`.

### Banner — `.banner--info | --warning | --error`
Faixa de mensagem contextual. Estático.

### Breadcrumb
`.breadcrumb__item--active`, `.breadcrumb__item--current`. Runtime só para o menu "…" (colapso de itens).

### Button
Variantes por atributo/classe no markup (ver exemplo — primário, secundário, ghost, ícone, tamanhos). Sem modificadores `--` no CSS raiz; consultar `button.html`. Estático.

### Card — `.card--desktop | --mobile`
Contêiner base. Estático.

### Checkbox-card — `.checkbox-card--box`
Cartão selecionável com checkbox. Estático (o input é nativo).

### Collapsible — `data-ds="collapsible"`
`.collapsible--mobile`; ícone `.collapsible__icon--up|down`. Evento `ds:toggle`.

### Data-item
Par rótulo/valor para exibição de dados. Estático.

### Datepicker — `data-ds="datepicker"`
Estados: `.datepicker--open | --disabled | --error | --readonly`; `.datepicker__value--filled`. Eventos `ds:change`, `ds:clear`. Usa escala Inter (Calendar).

### Dropdown — `data-ds="dropdown"`
Painéis: `.dropdown__panel--menu | --filter | --right`. Itens: `.dropdown__item--active | --disable | --nav`. Eventos `ds:select`, `ds:filterchange`, `ds:filterclear`.

### Empty-state
Estado vazio com ícone + texto + ação. Estático.

### Footer — `.footer--mobile`
Rodapé. Estático.

### Header
Cabeçalho de página. Sem modificadores `--`; ver `header.html`. Estático.

### Input — `data-ds="input"`
Estados: `.input--disabled | --error | --readonly`. Grupos/afixos: `.input__group--left`, `.input__icon--sm|lg`. Máscaras via `data-ds-mask="cnpj|currency|phone"`. Evento `ds:input`.

### KPI — card de métrica ⚠️
Grade fluida `.kpis` (auto-fit, min 160px) de cards `.kpi` > `.kpi__label` + `.kpi__value` (`--sm` p/ valor textual mais longo). Estático.
**Exemplo:** `components/kpi/kpi.html` · ⚠️ node Figma e token de texto "secundário" a formalizar.

### Profile-hero — cabeçalho de perfil ⚠️
`.profile-hero` = avatar (56) + `.profile-hero__meta` (`__name` H2 + `__sub` + `.profile-hero__flags` com badges). Fica dentro de uma seção/página. Compõe avatar + badge. Estático.
**Exemplo:** `components/profile-hero/profile-hero.html` · ⚠️ node Figma a formalizar.

### Selfrow — linha de auto-atendimento ⚠️
`.selfrow` (`<a>`/`<button>`): ícone + `<div>` (`.selfrow__t` + `.selfrow__d`) + `.chev`. Lista de ações do portal do locatário. Estático.
**Exemplo:** `components/selfrow/selfrow.html` · ⚠️ node Figma a formalizar.

### Lightbox — `data-ds="lightbox"` ⚠️
**Anatomia:** `.lightbox` (overlay) > `.lightbox__close`, `.lightbox__stage` > `.lightbox__figure` > `.lightbox__image` **ou** `.lightbox__ph` (placeholder) + `.lightbox__caption`.
**Runtime:** abre por gatilho `[data-ds-lightbox="<id>"]` (com `data-ds-caption` opcional) ou `DS.openLightbox(id, caption)`; fecha no ✕, backdrop ou Esc. Eventos `ds:open`, `ds:close`.
**Tokens:** scrim (runtime, rgba como o `.ds-modal-overlay`); placeholder `Background/bg-alt`; texto/close `Content/title-inverse`.
**Exemplo:** `components/lightbox/lightbox.html`
> ⚠️ Node do Figma a formalizar.

### Modal — `data-ds="modal"`
Abre por `data-ds-open="<id>"` (gatilho) ou `DS.openModal(id)`. Eventos `ds:open`, `ds:close`. Variante de conteúdo **Galeria** (`.gallery`, grade de imagens/placeholders) — composição, ver adições abaixo.

### Pagination (Figma "TableFooter") — `data-ds="pagination"`
Atributos: `data-ds-total`, `data-ds-page-size`, `data-ds-page`. Itens: `.pagination__item--active | --more`. Eventos `ds:page`, `ds:pagesize`. Info+nav são renderizados pelo runtime.

### Progress
Track `.progress` + `.progress__fill`; largura via var inline `--progress` (ex.: `style="--progress:70%"`). Estático.

### Product-card — item de orçamento ⚠️
Mesma base visual do `card` (bg-main + borda thin), com partes fixas e conteúdo variável.
**Anatomia:** `.product-card` > `.product-card__head` (`__id` + Badge de flag) · `.product-card__section` (`__label`/`__name`/`__name--sm`/`__sub`) · `.product-card__prices` > `.product-card__price` (`__price-k`/`__price-v`/`__price-v--final`) · `.product-card__img`/`.product-card__imgadd` (abre Lightbox) · `.product-card__cta` (tracejada) · `.product-card__approval` (`__approval-label`/`__approval-text`).
**Variante:** `.product-card--over` (acima da alçada, borda `Border/warnigh`).
**Composição:** usa Badge (flag), Collapsible (condições comerciais) e Lightbox (imagem). Estático (os filhos com runtime se auto-inicializam).
**Exemplo:** `components/product-card/product-card.html`
> ⚠️ Node do Figma a formalizar.

### Repeater — `data-ds="repeater"` ⚠️
Grupos repetíveis (ex.: representantes/procuradores). `.repeater` > `.repeater__items` (linhas `.repeater__item`) + `<template class="repeater__template">` (1 linha modelo) + `[data-repeat-add]`. Cada linha tem `[data-repeat-remove]`. O "add" clona o template e **inicializa** a nova linha (máscaras/componentes via `init`). Eventos `ds:add`, `ds:remove`.
> ⚠️ Cuidado com `id` dentro da linha (o clone duplica ids) — evite ids ou trate a unicidade.

### Scrollbar — `.scrollbar--vertical | --horizontal`
Barra de rolagem estilizada. Estático.

### Search — `data-ds="search"`
Campo de busca com filtro. Eventos `ds:search`, `ds:filter`.

### Segmented — `data-ds="segmented"`
Opções mutuamente exclusivas; ativo `.segmented__item--active` (`primary` + `title-inverse`). Item por `data-value`. Evento `ds:change`. Altura 32.
**Abas:** se os itens tiverem `data-tab="<id>"` apontando para um `.tabpanel` (id correspondente), clicar troca o painel visível (`.tabpanel.is-active`). Opt-in e retrocompatível — sem `data-tab` funciona como seletor simples.

### Select — `data-ds="select"`
Estados: `.select--disable | --error | --readonly`. `.select__field--tags` (multi), `.select__value--filled`, `.select__item--active`, `.select__dropdown--no-title`. Evento `ds:change`.
Atributos: `data-ds-search` (busca/typeahead por nome), `data-ds-multi` (tags). **`data-ds-float`** ⚠️: renderiza o dropdown `position:fixed` (escapa de containers com overflow, ex.: célula de tabela rolável); fecha ao rolar/redimensionar. Usado nas colunas de cupom/campanha da Consulta.

### Sidebar — `data-ds="sidebar"`
`.sidebar--rail` (colapsada), `.sidebar__item--active`. Evento `ds:navigate`.

### Table — `data-ds="table"`
Colunas/células: `.table__th--fixed | --action`, `.table__cell--fixed | --action | --badge`. Linhas: `.table__row--alt`. Eventos `ds:sort`, `ds:action`, `ds:select`.
Variante **Seleção**: `data-ds-select` liga coluna de checkbox + linha selecionada (`ds:select` com `{count, ids}`); `data-ds-pin-selected` fixa selecionados no topo.
Variante **Colunas fixas** (`.table--pinned`): trava colunas na rolagem horizontal — `.table__th--pin-start`/`.table__cell--pin-start` (esquerda) e `--pin-end` (direita), com fundo sólido e sombra. As larguras e os `left`/`right` (offsets) das colunas fixas ficam no CSS da tela (dependem de quantas/quais colunas). Tint de seleção usa `--background-warning`.
> ⚠️ Node da variante Seleção, da variante Colunas fixas, e o tint da linha selecionada a formalizar no Figma.

---

## 5. Composições (não são componentes novos)

Montadas só com componentes + tokens existentes:

- **StepSection** — cabeçalho de seção numerado num `card`: quadrado `bg-alt` (#313131) com número `title-inverse` + título `Text/Paragraph-Bold`.
- **LeadChip** — estado preenchido do seletor de lead: `card`/`data-item` + `Avatar Type=Text` + nome (`Paragraph-Bold`) + "LD-id · Lead vinculado" (`Label-Regular`) + ação **Trocar** (button ghost).
- **Modal Galeria** — `modal` + grade `.gallery` de imagens; sem imagem → placeholders (ícone `Content/disable`, fundo `bg-aux`).
- **Modal Detalhe do produto** — `modal` com `data-item`/`dl` (Tipologia, Classificação, Características, Estrutura no espaço) + lista de arquivos de imagem (nome + tamanho + "Ampliar"); cada arquivo abre o **Lightbox** via `data-ds-lightbox`.
- **Resumo do orçamento** — "Dados" numa grade de 3 colunas de `data-item` (`sum-grid`) + "Produtos e condições" numa grade de 3 colunas de `product-card` (`prodcards`) + caixa de Totais (data-item/linhas de total).
- **Modal Desconto/aumento** — `modal` + `banner--warning` (alçada) + `input` (% e R$, com `input__group`/`input__unit`) + linhas de faixa de desconto; gatilho na célula "Desconto/aumento" da tabela (`data-ds-open`). Quando há descontos, a célula mostra as faixas como `badge` + gatilho "Editar descontos".
- **Picker de cupom/campanha** — `select` com `data-ds-search data-ds-float` na célula da tabela: clica → busca por nome → escolhe o cupom/campanha (dropdown flutuante, não é recortado pela rolagem da tabela).

---

## 6. Pendências de design (⚠️ resolver no Figma antes de "oficializar")

| Item | Situação | Ação sugerida |
|---|---|---|
| Token `H2` (`--font-size-h2`/`--line-hight-h2`) | Provisório 20/24 em `tokens.css` | Confirmar valor real no Figma |
| Cor âmbar (badge `--warning` / "aprovação") | Sem token nomeado | Adicionar `Status/warning` |
| Tint de linha selecionada (Table Seleção) | Sem token exato | Adicionar `Background/primary-subtle` |
| Table variante Seleção / SegmentedControl | Usados em código, node Figma a formalizar | Criar/nomear no Figma |

---

## Template de componente (para documentar um novo)

```markdown
### <Nome exato do Figma> — `data-ds="<nome>"` (se tiver runtime)
**Figma node:** `<id>`
**Anatomia:** classes raiz + partes (`.<nome>__<parte>`).
**Variantes/estados:** `.<nome>--<variante>`, `.<nome>__<parte>--<estado>`.
**Runtime:** eventos `ds:<evento>` e atributos `data-ds-*`.
**Tokens:** <papéis> → `<token>`.
**Exemplo:** `components/<nome>/<nome>.html`
```
