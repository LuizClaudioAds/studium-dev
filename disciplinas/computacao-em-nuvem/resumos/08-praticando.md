# Tema 08 — Praticando

> **Disciplina:** [Computação em Nuvem](../README.md) · **Fonte:** slides da disciplina (arquivados em `materiais/`) · 41 páginas
>
> Bateria de exercícios sobre os módulos anteriores. Este resumo reúne os conceitos que a prova cobra e os padrões de resposta.

## Fundamentos

- Nuvem reduz **capacidade ociosa** e troca **CapEx por OpEx**.
- **Elasticidade** = crescer e diminuir automaticamente conforme a demanda.
- **On-demand self-service** = provisionar sem interação humana.
- **Multi-tenancy** = recursos compartilhados com isolamento.
- **Edge computing** processa perto do usuário; **não** é processamento centralizado.

### CapEx x OpEx

| | CapEx | OpEx |
| :--- | :--- | :--- |
| O que é | Investimento em ativo | Despesa operacional |
| Exemplo | Comprar servidor | Pagar por hora de VM |
| Nuvem | Reduz | Aumenta |

## Virtualização e contêineres

| | VM | Contêiner |
| :--- | :--- | :--- |
| Isolamento | Forte (hipervisor) | Compartilha kernel |
| Peso | Pesada | Leve |
| Boot | Lento | Rápido |
| SO | Completo por VM | Um por host |

Container não é linguagem nem "Docker dentro de um sistema": é isolamento de processo com suas dependências.

## Arquitetura

Camadas de uma solução em nuvem:

```text
computação · armazenamento · rede · gerenciamento
```

Faltando rede, a arquitetura não fecha.

### Migração

| Estratégia | O que faz |
| :--- | :--- |
| **Rehost** | Move como está, sem alterar configuração |
| **Replatform** | Emula/ajusta a aplicação (ex.: VM para legado) |
| **Refactor** | Reescreve para nuvem |
| **Retire** | Desliga o que não usa |

`Retire` não move nada — é justamente descartar.

## Responsabilidade compartilhada

O cliente é **sempre** responsável por:

- dados;
- identidade e acessos;
- configuração dos serviços.

O provedor cuida da infraestrutura física e da plataforma.

## Armazenamento

| Tipo | Uso |
| :--- | :--- |
| **Bloco** (EBS) | Disco de VM, banco de dados |
| **Arquivo** (EFS) | Compartilhamento NFS |
| **Objeto** (S3) | Não estruturado: imagem, vídeo, backup |

Para banco com I/O intenso: **volumes provisionados** (io1/io2), não objetos.

## Provedores — detalhes que aparecem

| Serviço | Detalhe |
| :--- | :--- |
| **AWS Lambda** | Máximo de **15 minutos** por execução |
| **AWS S3** | Site estático; bucket público é risco |
| **Security Group** | Firewall da instância |
| **Azure** | Um recurso pertence a **um** grupo de recursos |
| **GCP Cloud Armor** | Proteção contra DDoS e ataques de aplicação |
| **GCP IAM** | Menor privilégio; papéis predefinidos |

## Mensageria

- **Síncrona**: o emissor espera a resposta.
- **Assíncrona**: publica e segue; desacopla os sistemas.

"Tardia" não é conceito formal — é distrator.

## Padrões de resposta

| Enunciado | Resposta |
| :--- | :--- |
| "sem gerenciar servidor, tarefa curta" | serverless / Lambda |
| "cresce e diminui sozinho" | elasticidade |
| "provisiona sem abrir chamado" | on-demand self-service |
| "dados não estruturados" | armazenamento de objetos |
| "cliente sempre responsável" | dados e identidade |
| "move sem alterar" | rehost |
| "processa perto do usuário" | edge computing |

## Como usar

1. Resolva antes de olhar o resumo.
2. Errou → releia o tema correspondente, não a resposta.
3. Refaça em 48 h.

---

<sub>[← tema anterior](07-google-cloud.md) · [voltar à disciplina](../README.md)</sub>
