<script lang="ts">
	import type { PageData } from './$types';
	import type { SvelteComponentTyped } from 'svelte/internal';

	import PageHead from '$lib/blogComponents/PageHead.svelte';
	import ArticleTitle from '$lib/blogComponents/ArticleTitle.svelte';
	import ArticleMeta from '$lib/blogComponents/ArticleMeta.svelte';

	export let data: PageData;

	type C = $$Generic<typeof SvelteComponentTyped<any, any, any>>;
	$: component = data.component as unknown as C;
</script>

<div class="prose mx-auto">
<PageHead title={data.frontmatter.title} description={data.frontmatter.description} />
<ArticleTitle title={data.frontmatter.title} />
<ArticleMeta author={data.frontmatter.author} date={data.frontmatter.date} />


<svelte:component this={component} />
</div>