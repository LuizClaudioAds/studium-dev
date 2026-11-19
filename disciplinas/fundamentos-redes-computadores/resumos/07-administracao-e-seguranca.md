# Tema 07 — Administração e segurança em redes

> **Disciplina:** [Fundamentos de Redes](../README.md) · **Fonte:** slides da disciplina (arquivados em `materiais/`) · 32 páginas

## Em uma frase

Segurança de rede é reduzir superfície de ataque com controle de acesso, criptografia e monitoramento — e administrar é saber o que está acontecendo antes que quebre.

## Tríade CIA (ISO/IEC 27001)

| Propriedade | Significado |
| :--- | :--- |
| **Confidencialidade** | Só quem tem autorização acessa |
| **Integridade** | O dado não é alterado indevidamente |
| **Disponibilidade** | O serviço está acessível quando necessário |

## Ataques

### Passivos x ativos

- **Passivo**: apenas observa (interceptação, análise de tráfego).
- **Ativo**: interfere (modificação, fabricação, negação de serviço).

### Tipos

| Ataque | O que faz |
| :--- | :--- |
| **Interceptação** | Captura o tráfego |
| **Modificação** | Altera dados ou configurações |
| **Fabricação/personificação** | Se passa por outra entidade |
| **Repetição (replay)** | Reenvia transação válida — a cobrança duplicada |
| **Negação de serviço (DoS)** | Esgota recursos |

### Ciclo de um ataque (APT)

```text
reconhecimento → exploração → entrega → instalação
→ comando e controle (C2) → ações
```

Defesa boa interrompe **cedo** — cada etapa vencida dá mais privilégio ao atacante.

## Controles

### Físicos

- controle de acesso ao ambiente;
- nobreaks e geradores;
- câmeras, alarmes, proteção contra incêndio.

### Lógicos

| Controle | Função |
| :--- | :--- |
| **Autenticação** | Provar quem é (senha, biometria, token) |
| **MFA / 2FA** | Dois fatores independentes |
| **Autorização** | Definir o que pode fazer |
| **Firewall** | Filtrar tráfego por regra |
| **IDS/IPS** | Detectar/bloquear intrusão |
| **Antivírus/EDR** | Detectar malware no host |
| **VPN** | Túnel criptografado entre redes |

## Criptografia

| Tipo | Chaves | Uso |
| :--- | :--- | :--- |
| **Simétrica** | Uma chave compartilhada | Volume de dados (AES) |
| **Assimétrica** | Pública + privada | Troca de chave, assinatura (RSA) |
| **Hash** | Sem chave | Integridade e senha (SHA-256) |

### Hash e senha

O sistema não guarda a senha: guarda o **hash**. No login, calcula o hash do que foi digitado e compara. Por isso vazamento de banco não deveria revelar senhas — e por isso *salt* é obrigatório.

### Assinatura digital

```text
1. calcular o hash da mensagem
2. cifrar o hash com a chave privada do emissor
3. destinatário decifra com a chave pública e compara
```

Garante **autenticidade** e **integridade** — não confidencialidade.

### Certificado digital

Liga uma chave pública a uma identidade, assinado por uma **Autoridade Certificadora (AC)**. É o que faz o cadeado do navegador ter significado.

### VPN

Cria um túnel criptografado sobre a internet pública, como se a filial estivesse na mesma rede da matriz.

## Gerenciamento de redes

Modelo OSI de gerência (**FCAPS**):

| Área | Pergunta |
| :--- | :--- |
| **F**ault | O que quebrou? |
| **C**onfiguration | Como está configurado? |
| **A**ccounting | Quem usa quanto? |
| **P**erformance | Está rápido o suficiente? |
| **S**ecurity | Está protegido? |

Componentes: entidade gerenciadora, agentes nos dispositivos e o protocolo entre eles (SNMP).

## O que levar

- CIA é o critério de qualquer decisão de segurança.
- Ataque é processo, não evento único.
- MFA e menor privilégio resolvem muito.
- Simétrica para volume, assimétrica para confiança.
- Hash não é criptografia: não se "descriptografa" um hash.
- Monitorar é parte de administrar.

---

<sub>[← tema anterior](06-enlace-e-fisica.md) · [voltar à disciplina](../README.md)</sub>
