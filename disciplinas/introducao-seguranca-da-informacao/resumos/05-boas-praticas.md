# Tema 05 — Boas práticas em segurança da informação

> **Disciplina:** [Segurança da Informação](../README.md) · **Fonte:** slides da disciplina (arquivados em `materiais/`) · 36 páginas

## Em uma frase

Boas práticas são o que sobra quando a ferramenta falha: senha bem gerida, acesso mínimo, backup testado e gente treinada.

## Senhas

Regras:

- nunca compartilhar nem anotar em papel ou arquivo;
- longa e única por serviço;
- gerenciador de senhas em vez de memória;
- MFA sempre que disponível.

A senha mais forte do mundo não protege se você a repete em dez sites — o vazamento de um compromete todos.

## Princípios clássicos (Saltzer & Schroeder, 1975)

| Princípio | Ideia |
| :--- | :--- |
| **Menor privilégio** | Só o acesso necessário para a tarefa |
| **Negar por padrão** | Sem regra explícita, nega |
| **Separação de privilégios** | Duas chaves são mais fortes que uma |
| **Mediação completa** | Todo acesso é verificado |
| **Design aberto** | Segurança não depende de segredo do mecanismo |
| **Aceitação psicológica** | Interface fácil → as pessoas usam a proteção |

## Controle de acesso

| Modelo | Como funciona |
| :--- | :--- |
| **DAC** (discricionário) | O proprietário do recurso define permissões |
| **MAC** (obrigatório) | Rótulos de classificação definem o acesso |
| **RBAC** (papéis) | Permissão vem do papel, não da pessoa |

RBAC é o padrão corporativo: ao mudar de função, muda-se o papel — não se ajustam dezenas de permissões.

Complementos: identificação única (login), autenticação, autorização, **logs** de rastreabilidade e revisão periódica de acessos.

## Antivírus e malware

| Tipo | Característica |
| :--- | :--- |
| **Vírus multipartite** | Infecta boot, memória e arquivos |
| **Vírus stealth** | Esconde a própria presença |
| **Trojan** | Parece útil, carrega o malicioso |
| **Ransomware** | Criptografa e cobra resgate |

Boas práticas: manter atualizado, verificar todo arquivo recebido, evitar mídia desconhecida, não abrir anexo inesperado.

## Backup

A regra que vale a pena memorizar — **3-2-1**:

```text
3 cópias · 2 mídias diferentes · 1 fora do local
```

E o detalhe que quase todo mundo esquece: **backup não testado não é backup**. Defina responsável, periodicidade, local e procedimento de restauração.

Ransomware moderno ataca também os backups conectados — daí a cópia offline.

## Criptografia

| Tipo | Uso |
| :--- | :--- |
| **Simétrica** | Volume (AES) |
| **Assimétrica** | Troca de chave, assinatura, não repúdio |
| **Hash** | Integridade, senha (SHA-256) |

### Certificado digital

Documento eletrônico emitido por **Autoridade Certificadora (AC)** que liga uma chave pública a uma identidade. Garante autenticidade, integridade e não repúdio.

Contém: titular, chave pública, validade, AC emissora e assinatura da AC.

É pessoal e intransferível — como RG ou CPF.

## Conscientização

Treinamento não é palestra anual. É:

- phishing simulado;
- política clara e curta;
- canal fácil para reportar incidente;
- exemplo vindo da liderança.

A maioria dos incidentes começa com uma pessoa clicando em algo.

## O que levar

- Senha única + MFA resolve muito.
- Menor privilégio e negar por padrão.
- RBAC escala; DAC não.
- Backup 3-2-1, testado.
- Hash verifica; certificado prova identidade.
- Pessoas são parte do controle, não do problema.

---

<sub>[← tema anterior](04-normas-de-seguranca.md) · [voltar à disciplina](../README.md) · [próximo tema →](06-gestao-de-risco.md)</sub>
