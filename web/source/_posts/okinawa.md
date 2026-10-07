---
title: okinawa
date: 2025-05-04
layout: project
summary: "A small 3D engine in C++ and OpenGL, the heir of a JavaScript 2D engine a decade older. It is a library, not a framework: it draws the world and leaves the game to the application."
stack: C++ · OpenGL · xmake
status: Active
years: Since 2025
role: Author
repo: https://github.com/okinawa-dev/okinawa
docs: https://okinawa-dev.github.io/okinawa/
screenshot: card.webp
logo: okinawa.webp
rank: 100
kind: Game engine
---

A 3D engine in C++ on top of [OpenGL](https://www.opengl.org) and
[GLFW](https://www.glfw.org), built with [xmake](https://xmake.io) as a static
library that other projects consume from source. It takes its name, and a good
part of its shape, from [okinawa.js](/okinawa-js/), the 2D engine in JavaScript
that came ten years earlier.

## What it draws

A scene graph of objects that inherit their parent's transform, with items,
groups, billboards, instanced items and sprite sheets. Five cameras come with
it (fixed, inspection, spectator, third person, top down) and avatars with
pluggable controllers for moving a character on the ground or panning over it.

Lighting covers clustered lights, shadow maps and a skybox, and there is a
post-processing chain with bright-pass and blur stages. Meshes arrive as
Wavefront OBJ files, textures through stb, and both can be loaded in the
background while the frame keeps rendering. Culling is bounding sphere against
frustum.

On top of the world there is a GUI layer with text, images, a console and a
stats panel.

What it leaves to the application: collisions. The engine carries a minimal
kinematics model (velocity, acceleration, their rotational twins) and nothing
else; a collision volume is the game's business, and it should never be derived
from the triangles sent to the renderer.

## An engine an agent can look at

It can start an [MCP](https://modelcontextprotocol.io) server inside the
running process, listening on localhost. Through it an external agent can look
at the rendered frame, inject input and read telemetry, which makes it possible
to debug a visual problem without a human describing what is on screen. It is
compiled in by default in debug builds, out in release ones, and still has to
be switched on at runtime.

## What runs on it

The engine builds a library and a test suite, nothing else: the games and tools
live in their own repositories and pull it in as a dependency.

[![A city of several hundred blocks seen from above, with one building selected and panels showing its size and the frame rate](editor.webp)](editor.webp)

A level editor built on it, holding a city of 457 blocks at a steady 60 frames
per second, with one of them selected and spinning in its own preview window.
{.caption}

Of those, [a viewer for Doom's level files](/doom-tools/) was the first to use
the engine for anything real.
