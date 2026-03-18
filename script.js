// Navigation mobile
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// Fermeture du menu après clic
navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// Retour depuis une page document vers la section projets
window.addEventListener("DOMContentLoaded", () => {
  const targetId = sessionStorage.getItem("portfolio-scroll-target");
  if (!targetId) return;

  sessionStorage.removeItem("portfolio-scroll-target");
  const target = document.querySelector(targetId);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

// Animations au scroll (Intersection Observer)
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach((el) => observer.observe(el));

 
// Modal projets
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalSubtitle = document.getElementById('modal-subtitle');
const modalBody = document.getElementById('modal-body');

const projectsData = {
  "active-directory": {
    title: "Mise en place d’un serveur Active Directory",
    subtitle: "Infrastructure Windows Server avec gestion des identités.",
    sections: [
      { heading: "Contexte", content: "Ce projet a consisté à mettre en place un contrôleur de domaine afin de centraliser l’administration des utilisateurs et des ressources. Il m’a permis de structurer un environnement Windows Server avec une gestion claire des accès et des stratégies." },
      { heading: "Environnement technique", list: ["Windows Server", "AD DS", "OU et groupes", "GPO", "Méthode AGDLP"] }
    ],
    documents: [
      { label: "Dossier technique", url: "assets/docs/active-directory/dossier.html" }
    ],
    mockups: [
      { label: "Maquettes VM", url: "assets/projects-data/active-directory/vm-maquettes/index.html" }
    ]
  },
  "serveur-web-conteneurise": {
    title: "Mise en place d’un serveur web conteneurisé avec Docker sous VMware",
    subtitle: "Virtualisation et conteneurisation d’un service web.",
    sections: [
      { heading: "Contexte", content: "Ce projet consiste à déployer un serveur web dans une machine virtuelle VMware, puis à y exécuter le service au sein d’un conteneur Docker. L’objectif est de mettre en place un environnement isolé, portable et plus simple à administrer." },
      { heading: "Environnement technique", list: ["VMware", "Docker", "Serveur web", "Linux", "Conteneurisation"] }
    ]
  },
  "infrastructure-nas": {
    title: "Mise en place d’une infrastructure NAS",
    subtitle: "Centralisation des données et sauvegardes.",
    sections: [
      { heading: "Contexte", content: "L’objectif de ce projet était de centraliser les données dans un espace de stockage unique, accessible et sécurisé. Cette mise en place répond à un besoin de partage, de sauvegarde et de continuité d’accès en environnement professionnel." },
      { heading: "Environnement technique", list: ["NAS", "Partages réseau", "Droits d’accès", "Permissions", "Sauvegarde"] }
    ],
    documents: [
      { label: "Dossier technique", url: "assets/docs/infrastructure-nas/dossier.html" }
    ]
  },
  "mise-a-niveau-parc": {
    title: "Mise à niveau du parc informatique",
    subtitle: "Audit, optimisation et sécurité.",
    sections: [
      { heading: "Contexte", content: "Ce projet vise à analyser l’état d’un parc informatique afin d’identifier les améliorations à apporter. L’enjeu était d’optimiser les postes de travail tout en renforçant leur fiabilité et leur niveau de sécurité." },
      { heading: "Environnement technique", list: ["Audit matériel", "Maintenance", "Optimisation", "Mise à jour", "Sécurisation des postes"] }
    ],
    documents: [
      { label: "Dossier technique", url: "assets/docs/mise-a-niveau-parc/dossier.html" }
    ]
  },
  "deploiement-windows-11": {
    title: "Déploiement de Windows 11",
    subtitle: "Déploiement multi-postes sécurisé.",
    sections: [
      { heading: "Contexte", content: "Ce projet a consisté à préparer et déployer Windows 11 sur plusieurs postes afin d’obtenir un environnement homogène. Il répond à un besoin de standardisation, de mise à jour du parc et de sécurisation des postes utilisateurs." },
      { heading: "Environnement technique", list: ["Windows 11", "Déploiement multi-postes", "Configuration standard", "Mise à jour", "Sécurisation"] }
    ],
    documents: [
      { label: "Dossier technique", url: "assets/docs/deploiement-windows-11/dossier.html" },
      { label: "Procédure", url: "assets/docs/deploiement-windows-11/procedure.html" }
    ]
  }
};

const buildSection = (section) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'modal-section';

  const title = document.createElement('h3');
  title.textContent = section.heading;
  wrapper.appendChild(title);

  if (section.content) {
    const p = document.createElement('p');
    p.textContent = section.content;
    wrapper.appendChild(p);
  }

  if (section.list) {
    const ul = document.createElement('ul');
    section.list.forEach((item) => {
      const li = document.createElement('li');
      const splitIndex = item.indexOf(' : ');

      if (splitIndex !== -1) {
        const year = document.createElement('span');
        year.className = 'item-year';
        year.textContent = item.slice(0, splitIndex);

        const label = document.createElement('span');
        label.className = 'item-text';
        label.textContent = item.slice(splitIndex + 3);

        li.appendChild(year);
        li.appendChild(label);
      } else {
        li.textContent = item;
      }

      ul.appendChild(li);
    });
    wrapper.appendChild(ul);
  }

  return wrapper;
};

const openModal = (projectId) => {
  const data = projectsData[projectId];
  if (!data || !modal) return;

  modalTitle.textContent = data.title;
  modalSubtitle.textContent = data.subtitle;
  modalBody.innerHTML = '';

  data.sections.forEach((section) => {
    modalBody.appendChild(buildSection(section));
  });

  if ((data.documents && data.documents.length) || (data.mockups && data.mockups.length)) {
    const resources = document.createElement('div');
    resources.className = 'project-resources';

    if (data.documents && data.documents.length) {
      const docsSection = document.createElement('div');
      docsSection.className = 'modal-section';

      const docsTitle = document.createElement('h3');
      docsTitle.textContent = 'Documents';
      docsSection.appendChild(docsTitle);

      const docsActions = document.createElement('div');
      docsActions.className = 'modal-actions';

      data.documents.forEach((documentItem, index) => {
        const link = document.createElement('a');
        link.className = index === 0 ? 'btn' : 'btn btn-outline';
        link.href = documentItem.url;
        link.textContent = documentItem.label;
        docsActions.appendChild(link);
      });

      docsSection.appendChild(docsActions);
      resources.appendChild(docsSection);
    }

    if (data.mockups && data.mockups.length) {
      const mockupsSection = document.createElement('div');
      mockupsSection.className = 'modal-section';

      const mockupsTitle = document.createElement('h3');
      mockupsTitle.textContent = 'Maquettes';
      mockupsSection.appendChild(mockupsTitle);

      const mockupsActions = document.createElement('div');
      mockupsActions.className = 'modal-actions';

      data.mockups.forEach((mockupItem) => {
        const link = document.createElement('a');
        link.className = 'btn btn-outline';
        link.href = mockupItem.url;
        link.textContent = mockupItem.label;
        mockupsActions.appendChild(link);
      });

      mockupsSection.appendChild(mockupsActions);
      resources.appendChild(mockupsSection);
    }

    modalBody.appendChild(resources);
  }

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
};

document.querySelectorAll('.project-card[data-project]').forEach((card) => {
  card.addEventListener('click', (event) => {
    event.preventDefault();
    const id = card.getAttribute('data-project');
    openModal(id);
  });
});

document.querySelectorAll('[data-modal-close]').forEach((btn) => {
  btn.addEventListener('click', closeModal);
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});


// Modal A propos
const aboutModal = document.getElementById('about-modal');
const aboutModalTitle = document.getElementById('about-modal-title');
const aboutModalSubtitle = document.getElementById('about-modal-subtitle');
const aboutModalBody = document.getElementById('about-modal-body');

const aboutData = {
  "profil": {
    title: "Profil",
    subtitle: "Qui je suis.",
    sections: [
      { heading: "Qui je suis", content: "Je m’appelle Luca Duhamel, j’ai 22 ans et je suis actuellement en deuxième année de BTS SIO (Services Informatiques aux Organisations), option SISR (Solutions d’Infrastructure, Systèmes et Réseaux). Avant de me tourner vers l’informatique, j’ai suivi un parcours dans le domaine scientifique et médical (Bac STL, BTS ABM). J’ai ensuite travaillé au Laboratoire de Cytogénétique du Centre Henri Becquerel, une expérience humaine et technique enrichissante qui a confirmé mon goût pour la rigueur et la logique." }
    ]
  },
  "parcours": {
    title: "Parcours",
    subtitle: "Expériences professionnelles & parcours académique.",
    layout: "two-column",
    columns: {
      leftTitle: "Expériences professionnelles",
      rightTitle: "Parcours académique",
      left: [
        {
          role: "Technicien informatique",
          type: "Alternance",
          company: "Nestlé Purina",
          address: "Montfort-sur-Risle",
          logo: "assets/logos/nestle-purina.jpg",
          period: "2024–2026",
          missions: ["Migration Windows 11", "Support utilisateur", "Inventaire du parc informatique"],
          tech: ["Windows 10/11", "Gestion de parc", "Support utilisateur"]
        },
        {
          role: "Photographe indépendant",
          type: "Micro-entreprise",
          company: "Luca Dhml Photos",
          address: "",
          logo: "assets/logos/luca-dhml-photos.png",
          period: "2022–2026",
          missions: ["Gestion de la relation client et des prestations", "Production, traitement et livraison de contenus numériques", "Gestion administrative et organisation de projets"],
          tech: ["Suite Adobe", "Gestion de projet", "Stockage et sauvegarde"]
        },
        {
          role: "Technicien de laboratoire",
          type: "CDD",
          company: "Centre Henri Becquerel",
          address: "Rouen",
          logo: "assets/logos/henri-becquerel.jpg",
          period: "2023–2024",
          missions: ["Préparation des milieux de cultures", "Gestion et suivi des consommables", "Analyses de caryotypes"],
          tech: ["Rigueur", "Respect des procédures", "Norme ISO 15189"]
        },
        {
          role: "Technicien de laboratoire",
          type: "Alternance",
          company: "Laboratoire du Cèdre",
          address: "Bois-Guillaume",
          logo: "assets/logos/cedre.jpg",
          period: "2021–2023",
          missions: ["Préparation et contrôle des échantillons", "Maintenance des équipements", "Gestion du matériel et suivi des procédures"],
          tech: ["Organisation", "Rigueur procédurale", "Gestion du matériel"]
        }
      ],
      right: [
        {
          degree: "BTS SIO option SISR",
          school: "Médiaschool Iris",
          city: "Rouen",
          logo: "assets/logos/mediaschool-iris.jpg",
          period: "2024–2026 (en cours)",
          description: "Brevet de Technicien Supérieur Services Informatiques aux Organisations, option Solutions d'Infrastructures, Systèmes et Réseaux",
        },
        {
          degree: "BTS ABM",
          school: "AFBB",
          city: "Paris",
          logo: "assets/logos/afbb.png",
          period: "2021–2023",
          description: "Brevet de Technicien Supérieur Analyses de Biologie Médicale",
        },
        {
          degree: "Baccalauréat STL",
          school: "Lycée La Providence St Thérèse",
          city: "Rouen",
          logo: "assets/logos/providence.png",
          period: "2020–2021",
          description: "Baccalauréat Sciences et Technologies de Laboratoire",
        }
      ]
    }
  }
};

const buildTagList = (items = []) => {
  const tags = document.createElement('div');
  tags.className = 'tags';
  items.forEach((label) => {
    const span = document.createElement('span');
    span.textContent = label;
    tags.appendChild(span);
  });
  return tags;
};

const buildAboutDetailCard = (card, kind) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'about-card-detail';

  const header = document.createElement('div');
  header.className = 'about-card-detail-header';

  const logo = document.createElement('div');
  logo.className = 'logo-badge';
  if (card.logo) {
    const img = document.createElement('img');
    img.src = card.logo;
    img.alt = kind === 'experience' ? card.company : card.school;
    img.loading = 'lazy';
    logo.appendChild(img);
  } else {
    logo.innerHTML = '<i class="fa-solid fa-building"></i>';
  }

  const title = document.createElement('h3');
  title.textContent = kind === 'experience' ? card.role : card.degree;

  header.appendChild(logo);
  header.appendChild(title);
  wrapper.appendChild(header);

  const meta = document.createElement('div');
  meta.className = 'meta';
  if (kind === 'experience') {
    const location = card.address || card.location || '';
    meta.innerHTML = `<span>${card.type}</span><span>${card.company}</span>${location ? `<span>${location}</span>` : ''}<span>${card.period}</span>`;
  } else {
    const city = card.city || '';
    meta.innerHTML = `<span>${card.school}</span>${city ? `<span>${city}</span>` : ''}<span>${card.period}</span>`;
  }
  wrapper.appendChild(meta);

  if (card.description) {
    const desc = document.createElement('p');
    desc.textContent = card.description;
    wrapper.appendChild(desc);
  }

  if (card.missions && card.missions.length) {
    const ul = document.createElement('ul');
    card.missions.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });
    wrapper.appendChild(ul);
  }

  const tagSource = card.tech || card.skills;
  if (tagSource && tagSource.length) {
    wrapper.appendChild(buildTagList(tagSource));
  }

  return wrapper;
};

