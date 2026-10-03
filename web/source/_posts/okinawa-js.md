---
title: okinawa.js
date: 2014-02-08
layout: project
summary: A 2D game engine in plain JavaScript, with no runtime dependencies, that ended up powering dozens of small games on a programming platform for children and a handful of academic studies.
stack: JavaScript · HTML5 canvas
status: Idle
years: Since 2014
role: Author
repo: https://github.com/okinawa-dev/okinawa.js
demo: https://dev.neverbot.com/okinawa-asteroids/
screenshot: asteroids.webp
logo: okinawa.webp
---

A 2D engine written in plain [JavaScript](https://developer.mozilla.org/docs/Web/JavaScript),
drawing on an HTML5 `<canvas>` with the 2D context, and with **no runtime
dependencies at all**: webpack and babel build the bundle, and nothing else
ships with it.

## Where it was used

It stopped being a hobby project fairly early. Dozens of small serious games
on *pixie.es*, a programming learning platform for children, ran on it: the
teaching side used [Google Blockly](https://developers.google.com/blockly) for
the visual code blocks, and everything that moved on screen afterwards was
okinawa.js. The platform was later bought by *Sngular* and renamed *Sngular
Kids*.

![A pixie.es exercise: the blocks the child assembles on the left, and the level
they drive on the right](pixie.webp){.inset}

It also ran several serious games built for the Faculty of Psychology at
[UNED](https://www.uned.es), used as instruments in academic studies.

![One of the UNED games: a race on an athletics track, with the distance left
and the elapsed time on screen](uned.webp)

## What is in it

A scene graph with a hierarchy of items that can be positioned and rotated
relative to their parent, so a turret rotates with the tank it is bolted to.
Scenes carry their own background collection with parallax, their own input
controller and their own clock subscriptions.

Movement does not have to be written by hand frame by frame: *trackers* drive an
item along a bezier curve, a circle, a sine wave, or make it follow another
item. On top of that there is a particle system, a small GUI layer (text,
console, menus, windows), sprite and sound preloading, and CSS fonts rendered
once to images and only re-rendered when the text changes.

Input covers key subscriptions and real-time key state, combos of consecutive
or simultaneous keys, and basic touch controls.

What it deliberately does not have: no physics engine, no tilemaps, no entity
component system, no editor. Collisions are a radius per item and nothing more.

![A game of Asteroids: the ship, its particle trail, two shots in flight and the
asteroids it is shooting at](asteroids-frame.webp)

The screenshot is [the demo](https://dev.neverbot.com/okinawa-asteroids/) that
came with it, an Asteroids clone that exists to exercise the engine: the trail
is the particle system, the HUD is the bitmap font layer, and the explosions are
sprite strips.

## Afterwards

The engine is published on npm as `okinawa.js`. It gets no time from me these
days, but the ideas carried on: [okinawa](/okinawa/) takes them into 3D and
into C++, and is the one being worked on now.
