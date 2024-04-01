---
title: Detalles pendientes con mi maravilloso ubuntu
id: '425'
author: neverbot
tags:
  - informática
date: 2007-05-06 17:07:01
---

Aprovechando que tiene versión nueva, la 7.04 (del día 19 del mes pasado, si no recuerdo mal).

La [barra de tareas de Google](http://toolbar.google.com/), que es algo que suelo utilizar bastante (aunque sea para ver el PageRank de la página en la que estoy, resaltar palabras, o facilitar lo de "buscar en el sitio" o "buscar imágenes"), no me funcionaba cuando intentaba instalarla como plug-in de [Firefox](http://www.mozilla-europe.org/es/products/firefox/) bajo [Ubuntu](http://www.ubuntu.com/) (vete a saber por qué, algún problema de cómo estaba compilado algo). Ahora ya funciona, y la instalación es cuestión de dos clicks y reiniciar el navegador.

Y por fin me acordé de configurar el ratón, que lo tenía con algunos botones inútiles (los de página anterior y posterior). Era una tontería pero nunca encontraba el momento: es cuestión de cambiar el fichero `xorg.conf` (`/etc/X11/xorg.conf`) y añadir las líneas

```
Option         "Buttons" "7"
Option         "ButtonMapping" "1 2 3 6 7"
```

En la sección `InputDevice` correspondiente al ratón.

No se si me queda algo pendiente... yo creo que el dibujado de las fuentes dentro de Firefox sigue estando mal, y sigo sin saber como solucionarlo. Y los iconos de las barras de tareas en OpenOffice son demasiado grandes y tiene que haber alguna forma de reducirlos, pero no encuentro la opción. Y como curiosidad... no encuentro ninguna aplicación para reproducir archivos en formato midi... es bastante sorprendente, pero lo único que he encontrado en el repositorio es una aplicación KDE y no voy a instalarme todo lo que requiere únicamente para un midi.

Seguiré investigando, los meses que llevo desde que abandoné WinXP siguen diciéndome que no me he equivocado en lo más mínimo.
