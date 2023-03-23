<script>
	import Hero from './Hero.svelte';
	import SvelteSeo from 'svelte-seo';
	import HireMe from './HireMe.svelte';
	import HowIWork from './HowIWork.svelte';
	import MyDeliverables from './MyDeliverables.svelte';
	import Connect from '$lib/components/common/Connect.svelte';

	const title = 'Freelance services - From abstract strategy to actionable roadmap';
	const description =
		'I translate your vague, abstract strategy into an actionable roadmap, product design, and development backlog';
</script>

<SvelteSeo {title} {description} />
<div class="mx-10">
	<Hero />
	<div class="max-w-5xl">
		<HireMe />
	</div>
	<HowIWork />
	<MyDeliverables />
    <Connect/>
</div>

