---
title: Al carajo con Microsoft (II)
id: '237'
author: neverbot
tags:
  - blog
  - informática
date: 2006-11-27 17:39:28
---

> Atención: peñazo insufrible si no te interesa el tema, no me responsabilizo de los posibles traumas causados.

**Día 1**:

CD de Ubuntu 6.10 descargado (desktop-i386) en un ratito.

Instalación: dos particiones [NTFS](http://en.wikipedia.org/wiki/NTFS) de 20 GB cada una (la original para windows más una para datos en general) transformadas en una partición [ext3](http://en.wikipedia.org/wiki/Ext3) para el directorio raíz, una pequeña partición de [swap](http://en.wikipedia.org/wiki/Virtual_memory#Swapping_in_the_Linux_and_BSD_operating_systems) de unos 500 MB como apoyo a la memoria del sistema y otra partición ext3 de 20 GB más que ya veré con qué voy llenando (hda1, hda3 y hda2 respectivamente). Seleccionados los puntos de montaje de las particiones por defecto y añadidos hda2 en /media/hda2 y el disco [SATA](http://en.wikipedia.org/wiki/Serial_ATA) en /media/sda1. Tengo mis dudas sobre si ese hda2 está montado donde debe o no, pero parece que no se queja.

El resto de la instalación es la típica de cualquier sistema automatizado: zona horaria y fecha, usuario inicial y tipo de teclado. Nada más.

Es algo sorprendente que no te pida ningún dato para crear el usuario root (el administrador principal), pero como el usuario inicial es [sudoer](http://en.wikipedia.org/wiki/Sudo) por defecto, puedes realizar posteriormente cualquier acción ("sudo " para ejecutarlo con permisos de root o "sudo su" para convertirte en root, algo que no debería ser necesario).

Nada más arrancar el gestor de actualizaciones te avisa de que hay actualizaciones pendientes (la red funciona a la primera sin yo tocar nada, claro que tengo router y no sé si con un módem se quejaría). Dado que la distribución es bastante reciente apenas había 12 actualizaciones que se instalaron en un par de minutos. Calculo que en total la instalación duraría poco más de una hora, teniendo en cuenta que ya vienen instalados por defecto Gnome, Firefox, OpenOffice y un millar de cosas que aún no he podido probar.

Único problema encontrado: el de siempre, no podía poner la resolución de pantalla como tiene que ser porque no me dejaba escoger nada superior a 1024 x 768. Ya intuía lo que era pero como estoy asumiendo que soy un analfabeto digital lo busco en Google. Me da un par de resultados de [ubuntu-es](http://www.ubuntu-es.org/) y voy probando. Es lo de siempre, cambiar la configuración de las X para que en lugar de usar nv (por defecto) use el módulo nvidia. Intento la primera solución que encuentro y no noto ningún cambio. Intento la segunda solución y me cargo las X por editar el archivo de configuración (xorg.conf) a mano sin saber muy bien lo que estaba tocando. Reinicio ubuntu en modo "a prueba de fallos", recupero el backup del archivo de configuración y reinicio de nuevo con el mismo sistema que teníamos antes de empezar.

Vuelvo a buscar otra solución a ver si me había saltado algo y doy con la [solución final](http://www.ubuntu-es.org/index.php?q=node/438). "sudo dpkg-reconfigure xserver-xorg" y te sale un menú fantabuloso para editar el mismo archivo que yo estaba tocando pero con un poco de ayuda para no meter la pata. Hay que seleccionar el driver nvidia en la primera pantalla que sale y el resto se puede dejar por defecto. Yo aproveché para cambiar alguna cosa, sobretodo dejar como posibles las resoluciones más altas (1152 x 864 y 1280 x 960, que es la que tengo ahora mismo. Cualquier otro número no sigue la misma relación matemática que 800 x 600, así que no me seáis mendrugos), y creo que poco más. Tras eso, añadir nvidia al /etc/modules y ale. Ctrl+Alt+Delete para reiniciar las X y ¡tachán! Resolución máxima por defecto. Para una explicación más extendida, échale un vistazo al enlace, que para eso está.

Todo se me veía muy brillante y contrastado, y ya estaba pensando en ponerme a configurar algo cuando me dí cuenta de que, no se la razón, tenía el monitor con esos valores muy altos. Supongo que Windows me estaba mostrando todo demasiado poco saturado y lo subiría para algo. De todas formas está el "nvidia-settings" que abre un menú de configuración de los de toda la vida donde he activado antialiasing, anisotropic janderklander y demás pijadas que hacen que todo se vea un poco mejor.

Ahora mismo estoy escribiendo esto desde el nuevo sistema, así que todo parece funcionar perfectamente. Ya os iré contando nuevos progresos.

**Actualización**: Ups, segundo problema. Era obvio pero no me había dado cuenta. Esta web (y muchas otras) se ven... "raras". Algo lógico teniendo en cuenta que no se instalan por defecto las fuentes que los sistemas Windows suelen usar (Arial, Times New Roman, Verdana, etc). La solución [aquí](http://romochan.blogspot.com/2006/08/ttf-linux.html). Permitir que Ubuntu busque paquetes en el repositorio "universe", que incluye código y programas que no tienen por qué ser libres. Hay que descomentar las líneas donde indica el repositorio "universe" y añadirle también el "multiverse". Creo que los nombres son un poco pretenciosos, pero somos informáticos, es lo que hay. El paquete concreto que hay que instalar es "msttcorefonts". Si eres un talibán y no quieres que nada con el nombre de Microsoft "manche" tu equipo, no las instales. A mí como me da igual... Tardan un poco en descargarse, eso sí.