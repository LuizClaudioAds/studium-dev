# Tema 04 — Camadas de aplicação e transporte

> **Disciplina:** [Fundamentos de Redes](../README.md) · **Fonte:** slides da disciplina (arquivados em `materiais/`) · 48 páginas

## Em uma frase

A aplicação é o que o usuário vê; o transporte é o que garante (ou não) que os dados cheguem ao processo certo — e a escolha entre TCP e UDP nasce do que a aplicação precisa.

## Arquiteturas de aplicação

### Cliente-servidor

- servidor sempre ligado, com endereço fixo;
- cliente inicia a comunicação;
- papel definido pela **ação**, não pelo equipamento (um servidor web pode ser cliente de um banco).

Vantagem: controle e consistência. Desvantagem: escala custa caro e há ponto único de falha.

### Peer-to-peer (P2P)

Todos os participantes têm o mesmo papel. O conteúdo é distribuído entre os pares.

Vantagem: escala barata. Desvantagem: difícil de gerenciar e de confiar.

## Protocolos de aplicação

| Protocolo | Função | Transporte |
| :--- | :--- | :--- |
| **HTTP** | Web (requisição/resposta) | TCP |
| **SMTP** | Envio de e-mail | TCP |
| **POP3 / IMAP** | Leitura de e-mail | TCP |
| **DNS** | Tradução nome → IP | **UDP** (normalmente) |
| **FTP** | Transferência de arquivo | TCP |

### HTTP

Cliente envia requisição, servidor devolve resposta com o recurso. É **sem estado**: cada requisição é independente — daí a existência de cookies e sessões.

### Correio eletrônico

Três peças: **agente do usuário** (Outlook, Thunderbird), **servidores de correio** e os protocolos. SMTP leva do cliente ao servidor e entre servidores; POP/IMAP entregam ao destinatário. Webmail é interface web — não é protocolo.

### DNS

Traduz `www.exemplo.com` em endereço IP. Estrutura hierárquica e distribuída:

```text
. (raiz) → .br → .gov → sus
```

Domínios genéricos (`.com`, `.edu`, `.org`) e de país (`.br`, `.pt`). O resolvedor consulta servidores em cascata.

## Camada de transporte

Responsabilidades:

- **entrega fim a fim** entre processos;
- **endereçamento por porta**;
- **multiplexação/demultiplexação**;
- controle de erro, fluxo e congestionamento (no TCP).

### Multiplexação e demultiplexação

Vários aplicativos usam a rede ao mesmo tempo. A camada de transporte:

1. reúne dados de portas diferentes;
2. encapsula com cabeçalho (porta origem e destino);
3. entrega ao IP.

No destino, o número da porta decide **qual processo** recebe. Sem isso, o navegador receberia mensagem de e-mail.

### Portas conhecidas

| Porta | Serviço |
| ---: | :--- |
| 20/21 | FTP |
| 22 | SSH |
| 25 | SMTP |
| 53 | DNS |
| 80 | HTTP |
| 443 | HTTPS |

Portas conhecidas: 0–1023. Registradas: 1024–49151. Dinâmicas: 49152–65535.

## TCP x UDP

| | TCP | UDP |
| :--- | :--- | :--- |
| Conexão | Orientado a conexão | Sem conexão |
| Confiabilidade | Garante entrega e ordem | Não garante |
| Controle de fluxo | Sim | Não |
| Overhead | Alto (cabeçalho 20 bytes) | Baixo (8 bytes) |
| Uso | Web, e-mail, arquivo | DNS, streaming, jogos, VoIP |

UDP é **sem estado**: cada datagrama é tratado isoladamente. Quem precisa de garantia implementa na aplicação.

### Cabeçalho TCP (o que cai em prova)

- porta origem / destino;
- número de sequência;
- **número de confirmação (ACK)** — indica quantos bytes foram recebidos;
- flags (SYN, ACK, FIN, RST, PSH, URG);
- janela, checksum, ponteiro urgente.

## O que levar

- Cliente/servidor é papel, não máquina.
- HTTP é sem estado; DNS é distribuído e hierárquico.
- Porta identifica processo; IP identifica host.
- TCP garante; UDP acelera.
- Multiplexação é o que permite vários apps na mesma conexão de rede.

---

<sub>[← tema anterior](03-osi-e-tcp-ip.md) · [voltar à disciplina](../README.md) · [próximo tema →](05-camada-de-rede.md)</sub>
