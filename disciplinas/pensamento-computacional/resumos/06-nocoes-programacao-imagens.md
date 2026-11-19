# Tema 06 — Noções de programação: manipulando imagens

> **Disciplina:** [Pensamento Computacional](../README.md) · **Fonte:** slides da disciplina (arquivados em `materiais/`) · 52 páginas

## Em uma frase

Uma imagem é uma matriz de números — programar é escrever um laço que passa por cada número e uma condição que decide o que fazer com ele.

## O percurso do tema

O material tem uma progressão muito clara, e vale guardá-la como método:

1. **Um pixel** → carregar, ler, alterar, exibir.
2. **Todos os pixels** → estrutura `for`.
3. **Expressões** → calcular em vez de fixar valor.
4. **Decisão** → estrutura `if` escolhe quais pixels mudar.

Esse é, literalmente, o esqueleto de qualquer filtro de imagem — e de muita coisa além de imagem.

## 1. Manipulação singular

```javascript
img = new SimpleImage("circulo.bmp");   // carrega para a memória
img.setZoom(20);                        // 20x = cada pixel vira 20x20 na tela
print(img);                             // exibe
```

Ler e alterar um pixel específico:

```javascript
pixel = img.getPixel(4, 4);   // linha, coluna
pixel.setRed(255);            // vermelho no máximo
print(img);
```

Detalhes que o material cobra:

- A ordem importa: **carregar → manipular → exibir**.
- `setZoom` não altera a imagem original, só a forma de exibição.
- Zoom de **0.5** equivale a afastar 2×; zoom negativo não faz sentido.
- `getPixel(x, y)` recebe coluna e linha — trocar a ordem muda o pixel.

## 2. Repetição: o `for`

Manipular pixel por pixel "na mão" é inviável. Uma imagem de **292 mil pixels** exigiria 292 mil instruções escritas. O `for` resolve isso:

```javascript
for (pixel : img) {
    pixel.setRed(255);
}
```

Poucas linhas, executadas uma vez por pixel. O material calcula: 3 operações por pixel × 292 mil = **876 mil operações** — e o computador faz isso em frações de segundo.

Comparação de escala: uma imagem de 1.400 × 932 tem **1.304.800 pixels**. Escrever três linhas por pixel daria **3.914.400 linhas de código**.

## 3. Expressões: calcular em vez de fixar

```javascript
pixel.setRed(pixel.getRed() / 2);   // metade do vermelho
pixel.setRed(pixel.getRed() * 0.5); // idêntico
```

Aqui está o conceito: o computador **avalia** a expressão antes de usar o resultado. `40 + 11` vira `51`; `getRed() / 2` vira um número.

### Escala de cinza

Cinza acontece quando **R = G = B**. Para converter, calcula-se a média dos três canais e aplica-se aos três:

```javascript
media = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
pixel.setRed(media);
pixel.setGreen(media);
pixel.setBlue(media);
```

Multiplicar a média por 1.2, 1.5 ou 2 clareia a imagem. É experimentação, não fórmula mágica.

### Cores compostas (RGB)

| Cor | R | G | B |
| :--- | --: | --: | --: |
| Branco | 255 | 255 | 255 |
| Preto | 0 | 0 | 0 |
| Vermelho | 255 | 0 | 0 |
| Verde | 0 | 255 | 0 |
| Azul | 0 | 0 | 255 |
| Amarelo | 255 | 255 | 0 |
| Ciano | 0 | 255 | 255 |
| Magenta | 255 | 0 | 255 |

## 4. Condicional: o `if`

```javascript
for (pixel : img) {
    if (pixel.getRed() == 255 && pixel.getGreen() == 0 && pixel.getBlue() == 0) {
        pixel.setRed(128);
        pixel.setGreen(128);
        pixel.setBlue(128);
    }
}
```

O `if` **seleciona** pixels. O `for` **percorre**. Juntos, fazem edição seletiva.

Atenção ao operador: `==` compara; `=` atribui. Confundir os dois é o erro clássico.

### O caso do meio-fio amarelo

Primeira tentativa: `if (R == 255 && G == 255 && B == 0)`. Funciona parcialmente — mas deixa de fora os amarelos mais escuros (luminosidade menor).

A solução "inteligente" vem do **reconhecimento de padrões**: amarelo tem R e G parecidos, com B muito mais baixo. Então:

```javascript
media = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
if (pixel.getRed() > media && pixel.getGreen() > media) {
    pixel.setRed(media);
    pixel.setGreen(media);
    pixel.setBlue(media);
}
```

Em vez de exigir um valor exato, a condição descreve a **relação** entre canais. É mais robusto — e é exatamente o tipo de raciocínio que a disciplina chama de abstração.

## O que levar

- Carregar → processar → exibir.
- `for` percorre; `if` seleciona.
- `==` compara, `=` atribui.
- Expressão é avaliada antes de ser usada.
- Regra exata quebra com variação; regra baseada em padrão resiste.
- O computador é rápido, não esperto: a inteligência está na condição que você escreveu.

---

<sub>[← tema anterior](05-representacao-de-imagens.md) · [voltar à disciplina](../README.md) · [próximo tema →](07-revolucao-da-ia.md)</sub>
