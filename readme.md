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
card and in the sidebar:

```yaml
title: Hexagon
summary: One or two lines, shown on the card.
stack: C++ · ECS
status: Active
years: 2023 – today
role: Author
repo: https://github.com/...
demo: https://...
screenshot: hexagon.webp
```

`PRODUCT.md` and `DESIGN.md` describe who the site is for and the design
system it is built on.
