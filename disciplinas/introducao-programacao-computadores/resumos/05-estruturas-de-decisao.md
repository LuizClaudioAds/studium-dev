# Tema 05 — Estruturas de decisão

> **Disciplina:** [Introdução à Programação](../README.md) · **Fonte:** [PDF](<../../../materiais/introducao-programacao-computadores/Tema 5 - Estruturas de Decisão.pdf>) · 22 páginas

## Em uma frase

`if` escolhe **um** caminho; `switch` escolhe entre **vários**; o resto é combinar os dois sem se perder nas chaves.

## Verdadeiro e falso em C

C não tem `boolean` nativo (na versão clássica):

- **falso** = `0`, `null` ou vazio;
- **verdadeiro** = qualquer valor diferente disso.

```c
if (a)        // verdadeiro se a != 0
if (a == 1)   // comparação explícita
if (a > 0)    // expressão relacional
```

Prefira a forma explícita. `if (flag)` funciona, mas `if (flag == 1)` comunica melhor.

## Decisão simples

```c
if (media >= 7) {
    printf("Aprovado\n");
}
```

Fluxograma: losango com "sim" e "não". No "não", o programa simplesmente segue adiante.

## Decisão composta

```c
if (media >= 7) {
    printf("Aprovado\n");
} else {
    printf("Reprovado\n");
}
```

Regra das chaves: com **um** comando são opcionais; com **dois ou mais**, obrigatórias. Na prática, use sempre — evita o bug de acrescentar uma linha e ela ficar fora do bloco.

## Decisão aninhada

Um `if` dentro de outro:

```c
if (idade >= 18) {
    if (temCarteira) {
        printf("Pode dirigir\n");
    } else {
        printf("Precisa da carteira\n");
    }
}
```

Cada nível responde uma pergunta diferente. Se estiver aninhando três ou quatro níveis, provavelmente a lógica pode ser reorganizada.

## Decisão encadeada

Sequência de `else if` — quando só **uma** alternativa pode ser verdadeira:

```c
if (media >= 7) {
    printf("Aprovado\n");
} else if (media >= 5) {
    printf("Recuperação\n");
} else {
    printf("Reprovado\n");
}
```

Detalhe importante: a ordem importa. Se o primeiro teste fosse `media >= 5`, um aluno com 9 cairia em "Recuperação".

## Operador ternário

Versão compacta de `if-else` que **retorna valor**:

```c
maior = (a > b) ? a : b;
```

Três campos: condição `?` valor se verdadeiro `:` valor se falso. Bom para expressão curta; ruim quando encadeado e ilegível.

## Múltiplas alternativas: `switch`

```c
switch (opcao) {
    case 1:
        inserirCliente();
        break;
    case 2:
        consultarPorCpf();
        break;
    case 3:
        removerCliente();
        break;
    default:
        printf("Saindo...\n");
}
```

Características:

- compara **igualdade** com valores constantes (int ou char);
- `break` encerra o caso — sem ele, a execução "cai" para o próximo (`fall-through`);
- `default` cobre o que não casou.

`switch` não substitui `if` para intervalos (`media >= 7`). Para faixa, use encadeado.

## Qual usar

| Situação | Estrutura |
| :--- | :--- |
| Uma condição → uma ação | `if` |
| Duas alternativas | `if-else` |
| Várias faixas/condições | `else if` |
| Vários valores exatos | `switch` |
| Valor curto em expressão | ternário |

## O que levar

- Em C, 0 é falso; todo o resto é verdadeiro.
- Chaves evitam bug silencioso.
- `else if` depende da ordem dos testes.
- `switch` compara valores exatos e precisa de `break`.
- Aninhar demais é sinal de que a lógica pede outra estrutura.

---

<sub>[← tema anterior](04-entrada-e-saida.md) · [voltar à disciplina](../README.md) · [próximo tema →](06-estruturas-de-repeticao.md)</sub>
