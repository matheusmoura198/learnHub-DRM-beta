"use strict";

const courses = [
  {
    id: "matematica",
    name: "Matemática",
    category: "base",
    categoryLabel: "Base comum",
    year: 1,
    teacher: "Professor(a) a definir",
    icon: "∑",
    tone: "tone-blue",
    description: "Uma jornada pelos fundamentos matemáticos para compreender e resolver problemas do cotidiano.",
    periods: [
      {
        name: "1º bimestre",
        contents: [
          { title: "Conjuntos numéricos", description: "Explore os números naturais, inteiros, racionais e reais e suas representações.", status: "done", level: "Introdutório" },
          { title: "Razão e proporção", description: "Compare grandezas e descubra como elas se relacionam.", status: "current", level: "Introdutório" },
          { title: "Porcentagem no dia a dia", description: "Aplique porcentagens a situações reais e resolva problemas.", status: "planned", level: "Intermediário" }
        ]
      },
      {
        name: "2º bimestre",
        contents: [
          { title: "Introdução à álgebra", description: "Use letras para representar valores e relações matemáticas.", status: "planned", level: "Introdutório" },
          { title: "Equações do 1º grau", description: "Represente situações e encontre valores desconhecidos.", status: "planned", level: "Intermediário" }
        ]
      },
      { name: "3º bimestre", contents: [] },
      { name: "4º bimestre", contents: [] }
    ]
  },
  {
    id: "portugues",
    name: "Língua Portuguesa",
    category: "base",
    categoryLabel: "Base comum",
    year: 1,
    teacher: "Professor(a) a definir",
    icon: "Aa",
    tone: "tone-amber",
    description: "Leitura, escrita e comunicação para interpretar o mundo e expressar suas ideias.",
    periods: [
      {
        name: "1º bimestre",
        contents: [
          { title: "Estratégias de leitura", description: "Identifique ideias principais, informações e diferentes pontos de vista.", status: "done", level: "Introdutório" },
          { title: "Gêneros textuais", description: "Reconheça como os textos se organizam de acordo com sua intenção.", status: "current", level: "Introdutório" },
          { title: "Produção de texto", description: "Planeje e escreva textos considerando leitor, objetivo e contexto.", status: "planned", level: "Intermediário" }
        ]
      },
      { name: "2º bimestre", contents: [{ title: "Coesão e coerência", description: "Conecte ideias e organize a progressão de um texto.", status: "planned", level: "Intermediário" }] },
      { name: "3º bimestre", contents: [] },
      { name: "4º bimestre", contents: [] }
    ]
  },
  {
    id: "programacao",
    name: "Introdução à Programação",
    category: "tecnica",
    categoryLabel: "Formação técnica",
    year: 1,
    teacher: "Professor(a) a definir",
    icon: "</>",
    tone: "tone-violet",
    description: "Aprenda a pensar como quem programa: lógica, algoritmos e os primeiros passos com código.",
    periods: [
      {
        name: "1º bimestre",
        contents: [
          { title: "Pensamento computacional", description: "Divida problemas em partes menores e planeje possíveis soluções.", status: "done", level: "Introdutório" },
          { title: "Algoritmos e lógica", description: "Descreva, passo a passo, como resolver um problema.", status: "done", level: "Introdutório" },
          { title: "Fluxogramas", description: "Represente visualmente as decisões e etapas de um algoritmo.", status: "current", level: "Introdutório" }
        ]
      },
      {
        name: "2º bimestre",
        contents: [
          { title: "Variáveis e tipos de dados", description: "Guarde informações e escolha a forma adequada de representar cada valor.", status: "current", level: "Introdutório" },
          { title: "Decisões no código", description: "Crie caminhos diferentes para situações diferentes.", status: "planned", level: "Intermediário" }
        ]
      },
      { name: "3º bimestre", contents: [{ title: "Repetições", description: "Automatize tarefas usando estruturas de repetição.", status: "planned", level: "Intermediário" }] },
      { name: "4º bimestre", contents: [] }
    ]
  },
  {
    id: "redes",
    name: "Fundamentos de Redes",
    category: "tecnica",
    categoryLabel: "Formação técnica",
    year: 1,
    teacher: "Professor(a) a definir",
    icon: "⌘",
    tone: "tone-green",
    description: "Entenda como dispositivos se conectam e como a informação viaja pela internet.",
    periods: [
      {
        name: "1º bimestre",
        contents: [
          { title: "O que é uma rede de computadores?", description: "Conheça os elementos que permitem a comunicação entre dispositivos.", status: "done", level: "Introdutório" },
          { title: "Tipos e topologias de rede", description: "Compare diferentes formas de organizar redes e conectar equipamentos.", status: "current", level: "Introdutório" }
        ]
      },
      { name: "2º bimestre", contents: [{ title: "Endereçamento IP", description: "Descubra como os dispositivos são identificados em uma rede.", status: "planned", level: "Intermediário" }] },
      { name: "3º bimestre", contents: [] },
      { name: "4º bimestre", contents: [] }
    ]
  },
  {
    id: "fisica",
    name: "Física",
    category: "base",
    categoryLabel: "Base comum",
    year: 2,
    teacher: "Professor(a) a definir",
    icon: "↗",
    tone: "tone-blue",
    description: "Investigue os fenômenos que acontecem à nossa volta com observação e raciocínio científico.",
    periods: [
      { name: "1º bimestre", contents: [{ title: "Movimento e referencial", description: "Descreva posições e movimentos a partir de diferentes pontos de vista.", status: "current", level: "Introdutório" }] },
      { name: "2º bimestre", contents: [{ title: "Velocidade média", description: "Relacione distância e tempo para compreender movimentos.", status: "planned", level: "Introdutório" }] },
      { name: "3º bimestre", contents: [] },
      { name: "4º bimestre", contents: [] }
    ]
  },
  {
    id: "banco-de-dados",
    name: "Banco de Dados",
    category: "tecnica",
    categoryLabel: "Formação técnica",
    year: 2,
    teacher: "Professor(a) a definir",
    icon: "▤",
    tone: "tone-violet",
    description: "Organize informações, modele dados e conheça os fundamentos das consultas.",
    periods: [
      { name: "1º bimestre", contents: [{ title: "Dados e informação", description: "Diferencie dados de informação e identifique como organizá-los.", status: "current", level: "Introdutório" }] },
      { name: "2º bimestre", contents: [{ title: "Modelagem relacional", description: "Represente entidades, atributos e relacionamentos.", status: "planned", level: "Intermediário" }] },
      { name: "3º bimestre", contents: [] },
      { name: "4º bimestre", contents: [] }
    ]
  }
];

