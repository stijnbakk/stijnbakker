<script lang="ts">
	import type { PageData } from './$types';
	import SvelteSeo from 'svelte-seo';

	export let data: PageData;

	const title = 'Writings';
	const description = 'A collection of writings by Stijn Bakker';
</script>

<SvelteSeo {title} {description} />

<div class="grid grid-cols-1 gap-3">
	{#each data.posts as { slug, title, author, description, date, published }}
		<a href="/writings/{slug}" class=" rounded block p-3 -mx-3 hover:bg-gray-50">
			<div>
				<p class="no-underline">
					{title}
					{#if !published}
						<span class="text-xs bg-blue-200 p-1 rounded text-blue-700 ml-2">draft</span>
					{/if}
				</p>
			</div>
		</a>
	{/each}
</div>

<slot />
