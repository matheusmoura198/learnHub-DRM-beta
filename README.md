# LearnHub DRM

Plataforma da nossa turma para organizar e consultar os conteúdos das disciplinas. Uso restrito ao ambiente escolar: alunos consultam, professores organizam.

## Como usar

Abra `index.html` no navegador. Não há instalação, servidor ou banco de dados.

## Tecnologias

HTML5, CSS3 e JavaScript puro, sem frameworks nem bibliotecas.

| Arquivo | Função |
| --- | --- |
| `index.html` | Estrutura e landing page |
| `style.css` | Identidade visual (preto, azul e branco) e responsividade |
| `index.js` | Dados das disciplinas, busca, filtros, abas por bimestre e status |

## O que funciona

- Consulta sem login: alunos não têm cadastro nem senha.
- Busca por disciplina e assunto; filtros por categoria e série.
- Detalhe da disciplina com abas por bimestre.
- Status de cada conteúdo: concluído, em andamento e planejado.
- Layout para celular, tablet e computador, com navegação por teclado.

## Como editar os conteúdos

Os dados ficam no array `courses`, no início de `index.js`. Hoje são exemplos: substitua pelos conteúdos reais da turma.

## Limitações desta versão

- Sem banco de dados: o que está no `index.js` é o que todos veem.
- Sem área do professor funcional. Login, permissões, upload seguro de arquivos e gravação compartilhada exigem um servidor. Uma senha escrita em JavaScript pode ser lida por qualquer pessoa, por isso não será usada como segurança.
- Informações institucionais (nome da escola, professores) ainda não foram confirmadas e não aparecem no site.

## Próximas etapas

1. Materiais de estudo (PDF, vídeo, link, apresentação, imagem) com classes JavaScript e polimorfismo no método `exibir()`.
2. Interface da área do professor.
3. Definir a solução de backend para autenticação e armazenamento.
