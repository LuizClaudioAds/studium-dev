# ROADMAP

> Documento vivo. Nem tudo aqui vai acontecer — mas nada aqui se perde.

---

## Onde estamos

- [x] Estrutura do acervo (15 disciplinas, 5 trilhas)
- [x] Identidade visual em pixel art aconchegante
- [x] Fazenda interativa em três áreas (Fazenda, Vila, Vale)
- [x] Tema dia/noite, busca e filtro por trilha
- [x] Caixa de entrada de materiais (`materiais/`)
- [x] Primeiro lote de materiais catalogado (37 arquivos, 5 disciplinas)
- [ ] Resumos por tema
- [ ] Exercícios e simulados

---

## Próximos passos (conteúdo)

1. **Resumos por tema** — um arquivo Markdown por tema, dentro de `disciplinas/<disciplina>/resumos/`.
2. **Exercícios** — listas resolvidas, com a solução escondida em `<details>`.
3. **Simulados** — questões de múltipla escolha, com correção e nota.
4. **Projetos** — o que cada disciplina gerou de prático, mesmo que pequeno.

O padrão de cada disciplina passa a ser:

```text
disciplinas/<disciplina>/
├── README.md          ← índice: ementa, temas, status
├── resumos/
│   └── 01-tema.md
├── exercicios/
└── projetos/
```

---

## Gamificação (v2)

A ideia: transformar consulta em progresso. Não para virar um jogo, mas para dar
**retorno visível** ao esforço de revisar — que normalmente é invisível.

### XP e níveis

| Ação | XP |
| :--- | ---: |
| Abrir e ler um resumo | +2 |
| Concluir um tema | +10 |
| Acertar um exercício | +5 |
| Concluir um simulado | +50 |
| Passar num simulado (≥ 70%) | +50 extra |
| Publicar um projeto | +100 |
| Sequência de 7 dias | +30 |

Os cinco estágios que já existem no visual viram a progressão real de cada disciplina:

`Semente → Broto → Muda → Floração → Colheita`

E o XP total do acervo sobe o nível da fazenda como um todo.

### Conquistas

- **Primeira colheita** — concluir a primeira disciplina
- **Semestre fechado** — concluir as 5 de uma trilha
- **Poliglota** — resumos em 3 linguagens diferentes
- **Arquiteto** — concluir Arquitetura de Computadores
- **Deploy noturno** — estudar depois da meia-noite (com carinho)
- **Maratonista** — 30 dias de sequência
- **Curador** — 100 materiais catalogados

### Mecânicas da fazenda

- Construções ganham detalhes conforme o XP da disciplina (uma horta vira três).
- Clima e estação mudam com o tempo real.
- Visitar uma construção mostra o progresso e o próximo tema pendente.
- Talvez uma moeda interna para "decorar" a fazenda (itens cosméticos, nada de pay-to-win).

### Simulados

- Banco de questões por disciplina e por trilha.
- Modo treino (feedback imediato) e modo prova (correção no final).
- Histórico de tentativas, com gráfico de evolução.
- "Chefe" por trilha: simulado misto com nota de corte.

### Cuidados

- XP não pode incentivar clique sem leitura. Medir conclusão, não visita.
- Progresso salvo localmente (`localStorage`) e exportável em JSON.
- Nada de perder conquista. Nunca.

---

## Técnico

- [ ] Pipeline de build: Markdown → JSON de conteúdo (o Markdown continua a fonte da verdade)
- [ ] Deploy no GitHub Pages via Actions
- [ ] Busca full-text no conteúdo dos resumos
- [ ] PWA: funcionar offline, instalar no celular
- [ ] Modo leitura confortável (a moldura pixel fica, o texto respira)
- [ ] Verificação de contraste automatizada no tema noturno

---

## Backlog de ideias

- Linha do tempo do curso (o que eu sabia antes e depois)
- Glossário cruzado: um termo, todas as disciplinas que o tocam
- "Onde isso aparece no trabalho" — vagas reais por trilha
- Compartilhar um tema como página isolada (link público)
- Exportar o acervo como PDF para estudar longe da tela

---

<sub>[← voltar ao acervo](README.md)</sub>
