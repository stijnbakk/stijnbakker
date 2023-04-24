<script>
	import SvelteSeo from 'svelte-seo';
	import Hero from './Hero.svelte';
	import SuperFeed from './superfeed/SuperFeed.svelte';

	const title = 'Stijn Bakker - strategist, concept creator and essayist';
	const description =
		"I'm a digital strategist, concept creator, essayist and freelance consultant based in Rotterdam";
</script>

<SvelteSeo {title} {description} />
<div class="">
	<Hero />
	<div class="px-8  w-full">
		<SuperFeed />
	</div>
</div>
