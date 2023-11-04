---
title: Building auth for Strapi in SvelteKit
description:
author: Stijn Bakker
date: 2023-04-23
published: false
---

```svelte
<script lang="ts">
	import type { PageData } from './$types';
	import SvelteSeo from 'svelte-seo';

	export let data: PageData;

	const title = 'Writings';
	const description = 'A collection of writings by Stijn Bakker';
</script>

<SvelteSeo {title} {description} />

<h1>Writings</h1>
<p>This is the welcome page, containing for now some example code to be ported later TODO:</p>

<ul>
	{#each data.posts as { slug, title, author, description, date }}
		<li>
			<a href="/writings/{slug}">
				{title}
			</a>
		</li>
	{/each}
</ul>

<slot />
```
