<script lang="ts">
	import SvelteLazy from 'svelte-lazy';
	import Card from './card/Card.svelte';
	import type { TParsedSuperfeedItem } from './types';
	import { attr } from 'svelte/internal';

	type TOrientation = 'landscape' | 'portrait' | 'square'; // 'aspect-[3/2] | aspect-[2/3]' | 'aspect-[1/1]'

	export let item: TParsedSuperfeedItem;
	// TODO: add aspect ratio to prevent jumping

	const convertOrientationToAspectRatio = (
		attributes: Array<string> | undefined
	): string | undefined => {
		try {
			if (attributes?.includes('aspect-portrait')) {
				return 'aspect-[2/3]'
			} else {
				return 'aspect-[3/2]'
			}
		} catch {
			console.log('return a catch')
			return 'aspect-[3/2]';
		}
	};
</script>

{#if item?.image && Array.isArray(item?.image)}
	<Card {item}>
		<div class="w-full flex justify-center items-center">
			<SvelteLazy>
				<!--  -->
				<div
				style={`background-image: url(${item?.image[0].url})`}
					class={`
                bg-cover
				${convertOrientationToAspectRatio(item?.attributes)}
				min-w-[100vw] md:min-w-0 
				${item?.attributes?.includes('featured') ? "md:min-h-[70vh] md:max-w-[90vw]" : "md:min-h-[50vh]"}
                
				transition-transform transform-gpu hover:scale-105 duration-1000
				overflow-hidden
                bg-gray-200
                `}
				/>
			</SvelteLazy>
		</div>
	</Card>
{/if}
