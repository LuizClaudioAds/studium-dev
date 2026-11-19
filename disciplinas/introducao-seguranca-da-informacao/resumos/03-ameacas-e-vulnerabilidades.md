# Tema 03 — Ameaças e vulnerabilidades

> **Disciplina:** [Segurança da Informação](../README.md) · **Fonte:** slides da disciplina (arquivados em `materiais/`) · 23 páginas

## Em uma frase

Ameaça é o que **pode** causar dano; vulnerabilidade é a **porta aberta**; risco é a chance de os dois se encontrarem.

## Vocabulário que a prova cobra

| Termo | Definição |
| :--- | :--- |
| **Ativo** | Algo de valor para a organização (dado, sistema, imagem) |
| **Ameaça** | Causa potencial de incidente |
| **Vulnerabilidade** | Fraqueza que a ameaça explora |
| **Risco** | Probabilidade × impacto |
| **Incidente** | O dano concretizado |
| **Controle** | Medida que reduz o risco |

A mesma ameaça não vale para todo ativo: uma bigorna ameaça uma folha de papel, mas não um pen drive. O fogo ameaça os dois. **Contexto define a ameaça.**

### Ativos tangíveis e intangíveis

- **Tangíveis**: servidores, equipamentos, instalações.
- **Intangíveis**: imagem, reputação, confiança da marca.

Perder reputação pode custar mais que perder hardware.

## Classificação das ameaças

| Critério | Categorias |
| :--- | :--- |
| Vetor de ataque | física · lógica · humana · não humana |
| Origem (não humanas) | desastre natural · infraestrutura |
| Ativo afetado | confidencialidade · integridade · disponibilidade |

Uma enchente é, ao mesmo tempo: física, não humana, desastre natural e afeta disponibilidade/integridade. As classificações **se sobrepõem** — e a questão costuma pedir exatamente isso.

## Ataques cibernéticos

### Negação de serviço

- **DoS**: sobrecarrega um alvo até esgotar recursos.
- **DDoS**: usa máquinas intermediárias (botnet) — mais difícil de rastrear e mitigar.
- **Ping of death**: pacote malformado que derruba o sistema.

### Engenharia social

Explora a **pessoa**, não o sistema. Phishing por e-mail, SMS, rede social ou site clonado. A defesa é treinamento e desconfiança sistemática — não só tecnologia.

### Técnicas

| Técnica | O que faz |
| :--- | :--- |
| **IP spoofing** | Forja o endereço de origem |
| **Sniffing** | Captura tráfego na rede |
| **Port scanning** | Descobre serviços abertos |
| **Força bruta** | Tenta senhas em sequência |
| **Man-in-the-middle** | Intercepta e repassa a comunicação |

### Malware

| Tipo | Característica |
| :--- | :--- |
| **Vírus** | Precisa de hospedeiro e ação humana |
| **Worm** | Se propaga sozinho pela rede |
| **Trojan** | Parece legítimo, abre backdoor |
| **Spyware** | Coleta comportamento do usuário |
| **Ransomware** | Criptografa e exige resgate |

## Controles correspondentes

| Ameaça | Controle |
| :--- | :--- |
| DDoS | Redundância, CDN, filtro de tráfego |
| Phishing | Treinamento, filtro de e-mail, MFA |
| Sniffing | Criptografia (TLS, VPN) |
| Malware | Antivírus/EDR, atualização, menor privilégio |
| Perda de mídia | Criptografia de disco |
| Desastre | Backup, plano de continuidade |

## Análise de risco em uma frase

```text
risco = probabilidade × impacto
```

Se o custo do controle for maior que o risco, aceita-se o risco — como na franquia do seguro. Isso não é negligência; é decisão documentada.

## O que levar

- Ameaça ≠ vulnerabilidade ≠ risco.
- Classificações se sobrepõem.
- DDoS usa intermediários; DoS não.
- Engenharia social ataca gente.
- Controle proporcional ao risco, não ao medo.

---

<sub>[← tema anterior](02-principios-e-ciclo-de-vida.md) · [voltar à disciplina](../README.md) · [próximo tema →](04-normas-de-seguranca.md)</sub>
