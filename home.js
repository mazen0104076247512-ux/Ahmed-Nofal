const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const navClose = document.querySelector('.nav-close');
const navLinks = document.querySelectorAll('.main-nav a');
const revealItems = document.querySelectorAll('.reveal');
const yearElement = document.getElementById('year');
const sections = document.querySelectorAll('section[id], footer[id]');
const topbarPageName = document.getElementById('topbarPageName');
const topbarDatetime = document.getElementById('topbarDatetime');
const topbarGreeting = document.getElementById('topbarGreeting');
const topbarProgress = document.getElementById('topbarProgress');

const pageNames = {
  'top': 'الرئيسية',
  'services': 'الخدمات',
  'about': 'من نحن',
  'contact': 'تواصل معنا'
};

const pageIcons = {
  'top': '<svg viewBox="0 0 24 24"><path d="M4 10.5L12 4l8 6.5V19a1 1 0 0 1-1 1h-4v-7H9v7H5a1 1 0 0 1-1-1v-8.5Z" /></svg>',
  'services': '<svg viewBox="0 0 24 24"><path d="M7 5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm1 6h8M8 9h8M8 15h6" /></svg>',
  'about': '<svg viewBox="0 0 24 24"><path d="M12 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-7 7a7 7 0 0 1 14 0" /></svg>',
  'contact': '<svg viewBox="0 0 24 24"><path d="M6.5 4.5h3l1.2 4.2-1.7 1.7A13 13 0 0 0 17.6 17l1.7-1.7 4.2 1.2v3a2 2 0 0 1-2 2A17 17 0 0 1 4.5 6.5a2 2 0 0 1 2-2Z" /></svg>'
};

const updateDatetime = () => {
  const now = new Date();
  const time = now.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });
  const date = now.toLocaleDateString('ar-EG', { weekday: 'long', day: 'numeric', month: 'long' });
  if (topbarDatetime) topbarDatetime.textContent = `${date} • ${time}`;
};

const updateGreeting = () => {
  const h = new Date().getHours();
  const g = h < 12 ? 'صباح الخير ☀️' : h < 17 ? 'مساء الخير 🌤️' : 'مساء النور 🌙';
  if (topbarGreeting) topbarGreeting.textContent = g;
};

updateDatetime();
updateGreeting();
setInterval(updateDatetime, 60000);

const updateProgress = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  if (topbarProgress) topbarProgress.style.width = pct + '%';
};

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealItems.forEach((item) => revealObserver.observe(item));

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  updateProgress();
});

const closeMobileMenu = () => {
  header.classList.remove('nav-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('nav-open');
};

if (menuToggle) {
  menuToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = header.classList.toggle('nav-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('nav-open', isOpen);
  });
}

if (navClose) {
  navClose.addEventListener('click', (event) => {
    event.stopPropagation();
    closeMobileMenu();
  });
}

document.addEventListener('click', (event) => {
  const isClickInsideHeader = header.contains(event.target);
  if (!isClickInsideHeader && header.classList.contains('nav-open')) {
    closeMobileMenu();
  }
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    closeMobileMenu();
  });
});

const setActiveNavLink = () => {
  let currentId = 'top';

  if (window.scrollY < 80) {
    currentId = 'top';
  } else {
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 160 && rect.bottom >= 160) {
        currentId = section.id;
      }
    });
  }

  navLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${currentId}`;
    link.classList.toggle('active', isActive);
  });

  if (topbarPageName) {
    topbarPageName.textContent = pageNames[currentId] || '';
  }
  const topbarPageIcon = document.getElementById('topbarPageIcon');
  if (topbarPageIcon) {
    topbarPageIcon.innerHTML = pageIcons[currentId] || pageIcons['top'];
  }
};

window.addEventListener('scroll', setActiveNavLink);
window.addEventListener('load', setActiveNavLink);