const statusInfo = {
  done: { label: "Concluído", symbol: "✓", className: "done" },
  current: { label: "Em andamento", symbol: "↗", className: "current" },
  planned: { label: "Planejado", symbol: "○", className: "planned" }
};

const courseList = document.querySelector("#course-list");
const searchInput = document.querySelector("#search-input");
const categoryFilter = document.querySelector("#category-filter");
const yearFilter = document.querySelector("#year-filter");
const emptyState = document.querySelector("#empty-state");
const courseCount = document.querySelector("#course-count");
const detailSection = document.querySelector("#course-detail");
const detailContent = document.querySelector("#course-detail-content");
const filterPills = [...document.querySelectorAll(".filter-pill")];

function getCourseCounts(course) {
  return course.periods.flatMap((period) => period.contents).reduce(
    (counts, content) => {
      counts[content.status] += 1;
      return counts;
    },
    { done: 0, current: 0, planned: 0 }
  );
}

function getVisibleCourses() {
  const term = searchInput.value.trim().toLocaleLowerCase("pt-BR");
  const category = categoryFilter.value;
  const year = yearFilter.value;

  return courses.filter((course) => {
    const text = [
      course.name,
      course.categoryLabel,
      course.description,
      ...course.periods.flatMap((period) =>
        period.contents.map((content) => `${content.title} ${content.description}`)
      )
    ].join(" ").toLocaleLowerCase("pt-BR");

    return (!term || text.includes(term))
      && (category === "todas" || course.category === category)
      && (year === "todas" || String(course.year) === year);
  });
}

