<script lang="ts">
	import SvelteSeo from 'svelte-seo';
	import Superfeed from '$lib/components/superfeed/Superfeed.svelte';
	import type { TParsedSuperfeedItem } from '$lib/components/superfeed/types';

	const title = 'Better Spreadsheets';

	type TData = {
		results: TParsedSuperfeedItem[] | undefined;
	};
	export let data;
</script>

<div class="">
	{#if data.results}
		<Superfeed items={data.results} />
	{/if}
</div>
