(function () {
  var root = document.documentElement;

  function label(theme) {
    var button = document.querySelector('[data-theme-toggle]');
    if (!button) return;
    var next = theme === 'dark' ? 'light' : 'dark';
    button.textContent = next === 'dark' ? 'Dark' : 'Light';
    button.setAttribute('aria-label', 'Switch to ' + next + ' mode');
  }

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch (error) {
      // private browsing, or storage disabled: the choice just does not persist
    }
    label(theme);
  }

  label(root.getAttribute('data-theme') || 'light');

  document.addEventListener('click', function (event) {
    var button = event.target.closest('[data-theme-toggle]');
    if (!button) return;
    apply(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });
})();
