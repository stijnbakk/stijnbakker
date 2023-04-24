<script lang="ts">
	// import ImageOverlay from '$lib/superfeed/ImageOverlay.svelte';

	import FeedItem from '$lib/components/superfeed/FeedItem.svelte';
	import Grid from '$lib/components/superfeed/Grid.svelte';
	import { feedSource } from './superfeed';

	// import components used
	import Photography from '$lib/components/superfeed/components/Photography.svelte';
	import Project from '$lib/components/superfeed/components/Project.svelte';

	// import types
	import type {
		TFeedSource,
		TThreeColPosition,
		TTwoColPosition
	} from '$lib/components/superfeed/superfeed.types';

	// import utils
	import { setFeedItemScrollSpeed, setThreeColPosition, setTwoColPosition } from './utils';

	const uniqueTags = [...new Set(feedSource.map((item) => item.tag))];

	let filteredTag: string = '';

	let filteredFeed: TFeedSource[] = [];
	$: filteredFeed = feedSource.filter((obj) => {
		// console.log(obj)
		if (filteredTag === '') {
			return obj;
		} else {
			return obj.tag === filteredTag;
		}
	});
</script>

<div class="mt-[7.5rem] w-full flex items-center justify-start md:justify-center overflow-x-scroll">
	<div class="flex flex-row flex-nowrap">
		<span
			on:click={() => {
				filteredTag = '';
			}}
			class="tagfilter"
			class:active={filteredTag === ''}>all</span
		>
		{#each uniqueTags as tag}
			<span
				on:click={() => {
					filteredTag = tag;
				}}
				class="tagfilter"
				class:active={filteredTag === tag}>{tag}</span
			>
		{/each}
	</div>
</div>

<div class="md:py-10">
	{#each filteredFeed as feedItem}
		<Grid
			threeColPosition={setThreeColPosition()}
			twoColPosition={setTwoColPosition()}
			scrollSpeed={setFeedItemScrollSpeed()}
			large={feedItem.large}
			fullspace={feedItem.fullspace}
		>
			<FeedItem primaryTag={feedItem.tag}>
				{#if feedItem.componentName === 'Photography'}
					<svelte:component this={Photography} attributes={feedItem.componentOptions} />
				{:else if feedItem.componentName === 'Project'}
					<Project attributes={feedItem.componentOptions} />
				{:else}
					{feedItem.componentName}
				{/if}
			</FeedItem>
		</Grid>
	{/each}
</div>

<style lang="scss">
	.tagfilter {
		@apply text-black p-1 block rounded-lg px-4 hover:cursor-pointer transition-all;
	}
	.active {
		@apply bg-black text-white;
	}
</style>