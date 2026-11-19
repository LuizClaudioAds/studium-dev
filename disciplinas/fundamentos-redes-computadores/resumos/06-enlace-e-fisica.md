# Tema 06 — Camadas de enlace e física

> **Disciplina:** [Fundamentos de Redes](../README.md) · **Fonte:** slides da disciplina (arquivados em `materiais/`) · 36 páginas

## Em uma frase

A camada física transforma bits em sinal; a de enlace transforma sinal em **quadros confiáveis** entre dois vizinhos — e decide quem fala quando todos querem falar.

## Camada física

Definida pelo **hardware**: voltagem, temporização, taxa, distância máxima, conectores.

### Sinal

| | Analógico | Digital |
| :--- | :--- | :--- |
| Forma | Contínua | Discreta |
| Exemplo | Voz, rádio | Bits |

Conceitos que caem em prova:

- **Período (T)**: tempo de um ciclo, em segundos.
- **Frequência (f)**: `f = 1/T`, em hertz.
- **Amplitude, frequência e fase**: as três variações possíveis de um sinal.
- **Banda passante**: faixa de frequências que o canal deixa passar sem atenuar.

### Degradações

| Problema | O que é |
| :--- | :--- |
| **Atenuação** | Perda de potência com a distância |
| **Distorção** | Formato do sinal se deforma |
| **Ruído** | Sinal indesejado; o **ruído branco/térmico** existe sempre |

### Meios guiados

| Meio | Vantagem | Desvantagem |
| :--- | :--- | :--- |
| **Par trançado** | Barato e flexível | Sofre interferência eletromagnética |
| **Coaxial** | Mais protegido, até ~500 MHz | Mais rígido |
| **Fibra óptica** | Altíssima taxa, imune a EMI, longa distância | Custo e fragilidade na instalação |

A fibra funciona por **reflexão total** (Lei de Snell).

### Meios não guiados

Rádio (RF), micro-ondas (inclusive satélite) e infravermelho/laser — os dois últimos exigem alinhamento.

## Camada de enlace

Serviços: enquadramento, controle de erro, controle de fluxo e controle de acesso ao meio.

### Enquadramento

| Técnica | Como funciona | Ponto fraco |
| :--- | :--- | :--- |
| Contagem de caracteres | Campo com o tamanho | Um erro destrói o sincronismo |
| Caractere (STX/ETX) | Marcadores de início e fim | Precisa de *byte stuffing* |
| Por bit | Flag `01111110` | Precisa de *bit stuffing* |

### Controle de erro

- **Paridade**: simples, detecta erro ímpar; falha com dois bits.
- **CRC**: robusto, baseado em divisão polinomial — é o usado de verdade.
- **Correção** (FEC) x **detecção + retransmissão** (ARQ).

### Subcamada MAC

Divide o enlace em **LLC** (lógica) e **MAC** (acesso ao meio).

**Alocação estática**:

- **FDMA** — divide a banda em frequências.
- **TDMA** — divide o tempo em fatias.

**Alocação dinâmica**:

| Protocolo | Ideia |
| :--- | :--- |
| **ALOHA** | Transmite quando quer — colide muito |
| **CSMA** | Escuta antes de transmitir |
| **CSMA/CD** | Escuta, detecta colisão e recua (Ethernet) |
| **Token passing** | Só quem tem o token transmite (anel) |

**Ethernet (IEEE 802.3)** domina as LANs; em comutação moderna, colisão praticamente desapareceu.

## O que levar

- Física = sinal; enlace = quadro.
- Ruído térmico existe em todo canal.
- Fibra não sofre interferência eletromagnética.
- Enquadramento delimita onde começa e termina o quadro.
- CSMA escuta; ALOHA não.

---

<sub>[← tema anterior](05-camada-de-rede.md) · [voltar à disciplina](../README.md) · [próximo tema →](07-administracao-e-seguranca.md)</sub>
