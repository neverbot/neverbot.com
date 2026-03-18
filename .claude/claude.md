# neverbot.com

Personal blog of Iván Alonso (neverbot). A long-running Spanish-language blog (2003-present) covering cinema, television, anime, technology, and personal commentary. Hosted at https://neverbot.com.

## Tech Stack

- **Static Site Generator**: Hexo 8.1.1
- **Node.js**: v18 (see `.nvmrc`)
- **Theme**: Custom `hexo-neverbot-theme`, installed as a git submodule at `web/themes/neverbot` (repo: https://github.com/neverbot/hexo-neverbot-theme.git)
- **Templating**: EJS (`hexo-renderer-ejs`)
- **CSS**: Stylus (`hexo-renderer-stylus`)
- **Markdown**: markdown-it (`hexo-renderer-markdown-it`) with `markdown-it-attrs` plugin
- **Deployment**: Netlify (auto-deploy on push to master)

## Project Structure

```
/
├── web/                        # Main Hexo project root
│   ├── source/_posts/          # Blog posts (YYYY/MM/DD/slug.md)
│   ├── source/about/           # About page
│   ├── source/tv/              # TV section pages (Star Trek, etc.)
│   ├── source/cine/            # Cinema section pages (Star Wars, Kevin Smith, etc.)
│   ├── source/anime/           # Anime section pages
│   ├── themes/neverbot/        # Theme submodule
│   ├── _config.yml             # Hexo site configuration
│   ├── eslint.config.mjs       # ESLint flat config (v9)
│   ├── package.json            # Dependencies
│   └── totals.mjs              # Script to count posts/pages
├── netlify.toml                # Netlify build & redirect config
├── miniblog.sh                 # Shell script to create miniblog posts
└── .github/dependabot.yml      # Monthly npm dependency checks
```

## Build & Run

All commands run from `web/`:

```bash
npm run build          # Development build (hexo generate)
npm run build:pro      # Production build (enables related posts calculation)
npm run clean          # Clean generated files and database
npm run server         # Dev server at http://localhost:4000
npm run lint           # ESLint (JS, JSON, MD)
npm run lint:fix       # ESLint with auto-fix
```

Netlify uses `npm run build:pro` from the `web/` base directory. Output goes to `web/public/`.

## Dependencies & Linting

- **ESLint 9** (flat config). Cannot upgrade to ESLint 10 yet because `eslint-plugin-import` lacks support (tracked at https://github.com/import-js/eslint-plugin-import/issues/3227). Alternative: `eslint-plugin-import-x` supports ESLint 10.
- **Prettier**: 2 spaces, single quotes, 100 char line width, semicolons enabled. Config in `prettierrc.json`.
- `npm install` requires `--legacy-peer-deps` due to `hexo-related-posts` not supporting Hexo 8 in its peer dependencies (PR pending: https://github.com/sergeyzwezdin/hexo-related-posts/pull/36). `hexo-fontawesome` is installed from GitHub (`github:hexojs/hexo-fontawesome`) to get Hexo 8 support (merged but unpublished to npm).
- `@babel/core` is a required dev dependency for `@babel/eslint-parser`.

## Theme Custom Tags

The theme provides custom Hexo tags (in `themes/neverbot/scripts/`):

- `{% badge '#color' 'text' %}` — Inline colored badge
- `{% youtube VIDEO_ID %}` — YouTube embed with Plyr player
- `{% timeline %}...{% endtimeline %}` with `{% year 'badge' 'title' 'subtitle' content %}` — Visual timeline component
- `autoCanonical` helper — SEO canonical URL generation

## Content

- ~1,455 blog posts, primarily in Spanish
- Post frontmatter: `title`, `author` (neverbot), `date`, `tags`
- Permalink format: `/:name/` (slug only, no date in URL)
- Special section pages: `/tv/`, `/cine/`, `/anime/`, `/los-premios-hugo/`, `/lecturas/`
- Miniblog posts created via `./miniblog.sh "content"` from project root

## Configuration Notes

- Site config in `web/_config.yml`, theme config in `web/themes/neverbot/_config.yml`
- Related posts: calculated only in production builds (`--pro`), threshold 0.3, tags weighted highest (0.5)
- RSS feeds: `atom.xml` and `rss2.xml`, 20 items, full content
- Sitemaps: `sitemap.xml` and `sitemap.txt` with custom templates
- Netlify redirects: `blog.neverbot.com` and `www.neverbot.com` → `neverbot.com`; legacy `/archivo/` URLs → new format
- `strip-ansi` pinned to `^6.0.1` via npm overrides

## Git

- Single branch: `master`
- Theme is a git submodule at `web/themes/neverbot` — remember to init/update submodules after clone
- When committing theme changes: first commit inside the submodule (`cd web/themes/neverbot && git add ... && git commit`), then stage the updated submodule reference in the root repo (`git add web/themes/neverbot`) and commit there
- Generated files (`web/public/`, `web/db.json`) are gitignored
- Follow [Conventional Commits](https://www.conventionalcommits.org/). Commit messages must be **a single line only** — no body, no description paragraph, no blank lines, no `Co-Authored-By` or any other trailers. When a commit covers multiple unrelated topics, split into separate commits — one per topic.
- **Never push** — only commit locally. The user handles pushing to remote.
