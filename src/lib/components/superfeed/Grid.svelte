<script lang="ts">
	import type { TThreeColPosition, TTwoColPosition } from './superfeed.types';
	import Lazy from 'svelte-lazy';
	export let threeColPosition: TThreeColPosition;
	export let twoColPosition: TTwoColPosition;
	export let scrollSpeed: number = 1;
	export let large: boolean = false;
	export let fullspace: boolean = false;

	const centerOptions = ['justify-start', 'justify-end'];
</script>

<Lazy fadeOption={{delay: 200, duration: 1000}} height="auto">
<div
	class={`
			flex max-w-7xl mx-auto my-10
			${threeColPosition === 'left' ? 'lg:justify-start ' : ''} 
			${threeColPosition === 'center' ? 'lg:justify-center ' : ''} 
			${threeColPosition === 'right' ? 'lg:justify-end' : ''} 

			${twoColPosition === 'left' ? 'md:justify-start' : ''} 
			${twoColPosition === 'right' ? 'md:justify-end' : ''} 
		`}
>
	{#if large}
		<div
			class={`
		w-full
		md:w-[60%]  
		lg:w-[65%] 
		`}
		>
			<slot />
		</div>
	{:else}
		<div
			class={`
		w-full
		md:w-[60%]  
		lg:w-[40%] 
		`}
		>
			<slot />
		</div>
	{/if}
</div>
</Lazy>
