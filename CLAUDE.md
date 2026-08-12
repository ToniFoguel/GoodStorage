# CLAUDE.md — Regras do projeto (goodstorage DS)

> Este arquivo é o **contrato**. Antes de gerar ou alterar qualquer código neste
> repositório, leia este arquivo **e** o `design-system.md`. Se uma instrução
> conflitar com estas regras, **pare e pergunte** antes de agir. Na dúvida, a
> resposta padrão é **não inventar**.

---

## 0. O que é este repositório

Este repo é o **Design System da goodstorage** já em código (HTML/CSS/JS puro) +
as **bases de tela** (`journeys/`). O trabalho é transformar telas prototipadas
no Figma em código, **montando apenas com o que já existe aqui**.

```
Figma (tela prototipada com componentes do DS)
        │
        ▼
Claude implementa em código  ──► só monta com o que já existe no repo
        │
        ▼
Revisão humana ──► aprova ou devolve
```

Fontes de verdade:
- **`design-system.md`** — catálogo do que existe (componentes, variantes, tokens, runtime).
- **O código em `components/`, `tokens/`, `ds/`** — a implementação real; o markup de referência de cada componente está no `<nome>.html`.
- **O Figma** (`estudo`, file key `EPHZw7duAVSjyhosJfSSs8`) — fonte do **layout** de cada tela.

Você (Claude) é o **executor** do design, não o autor.

---

## 1. Regra de ouro: nunca invente em silêncio

Você **NUNCA** cria nada sem antes **avisar** e sem seguir os **padrões do DS**.
Especificamente, você **não pode**, por conta própria e sem aviso:

- Sair criando componentes, variantes, estados ou props que não existem.
- Usar cores, espaçamentos, fontes, raios ou sombras "no olho". Use **somente
  tokens** de `tokens/tokens.css` (`var(--token)`), nunca hex/px cru.
- Trazer ícones ou assets que não venham do repo/Figma.
- Introduzir bibliotecas, framework, build ou dependência nova (o DS é
  HTML/CSS/JS puro).

Quando a tela precisa de algo que **não existe** no DS, o caminho é:

1. **Pare e avise.** Diga exatamente o que falta (nome do componente/variante/token).
2. Se for **valor sem token, dependência ou mudança de stack** → **espere**
   decisão/atualização antes de codar. Não improvise.
3. Se for um **componente novo** que a tela exige → você **pode criá-lo**, mas
   só **depois de avisar** e **estritamente dentro dos padrões do DS**
   (ver seção 1.1). Nunca crie um componente às escondidas no meio de uma tela.

> A lacuna é um sinal: ou o DS cresce de forma controlada (componente novo,
> avisado e no padrão), ou a decisão sobe para o design (token/cor/stack).
> O que nunca acontece é você improvisar sem avisar.

---

## 1.1. Como criar um componente novo (quando autorizado)

Criar é permitido **desde que**: (a) você **avise antes** o que vai criar e por
quê, e (b) siga **exatamente** o padrão dos componentes existentes. Um componente
novo só é válido se for indistinguível, em estrutura, dos que já estão no repo.

Padrão obrigatório:

1. **Avise primeiro.** "A tela pede `<X>`, que não existe no DS. Proponho criar
   o componente `<nome>` assim: [anatomia, variantes, se tem runtime]. Confirmo?"
   Só siga com o ok — ou se o usuário já pediu explicitamente para criar.
2. **Pasta e nomes.** `components/<nome>/<nome>.css` + `components/<nome>/<nome>.html`.
   Nome em minúsculas/kebab-case, fiel ao Figma. Classe raiz `.<nome>`, partes
   `.<nome>__<parte>`, variantes/estados `.<nome>--<variante>` / `.<nome>__<parte>--<estado>`.
3. **Só tokens.** Todo valor visual vem de `tokens/tokens.css`. Se faltar um
   token, **não invente valor** — sinalize (seção 1, item 2) e use ⚠️.
4. **Comportamento no runtime.** Se o componente tiver interação, ligue-o pelo
   `ds/ds.js` com `data-ds="<nome>"` e eventos `ds:<evento>` — no mesmo estilo
   dos componentes existentes. Não escreva JS avulso na tela.
5. **Exemplo.** O `<nome>.html` segue o formato dos outros (linka `tokens.css` +
   o CSS do componente + `ds/ds.css`/`ds/ds.js` se tiver runtime; sprite de
   ícones inline quando precisar).
