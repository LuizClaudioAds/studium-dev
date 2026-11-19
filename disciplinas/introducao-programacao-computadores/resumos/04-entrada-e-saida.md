# Tema 04 — Comandos de entrada e saída

> **Disciplina:** [Introdução à Programação](../README.md) · **Fonte:** [PDF](<../../../materiais/introducao-programacao-computadores/Tema 4 - Comandos de Entrada e Saída.pdf>) · 24 páginas

## Em uma frase

Um programa sem entrada e saída é um cálculo silencioso: `printf` mostra, `scanf` recebe — e o `&` do `scanf` é onde quase todo mundo tropeça.

## Atribuição

```c
int a;        // declara
a = 10;       // atribui

int b = 10;   // declara e inicializa na mesma linha
```

Boas práticas de nome: `idCliente`, `id_cliente`, `cpfUsuario` — o nome deve dizer o que guarda.

### Detalhe de `char`

```c
char escolha;
escolha = 'b';        // caractere b
escolha = escolha + 1; // agora vale 'c'
```

`char` é um número disfarçado: somar 1 avança uma posição na tabela ASCII. `'A' + 1` vira `'B'`.

E cuidado: `b` sem aspas é a **variável** b; `'b'` é o **caractere** b. Escrever `escolha = b;` sem declarar `b` gera erro de compilação.

## Saída: `printf`

```c
#include <stdio.h>

int main() {
    int a = 10;
    char ch = 'Z';
    printf("Atualmente, temos a = %d e ch = %c.\n", a, ch);
    return 0;
}
```

- `#include <stdio.h>` é diretiva de pré-processamento — **não** leva ponto e vírgula.
- `main()` é o ponto de entrada.
- `\n` quebra linha.

### Especificadores de formato

| Código | Tipo | Exemplo |
| :--- | :--- | :--- |
| `%d` | inteiro | `10` |
| `%c` | caractere | `Z` |
| `%f` | real | `12.500000` |
| `%.2f` | real com 2 casas | `12.50` |
| `%s` | string | `texto` |

`float` sai com **6 casas** por padrão. Para limitar, use `%.1f`, `%.2f`, etc. — o número é a quantidade de casas.

A ordem dos argumentos precisa casar com a ordem dos `%`: trocar gera saída errada, não erro de compilação.

## Entrada: `scanf`

```c
int numero;
printf("Entre com um número inteiro:\n");
scanf("%d", &numero);
```

O `&` passa o **endereço** da variável, para que a função consiga escrever nela. Sem `&`, o programa compila e falha em execução.

### O problema do buffer

```c
scanf("%d", &idade);
scanf("%c", &inicial);   // pega o Enter que sobrou!
```

O `Enter` da primeira leitura fica no **buffer do teclado** e é consumido pela segunda. Soluções:

```c
scanf(" %c", &inicial);   // espaço antes do %c ignora espaços e Enter
```

O espaço na string de formato é o jeito mais simples — e o mais esquecido.

### Regra prática

```c
scanf("%d %d", &a, &b);        // dois inteiros
scanf("%f %f", &altura, &peso); // dois reais
```

Sempre `&` para variáveis simples (int, float, char). Para vetores, o nome já é o endereço — o `&` não é usado.

## Erros clássicos

| Erro | Consequência |
| :--- | :--- |
| `scanf("%d", numero)` | Falha em execução (falta `&`) |
| `scanf("%d\n", &numero)` | Pode travar esperando entrada |
| `printf` com `%` errado | Lixo na tela ou comportamento indefinido |
| `5/2` esperando 2.5 | Divisão inteira trunca |
| `char c = "a"` | Aspas duplas = string |

## Exemplo completo

```c
#include <stdio.h>

int main() {
    float altura, peso, imc;
    printf("Entre com sua altura e seu peso:\n");
    scanf("%f %f", &altura, &peso);
    imc = peso / (altura * altura);
    printf("Seu IMC vale %.2f\n", imc);
    return 0;
}
```

## O que levar

- `printf` formata com `%d`, `%c`, `%f`, `%.2f`.
- `scanf` precisa de `&` (exceto vetores).
- `float` sai com 6 casas por padrão.
- O `Enter` sobra no buffer — use `" %c"`.
- `char` é número: `'A' + 1` é `'B'`.

---

<sub>[← tema anterior](03-tipos-dados-operadores.md) · [voltar à disciplina](../README.md) · [próximo tema →](05-estruturas-de-decisao.md)</sub>
