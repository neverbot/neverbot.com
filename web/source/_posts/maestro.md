---
title: Maestro
date: 2026-08-31
layout: project
summary: "A workspace where game designers and their AI agents build the design of a game together. It holds the design, never a running game: no live instances, no players, no telemetry."
stack: Go · PostgreSQL · MCP · LLMs
status: Active
years: Since 2026
role: Author
repo: https://github.com/neverbot/maestro
docs: https://neverbot.github.io/maestro/
screenshot: card.webp
rank: 30
kind: Web app
---

A work in progress, under development right now as part of my PhD.

A game grows past the point where one person can hold it in their head. Four
hundred missions, a progression nobody can verify by eye, a zone somebody
renamed last week. Maestro is where that design lives, and it answers the
questions that cannot be answered by reading: what is unreachable, what depends
on itself, what nothing points at.

## It knows nothing about games

There is no mission table, no zone table, no character table. A game declares
its own vocabulary out of four pieces: a kind of thing, one thing of that kind,
a kind of link between two of them, and one such link. An MMORPG, a racing game
and a metroidvania all fit without a line of new code.

[![The catalogue of a game: its declared entity types with their counts, and the relation types that connect them](overview.webp)](overview.webp)

A real game in it, with 686 entities and 2,682 relations. Nothing on the left is
built into Maestro: skills, deities, guilds and realms are vocabulary this
particular game declared for itself.
{.caption}

The links carry their own fields, which is the part that earns the model. In a
metroidvania, whether a door swings both ways belongs to the door, not to either
of the rooms it joins, so the kind of link called `connects_to` declares a field
of its own, `is_one_way`, and every door written has to fill it in.

## Questions worth asking

[![An analysis run reporting that everything is reachable, with the number of starting points, entities and connections it followed](analysis.webp)](analysis.webp)

Asking that same game whether anything is out of reach. Starting from the 247
places a player can begin, it walked 34,090 links and arrived at all 686 things
in the game, so nothing in it is stranded.
{.caption}

That is one of three checks. The others look for content that ends up requiring
itself, directly or round a long loop, and for content that nothing connects to
at all. On top of those, a designer can write down a route, the claim that some
particular path through the game can be walked from start to finish, and have it
re-checked whenever the game changes.

Anything else is a question you compose. Ask for *the quests a Mage can reach
between level 20 and 30, coloured by zone* and the answer is a diagram you can
save and come back to, not a feature somebody has to build first. Each one is
also written out in words, so the same answer reaches a reader who cannot see
the picture.

## Two kinds of hands

People work in the browser. Their agents work over MCP, the protocol an AI
assistant uses to reach tools outside itself, and both sides read and write the
same data. Everything an agent can do is also a plain HTTP request, and when one
connects it is handed the instructions for this particular model, so it arrives
knowing how to declare a vocabulary and fill it rather than having to be taught
each time.

The division of labour is the point. Filling the thing is an agent's job:
declaring the vocabulary, writing hundreds of entities and the edges between
them, keeping the prose attached to what it describes. That is work no designer
should be doing by hand, and it is the half an agent is good at.

The browser is for the other half. A designer arrives at a game somebody, or
something, has already filled, and what they need is to understand it: to see
the shape of what is there, to notice what does not hold together, and to ask
the next question. The interface exists so that asking is cheap, and so that the
answer can be looked at rather than read.
