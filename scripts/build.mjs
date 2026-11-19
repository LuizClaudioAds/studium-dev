#!/usr/bin/env node
// Gera preview/conteudo.js a partir dos Markdown do acervo.
// Sem dependencias. Rode com: npm run build

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dirDisciplinas = path.join(raiz, "disciplinas");
const dirMateriais = path.join(raiz, "materiais");
const saida = path.join(raiz, "preview", "conteudo.js");

const TRILHAS = {
  "Fundamentos da Computação": "fundamentos",
  "Infraestrutura & Segurança": "infra",
  "Dados & Web": "dados",
  "Engenharia & Produto": "engenharia",
  "Tecnologia & Sociedade": "sociedade"
};

/* ---------------- markdown ---------------- */

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function inline(s) {
  let t = esc(s);

  const codigos = [];
  t = t.replace(/`([^`]+)`/g, (_, c) => {
    codigos.push(c);
    return `\u0000${codigos.length - 1}\u0000`;
  });

  t = t.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  t = t.replace(/(^|[^*])\*([^*]+)\*/g, "$1<em>$2</em>");
  t = t.replace(/\[([^\]]+)\]\(<([^>]+)>\)/g, '<a href="$2">$1</a>');
  t = t.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>');

  t = t.replace(/\u0000(\d+)\u0000/g, (_, n) => `<code>${codigos[Number(n)]}</code>`);
  return t;
}

function splitLinha(linha) {
  let l = linha.trim();
  if (l.startsWith("|")) l = l.slice(1);
  if (l.endsWith("|") && !l.endsWith("\\|")) l = l.slice(0, -1);

  const partes = [];
  let atual = "";
  let emCodigo = false;
  for (let i = 0; i < l.length; i++) {
    const c = l[i];
    if (c === "`") emCodigo = !emCodigo;
    if (c === "\\" && l[i + 1] === "|") { atual += "|"; i++; continue; }
    if (c === "|" && !emCodigo) { partes.push(atual); atual = ""; continue; }
    atual += c;
  }
  partes.push(atual);
  return partes.map((p) => p.trim());
}

