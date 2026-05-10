const projects = [
  {
    title: "Pocket Trader",
    type: "Mobile app",
    image: "assets/pockettrader.png",
    imageAlt: "Pocket Trader app artwork",
    description:
      "A companion trading app for Pokemon TCG Pocket that helps players discover cards and traders, post haves and wants, propose and manage trades, chat with traders, and build reputation within the community.",
    tags: ["Expo", "React Native", "Supabase", "Trading workflows"],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/joshuaxchen/Pocket-Trader",
      },
    ],
  },
];

function createProjectCard(project) {
  const article = document.createElement("article");
  article.className = "project-card";

  const media = document.createElement("div");
  media.className = "project-media";

  const image = document.createElement("img");
  image.src = project.image;
  image.alt = project.imageAlt;
  media.append(image);

  const content = document.createElement("div");
  content.className = "project-content";

  const kicker = document.createElement("p");
  kicker.className = "project-kicker";
  kicker.textContent = project.type;

  const title = document.createElement("h3");
  title.textContent = project.title;

  const description = document.createElement("p");
  description.textContent = project.description;

  const tags = document.createElement("ul");
  tags.className = "project-tags";
  project.tags.forEach((tag) => {
    const item = document.createElement("li");
    item.textContent = tag;
    tags.append(item);
  });

  const links = document.createElement("div");
  links.className = "project-links";
  project.links.forEach((link) => {
    const anchor = document.createElement("a");
    anchor.className = "project-link";
    anchor.href = link.href;
    anchor.textContent = link.label;
    links.append(anchor);
  });

  content.append(kicker, title, description, tags, links);
  article.append(media, content);

  return article;
}

function renderProjects() {
  const projectList = document.querySelector("#project-list");
  if (!projectList) return;

  projectList.replaceChildren(...projects.map(createProjectCard));
}

function setCurrentYear() {
  const year = document.querySelector("#year");
  if (!year) return;

  year.textContent = new Date().getFullYear();
}

renderProjects();
setCurrentYear();
