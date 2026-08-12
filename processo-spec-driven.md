# Processo Spec-Driven — do Figma ao código

> O **ciclo** que faz a documentação virar prática. Documentos de apoio:
> - `design-system.md` — o que existe (fonte de verdade).
> - `CLAUDE.md` — as regras que o Claude obedece ao codar.
>
> Spec-driven aqui significa uma coisa: **a spec vem antes do código, e o código
> nunca sai na frente da spec.**

---

## O ciclo em 5 passos

```
1. PROTOTIPAR        2. VERIFICAR A SPEC     3. CODAR
   tela no Figma  ─►    tudo existe no DS?  ─►   Claude implementa
   só com DS            │ sim → segue            fiel ao DS
                        │ não → volta ao passo 0
                                                     │
                                                     ▼
                              5. APROVAR   ◄──  4. REVISAR
                                 merge          checklist do CLAUDE.md
```

### Passo 0 — (pré) Fazer o DS crescer quando faltar algo
Se a tela precisa de componente/variante/token que **não existe**, o DS cresce
de forma **controlada** — nunca por improviso:

- **Componente/variante novo:** o Claude **pode criá-lo**, mas sempre **avisando
  antes** e **dentro do padrão do DS** (pasta `components/<nome>/`, só tokens,
  runtime via `data-ds`, exemplo `.html` e ficha no `design-system.md` — ver
  seção 1.1 do `CLAUDE.md`). Depois, formalize no Figma.
- **Token/cor/dependência/stack:** não é decisão do código — **pare e avise**;
  a decisão sobe para o design e o DS é atualizado antes de codar.

Nunca deixe o código inventar em silêncio.

### Passo 1 — Prototipar no Figma
Monte a tela usando **apenas** componentes do DS. Se precisar dar "detach" ou
desenhar do zero, falta algo no DS → volte ao Passo 0.

### Passo 2 — Verificar a spec
Antes de chamar o Claude: todo elemento existe no `design-system.md`? Os valores
são todos tokens? Sim → segue. Não → Passo 0.

### Passo 3 — Codar com o Claude
Passe o **link/node do Figma** e diga: "implemente esta tela seguindo o
`CLAUDE.md` e o `design-system.md`". O Claude deve casar cada elemento com um
componente existente, reutilizar o markup dos exemplos, usar só tokens, e
**parar e avisar** se faltar algo.

### Passo 4 — Revisar
Rode o checklist do `CLAUDE.md` (seção 5). O que mais pega: valor hardcoded,
componente/variante inventado, classe divergente, ordem de carregamento errada.

### Passo 5 — Aprovar
Passou → integra. A tela vira referência (`journeys/`) para as próximas.

---

## Como pedir pro Claude (modelo de prompt)

```
Implemente a tela do Figma: <link com node-id>

Regras:
- Siga o CLAUDE.md e use apenas o que está no design-system.md / no código.
- Reutilize os componentes já codados (copie o markup do components/<nome>/<nome>.html);
  não recrie markup.
- Todo valor visual deve ser token de tokens/tokens.css.
- Respeite a ordem: tokens.css → CSS dos componentes → ds/ds.css → ds/ds.js.
- Se faltar qualquer componente, variante ou token, PARE e me diga o que
  falta — não invente.
```

Para documentar um componente novo:

```
Documente o componente <nome> do Figma: <link com node-id>
Use o "Template de componente" do design-system.md e preencha fiel ao Figma
(variantes, estados, tokens, runtime). Não invente campos.
```

---

## Regras de ouro do ciclo

1. **Spec antes de código.** Nada é codado antes de existir na spec.
2. **A lacuna faz o DS crescer — de forma controlada.** Componente novo pode ser
   criado, mas sempre avisando antes e no padrão do DS. Token/cor/stack sobem
   para o design. Improviso em silêncio, nunca.
3. **Fidelidade > criatividade.** O Claude executa o design; quando cria, cria
   no padrão do DS, não inventa um jeito próprio.
4. **A spec é viva.** Criou/mudou um componente? Documente no `design-system.md`
   junto com o código.
5. **Na dúvida, perguntar.** Sempre.

---

## Ordem de leitura (para quem chega ao projeto)

1. `README-handoff.md` — visão geral e como o repo está organizado.
2. `processo-spec-driven.md` (este) — o fluxo.
3. `design-system.md` — o que existe.
4. `CLAUDE.md` — as regras que o executor segue.
