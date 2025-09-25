export function activateDarkMode() {
  const currentTheme = localStorage.getItem('theme') || 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.body.classList.toggle('dark-mode', newTheme === 'dark');
  localStorage.setItem('theme', newTheme);
}

export function applySavedTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.classList.toggle('dark-mode', savedTheme === 'dark');
}
