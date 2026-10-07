---
title: Nottario
date: 2026-02-01
layout: project
summary: "A harness for your harness: a task, document and architecture store that coding agents talk to over MCP, so several of them share the same context."
stack: Go · JavaScript · PostgreSQL · MCP · LLMs
status: Active
years: Since 2026
role: Author
repo: https://github.com/neverbot/nottario
docs: https://neverbot.github.io/nottario/
screenshot: board.webp
rank: 70
---

A self-hosted coordinator for developers and the agents working alongside
them. Humans browse it in a web UI; agents drive the same data through [MCP](https://modelcontextprotocol.io)
tools.

## The problem

**Coding agents forget.** Each session starts from nothing, and when two of them
work on the same repository from different machines there is no shared record
of what is being done, what was decided, or why. The human ends up relaying
state by hand, which is the job the agents were supposed to remove.

## Three domains, one source of truth

A task backlog with cycles, priority buckets, dependencies and atomic claim
semantics. A versioned markdown store for specs, notes and the instructions
the agents themselves read. And an architecture diagram of services and their
connections, maintained by the agents as they change the code.

![The board: tasks by state, tagged with type, priority and role](board.webp)

## Safe by construction

Tokens are scoped to a single project: one scoped to project A is rejected the
moment it touches project B, admin or not. Task pickup is a single
transaction, so two agents racing for the same row cannot both win it. Document
writes carry the version they expect, and a conflict comes back as a conflict
instead of a silent overwrite.

## The shape of it

One [Go](https://go.dev) binary in a container, talking to whatever [PostgreSQL](https://www.postgresql.org) is already
running, taking its own daily backups so that is not another piece of
infrastructure to remember. The web UI updates live as work moves, without a
refresh.
