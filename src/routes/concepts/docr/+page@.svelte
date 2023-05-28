<script>
	import Hero from './Hero.svelte';
	import PrimaryFeatures from './PrimaryFeatures.svelte';
	import SecondaryFeatures from './SecondaryFeatures.svelte';
	import SvelteSeo from 'svelte-seo';

	const title = 'Docr - a minimal Markdown document creator';
	const description =
		'Create beautiful markdown-based documents in a minimal, modern and intuitive word-processor';
	const ogImage = '/concepts/docr/og.png';

	// TODO: build email capture
	// TODO: add thoughts and notes
</script>

<SvelteSeo
	{title}
	{description}
	openGraph={{
		title: title,
		description: description,
		images: [
			{
				url: '/concepts/docr/og.png'
			}
		]
	}}
/>

<!-- HERO -->

<Hero />

<!-- PRIMARY FEATURES -->
<PrimaryFeatures />

<SecondaryFeatures />