const buildAboutSection = (section) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'modal-section';

  const title = document.createElement('h3');
  title.textContent = section.heading;
  wrapper.appendChild(title);

  if (section.content) {
    const p = document.createElement('p');
    p.textContent = section.content;
    wrapper.appendChild(p);
  }

  if (section.list) {
    const ul = document.createElement('ul');
    section.list.forEach((item) => {
      const li = document.createElement('li');
      const splitIndex = item.indexOf(' : ');

      if (splitIndex !== -1) {
        const year = document.createElement('span');
        year.className = 'item-year';
        year.textContent = item.slice(0, splitIndex);

        const label = document.createElement('span');
        label.className = 'item-text';
        label.textContent = item.slice(splitIndex + 3);

        li.appendChild(year);
        li.appendChild(label);
      } else {
        li.textContent = item;
      }

      ul.appendChild(li);
    });
    wrapper.appendChild(ul);
  }

  return wrapper;
};

const openAboutModal = (key) => {
  const data = aboutData[key];
  if (!data || !aboutModal) return;

  aboutModalTitle.textContent = data.title;
  aboutModalSubtitle.textContent = data.subtitle;
  aboutModalBody.innerHTML = '';

  if (data.layout === 'two-column' && data.columns) {
    const grid = document.createElement('div');
    grid.className = 'about-modal-grid';

    const leftCol = document.createElement('div');
    leftCol.className = 'about-column';
    const leftTitle = document.createElement('h4');
    leftTitle.textContent = data.columns.leftTitle;
    leftCol.appendChild(leftTitle);
    data.columns.left.forEach((card) => {
      leftCol.appendChild(buildAboutDetailCard(card, 'experience'));
    });

    const rightCol = document.createElement('div');
    rightCol.className = 'about-column';
    const rightTitle = document.createElement('h4');
    rightTitle.textContent = data.columns.rightTitle;
    rightCol.appendChild(rightTitle);
    data.columns.right.forEach((card) => {
      rightCol.appendChild(buildAboutDetailCard(card, 'education'));
    });

    grid.appendChild(leftCol);
    grid.appendChild(rightCol);
    aboutModalBody.appendChild(grid);
  } else if (data.sections) {
    data.sections.forEach((section) => {
      aboutModalBody.appendChild(buildAboutSection(section));
    });
  }

  aboutModal.classList.add('open');
  aboutModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
};

