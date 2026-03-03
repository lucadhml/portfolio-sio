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
    docUrl: "assets/docs/active-directory.html",
    vmUrl: "assets/projects-data/active-directory/vm-maquettes/index.html",
    sections: [
      { heading: "Contexte", content: "Déploiement d’un contrôleur de domaine et structuration des ressources avec AGDLP." },
      { heading: "Actions", list: ["Création des OU et GPO", "Gestion des utilisateurs et groupes", "Politique de sécurité et de mots de passe"] },
      { heading: "Compétences", list: ["Windows Server", "AD DS", "GPO"] }
    ]
  },
  "reseau-campus-vlan": {
    title: "Mise en place d’un réseau campus – VLAN",
    subtitle: "Segmentation réseau et routage inter-VLAN.",
    docUrl: "assets/docs/reseau-campus-vlan.html",
    vmUrl: "assets/projects-data/reseau-campus-vlan/vm-maquettes/index.html",
    sections: [
      { heading: "Contexte", content: "Architecture campus simulée sous Cisco Packet Tracer." },
      { heading: "Actions", list: ["Définition des VLAN", "Configuration des trunks", "Routage inter-VLAN"] },
      { heading: "Compétences", list: ["VLAN", "Switching", "Routing"] }
    ]
  },
  "reseau-campus-dhcp": {
    title: "Mise en place d’un réseau campus – DHCP",
    subtitle: "Adressage automatique pour plusieurs segments.",
    docUrl: "assets/docs/reseau-campus-dhcp.html",
    vmUrl: "assets/projects-data/reseau-campus-dhcp/vm-maquettes/index.html",
    sections: [
      { heading: "Contexte", content: "Attribution dynamique des IP sur différents VLAN." },
      { heading: "Actions", list: ["Création des pools", "Relais DHCP", "Tests de baux"] },
      { heading: "Compétences", list: ["DHCP", "IP Plan", "Packet Tracer"] }
    ]
  },
  "reseau-campus-securite": {
    title: "Mise en place d’un réseau campus – Sécurité",
    subtitle: "Contrôle des accès et sécurisation des flux.",
    docUrl: "assets/docs/reseau-campus-securite.html",
    vmUrl: "assets/projects-data/reseau-campus-securite/vm-maquettes/index.html",
    sections: [
      { heading: "Contexte", content: "Renforcement de la sécurité réseau pour limiter les risques." },
      { heading: "Actions", list: ["ACL et filtrage", "Segmentation", "Bonnes pratiques"] },
      { heading: "Compétences", list: ["ACL", "Security", "Best Practices"] }
    ]
  },
  "site-web-micro-entreprise": {
    title: "Mise en place d’un site web pour une micro-entreprise",
    subtitle: "Création, hébergement et DNS.",
    docUrl: "assets/docs/site-web-micro-entreprise.html",
    sections: [
      { heading: "Contexte", content: "Mise en ligne d’un site vitrine accessible publiquement." },
      { heading: "Actions", list: ["Création du site", "Mise en ligne", "Gestion DNS"] },
      { heading: "Compétences", list: ["DNS", "Hébergement", "Déploiement"] }
    ]
  },
  "infrastructure-nas": {
    title: "Mise en place d’une infrastructure NAS",
    subtitle: "Centralisation des données et sauvegardes.",
    docUrl: "assets/docs/infrastructure-nas.html",
    sections: [
      { heading: "Contexte", content: "Stockage centralisé et gestion des accès." },
      { heading: "Actions", list: ["Création des partages", "Gestion des droits", "Plan de sauvegarde"] },
      { heading: "Compétences", list: ["NAS", "Backup", "Permissions"] }
    ]
  },
  "mise-a-niveau-parc": {
    title: "Mise à niveau du parc informatique",
    subtitle: "Audit, optimisation et sécurité.",
    docUrl: "assets/docs/mise-a-niveau-parc.html",
    sections: [
      { heading: "Contexte", content: "Amélioration de la performance et de la sécurité des postes." },
      { heading: "Actions", list: ["Audit matériel", "Optimisation", "Hardening"] },
      { heading: "Compétences", list: ["Audit", "Maintenance", "Hardening"] }
    ]
  },
  "deploiement-windows-11": {
    title: "Déploiement de Windows 11",
    subtitle: "Déploiement multi-postes sécurisé.",
    docUrl: "assets/docs/deploiement-windows-11.html",
    sections: [
      { heading: "Contexte", content: "Uniformisation et sécurisation des postes utilisateurs." },
      { heading: "Actions", list: ["Installation en série", "Configuration standard", "Sécurisation"] },
      { heading: "Compétences", list: ["Windows 11", "Deployment", "Security"] }
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

  if (data.docUrl) {
    const actions = document.createElement('div');
    actions.className = 'modal-actions';

    const link = document.createElement('a');
    link.className = 'btn btn-outline';
    link.href = data.docUrl;
    link.target = '_blank';
    link.rel = 'noreferrer';
    link.textContent = 'Voir la documentation';

    actions.appendChild(link);

    if (data.vmUrl) {
      const vmLink = document.createElement('a');
      vmLink.className = 'btn';
      vmLink.href = data.vmUrl;
      vmLink.target = '_blank';
      vmLink.rel = 'noreferrer';
      vmLink.textContent = 'Voir les maquettes VM';
      actions.appendChild(vmLink);
    }

    modalBody.appendChild(actions);
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
