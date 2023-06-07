<script lang="ts">
	import '../app.css';

	import SvelteSeo from 'svelte-seo';

	import Footer from '$lib/components/layout/Footer.svelte';
	import Header from '$lib/components/layout/Header.svelte';

	const title = 'Stijn Bakker - strategy engineer, business designer and essayist';
	const description =
		"I'm a digital strategist, concept creator, essayist and freelance consultant based in Rotterdam";
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

<div class="flex flex-col h-screen justify-between">
	<Header />

	<main class="mb-auto">
		<slot />
	</main>

	<Footer />
</div>
