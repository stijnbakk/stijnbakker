<script lang="ts">
	import Card from "./card/Card.svelte";

	export let title:string
	export let url:URL|string
	export let note:string = ''
</script>
{#if title && url}
<a href={String(url)}>
<Card
		type="website"
		{note}
		authors={['Stijn Bakker']}
	>
		<div class="mb-8">
			<div class="w-full bg-gray-300 aspect-[14/10]" />
			<div class="p-4 w-full">
				<p class="font-bold mb-1">StijnBakker.com</p>
				<p />
				<a href={String(url)} class="text-sm text-gray-500 underline">https://www.stijnbakker.com/</a>
			</div>
		</div></Card
	>
</a>
{/if}