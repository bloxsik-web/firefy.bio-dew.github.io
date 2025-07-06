document.addEventListener('DOMContentLoaded', function() {
  const preloader = document.getElementById('preloader');
  const mainContent = document.querySelector('.bio-card');

  if (mainContent) mainContent.style.display = 'none';

  setTimeout(() => {
    if (preloader) preloader.classList.add('hide');
    if (mainContent) mainContent.style.display = '';
    setTimeout(() => {
      if (preloader) preloader.style.display = 'none';
    }, 700);
  }, 1500);

  // Копирование Discord
  const discordBtn = document.querySelector('.discord-btn');
  const toast = document.getElementById('copy-toast');
  if (discordBtn && toast) {
    discordBtn.addEventListener('click', function() {
      navigator.clipboard.writeText('nezem1337').then(() => {
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
        }, 1500);
      });
    });
  }

  // Анимация трёх точек
  const dots = document.querySelector('.preloader-dots');
  if (dots) {
    let i = 0;
    setInterval(() => {
      dots.textContent = '.'.repeat((i++ % 3) + 1);
    }, 400);
  }
});
