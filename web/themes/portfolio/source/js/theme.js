(function () {
  var root = document.documentElement;

  function label(theme) {
    var button = document.querySelector('[data-theme-toggle]');
    if (!button) return;
    var next = theme === 'dark' ? 'light' : 'dark';
    button.setAttribute('aria-label', 'Switch to ' + next + ' mode');
  }

  function show(theme) {
    root.setAttribute('data-theme', theme);
    var meta = document.querySelector('meta[name="color-scheme"]');
    if (meta) meta.content = theme;
    label(theme);
  }

  function apply(theme) {
    show(theme);
    try {
      localStorage.setItem('theme', theme);
    } catch (error) {
      // private browsing, or storage disabled: the choice just does not persist
    }
  }

  window.addEventListener('storage', function (event) {
    if (event.key !== 'theme') return;
    show(event.newValue === 'dark' ? 'dark' : 'light');
  });

  label(root.getAttribute('data-theme') || 'light');

  document.addEventListener('click', function (event) {
    var button = event.target.closest('[data-theme-toggle]');
    if (!button) return;
    apply(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });
})();
