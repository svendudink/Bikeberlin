document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const links = document.querySelectorAll('nav a');

  function showSection(hash) {
    sections.forEach(sec => {
      sec.style.display = sec.id === hash ? 'block' : 'none';
    });
  }

  links.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const target = link.getAttribute('href').substring(1);
      showSection(target);
      history.pushState(null, '', '#' + target);
    });
  });

  const initialHash = window.location.hash.substring(1) || 'tours';
  showSection(initialHash);
});
