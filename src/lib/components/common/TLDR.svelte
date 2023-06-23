<script lang="ts">
	type TItem = string;
	export let items: string[];
</script>

<div class="bg-gray-50 px-8 py-2 rounded mb-10">
	<p class="font-bold text-lg">TLDR item</p>
	<ul class="list-outside">
		{#each items as item}
			<li>{@html item}</li>
		{/each}
	</ul>
</div>
