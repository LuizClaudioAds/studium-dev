# Tema 03 — Tipos de dados, expressões, operadores e tabela verdade

> **Disciplina:** [Introdução à Programação](../README.md) · **Fonte:** [PDF](<../../../materiais/introducao-programacao-computadores/Tema 3 - Tipos de Dados, Expressões, Operadores e Tabela Verdade.pdf>) · 28 páginas

## Em uma frase

Todo dado que o programa manipula tem **tipo** — e o tipo decide o que a operação faz, inclusive quando ela parece errada.

## Os tipos primitivos de C

| Tipo | Guarda | Exemplo |
| :--- | :--- | :--- |
| `char` | Um caractere (tabela ASCII) | `'M'`, `'F'`, `'7'` |
| `int` | Inteiro | `558`, `-12` |
| `float` | Real de precisão simples | `1.75` |
| `double` | Real de precisão dupla | `3.141592` |
| `void` | Ausência de valor | usada em funções |

Detalhes que caem em prova:

- `'7'` (com aspas simples) é **caractere**; `7` é **int**.
- `"7"` (aspas duplas) é string — em C, isso já é outra estrutura.
- `char` usa a tabela ASCII: 0–31 controle, 32–127 ASCII normal, 128–255 estendida.

## Dado x informação

Do material: **dado** é valor sem contexto; **informação** é dado contextualizado. `558` é dado. "558 alunos matriculados no semestre" é informação. Programar é, em boa parte, transformar o primeiro no segundo.

## Variáveis e constantes

- **Variável**: espaço de memória que pode mudar em tempo de execução.
- **Constante**: valor que não muda depois de definido.

```c
float peso;
float altura;
int idade = 20;
```

C é **sensível a maiúsculas e minúsculas**: `Peso`, `peso` e `PESO` são identificadores diferentes.

Boas práticas: poucas variáveis por declaração, nomes que digam o que guardam.

## Operadores

### Aritméticos

| Operação | Símbolo | Cuidado |
| :--- | :--- | :--- |
| Soma | `+` | — |
| Subtração | `-` | — |
| Multiplicação | `*` | — |
| Divisão | `/` | `int / int` **trunca** |
| Resto | `%` | Só para inteiros |

O ponto mais importante da disciplina:

```c
5 / 2      // 2   (divisão inteira, trunca)
5.0 / 2    // 2.5 (um operando real promove o resultado)
5 % 2      // 1   (resto)
```

Se um dos operandos é `float`/`double`, o resultado é real. Se os dois são `int`, o resultado é `int`. Isso gera bugs silenciosos em média, porcentagem e divisão de notas.

### Relacionais

`<`, `>`, `<=`, `>=`, `==`, `!=` — devolvem verdadeiro (1) ou falso (0).

`=` atribui, `==` compara. Confundir os dois é o erro mais comum de quem está começando.

### Lógicos

| Operador | Nome | Regra |
| :--- | :--- | :--- |
| `&&` | E lógico | Verdadeiro só se **os dois** forem verdadeiros |
| `\|\|` | OU lógico | Verdadeiro se **pelo menos um** for verdadeiro |
| `!` | NÃO lógico | Inverte |

Em C, qualquer valor diferente de 0 é tratado como verdadeiro; 0 é falso.

### Bit a bit

`&`, `|`, `^`, `~`, `<<`, `>>` operam sobre os bits. Aparecem em manipulação de hardware, permissões e otimização.

### Atribuição composta

```c
a += 10;   // a = a + 10
a -= 2;    // a = a - 2
a *= 3;
a /= 2;
a %= 2;
```

### Conversão (cast)

```c
int p = (int)3.1415;   // p = 3 — perde a parte decimal
```

Conversão pode ser **com perda** (real → inteiro) ou **sem perda** (int → float).

## Precedência

Sem parênteses, a ordem é:

```text
1. parênteses
2. unários (++, --, !, cast)
3. * / %
4. + -
5. relacionais (< > <= >=)
6. igualdade (== !=)
7. &&
8. ||
9. atribuição (= += ...)
```

Na dúvida, **parênteses**. Eles custam zero e evitam bug.

## Tabela verdade

**E (`&&`)**

| a | b | a && b |
| :-: | :-: | :-: |
| V | V | V |
| V | F | F |
| F | V | F |
| F | F | F |

**OU (`||`)**

| a | b | a \|\| b |
| :-: | :-: | :-: |
| V | V | V |
| V | F | V |
| F | V | V |
| F | F | F |

**NÃO (`!`)**: inverte. `!(V && F)` = `!(F)` = V.

## O que levar

- Tipo define comportamento, não só "tamanho".
- `5/2` é 2 — divisão inteira trunca.
- `==` compara, `=` atribui.
- `&&` exige os dois; `||` aceita um.
- Precedência existe, mas parênteses são mais confiáveis.
- Cast de real para inteiro descarta a parte decimal, não arredonda.

---

<sub>[← tema anterior](02-solucao-de-problemas.md) · [voltar à disciplina](../README.md) · [próximo tema →](04-entrada-e-saida.md)</sub>
