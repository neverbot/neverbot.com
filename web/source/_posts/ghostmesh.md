---
title: GhostMesh
date: 2025-04-25
layout: project
summary: An IRC client that runs in the browser and talks to several networks at once. No account, no sign-in, nothing stored anywhere but your own browser.
stack: TypeScript · Vue · Tailwind
status: Active
years: Since 2025
role: Author
repo: https://github.com/neverbot/ghostmesh
screenshot: card.webp
---

IRC is still where a lot of software gets argued about, and the clients for it
are either a desktop application from 1999 or a hosted service that wants an
account. GhostMesh is a third option: a web client you open, point at the
networks you use, and close.

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
the site hosting it will not answer a browser directly.

One of those seams is not optional. A browser can only open a WebSocket, and IRC
predates them by a decade: most networks still listen on a plain socket, port
6667, or the same thing wrapped in TLS. Reaching one of those needs something in
between that speaks WebSocket to the browser and the old protocol to the server,
and passes the bytes across. The networks that run their own web gateway are the
exception, not the rule.

None of that lives in the repository. GhostMesh is the client; what it leans on
is yours.

Underneath it is Vue 3 with the composition API, Pinia for state, strict
TypeScript, Tailwind, and a plain WebSocket for the IRC connection itself.
Interface in English and Spanish.
