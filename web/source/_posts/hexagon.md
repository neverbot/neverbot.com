---
title: Hexagon
date: 2023-01-01
layout: project
summary: A MUD engine written from scratch, with an entity component system instead of the classic room inheritance.
stack: C++ · ECS
status: Active
years: 2023 – today
role: Author
repo: https://github.com/maldorne
demo: https://maldorne.org
---

Placeholder text while we settle the design. Replace with the real case study:
what the problem was, which decisions were taken, and what was learned.

## The problem

A classic MUD room is a monolithic object, and everything is solved by
inheritance until the hierarchy collapses under its own weight.

## The approach

Locations as containers, features as components attached to them.
