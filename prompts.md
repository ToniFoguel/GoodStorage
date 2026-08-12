# Prompts — por etapa

> **Como usar este arquivo:** cada bloco em cinza abaixo é para **você copiar e
> colar no chat do Claude** (com esta pasta conectada). Troque o que estiver
> entre `<...>`. As regras o Claude puxa sozinho do `CLAUDE.md`; aqui é só o que
> você digita.

Ordem normal de uso: **1 (uma vez)** → **2 (a cada wireframe)**. Os prompts 3–5
são para situações específicas.

---

## 1. Abertura — use UMA vez, no início

Liga as regras do pacote e confirma que o Claude entendeu.

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

---

## 2. Wireframe → tela em alta fidelidade — use a cada jornada

O fluxo principal: wireframe em baixa fidelidade vira tela em alta, refletindo o DS.
Cole junto com o wireframe (imagem ou link).

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

---

## 3. Criar componente novo — quando o Claude avisou que falta algo

Use depois que o Claude sinalizou uma lacuna e você decidiu criar o componente.

```
Vamos criar o componente "<nome>" que faltou. Siga a seção 1.1 do CLAUDE.md:
- Pasta components/<nome>/ com <nome>.css e <nome>.html no padrão dos existentes.
- Classe raiz .<nome>, partes .<nome>__<parte>, variantes .<nome>--<variante>.
- Só tokens de tokens/tokens.css; se faltar token, marque ⚠️ e me avise.
- Se tiver interação, ligue pelo ds/ds.js com data-ds="<nome>" e eventos ds:.
- Adicione a ficha ao design-system.md (Template de componente) e ao inventário.

Antes de codar, me mostre a anatomia proposta (partes, variantes, se tem
runtime) para eu aprovar.
```

---

## 4. Revisar uma tela — checklist antes de aprovar

Use para conferir uma tela pronta.

```
Revise a tela journeys/<nome>/ pelo checklist da seção 5 do CLAUDE.md:
- Todo elemento usa componente existente?
- Algum valor está hardcoded em vez de token?
- Algum componente/variante foi criado sem aviso?
- Classes e data-ds batem com o código?
- Ordem de carregamento correta?
Liste cada item como OK ou PROBLEMA (com o ponto exato). Não conserte ainda —
só me diga o que achou.
```

---

## 5. Documentar/atualizar componente existente

Use quando mudar um componente ou quiser documentar um que ainda não tem ficha.

```
Documente o componente "<nome>" no design-system.md usando o "Template de
componente". Extraia variantes, estados, tokens e runtime DIRETO do código
(components/<nome>/ e ds/ds.js) — não invente campos. Se algo não estiver claro
no código, me pergunte em vez de supor.
```

---

> Dúvida sobre o fluxo por trás dos prompts? Veja `processo-spec-driven.md`.
> Regras completas? `CLAUDE.md`. Catálogo do que existe? `design-system.md`.
