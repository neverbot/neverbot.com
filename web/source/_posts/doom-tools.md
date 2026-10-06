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

## Micro-tools

The other two are small on purpose. They exist because looking at one level is a
different problem from looking at a thousand of them, which is what a collection
of these files turns into.

**[wadconvert](https://github.com/neverbot/wadconvert)** walks the archive's
directory and pulls out what makes a level a level: the vertices, the lines
between them, the sides of those lines, the sectors they enclose and the things
placed inside. It writes that four ways, a compact JSON and a verbose one with
the names spelled out, and the same pair in a small text format of its own.
Compact when a thousand levels have to fit somewhere, verbose when a person has
to read one. Once a level is JSON it can be measured, compared and queried with
ordinary tools rather than with a reader for a format from 1993.

**[waddup](https://github.com/neverbot/waddup)** answers the question that comes
up as soon as the collection is large: which of these are the same file twice.
They accumulate, the same level arrives under two names, and counting anything
is wrong until the duplicates are gone.
