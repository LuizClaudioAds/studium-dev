# Tema 07 — A revolução da Inteligência Artificial

> **Disciplina:** [Pensamento Computacional](../README.md) · **Fonte:** slides da disciplina (arquivados em `materiais/`) · 40 páginas

## Em uma frase

IA reconhece padrões em dados; IA generativa cria a partir deles. Nenhuma das duas sabe o que está dizendo — e é por isso que a revisão humana continua sendo obrigatória.

## O que é IA

Área da computação que desenvolve sistemas capazes de **simular habilidades humanas** — aprender, decidir, resolver problemas. Não é consciência: é reconhecimento de padrões em grande volume de dados.

Já está no cotidiano sem alarde: recomendação do YouTube, rota do Maps, assistente de voz, filtro de spam, desbloqueio facial.

## As cinco fases

| Fase | Período | Marca |
| :--- | :--- | :--- |
| 1. IA simbólica | anos 1950 | Teste de Turing, conferência de Dartmouth |
| 2. Inverno da IA | 1970–1980 | Promessas acima da capacidade; investimento cortado |
| 3. Sistemas especialistas | 1980–1999 | Regras fixas: MYCIN (medicina), XCON (indústria) |
| 4. Aprendizado de máquina | 2000–2015 | Modelos aprendem com dados; big data e GPU |
| 5. IA generativa | 2018–hoje | Cria conteúdo novo: texto, imagem, música, código |

O **inverno** é a parte mais instrutiva da história: a expectativa cresceu mais rápido que a tecnologia. Vale lembrar disso ao ler qualquer manchete atual.

O marco de popularização é novembro de 2022, com o ChatGPT — pela primeira vez, qualquer pessoa com celular podia conversar com um modelo de linguagem.

## IA generativa

Diferença central: a IA "tradicional" classifica e reconhece; a generativa **produz**.

| Modalidade | Exemplos |
| :--- | :--- |
| Texto | ChatGPT, Gemini, Claude, Copilot |
| Imagem | DALL·E, Midjourney, Canva Magic Media |
| Código | Copilot, modelos de código |
| Áudio/vídeo | geração de voz, música e vídeo |

Principais modelos e donos (o material cobra essa associação):

| Modelo | Empresa |
| :--- | :--- |
| GPT / ChatGPT | OpenAI (parceria com Microsoft) |
| Gemini | Google |
| Claude | Anthropic |
| LLaMA | Meta |
| Copilot | Microsoft |
| Ernie Bot | Baidu |
| Tongyi Qianwen | Alibaba |
| DeepSeek | open-source |

## Engenharia de prompt

Prompt é a instrução em linguagem natural. A qualidade da resposta depende diretamente dela.

### Os quatro elementos

1. **Público-alvo** — para quem é? (criança, especialista, gestor)
2. **Objetivo** — informar, resumir, explicar, criar, revisar?
3. **Formato** — texto corrido, lista, e-mail, plano, roteiro?
4. **Estilo e tom** — formal, acolhedor, técnico, inspirador?

### Exemplo do material

Fraco:

```text
Crie um texto sobre a Grécia Antiga.
```

Forte:

```text
Aja como especialista em design instrucional para alunos com dislexia.
Considere o texto sobre a Grécia Antiga e adapte para estudantes do 5º ano,
com frases curtas, linguagem simples e exemplos concretos.
```

A diferença não é "hype": é **contexto**. Sem contexto, o modelo preenche lacunas com a média da internet.

## Limites e riscos

### Alucinação

O modelo gera informação falsa com aparência de verdade. Não é mentira — é continuação estatística plausível. Por isso: **testar, revisar e validar**, especialmente em contexto profissional, acadêmico ou jurídico.

### Privacidade

Ferramentas gratuitas podem usar o que você digita para treinar modelos. Dados pessoais e documentos confidenciais enviados a servidores externos podem violar a **LGPD**. Em 2023, a Itália suspendeu temporariamente o ChatGPT por questões ligadas ao GDPR.

Boas práticas:

- evitar dado sensível em ferramenta gratuita;
- preferir versões empresariais com garantias contratuais;
- ler a política de retenção;
- usar modos privados ou modelos locais quando possível.

### Ética

- **Transparência**: informar quando conteúdo foi gerado por IA.
- **Responsabilidade**: a decisão final é humana.
- **Viés**: o modelo reproduz o que aprendeu — inclusive preconceito.
- **Autoria**: IA não assina, não responde e não assume consequência.

## O que levar

- IA simula; não compreende.
- A história tem invernos — desconfie de promessa absoluta.
- Generativa cria, mas não garante verdade.
- Prompt bom tem público, objetivo, formato e tom.
- Privacidade e ética não são detalhe: são parte do uso.
- A IA acelera o trabalho; a decisão continua sendo sua.

---

<sub>[← tema anterior](06-nocoes-programacao-imagens.md) · [voltar à disciplina](../README.md)</sub>
