# Tema 05 — Representação de imagens em computadores

> **Disciplina:** [Pensamento Computacional](../README.md) · **Fonte:** material da aula não disponível em PDF — resumo complementar
>
> Este resumo foi escrito a partir do tópico da ementa, para não deixar lacuna no acervo. Quando o material original aparecer, ele deve ser confrontado com este texto.

## Em uma frase

Para o computador, uma imagem não é uma figura — é uma **grade de números**, e cada número diz a cor de um pontinho.

## Raster x vetor

| | Raster (bitmap) | Vetor |
| :--- | :--- | :--- |
| Como é formada | Grade de pixels | Formas matemáticas (linhas, curvas, polígonos) |
| Escala | Perde qualidade ao ampliar | Escala sem perder definição |
| Uso típico | Foto, print, vídeo | Logo, ícone, ilustração, tipografia |
| Exemplos | JPG, PNG, GIF, WebP | SVG, PDF vetorial, AI |

Um logo salvo em PNG e ampliado 10× fica serrilhado. O mesmo logo em SVG continua nítido — porque não existem pixels, existem instruções de desenho.

## Pixel, resolução e densidade

- **Pixel** (*picture element*) é a menor unidade de uma imagem raster. Cada pixel guarda uma cor.
- **Resolução** é a quantidade de pixels: `1920 × 1080` significa 1920 colunas por 1080 linhas — cerca de 2 milhões de pixels.
- **PPI/DPI** é densidade (pixels por polegada), não tamanho. Uma imagem de 1000 px é 1000 px; o quão "grande" ela parece depende da tela ou da impressão.

Consequência prática: **imagem não tem tamanho em centímetros até ser exibida**. O que ela tem é quantidade de pixels.

## Cor: RGB e profundidade

Cada pixel é decomposto em três canais — **R**ed, **G**reen, **B**lue — cada um variando de 0 a 255 (8 bits).

```text
(255,   0,   0)  → vermelho puro
(  0, 255,   0)  → verde puro
(  0,   0, 255)  → azul puro
(255, 255, 255)  → branco
(  0,   0,   0)  → preto
(128, 128, 128)  → cinza médio
```

Em hexadecimal, o mesmo valor vira `#FF0000`. É exatamente esse formato que aparece no CSS.

**Profundidade de cor** é quantos bits por pixel:

| Profundidade | Cores | Uso |
| :--- | ---: | :--- |
| 1 bit | 2 | Preto e branco |
| 8 bits | 256 | Tons de cinza ou paleta |
| 24 bits | ~16,7 milhões | RGB padrão (8 por canal) |
| 32 bits | milhões + transparência | RGBA (canal alfa) |

## Por que duas imagens parecidas têm tamanhos tão diferentes

Quatro fatores:

1. **Resolução** — mais pixels, mais dados.
2. **Profundidade** — mais bits por pixel, mais dados.
3. **Conteúdo** — áreas uniformes comprimem melhor que textura.
4. **Compressão** — com perda ou sem perda.

### Compressão

- **Sem perda** (PNG, GIF): reconstrói exatamente o original. Bom para captura de tela, ícone, texto.
- **Com perda** (JPG): descarta informação que o olho percebe menos. Bom para foto, ruim para texto e bordas nítidas.

O JPG explorando a limitação do olho humano é um exemplo perfeito de **abstração aplicada**: você decide o que pode ser jogado fora.

## O que isso tem a ver com programação

Quando o Tema 06 manipula imagens, cada operação é aritmética sobre números:

```python
# inverter as cores de um pixel (255 - valor de cada canal)
r, g, b = 200, 120, 40
invertido = (255 - r, 255 - g, 255 - b)   # (55, 135, 215)
```

Filtrar "olhos vermelhos" é varrer a grade verificando se `r` é alto e `g`/`b` são baixos. Não há magia: há laço, condição e comparação de números.

## O que levar

- Imagem raster = grade de pixels; vetor = instruções matemáticas.
- Resolução é quantidade de pixels, não tamanho físico.
- Cor é número: RGB de 0 a 255, ou hexadecimal.
- Compressão com perda é escolha consciente de descartar detalhe.
- Manipular imagem é operar números em uma matriz.

---

<sub>[← tema anterior](04-sistemas-computacionais.md) · [voltar à disciplina](../README.md) · [próximo tema →](06-nocoes-programacao-imagens.md)</sub>
