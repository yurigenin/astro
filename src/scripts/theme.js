document.addEventListener('astro:page-load', () => {
  const theme = (() => {
  if (typeof localStorage !== 'undefined') {
    const localTheme = localStorage.getItem('theme');

    if (localTheme) {
      return localTheme;
    }
  }
   
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  })();

  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  }

  window.localStorage.setItem('theme', theme);

  const handleToggleClick = () => {
    const element = document.documentElement;
    
    element.classList.toggle('dark');

    localStorage.setItem('theme', element.classList.contains('dark') ? 'dark' : 'light');
  }

  document.getElementById('themeToggle').addEventListener('click', handleToggleClick);
});

document.addEventListener('astro:after-swap', () => {
  document.documentElement.classList.add(localStorage.theme ?? 'light');
});