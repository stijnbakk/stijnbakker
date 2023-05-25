<script lang="ts">
	import Card from './card/Card.svelte';
	import type { TParsedSuperfeedItem } from './types';

	export let item: TParsedSuperfeedItem;
</script>

{#if item?.image && item?.url}
	<a href={String(item?.url)}>
		<Card {item} note={item?.note}>
			<div class="mb-8 min-w-[350px] block">
				<div
					class={`w-full bg-gray-300 aspect-[14/9] bg-cover`}
					style={`background-image: url(${item?.image[0].url})`}
				/>
				<div class="p-4 w-full">
					<p class="font-bold mb-1">{item?.name}</p>
					<p />
					<a href={String(item?.url)} class="text-sm text-gray-500 underline">{item?.url}</a>
				</div>
			</div>
		</Card>
	</a>
{/if}
