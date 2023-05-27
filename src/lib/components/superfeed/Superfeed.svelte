
<script lang="ts">
	import Card from '$lib/components/superfeed/card/Card.svelte';
	import TweetCard from '$lib/components/superfeed/TweetCard.svelte';
	import WebsiteCard from '$lib/components/superfeed/WebsiteCard.svelte';
	import PostitCard from '$lib/components/superfeed/PostitCard.svelte';
	import PhotographyCard from '$lib/components/superfeed/PhotographyCard.svelte';
	import ArticleCard from '$lib/components/superfeed/ArticleCard.svelte';
	import type { TParsedSuperfeedItem } from '$lib/components/superfeed/types';
	import DocumentCard from './DocumentCard.svelte';

	export let items: Array<TParsedSuperfeedItem>

	// console.log(items);
</script>

<div class="p-10 w-full flex flex-wrap gap-10 justify-center">
	{#if items && Array.isArray(items)}
		{#each items as item, index}


			{#if String(item?.type) === 'Tweet'}
				<TweetCard {item} />
			{:else if String(item?.type) === 'Photograph'}
				<PhotographyCard {item} />
			{:else if String(item?.type) === 'Website'}
				<WebsiteCard {item} />
			{:else if String(item?.type) === "Post-it"}
				<PostitCard {item}/>
			{:else if String(item?.type) === "Document"}
				<DocumentCard {item} />
			{:else if String(item?.type) === "Article"}
				<ArticleCard {item} />
			{/if}
		{/each}
	{/if}
</div>
