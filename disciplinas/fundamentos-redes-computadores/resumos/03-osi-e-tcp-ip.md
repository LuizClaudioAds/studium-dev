# Tema 03 — Modelo de referência OSI e arquitetura TCP/IP

> **Disciplina:** [Fundamentos de Redes](../README.md) · **Fonte:** slides da disciplina (arquivados em `materiais/`) · 29 páginas

## Em uma frase

OSI é o **mapa** de sete camadas que explica o que cada parte faz; TCP/IP é a **planta executada** em quatro camadas que realmente roda na internet.

## Por que dividir em camadas

Cada camada tem três elementos:

| Elemento | Papel |
| :--- | :--- |
| **Serviço** | O que a camada faz pela de cima |
| **Interface** | Como a camada de cima acessa o serviço |
| **Protocolo** | Regras de comunicação entre a mesma camada nos dois hosts |

Comunicação **vertical** (dentro de uma máquina, entre camadas) e **horizontal** (virtual, entre a mesma camada em máquinas diferentes). O cabeçalho que uma camada adiciona só é lido pela camada equivalente no destino.

Vantagem: modularidade e manutenção. Desvantagem: overhead de cabeçalhos.

## Modelo OSI — 7 camadas

| # | Camada | Função | Exemplo |
| :-: | :--- | :--- | :--- |
| 7 | Aplicação | Interface com o usuário | HTTP, SMTP, FTP |
| 6 | Apresentação | Formato: conversão, compressão, criptografia | TLS, JPEG |
| 5 | Sessão | Abre, mantém e encerra diálogos | RPC |
| 4 | Transporte | Entrega fim a fim, portas, controle de erro | TCP, UDP |
| 3 | Rede | Endereçamento lógico e roteamento | IP |
| 2 | Enlace | Comunicação entre nós adjacentes, enquadramento, erro local | Ethernet |
| 1 | Física | Bits no meio: voltagem, luz, rádio | Cabos, Wi-Fi |

**Transporte x rede** é a distinção mais cobrada:

- rede entrega **ao host**;
- transporte entrega **ao processo** (por porta).

### Enlace

- **Enquadramento**: encapsula a PDU de rede em quadros.
- **Controle de fluxo**: evita sobrecarregar o destino.
- **Controle de erro**: detecta e corrige problemas do meio físico.

### Física

Define o **modo de transmissão**:

- **simplex** — só um sentido;
- **half duplex** — os dois, mas um por vez;
- **full duplex** — os dois ao mesmo tempo.

## Arquitetura TCP/IP — 4 camadas

| # | Camada | O que absorve do OSI |
| :-: | :--- | :--- |
| 4 | Aplicação | Aplicação + apresentação + sessão |
| 3 | Transporte | Transporte |
| 2 | Rede (internet) | Rede |
| 1 | Acesso à rede | Enlace + física |

Duas consequências diretas:

1. Formatação e sessão são resolvidas **dentro da aplicação**.
2. O controle de enlace e físico fica no **acesso à rede**, dependente da tecnologia.

### Protocolos principais

| Camada | Protocolos |
| :--- | :--- |
| Aplicação | HTTP, HTTPS, DNS, SMTP, FTP |
| Transporte | **TCP** (confiável, orientado a conexão), **UDP** (sem conexão, rápido) |
| Rede | **IPv4**, **IPv6**, ICMP |
| Acesso | Ethernet, Wi-Fi, PPP |

IPv4 e IPv6 têm o mesmo objetivo — definir endereço lógico e permitir roteamento de datagramas. A diferença está no tamanho do endereço e no tratamento de fragmentação.

## Encapsulamento

```text
aplicação   → mensagem
transporte  → segmento (TCP) / datagrama (UDP)
rede        → pacote / datagrama IP
enlace      → quadro
física      → bits
```

Cada camada adiciona seu cabeçalho. No destino, o processo é inverso — e cada camada só enxerga o que é dela.

## OSI x TCP/IP

| | OSI | TCP/IP |
| :--- | :--- | :--- |
| Natureza | Modelo de referência | Arquitetura implementada |
| Camadas | 7 | 4 |
| Protocolos | Não define | Define a pilha |
| Uso | Ensino e diagnóstico | Operação real |

Dizer "camada 3 do OSI" e "camada de rede" é a mesma coisa. Dizer "camada 5" só faz sentido no OSI.

## O que levar

- Serviço, interface e protocolo são conceitos distintos.
- OSI explica; TCP/IP executa.
- Transporte = processo; rede = host.
- Encapsular é adicionar cabeçalho; desencapsular é retirar.
- TCP confiável, UDP rápido — a escolha é da aplicação.

---

<sub>[← tema anterior](02-redes-e-internet.md) · [voltar à disciplina](../README.md) · [próximo tema →](04-aplicacao-e-transporte.md)</sub>
