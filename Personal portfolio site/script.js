/* =====================================================================
   Ye file resumeData ko padh kar HTML banati hai, aur scroll animations
   + mobile menu handle karti hai. Isay edit karne ki zaroorat nahi —
   sirf resume-data.js edit karein.
   ===================================================================== */

// ---------- Basic info ----------
document.getElementById("hero-name").textContent = resumeData.name;
document.getElementById("hero-role").textContent = resumeData.role;
document.getElementById("hero-tagline").textContent = resumeData.tagline;
document.getElementById("footer-name").textContent = resumeData.name;
document.getElementById("about-text").textContent = resumeData.about;
document.getElementById("year").textContent = new Date().getFullYear();

// ---------- Contact links ----------
function renderContact() {
  const c = resumeData.contact;
  document.getElementById("contact-links").innerHTML = `
    <a href="mailto:${c.email}"><span class="cl-label">Email</span>${c.email}</a>
    <a href="${c.github}" target="_blank" rel="noopener"><span class="cl-label">GitHub</span>${c.github.replace('https://','')}</a>
    <a href="${c.linkedin}" target="_blank" rel="noopener"><span class="cl-label">LinkedIn</span>${c.linkedin.replace('https://','')}</a>
  `;
}

// ---------- Timeline ----------
function renderTimeline() {
  document.getElementById("timeline").innerHTML = resumeData.timeline.map(item => `
    <div class="timeline-item reveal">
      <p class="timeline-type">${item.type}</p>
      <h3>${item.title}</h3>
      <p class="timeline-place">${item.place} · ${item.duration}</p>
      ${item.desc ? `<p class="timeline-desc">${item.desc}</p>` : ""}
    </div>
  `).join("");
}

// ---------- Projects (with category filter tabs) ----------
let activeCategory = "All";

function renderFilterTabs() {
  const categories = ["All", ...new Set(resumeData.projects.map(p => p.category))];
  document.getElementById("filter-tabs").innerHTML = categories.map(cat => `
    <button class="filter-tab ${cat === activeCategory ? "active" : ""}" data-cat="${cat}">${cat}</button>
  `).join("");

  document.querySelectorAll(".filter-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.cat;
      renderFilterTabs();
      renderProjects();
    });
  });
}

function renderProjects() {
  const list = activeCategory === "All"
    ? resumeData.projects
    : resumeData.projects.filter(p => p.category === activeCategory);

  document.getElementById("projects-subtitle").textContent =
    `${resumeData.projects.length} projects across DecodeLabs' Robotics & AI internship tracks, plus personal work.`;

  document.getElementById("project-grid").innerHTML = list.map(p => `
    <div class="project-card reveal visible">
      <span class="project-badge">${p.category}</span>
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <div class="tags">
        ${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}
      </div>
      <div class="links">
        ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener">Demo →</a>` : ""}
        <a href="${p.code}" target="_blank" rel="noopener">Code →</a>
      </div>
    </div>
  `).join("");
}

// ---------- Skills (grouped) ----------
function renderSkills() {
  document.getElementById("skills-groups").innerHTML = resumeData.skillGroups.map(g => `
    <div class="skill-group reveal">
      <h4>${g.category}</h4>
      <div class="skill-pills">
        ${g.items.map(i => `<span class="skill-pill">${i}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

// ---------- Certifications & Languages ----------
function renderCertsLangs() {
  document.getElementById("cert-list").innerHTML = `
    <h4>Certifications</h4>
    ${resumeData.certifications.map(c => `
      <div class="cert-item">
        <p class="cert-name">${c.name}</p>
        <p class="cert-meta">${c.issuer} · ${c.date}</p>
      </div>
    `).join("")}
  `;

  document.getElementById("lang-list").innerHTML = `
    <h4>Languages</h4>
    ${resumeData.languages.map(l => `
      <div class="lang-item">
        <span class="lang-name">${l.name}</span>
        <span class="lang-level">${l.level}</span>
      </div>
    `).join("")}
  `;
}

// ---------- Hero slideshow ----------
const heroIcons = {
  arm: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="6" cy="19" r="2"/><path d="M6 17V11l6-3 6 4v3"/><circle cx="18" cy="15" r="1.6"/><circle cx="12" cy="8" r="1.6"/></svg>`,
  brain: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 3a3 3 0 0 0-3 3v1a3 3 0 0 0-1 5.8V15a3 3 0 0 0 3 3h1"/><path d="M15 3a3 3 0 0 1 3 3v1a3 3 0 0 1 1 5.8V15a3 3 0 0 1-3 3h-1"/><path d="M9 3h6v16a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2Z"/></svg>`,
  gear: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3.2"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg>`,
  code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m8 6-5 6 5 6M16 6l5 6-5 6M13 4l-2 16"/></svg>`
};

function renderHeroSlideshow() {
  const track = document.getElementById("slideshow-track");
  const dots = document.getElementById("slideshow-dots");
  if (!track) return;

  track.innerHTML = resumeData.heroSlides.map((s, i) => `
    <div class="slide ${i === 0 ? "active" : ""}" data-index="${i}">
      <div class="slide-icon">${heroIcons[s.icon] || ""}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    </div>
  `).join("");

  dots.innerHTML = resumeData.heroSlides.map((_, i) => `
    <button class="dot ${i === 0 ? "active" : ""}" data-index="${i}" aria-label="Slide ${i + 1}"></button>
  `).join("");

  let current = 0;
  const slides = track.querySelectorAll(".slide");
  const dotEls = dots.querySelectorAll(".dot");

  function goTo(index) {
    slides[current].classList.remove("active");
    dotEls[current].classList.remove("active");
    current = index;
    slides[current].classList.add("active");
    dotEls[current].classList.add("active");
  }

  let timer = setInterval(() => goTo((current + 1) % slides.length), 3200);

  dotEls.forEach(dot => {
    dot.addEventListener("click", () => {
      clearInterval(timer);
      goTo(parseInt(dot.dataset.index));
      timer = setInterval(() => goTo((current + 1) % slides.length), 3200);
    });
  });
}

// ---------- Run renders ----------
renderHeroSlideshow();
renderContact();
renderTimeline();
renderFilterTabs();
renderProjects();
renderSkills();
renderCertsLangs();

// ---------- Scroll reveal animation ----------
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// ---------- Mobile nav toggle ----------
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");
navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
navLinks.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => navLinks.classList.remove("open"));
});

// ---------- Smooth scroll ----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});