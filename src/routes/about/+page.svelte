<script>
	import SvelteSeo from 'svelte-seo';

	const title = 'Stijn Bakker - About me';
	const description =
		'Stijn Bakker is a digital strategy consultant, product owner and front-end engineer based in Rotterdam, the Netherlands. He has a background in music, engineering and strategy. He is currently working with various corporations, startups and non-profits.';
</script>

<SvelteSeo {title} {description} />
<div class="max-w-xl mx-auto py-8 px-3 leading-relaxed mt-10">
	<h1 class="font-serif text-4xl font-bold leading-normal mb-8">I'm Stijn Bakker</h1>

	<!-- <p>I live in <strike>Haarlem</strike> Rotterdam</p> -->

	<div class="font-bold">
		<p>I am a proud digital product builder</p>
		<p>I code, design, strategise, brand and manage</p>
		<p>Building new businesses around new digital products</p>
		<p>The more technically complex the better</p>
	</div>

	<br />

	<p>I do so now full-time as lead <a href="https://www.rb2.nl">CoreConnect</a></p>
	<p>Making it much simpler for SMBs to setup a technical complex architecture</p>
	<p>Thus freeing themselves from being locked-in to shitty tools</p>
	<p>
		In the sidelines I'm also spinning up <a href="https://www.concepting.company"
			>The Concepting Company</a
		>
	</p>

	<br />
	<p>In my spare time I'd like to read and think</p>
	<p>Occassionally culminating into <a href="/writings">writings</a></p>
	<p>Mainly on EU, tech, entrepreneurship and policy</p>
	<p>And I like to go hunting for <a href="/photography" class="underline">nice photographs</a></p>

	<h2 class="font-serif text-2xl font-bold mt-16 mb-4">
		My story <span class="text-xs opacity-20">(hover over text)</span>
	</h2>

	<div class="accordion">
		<section class="accordion-item">
			<p>I used to be a musician, stage technician and producer</p>
			<div class="accordion-item-content">
				<span>(2011 - 2016) - independent contractor</span>
			</div>
		</section>
		<section class="accordion-item">
			<p>I then became hardware engineer and industrial designer (BSc)</p>
			<div class="accordion-item-content">
				<span
					>(2013 - 2017) - <a href="https://vanberloagency.com/">VanBerlo</a>,
					<a href="https://goodhotel.co/london">Good Hotel London</a></span
				>
			</div>
		</section>
		<section class="accordion-item">
			<p>I added a masters specialising in strategy and organisational design (MSc)</p>
			<div class="accordion-item-content">
				<span
					>(2016 - 2019) - <a href="https://pezygroup.com/">Pezy Group</a>, Delft University of
					Technology</span
				>
			</div>
		</section>
		<section class="accordion-item">
			<p>
				I became a boardroom advisor the <a href="https://airlineoperations.ai/"
					>KLM | BCG partnership</a
				>
			</p>
			<div class="accordion-item-content">
				<span
					>(2017 - 2020) - <a href="https://www.klm.nl/">KLM</a>,
					<a href="https://www.bcg.com/">BCG</a></span
				>
			</div>
		</section>

		<section class="accordion-item">
			<p>I taught myself full-stack development</p>
			<div class="accordion-item-content">
				<span>First MERN stack, later SvelteKit with other DBs</span>
			</div>
		</section>

		<section class="accordion-item">
			<p>
				I switched to full-time front-end engineering during corona crisis for <a
					href="https://www.klm.nl">KLM</a
				>
			</p>
			<div class="accordion-item-content">
				<span>(2017 - 2020) - Designed and build "Corona Portal"</span>
			</div>
		</section>
		<section class="accordion-item">
			<p>I started for myself as independent product owner and strategic advisor</p>
		</section>
		<section class="accordion-item">
			<p>I worked with various corporations, startups and non-profits</p>
			<div class="accordion-item-content">
				<span
					>(2020 - 2023) - <a href="https://www.transip.nl/">Team.Blue</a>, FastApp, Vief, Gadero,
					EuroParcs, KickstartAI, NS, KLM, RB2, Fabrique</span
				>
			</div>
		</section>
		<br />
		<section class="accordion-item">
			<p>
				I now work as full-time lead on <span class="italic">CoreConnect</span> at
				<a href="https://www.rb2.nl" class="underline">RB2</a>
			</p>
			<div class="accordion-item-content">
				<span
					>(2023 - present) - A developer toolkit and platform for developing composable
					architectures, as a venture by <a href="https://www.rb2.nl">rb2</a>
				</span>
			</div>
		</section>
		<section class="accordion-item">
			<p>
				And am gearing up my venture studio <a
					class="underline"
					href="https://www.concepting.company">Concepting Company</a
				>
			</p>
		</section>
	</div>
</div>

<style lang="scss">
	a {
		@apply underline;
	}
	.accordion-item-content {
		@apply grid;
		grid-template-rows: 0fr;
		transition: grid-template-rows 100ms;

		span {
			@apply min-h-0 invisible transition-all duration-100 text-sm text-gray-400;
		}
	}

	.accordion-item:hover {
		.accordion-item-content {
			grid-template-rows: 1fr;
			span {
				@apply visible;
			}
		}
	}
</style>
