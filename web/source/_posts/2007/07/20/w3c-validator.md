---
title: W3C Validator
id: '494'
author: neverbot
tags:
  - informática
  - internet
  - neverbot
date: 2007-07-20 16:24:22
---

He aprovechado, ya que hoy estaba en plan programador con la web, y que he añadido algún plugin y he retocado varias cosas del theme de wordpress que hacen que la página generada sea distinta, y le he dado una pasado al [validador automático del w3c](http://validator.w3.org/).

Ahora mismo la portada me [sigue dando 13 12 errores](http://validator.w3.org/check?uri=www.neverbot.com) (y eso con XHTML Transitional, si pongo Strict prefiero no preguntar... lo he comprobado y daría 21, pero eso es otro tema). Desgraciadamente creo que esos ya no son culpa mía y no puedo solucionarlos.

Una parte son culpa de Wordpress; en algún lugar me genera etiquetas de cierre de párrafo que no tienen su correspondiente etiqueta de apertura. No pasa a menudo pero ya lo he visto varias veces. Supongo que es culpa del editor visual que en ocasiones se vuelve medio loco.

Otra parte son de los mini-widgets añadidos de otras compañías, como el de statcounter para contabilizar las visitas, que hay que copiarlo tal cual viene pero no es 100% compatible con el w3c. Mala suerte.

Y los restantes son por los videos incluidos, que utilizan la etiqueta embed y sus atributos cuando esta etiqueta no existe realmente en XHTML 1.0 por lo que he visto.

Como contra estas cosas no puedo hacer magia, se va a quedar con los errores que genera hasta que los respectivos responsables de cada cosa lo vayan solucionando. Habrá que tener paciencia, creo.

**Nota**: Pero oye, que al principio tenía 25 errores y algo es algo. Con cada actualización mía se me habían ido colando algunas cosas, y así seguían desde la última vez que lo comprobé.