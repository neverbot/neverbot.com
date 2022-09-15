---
title: 'Plugin: Comment Timeout (III)'
id: '526'
author: neverbot
tags:
  - Neverbot
date: 2007-09-11 09:44:27
---

Estaba comentando en mi propia esta página y me he encontrado con esto.

> Comments for this post will be closed on 9 November 2007.

Es una frase incluida al activar el plugin Comment Timeout (ya os conté cosas [aquí](http://localhost:8000/neverbot/plugin-comment-timeout/) y un poco después [aquí](http://localhost:8000/miniblog/plugin-comment-timeout-ii/)). Pero anda que me avisáis de que salen textos en el idioma hereje de la pérfida Albión. Argh, cómo os odio.

A ver si tengo un rato y lo traduzco, que no sé dónde está.

**Actualización**: He encontrado ese rato y he traducido las frases que he encontrado en inglés. No sé si lo habré hecho con todas o se me habrá escapado alguna, ya lo iré viendo con el tiempo. Any help will be guay.

**Actualización II**: Si alguno de vosotros es un ser humano con un mínimo de curiosidad por estas cosas (que lo dudo) habrá visto que la solución por la que he optado devuelve la fecha numérica (estilo 9/11/2007) en lugar de en texto (9 de Noviembre del 2007). La [función date()](http://es.php.net/date) en php me devuelve esos textos en inglés (November). ¿Algún alma caritativa que sepa decirme alguna función de [Wordpress](http://wordpress.org/) que devuelva los nombres en castellano? Buscaré por el codex de Wordpress a ver qué pone.

**Actualización III**: El archivo que traduce al castellano (es\_ES.mo creo recordar) se supone que debería "parchear" de algún modo el wp-includes/locales.php. Asumo que sólo afecta a las funciones originales de wordpress (the\_date, the\_time, etc.) y como desconozco cómo hacer que las funciones originales de php me lo devuelvan en castellano... psé. Así se quedará por ahora que no tengo ganas de mirar más.