# Tema 06 — Gestão de risco

> **Disciplina:** [Segurança da Informação](../README.md) · **Fonte:** slides da disciplina (arquivados em `materiais/`) · 25 páginas

## Em uma frase

Gerir risco não é eliminar ameaça — é **decidir, com critério, o que vale a pena proteger e quanto custa**.

## Vocabulário (ISO/IEC 27000)

| Termo | Definição |
| :--- | :--- |
| **Ativo** | Algo com valor para a organização |
| **Ameaça** | Causa potencial de incidente |
| **Vulnerabilidade** | Fraqueza explorável |
| **Controle** | Medida que modifica o risco |
| **Incidente** | Evento que compromete a segurança |
| **Risco** | Combinação de consequência e probabilidade |
| **Impacto** | Mudança indesejada nos objetivos de negócio |

Tipos de ativo: informação (bases, contratos), software, físico (servidores), pessoas, serviços, imagem.

## O processo (ISO/IEC 27005)

```text
1. Definir contexto
2. Identificar riscos
3. Analisar (probabilidade × impacto)
4. Avaliar (comparar com o apetite)
5. Tratar
6. Aceitar o risco residual
7. Comunicar e monitorar (contínuo)
```

### 1. Contexto

Entender negócio, missão, processos, parceiros e instalações. Sem contexto, "risco alto" é opinião.

### 2–3. Identificação e análise

Risco **bruto** = antes de qualquer controle.

```text
probabilidade: muito alta · alta · média · baixa
impacto:       crítico · alto · médio · baixo
```

Qualitativo basta na maioria dos casos; quantitativo (valor monetário) quando há dados.

### 4. Avaliação

Compara o risco com o **apetite a risco** definido pela organização. Acima do apetite → tratar. Abaixo → aceitar.

### 5. Tratamento

| Estratégia | O que faz |
| :--- | :--- |
| **Mitigar** | Aplicar controle para reduzir probabilidade/impacto |
| **Transferir** | Seguro, terceirização |
| **Evitar** | Deixar de fazer a atividade |
| **Aceitar** | Assumir conscientemente o risco residual |

### Tipos de controle

- **Preventivo** — impede o incidente.
- **Detectivo** — identifica quando ocorre.
- **Corretivo** — corrige a falha.
- **Recuperador** — repara o dano.
- **Reativo** — responde ao incidente.
- **Limitador** — reduz a propagação.

## Risco residual

Nenhum controle elimina tudo. O que sobra é o **risco residual** — e ele precisa ser formalmente aceito por quem tem autoridade.

## GRC

| Sigla | Foco |
| :--- | :--- |
| **G**overnança | Direção e controle da gestão |
| **R**isco | Efeito da incerteza nos objetivos |
| **C**ompliance | Aderência a leis e políticas |

A gestão de risco vive dentro do GRC; não é atividade isolada de TI.

## Erros comuns

- Tratar todo risco igual (não existe orçamento infinito).
- Confundir ameaça com vulnerabilidade.
- Fazer análise uma vez e nunca revisar.
- Documentar o risco e não comunicar a decisão.

## O que levar

- Risco = probabilidade × impacto.
- Tratar é escolher entre quatro estratégias.
- Controle tem tipo e custo.
- Risco residual existe e precisa de aceite formal.
- GR é permanente, não projeto com data de fim.

---

<sub>[← tema anterior](05-boas-praticas.md) · [voltar à disciplina](../README.md) · [próximo tema →](07-continuidade-de-negocios.md)</sub>
