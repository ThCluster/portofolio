// Tout le contenu du portfolio est ici. Modifiez ce fichier pour le mettre à jour.

export const profile = {
  firstName: "Vincent André",
  lastName: "Djabia Kassi",
  role: "Développeur Full-Stack & Co-fondateur de Klata",
  tagline:
    "Je conçois des applications web utiles et soignées, avec une préférence pour le back-end : Django REST Framework et l'écosystème Python.",
  location: "Marcory, Abidjan — Côte d'Ivoire",
  verse: {
    text: "Fortifie-toi et prends courage… car l'Éternel, ton Dieu, est avec toi dans tout ce que tu entreprendras.",
    ref: "Josué 1:9",
  },
  motto: "À tes résolutions dépendra ton succès.",
  email: "vincentandredev@gmail.com",
  phone: "+225 07 68 35 92 82",
  socials: {
    github: "https://github.com/ThCluster",
    linkedin: "https://www.linkedin.com/in/vincent-andr%C3%A9-djabia-kassi-494208378/",
  },
  about: [
    "Étudiant en Master Génie logiciel et passionné par le développement web, j'aime concevoir des applications utiles et soignées. Je suis plus à l'aise côté back-end, avec Django REST Framework et l'écosystème Python, mais je m'adapte volontiers à d'autres technologies selon les besoins des projets.",
    "Chez AfriDigital, les projets concrets sur lesquels j'ai travaillé m'ont appris la rigueur, le travail en équipe et l'importance d'un code fiable. Curieux et toujours désireux d'apprendre, je souhaite mettre mes compétences au service d'une équipe et continuer à progresser à ses côtés.",
    "En ce moment, je me forme au Machine Learning et au Deep Learning, et je consolide mes bases en Docker, Ansible, gestion de projet et méthode Scrum.",
  ],
  highlights: [
    { value: "13", label: "projets réalisés" },
    { value: "8", label: "failles de sécurité corrigées" },
    { value: "M2", label: "Génie logiciel en cours" },
  ],
  languages: [
    { name: "Français", level: "Courant" },
    { name: "Anglais", level: "Technique" },
  ],
};

export type SkillGroup = { title: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    title: "Back-end",
    items: ["Django", "Django REST Framework", "Node.js", "Express.js", "NestJS", "Prisma", "Java"],
  },
  {
    title: "Front-end",
    items: ["React.js", "Next.js", "Vite", "TypeScript", "JavaScript ES6+", "HTML5 / CSS3"],
  },
  { title: "Bases de données", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  { title: "Outils & déploiement", items: ["Git", "GitHub", "Render", "Hostinger (DNS, messagerie)"] },
];

// Compétences en cours d'acquisition : affichées à part, clairement signalées « en cours »
export const learning: string[] = [
  "Machine Learning",
  "Deep Learning",
  "Docker",
  "Ansible",
  "Gestion de projet",
  "Agilité / Scrum",
  "Kubernetes",
  "Grafana",
  "Kong",
  "Konga",
];

export type Project = {
  title: string;
  context: string;
  description: string;
  tags: string[];
  image?: string; // ex. "/projets/agapy-shop.png" (fichier dans public/projets/)
  demo?: string;
  repo?: string;
};

// Logos des organisations, affichés partout où leur nom apparaît
export const orgLogos: Record<string, string> = {
  AfriDigital: "/logos/afridigital.png",
  Klata: "/logos/klata.png",
};

