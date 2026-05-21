const setBackLinks = () => {
  document.querySelectorAll('[data-go-veille]').forEach((link) => {
    link.addEventListener('click', () => {
      sessionStorage.setItem('portfolio-scroll-target', '#veille');
    });
  });
};

const el = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
};

const SOURCE_ICONS = {
  'IT-Connect':            'fa-newspaper',
  'ANSSI':                 'fa-shield-halved',
  'CERT-FR':               'fa-triangle-exclamation',
  '01net':                 'fa-satellite-dish',
  'Le Monde Informatique': 'fa-microchip',
};

const TOOL_ICONS = SOURCE_ICONS;

const renderMethodology = (data) => {
  const methodology = data.methodologie;

  const summary   = document.getElementById('methodology-summary');
  const tools     = document.getElementById('methodology-tools');
  const wheel     = document.getElementById('methodology-wheel');
  const criteria  = document.getElementById('methodology-criteria');
  const frequency = document.getElementById('methodology-frequency');
  const updatedAt = document.getElementById('methodology-updated');

  if (summary)   summary.textContent   = methodology.summary;
  if (frequency) frequency.textContent = methodology.frequency;
  if (updatedAt) updatedAt.textContent  = data.updatedAt;

  // Étapes numérotées
  if (wheel) {
    methodology.steps.forEach((step, i) => {
      const card = el('div', 'method-step');

      const num = el('div', 'method-step-num', String(i + 1));
      card.appendChild(num);

      const body = el('div', 'method-step-body');
      // Retire le "1. " etc. du titre si présent
      body.appendChild(el('h3', '', step.title.replace(/^\d+\.\s*/, '')));
      body.appendChild(el('p', '', step.description));
      card.appendChild(body);

      wheel.appendChild(card);
    });
  }

  // Outils sous forme de chips avec icônes
  if (tools) {
    methodology.tooling.forEach((item) => {
      const chip = el('span', 'tool-chip');
      // Cherche si un des noms de source correspond pour avoir une icône
      const matchedIcon = Object.entries(TOOL_ICONS).find(([name]) =>
        item.toLowerCase().includes(name.toLowerCase())
      );
      const iconClass = matchedIcon ? matchedIcon[1] : 'fa-check';
      chip.innerHTML = `<i class="fa-solid ${iconClass}"></i>${item}`;
      tools.appendChild(chip);
    });
  }

  // Critères
  if (criteria) {
    methodology.criteria.forEach((item) => {
      const card = el('div', 'criteria-item');
      card.appendChild(el('i', 'fa-solid fa-check'));
      card.appendChild(el('p', '', item));
      criteria.appendChild(card);
    });
  }
};

const renderTopic = (data, key) => {
  const topic = data.topics[key];
  if (!topic) return;

  const title      = document.getElementById('topic-title');
  const subtitle   = document.getElementById('topic-subtitle');
  const objective  = document.getElementById('topic-objective');
  const interest   = document.getElementById('topic-interest');
  const sources    = document.getElementById('topic-sources');
  const entries    = document.getElementById('topic-entries');
  const updatedAt  = document.getElementById('topic-updated');
  const entryCount = document.getElementById('topic-entry-count');

  if (title)     title.textContent    = topic.title;
  if (subtitle)  subtitle.textContent = topic.subtitle;
  if (objective) objective.textContent = topic.objective;
  if (interest)  interest.textContent  = topic.interest;
  if (updatedAt) updatedAt.textContent  = data.updatedAt;

  // Sources en ligne
  if (sources) {
    topic.sources.forEach((source) => {
      const card = el('div', 'source-card');

      const iconClass = SOURCE_ICONS[source.name] || 'fa-rss';
      const iconWrap = el('div', 'source-card-icon');
      iconWrap.innerHTML = `<i class="fa-solid ${iconClass}"></i>`;
      card.appendChild(iconWrap);

      const info = el('div', 'source-card-info');
      info.appendChild(el('h3', '', source.name));
      info.appendChild(el('span', 'source-type', source.type));
      card.appendChild(info);

      const link = el('a', 'source-link');
      link.href = source.url;
      link.target = '_blank';
      link.rel = 'noreferrer';
      link.title = 'Consulter ' + source.name;
      link.innerHTML = '<i class="fa-solid fa-arrow-up-right-from-square"></i>';
      card.appendChild(link);

      sources.appendChild(card);
    });
  }

  // Entrées
  if (entries) {
    const count = topic.entries.length;
    if (entryCount) entryCount.textContent = count + (count > 1 ? ' entrées' : ' entrée');

    topic.entries.forEach((entry) => {
      const card = el('article', 'entry-card');

      // En-tête : titre + badges
      const header = el('div', 'entry-card-header');
      header.appendChild(el('h3', '', entry.title));

      const badges = el('div', 'entry-card-badges');
      badges.appendChild(el('span', 'entry-badge-source', entry.source));
      badges.appendChild(el('span', 'entry-badge-date', entry.date));
      header.appendChild(badges);
      card.appendChild(header);

      // Résumé
      card.appendChild(el('p', 'entry-card-summary', entry.summary));

      // Lien
      const link = el('a', 'entry-link');
      link.href = entry.url;
      link.target = '_blank';
      link.rel = 'noreferrer';
      link.innerHTML = 'Lire l\'article <i class="fa-solid fa-arrow-up-right-from-square"></i>';
      card.appendChild(link);

      entries.appendChild(card);
    });
  }
};

const init = () => {
  setBackLinks();

  const data = window.VEILLE_DATA;
  if (!data) { console.error('VEILLE_DATA not found'); return; }

  const pageType = document.body.dataset.veillePage;
  if (pageType === 'methodologie') {
    renderMethodology(data);
    return;
  }

  const topicKey = document.body.dataset.veilleTopic;
  if (topicKey) renderTopic(data, topicKey);
};

window.addEventListener('DOMContentLoaded', init);
