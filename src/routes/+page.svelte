<script lang="ts">
	import type { PageData } from './$types';

	import PageHead from '$lib/blogComponents/PageHead.svelte';
	import Article from '$lib/blogComponents/Article.svelte';
	import ArticleTitle from '$lib/blogComponents/ArticleTitle.svelte';
	import ArticleMeta from '$lib/blogComponents/ArticleMeta.svelte';
	import ArticleDescription from '$lib/blogComponents/ArticleDescription.svelte';

	export let data: PageData;
</script>

<PageHead title="Home" description="An awesome blog about development with Svelte" />

<p>
	This is a minimalistic example of a blog built with <a href="https://kit.svelte.dev">SvelteKit</a>
	and <a href="https://mdsvex.com/">MDsveX</a>.
	<a href="https://github.com/mvasigh/sveltekit-mdsvex-blog">View source code on Github.</a>
</p>

{#each data.posts as { slug, title, author, description, date }}
	<Article>
		<ArticleTitle {slug} {title} />
		<ArticleMeta {author} {date} />
		<ArticleDescription {description} {slug} />
	</Article>
{/each}

<slot />
