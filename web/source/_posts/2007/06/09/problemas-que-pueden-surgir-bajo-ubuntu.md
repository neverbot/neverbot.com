---
title: Problemas que pueden surgir bajo Ubuntu
id: '474'
author: neverbot
tags:
  - informática
date: 2007-06-09 19:06:08
---

> **Atención**: Peñazo insufrible para todo aquel a quien no le interese.

Ya lo he solucionado (definitivamente, espero), aunque ha estado un tiempo haciendo que me comiera la cabeza. Con las últimas actualizaciones de los kernels de Linux, se ha cambiado la forma en la que se tratan los discos duros IDE, pasando a tirar todos de libata si no he entendido mal la documentación que he leído. Eso hace que al iniciar el sistema la nomenclatura interna de los discos duros pueda cambiar, como de hecho me ocurrió a mí en varias ocasiones, ya que /dev/hda pasaba a ser /dev/sdb por ejemplo, y era necesario reescribir los archivos de configuración necesarios para que todo supiera dónde estaban los discos duros (sólo /etc/fstab en mi caso). Quizá a muchos no les afecte, yo tengo una combinación de discos duros IDE y SATA y quizá por eso el sistema se volvía un poco loco y alguno de los discos dejaba de existir.

Al principio pense que había sido algún error pero no tuve tiempo de mirar nada más. Cambie la tabla fstab y volví a montar todas las unidades. Perfecto. Un tiempo después (en la siguiente actualización, creo), el disco hda volvió a ser hda, con lo que tuve que cambiarlo de nuevo. Pensé que realmente lo que había sucedido es que el error se había solucionado de algún modo y así tenía una tarea pendiente menos.

Pero hoy ha vuelto a ser sdb, y ya no podía seguir con estas tonterías, así que he buscado información y lo he arreglado. Por si acaso vuelve a cambiar, la forma de solucionarlo definitivamente es no identificar a los discos duros por el nombre del dispositivo (/dev/loquesea), sino por su UUID, que podéis encontrar en el menú Sistema/Preferencias/Información del Hardware y buscando la pestaña de datos "Avanzados" de los discos duros entre la lista de dispositivos. Igualmente, las unidades de cd/dvd también cambiaron su nombre. Estas pueden identificarse con los enlaces simbólicos /dev/cdrom y /dev/cdrw por ejemplo (esos son en mi caso), así que puede solucionarse con echarle un vistazo a lo que hay en /dev.

Al menos queda apuntado por si alguien encuentra este post buscando en Google.
