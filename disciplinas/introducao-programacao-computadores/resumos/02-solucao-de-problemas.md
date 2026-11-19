# Tema 02 — Solução de problemas e pensamento computacional

> **Disciplina:** [Introdução à Programação](../README.md) · **Fonte:** [PDF](<../../../materiais/introducao-programacao-computadores/Tema 2 - Solução de Problemas e Pensamento Computacional.pdf>) · 17 páginas

## Em uma frase

Antes de existir código, existe **modelagem**: entender o problema, desenhar os passos e só então escolher onde digitar.

## Solução estruturada

Programar é escrever instruções que o computador consiga executar. "Estruturada" significa que essas instruções seguem uma organização lógica — não um emaranhado de tentativas.

A base é o **raciocínio lógico**: reconhecer o tipo do problema e aplicar os passos que já funcionaram para problemas parecidos. É o mesmo mecanismo de quem resolve exercício de exatas por repetição de padrão — só que aplicado de forma consciente.

## Os quatro pilares (Brackmann, 2017)

| Pilar | O que faz |
| :--- | :--- |
| **Decomposição** | Dividir o problema em partes menores e resolvíveis |
| **Reconhecimento de padrões** | Identificar semelhanças com problemas já resolvidos |
| **Abstração** | Filtrar o que é essencial e descartar o resto |
| **Algoritmos** | Ordenar os passos em uma sequência finita que chega ao resultado |

O material lista ainda habilidades que acompanham esses pilares: pensamento iterativo, recursivo e paralelo; lógica condicional; eficiência e restrições de desempenho; depuração sistemática.

## Ferramentas de representação

Existe uma escada de abstração — e cada degrau serve para um momento:

```text
linguagem natural  →  fluxograma  →  pseudocódigo  →  código
   (ideia)          (desenho)       (quase código)   (executável)
```

### Fluxograma

Representação **gráfica** de um algoritmo. Formas básicas:

| Símbolo | Significado |
| :--- | :--- |
| Elipse | Início / fim |
| Retângulo | Processamento (cálculo, atribuição) |
| Losango | Decisão (sim / não) |
| Paralelogramo | Entrada / saída |

Exemplo do material: calcular IMC e decidir se a pessoa está abaixo do peso.

```text
início
  leia peso, altura
  imc ← peso / (altura * altura)
  se imc < 18.5 então
      escreva "Você está abaixo do peso"
  senão
      escreva "Você não está abaixo do peso"
fim
```

Detalhe que o exercício cobra: **calcular não é exibir**. No exemplo, o IMC é usado na decisão, mas não aparece na tela — muita gente erra por supor que todo cálculo é impresso.

Ferramenta usada no curso: **Bizagi**.

### Pseudocódigo

Português estruturado, sem as amarras de sintaxe de uma linguagem real. Serve para pensar antes de compilar.

```text
algoritmo "media"
var a, b, resultado: real
inicio
   leia(a, b)
   se (a <> 0) e (b <> 0) entao
      resultado <- (a + b) / 2
      escreva(resultado)
   fimse
fimalgoritmo
```

A seta `←` é **atribuição**: `a ← 10 + 15` guarda 25 em `a`, não compara.

### Portugol Studio

Ambiente em português que **executa** pseudocódigo, com simulação passo a passo. É a ponte entre desenhar e programar de verdade.

Sintaxe básica:

```text
escreva("O número digitado foi: ", numero)
leia(numero)
```

Repare: `escreva` recebe **parâmetros separados por vírgula** — texto entre aspas e variável sem aspas. Errar isso é o tropeço clássico.

## O que levar

- Modelar antes de codificar economiza tempo, não desperdiça.
- Fluxograma é para enxergar; pseudocódigo é para detalhar.
- `←` atribui; `=` em comparação é outra coisa.
- Um cálculo pode existir só para alimentar uma decisão.
- Portugol existe para tirar a sintaxe do caminho no começo.

---

<sub>[← voltar à disciplina](../README.md) · [próximo tema →](03-tipos-dados-operadores.md)</sub>
