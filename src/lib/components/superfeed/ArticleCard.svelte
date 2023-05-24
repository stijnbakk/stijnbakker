<script lang='ts'>
	import Card from "./card/Card.svelte";

	export let title: string
	export let url: URL | string
	export let imageUrl: string = ''
	export let note: string = ''
</script>
{#if title && url}
<a href={String(url)}>
<Card
		type="article"
		{note}
		authors={['Stijn Bakker']}
	>
		<div class="p-4 flex flex-row gap-4 items-center mb-8">
			{#if imageUrl}
			<img class="w-20 aspect-square rounded bg-gray-300" src='/' alt='123'/>
			{/if}
			<div>
				<p class="font-bold mb-1">Inkbase - programmable ink</p>
				<a href={String(url)} class="text-sm text-gray-500 underline">https://www.stijnbakker.com/</a>
			</div>
		</div>
	</Card>
</a>
{/if}