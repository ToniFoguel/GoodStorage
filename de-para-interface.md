# De/Para — Interface atual (prototipo-contratos.html) × Design System

> Auditoria do estado **atual** do protótipo (`journeys/contratos/prototipo-contratos.html`)
> contra os componentes do DS. Feita por extração de todas as classes do markup e
> cruzamento com `components/` + `design-system.md`. Substitui o `de-para-contratos.md`
> (que auditava o arquivo achatado original, antes da refatoração).

## Resumo

A interface agora é composta **essencialmente por componentes do DS**. Todos os
"componentes inventados" que existiam no início (contract-hero, checklist, hist/timeline,
gráficos barrow/segbar, diffrow, bxcard/ocard, chip) foram **substituídos** por componentes
do DS. Não há mais componente fora do DS na interface — só sobrou o *scaffolding* de página
(grid app/main/content) e utilitários de texto/estado, que não são (nem precisam ser) componentes.

## A. Componentes do DS usados (de → para 1:1)

| Elemento na interface | Componente DS | Onde aparece |
|---|---|---|
| Tabelas (listagem, histórico, condições, dashboard) | **Table** (`data-ds="table"`) | Lista, Perfil, Dashboard |
| Campos de formulário / dados | **Input** (`data-ds="input"`, `input--readonly` na exibição) | Cadastro, Exibição, Edição |
| Menu lateral | **Sidebar** (`data-ds="sidebar"`) | Todas |
| Selects | **Select** (`data-ds="select"`) | Cadastro, filtros |
| Botões | **Button** (`btn--primary/outline/ghost/...`) | Todas |
| Modais | **Modal** (`data-ds="modal"`) | Ações de contrato |
| Badges / tags de status | **Badge** (`--secondary/success/warning/destructive/outline/yellow`) | Status, qualificadores, condições |
| Cartões de seção | **Card** (`card card--desktop`) | Todas as seções |
| Trilha | **Breadcrumb** | Header (page-header) |
| Pares rótulo/valor | **Data-item** | (composições) |
| Menus / filtros suspensos | **Dropdown** (`data-ds="dropdown"`) | Registrar ▾, filtros |
| Métricas | **KPI** (`.kpis`/`.kpi`) | Dashboard |
| Cartão selecionável | **Checkbox-card** | (contatos/flags) |
| Avatar | **Avatar** | Sidebar (usuário) |
| Cabeçalho de página | **Header** (`page-header`) | Todas |
| Abas | **Segmented** (`data-ds="segmented"`, `data-tab`→`tabpanel`) | Origem do contrato, parâmetros |
| Barras (dashboard "carteira por estado") | **Progress** (`.progress`) dentro de célula de Table | Dashboard |
| Paginação | **Pagination** | Table |
| Rodapé | **Footer** | Todas |
| Grupo repetível (espaços) | **Repeater** (`data-ds="repeater"`, `listrow/repcard`) | Cadastro |
| Datepicker / Calendar | **Datepicker** | Modais (vigência) |

## B. Composições e convenções do DS (não são componentes novos)

- **StepSection / Card de seção** — cada `.section` agora é um `card card--desktop` do DS, com cabeçalho (`.section__head` → título) e corpo. Numeração removida.
- **page-header** — breadcrumb + `.page-header__bar` (título H1 + ações). *Obs.: o container de ações ainda usa a classe `pagehead__actions` (nome legado) — trocar para `page-header__actions` é um ajuste cosmético pendente.*
- **Grade `formgrid--4` + `col-2`** — sistema de 4 colunas do DS aplicado às seções de campos (cadastro/exibição/edição), com campos longos em `col-2` e `full` na linha inteira.
- **Repeater em card (`listrow`/`repcard`/`listrow__head`)** — padrão de grupo repetível idêntico ao de representantes/procuradores do DS.
- **Abas (Segmented + tabpanel)** — troca de painel via runtime do DS.

## C. Scaffolding de página e utilitários (não são componentes — esperado)

- `app` / `main` / `content` / `uni-page` — shell/harness multipágina do protótipo.
- `toolbar` / `fltfield` / `fieldlbl` — barra de busca+filtro e rótulos de filtro.
- `dados` / `taglist` — grids de data-item / grupo de badges.
- `cl-name` / `cl-mail` / `text-label-regular` — utilitários de texto/tipografia (tokens).

## D. Helpers específicos do protótipo (não-DS, comportamentais)

Adicionados para o protótipo funcionar; não são componentes do DS e podem virar padrão se úteis:

- `view-only` / `edit-only` — alternância de ações do header entre exibição e edição.
- `ltable` — modificador de tela para a tabela de listagem.
- `esp-total` — linha de total abaixo do repeater de espaços.

## E. Responsividade (ajustada)

- `.content` deixou de ter `max-width: 1280px` → **ocupa 100% da largura** em telas grandes (antes sobrava vazio à direita; header e conteúdo agora alinham).
- `formgrid--4` reflui: 4 col → 2 col (≤960px) → 1 col (≤560px).
- Tabelas ganham rolagem horizontal em telas estreitas (≤640px) em vez de quebrar.
- No mobile (≤768px): a sidebar recolhe e o `page-header` empilha (título acima, ações abaixo).
- Não é "mobile completo" — é o suficiente para não quebrar layout e preencher telas grandes.

## F. Pendências herdadas do DS (⚠️ — não são deste protótipo)

Itens que o DS já marca como a formalizar e que esta tela exercita: `KPI`, `Segmented`,
`Repeater`, variantes de `Table` (Seleção/Colunas fixas), token `H2` e cor âmbar de `badge--warning`.
