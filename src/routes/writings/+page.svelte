<script lang="ts">
	import type { PageData } from './$types';
	import SvelteSeo from 'svelte-seo';

	export let data: PageData;

	const title = 'Writings';
	const description = 'A collection of writings by Stijn Bakker';
</script>

<SvelteSeo {title} {description} />

<div class="grid md:grid-cols-2 gap-3 mb-3">
	{#each data.highlighted as { slug, title, author, description, date, published }}
		<a href="/writings/{slug}" class=" rounded block p-3 hover:bg-gray-800 bg-gray-900 text-white">
			<div>
				<h3 class="no-underline font-bold mb-2">
					{title}
					{#if !published}
						<span class="text-xs bg-blue-200 p-1 rounded text-blue-700 ml-2">draft</span>
					{/if}
				</h3>
				<p class="text-sm">{description}</p>
				<p class="opacity-50 text-xs mt-3">
					{new Date(date).toLocaleString('en-US', { month: 'long', year: 'numeric' })}
				</p>
			</div>
		</a>
	{/each}
</div>

<div class="grid md:grid-cols-2 gap-3">
	{#each data.posts as { slug, title, author, description, date, published }}
		<a href="/writings/{slug}" class=" rounded block p-3 hover:bg-gray-50 border-[1px]">
			<div>
				<h3 class="no-underline font-bold mb-2">
					{title}
					{#if !published}
						<span class="text-xs bg-blue-200 p-1 rounded text-blue-700 ml-2">draft</span>
					{/if}
				</h3>
				<p class="text-sm">{description}</p>
				<p class="opacity-50 text-xs mt-3">
					{new Date(date).toLocaleString('en-US', { month: 'long', year: 'numeric' })}
				</p>
			</div>
		</a>
	{/each}
</div>

<slot />
