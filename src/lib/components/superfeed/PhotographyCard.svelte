<script lang="ts">
	import SvelteLazy from 'svelte-lazy';
	import Card from './card/Card.svelte';

	type TOrientation = 'landscape' | 'portrait'; // 'aspect-[3/2] | aspect[2/3]'
	export let orientation: TOrientation = 'landscape';
	export let src: string;
	export let featured: boolean = false;
</script>

{#if src}
	<Card type="photography" {featured}>
		<div class="w-full flex justify-center">
			<SvelteLazy>
				<img
					{src}
					class={`
                w-full md:max-h-[80vh] object-cover 
                ${orientation === 'portrait' ? 'aspect-[2/3]' : 'aspect-[3/2]'}
                bg-gray-200
                `}
					alt="123"
				/>
			</SvelteLazy>
		</div>
	</Card>
{/if}
