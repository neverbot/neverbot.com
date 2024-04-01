---
title: Al carajo con Microsoft (III)
id: '238'
author: neverbot
tags:
  - blog
  - informática
date: 2006-11-27 19:48:52
---

> Atención: peñazo insufrible si no te interesa el tema, no me responsabilizo de los posibles traumas causados.

Dado que el post relacionado con el primer día en realidad era de ayer, y hoy ya no pienso hacer nada más, aquí va la continuación.

**Día 2**: Enchufo el disco duro externo USB y ¡oh, sorpresa! lo detecta y lo configura él solo. Hasta se me añade un acceso directo en el escritorio para facilitarlo todo. Sin preocupaciones por el tipo de sistema de ficheros ni nada por el estilo, pudiendo leer y escribir.

Este disco duro está destinado a películas, series y música. Le doy a un episodio de una serie a ver qué pasa. Me abre el reproductor de vídeo Totem. Está abriendo... ups, me dice que no tengo los códecs. A ver, que esto pasa en Windows también. Resulta que sólo están instalados por defecto los códecs completamente libres, y esos son los menos. Así que, igual que con las fuentes instalamos un poco de todo.

Buscando doy con [este post](http://cmaverick.wordpress.com/2006/10/29/edgy-optimizado/) de [Maverick](http://cmaverick.wordpress.com/), sobre personalización de la instalación de Ubuntu Edgy. Directamente un par de líneas que a mí me han venido genial:

```
sudo aptitude install msttcorefonts gsfonts-other t1-xfree86-nonfree ttf-dustin ttf-f500 ttf-isabella ttf-larabie-deco ttf-larabie-straight ttf-larabie-uncommon ttf-staypuft ttf-summersby ttf-ubuntu-title ttf-xfree86-nonfree xfonts-artwiz xfonts-intl-european gsfonts-x11 gsfonts ttf-bpg-georgian-fonts ttf-sjfonts
```

Con esto tenemos un par de trillones de fuentes para hacer los documentos un poco más bonitos.

```
sudo aptitude install totem-xine libxvidcore4 xvid4conf lame sox ffmpeg mjpegtools vorbis-tools mpg321 libxine1 libxine-main1 libxine-extracodecs gstreamer0.10-ffmpeg gstreamer0.10-gl gstreamer0.10-plugins-base gstreamer0.10-plugins-good gstreamer0.10-plugins-bad gstreamer0.10-plugins-bad-multiverse gstreamer0.10-plugins-ugly gstreamer0.10-plugins-ugly-multiverse gstreamer0.10-plugins-farsight gstreamer0.10-fluendo-mp3 gstreamer0.10-fluendo-mpegdemux gstreamer0.10-gnonlin gstreamer0.10-sdl faac faad alsa-oss libvcdinfo0
```

Y con esto otro par de trillones de códecs y utilidades varias de cara a la reproducción de audio/video. Por ahora me ha funcionado todo lo que he probado excepto un episodio de una serie que me pide el códec "Windows Media Video 9". No se quién habrá sido el anormal que ha codificado algo con ese códec, pero investigaré si se puede instalar algo similar... Y si no eMule proveerá de otra versión del episodio.

Mañana más.

**Actualización**: Problema solucionado instalando el paquete w32codecs. Gracias a [Maverick](http://cmaverick.wordpress.com/) que indicaba qué repositorio utilizar en los comentarios. Ya puedo ver todo lo que tengo guardado en el disco duro.
