---
title: GhostMesh
date: 2025-04-25
layout: project
summary: An IRC client that runs in the browser and talks to several networks at once. No account, no sign-in, nothing stored anywhere but your own browser.
stack: TypeScript · Vue · Tailwind
status: Idle
years: Since 2025
role: Author
repo: https://github.com/neverbot/ghostmesh
screenshot: card.webp
rank: 120
kind: Web app
---

IRC is the chat protocol open-source projects have been arguing over since the
late eighties, and a good part of them still live on it. The clients, though,
are either a desktop application that looks its age or a hosted service that
wants an account first. GhostMesh is a third option: a web client you open,
point at the networks you use, and close.

[![The client with the channel list on the left, a channel in the middle and the member list on the right](client.webp)](client.webp)

Three panels: every channel on every network you are connected to, the
conversation, and who is in it.
{.caption}

## Several networks, one window

The point of it is the plural. Connections to different networks are live at the
same time, and the channel list is the union of all of them, filterable by name,
by network, or by how many people are in a channel. Private conversations sit
beside the channels with the other person's online status attached, and each
network keeps its own nickname, username and display settings, because they are
rarely the same twice.

[![The channel list showing 134 channels with their user counts, beside the server status pane](channels.webp)](channels.webp)

The channel list of one network, and in the right pane the colour and formatting
codes IRC has carried since the nineties, rendered rather than printed raw.
{.caption}

Reload the page and it reconnects to the servers and channels you had open. The
session is in your browser, which is also the only place anything is kept.

## Written to be extended

Which networks the client offers is configuration: each server is a file
declaring how to reach it and how to behave once there. The repository ships
that directory empty on purpose, because which networks a client reaches is not
the client's business.

The rest is plugins, written in TypeScript and picked up when the project is
built. They are the seams where it meets services of your own: somewhere to
upload a file to before pasting its link, something that turns a link into an
image the conversation can show inline, a proxy to fetch that image through when
the site hosting it will not answer a browser directly, or one that bridges a
network still speaking only the plain socket IRC was built on, which a browser
cannot open.

None of that lives in the repository. GhostMesh is the client; what it leans on
is yours.

Underneath it is Vue 3 with the composition API, Pinia for state, strict
TypeScript, Tailwind, and a plain WebSocket for the IRC connection itself.
Interface in English and Spanish.
