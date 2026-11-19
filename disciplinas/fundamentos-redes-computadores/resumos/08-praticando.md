# Tema 08 — Praticando

> **Disciplina:** [Fundamentos de Redes](../README.md) · **Fonte:** slides da disciplina (arquivados em `materiais/`) · 40 páginas
>
> Este tema não introduz conteúdo novo: é uma bateria de exercícios que amarra os módulos anteriores. O resumo abaixo é o **gabarito comentado dos conceitos** que mais aparecem nas questões.

## O que é cobrado, por módulo

### Módulo 1 — Redes, internet e camadas

- Internet = rede de redes; **hosts** nas pontas.
- Meios **não guiados** = sem fio (rádio, micro-ondas, infravermelho).
- PDU por camada: `mensagem` → `segmento` → `pacote` → `quadro` → `bits`.
- Cada camada **usa o serviço da inferior** e **oferece serviço à superior**.
- TCP/IP: aplicação, transporte, rede (internet) e acesso à rede.

### Módulo 2 — Endereçamento e rede

- Dois endereços de uma sub-rede **não podem** ser usados: o primeiro (rede) e o último (broadcast).
- **DHCP** entrega IP dinamicamente.
- **NAT** resolve escassez de IPv4 traduzindo endereços.
- **CIDR/máscara** define qual parte do endereço identifica a rede.

### Módulo 3 — Protocolos

- `HTTP`, `UDP` e `IP` pertencem, respectivamente, a aplicação, transporte e rede.
- **TCP** garante entrega; **UDP** não.
- **RIP** = vetor de distâncias; **OSPF** = estado de enlace.
- **ICMP** transporta mensagens de erro e controle.

### Módulo 4 — Enlace e transmissão

- **CSMA/CD** é o controle de acesso usado pela Ethernet.
- Colisões são previstas em protocolos **de contenção** (ALOHA, CSMA).
- Técnicas de acesso ao meio importam em enlaces **multiponto**, não ponto a ponto.
- Mais banda passante → possibilidade de taxa maior.

### Módulo 5 — Administração e segurança

- Interceptação sem alteração = ataque **passivo**.
- DoS distribuído usa máquinas intermediárias para sobrecarregar o alvo.
- Etapas da APT: reconhecimento → armamento → entrega → exploração → instalação → comando e controle → ações.
- **Ameaça** é a causa potencial; **risco** é a combinação de probabilidade e impacto.

## Padrões de resposta que ajudam na prova

| Se a questão diz... | Provavelmente é... |
| :--- | :--- |
| "entrega ao processo" | camada de **transporte** |
| "entrega ao host" | camada de **rede** |
| "entre nós adjacentes" | camada de **enlace** |
| "bits no meio" | camada **física** |
| "confiabilidade fim a fim" | **TCP** |
| "sem conexão e baixo overhead" | **UDP** |
| "traduz nome em IP" | **DNS** |
| "IP automático" | **DHCP** |
| "MAC a partir do IP" | **ARP** |

## Como usar este tema

1. Resolva as questões **antes** de consultar o resumo do módulo.
2. Errou? Volte ao resumo correspondente, não à resposta.
3. Refaça em 48 horas — é o intervalo que consolida sem decorar.

---

<sub>[← tema anterior](07-administracao-e-seguranca.md) · [voltar à disciplina](../README.md)</sub>
