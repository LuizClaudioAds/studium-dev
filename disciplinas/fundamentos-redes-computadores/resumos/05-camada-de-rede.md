# Tema 05 — Camada de rede

> **Disciplina:** [Fundamentos de Redes](../README.md) · **Fonte:** slides da disciplina (arquivados em `materiais/`) · 40 páginas

## Em uma frase

A camada de rede responde uma pergunta só: **por qual caminho este pacote vai até o destino?** — e o IP faz isso sem prometer nada.

## O que a camada faz

- endereçamento **lógico** (IP);
- **roteamento** (escolher caminho);
- **repasse** (*forwarding*, encaminhar pela interface certa);
- fragmentação quando o pacote excede o tamanho do enlace.

### Datagrama x circuito virtual

| | Datagrama (IP) | Circuito virtual |
| :--- | :--- | :--- |
| Estado na rede | Nenhum | Mantido por conexão |
| Caminho | Pode variar por pacote | Fixo durante a conexão |
| Ordem | Não garantida | Garantida |
| Falha | Recalcula rota | Precisa restabelecer |

A internet escolheu **datagramas**: simples, resiliente, sem estado nos roteadores.

Problemas que vêm junto: perda, erro, pacotes fora de ordem e duplicados.

## IPv4

32 bits, escritos em quatro octetos: `192.168.0.1`.

Cada endereço tem parte de **rede** e parte de **host**, definidas pela máscara.

### Classes (histórico)

| Classe | Faixa | Máscara padrão |
| :--- | :--- | :--- |
| A | 1–126 | /8 |
| B | 128–191 | /16 |
| C | 192–223 | /24 |
| D | 224–239 | multicast |
| E | 240–255 | experimental |

### Endereços especiais

- **rede**: todos os bits de host em 0;
- **broadcast**: todos os bits de host em 1;
- roteadores **não repassam broadcast**.

### Endereços privados (RFC 1918)

```text
10.0.0.0/8
172.16.0.0/12
192.168.0.0/16
```

Não saem para a internet; exigem NAT.

### Sub-redes e CIDR

Dividir uma rede em sub-redes:

- isola tráfego;
- limita acesso;
- associa sub-rede a um departamento.

Com CIDR, o prefixo indica quantos bits são de rede:

```text
192.168.1.0/24  → 255.255.255.0  → 254 hosts
192.168.1.0/26  → 255.255.255.192 → 62 hosts
```

## Protocolos auxiliares

| Protocolo | Função |
| :--- | :--- |
| **ARP** | Descobre o MAC a partir do IP, na mesma rede local |
| **DHCP** | Empresta endereço IP, máscara, gateway e DNS |
| **ICMP** | Mensagens de erro e controle (`ping`, `traceroute`) |
| **NAT** | Traduz IP privado em público |

**ARP** só funciona dentro do segmento — para outra rede, o host envia ao **gateway** (default gateway).

**DHCP** tem concessão por tempo: o cliente renova antes de expirar.

## Roteamento

Cada roteador mantém uma **tabela de repasse**: destino → interface de saída.

### Tipos de algoritmo

| | Vetor de distância | Estado de enlace |
| :--- | :--- | :--- |
| Informação | Vizinhos contam distâncias | Cada nó conhece a topologia inteira |
| Base | Bellman-Ford | Dijkstra |
| Convergência | Lenta (count-to-infinity) | Mais rápida |
| Exemplo | RIP | OSPF |

Ainda:

- **estático** x **adaptativo**;
- **global** x **descentralizado**;
- **interno** (IGP) x **externo** (EGP, como BGP).

### Roteamento hierárquico

Tabelas completas crescem demais. A solução é agrupar: dentro da região, detalhe; fora, uma rota padrão para o "mundo". É assim que a internet escala.

## O que levar

- IP não garante entrega, ordem nem ausência de duplicata.
- Máscara separa rede de host.
- `/24` ≠ "classe C" — CIDR generalizou.
- ARP resolve dentro da LAN; o gateway resolve o resto.
- Roteador escolhe pela tabela, não por adivinhação.

---

<sub>[← tema anterior](04-aplicacao-e-transporte.md) · [voltar à disciplina](../README.md) · [próximo tema →](06-enlace-e-fisica.md)</sub>
