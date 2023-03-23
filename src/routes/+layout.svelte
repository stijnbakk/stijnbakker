<script lang="ts">
	import { page } from '$app/stores';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import '../app.css';
</script>

<!-- <header>
	<a href="/"><h1 class:small={$page.url.pathname !== '/'}>SvelteKit + MDsveX Blog</h1></a>
</header> -->

<div class="flex flex-col h-screen justify-between">
<Header />

<main class="mb-auto">
	<slot />
</main>

<Footer />

</div>