---
title: Disenshittify
date: 2026-07-07
layout: project
summary: A Firefox extension that hides the parts of a platform that exist to serve the platform. Recommendation walls, infinite feeds, upsells, suggested posts, each one a switch you can turn off.
stack: JavaScript · Firefox · esbuild
status: Active
years: Since 2026
role: Author
repo: https://github.com/neverbot/disenshittify
screenshot: card.webp
---

Platforms get worse on purpose. The feed you asked for arrives wrapped in things
you did not: videos nobody you follow posted, posts surfaced because a stranger
liked them, a box offering to sell you the version without the boxes. This hides
them.

[![The extension popup on its three tabs, each listing the features it can hide with a switch and a count](popups.webp)](popups.webp)

One tab per platform, one switch per thing, and a number saying how many of that
thing were hidden on this page.
{.caption}

Three platforms so far. On YouTube it takes out the home feed, Shorts,
recommendations on the sidebar and over the end of a video, comments, ads and
the Explore section. On X, the ads, the Premium upsells, the sidebar widgets,
the chat, the verified badges, and it opens on Following rather than the
algorithmic timeline. On LinkedIn, the upsells, the puzzles, the "add to your
feed" suggestions, and the posts the feed shows you because somebody reacted to
them rather than because they were written for you.

Nothing is all or nothing. Every item is its own switch, there is a master one
for the whole extension, and after each page it reports what it removed, as a
toast and as a number on the toolbar icon.

## One registry, two consumers

A feature is a small module that declares how it applies itself, usually as CSS
and occasionally with a hook for the cases CSS cannot reach. They all sit in one
registry, and that registry is the only source of truth: an engine that knows
nothing about any particular platform reads which features are on and applies
them, reacting as the page changes, and the popup is generated from that same
list. Adding a feature therefore adds its switch. Adding a whole platform is a
folder, an entry and a line in the manifest.

The published package is bundled, but **not minified and not obfuscated**: the
files keep their original names and carry comments pointing back at the source
they came from, and nothing is generated or evaluated once it reaches your
browser. That is partly for the people who review extensions before they are
published, and partly because an extension that can read every page you open has
no business being unreadable itself.

The only permission it asks for is storage, to remember which switches you set.
