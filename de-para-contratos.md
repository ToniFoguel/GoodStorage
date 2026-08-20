# De/Para — Protótipo "Módulo Gestão de Contratos" × Design System GoodStorage

> Auditoria do arquivo `modulocontratoscompleto.html` (protótipo achatado, single-file)
> contra o inventário do DS (`design-system.md` + pasta `components/`).
> Objetivo: para cada elemento/classe do protótipo, apontar **o componente do DS
> correspondente** e sinalizar **lacunas** (classes sem componente no DS) — na linha
> do que o `CLAUDE.md §1` pede ("nunca inventar em silêncio").
>
> Método: extração de todas as classes de markup (`class="…"`) do arquivo e cruzamento
> com o catálogo do DS. A coluna "uso" é a contagem aproximada de ocorrências da raiz.

---

## Legenda de status

- ✅ **DS direto** — existe como componente no DS; é só reusar o markup do `components/<nome>/`.
- 🟡 **DS c/ ressalva** — existe, mas o componente está marcado ⚠️ no DS (a formalizar no Figma) ou a variante usada precisa ser conferida.
- 🧩 **Composição** — não é componente novo; monta-se com componentes/tokens do DS (documentado em `design-system.md §5`).
- 🏗️ **Cola de tela** — layout/scaffolding da página (não é componente, não precisa virar um).
- ❌ **Lacuna** — classe do protótipo **sem** componente equivalente no DS. Precisa virar componente (avisar + padrão do DS, `CLAUDE.md §1.1`) ou ser substituída por um existente.

---

## A. Componentes do DS usados diretamente (de → para 1:1)

| De (classe no protótipo) | Uso | Para (componente DS) | Status | Observação |
|---|---:|---|---|---|
| `.sidebar` (+`__*`, `--rail`) | 441 | **Sidebar** (`data-ds="sidebar"`) | ✅ | Runtime `ds:navigate`. |
| `.input` (+`__field/__control/__label/__help`, `--readonly`) | 386 | **Input** (`data-ds="input"`) | ✅ | Máscaras `data-ds-mask`. `.full` é modificador de largura (cola). |
| `.table` (+`__th/__cell/__row/__kebab/__cell--action`) | 285 | **Table** (`data-ds="table"`) | ✅ | `.ltable` é modificador de tela (cola). Kebab já é runtime do DS. |
| `.select` (+`__field/__dropdown/__item`, `data-ds-float`) | 276 | **Select** (`data-ds="select"`) | ✅ | Usa `data-ds-float` nas células de tabela. |
| `.btn` (+`__icon`) | 200 | **Button** | 🟡 | Ver §E: variantes `btn--*` a conferir no `button.html`. |
| `.modal` (+`__header/__content/__footer`) | 150 | **Modal** (`data-ds="modal"`) | ✅ | `.confirm-modal` é composição (§B). |
| `.banner` (`--info/--warning/--error`) | 119 | **Banner** | ✅ | Uso intenso de faixas contextuais. |
| `.badge` (16 variantes) | 88 | **Badge** | 🟡 | `--warning`/âmbar sem token nomeado (⚠️ no DS). |
| `.data-item` (`__label/__value`) | 75 | **Data-item** | ✅ | Agrupado no grid `.dados` (cola). |
| `.dropdown` (`__panel--menu/--filter/--right`, `__item`) | 73 | **Dropdown** (`data-ds="dropdown"`) | ✅ | Filtros e menus de ação. |
| `.breadcrumb` (`__item--current`) | 45 | **Breadcrumb** | ✅ | Na `.topbar`. |
| `.kpi` / `.kpis` (`__label/__value--sm`) | 31/2 | **KPI** | 🟡 | Existe no DS, mas ⚠️ (node Figma / token de texto a formalizar). |
| `.checkbox-card` | 30 | **Checkbox-card** | ✅ | — |
| `.avatar` (`--text`) | 27 | **Avatar** | ✅ | Iniciais do usuário / lead. |
| `.segmented` (`__item--active`, `data-tab`) | 25 | **Segmented** (`data-ds="segmented"`) | 🟡 | Variante "Abas" (`data-tab`→`.tabpanel`) usada; node a formalizar (⚠️). |
| `.pagination` (`__item--active/--more`) | 9 | **Pagination** | ✅ | — |
| `.footer` | 9 | **Footer** | ✅ | `data-logo-full`. |
| `.progress` (`__fill`) | 2 | **Progress** | ✅ | `.progresswrap` é cola em volta. |
| `.repeater` (`__items/__item/__template`) | 5 | **Repeater** | 🟡 | No DS está marcado ⚠️ (cuidado com `id` no clone). |
| `.calendar` (+`__*`) | 15 | **Datepicker / Calendar** | ✅ | Escala Inter; parte do datepicker do DS. |

