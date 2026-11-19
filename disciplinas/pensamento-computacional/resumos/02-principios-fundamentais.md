# Tema 02 — Introdução aos princípios fundamentais da computação

> **Disciplina:** [Pensamento Computacional](../README.md) · **Fonte:** [PDF](<../../../materiais/pensamento-computacional/Tema 2 - Introdução Aos Princípios Fundamentais da Computação.pdf>) · 27 páginas

## Em uma frase

Computador não pensa: ele executa instruções simples, muito rápido, e a inteligência do resultado vem de quem combinou essas instruções.

## Ideias centrais

### A equação essencial

O computador é uma ferramenta humana. Ele não decide o que fazer — recebe **informações, padrões e leitura de dados** e devolve execução. A equação que resume isso é:

> **pessoa com uma necessidade → programador traduz em algoritmo → computador executa instruções**

O texto faz uma provocação importante já na abertura: os sistemas modernos processam informação em volume absurdo, mas a capacidade humana de **reflexão e análise crítica** fica em segundo plano. Acesso ilimitado ao conhecimento não é o mesmo que compreensão.

### Código e algoritmo são coisas diferentes

- **Código** é a forma escrita, em uma linguagem, seguindo regras de **sintaxe**.
- **Algoritmo** é a sequência de passos que resolve o problema.

Um algoritmo que não chega ao resultado não é um algoritmo — é uma tentativa. O critério é funcional: **se não funciona, ainda não é**.

### O exemplo dos olhos vermelhos

Para remover olhos vermelhos de uma foto, o programador decompõe o problema:

1. Procurar pixels avermelhados na imagem.
2. Verificar se estão em formato arredondado (para não apagar uma camisa vermelha).
3. Definir o que fazer com cada pixel encontrado.

Nada disso é "inteligência" do computador: é uma sequência de verificações que alguém projetou. Esse é o padrão de todo software.

### Evolução e Lei de Moore

Gordon Moore previu, há mais de 50 anos, a evolução contínua da capacidade computacional. O que se observa desde então:

- capacidade de processamento cresce;
- custo cai;
- acesso se populariza (mainframe → PC → notebook → celular);
- a **dinâmica permanece a mesma**.

O texto insiste nesse ponto: as tecnologias mudam, a lógica de funcionamento não.

## Conceitos-chave

| Termo | Definição |
| :--- | :--- |
| **Instrução** | Comando elementar que o computador executa |
| **Algoritmo** | Sequência finita de passos que resolve um problema |
| **Código** | Algoritmo escrito em uma linguagem, respeitando a sintaxe |
| **Sintaxe** | Regras gramaticais da linguagem de programação |
| **Variável** | Espaço nomeado na memória que guarda um valor |
| **Atribuição** | `=` em código significa "recebe", não "é igual a" |

## Na prática (Python)

```python
nome1 = "Mariah"
nome2 = "Luiza"

print(nome1, nome2)
print(f"{nome1} e {nome2} são irmãs")
```

Três coisas para guardar deste exemplo:

1. `print` mostra algo na tela; texto vai entre aspas (é uma *string*).
2. `nome1` é uma "caixa" na memória — o valor fica guardado e pode ser reutilizado.
3. `=` **atribui**, não compara. Comparação é `==`.

**Erros de sintaxe são normais.** O material é explícito: quem está começando vai errar vírgula, aspas e nome de função. O erro não é sinal de incapacidade — é parte do processo de escrever código.

## Analogia que vale guardar

Código é como um brinquedo de peças de encaixe: cada peça isolada parece simples e até inútil, mas o repertório cresce e, combinadas, viram outra coisa. É por isso que aprender a programar parece lento no começo e acelera depois.

## O que levar

- Computador é rápido e obediente, não criativo.
- Algoritmo se prova funcionando; código se prova executando.
- Variável é memória com nome; `=` é atribuição.
- A tecnologia muda, a dinâmica não.
- Errar sintaxe é rotina, não fracasso.

---

<sub>[← voltar à disciplina](../README.md) · [próximo tema →](03-pensamento-computacional-aplicacoes.md)</sub>
