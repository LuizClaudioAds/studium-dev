# Tema 02 — Redes de computadores e a internet

> **Disciplina:** [Fundamentos de Redes](../README.md) · **Fonte:** slides da disciplina (arquivados em `materiais/`) · 39 páginas

## Em uma frase

A internet é uma **rede de redes**: sistemas finais nas pontas, redes de acesso no meio e um núcleo que só faz uma coisa — encaminhar pacotes.

## A anatomia da internet

| Parte | O que é |
| :--- | :--- |
| **Sistemas finais (hosts)** | Dispositivos nas pontas: notebook, celular, servidor. É onde as aplicações rodam |
| **Redes de acesso** | Ligam o host ao primeiro roteador (ISP) |
| **Núcleo da rede** | Malha de roteadores e switches que interliga tudo |
| **ISPs** | Provedores hierárquicos: acesso → regional → trânsito global |

Três formas de descrever a mesma coisa:

1. **Infraestrutura** de enlaces e comutadores.
2. **Serviço** que oferece conectividade a aplicações.
3. **Rede de redes** interconectadas por ISPs.

## Meios de transmissão

**Guiados** (com fio):

- par trançado de cobre (Ethernet, telefonia);
- cabo coaxial;
- fibra óptica (sinais luminosos, maior alcance e velocidade).

**Não guiados** (sem fio): rádio, micro-ondas, satélite, infravermelho.

## Acesso

| Tecnologia | Como funciona |
| :--- | :--- |
| **DSL** | Usa a linha telefônica existente com modem DSL |
| **Cabo** | Compartilha a infraestrutura da TV a cabo |
| **Fibra (FTTH)** | Fibra até a residência |
| **Rádio/5G** | Sem fio até a operadora |

## Desempenho: os quatro atrasos

```text
atraso total = processamento + fila + transmissão + propagação
```

| Atraso | O que é |
| :--- | :--- |
| **Processamento** | Examinar o cabeçalho e decidir a saída |
| **Fila** | Esperar na fila do enlace (cresce com congestionamento) |
| **Transmissão** | Empurrar os bits para o meio |
| **Propagação** | Tempo físico do sinal percorrer a distância |

Atraso de transmissão depende do **tamanho do pacote e da taxa do enlace**; propagação depende da **distância e da velocidade no meio**. São coisas diferentes — é erro clássico confundir.

### Perda e vazão

- **Perda**: buffer cheio → pacote descartado.
- **Vazão (throughput)**: taxa efetiva de bits por segundo.

Aplicações diferentes têm exigências diferentes: VoIP precisa de atraso baixo; transferência de arquivo tolera atraso, mas quer vazão.

**Traceroute** (`tracert` no Windows) mostra o caminho e o atraso por salto — a ferramenta prática para enxergar tudo isso.

## Camadas

Redes são organizadas em camadas desde o fim dos anos 1970 (ISO). Cada camada oferece serviço à de cima e usa o serviço da de baixo. Vantagem: modularidade — dá para trocar uma camada sem refazer as outras.

## Linha do tempo

| Ano | Marco |
| :--- | :--- |
| 1960s | ARPANET, comutação de pacotes |
| 1983 | TCP/IP adotado; DNS criado |
| 1991 | WWW, Tim Berners-Lee |
| 1994 | Netscape, Yahoo! |
| 2000 | Bolha das pontocom, ataques DoS |
| 2010s | Redes sociais, mobilidade |
| 2019+ | 5G |

## O que levar

- Host → acesso → núcleo → acesso → host.
- ISP é hierárquico, não uma nuvem mágica.
- Quatro atrasos, não um.
- Atraso ≠ vazão ≠ perda.
- Camadas existem para permitir evolução sem quebrar o resto.

---

<sub>[← voltar à disciplina](../README.md) · [próximo tema →](03-osi-e-tcp-ip.md)</sub>