export const projects: Project[] = [
  {
    title: "Klata",
    context: "Projet personnel",
    description:
      "Mon projet de startup : une plateforme qui permet de restituer à leurs propriétaires les documents administratifs perdus (CNI, passeport…). Je la co-fonde et en assure le développement full-stack.",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "Vite", "Django REST", "PostgreSQL"],
  },
  {
    title: "Alerte anonyme automatisée",
    context: "AfriDigital",
    description:
      "Système de signalement anonyme de bout en bout : scan d'un QR Code, formulaire Tally, orchestration Make, enregistrement dans Google Sheets, puis alerte immédiate par bip et SMS.",
    tags: ["Tally", "Make", "Google Sheets", "SMS"],
  },
  {
    title: "Core central",
    context: "AfriDigital",
    description:
      "Participation à la conception de la phase 1 d'un core qui centralise les différentes plateformes, à la manière d'une passerelle API type Kong, avec un rôle plus étendu.",
    tags: ["TypeScript", "Node.js", "Architecture API"],
  },
  {
    title: "Brobroli",
    context: "AfriDigital",
    description:
      "Marketplace en ligne : modules Marketplace et Livraison, maintenance et nouvelles fonctionnalités, résolution d'une panne de paiement vieille de 7 mois et correction de 8 failles de sécurité.",
    tags: ["TypeScript", "Express", "Prisma"],
    demo: "https://marchand.brobroliart.ci",
  },
  {
    title: "AGAPY-GALLERY",
    context: "Freelance",
    description:
      "Galerie d'art virtuelle en 3D, à parcourir comme un jeu vidéo. Des artistes, surtout africains (peintres, photographes, sculpteurs), y exposent leurs œuvres et les visiteurs s'y promènent librement.",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "Vite", "Django REST", "PostgreSQL", "Three.js"],
    repo: "https://github.com/ThCluster/Agapy_Gallery",
  },
  {
    title: "AGAPY-SHOP'S",
    context: "Freelance",
    description:
      "Design et front-end d'une boutique en ligne aux valeurs chrétiennes, où chaque article porte un message.",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "Vite", "Django REST", "PostgreSQL"],
    demo: "https://agapy-shops.com",
  },
  {
    title: "AGAPY-IMMO",
    context: "Freelance",
    description: "Plateforme pour louer, vendre et acheter des biens immobiliers en toute confiance.",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "Vite", "Django REST", "PostgreSQL"],
    demo: "https://agapy-imo.com",
  },
  {
    title: "ISTAG",
    context: "Freelance",
    description:
      "Plateforme de préinscription en ligne de l'Institut Supérieur de Technologie Avancée de Gagnoa, établissement d'enseignement supérieur privé de la région du Gôh.",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "Vite", "Django REST"],
    demo: "https://istag.ci",
    repo: "https://github.com/ThCluster/ISTAG",
  },
  {
    title: "WARIGNAN",
    context: "Projet personnel",
    description: "Conception d'une boutique en ligne dédiée à la vente de friperie.",
    tags: ["React.js", "Vite", "NestJS"],
    demo: "https://warignanfrontend.vercel.app/fouille",
    repo: "https://github.com/ThCluster/warignan",
  },
  {
    title: "SUKULU",
    context: "Projet d'école",
    description:
      "Gestion d'établissement : notes, bulletins, présences, portails enseignants / élèves / parents et paiements de scolarité.",
    tags: ["React.js", "Django REST", "PostgreSQL"],
    repo: "https://github.com/ThCluster/Sukulu",
  },
  {
    title: "LUMINA",
    context: "Projet d'école",
    description:
      "Boutique d'objets design avec un inventaire atomique qui garantit la cohérence de chaque achat.",
    tags: ["React.js", "Django REST", "MongoDB"],
    repo: "https://github.com/ThCluster/Lumina",
  },
  {
    title: "PlayceMarcory",
    context: "Projet d'école",
    description:
      "Plateforme web de gestion d'un supermarché. La logique métier est implémentée directement dans PostgreSQL : le front-end et le back-end s'appuient sur la base de données pour appliquer les règles de gestion.",
    tags: ["React.js", "Django REST", "PostgreSQL"],
    repo: "https://github.com/ThCluster/PlayceMarcory",
  },
  {
    title: "Clinique La Paix",
    context: "Projet d'école",
    description:
      "Pipeline automatisé de gestion documentaire pour une clinique de Yopougon qui reçoit chaque jour un volume important de documents.",
    tags: ["Python", "pandas", "Jupyter", "CSV", "HTML"],
    repo: "https://github.com/ThCluster/tp_clinique_yopougon",
  },
]

export type Experience = {
  period?: string;
  role: string;
  company: string;
  place: string;
  points: string[];
  logo?: string;
};

export const experiences: Experience[] = [
  {
    role: "Co-fondateur & Développeur Full-Stack",
    company: "Klata",
    place: "Startup · restitution des documents administratifs perdus",
    points: [
      "Co-fondation de Klata, plateforme qui aide à rendre leurs documents administratifs perdus à leurs propriétaires.",
      "Développement full-stack : React.js, TypeScript, Tailwind CSS et Vite côté front-end, Django REST et PostgreSQL côté back-end.",
    ],
  },
  {
    period: "2026 — présent",
    role: "Co-Responsable & Développeur",
    company: "AfriDigital",
    place: "Grand-Bassam",
    points: [
      "Sites et applications web sur mesure (Django REST Framework, React.js).",
      "Participation à la conception de la phase 1 du core central : une plateforme qui centralise les différentes applications, à la manière d'une passerelle API type Kong, avec un rôle plus étendu (TypeScript, Node.js).",
      "Conception d'un système automatisé d'alerte anonyme (QR Code → Tally → Make → Google Sheets → bip + SMS).",
    ],
  },
  {
    period: "2026",
    role: "Développeur Full-Stack",
    company: "Brobroli",
    logo: "/logos/afridigital.png", // mission via AfriDigital
    place: "Sous-traitance via AfriDigital · modules Marketplace et Livraison",
    points: [
      "Développement full-stack en TypeScript, Express et Prisma.",
      "Maintenance et ajout de nouvelles fonctionnalités sur la marketplace.",
      "Résolution d'une panne de paiement vieille de 7 mois et correction de 8 failles de sécurité.",
      "Mise en place de la répartition automatique des fonds et de la facturation PDF des marchands.",
    ],
  },
];

export type Education = { title: string; school: string; date: string; kind: "diplome" | "certif" };

export const education: Education[] = [
  { title: "Master Génie logiciel (hybride)", school: "IIT, Bassam VITIB", date: "En cours", kind: "diplome" },
  { title: "Licence en Sciences informatiques", school: "Groupe ITA Ingénierie SA", date: "2024", kind: "diplome" },
  { title: "BTS Informatique — Développeur d'applications", school: "Groupe YAL, Divo", date: "2023", kind: "diplome" },
  { title: "Certification Java — Dev web / Java Web + IA", school: "Groupe ITA Ingénierie", date: "Juillet 2024", kind: "certif" },
  { title: "Certification Développement web", school: "GoMyCode", date: "Juin 2024", kind: "certif" },
];
