<script lang="ts">
	import Card from './card/Card.svelte';
	import type { TParsedSuperfeedItem } from './types';

	export let item: TParsedSuperfeedItem;
	console.log('articlecard item:', item)
</script>

{#if item?.url}
	<a href={String(item?.url)}>
		<Card {item} note={item?.note}>
			<div class="min-w-[350px] flex-row flex p-3 items-center mb-8">
				{#if Array.isArray(item?.image) && item?.image.length > 0}
				<div
					class={`w-full bg-gray-300 aspect-square rounded bg-cover`}
					style={`background-image: url(${item?.image[0].url})`}
				/>
				{/if}
				<div class="p-4 w-full">
					<p class="font-bold mb-1">{item?.name}</p>
					{#if item?.sources}
					<p class="text-xs text-gray-400">
						{#each item.sources as source,index}
						{source}
						{#if index + 1 < item?.sources.length}
						•
						{/if}
						{/each}
					</p>
					{/if}
					<!-- <p>
					{#each item?.sources as source, index}
						{source}
						{#if index + 1 < sources.length}
							•
						{/if}
					{/each}
					</p> -->
				</div>
			</div>
		</Card>
	</a>
{/if}
