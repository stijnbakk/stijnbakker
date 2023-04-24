<script lang="ts">
	import { useLazyImage as lazyImage, useLazyImage } from 'svelte-lazy-image';
	import type { TPhotographyAttributes } from '../superfeed.types';

	export let attributes: TPhotographyAttributes;
	let { src, alt, orientation } = attributes;
</script>

<div
	class={` max-h-[90vh] relative min-h-[30px] skeleton overflow-hidden ${orientation} rounded-t-md rounded-bl-md flex-row justify-end shadow-lg `}
>
	<img
		data-src={src}
		{alt}
		class={`block object-cover w-full h-full  `}
		use:useLazyImage
	/>
</div>

<style>
	.portrait {
		aspect-ratio: 2/3;
	}
	.square {
		aspect-ratio: 1/1;
	}
	.landscape {
		aspect-ratio: 3/2;
	}
	.skeleton {
		animation: skeleton-loading 1s linear infinite alternate;
	}

	@keyframes skeleton-loading {
		0% {
			background-color: hsl(200, 20%, 80%);
		}
		100% {
			background-color: hsl(200, 20%, 95%);
		}
	}
</style>
