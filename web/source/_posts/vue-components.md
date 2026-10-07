---
title: Vue components
date: 2019-07-11
layout: project
summary: When a front end has to do more than sit there, I reach for Vue. A new framework appears every week and that one has outlasted most of them, so the pieces I needed are published as components.
stack: JavaScript · Vue
status: Idle
years: Since 2019
role: Author
repo: https://github.com/neverbot/vue-tiptap
install: https://www.npmjs.com/package/vue-tiptap
screenshot: card.webp
---

A new front-end framework turns up every week. Of all of them, the one I keep
coming back to is [Vue](https://vuejs.org): small enough to read, close enough
to plain HTML that a template still looks like a page. When something I build
needs more than static markup, that is what it ends up in, and the pieces worth
reusing get published.

## [vue-tiptap](https://github.com/neverbot/vue-tiptap)

A rich text editor you can drop into a Vue 3 application, built on
[tiptap](https://tiptap.dev).

[![The example application: a browser window with a toolbar and a document showing headings, a code block, a list and a quotation](editor.webp)](editor.webp)

The example that ships with it, which is also the whole explanation.
{.caption}

Tiptap is deliberately headless: it gives you the editing behaviour and nothing
you can see, and you are expected to supply every button yourself. That is the
right call for a library and an obstacle for anyone who just wants an editor in
their page. This sits one step the other way, as a component with its toolbar
already attached, usable as it comes and readable if what you actually want is
to build your own.

It is the most used thing I have published: 90 stars, and a few thousand
downloads a year from people who presumably had the same afternoon I did.

Tiptap has since published its own Vue 3 package, which is where anyone starting
today should go, and the readme says so at the top.