function renderCourseCard(course) {
  const counts = getCourseCounts(course);
  const card = document.createElement("article");
  card.className = "course-card";

  const top = document.createElement("div");
  top.className = "card-top";
  const icon = document.createElement("span");
  icon.className = `course-icon ${course.tone}`;
  icon.setAttribute("aria-hidden", "true");
  icon.textContent = course.icon;
  const category = document.createElement("span");
  category.className = "category-tag";
  category.textContent = course.categoryLabel;
  top.append(icon, category);

  const title = document.createElement("h3");
  title.textContent = course.name;
  const meta = document.createElement("p");
  meta.className = "course-meta";
  meta.textContent = `${course.year}º ano · ${course.teacher}`;
  const description = document.createElement("p");
  description.className = "course-description";
  description.textContent = course.description;

  const bottom = document.createElement("div");
  bottom.className = "card-bottom";
  const summary = document.createElement("span");
  summary.className = "status-summary";
  const dot = document.createElement("i");
  dot.className = "status-dot current";
  dot.setAttribute("aria-hidden", "true");
  summary.append(dot, document.createTextNode(`${counts.done + counts.current + counts.planned} conteúdos`));
  const button = document.createElement("button");
  button.className = "card-link";
  button.type = "button";
  button.dataset.course = course.id;
  button.setAttribute("aria-label", `Ver planejamento de ${course.name}`);
  const arrow = document.createElement("span");
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = "→";
  button.append(document.createTextNode("Ver planejamento "), arrow);
  bottom.append(summary, button);
  card.append(top, title, meta, description, bottom);
  return card;
}

function renderCourses() {
  const visibleCourses = getVisibleCourses();
  courseList.replaceChildren(...visibleCourses.map(renderCourseCard));
  courseCount.textContent = String(visibleCourses.length);
  emptyState.hidden = visibleCourses.length !== 0;
  courseList.hidden = visibleCourses.length === 0;
}

function renderContentRow(content) {
  const status = statusInfo[content.status];
  const row = document.createElement("article");
  row.className = "content-row";

  const marker = document.createElement("span");
  marker.className = `mini-status ${status.className}`;
  marker.setAttribute("aria-hidden", "true");
  marker.textContent = status.symbol;

  const main = document.createElement("div");
  const title = document.createElement("h3");
  title.textContent = content.title;
  const description = document.createElement("p");
  description.textContent = content.description;
  const statusLabel = document.createElement("span");
  statusLabel.className = "status-label";
  const dot = document.createElement("i");
  dot.className = `status-dot ${status.className}`;
  dot.setAttribute("aria-hidden", "true");
  statusLabel.append(dot, document.createTextNode(status.label));
  main.append(title, description, statusLabel);

  const level = document.createElement("span");
  level.className = "level-tag";
  level.textContent = content.level;
  row.append(marker, main, level);
  return row;
}

function showPeriod(course, periodIndex, tabList, periodPanel) {
  const period = course.periods[periodIndex];
  [...tabList.querySelectorAll(".period-tab")].forEach((tab, index) => {
    const selected = index === periodIndex;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });
  periodPanel.setAttribute("aria-labelledby", `period-tab-${course.id}-${periodIndex}`);

  const rows = period.contents.map(renderContentRow);
  if (rows.length === 0) {
    const empty = document.createElement("p");
    empty.className = "detail-empty";
    empty.textContent = "Nenhum conteúdo cadastrado neste bimestre ainda.";
    rows.push(empty);
  }
  periodPanel.replaceChildren(...rows);
}

