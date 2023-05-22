<script lang="ts">
	import type { ParsedResultList } from '$lib/utils/notion/superfeed.types.js';
	import SvelteLazy from 'svelte-lazy';
	import { LazyImage } from 'svelte-lazy-image';

	type TData = {
		results: ParsedResultList;
	};
	export let data: TData;

	// console.log(data);

	let colNumber = 0;
	const setColumnNumber = (index) => {
		if (colNumber > 4) {
			colNumber = 1;
		}
		return `col-start-${colNumber}`;
		colNumber += 1;
	};
</script>

<h1>Superfeed</h1>

<div class="p-10 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
	{#if data.results && Array.isArray(data.results)}
		{#each data.results as item, index}
			{#if item.type === 'Image'}
				<div class={setColumnNumber(index)}>
					<img src={item.url} class="w-full" />
				</div>
			{:else if item.type === 'Tweet'}
				<div class={`w-full px-2 pb-4 bg-white hover:bg-gray-100 rounded-md ${setColumnNumber}`}>
					<div class="mb-2">
						{@html item.embed}
					</div>
					<span class="bg-black p-1 text-white rounded">Test</span>
				</div>
			{:else if item.type === 'Website'}
				<a href={item.url}>
					<div class="hover:bg-gray-100 p-2 rounded">
						<div
							class={`bg-gray-200 w-full aspect-[14/10] rounded bg-cover bg-top `}
							style={`background-image: url(${item.screenshotUrl})`}
						/>
						<!-- <img src={item.screenshotUrl} class="rounded" /> -->
						<p>{item.title}</p>
					</div>
				</a>
			{:else if item.type === 'PostIt'}
				<div class="bg-yellow-200 p-10">
					<p>{item.note}</p>
				</div>
			{/if}
		{/each}
		<!-- {#each data.results as superfeedItem}
        {#if superfeedItem.type === "Tweet"}
            <a href={superfeedItem.url} class="underline">Tweet</a>
        {:else if superfeedItem.type === "Image"}
            <img src={superfeedItem.url} class="max-w-sm"/>
        {/if}
    {/each} -->
	{:else}
		<p>Loading...</p>
	{/if}
</div>
