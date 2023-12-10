<script lang="ts">
	import type { PageData } from './$types';
	import SvelteSeo from 'svelte-seo';

	export let data: PageData;

	const title = 'Writings';
	const description = 'A collection of writings by Stijn Bakker';
</script>

<SvelteSeo {title} {description} />

<h1 class="font-serif text-3xl md:text-5xl font-bold mb-4">Writings</h1>
<p class="mb-6">
	I write on (digital) products and product development. On technology and design. With occassional
	detours in public policy, personal leadership and management.
</p>

<div class="grid md:grid-cols-1 gap-3">
	{#each data.posts as { slug, title, author, description, date, published }}
		<a href="/writings/{slug}" class=" rounded block p-3 -mx-3 hover:bg-gray-50">
			<div>
				<h3 class="no-underline font-bold mb-2">
					{title}
					{#if !published}
						<span class="text-xs bg-blue-200 p-1 rounded text-blue-700 ml-2">draft</span>
					{/if}
				</h3>
				<p class="text-sm opacity-70">{description}</p>
				<p class="opacity-50 text-xs mt-3">
					{new Date(date).toLocaleString('en-US', { month: 'long', year: 'numeric' })}
				</p>
			</div>
		</a>
	{/each}
</div>

<slot />