const closeAboutModal = () => {
  if (!aboutModal) return;
  aboutModal.classList.remove('open');
  aboutModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
};

document.querySelectorAll('.about-card[data-about]').forEach((card) => {
  card.addEventListener('click', () => {
    const key = card.getAttribute('data-about');
    openAboutModal(key);
  });
});

document.querySelectorAll('[data-about-close]').forEach((btn) => {
  btn.addEventListener('click', closeAboutModal);
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeAboutModal();
  }
});


// Agrandir / réduire les modales
const toggleExpand = (event) => {
  const card = event.currentTarget.closest('.modal-card');
  if (card) {
    card.classList.toggle('expanded');
  }
};

document.querySelectorAll('[data-modal-expand]').forEach((btn) => {
  btn.addEventListener('click', toggleExpand);
});

document.querySelectorAll('[data-about-expand]').forEach((btn) => {
  btn.addEventListener('click', toggleExpand);
});

// Galerie competences: defilement manuel via fleches.
const skillsMarquee = document.querySelector('.skills-marquee');
const skillsButtons = document.querySelectorAll('[data-skills-nav]');
if (skillsMarquee && skillsButtons.length) {
  skillsButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const dir = button.getAttribute('data-skills-nav');
      const delta = dir === 'left' ? -420 : 420;
      skillsMarquee.scrollBy({ left: delta, behavior: 'smooth' });
    });
  });
}
