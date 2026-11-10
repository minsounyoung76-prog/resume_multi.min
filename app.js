// Native links and video controls remain usable without these enhancements.
const header = document.querySelector('.header');
const navLinks = [...document.querySelectorAll('nav a')];
const sections = navLinks.map(link => document.querySelector(link.hash));
let scheduled = false;

function updateNavigation() {
  // Allow a few pixels for fractional layout/scroll rounding at narrow widths.
  const offset = Math.ceil(header.getBoundingClientRect().height) + 24;
  let current = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= offset) current = section;
  }
  for (const link of navLinks) {
    if (link.hash === `#${current.id}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
  scheduled = false;
}
function scheduleNavigation() {
  if (!scheduled) { scheduled = true; requestAnimationFrame(updateNavigation); }
}
function updateHeader() {
  document.documentElement.style.setProperty('--header-offset', `${Math.ceil(header.getBoundingClientRect().height) + 20}px`);
  scheduleNavigation();
}
if ('ResizeObserver' in window) new ResizeObserver(updateHeader).observe(header);
window.addEventListener('resize', updateHeader);
window.addEventListener('scroll', scheduleNavigation, { passive: true });
window.addEventListener('hashchange', scheduleNavigation);
updateHeader();

const videos = [...document.querySelectorAll('video')];
for (const video of videos) {
  const card = video.closest('.video-card');
  const error = card.querySelector('.video-error');
  const retry = card.querySelector('.video-retry');
  const showError = () => { error.hidden = false; };
  video.addEventListener('error', showError);
  video.addEventListener('loadeddata', () => { error.hidden = true; });
  video.addEventListener('play', () => {
    for (const other of videos) if (other !== video) other.pause();
  });
  retry.addEventListener('click', async () => {
    error.hidden = true;
    video.load();
    try { await video.play(); video.focus(); }
    catch { showError(); }
  });
  // Metadata loading can fail before the module finishes loading.
  if (video.error) showError();
}
