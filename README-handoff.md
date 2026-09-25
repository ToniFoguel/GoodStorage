# Leia isto primeiro — Handoff do DS goodstorage

Este repositório é o **Design System da goodstorage em código** + as **bases de
tela**. Ele foi montado para que o **Claude** (no seu ambiente) transforme telas
do Figma em código de forma **consistente com os componentes da goodstorage** e
com a **estrutura das telas** — sem inventar nada.

## Como começar (2 minutos)

1. **Abra esta pasta no seu Claude** (Cowork/Claude Code) — ou clone o repo e
   conecte a pasta. Não precisa de build nem instalação: é HTML/CSS/JS puro.
2. O Claude lê o `CLAUDE.md` da raiz automaticamente e passa a seguir as regras.
3. Para ver os componentes rodando, abra `index.html` no navegador. Para ver
   telas completas, abra qualquer arquivo em `journeys/*/*.html`.

## O que tem aqui

```
prompts.md              → prompts prontos por etapa (copie e cole no chat). COMECE AQUI.
CLAUDE.md               → as regras que o Claude segue (não inventar; só usar o DS).
processo-spec-driven.md → o fluxo Figma → código em 5 passos.
design-system.md        → catálogo do que existe: 24 componentes, variantes, tokens, runtime.
tokens/tokens.css       → todas as variáveis visuais (cor, tipografia, espaço…).
ds/ds.css, ds/ds.js     → estados e comportamento auto-init (data-ds="…").
components/<nome>/       → 1 pasta por componente (CSS + HTML de exemplo).
journeys/<fluxo>/        → telas de referência (molde para novos fluxos).
index.html              → catálogo visual.
```

## Prompts (copie e cole)

### 1) Prompt de abertura — use UMA vez, no início

Liga as regras do pacote. Cole no primeiro chat, com a pasta conectada:

```
Leia, nesta pasta, o README-handoff.md, o CLAUDE.md, o processo-spec-driven.md
e o design-system.md. A partir de agora, siga essas regras em TUDO que fizer
neste projeto.

Antes de começarmos, me confirme que entendeu:
1. Que você só monta telas com os componentes e tokens que já existem no DS
   (components/, tokens/tokens.css), reutilizando o markup dos exemplos.
2. Que NÃO inventa valor/cor/lib — se faltar, você para e avisa.
3. Que componente novo você PODE criar, mas só avisando antes e dentro do
   padrão do DS (seção 1.1 do CLAUDE.md).

E me dê um resumo do que existe hoje: quais componentes e quais journeys.
```

### 2) Prompt por jornada — use a cada wireframe

O fluxo aqui é: **wireframe em baixa fidelidade → tela em alta refletindo o DS.**
Cole junto com o wireframe (imagem ou link), trocando o nome da jornada:

```
Aqui está o wireframe em baixa fidelidade da jornada "<nome>": <imagem/link>.

Transforme em tela(s) de alta fidelidade refletindo o Design System:
- Use APENAS os componentes de components/ e os tokens de tokens/tokens.css.
- Siga o padrão das telas em journeys/ (estrutura e ordem de carregamento:
  tokens.css → CSS dos componentes → ds/ds.css → ds/ds.js).
- Case cada elemento do wireframe com um componente existente; reutilize o
  markup dos components/<nome>/<nome>.html, não recrie do zero.
- Todo valor visual deve ser token — nada de hex/px no olho.
- Se algum elemento não tiver componente no DS, PARE e me avise ANTES. Se for
  criar componente novo, siga a seção 1.1 do CLAUDE.md (avisar + padrão do DS).

Monte a tela final em journeys/<nome>/ e me diga o que usou (e o que faltou).
```

O Claude dele vai casar cada elemento do wireframe com um componente existente,
montar a tela em `journeys/`, e **parar e avisar** quando algo não existir — em
vez de improvisar. Assim o wireframe em baixa sobe para alta fidelidade já no
padrão do DS.

## Regra que resume tudo

**Fiel ao DS, nunca inventar. Na dúvida, perguntar.**

## Pendências conhecidas (⚠️)

Alguns itens dependem de decisão de design (ver seção 6 do `design-system.md`):
token `H2` provisório, cor âmbar de `badge--warning`, tint da linha selecionada
da Table e formalização no Figma da variante Seleção e do SegmentedControl.
