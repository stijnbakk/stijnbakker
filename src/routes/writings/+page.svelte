<script lang="ts">
	import type { PageData } from './$types';
	import SvelteSeo from 'svelte-seo';

	export let data: PageData;

	const title = 'Writings';
	const description = 'A collection of writings by Stijn Bakker';
</script>

<SvelteSeo {title} {description} />

<h1>Writings</h1>
<p>Coming soon</p>

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
