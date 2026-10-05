---
title: Cue
date: 2026-09-11
layout: project
summary: "A watch-later queue for YouTube that lives on your Mac instead of in your browser: a native player with no ads, no embed and no tab eating your battery."
stack: Swift · AppKit · libmpv · SQLite
status: Active
years: Since 2026
role: Author
screenshot: player.webp
repo: https://github.com/neverbot/cue
logo: cue.webp
---

YouTube's own watch-later list is a browser tab you never close. Cue is the
same idea as a Mac application: a queue you add videos to, and a player built
to watch them.

## No embedded player

Cue does not open YouTube's player in a hidden web view. It asks YouTube for
the video itself, resolves the stream URLs, and hands them to
[libmpv](https://mpv.io). There is no page to render, so there is nothing to
show an ad in.

[![The queue sidebar on the left, the video playing on the right with its controls](player-full.webp)](player-full.webp)

The queue on the left, the video on the right. The row playing now is tinted, and
the chapter it is in shows under the seek bar.
{.caption}

Resolving those URLs is the hard part, because YouTube signs them with a
JavaScript routine that changes often. Cue runs that routine in
[JavaScriptCore](https://developer.apple.com/documentation/javascriptcore),
which ships with macOS, using the solver from
[yt-dlp](https://github.com/yt-dlp/ejs). No bundled Node, no bundled Python,
nothing to install the first time you open it.

## Decoded in silicon

Format selection prefers whatever your chip decodes in hardware: AV1 on the
Macs that support it, otherwise H.264, or VP9 where VideoToolbox handles it.
Software decoding is the last resort, for videos that offer nothing else, and
the gap matters: the same stream decoded on the CPU costs noticeably more power
than one handed to the decode block, which is the difference between a quiet
laptop and a warm one.

Buffering is written to disk rather than held in memory, and a paused video
keeps loading, up to about twenty minutes of 1080p. The seek bar shows how much
has arrived, which matters on a bad connection.

## The parts that make it a player and not a demo

Chapters, taken from the video's own markers when it has them, and otherwise
read out of the timestamps in its description, but only when that list starts at
zero. A description that merely mentions a few times is not a table of
contents.

[![The inspector listing the chapters of the video with their timestamps](chapters.webp)](chapters.webp)

The chapter you are in is the one in bold.
{.caption}

Thumbnail previews while scrubbing, built from YouTube's storyboard sheets.
Subtitles you can size, colour, retime and export as SRT or WebVTT.

[![The subtitle page of the inspector, and a thumbnail preview above the seek bar](subtitles.webp)](subtitles.webp)

Dragging the seek bar shows the frame you are heading for, and the chapter it
belongs to.
{.caption}

The original soundtrack of a dubbed video by default, with the other
audio languages switchable without reloading the stream. A mini player that
keeps playing in a small always-on-top window, without opening a second stream.

Videos arrive by paste, by drag and drop, from a `cue://add` link, or from a
bookmarklet the app walks you through installing. The queue is a SQLite file in
your own library folder, with no account and no sync, and it imports and
exports as a URL list, JSON or Takeout-style CSV.

## What it talks to

YouTube, and nothing else. No analytics, no crash reporting, no metadata
service, no sign-in. Anything that would need a server is left out instead of
hidden behind a switch.