---

## B. Composições (montadas só com componentes + tokens do DS)

| De (classe no protótipo) | Uso | Para (composição / componentes DS) | Status | Observação |
|---|---:|---|---|---|
| `.section` + `.section__num` + `.section__title` | 142 | **StepSection** (`design-system.md §5`) — cabeçalho numerado em card | 🧩 | Padrão já documentado; usa Card/tokens. |
| `.confirm-modal` | 25 | **Modal** (variante de tamanho/conteúdo) | 🧩 | Só `modal` + `max-width` inline; não é componente novo. |
| `.tabbar` + `.tabpanel` (`.is-active`) | 3/13 | **Segmented "Abas"** (`data-tab`→`.tabpanel`) | 🧩 | Runtime do DS troca o painel; `.tabbar`/`.tabpanel` são cola. |
| `.dados` (grid de `.data-item`) | 6 | Grid de **Data-item** | 🧩 | Layout `grid` sobre o componente. |
| `.taglist` (grupo de `.badge`) | 6 | Grupo de **Badge** | 🧩 | Só `flex-wrap` de badges. |
| `.chip` | 14 | **Badge** (`--tag`/`--outline`) | 🧩 | Substituível por badge; hoje é classe própria (ver §E). |

---

## C. Cola de tela / layout (não são componentes — esperado)

| De (classe) | Papel | Status |
|---|---|---|
| `.uni-page` / `.app` / `.main` / `.content` / `.topbar` | Shell multipágina do protótipo (harness) | 🏗️ |
| `.pagehead` (`__title/__actions/__count/__sub`) | Cabeçalho de página (título + ações) | 🏗️ |
| `.toolbar` (`__search/__filter-dd`) | Barra de busca+filtro da listagem | 🏗️ |
| `.formgrid` / `.full` | Grade de formulário e modificador de largura de input | 🏗️ |
| `.fltfield` / `.fieldlbl` / `.seglegend` | Campos e rótulos dentro de painéis de filtro | 🏗️ |
| `.reprow` / `.listrow` | Linhas de layout dentro do repeater | 🏗️ |
| `.dados` | Grid (ver §B) | 🏗️ |
| `.cl-name` / `.cl-mail` / `.mono` | Utilitários de texto (nome/e-mail/monoespaçado) das jornadas Locatários/Orçamentos | 🏗️ |
| `.title-h1` / `.text-label-regular` | Classes de tipografia = tokens do DS | 🏗️ |
| `.icon-btn` | Botão só-ícone (candidato a variante de **Button**; ver §E) | 🏗️ |

---

## D. Lacunas — classes SEM componente no DS (❌ decidir: criar ou substituir)

Estas são as que mais importam: hoje existem só como CSS de tela e **não têm ficha no DS**.

