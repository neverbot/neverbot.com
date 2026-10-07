---
title: Hexagon
date: 2014-08-26
layout: project
summary: "A multilanguage mudlib: it adds an entity component system on top of the classic room inheritance, and a single instance can host several persistent online text games at once."
stack: LPC · DGD · MUD · ECS
status: Active
years: Since 2014
role: Author
repo: https://github.com/maldorne/hexagon
play: https://maldorne.org/games/
screenshot: client.webp
logo: hexagon.webp
rank: 140
kind: Library
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

## Features

A classic LP mudlib builds its world through inheritance. Hexagon adds an
entity component system next to it rather than replacing it, so features can
be attached to objects as components while the inherited code keeps working
unchanged. Porting a game does not start with rewriting it.

The point of that split is that it keeps the data apart from the behaviour. The
component holds its own state, which travels inside the save file of whatever
carries it, and the code that gives that state meaning lives in the component
itself. A room becomes a shop, a forge, a farm or a temple by attaching one from
inside the game, standing in the room, with no file edited. Content is added and
changed by playing, not by programming.

The inhabitants are built the same way, which is what makes a town read as one.
Each has a name and a surname, taken from a family that records its spouses, its
parents and its dead, and whose descent, who gives the surname, is a decision of
the culture rather than of the engine. They hold a job the settlement offers,
work it at a particular place and have a house to come back to, and a timetable
says which of the two the hour calls for. They walk there room by room instead of
appearing, so the streets have people crossing them on their way somewhere.

## One instance, several games, two languages

These are persistent online text games: a world the server keeps running
whether or not anybody is connected, described in prose and played by typing
rather than by looking. A single running instance hosts more than one of them,
which is why the client opens on a hub rather than on a world. The mudlib is
translated, so the same code can run an English game and a Spanish one.
