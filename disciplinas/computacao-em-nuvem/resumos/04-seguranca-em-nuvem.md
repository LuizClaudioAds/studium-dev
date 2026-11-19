# Tema 04 — Segurança em computação em nuvem

> **Disciplina:** [Computação em Nuvem](../README.md) · **Fonte:** slides da disciplina (arquivados em `materiais/`) · 34 páginas

## Em uma frase

Na nuvem, segurança é **responsabilidade compartilhada**: o provedor cuida da infraestrutura, você cuida da configuração — e a maioria dos incidentes mora aí.

## Base (NIST 800-145)

Modelos de serviço: **SaaS, PaaS, IaaS**.  
Modelos de implantação: **pública, privada, híbrida, comunidade**.

## Quem protege o quê

| Camada | IaaS | PaaS | SaaS |
| :--- | :--- | :--- | :--- |
| Dados e identidade | **Você** | **Você** | **Você** |
| Aplicação | **Você** | **Você** | Provedor |
| Runtime / middleware | **Você** | Provedor | Provedor |
| SO | **Você** | Provedor | Provedor |
| Virtualização | Provedor | Provedor | Provedor |
| Física / rede | Provedor | Provedor | Provedor |

Quanto mais gerenciado o serviço, menor o seu trabalho — e menor o seu controle. Segurança total nunca é delegada: **dados e acessos continuam sendo seus**.

## Aspectos críticos

### Identidade e acesso

- MFA;
- menor privilégio;
- chaves e segredos em cofre, nunca no código;
- revisão periódica de permissões.

### Rede

- segmentação (VPC, sub-redes);
- grupos de segurança e firewall;
- exposição mínima de portas.

### Dados

- criptografia em trânsito (TLS) e em repouso;
- classificação da informação;
- backup e retenção.

### Resposta a incidentes

Quem detecta, quem notifica, em quanto tempo. No modelo compartilhado, isso precisa estar **contratualmente** definido.

### Conformidade

LGPD, GDPR, setor regulado. O provedor oferece certificações, mas o **uso** que você faz continua sendo sua responsabilidade legal.

## Serviços e riscos

| Serviço | Ponto de atenção |
| :--- | :--- |
| **VM (IaaS)** | Patch de SO é seu |
| **Contêiner** | Imagem base confiável, registro privado |
| **Serverless** | Permissões da função e dependências |
| **Armazenamento em bloco** | Anexado a uma VM (tipo SAN) |
| **Arquivos** | Compartilhamento por NFS/SMB |
| **Objetos (blob)** | Bucket público é o erro clássico |
| **CDN** | Cache e proteção contra DDoS |

### DDoS

Provedores oferecem mitigação gerenciada (AWS Shield, Azure DDoS Protection). CDN ajuda absorvendo volume.

## Multilocação (multi-tenancy)

Recursos compartilhados entre clientes. A segurança depende de **isolamento**:

- isolamento de computação (hipervisor);
- isolamento de rede;
- isolamento de armazenamento;
- isolamento lógico de identidade.

Uma falha de isolamento vira vazamento entre clientes — o pior cenário da nuvem.

## Orientações da CSA

A Cloud Security Alliance organiza o conhecimento em domínios e recomenda:

- avaliar o risco do provedor antes de contratar;
- definir responsabilidades por escrito;
- exigir transparência sobre incidentes;
- conhecer onde os dados ficam (soberania);
- planejar saída (**exit strategy**) para evitar lock-in.

## Erros mais comuns (e evitáveis)

1. Bucket de storage público.
2. Credencial em repositório de código.
3. Falta de MFA na conta administrativa.
4. Log desativado.
5. Recurso esquecido ligado gerando custo e exposição.
6. Confiar que "o provedor resolve segurança".

## O que levar

- Responsabilidade é compartilhada, nunca transferida.
- IaaS = você patcheia; SaaS = você protege o acesso.
- Isolamento é a base da multilocação.
- Configuração é a maior superfície de ataque.
- Contrato e exit strategy fazem parte da segurança.

---

<sub>[← tema anterior](03-arquitetura-em-nuvem.md) · [voltar à disciplina](../README.md) · [próximo tema →](05-azure.md)</sub>
