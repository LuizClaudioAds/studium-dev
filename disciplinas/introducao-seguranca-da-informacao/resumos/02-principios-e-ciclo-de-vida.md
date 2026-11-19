# Tema 02 — Princípios da segurança e o ciclo de vida da informação

> **Disciplina:** [Segurança da Informação](../README.md) · **Fonte:** slides da disciplina (arquivados em `materiais/`) · 29 páginas

## Em uma frase

Informação tem **valor**, passa por um **ciclo de vida** e precisa de proteção em **camadas** — porque nenhuma barreira sozinha segura nada.

## Dado x informação

- **Dado**: valor bruto, sem contexto.
- **Informação**: dado contextualizado, que permite decidir.

Uma empresa vale mais pelo que sabe do que pelo que tem. O material usa o exemplo de uma empresa cujas ações dobraram: os dados existiam antes, mas só viraram informação quando alguém os interpretou.

## Ciclo de vida da informação

```text
criação → transporte → manuseio → descarte
```

Cada etapa tem riscos próprios:

| Etapa | Risco típico |
| :--- | :--- |
| Criação | Origem não confiável, dado sem classificação |
| Transporte | Interceptação em rede ou mídia perdida |
| Manuseio | Acesso indevido, cópia sem controle |
| Descarte | Dado recuperável de HD, pen drive ou papel |

Um notebook roubado com dados **não criptografados** é falha de todas as etapas ao mesmo tempo.

## Os pilares

| Pilar | Definição |
| :--- | :--- |
| **Confidencialidade** | Só quem tem autorização acessa |
| **Integridade** | Só quem tem autorização altera — e a alteração é detectável |
| **Disponibilidade** | A informação está acessível quando necessária |

Complementares:

- **Autenticidade** — garante que veio de quem diz ter vindo.
- **Legalidade** — alinhamento com leis e normas.
- **Não repúdio** — quem fez não pode negar depois.

### Integridade na prática

Funções de **hash** geram um resumo da informação. Alterar um único bit muda o hash inteiro — é assim que se detecta adulteração.

## Segurança em camadas

O material usa a metáfora da **cebola**: perímetros concêntricos.

1. Perímetro externo (muro, portaria)
2. Catraca, elevador, crachá, biometria
3. Sala segura (data center)
4. Acesso lógico (login, MFA)
5. Dado (criptografia)

Invasor que passa da primeira ainda encontra as seguintes.

### Física x lógica

**Física**: controle de entrada, CFTV, alarme, nobreak, gerador, controle de temperatura, combate a incêndio.

**Lógica**: autenticação, autorização, criptografia, firewall, antivírus, backups.

Energia é segurança: nobreak cobre a queda curta, gerador cobre a longa — e gerador precisa de combustível.

### Controle de acesso

- algo que você **sabe** (senha);
- algo que você **tem** (token, crachá);
- algo que você **é** (biometria).

Dois fatores independentes = MFA. Senha + código por SMS já é melhor que senha sozinha, mas SMS é vulnerável a SIM swap.

### Firewall

Política recomendada: **negar por padrão**. Tudo é bloqueado; só passa o que tem regra explícita de liberação.

## O que levar

- Informação é ativo; trate como patrimônio.
- O ciclo termina no descarte — e é aí que muita gente esquece.
- CIA são três, não uma.
- Hash detecta alteração; não esconde conteúdo.
- Segurança é camadas; uma barreira falha, as outras seguram.

---

<sub>[← voltar à disciplina](../README.md) · [próximo tema →](03-ameacas-e-vulnerabilidades.md)</sub>
