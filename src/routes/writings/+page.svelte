<script lang="ts">
	import type { PageData } from './$types';
	import SvelteSeo from 'svelte-seo';

	export let data: PageData;

	const title = 'Writings';
	const description = 'A collection of writings by Stijn Bakker';
</script>

<SvelteSeo {title} {description} />

<h1>Writings</h1>

<ul>
	{#each data.posts as { slug, title, author, description, date, published }}
		<li>
			<a href="/writings/{slug}">
				{title}
			</a>
			{#if !published}
				<span class="text-xs bg-blue-200 p-1 rounded text-blue-700 ml-2">draft</span>
			{/if}
		</li>
	{/each}
</ul>

<slot />
