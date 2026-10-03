---
title: Hexagon
date: 2014-08-26
layout: project
summary: "A multilanguage mudlib: it adds an entity component system on top of the classic room inheritance, and a single instance can hold several games at once."
stack: LPC · DGD · MUD · ECS
status: Active
years: 2014 – today
role: Author
repo: https://github.com/maldorne/hexagon
play: https://maldorne.org/games/
screenshot: client.webp
logo: hexagon.webp
---

A *mudlib*: the layer of code that turns a bare [MUD](https://en.wikipedia.org/wiki/Multi-user_dungeon)
driver into a world with rooms, objects, combat and players.

## Where it comes from

Text-based online games split long ago into families defined by the technology
underneath them. The [LP family](https://en.wikipedia.org/wiki/LPMud) is written in
[LPC](https://en.wikipedia.org/wiki/LPC_(programming_language)), and over the
years several drivers appeared to run slightly different flavours of it:
LDMud, [MudOS](https://en.wikipedia.org/wiki/MudOS) and its descendant
[FluffOS](https://en.wikipedia.org/wiki/FluffOS), and
[DGD](https://github.com/dworkin/dgd).

Hexagon takes mudlib code written for MudOS, some of it decades old, and makes
it run on DGD, which is better engineered and carries a far less restrictive
licence. DGD is not aimed only at MUDs, so it offers less out of the box; this
library is the layer that fills the gap.

![The web client, connected to the Hexagon games hub](client.webp)

## Components next to inheritance

A classic LP mudlib builds its world through inheritance. Hexagon adds an
entity component system next to it rather than replacing it, so features can
be attached to objects as components while the inherited code keeps working
unchanged. Porting a game does not start with rewriting it.

## One instance, several games, two languages

A single running instance hosts more than one game, which is why the client
opens on a hub rather than on a world. The mudlib is translated, so the same
code can run an English game and a Spanish one.
