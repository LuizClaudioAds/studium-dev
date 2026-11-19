# Tema 05 — Microsoft Azure

> **Disciplina:** [Computação em Nuvem](../README.md) · **Fonte:** slides da disciplina (arquivados em `materiais/`) · 41 páginas

## Em uma frase

Azure é a nuvem da Microsoft organizada em **regiões**, **grupos de recursos** e **assinaturas** — e quase tudo que você faz passa por essas três caixas.

## Estrutura

```text
conta → assinatura → grupo de recursos → recursos
```

- **Região**: localização geográfica dos data centers.
- **Zona de disponibilidade**: data centers independentes dentro da região.
- **Par de regiões**: regiões distantes o suficiente para sobreviver a desastre regional.

## Modelos de serviço

| Modelo | Você cuida de |
| :--- | :--- |
| **IaaS** | SO, middleware, runtime, app, dados |
| **PaaS** | App, dados, configuração |
| **SaaS** | Acesso e dados |

## Serviços principais

### Computação

- **Máquinas Virtuais** — IaaS completo, você gerencia o SO.
- **Contêineres / AKS** — empacotamento leve e orquestração.
- **App Service** — PaaS para web e API.
- **Functions** — serverless, cobra por execução.

### Rede

- **VNet** — rede virtual isolada;
- **VPN site a site / ponto a site** — conecta o local à nuvem;
- **Load Balancer / Application Gateway** — distribuição de tráfego;
- **Azure DNS**.

### Armazenamento

| Serviço | Uso |
| :--- | :--- |
| **Blob** | Não estruturado: imagens, vídeos, backup |
| **Files** | Compartilhamento SMB gerenciado |
| **Queue** | Mensageria |
| **Table** | NoSQL chave-valor |
| **Disk** | Disco de VM |

### Redundância

| Sigla | Estratégia |
| :--- | :--- |
| **LRS** | 3 cópias na mesma região |
| **ZRS** | Cópias em zonas diferentes da região |
| **GRS** | Réplica em região secundária |
| **RA-GRS** | GRS com leitura na secundária |

Quanto mais geográfica a redundância, maior a durabilidade — e o custo.

## Identidade

**Microsoft Entra ID** (antigo Azure AD): autenticação, MFA, redefinição de senha, SSO, controle de acesso baseado em função (RBAC).

A conta de **assinatura** é o limite de cobrança e de governança.

## Governança e custo

| Ferramenta | Para quê |
| :--- | :--- |
| **Azure Cost Management** | Ver e prever gasto |
| **Calculadora de TCO** | Comparar custo local × nuvem |
| **Tags** | Metadados para organizar e ratear custo |
| **Resource Locks** | Impedir exclusão/alteração acidental |
| **Azure Policy** | Aplicar regras em escala |
| **Advisor** | Recomendações de custo e segurança |
| **Monitor** | Métricas, logs e alertas |
| **Service Health** | Status dos serviços e impacto no seu app |

Detalhe que cai em prova: **um recurso pertence a um único grupo de recursos**, mas pode ser **movido** entre grupos.

## Segurança em camadas

```text
identidade → perímetro → rede → computação
→ aplicação → dados
```

Modelo de **defesa em profundidade**: cada camada protege a seguinte.

## Migração

**Azure Migrate** avalia servidores, bancos e apps web locais, estima custo e apoia a migração. Estratégias: rehost, replatform, refactor, repurchase, retire.

## Prática

Ao usar conta gratuita/créditos: **desligar ou excluir os recursos ao final**. Esquecer uma VM ligada é a forma mais comum de perder os créditos.

## O que levar

- Região, grupo de recursos e assinatura são a base organizacional.
- Blob é objeto; Disk é bloco; Files é SMB.
- LRS < ZRS < GRS em resiliência.
- Entra ID autentica; RBAC autoriza.
- Tags organizam; locks protegem; Policy escala.
- Sempre limpar o laboratório.

---

<sub>[← tema anterior](04-seguranca-em-nuvem.md) · [voltar à disciplina](../README.md) · [próximo tema →](06-aws.md)</sub>
