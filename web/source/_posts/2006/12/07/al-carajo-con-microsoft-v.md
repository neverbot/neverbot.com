---
title: Al carajo con Microsoft (V)
id: '259'
author: neverbot
tags:
  - Blog
  - Informática
date: 2006-12-07 22:56:50
---

> Atención: peñazo insufrible si no te interesa el tema, no me responsabilizo de los posibles traumas causados.

Algunas cosillas más que he ido haciendo según me encontraba con nuevas necesidades:

*   Para instalar el plug-in de java (odio java) y poder ver algunas cosillas más desde Firefox, y para poder usar varios tipos de descompresores, que no podía ver los archivos .rar (ambas cosas sacadas de la Guía de optimización de Ubuntu Edgy de [Maverick](http://cmaverick.wordpress.com/), que ya he enlazado con anterioridad):

```    
sudo aptitude install sun-java5-jre sun-java5-plugin
sudo update-alternatives --set java /usr/lib/jvm/java-1.5.0-sun/jre/bin/java 
sudo aptitude install rar unace unrar p7zip p7zip-full arj unzoo lha libarchive1 libarchive-tar-perl libarchive-zip-perl dpkg-dev
```
    
*   Para grabar dvds, directamente con instalar [GnomeBaker](http://en.wikipedia.org/wiki/GnomeBaker) me ha funcionado todo a la primera.
*   En Windows nunca me ha gustado [Azureus](http://azureus.sourceforge.net/) (de hecho no me gusta nada hecho en java, es un lenguaje que debió quedarse en las lavadoras), así que para la red BitTorrent usaba [BitComet](http://www.bitcomet.com/) junto con el BitComet Acceleration Patch, que me proporcionaba unas tasas de descarga bastante majas con muy poco gasto de recursos del sistema. En Ubuntu antes que probar Azureus he optado por [BitTornado](http://www.bittornado.com/) durante unos días. De hecho es el cliente original, y el que utilicé en Windows cuando empecé a descargar cosas de esta red, pero para qué engañarnos, ha quedado más que obsoleto. Una ventana por descarga, un interfaz muy pobre, sin tareas automatizadas... y seguía dejándome sin recursos en cuanto abría más de cinco descargas simultáneas.
    
    Así que después de esos días de prueba la realidad me ha golpeado duramente: es necesario utilizar Azureus. Tras instalarlo y configurarlo, al cabo de un rato de uso se cerró. Después de eso se cerraba inmediatamente cada vez que intentaba iniciarlo. Primero probé la típica solucion Windows (reinstalar java). No funcionó. Reinstalando el propio Azureus y borrando la configuración local ($HOME/.azureus/) tampoco, así que busqué en Google.
    
    El problema parece estar en que el Azureus incluído en los repositorios de Ubuntu podría tener un error. Me parece muy poco profesional y un error descomunal, pero es de suponer que se arreglará en breve. A través del gestor de bugs de [launchpad](https://launchpad.net/) llegué a [este hilo de conversación](https://launchpad.net/distros/ubuntu/+source/azureus/+bug/57875) donde hablaban del tema. La solución: borrar el paquete jar de Azureus instalado desde el repositorio Ubuntu (/usr/share/java/Azureus2.jar) y sustituirlo por el oficial descargado de [Sourceforge](http://prdownloads.sourceforge.net/azureus/Azureus_2.5.0.0_linux.tar.bz2?download).
    

Previously, on neverbot: [IV](https://neverbot.com/al-carajo-con-microsoft-iv/), [III](https://neverbot.com/al-carajo-con-microsoft-iii/), [II](https://neverbot.com/al-carajo-con-microsoft-ii/), [I](https://neverbot.com/al-carajo-con-microsoft-i/).