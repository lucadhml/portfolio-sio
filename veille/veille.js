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
  if (text) node.textContent = text;
  return node;
};

const renderMethodology = (data) => {
  const methodology = data.methodologie;
  const summary = document.getElementById('methodology-summary');
  const tools = document.getElementById('methodology-tools');
  const wheel = document.getElementById('methodology-wheel');
  const criteria = document.getElementById('methodology-criteria');
  const frequency = document.getElementById('methodology-frequency');
  const updatedAt = document.getElementById('methodology-updated');

  if (summary) summary.textContent = methodology.summary;
  if (frequency) frequency.textContent = methodology.frequency;
  if (updatedAt) updatedAt.textContent = data.updatedAt;

  if (tools) {
    methodology.tooling.forEach((item) => {
      tools.appendChild(el('span', '', item));
    });
  }

  if (wheel) {
    const stepClasses = ['step-top', 'step-right', 'step-bottom', 'step-left'];
    const center = el('div', 'wheel-center');
    center.innerHTML = '<strong>Cycle de veille<br>hebdomadaire</strong>';
    wheel.appendChild(center);

    methodology.steps.forEach((step, index) => {
      const card = el('article', `process-step ${stepClasses[index] || ''}`);
      card.appendChild(el('h3', '', step.title));
      card.appendChild(el('p', '', step.description));
      wheel.appendChild(card);
    });
  }

  if (criteria) {
    methodology.criteria.forEach((item) => {
      const card = el('div', 'criteria-item');
      const icon = el('i', 'fa-solid fa-check');
      const text = el('p', '', item);
      card.appendChild(icon);
      card.appendChild(text);
      criteria.appendChild(card);
    });
  }
};

const renderTopic = (data, key) => {
  const topic = data.topics[key];
  if (!topic) return;

  const title = document.getElementById('topic-title');
  const subtitle = document.getElementById('topic-subtitle');
  const objective = document.getElementById('topic-objective');
  const interest = document.getElementById('topic-interest');
  const sources = document.getElementById('topic-sources');
  const entries = document.getElementById('topic-entries');
  const updatedAt = document.getElementById('topic-updated');

  if (title) title.textContent = topic.title;
  if (subtitle) subtitle.textContent = topic.subtitle;
  if (objective) objective.textContent = topic.objective;
  if (interest) interest.textContent = topic.interest;
  if (updatedAt) updatedAt.textContent = data.updatedAt;

  if (sources) {
    topic.sources.forEach((source) => {
      const card = el('article', 'source-card');
      card.appendChild(el('h3', '', source.name));

      const meta = el('div', 'source-meta');
      meta.appendChild(el('span', '', source.type));
      card.appendChild(meta);

      const p = el('p', '', `Source suivie pour alimenter cette veille sur ${topic.title.toLowerCase()}.`);
      card.appendChild(p);

      const link = el('a', 'source-link', 'Consulter la source');
      link.href = source.url;
      link.target = '_blank';
      link.rel = 'noreferrer';
      link.innerHTML = 'Consulter la source <i class="fa-solid fa-arrow-up-right-from-square"></i>';
      card.appendChild(link);
      sources.appendChild(card);
    });
  }

  if (entries) {
    topic.entries.forEach((entry) => {
      const card = el('article', 'entry-card');
      card.appendChild(el('h3', '', entry.title));

      const meta = el('div', 'entry-meta');
      meta.appendChild(el('span', '', entry.date));
      meta.appendChild(el('span', '', entry.source));
      card.appendChild(meta);

      const summary = el('p', '', entry.summary);
      card.appendChild(summary);

      const focus = el('div', 'focus-card');
      focus.appendChild(el('h3', '', 'Pourquoi je la retiens'));
      focus.appendChild(el('p', '', entry.interest));
      card.appendChild(focus);

      const link = el('a', 'entry-link', 'Voir la publication');
      link.href = entry.url;
      link.target = '_blank';
      link.rel = 'noreferrer';
      link.innerHTML = 'Voir la publication <i class="fa-solid fa-arrow-up-right-from-square"></i>';
      card.appendChild(link);

      entries.appendChild(card);
    });
  }
};

const init = async () => {
  setBackLinks();

  try {
    const data = window.VEILLE_DATA;
    if (!data) throw new Error('Unable to load veille data');

    const pageType = document.body.dataset.veillePage;
    if (pageType === 'methodologie') {
      renderMethodology(data);
      return;
    }

    const topicKey = document.body.dataset.veilleTopic;
    if (topicKey) {
      renderTopic(data, topicKey);
    }
  } catch (error) {
    console.error(error);
  }
};

window.addEventListener('DOMContentLoaded', init);
