# Tema 04 — Sistemas computacionais

> **Disciplina:** [Pensamento Computacional](../README.md) · **Fonte:** [PDF](<../../../materiais/pensamento-computacional/Tema 4 - Sistemas Computacionais.pdf>) · 32 páginas

## Em uma frase

Hardware é o corpo, software é o que dá vida a ele, e o sistema operacional é o que faz os dois conversarem sem que a gente precise entender o detalhe.

## Hardware

| Componente | Papel | Detalhe que importa |
| :--- | :--- | :--- |
| **CPU** | Executa instruções | Velocidade e núcleos definem capacidade de processamento |
| **RAM** | Memória principal, **volátil** | Guarda o que está em uso; apaga ao desligar |
| **Armazenamento** (HD/SSD) | Memória **persistente** | Guarda o que sobrevive ao desligamento |
| **Placa-mãe** | Conecta tudo | Define compatibilidade e expansão |
| **GPU** | Processamento gráfico | Também usada em cálculo paralelo e IA |

A confusão mais comum — e a que mais aparece em prova — é RAM x armazenamento. Regra curta: **RAM é mesa de trabalho, SSD é armário**. Mesa grande deixa mais coisas abertas ao mesmo tempo; armário grande guarda mais coisas paradas.

### Lei de Moore

Gordon Moore (1965) observou que o número de transistores em um chip dobrava a cada **18 a 24 meses**. Isso sustentou décadas de ganho de desempenho. Hoje o ritmo desacelera por **limites físicos** de fabricação — o que explica a mudança de estratégia da indústria para múltiplos núcleos e processamento paralelo.

### Unidades de armazenamento

```text
1 byte   = 8 bits
1 KB     = 1.024 bytes
1 MB     = 1.024 KB
1 GB     = 1.024 MB
1 TB     = 1.024 GB
1 PB     = 1.024 TB   (data centers)
1 EB     = 1.024 PB   (escala de internet)
```

O material usa a conta prática: **1 GB ÷ 5 MB ≈ 200 fotos**. Saber estimar evita comprar errado.

### Lógica binária

Transistores funcionam como **interruptores**: ligado ou desligado. Cada estado é um **bit**; conjuntos de bits formam bytes e assim por diante. Toda a abstração de imagem, som e texto é, no fundo, sequência de uns e zeros — o que explica por que dois arquivos visualmente parecidos podem ter tamanhos completamente diferentes (resolução, compressão e profundidade de cor mudam a quantidade de bits).

## Software

- **Programa**: conjunto de instruções para uma tarefa específica.
- **Software**: solução completa, que pode reunir vários programas, bibliotecas e arquivos.

### Sistema operacional

É o **elo entre usuário e hardware**. Sem ele, cada programa teria que saber falar com cada peça. Responsabilidades:

- gerenciar **processos** (quem usa a CPU e quando);
- gerenciar **memória** (evitar conflito entre aplicativos);
- gerenciar **arquivos** (criar, ler, apagar em HD, SSD, pendrive);
- gerenciar **dispositivos** por meio de *drivers*.

### Firmware e middleware

| Termo | O que é | Onde aparece |
| :--- | :--- | :--- |
| **Firmware** | Software gravado no hardware | BIOS/UEFI, controle remoto, roteador |
| **Middleware** | Camada que conecta sistemas diferentes | Integração de sistemas legados, IoT, APIs |

Essa distinção vale ouro no diagnóstico: quando "o computador não liga", o problema pode estar antes do sistema operacional — no firmware.

### Código aberto x fechado

Aberto permite **ver e modificar** o código-fonte; fechado restringe acesso e modificação. Não é o mesmo que gratuito — são dimensões independentes.

## Linguagens de programação

### Compilada x interpretada

| | Compilada | Interpretada |
| :--- | :--- | :--- |
| Como funciona | Código vira executável antes de rodar | Código é lido e executado linha a linha |
| Vantagem | Desempenho, distribuição | Iteração rápida, portabilidade |
| Exemplos | C, C++, Rust | Python, JavaScript |

Exemplo do material: Chrome é escrito em C++ (compilado, máximo desempenho); um script de automação em Python (interpretado, ajusta e roda em qualquer sistema sem recompilar).

### Níveis de linguagem

- **Baixo nível** (máquina, Assembly): controle direto do hardware, instrução por instrução. Poderoso e penoso.
- **Alto nível** (Python, Java, C#, JavaScript): abstraem o hardware e priorizam legibilidade.
- **Visual por blocos**: porta de entrada para iniciantes.

### Paradigmas

- **Procedural/estruturado**: funções e sequência de passos.
- **Orientado a objetos**: entidades com propriedades e comportamentos.
- **Funcional**: funções como valor, composição.

### IDEs

VS Code (web e várias linguagens), Eclipse (Java corporativo), PyCharm (Python), NetBeans (Java e C/C++). A IDE não programa por você — ela reduz atrito com depuração, execução e organização.

## O que levar

- RAM é volátil; armazenamento é persistente.
- Tudo é bit: imagem, texto e som viram números.
- O SO existe para esconder a complexidade do hardware.
- Compilado x interpretado é escolha de **trade-off**, não de qualidade.
- Paradigma é forma de pensar; a linguagem é só a ferramenta.

---

<sub>[← tema anterior](03-pensamento-computacional-aplicacoes.md) · [voltar à disciplina](../README.md) · [próximo tema →](05-representacao-de-imagens.md)</sub>
