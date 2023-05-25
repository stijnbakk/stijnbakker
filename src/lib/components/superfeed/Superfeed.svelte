
<script lang="ts">
	import Card from '$lib/components/superfeed/card/Card.svelte';
	import TweetCard from '$lib/components/superfeed/TweetCard.svelte';
	import WebsiteCard from '$lib/components/superfeed/WebsiteCard.svelte';
	import PostitCard from '$lib/components/superfeed/PostitCard.svelte';
	import PhotographyCard from '$lib/components/superfeed/PhotographyCard.svelte';
	import ArticleCard from '$lib/components/superfeed/ArticleCard.svelte';
	import type { TParsedSuperfeedItem } from '$lib/components/superfeed/types';

	export let items: Array<TParsedSuperfeedItem>

	console.log(items);
</script>

<div class="p-10 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
	{#if items && Array.isArray(items)}
		{#each items as item, index}
			{#if item.type === 'Tweet'}
				<TweetCard {item} />
			{:else if item.type === 'Photograph'}
				<PhotographyCard {item} />
			{:else if item.type === 'Website'}
				<WebsiteCard {item} />
			{:else if item.type === "Post-it"}
				<PostitCard {item}/>
			{/if}
		{/each}
	{/if}
</div>
