// ===================================================
// TRIPS PAGE JS - AHMAD NOFAL (MAWASEM AL-BARAKA)
// ===================================================

const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const navClose = document.querySelector('.nav-close');
const navLinks = document.querySelectorAll('.main-nav a');
const yearElement = document.getElementById('year');
const topbarDatetime = document.getElementById('topbarDatetime');
const topbarGreeting = document.getElementById('topbarGreeting');
const topbarProgress = document.getElementById('topbarProgress');

// Update Topbar Datetime & Greeting
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

// Reading Progress Bar
const updateProgress = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  if (topbarProgress) topbarProgress.style.width = pct + '%';
};

// Footer current year
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Header scrolled state
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header?.classList.add('scrolled');
  } else {
    header?.classList.remove('scrolled');
  }
  updateProgress();
});

// Mobile Drawer Menu
const closeMobileMenu = () => {
  header?.classList.remove('nav-open');
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
  if (header && !header.contains(event.target) && header.classList.contains('nav-open')) {
    closeMobileMenu();
  }
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    closeMobileMenu();
  });
});

// Category Filter Functionality
const filterChips = document.querySelectorAll('.filter-chip');
const tripCards = document.querySelectorAll('.trip-card');
const countElement = document.getElementById('tripsCount');

if (filterChips.length && tripCards.length) {
  filterChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      filterChips.forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');

      const filterValue = chip.getAttribute('data-filter');
      let visibleCount = 0;

      tripCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      if (countElement) {
        countElement.textContent = `عرض ${visibleCount} من 6 رحلات`;
      }
    });
  });
}
