---
title: About
layout: page
description: How this site is built, and the typefaces it uses.
---

## About this site

A static site. No framework runs in the browser, no analytics, no cookie
banner, no third party is contacted when you load a page: every file it needs,
including the typefaces, is served from this domain.

### Built with

- [Hexo](https://hexo.io) 8, a static site generator, with a theme written for
  this site rather than taken from a gallery
- [EJS](https://ejs.co) for the templates and [Stylus](https://stylus-lang.com)
  for the stylesheet
- [markdown-it](https://github.com/markdown-it/markdown-it) for the prose, with
  `markdown-it-attrs` for figure captions
- Plain CSS custom properties for the two colour schemes, in
  [OKLCH](https://oklch.com). No CSS framework
- A hundred lines of vanilla JavaScript in two files: the theme toggle, and the
  portrait carousel and typewriter effect, which is only loaded on the home
  page. Everything else works with JavaScript turned off
- Code blocks are parsed while the site is built, never in the browser, and the
  stylesheet uses almost none of it: everything is one colour except strings

### Typefaces

Five, all self-hosted and all free to use. The weight in brackets is what the
browser actually downloads, subset to Latin.

- **[Petrona](https://fonts.google.com/specimen/Petrona)**, body text, in
  roman, italic and bold (73 KB). [SIL Open Font License 1.1][ofl]
- **[Young Serif](https://fonts.google.com/specimen/Young+Serif)**, page and
  project titles (27 KB). [SIL Open Font License 1.1][ofl]
- **[Hanken Grotesk](https://fonts.google.com/specimen/Hanken+Grotesk)**,
  navigation, labels and metadata, in two weights (27 KB).
  [SIL Open Font License 1.1][ofl]
- **[Indie Flower](https://fonts.google.com/specimen/Indie+Flower)**, the
  handwritten name on the home page, cut down to the dozen letters it needs
  (1.5 KB). [SIL Open Font License 1.1][ofl]
- **[Special Elite](https://fonts.google.com/specimen/Special+Elite)**, the
  typewriter effect under that name (9 KB).
  [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)

Code is set in whatever monospaced face your system provides, which is the one
exception to everything being served from here.

[ofl]: https://openfontlicense.org
