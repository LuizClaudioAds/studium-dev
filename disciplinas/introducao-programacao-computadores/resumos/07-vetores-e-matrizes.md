# Tema 07 — Vetores e matrizes

> **Disciplina:** [Introdução à Programação](../README.md) · **Fonte:** slides da disciplina (arquivados em `materiais/`) · 59 páginas

## Em uma frase

Vetor é uma **fila de gavetas numeradas** do mesmo tipo; matriz é uma **grade** delas — e o índice começa em zero.

## Por que não usar variáveis simples

Para ler 100 notas, seriam 100 variáveis. Além disso, a cada leitura de uma variável simples o valor anterior é **descartado**. Estruturas homogêneas guardam todos os valores ao mesmo tempo.

## Classificação

| Critério | Tipo | Exemplo |
| :--- | :--- | :--- |
| Alocação | **Estática** (tamanho fixo) | vetor, matriz |
| Alocação | Dinâmica (em execução) | ponteiros |
| Dados | **Homogênea** (mesmo tipo) | vetor, matriz |
| Dados | Heterogênea (tipos diferentes) | registro/struct |

Vetor e matriz em C são **estáticos**: o tamanho é definido na declaração e não muda.

## Vetor

### Declaração e inicialização

```c
int numeros[100];
float notas[20];
char vogais[5];

int valores[5] = {10, 12, 14, 16, 18};
```

### Índice: a pegadinha eterna

Um vetor de **10 elementos** tem índices de **0 a 9**. A posição 10 não existe.

```c
int vet[10];
vet[0]  = 5;    // primeiro
vet[9]  = 45;   // último
// vet[10] = 901;  ← erro: fora do limite
```

Em C, acessar fora do limite **não gera erro de compilação** — gera comportamento indefinido. Esse é um dos bugs mais perigosos da linguagem.

### Ler e escrever

```c
scanf("%d", &vet[7]);        // lê direto na posição 7
printf("%d", vet[7]);        // exibe

for (i = 0; i < 10; i++) {
    scanf("%d", &vet[i]);
}
```

Note: `&vet[i]` no `scanf` porque é uma posição específica; `vet` sozinho já seria o endereço do início.

### Inicializar 100 posições

```c
for (i = 0; i < 100; i++) {
    vet[i] = 0;
}
```

### Percorrer ao contrário

```c
for (i = 99; i >= 0; i--) {
    printf("%d, ", vet[i]);
}
```

### Média

```c
soma = 0;
for (i = 0; i < 80; i++) {
    soma = soma + vet[i];
}
printf("media = %.2f", soma / 80.0);
```

### Vetor de caracteres

```c
char nome[11];   // 10 letras + '\0'
```

O terminador `'\0'` ocupa uma posição. Por isso "INTRODUCAO" (10 letras) precisa de 11.

Ao ler `char` dentro de repetição com `scanf`, o `Enter` sobra no buffer. O material usa `getch()`/`getchar()` para consumir.

## Matriz

### Da ideia de vários vetores

Três vetores de 50 notas viram uma matriz `[3][50]` — ou `[50][3]`, dependendo se a linha representa a prova ou o aluno. **A escolha do formato muda toda a lógica de acesso.**

```c
float prova1[50], prova2[50], prova3[50];   // antes
float notas[3][50];                          // depois
```

### Declaração e acesso

```c
int mat[3][5];          // 3 linhas, 5 colunas
mat[2][1] = 12;

printf("%d", mat[2][1]);
scanf("%d", &mat[2][0]);
```

Ordem: **linha primeiro, coluna depois** — `mat[linha][coluna]`.

### Percorrer: laço dentro de laço

```c
for (lin = 0; lin < 3; lin++) {
    for (col = 0; col < 5; col++) {
        mat[lin][col] = 0;
    }
}
```

### Diagonal principal

Onde `lin == col`:

```c
for (lin = 0; lin < 4; lin++) {
    mat[lin][lin] = 0;
}
```

### Transposta

```c
for (lin = 0; lin < 4; lin++) {
    for (col = 0; col < 4; col++) {
        matG[col][lin] = matO[lin][col];
    }
}
```

## Erros que aparecem em prova

| Erro | Por quê |
| :--- | :--- |
| `for (i=0; i<=20; i++)` em vetor de 20 | Vai até o índice 20, que não existe |
| `scanf("%d", vet[i])` | Falta `&` |
| `mat[col][lin]` sem querer | Ordem invertida |
| `soma` não inicializada | Começa com lixo |
| `soma/20` com int | Divisão inteira trunca |
| `mat[5][5]` sem declarar | Índice fora do limite |

## O que levar

- Índice vai de **0 a N−1**.
- Vetor é homogêneo e estático.
- `scanf` em posição de vetor precisa de `&`.
- Matriz se percorre com dois `for`.
- `lin == col` é a diagonal principal.
- C não avisa quando você sai do limite — ele apenas quebra.

---

<sub>[← tema anterior](06-estruturas-de-repeticao.md) · [voltar à disciplina](../README.md)</sub>
