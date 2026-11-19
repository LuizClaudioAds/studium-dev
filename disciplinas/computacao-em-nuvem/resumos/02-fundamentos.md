# Tema 02 — Fundamentos de computação em nuvem

> **Disciplina:** [Computação em Nuvem](../README.md) · **Fonte:** slides da disciplina (arquivados em `materiais/`) · 39 páginas

## Em uma frase

Nuvem é **utility computing**: em vez de comprar servidor, você aluga capacidade e paga pelo que usa — como luz e água.

## Como chegamos aqui

```text
1960 mainframe → 1980 PC → 1990 cliente/servidor
→ 2000 hospedagem → 2010 nuvem
```

A peça que tornou tudo possível foi a **virtualização**: o *hypervisor* divide um servidor físico em várias máquinas lógicas.

| Tipo | Como funciona |
| :--- | :--- |
| **Virtualização total** | Hypervisor emula todo o hardware |
| **Paravirtualização** | SO convidado sabe que é virtual, cooperando |
| **Contêiner** | Compartilha o kernel do host; mais leve que VM |

## Cinco características (NIST)

1. **Autoatendimento sob demanda** — provisiona sem falar com humano.
2. **Amplo acesso à rede** — de qualquer dispositivo.
3. **Pool de recursos** — capacidade compartilhada entre clientes.
4. **Elasticidade rápida** — cresce e encolhe conforme demanda.
5. **Serviço mensurável** — paga pelo uso, com métrica.

## Modelos de serviço

| Modelo | Você gerencia | Exemplo |
| :--- | :--- | :--- |
| **IaaS** | SO, runtime, app, dados | VM, disco, rede |
| **PaaS** | App e dados | Banco gerenciado, plataforma de deploy |
| **SaaS** | Nada | Gmail, Office 365 |

A analogia do material é boa: IaaS é alugar o terreno e construir; PaaS é alugar a casa com encanamento; SaaS é se hospedar no hotel.

## Modelos de implantação

| Modelo | Característica | Ponto de atenção |
| :--- | :--- | :--- |
| **Pública** | Recursos do provedor, compartilhados | Dependência do provedor |
| **Privada** | Exclusiva da organização | Custo inicial e equipe própria |
| **Híbrida** | Combina as duas | Complexidade de integração |
| **Comunidade** | Compartilhada por organizações afins | Governança comum |

**On-premise** não é nuvem: servidor físico na empresa, acesso restrito à rede interna.

## Vantagens

- **Economia**: sem CAPEX de hardware, energia, espaço e manutenção.
- **Segurança física**: o provedor cuida do data center.
- **Elasticidade**: capacidade quando precisa.
- **Velocidade**: recurso em minutos, não em semanas.
- **Alcance global**: regiões no mundo inteiro.

## Desvantagens

- dependência do provedor (**vendor lock-in**);
- custo imprevisível se mal dimensionado;
- latência e limites de rede;
- questões de soberania e compliance;
- segurança deixa de ser 100% sua — mas a **responsabilidade** continua compartilhada.

## Outros modelos

- **Serverless**: você escreve a função, o provedor escala e cobra por execução.
- **Grid computing**: agrega ciclos ociosos de várias máquinas.
- **Edge computing**: processa perto do usuário para reduzir latência.

## O que levar

- Nuvem = virtualização + automação + cobrança por uso.
- IaaS/PaaS/SaaS mudam **quanto** você gerencia.
- On-premise não é nuvem.
- Elasticidade não é o mesmo que escalabilidade.
- Segurança é compartilhada, não terceirizada.

---

<sub>[← voltar à disciplina](../README.md) · [próximo tema →](03-arquitetura-em-nuvem.md)</sub>
