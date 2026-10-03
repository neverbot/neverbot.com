---
title: Owl
date: 2026-05-01
layout: project
summary: A self-hosted metrics dashboard for your own server, with the dashboards defined as files rather than clicked together in a UI. If you think Grafana and Prometheus ask for too much RAM, this one is for you.
stack: Go · JavaScript · SQLite
status: Active
years: 2026 – today
role: Author
repo: https://github.com/neverbot/owl
docs: https://neverbot.github.io/owl/
screenshot: host.webp
logo: owl-light.svg
logo_dark: owl-dark.svg
---

Observability sized for one machine: a single static [Go](https://go.dev) binary, one container
and one [SQLite](https://sqlite.org) file.

## The problem

Watching a single low-end host is a real need with no proportionate answer.
[Prometheus](https://prometheus.io) and [Grafana](https://grafana.com) solve it, but they are built for fleets and they ask for
the memory of the machine they are supposed to be watching. The hosted
alternatives start as a free tier and end as a sales funnel.

## Dashboards are files

A dashboard is a **JSON file in a directory**, loaded at startup. Nothing is
clicked together in a UI and nothing lives in a database that has to be backed
up separately: the configuration of the whole system sits in version control,
next to the code that deploys it.

![The dashboard index, listing what is loaded and from where](dashboards.webp)

## What it collects

It scrapes any endpoint that speaks the [Prometheus text format](https://prometheus.io/docs/instrumenting/exposition_formats/) on an interval
and writes the samples to SQLite, with a retention policy that drops data
either past a time window or past a size cap, whichever comes first.

Two optional collectors cover the usual questions about a host: one reads
`/proc` for CPU per mode, load average, memory, network and disk; the other
talks to the [Docker](https://www.docker.com) socket for per-container metrics, and discovers new
targets from container labels instead of edits to the config file.

![The host dashboard: CPU, load average and memory](host.webp)

![Per container CPU and memory](containers.webp)

## It watches itself

Owl exposes its own metrics in the same format it consumes, and scrapes
itself by default: goroutines, heap, GC pauses, stored samples, database size.
If the thing that watches everything else goes quiet, that shows up on a
dashboard rather than in a surprise.

![Owl watching itself: process vitals and storage stats](health.webp)
