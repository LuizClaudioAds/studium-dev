# Tema 06 — Amazon Web Services (AWS)

> **Disciplina:** [Computação em Nuvem](../README.md) · **Fonte:** slides da disciplina (arquivados em `materiais/`) · 45 páginas

## Em uma frase

AWS é um catálogo de blocos: **EC2** para computar, **S3** para guardar, **VPC** para isolar — e você monta o que precisar.

## Computação

### EC2 (IaaS)

Uma instância é uma VM com escolha de:

| Item | O que define |
| :--- | :--- |
| **AMI** | Imagem do sistema (SO + software) |
| **Tipo de instância** | vCPU, memória, rede, GPU |
| **Key pair** | Chave pública na instância; privada com você |
| **Security Group** | Firewall virtual da instância |
| **VPC/sub-rede** | Onde ela vive |
| **IP público** | Opcional |

**Famílias de instância**:

| Prefixo | Uso |
| :--- | :--- |
| `t`, `m` | Uso geral |
| `c` | Otimizada para computação |
| `r`, `x` | Otimizada para memória |
| `p`, `g` | GPU |

**AMI** é reutilizável: você cria uma, configura o "DNA" (PHP, WordPress) e replica quantas vezes quiser.

**Security Group** é *stateful* e age como firewall: por padrão libera SSH (22) e nega o resto.

Proteções úteis: *termination protection* e métricas detalhadas do CloudWatch (1 min em vez de 5).

### Lambda (serverless)

Para funções curtas (**até 15 minutos**), sem gerenciar servidor e sem armazenamento local. Ideal quando o time é de desenvolvimento e não quer administrar infraestrutura.

## Armazenamento

| Serviço | Tipo | Característica |
| :--- | :--- | :--- |
| **EBS** | Bloco | Disco da EC2, preso a uma AZ |
| **S3** | Objeto | Bucket, chave, versionamento |
| **EFS** | Arquivo | NFS elástico, compartilhado |

### EBS

- Persiste independente do ciclo da instância (dentro da AZ).
- **Snapshot** é incremental: só grava o que mudou.
- SSD (gp3, io2) para performance; HDD (st1, sc1) para throughput.

### S3

- Bucket global por nome, mas residente em uma **região**.
- **Versionamento** guarda versões por ID único.
- Classes: Standard, Infrequent Access, Glacier (arquivamento).
- Pode hospedar **site estático** (com política de leitura pública).

Erro clássico: bucket público sem intenção — vazamento de dados.

## Rede

**VPC** é a rede privada virtual.

```text
VPC 10.0.0.0/22 → 1.024 IPs → 4 sub-redes /24 (256 cada)
```

Reservas em cada sub-rede: `.1` gateway, `.2` DNS, `.3` uso futuro, `.255` broadcast.

Componentes:

| Componente | Função |
| :--- | :--- |
| **Sub-rede pública** | Rota para o Internet Gateway |
| **Sub-rede privada** | Sem rota direta para a internet |
| **Internet Gateway** | Porta de saída/entrada da VPC |
| **NAT Gateway** | Saída para internet a partir da privada |
| **Route Table** | Regras de para onde vai o tráfego |
| **Elastic IP** | IP público fixo |

Alta disponibilidade: pelo menos **duas AZs**.

## Aplicações práticas

**Site estático**: S3 + static website hosting + bucket policy → URL pública.

**Site dinâmico**: EC2 + AMI (ex.: Bitnami WordPress) + Security Group + IP público. Login do admin sai no **log de boot** da instância.

## O que levar

- AMI é o molde; instância é a cópia.
- Security Group é firewall stateful.
- EBS é bloco e fica na AZ; S3 é objeto e é regional.
- Snapshot é incremental.
- Sub-rede privada precisa de NAT para sair.
- Lambda tem limite de 15 minutos.

---

<sub>[← tema anterior](05-azure.md) · [voltar à disciplina](../README.md) · [próximo tema →](07-google-cloud.md)</sub>
