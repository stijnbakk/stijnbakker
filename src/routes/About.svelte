<div class="mx-auto max-w-3xl py-8 px-5 leading-relaxed mt-10 text-xl md:text-2xl font-serif">
	<div class="font-semibold leading-relaxed">
		<p>I am a proud digital product builder</p>
		<br />
		<p>I code, design, strategise, brand and manage</p>
		<p>Building new businesses around new digital products</p>
		<p>The more technically complex the better</p>
	</div>

	<br />
	<div class="leading-relaxed">
		<p>
			I do so now full-time as lead <a href="https://www.rb2.nl">CoreConnect</a>
			at <a href="https://www.rb2.nl">rb2</a>
		</p>
		<p>Making it much simpler for SMBs to setup MACH architectures</p>

		<p>
			In the sidelines I'm also spinning up <a href="https://www.concepting.company"
				>The Concepting Company</a
			>
		</p>
		<br />
		<p>I occassionally <a href="/writings">capture random thoughts</a></p>
		<p>Love concepting new product and business ideas</p>
		<p>
			And I like to go hunting outside for <a href="/photography" class="underline"
				>nice photographs</a
			>
		</p>
	</div>
	<br />
	<a class="text-sm md:text-lg" href="/about">My story</a>
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
