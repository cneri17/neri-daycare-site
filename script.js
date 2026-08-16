document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  const cta = document.querySelector('.nav-cta');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      if (cta) cta.classList.toggle('open');
    });
  }

  document.querySelectorAll('.email-link').forEach((el) => {
    const user = el.dataset.user;
    const domain = el.dataset.domain;
    if (!user || !domain) return;
    const address = `${user}@${domain}`;
    const link = document.createElement('a');
    link.href = `mailto:${address}`;
    link.textContent = address;
    el.replaceWith(link);
  });
});
