<script lang="ts">
	import { page } from '$app/stores';
	import '../app.css';
</script>

<header>
	<a href="/"><h1 class:small={$page.url.pathname !== '/'}>SvelteKit + MDsveX Blog</h1></a>
</header>

<main>
	<slot />
</main>

<footer>
	<p>
		Copyright &#169; <a href="https://twitter.com/mehdi_vasigh">Mehdi Vasigh</a>, {new Date().getFullYear()}
	</p>
</footer>
