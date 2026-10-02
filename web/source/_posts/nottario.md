---
title: Nottario
date: 2026-02-01
layout: project
summary: A task, document and architecture store that coding agents talk to over MCP, so several of them can share the same context.
stack: Go · PostgreSQL · MCP
status: Active
years: 2026 – today
role: Author
repo: https://github.com/neverbot/nottario
---

Placeholder copy. The real case study goes here: what the problem was, which
decisions were taken, and what would be done differently.

## The problem

Agents working on the same repository from different machines had no shared
memory of what was being done, or why.

## The approach

One store, three domains: tasks, markdown context and an architecture graph,
exposed as tools rather than as an API the agent has to learn.
