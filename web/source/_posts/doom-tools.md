---
title: Doom tools
date: 2025-04-30
layout: project
summary: "Three small C++ tools for the files Doom keeps its levels in: one that draws a map in 3D, one that turns a map into JSON, and one that finds the duplicates in a folder full of them."
stack: C++ · OpenGL
status: Idle
years: Since 2025
role: Author
screenshot: card.webp
---

Doom shipped its maps, textures, sounds and sprites inside a single archive
called a WAD, and more than thirty years later people are still making them. The
format is simple enough to read and awkward enough to be interesting: a map is
not a mesh but a set of flat lines, the sectors between them, and the heights
each sector claims for its floor and ceiling.

These are three tools for poking at that.

## [wadviewer](https://github.com/neverbot/wadviewer)

Loads a WAD and draws its level in 3D, with the original textures and a camera
you can fly through it.

[![A Doom level rendered in 3D with its original wall and floor textures](wadviewer.webp)](wadviewer.webp)

The geometry rebuilt from the file's lines and sectors, textured and lit.
{.caption}

Almost no level people share is self-contained. The file holds the geometry and
little else, and the texture names inside it point at the base game's own
archive, so opening one on its own renders it entirely white: every name
resolves to nothing. The viewer loads both, the base first and the level on top,
and settles the names the way Doom itself did. Whatever the later file defines
wins, and anything it leaves out falls through to the base.

It is also the first real application of [okinawa](/okinawa/), which is a good
way to find out which parts of an engine you actually got right.

## [wadconvert](https://github.com/neverbot/wadconvert)

Reads the same files and writes JSON: the vertices, the lines, the sides, the
sectors and the things placed in them. Once a level is JSON it can be measured,
diffed and queried with ordinary tools instead of a 1993 file format reader.

## [waddup](https://github.com/neverbot/waddup)

The smallest of the three, and the one that came from an actual annoyance:
collections of these files grow by accretion, the same level arrives twice under
different names, and this says which ones are duplicates.
