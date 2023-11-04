---
title: Personal website stack
description: The tech I use to keep this website running, and the considerations that went into them
author: Stijn Bakker
date: 2022-05-01
published: true
---

I have a personal website.

A hub for me accumulate and showcase projects and thoughts. And a platform for me to experiment and learn new technologies.

I wrote an earlier blog post on [why I chose to build instead of DnD](/writings/to-build-or-not-to-build).

In this post I want to go a bit more in depth on the stack and why of it. I'll be updating this post as I update and expand on my stack.

## SvelteKit

Basically my website is a very simple SvelteKit website.

It prerenders most pages upon build, making it light and easy.

I add a couple add-ins:

- **[TailwindCSS](https://tailwindcss.com/)**: allowing me to rapidly style elements
- **[Svelte-Seo](https://github.com/artiebits/svelte-seo)**: making SEO a little bit easier across pages (though SvelteKit makes that easy already)
- **TypeScript**: because of course
- **[MDsveX]**: because Markdown writing is just a lot more user-friendly than creating HTML documents by hand

## Notion

One weird thing I have is Notion, which I use as a makeshift CMS for the 'superfeed' elements. The pinterest like board on the [homepage](/) for example. A full article on that, but here it is in a nutshell.

I have a table in Notion where I can quickly add notes, websites, tweets, and anything else to.

SvelteKit serverside, upon build, queries this database, parses the result, and renders it into HTML.

Every hour I execute a little script that checks any new updates, and re-builds the website if necessary. This makes it so that most of the content can be pre-rendered as static content. Meaning; I won't have to make a Notion API call every time a user lands on a page (making it slow).

Why Notion and why not hard code? Because Notion, for now, is just a simpler system for me to collect the random things I come across every day. And since it renders to HTML, the final format for me is still valuable and shareable, even if Notion becomes obsolete.

## Deployment

I'm lazy and opted for static hosting on [Vercel](https://vercel.com/).

My domain is registered via [Vimexx.eu](https://www.vimexx.eu), a nice simple and cheap domain company where domains purchased are anonymous by default.

Codebase is of course hosted on [Github](https://www.github.com). Every time I push/merge with main that triggers a build on Vercel. Near instant deployment.

The little CDN stuff I might need if I were to grow I've already setup via [Cloudflare](https://wwww.cloudflare.com).

Very basic setup, but works like a charm and gives me a [100/100 score on PageSpeed](https://pagespeed.web.dev/analysis/https-stijnbakker-com/).

## Improvements I'm planning

Images I currently have in the static folder, I really should move those elsewhere.

Notion is nice to get started quickly, but has become a bit of a monster in day-to-day use. The serverside code to fetch data from NotionAPI is very very simple, but I might me building a custom implementation of how I use Notion a bit later (as an exercise).

Lots of improvements needed to prevent weird scrolling behaviour and loading (of images).

I want to experiment with stuff like Locomotive Scroll and other scroll effects. But that needs to be done elegantly. Also makes the site a bit less performant.

Might add ability for [my clients](/freelance) to log in and download tools and presentations only available for them.
