# Tema 07 — Gestão de continuidade do negócio

> **Disciplina:** [Segurança da Informação](../README.md) · **Fonte:** slides da disciplina (arquivados em `materiais/`) · 24 páginas

## Em uma frase

Continuidade não é evitar o desastre — é ter decidido, **antes** dele, como a empresa continua funcionando.

## Conceito

**PCN** (Plano de Continuidade de Negócios), conforme a ABNT NBR 15999: conjunto de estratégias e planos de ação para preservar os **serviços essenciais** durante e depois de uma interrupção.

Diferença que cai em prova:

| Plano | Foco |
| :--- | :--- |
| **PCN** | Negócio como um todo |
| **PRD** (recuperação de desastres) | Recuperar a infraestrutura de TI |
| **Plano de contingência** | Ação imediata durante a crise |
| **Plano de continuidade operacional** | Manter processos manuais enquanto o sistema não volta |

## Estrutura

1. **Análise de impacto no negócio (BIA)** — quais funções são críticas e por quanto tempo podem parar.
2. **Estratégias** — como manter ou restaurar cada função.
3. **Planos** — contingência, administração de crises, recuperação, continuidade operacional.
4. **Testes e simulações**.
5. **Revisão periódica**.

### BIA: as perguntas certas

- Qual processo é essencial?
- Quanto tempo pode ficar parado (**RTO**)?
- Quanto dado posso perder (**RPO**)?
- Qual o impacto financeiro, legal e de reputação por hora parada?

```text
RTO = tempo máximo aceitável para restaurar
RPO = quantidade máxima aceitável de dados perdidos
```

## Ciclo PDCA

```text
Plan  → definir escopo, BIA, estratégias e planos
Do    → executar, treinar e coletar dados
Check → testar, medir, auditar
Act   → corrigir e melhorar
```

Testar é a parte que separa plano de ficção. Um PCN nunca testado é uma pasta bonita.

## Caso real citado

No 11 de setembro de 2001, empresas com plano de recuperação testado conseguiram retomar operações em outro site; as sem plano perderam dados e clientes. O material usa esse caso para mostrar que continuidade tem impacto direto em **sobrevivência**, não só em TI.

## PGCN

**Política de Gestão de Continuidade de Negócios**: define papéis, responsabilidades e o compromisso da alta direção.

Sem patrocínio da liderança, o plano não é acionado — e acionar exige autoridade para declarar crise.

## Relação com ITIL

A ITIL trata da continuidade dos **serviços de TI**; o PCN trata do negócio. A ITIL ajuda a:

- definir níveis de serviço;
- criar planos de continuidade de TI quando não há PCN;
- melhorar continuamente o serviço.

## Normas

| Norma | Assunto |
| :--- | :--- |
| NBR 15999 | Gestão de continuidade — código de prática |
| ISO 22301 | Sistema de gestão de continuidade |
| ISO 27001 | Segurança da informação (controles de continuidade) |

## O que levar

- Continuidade é decisão prévia, não improviso.
- BIA define o que é crítico.
- RTO = quanto tempo; RPO = quanto dado.
- Plano não testado não conta.
- Quem declara a crise precisa estar definido antes.

---

<sub>[← tema anterior](06-gestao-de-risco.md) · [voltar à disciplina](../README.md)</sub>
