<script>
	import SvelteSeo from 'svelte-seo';
	
	const title = "Stijn Bakker - About me"
	const description = "Stijn Bakker is a digital strategy consultant, product owner and front-end engineer based in Rotterdam, the Netherlands. He has a background in music, engineering and strategy. He is currently working with various corporations, startups and non-profits."
</script>


<SvelteSeo
	title={title}
	description={description}
/>
<div class="max-w-xl mx-auto py-8 px-3 leading-relaxed mt-10">
	<h1 class="font-serif text-4xl font-bold leading-normal mb-8">I'm Stijn Bakker</h1>
	<p>I live in beautiful <strike>Haarlem</strike> Rotterdam</p>
	<p>
		I earn my living as an <a href="https://www.bakkery.io"
			>independent digital strategy consultant</a
		>
	</p>
	<p>
		In my spare time I like to take beautiful <a href="https://photography.stijnbakker.com"
			>photos</a
		>, <br />
		read and write on <a href="#">EU tech, entrepreneurship and policy</a><br />
		and design and build <a href="#">business concepts</a>.
	</p>

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
					>(2020 - present) - <a href="https://www.transip.nl/">Team.Blue</a>, FastApp, Vief,
					Gadero, EuroParcs, KickstartAI, NS, KLM, RB2, Fabrique</span
				>
			</div>
		</section>
		<br />
		<section class="accordion-item">
			<p>I now use my experience to bridge business, designers and engineers</p>
		</section>
		<section class="accordion-item">
			<p>
				I do this as <a href="https://www.bakkery.io">independent advisor</a> for SMB companies
			</p>
		</section>
	</div>
</div>

<style>
	a {
		@apply underline underline-offset-2;
	}
	.accordion-item-content,
	.accordion:hover .accordion-item-content {
		height: 0;
		overflow: hidden;
		transition: height 0.25s;
		transition-delay: 0.25s;
	}
	.accordion-item p {
		@apply leading-relaxed;
	}
	section {
		display: block;
	}
	p {
		transition: all 0.5s ease-in-out;
	}
	.accordion-item-content span {
		/* color: rgba(0, 0, 0, 0.18824); */
		@apply text-sm opacity-50;
	}
	.accordion .accordion .accordion-item--default .accordion-item-content,
	.accordion:hover .accordion-item:hover .accordion-item-content {
		height: 3.4em;
		/* @apply h-min */
	}
</style>