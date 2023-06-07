<script lang="ts">
	import SvelteSeo from 'svelte-seo';
	import Hero from './Hero.svelte';
	import Superfeed from '$lib/components/superfeed/Superfeed.svelte';
	import type { TParsedSuperfeedItem } from '$lib/components/superfeed/types';

	const title = 'Stijn Bakker - strategy engineer, business designer and essayist';
	const description =
		"I'm a digital strategist, concept creator, essayist and freelance consultant based in Rotterdam";

	type TData = {
		results: TParsedSuperfeedItem[] | undefined;
	};
	export let data;
</script>

<SvelteSeo
	{title}
	{description}
	openGraph={{
		title: title,
		description: description,
		images: [
			{
				url: 'https://www.stijnbakker.com/og.jpg',
				width: 1200,
				height: 630,
				alt: 'Stijn Bakker'
			}
		],
		url: 'https://www.stijnbakker.com/',
		type: 'website',
		site_name: 'Stijn Bakker'
	}}
/>
<div class="">
	<Hero />
	{#if data.results}
		<Superfeed items={data.results} />
	{/if}
</div>
