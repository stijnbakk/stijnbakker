<script lang="ts">
	import SvelteSeo from 'svelte-seo';

	import type { PageData } from './$types';
	import type { SvelteComponentTyped } from 'svelte/internal';

	export let data: PageData;

	type C = $$Generic<typeof SvelteComponentTyped<any, any, any>>;
	$: component = data.component as unknown as C;
</script>

<!-- Cleanup unnecessary code in this file -->

<div class="prose mx-auto">
	<!-- Svelte SEO-->
	<SvelteSeo title={data.frontmatter.title} description={data.frontmatter.description} />

	<h1>
		{data.frontmatter.title}
	</h1>
	<p>
		{data.frontmatter.date}
	</p>
	
	<svelte:component this={component} />
</div>