| De (classe no protótipo) | Uso | O que é | Para (proposta) | Status |
|---|---:|---|---|---|
| `.contract-hero` (`__icon/__meta/__id/__name/__sub/__flags`) | — | Cabeçalho de identificação do contrato (ícone + id + nome + badges) | **Reusar `profile-hero`** (já existe no DS) OU formalizar como variante `profile-hero--contract` | ❌ Divergência (ver §E) |
| `.checklist` (`-item/-ico/-body/-title/-sub`) | 44 | Lista de pendências com estado (pré-move-in) | **Criar componente `checklist`** (o próprio arquivo já declara como novo, CSS §2560) | ❌ |
| `.hist` (`-item/-ico/-body/-top/-when/-meta`) | 38 | Linha do tempo / histórico (capas, reajustes, ocorrências, eventos) | **Criar componente `timeline`** (não existe equivalente no DS) | ❌ |
| `.barrow` / `.barlist` / `.segbar` / `.seglegend` | ~55 | Gráficos de barras do Dashboard (carteira por estado, aging, etc.) | **Criar componentes de dataviz** (bar/stat) — DS não tem nenhum componente de gráfico | ❌ |
| `.diffrow` | 18 | Linha de comparação (diff) entre versões de capa contratual | **Criar componente `diff-row`** ou compor com Data-item | ❌ |
| `.bxcard` (`__l/__r`) + `.bxthumb` | 38/19 | Linha-cartão de listagem (box/espaço, documento, garantia, condição comercial) | **Criar componente `list-row`/`media-row`** (recorrente em várias telas) | ❌ |
| `.ocard` (`__title`) | 19 | Cartão de ocorrência | Formalizar (variante de `list-row`/Card) | ❌ |
| `.chip` | 14 | Pílula pequena | **Substituir por `badge`** (não criar novo) | ❌ (substituição) |

---

## E. Divergências / pontos a resolver com o design

1. **`contract-hero` vs `profile-hero`** — o DS **já tem** o componente `profile-hero` (avatar 56 + nome H2 + sub + flags de badge), que é exatamente a anatomia do `contract-hero`. O protótipo reinventou em vez de reusar. Decisão: reusar `profile-hero` ou oficializar `contract-hero` como variante. (Obs.: nas telas de Perfil 360 este bloco foi removido a pedido, mas a classe/estilo segue no arquivo.)

2. **Componente `card` não é reusado** — o DS tem `card`, mas o protótipo usa `.section` e `.bxcard` próprios para todo contêiner. Vale alinhar se `.section`/`.bxcard` passam a ser oficializados como composições sobre `card` ou como componentes.

3. **Variantes de Button** — o protótipo usa `btn--primary` (36), `btn--outline` (22), `btn--ghost` (36), `btn--secondary` (7), `btn--destructive` (10), `btn--icon` (8), `btn--icon-border` (12). O `design-system.md` descreve Button como "variantes por atributo/classe… **sem modificadores `--` no CSS raiz**". Conferir contra `components/button/button.html`: ou a doc do DS está desatualizada, ou essas variantes `btn--*` são de tela. Precisa bater 1:1.

4. **Itens já marcados ⚠️ no DS** que este protótipo exercita (herdam a pendência): `KPI`, `profile-hero`, `segmented` (node Figma), `table` variantes Seleção/Colunas fixas, `repeater`, token `H2` (`--font-size-h2`/`--line-hight-h2`) e cor âmbar de `badge--warning`.

5. **Runtime do kebab da tabela** — o menu (`Editar / Duplicar / Excluir`) é fixo no `ds.js`. Se o menu de contratos precisar de itens próprios, isso é mudança no runtime do componente Table (avisar + padrão do DS).

---

## F. Resumo

- **Reuso alto:** a maior parte da tela já assenta em componentes do DS (Sidebar, Input, Table, Select, Modal, Banner, Badge, Data-item, Dropdown, Breadcrumb, KPI, Segmented, Avatar, Pagination, Footer, Progress, Repeater, Checkbox-card).
- **Composições OK:** StepSection, Modal (confirm), Abas (segmented+tabpanel), grids de data-item/badge.
- **8 lacunas reais** (§D) a decidir: `checklist`, `timeline` (hist), dataviz de dashboard (bar/segbar), `diff-row`, `list-row` (bxcard), `ocard`, além de `contract-hero`→`profile-hero` e `chip`→`badge` (substituições).
- **3 divergências** (§E) a alinhar com o design: `contract-hero`, não-reuso de `card`, e variantes `btn--*`.

Próximo passo sugerido: para cada linha ❌ da §D, decidir **criar componente** (seguindo `CLAUDE.md §1.1`: pasta, só tokens, `data-ds`, exemplo `.html`, ficha no `design-system.md`) **ou substituir** por um existente — e formalizar os itens ⚠️ no Figma.
