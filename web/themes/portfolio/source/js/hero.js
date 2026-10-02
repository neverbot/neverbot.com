(function () {
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduced.matches) return;

  var role = document.querySelector('.intro-role-value');
  var caret = document.querySelector('.intro-caret');
  var portrait = document.querySelector('.intro-portrait');

  if (role) {
    var roles;
    try {
      roles = JSON.parse(role.getAttribute('data-roles'));
    } catch (error) {
      roles = null;
    }

    if (roles && roles.length > 1) {
      var index = 0;
      var text = roles[0];

      var tick = function (erasing) {
        if (caret) caret.classList.add('is-typing');

        if (erasing) {
          text = text.slice(0, -1);
          role.textContent = text;
          if (text.length) return setTimeout(function () { tick(true); }, 28 + Math.random() * 26);
          index = (index + 1) % roles.length;
          return setTimeout(function () { tick(false); }, 320);
        }

        var target = roles[index];
        text = target.slice(0, text.length + 1);
        role.textContent = text;
        if (text.length < target.length) return setTimeout(function () { tick(false); }, 55 + Math.random() * 55);
        if (caret) caret.classList.remove('is-typing');
        return setTimeout(function () { tick(true); }, 3200);
      };

      setTimeout(function () { tick(true); }, 2600);
    }
  }

  if (portrait) {
    var total = parseInt(portrait.getAttribute('data-avatars'), 10) || 0;
    var image = portrait.querySelector('img');
    if (total > 1 && image) {
      var order = [];
      for (var i = 2; i <= total; i++) order.push(i);
      for (var j = order.length - 1; j > 0; j--) {
        var k = Math.floor(Math.random() * (j + 1));
        var swap = order[j];
        order[j] = order[k];
        order[k] = swap;
      }

      var at = 0;
      var base = image.getAttribute('src').replace(/01\.webp$/, '');

      setInterval(function () {
        var n = order[at % order.length];
        at++;
        var pad = n < 10 ? '0' + n : String(n);
        var next = new Image();
        next.onload = function () {
          image.style.opacity = '0';
          setTimeout(function () {
            image.src = base + pad + '.webp';
            image.srcset = base + pad + '.webp 320w, ' + base + pad + '@2x.webp 640w';
            image.style.opacity = '';
          }, 320);
        };
        next.src = base + pad + '.webp';
      }, 7000);
    }
  }
})();
