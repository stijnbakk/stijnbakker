<script>
	import Image from './Image.svelte';
	import { data } from './data';
    let draggable = true

</script>

<div class="p-10 grid_container w-full h-full gap-4 md:gap-10 lg:gap-24">
	{#each data as item, index }
		<div
			class={`
        ${item.oversize ? 'md:col-span-2' : ''} 
        
        rounded overflow-hidden 
        ${draggable ? 'cursor-move' : ''}
    `}
    
    draggable={draggable}
		>
			{#if item.image}
				<Image {item} />
			{:else if item.note}
				<div class="bg-yellow-300 p-10 shadow rounded text-lg">
					{item.note?.value}
				</div>
			{:else if item.text}
				<div class="p-10 text-center rounded bg-white hover:bg-gray-100 transition-all duration-200">
					<p class="text-4xl font-serif text-center mb-4">{item.text?.value}<p>
                    <p class="font-bold">{item.text?.attribution}</p>
				</div>
			{/if}
		</div>
	{/each}
</div>

<style lang="scss">

.grid_container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: masonry;
  grid-auto-flow: dense;
}
	.grid_item {
		@apply h-full;
	}
</style>
