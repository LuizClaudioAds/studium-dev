# Tema 04 — Normas de segurança da informação

> **Disciplina:** [Segurança da Informação](../README.md) · **Fonte:** slides da disciplina (arquivados em `materiais/`) · 34 páginas

## Em uma frase

A **27001** diz *como* gerir a segurança (o sistema); a **27002** diz *o que* fazer (os controles).

## SGSI

Sistema de Gestão da Segurança da Informação: conjunto de políticas, processos e controles que preserva a tríade **CID** (confidencialidade, integridade, disponibilidade) com base em gestão de riscos.

Benefícios: confiança das partes interessadas, redução de responsabilidade, identificação de fraquezas, revisão independente.

## ISO/IEC 27001

Norma **certificável**, com requisitos auditáveis. Estrutura em 10 cláusulas:

```text
1 Escopo            6 Planejamento
2 Referência        7 Suporte
3 Termos            8 Operação
4 Contexto          9 Avaliação de desempenho
5 Liderança        10 Melhoria
```

O ciclo é **PDCA**:

```text
Plan (planejar) → Do (fazer) → Check (verificar) → Act (corrigir)
```

Ponto que cai em prova: a 27001 **não lista controles detalhados** no corpo — ela remete ao **Anexo A**, alinhado com a 27002.

## ISO/IEC 27002

Código de prática: **catálogo de controles**, não certificável isoladamente.

Na versão 2022:

- **93 controles**, organizados em 4 temas (organizacional, pessoas, físico, tecnológico);
- novos controles: **inteligência de ameaças**, **segurança para serviços em nuvem**, **continuidade de negócios**, **monitoramento**;
- atributos: tipo (preventivo, detectivo, corretivo) e propriedades (confidencialidade, integridade, disponibilidade).

## Aplicação prática

O caminho é sempre o mesmo:

1. identificar ativos e requisitos do negócio;
2. avaliar risco (probabilidade × impacto);
3. escolher controles da 27002;
4. implementar e medir;
5. auditar e melhorar.

### Exemplo de matriz

| Risco | Controle | Prazo |
| :--- | :--- | :--- |
| Acesso indevido | Gestão de identidades + segregação de funções | 30 dias |
| Compartilhamento de credenciais | Política de senhas + MFA | 90 dias |
| Roubo de equipamento | Criptografia de disco + controle físico | 60 dias |

## Auditoria

Verifica se o SGSI funciona — não se "tem documento".

Princípios:

- **independência** e imparcialidade;
- **abordagem baseada em evidências**;
- escopo e critérios definidos antes.

Etapas: planejamento → reunião de abertura → coleta de evidências → análise → relatório → acompanhamento.

Técnicas: entrevista, inspeção documental, observação, ferramentas automatizadas (scanners) e **teste de invasão** (pentest).

## Normas vizinhas

| Norma | Assunto |
| :--- | :--- |
| 27001 | Requisitos do SGSI |
| 27002 | Controles |
| 27005 | Gestão de risco |
| 27701 | Privacidade / LGPD |
| 22301 | Continuidade de negócios |

## O que levar

- 27001 = sistema; 27002 = controles.
- PDCA é o motor do SGSI.
- Auditoria exige independência e evidência.
- Certificação é da 27001, não da 27002.
- LGPD e GDPR entram como requisito legal, não como "boa prática".

---

<sub>[← tema anterior](03-ameacas-e-vulnerabilidades.md) · [voltar à disciplina](../README.md) · [próximo tema →](05-boas-praticas.md)</sub>
