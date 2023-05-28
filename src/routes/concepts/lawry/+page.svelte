<script>
	import SvelteSeo from 'svelte-seo';
	import Hero from './Hero.svelte';
	import Features from './Features/Features.svelte';
	import Opportunities from './Opportunities/Opportunities.svelte';
	import Why from './Why.svelte';
	import BusinessModel from './BusinessModel.svelte';
	import Roadmap from './Roadmap.svelte';
	import Next from './Next.svelte';

	const title = 'Lawry - AI powered legal assistant for European SME companies';
	const description =
		'Lawry is an AI powered legal assistant helping SME companies make sense of the web of laws. It provides first-aid clarifications, tailored lawyer recommendations and automated legal services for working with contracts, trademarks and patents.';
	const ogImage = '/concepts/lawry/og.png';
</script>

<SvelteSeo
	{title}
	{description}
	openGraph={{
		title: title,
		description: description,
		images: [
			{
				url: ogImage
			}
		]
	}}
/>

<Hero />
<Features />
<Why />
<Opportunities />
<Roadmap />
<BusinessModel />
<Next />
