<script lang="ts">
	import SvelteLazy from 'svelte-lazy';
	import Card from './card/Card.svelte';
	import type { TParsedSuperfeedItem } from './types';

	type TOrientation = 'landscape' | 'portrait' | 'square'; // 'aspect-[3/2] | aspect-[2/3]' | 'aspect-[1/1]'

	export let item: TParsedSuperfeedItem;
	// export let orientation: TOrientation = 'landscape';
	// export let src: string;
	// export let featured: boolean = false;

	const convertOrientationToAspectRatio = (
		attributes: Array<string> | undefined
	): string | undefined => {
		try {
			if (Array.isArray(attributes) && attributes.length > 0) {
				const aspectAttributes = attributes.filter((attr) => attr.startsWith('aspect-'));
				if (aspectAttributes.length > 0) {
					const orientationParsed = aspectAttributes[0].substring(7); // Remove 'aspect-' prefix
					switch (orientationParsed) {
						case 'landscape':
							return 'aspect-[3/2]';
						case 'portrait':
							return 'aspect-[2/3]';
						case 'aspect-square':
							return 'aspect-[1/1]';
						default:
							return 'aspect-[3/2]';
					}
				}
			}
		} catch {
			return 'aspect-[1/1]';
		}
		return 'aspect-[1/1]';
	};
</script>

{#if item?.url}
	<Card {item}>
		<div class="w-full flex justify-center">
			<SvelteLazy>
				<img
					src={item?.url}
					class={`
                w-full md:max-h-[80vh] object-cover 
                ${convertOrientationToAspectRatio(item?.attributes)}
                bg-gray-200
                `}
					alt="123"
				/>
			</SvelteLazy>
		</div>
	</Card>
{/if}
