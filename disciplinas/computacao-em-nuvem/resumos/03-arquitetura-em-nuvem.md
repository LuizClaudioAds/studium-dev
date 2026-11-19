# Tema 03 — Arquitetura de computação em nuvem

> **Disciplina:** [Computação em Nuvem](../README.md) · **Fonte:** slides da disciplina (arquivados em `materiais/`) · 28 páginas

## Em uma frase

Toda nuvem tem um **front end** que o usuário vê e um **back end** que faz acontecer — e a arquitetura é a decisão de como essas peças se distribuem.

## Estrutura

```text
usuário → front end → internet → back end → dados
```

| Parte | O que é |
| :--- | :--- |
| **Front end** | Interface do cliente: navegador, app, API |
| **Back end** | A nuvem em si: servidores, armazenamento, rede, gestão |
| **Meio** | A internet |

### Componentes do back end

- **hardware** (servidores, CPU, memória);
- **armazenamento** (blocos, arquivos, objetos);
- **rede** (switches, balanceadores, links);
- **virtualização** (hypervisor, contêineres);
- **gerenciamento** (provisionamento, monitoramento);
- **segurança** (identidade, firewall, criptografia).

## Camada de servidores

Administrar essa camada significa:

- provisionar e atualizar máquinas;
- gerenciar usuários e permissões;
- monitorar desempenho e capacidade;
- aplicar patches e políticas.

### Armazenamento em rede

| Protocolo | Origem | Uso |
| :--- | :--- | :--- |
| **NFS** | Unix | Compartilhamento de arquivos em rede |
| **CIFS/SMB** | Windows | Compartilhamento em ambiente Microsoft |

Ambos resolvem o mesmo problema com origens diferentes — daí a incompatibilidade histórica entre mundos.

## Arquitetura de solução (IaaS)

### Elasticidade

Crescer e diminuir automaticamente conforme a demanda. É a promessa central do modelo.

### Balanceamento de carga

Distribui tráfego entre instâncias:

- evita sobrecarga em um servidor;
- aumenta disponibilidade;
- permite manutenção sem queda.

### Multi-cloud e nuvem híbrida

| Estratégia | Objetivo |
| :--- | :--- |
| **Multi-cloud** | Usar mais de um provedor (evita lock-in, melhora resiliência) |
| **Híbrida** | Combinar nuvem pública com infraestrutura local |

### Edge computing

Processar perto do usuário quando a latência importa (IoT, veículos, jogos). Depende de largura de banda, capacidade local e custo.

## Migração para a nuvem

As estratégias clássicas:

| Estratégia | O que faz |
| :--- | :--- |
| **Rehost** | Move a máquina como está (lift and shift) |
| **Replatform** | Ajusta para usar serviço gerenciado |
| **Refactor** | Reescreve para arquitetura nativa de nuvem |
| **Repurchase** | Troca por SaaS |
| **Retire** | Desliga o que não é mais necessário |

Sistemas legados costumam exigir **replatform** com máquinas virtuais, porque reescrever tudo de uma vez é inviável.

## Segurança na arquitetura

- identidade e acesso (IAM);
- segmentação de rede (VPC, sub-redes);
- criptografia em trânsito e em repouso;
- logs e auditoria;
- **responsabilidade compartilhada**: o provedor protege a infraestrutura; você protege configuração, acesso e dados.

A maior parte dos incidentes em nuvem é **configuração errada** do cliente, não falha do provedor.

## O que levar

- Front end + internet + back end.
- Contêiner ≠ VM: um compartilha kernel.
- Balanceamento é disponibilidade, não só performance.
- Híbrida ≠ multi-cloud.
- Migração é decisão por sistema, não por empresa.
- Configuração é a nova superfície de ataque.

---

<sub>[← tema anterior](02-fundamentos.md) · [voltar à disciplina](../README.md) · [próximo tema →](04-seguranca-em-nuvem.md)</sub>
