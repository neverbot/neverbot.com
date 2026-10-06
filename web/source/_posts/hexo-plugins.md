---
title: Hexo plugins
date: 2026-01-13
layout: project
summary: I like static sites, and Hexo is the generator I keep coming back to. Over the years one need or another has ended in commits to somebody else's plugin, or in writing and publishing my own.
stack: JavaScript · Hexo
status: Active
years: Since 2020
role: Author and contributor
screenshot: card.webp
---

[Hexo](https://hexo.io) generates the blogs I keep, so when a plugin breaks, it
breaks on sites I read every day. That is most of what follows: things I needed,
published in case they were not only mine, and fixes sent back to plugins
written by other people.

## Published

**[hexo-gallery-slider](https://github.com/neverbot/hexo-gallery-slider)** turns
a list of files into a slider inside a post, for images and video, with touch
navigation, a counter and pagination dots.

[![A comic book gallery in a post, with the image counter, the arrows and the pagination dots](gallery.webp)](gallery.webp)

The slider in a post on one of those blogs. The counter, the arrows and the dots
are the plugin; the comics are not.
{.caption}

**[hexo-multilang](https://github.com/neverbot/hexo-multilang)** manages a site
whose posts are written in more than one language, which Hexo does not do on its
own. It switches the content, not only the labels of the theme, and it carries a
warning earned the hard way: every multi-language plugin registers generators
under the same names (`index`, `archive`, `tag`, `category`), Hexo loads them in
the order they appear in `package.json`, and tooling that sorts that file
alphabetically will quietly change which one wins. The readme tells you to
uninstall the rest rather than hope.

Both are on npm, and together they are downloaded a bit under 1,400 times a
year, which is the honest size of this: small plugins, for a small corner of a
generator that is itself a small corner.

## Sent upstream

**[hexo-fontawesome](https://github.com/hexojs/hexo-fontawesome)** had stopped
working with new major versions of Hexo. Two pull requests fixed that and both
were merged into the project's own repository:
[#290](https://github.com/hexojs/hexo-fontawesome/pull/290) for Hexo 7 and
[#303](https://github.com/hexojs/hexo-fontawesome/pull/303) for Hexo 8.

**[hexo-generator-feed](https://github.com/hexojs/hexo-generator-feed)** copies a
post into the feed exactly as written, so a relative link stays relative and
breaks once a reader shows it somewhere else. Mine were turning into 404s in
Search Console.
[Pull request #313](https://github.com/hexojs/hexo-generator-feed/pull/313)
rewrites them against the post's own URL. It is still open.

**[hexo-related-posts](https://github.com/sergeyzwezdin/hexo-related-posts)**
refused to install alongside Hexo 8.
[Pull request #36](https://github.com/sergeyzwezdin/hexo-related-posts/pull/36)
is the fix, and also still open.

Waiting is not the same as being stuck. Both branches live in my own forks and
install straight from GitHub, which is how four sites are running them right
now:

```json
"hexo-generator-feed": "github:neverbot/hexo-generator-feed#feature/absolute-urls-in-content",
"hexo-related-posts": "github:neverbot/hexo-related-posts#feature/hexo-8"
```
