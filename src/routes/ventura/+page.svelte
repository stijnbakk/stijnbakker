<script lang="ts">
	import type { PageData } from './$types';
	import SvelteSeo from 'svelte-seo';

	export let data: PageData;

	const title = 'Ventura';
	const description = 'Documenting my journey to become a serious entrepreneur and start a startup';
</script>

<SvelteSeo {title} {description} />

<h1>Ventura</h1>

<ul>
	{#each data.posts as { slug, title, author, description, date, published }}
		<li>
			<a href="/ventura/{slug}">
				{title}
			</a>
			{#if !published}
				<span class="text-xs bg-blue-200 p-1 rounded text-blue-700 ml-2">draft</span>
			{/if}
		</li>
	{/each}
</ul>

<slot />
