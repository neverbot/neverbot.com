---
title: Direcciones (URL) amigables (o human-readable al menos)
id: '252'
author: neverbot
tags:
  - Blog
  - Internet
date: 2006-11-30 16:42:31
---

Aquí, igual que en muchos otros blogs del mundo, intento que todos los enlaces internet de la web sean "amigables al usuario" si es que tal término se puede utilizar. Casi siempre son enlaces del tipo:

> www.miweb.com/archivo/categoría/nombre-del-post

o algo similar. No es necesario ni entrar a través de dicho enlace para saber de qué va lo que vamos a ver.

Por defecto la mayor parte de [CMSs](http://en.wikipedia.org/wiki/Content_management_system) (gestores de páginas, blogs, etc) crean los enlaces permanentes con un código o ID relativo al post:

> www.miweb.com/?post=número

Hay que reconocer que, de cara a la administración interna del sistema (administración automática por parte del propio programa, quiero decir) todo es mucho más fácil con una ID, nunca hay IDs repetidas mientras que el texto plano sí puede estarlo: puedes ponerle el mismo título a dos posts en un blog y eso debe ser comprobado porque, si no, el primero dejaría de ser accesible para siempre jamás.

Hoy he descubierto una especie de compromiso intermedio buscando en las páginas de [www.tv.com](http://www.tv.com/): una de las "partes" del path que se indica en la dirección en realidad no vale para nada. Puedes escribir lo que quieras que es ignorado. Pero cuando la dirección es generada por la propia web te añade ahí el título de la serie que estés viendo. Me explico. Este es el enlace genérico dentro de dicha web:

> [http://www.tv.com/show/194/summary.html](http://www.tv.com/show/194/summary.html)

Te lleva al sumario de la serie número 194 en la base de datos de tv.com (que es 5 en familia). Pero el caso es que podemos incluir un nivel más:

> [http://www.tv.com/party-of-five/show/194/summary.html](http://www.tv.com/party-of-five/show/194/summary.html)

que es como nos da los enlaces automáticamente el servidor de tv.com. Ahora bien, esto podemos cambiarlo por lo que queramos que no influye:

> [http://www.tv.com/5-en-familia/show/194/summary.html](http://www.tv.com/5-en-familia/show/194/summary.html) [http://www.tv.com/neverbot-la-serie/show/194/summary.html](http://www.tv.com/neverbot-la-serie/show/194/summary.html)

No sirve para nada de cara al procesamiento interno en el servidor, pero ayuda al usuario a saber hacia dónde está yendo. Y digo yo, ¿no podrían hacer lo mismo en otro millón de páginas web en las que los enlaces "amigables al usuario" realmente serían útiles? Tengo que mandarle este post al menos a un par de personas que me vienen a la cabeza ahora mismo...