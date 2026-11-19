# Tema 06 — Estruturas de repetição

> **Disciplina:** [Introdução à Programação](../README.md) · **Fonte:** [PDF](<../../../materiais/introducao-programacao-computadores/Tema 6 - Estruturas de Repetição.pdf>) · 46 páginas

## Em uma frase

`for` quando você **sabe quantas vezes**; `while` quando **depende da condição**; `do-while` quando precisa rodar **pelo menos uma vez**.

## O problema que motiva tudo

Ler as notas de **40 alunos** e calcular a média de cada um. Sem repetição, seriam 40 blocos copiados. Com repetição, um bloco que roda 40 vezes.

## `for` — variável de controle

Três partes, sempre na mesma ordem:

```c
for (cont = 1; cont <= 10; cont++) {
    printf("%d\n", cont);
}
```

| Parte | Papel |
| :--- | :--- |
| `cont = 1` | **inicialização** da variável de controle |
| `cont <= 10` | **condição** testada antes de cada volta |
| `cont++` | **incremento** ao fim de cada volta |

### Variações

```c
for (cont = 2; cont <= 10; cont += 2)     // pares de 2 a 10
for (cont = 10; cont <= 100; cont += 10)  // dezenas
for (cont = 1000; cont >= 0; cont -= 100) // decrescente
```

### Acumuladores

```c
soma = 0;
for (cont = 1; cont <= 10; cont++) {
    soma = soma + cont;
}
media = soma / 10;
```

Duas regras de ouro:

1. **Inicialize o acumulador antes do laço** (`soma = 0`). Sem isso, ele começa com lixo de memória.
2. **Cuidado com a divisão inteira**: `soma / 10` com `int` trunca. Use `10.0` ou `float`.

### Encontrar o maior

```c
maior = 0;
for (cont = 1; cont <= 15; cont++) {
    scanf("%d", &num);
    if (num > maior) {
        maior = num;
    }
}
```

Se os números puderem ser negativos, inicialize `maior` com o **primeiro valor lido**, não com 0.

## `while` — pré-teste

Repete **enquanto** a condição for verdadeira, testando **antes** de entrar.

```c
scanf("%d", &num);
while (num != 0) {
    printf("Li: %d\n", num);
    scanf("%d", &num);
}
```

A leitura antes do laço é obrigatória — senão a primeira condição é avaliada com lixo.

Uso típico: **quantidade desconhecida**, com sentinela (o `0` que encerra).

### O erro clássico

```c
while (num != 0) {
    printf("%d", num);
    // esqueceu de ler de novo → loop infinito
}
```

Se o programa "trava", quase sempre é uma variável de controle que não muda dentro do laço.

## `do-while` — pós-teste

Executa o bloco e **só então** testa:

```c
do {
    scanf("%d", &num);
    if (num % 2 == 0)
        printf("Sucessor: %d\n", num + 1);
    else
        printf("Antecessor: %d\n", num - 1);
} while (num != 0 && num != 9);
```

Garantia: o bloco roda **pelo menos uma vez**. Útil em menu ("execute, mostre as opções, pergunte se quer continuar").

## Comparando

| | `for` | `while` | `do-while` |
| :--- | :--- | :--- | :--- |
| Teste | antes | antes | **depois** |
| Execuções mínimas | 0 | 0 | **1** |
| Quando usar | número fixo de repetições | condição desconhecida | precisa rodar ao menos uma vez |
| Risco | errar o incremento | loop infinito | condição mal escrita |

Os três resolvem o mesmo tipo de problema — a escolha é de **legibilidade**. Mas o material é claro: para número conhecido de repetições, o `for` é o mais adequado.

## Combinando com `switch`

Contar vogais até encontrar `.`:

```c
scanf("%c", &letra);
while (letra != '.') {
    switch (letra) {
        case 'a': conta++; break;
        case 'e': conte++; break;
        case 'i': conti++; break;
        case 'o': conto++; break;
        case 'u': contu++; break;
    }
    scanf("%c", &letra);
}
```

Repare que a leitura aparece **duas vezes**: antes do laço e no fim do bloco. Sem a segunda, o laço nunca termina.

## O que levar

- `for` = inicialização, condição, incremento.
- Acumulador começa em zero — sempre.
- `while` testa antes; `do-while` testa depois e roda no mínimo uma vez.
- Variável de controle precisa mudar dentro do laço.
- Sentinela é o valor que encerra quando a quantidade é desconhecida.

---

<sub>[← tema anterior](05-estruturas-de-decisao.md) · [voltar à disciplina](../README.md) · [próximo tema →](07-vetores-e-matrizes.md)</sub>
