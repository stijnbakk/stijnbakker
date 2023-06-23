<script lang="ts">
	import '../app.css';

	import Footer from '$lib/components/layout/Footer.svelte';
	import Header from '$lib/components/layout/Header.svelte';
</script>

<div class="flex flex-col h-screen justify-between">
	<Header />

	<main class="mb-auto">
		<slot />
	</main>

	<Footer />
</div>
