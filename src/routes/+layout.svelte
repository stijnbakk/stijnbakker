<script lang="ts">
	import '../app.css';

	import SvelteSeo from 'svelte-seo';

	import Footer from '$lib/components/layout/Footer.svelte';
	import Header from '$lib/components/layout/Header.svelte';

	const title = 'Stijn Bakker - strategist, concept creator and essayist';
	const description =
		"I'm a digital strategist, concept creator, essayist and freelance consultant based in Rotterdam";
</script>

<SvelteSeo title={title} description={description} />
<div class="flex flex-col h-screen justify-between">
	<Header />

	<main class="mb-auto">
		<slot />
	</main>

	<Footer />
</div>