6. **Documente.** Adicione a ficha ao `design-system.md` (use o "Template de
   componente") e uma entrada no inventário. Marque com ⚠️ o que depender de
   decisão de design (token/node do Figma a formalizar).
7. **Avise de novo ao terminar.** Liste o que foi criado, para virar Passo 0 do
   ciclo (formalizar no Figma depois).

> Resumo: **pode criar, mas sempre avisando e sempre dentro do padrão do DS.**
> Componente novo é adição controlada à spec — nunca uma gambiarra dentro da tela.

---

## 2. Como implementar uma tela

1. **Leia a tela no Figma** e identifique cada elemento.
2. Para cada elemento, **case com um componente do `design-system.md`** pelo
   nome/classe. Não casou? Aplique a Regra de Ouro (seção 1).
3. **Reutilize o componente existente**: copie o markup do `components/<nome>/<nome>.html`,
   linke o `<nome>.css`, e — se for componente com runtime — marque a raiz com
   `data-ds="<nome>"` e carregue `ds/ds.js`. Não recrie markup do zero.
4. Use **apenas tokens** para qualquer valor visual.
5. Respeite a **ordem de carregamento**: `tokens.css` → CSS dos componentes →
   `ds/ds.css` → `ds/ds.js` (defer). Veja qualquer arquivo em `journeys/` como molde.
6. Reproduza o layout fiel ao Figma **usando os componentes e tokens existentes**.
7. Não adicione comportamento, animação ou estado que não esteja na tela ou na
   ficha do componente. O comportamento padrão já vem do `ds/ds.js`.

---

## 3. Fidelidade ao Figma e ao código

- Nomes de classes, variantes e `data-ds` seguem **exatamente** o que está no
  código / `design-system.md`. Não renomeie, não traduza, não "melhore".
- Se o Figma mostra um valor que **não** corresponde a nenhum token, é um bug de
  design — **reporte**, não codifique o valor cru.
- Componentes marcados com ⚠️ no `design-system.md` (ex.: token H2 provisório,
  âmbar de warning) ainda dependem de decisão de design — sinalize ao usá-los.

---

## 4. Stack e convenções (fixas deste repo)

- **Sem framework:** HTML + CSS + JS puro. Nada de React/Vue/build sem aprovação.
- **Estilo:** CSS por componente em `components/<nome>/<nome>.css`; nada de estilo
  inline além de valores de runtime já previstos (ex.: `style="--progress:70%"`).
- **Tokens:** um único lugar — `tokens/tokens.css`. Nada de hex/px soltos.
- **Comportamento:** um único lugar — `ds/ds.js` (auto-init por `data-ds`). Não
  escreva JS de comportamento novo se o runtime já cobre.
- **Um componente por pasta**, nomeado igual ao componente do DS.
- **Telas novas** vão em `journeys/<fluxo>/`, seguindo o padrão das existentes.

---

## 5. Antes de entregar (checklist)

- [ ] Todo elemento da tela usa um componente que existe no `design-system.md`/código.
- [ ] Nenhum valor visual está hardcoded — tudo é token.
- [ ] Nenhum componente/variante foi criado **sem aviso**. (Criar é ok se você
      avisou e seguiu a seção 1.1; improvisar em silêncio não é.)
- [ ] Componente novo (se houver) segue o padrão: pasta/nomes, só tokens,
      runtime via `data-ds`, exemplo `.html` e ficha no `design-system.md`.
- [ ] Classes e `data-ds` batem exatamente com o código.
- [ ] Ordem de carregamento correta (tokens → componentes → ds.css → ds.js).
- [ ] Se faltava token/dependência/decisão de design, você **parou e avisou**.

Se qualquer item falhar, **não entregue** — reporte o que falta.

---

## 6. O que fazer quando faltar algo (resumo)

| Situação | Ação correta |
|---|---|
| Componente não existe | Avise o que falta. **Pode criar** seguindo a seção 1.1 (padrão do DS) — nunca em silêncio. |
| Variante/estado não existe | Avise. Se couber no componente, **pode adicionar** no padrão (classe `--<variante>`, só tokens). |
| Cor/tamanho sem token | Reporte como valor não-tokenizado. **Não** hardcode; espere decisão de design. |
| Biblioteca/framework/build novo | Pare. Peça aprovação — não introduza sozinho. |
| Instrução quebra uma regra | Pergunte antes de agir. |
| Tela ambígua | Pergunte. Não assuma. |

> Lema: **fiel ao DS. Pode crescer o DS, mas sempre avisando e sempre no padrão.
> Na dúvida, perguntar.**
