<script lang="ts">
	import Card from './card/Card.svelte';
	import type { TParsedSuperfeedItem } from './types';

	export let item: TParsedSuperfeedItem;
	console.log('projectcard item:', item);
</script>

<a href={item?.url ? String(item?.url) : '#'}>
	<Card {item}>
		<div class={`md:min-w-[400px] max-w-[700px] flex-col flex p-3 items-center mb-8`}>
			{#if Array.isArray(item?.image) && item?.image.length > 0}
				<div
					class={`w-full bg-white aspect-[16/10] bg-top rounded bg-cover`}
					style={`background-image: url(${item?.image[0].url})`}
				/>
			{/if}
			<div class="p-4 w-full">
				<p class="font-bold mb-1">{item?.name}</p>
				<p>{item?.note}</p>
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