function renderMd(md) {
  const linhas = md.replace(/\r\n/g, "\n").split("\n");
  const out = [];
  let i = 0;

  while (i < linhas.length) {
    const linha = linhas[i];

    if (!linha.trim()) { i++; continue; }

    if (linha.trim().startsWith("```")) {
      const lang = linha.trim().slice(3).trim();
      const buf = [];
      i++;
      while (i < linhas.length && !linhas[i].trim().startsWith("```")) buf.push(linhas[i++]);
      i++;
      out.push(`<pre><code${lang ? ` class="lang-${lang}"` : ""}>${esc(buf.join("\n"))}</code></pre>`);
      continue;
    }

    if (/^\s*---+\s*$/.test(linha)) { out.push("<hr>"); i++; continue; }

    const h = linha.match(/^(#{1,6})\s+(.*)$/);
    if (h) {
      const n = h[1].length;
      out.push(`<h${n}>${inline(h[2])}</h${n}>`);
      i++;
      continue;
    }

    if (/^\s*>/.test(linha)) {
      const buf = [];
      while (i < linhas.length && /^\s*>/.test(linhas[i])) {
        buf.push(linhas[i].replace(/^\s*>\s?/, ""));
        i++;
      }
      out.push(`<blockquote>${renderMd(buf.join("\n"))}</blockquote>`);
      continue;
    }

    if (/^\s*\|/.test(linha) && linhas[i + 1] && /^\s*\|[\s:|-]+\|?\s*$/.test(linhas[i + 1])) {
      const cabecalho = splitLinha(linha);
      i += 2;
      const corpo = [];
      while (i < linhas.length && /^\s*\|/.test(linhas[i])) {
        corpo.push(splitLinha(linhas[i]));
        i++;
      }
      const th = cabecalho.map((c) => `<th>${inline(c)}</th>`).join("");
      const trs = corpo
        .map((c) => `<tr>${c.map((x) => `<td>${inline(x)}</td>`).join("")}</tr>`)
        .join("");
      out.push(`<div class="tabela"><table><thead><tr>${th}</tr></thead><tbody>${trs}</tbody></table></div>`);
      continue;
    }

    if (/^\s*[-*]\s+/.test(linha)) {
      const itens = [];
      while (i < linhas.length && /^\s*[-*]\s+/.test(linhas[i])) {
        itens.push(linhas[i].replace(/^\s*[-*]\s+/, ""));
        i++;
      }
      out.push(`<ul>${itens.map((t) => `<li>${inline(t)}</li>`).join("")}</ul>`);
      continue;
    }

    if (/^\s*\d+\.\s+/.test(linha)) {
      const itens = [];
      while (i < linhas.length && /^\s*\d+\.\s+/.test(linhas[i])) {
        itens.push(linhas[i].replace(/^\s*\d+\.\s+/, ""));
        i++;
      }
      out.push(`<ol>${itens.map((t) => `<li>${inline(t)}</li>`).join("")}</ol>`);
      continue;
    }

    if (/^\s*<[a-z]/i.test(linha)) { out.push(linha.trim()); i++; continue; }

    const par = [];
    while (
      i < linhas.length &&
      linhas[i].trim() &&
      !/^(#{1,6}\s|```|\s*>|\s*\||\s*[-*]\s|\s*\d+\.\s|---)/.test(linhas[i])
    ) {
      par.push(linhas[i]);
      i++;
    }
    out.push(`<p>${inline(par.join(" "))}</p>`);
  }

  return out.join("\n");
}

/* ---------------- disciplina ---------------- */

function secao(md, titulo) {
  const re = new RegExp(`^## ${titulo}\\s*$`, "m");
  const m = re.exec(md);
  if (!m) return "";
  const inicio = m.index + m[0].length;
  const resto = md.slice(inicio);
  const fim = resto.search(/^##\s/m);
  return (fim === -1 ? resto : resto.slice(0, fim)).trim();
}

function lerDisciplina(slug) {
  const dir = path.join(dirDisciplinas, slug);
  const arq = path.join(dir, "README.md");
  if (!fs.existsSync(arq)) return null;

  const md = fs.readFileSync(arq, "utf8");
  const titulo = (md.match(/^#\s+(.+)$/m) || [, slug])[1].trim();
  const cab = (md.match(/^>\s*\*\*Trilha:\*\*(.+)$/m) || [, ""])[1];
  const trilhaNome = cab.split("·")[0].replace(/\*\*/g, "").trim();
  const status = ((cab.match(/Status:\*\*\s*([^·]+)/) || [, ""])[1] || "").trim();

  const frase = secao(md, "Em uma frase").split(/\n{2,}/)[0].trim();
  const porque = secao(md, "Por que isso importa depois").split(/\n{2,}/)[0].trim();
  const ficou = secao(md, "O que ficou")
    .split("\n")
    .filter((l) => /^\s*[-*]\s+/.test(l))
    .map((l) => l.replace(/^\s*[-*]\s+/, "").trim());

  const dirResumos = path.join(dir, "resumos");
  const resumos = [];
  if (fs.existsSync(dirResumos)) {
    for (const nome of fs.readdirSync(dirResumos).filter((f) => f.endsWith(".md")).sort()) {
      const texto = fs.readFileSync(path.join(dirResumos, nome), "utf8");
      const m = texto.match(/^#\s+(.+)$/m);
      const tituloResumo = m ? m[1].trim() : nome;
      const num = (tituloResumo.match(/Tema\s+(\d+)/i) || [, ""])[1];
      const palavras = texto.split(/\s+/).length;
      resumos.push({
        arquivo: nome,
        numero: num,
        titulo: tituloResumo.replace(/^Tema\s+\d+\s*[—–-]\s*/i, ""),
        completo: tituloResumo,
        minutos: Math.max(1, Math.round(palavras / 200)),
        html: renderMd(texto)
      });
    }
  }

  const dirMat = path.join(dirMateriais, slug);
  let materiais = 0;
  if (fs.existsSync(dirMat)) {
    materiais = fs.readdirSync(dirMat).filter((f) => f !== "README.md").length;
  }

  let estagio = 2;
  if (materiais > 0) estagio = 3;
  if (resumos.length > 0) estagio = 4;

  return {
    slug,
    titulo,
    trilha: TRILHAS[trilhaNome] || "fundamentos",
    trilhaNome,
    status: status || "estruturando",
    estagio,
    materiais,
    frase,
    fraseHtml: inline(frase),
    porque,
    porqueHtml: inline(porque),
    ficou,
    ficouHtml: ficou.map((t) => inline(t)),
    resumos
  };
}

const disciplinas = fs
  .readdirSync(dirDisciplinas, { withFileTypes: true })
  .filter((d) => d.isDirectory() && d.name !== "_template")
  .map((d) => lerDisciplina(d.name))
  .filter(Boolean)
  .sort((a, b) => (a.titulo < b.titulo ? -1 : a.titulo > b.titulo ? 1 : 0));

const conteudo = {
  totalResumos: disciplinas.reduce((s, d) => s + d.resumos.length, 0),
  disciplinas
};

const js = `/* arquivo gerado por scripts/build.mjs — nao editar a mao */
window.CONTEUDO = ${JSON.stringify(conteudo, null, 2)};
`;

fs.writeFileSync(saida, js, "utf8");
console.log(
  `ok: ${disciplinas.length} disciplinas, ${conteudo.totalResumos} resumos → preview/conteudo.js`
);