function showCourse(courseId) {
  const course = courses.find((item) => item.id === courseId);
  if (!course) return;

  detailContent.replaceChildren();
  const back = document.createElement("button");
  back.type = "button";
  back.className = "detail-back";
  const backLabel = document.createElement("span");
  backLabel.textContent = "Voltar para disciplinas";
  const backArrow = document.createElement("span");
  backArrow.setAttribute("aria-hidden", "true");
  backArrow.textContent = "←";
  back.replaceChildren(backArrow, backLabel);
  back.addEventListener("click", closeCourse);

  const header = document.createElement("div");
  header.className = "detail-header";
  const icon = document.createElement("span");
  icon.className = `course-icon ${course.tone}`;
  icon.setAttribute("aria-hidden", "true");
  icon.textContent = course.icon;
  const heading = document.createElement("div");
  const category = document.createElement("span");
  category.className = "category-tag";
  category.textContent = course.categoryLabel;
  const title = document.createElement("h2");
  title.id = "detail-heading";
  title.textContent = course.name;
  const meta = document.createElement("p");
  meta.textContent = `${course.year}º ano · ${course.teacher} · Conteúdo de exemplo`;
  heading.append(category, title, meta);
  header.append(icon, heading);

  const description = document.createElement("p");
  description.className = "detail-description";
  description.textContent = course.description;

  const periodLabel = document.createElement("p");
  periodLabel.className = "detail-period-label";
  periodLabel.textContent = "Planejamento por período";

  const tabList = document.createElement("div");
  tabList.className = "period-tabs";
  tabList.setAttribute("role", "tablist");
  tabList.setAttribute("aria-label", `Períodos de ${course.name}`);
  const periodPanel = document.createElement("div");
  periodPanel.className = "period-content-list";
  periodPanel.id = `period-panel-${course.id}`;
  periodPanel.setAttribute("role", "tabpanel");

  course.periods.forEach((period, index) => {
    const tab = document.createElement("button");
    tab.className = "period-tab";
    tab.type = "button";
    tab.setAttribute("role", "tab");
    tab.id = `period-tab-${course.id}-${index}`;
    tab.setAttribute("aria-controls", periodPanel.id);
    tab.textContent = period.name;
    tab.addEventListener("click", () => showPeriod(course, index, tabList, periodPanel));
    tab.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
      event.preventDefault();
      const step = event.key === "ArrowRight" ? 1 : -1;
      const nextIndex = (index + step + course.periods.length) % course.periods.length;
      tabList.children[nextIndex].focus();
      showPeriod(course, nextIndex, tabList, periodPanel);
    });
    tabList.append(tab);
  });

  detailContent.append(back, header, description, periodLabel, tabList, periodPanel);
  showPeriod(course, 0, tabList, periodPanel);
  detailSection.hidden = false;
  detailSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function closeCourse() {
  detailSection.hidden = true;
  detailContent.replaceChildren();
  document.querySelector("#disciplinas").scrollIntoView({ behavior: "smooth", block: "start" });
}

function syncCategoryPills(category) {
  filterPills.forEach((pill) => {
    const active = pill.dataset.category === category;
    pill.classList.toggle("active", active);
    pill.setAttribute("aria-pressed", String(active));
  });
}

searchInput.addEventListener("input", renderCourses);
categoryFilter.addEventListener("change", () => {
  syncCategoryPills(categoryFilter.value);
  renderCourses();
});
yearFilter.addEventListener("change", renderCourses);
filterPills.forEach((pill) => {
  pill.addEventListener("click", () => {
    categoryFilter.value = pill.dataset.category;
    syncCategoryPills(pill.dataset.category);
    renderCourses();
  });
});
courseList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-course]");
  if (button) showCourse(button.dataset.course);
});
document.querySelector("#clear-filters").addEventListener("click", () => {
  searchInput.value = "";
  categoryFilter.value = "todas";
  yearFilter.value = "todas";
  syncCategoryPills("todas");
  renderCourses();
  searchInput.focus();
});
document.addEventListener("keydown", (event) => {
  const target = event.target;
  const isTyping = target instanceof HTMLInputElement
    || target instanceof HTMLTextAreaElement
    || target instanceof HTMLSelectElement
    || target.isContentEditable;

  if (event.key === "/" && !isTyping) {
    event.preventDefault();
    searchInput.focus();
  }
  if (event.key === "Escape" && !detailSection.hidden) closeCourse();
});

renderCourses();
                                         
