<script lang="ts">
	import SvelteSeo from 'svelte-seo';

	import type { PageData } from './$types';
	import type { SvelteComponentTyped } from 'svelte/internal';

	export let data: PageData;

	type C = $$Generic<typeof SvelteComponentTyped<any, any, any>>;
	$: component = data.component as unknown as C;

	console.log(data);
	// TODO: make it so it uses folders instead of files
	// TODO: add OG image and SEO
	// TODO: create TLDR component
	// TODO: Parse date
</script>

<!-- Cleanup unnecessary code in this file -->

<div class="prose mx-auto pb-10">
	<!-- Svelte SEO-->
	<SvelteSeo title={data.frontmatter.title} description={data.frontmatter.description} />

	<h1>
		{data.frontmatter.title}
	</h1>

	<svelte:component this={component} />
</div>
