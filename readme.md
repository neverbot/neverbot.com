# neverbot.com

Personal site of Iván Alonso: a catalogue of software projects.

Static site built with [Hexo](https://hexo.io), deployed on Netlify. The
theme lives in `web/themes/portfolio` and is specific to this site.

## Development

```bash
cd web
npm install
npm run server   # http://localhost:4000
npm run build    # writes web/public
```

## Content

Each project is a markdown file in `web/source/_posts`, with its screenshots
in a folder of the same name. The front matter carries the data shown on the
card, in the index and in the sidebar:

```yaml
title: Hexagon
summary: One or two lines, shown on the card.
kind: Library            # the left column of /projects/
stack: LPC · DGD · MUD · ECS
status: Active           # Active, WIP or Idle
years: Since 2014
role: Author
rank: 140                # listing order, lowest first, in steps of ten
screenshot: client.webp
logo: hexagon.webp       # optional, from themes/portfolio/source/images/logos
repo: https://github.com/...     # optional, and so are the four below
docs: https://...
install: https://www.npmjs.com/package/...
play: https://...
demo: https://...
```

Both listings are ordered by `rank` through the `project_list()` helper in
`web/themes/portfolio/scripts/projects.js`, which falls back to the date for
anything without one.

## Deployment

Netlify builds `web/` and publishes `web/public`, as `netlify.toml` says. The
blog that used to live at this domain is now at `blog.neverbot.com`, and its
posts hung straight off the root, so the catch-all redirect in that file sends
anything this site does not serve to the subdomain. It is deliberately not
forced, which is what lets these pages win over it.
