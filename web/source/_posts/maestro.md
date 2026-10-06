---
title: Maestro
date: 2026-08-31
layout: project
summary: "A workspace where game designers and their agents build the design of a game together. It holds the design, never a running game: no live instances, no players, no telemetry."
stack: Go · PostgreSQL · MCP · LLMs
status: Active
years: Since 2026
role: Author
repo: https://github.com/neverbot/maestro
docs: https://neverbot.github.io/maestro/
screenshot: card.webp
---

A work in progress, under development right now as part of my PhD.

A game grows past the point where one person can hold it in their head. Four
hundred missions, a progression nobody can verify by eye, a zone somebody
renamed last week. Maestro is where that design lives, and it answers the
questions that cannot be answered by reading: what is unreachable, what depends
on itself, what nothing points at.

## It knows nothing about games

There is no mission table, no zone table, no character table. A game declares
its own vocabulary out of four primitives: a kind of thing, an instance of that
kind, a kind of directed edge, and an edge. An MMORPG, a racing game and a
metroidvania all fit without a line of new code.

[![The catalogue of a game: its declared entity types with their counts, and the relation types that connect them](overview.webp)](overview.webp)

A real game in it, with 686 entities and 2,682 relations. Nothing on the left is
built into Maestro: skills, deities, guilds and realms are vocabulary this
particular game declared for itself.
{.caption}

The edges carry their own fields, which is the part that earns the model. In a
metroidvania, whether a door swings both ways belongs to the door, not to either
of the rooms it joins, so `is_one_way` is a declared field on the relation type
and is checked on every write.

## Questions worth asking

[![An analysis run reporting that everything is reachable, with the number of starting points, entities and connections it followed](analysis.webp)](analysis.webp)

A reachability pass over that same game: 247 starting points, 686 of 686
entities reached, 34,090 connections followed, and a line naming how each kind
of edge was treated.
{.caption}

Beside reachability there are prerequisite cycles, orphans, and routes: the
claim that a particular path through the game can actually be walked, written
down and then checked on demand. A saved view is a query plus a layout, so *the
quests a Mage can reach between level 20 and 30, coloured by zone* is something
you ask for rather than something you request as a feature. Every diagram also
carries a text twin that gives the same answer to a reader who cannot see it.

## Two kinds of hands

People work in the browser, agents work over MCP, and both hit the same data.
Every tool is mirrored in REST, and the instance serves its agents a skill
bundle, so one arrives already knowing how to declare types and seed a few
hundred entities without being walked through it. One token is one game.

Most of the writing is an agent's job, but three things are edited where they
are read: a name, a set of field values, and the body of a document. Each save
states the version it was read at, so one landing on top of somebody else's is
shown as a conflict with both values named, rather than quietly winning.
