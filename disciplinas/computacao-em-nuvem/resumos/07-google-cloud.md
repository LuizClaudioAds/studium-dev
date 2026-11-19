# Tema 07 — Google Cloud Platform (GCP)

> **Disciplina:** [Computação em Nuvem](../README.md) · **Fonte:** slides da disciplina (arquivados em `materiais/`) · 28 páginas

## Em uma frase

O diferencial do Google Cloud é a **rede própria** — cabos submarinos e backbone global — e uma organização simples em torno de projeto, VPC e IAM.

## Estrutura

```text
organização → pasta → projeto → recursos
região → zona
```

Todo recurso pertence a um **projeto**, que é a unidade de cobrança, permissão e API.

Regiões disponíveis no Brasil: `southamerica-east1` (São Paulo).

## Computação

**Compute Engine** (IaaS) com famílias de máquina:

| Família | Foco |
| :--- | :--- |
| **E2** | Econômica, uso geral |
| **N2, N1** | Equilibrada |
| **Tau / T2D** | Escalonamento horizontal |
| **M2, M1** | Otimizada para memória |
| **C2, C2D** | Otimizada para computação |

### Serverless

- **Cloud Functions** — funções por evento.
- **Cloud Run** — contêiner sob demanda.
- Escala para zero — e é aí que mora o cuidado: processo sem estado e resposta rápida.

## Rede

**VPC** no Google é **global**, não regional — a sub-rede é que é regional. Isso simplifica arquitetura multi-região.

- sub-redes por região e zona;
- firewall por regras e *tags*;
- balanceamento global;
- **Private Google Access** e Cloud NAT.

## Segurança

### IAM

Quem (identidade) pode fazer o quê (papel) em qual recurso.

Boas práticas:

- menor privilégio;
- papéis predefinidos em vez de primitivos (`owner`, `editor`);
- contas de serviço com escopo mínimo;
- auditoria pelo Cloud Audit Logs.

### Responsabilidade compartilhada

O Google protege a infraestrutura física e a plataforma; o cliente protege **identidade, configuração, dados e código**.

### Defesa

- criptografia em trânsito e em repouso (padrão);
- VPC Service Controls;
- Cloud Armor (proteção contra DDoS e aplicação);
- acesso físico restrito a menos de 1% dos funcionários.

## Operações

| Ferramenta | Função |
| :--- | :--- |
| **Cloud Monitoring** | Métricas e dashboards |
| **Cloud Logging** | Centralização de logs |
| **Error Reporting** | Agrupamento de erros |
| **Cloud Trace** | Latência distribuída |
| **Cloud SQL** | Banco relacional gerenciado |

### Mensageria

- **Síncrona**: quem chama espera resposta.
- **Assíncrona**: publica e segue — Pub/Sub desacopla produtor e consumidor.

Sistemas reais misturam as duas: usuário espera a resposta da API (síncrono), mas o e-mail de confirmação vai por fila (assíncrono).

## Arquitetura de referência

```text
usuário → balanceador → VMs/Cloud Run
        → Cloud SQL (dados)
        → Pub/Sub (eventos)
        → Cloud Storage (arquivos)
```

## O que levar

- Projeto é a unidade de tudo.
- VPC global; sub-rede regional.
- Serviço gerenciado não elimina responsabilidade do cliente.
- IAM com menor privilégio e papel predefinido.
- Escala para zero exige aplicação sem estado.
- Assíncrono desacopla; síncrono simplifica.

---

<sub>[← tema anterior](06-aws.md) · [voltar à disciplina](../README.md) · [próximo tema →](08-praticando.md)</sub>
