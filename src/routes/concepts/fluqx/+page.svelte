<script>
	import IPhone from './IPhone.svelte';
</script>

<div class="px-10 flex flex-row gap-10 items-center">
	<div class="grow">
		<p class="font-bold">
			Fluqx <span class="bg-blue-600 font-normal text-sm ml-3 p-1 px-2 rounded text-white"
				>concept</span
			>
		</p>
		<p />
		<h1 class="font-serif text-5xl leading-normal mb-6">
			A powerful read-later app to keep up with any website
		</h1>
		<ul class="benefitsList">
			<li>Keep up with any news-source: personal websites, RSS feeds, newsletters</li>
			<li>Streamline your reading experience by splitting sources into different 'feeds'</li>
			<li>
				Split your time into a time for keeping up with what's new, and focused reading and
				annotation
			</li>
			<li>Excellent reading and annotation experience</li>
			<li>Powerful storage and organisation for articles, notes and highlights</li>
		</ul>
	</div>
	<div class="px-0 md:px-10 flex-shrink-0">
		<IPhone />
	</div>
</div>

<style lang="scss">
	.benefitsList {
		@apply text-lg leading-loose;
		li {
			@apply list-item list-disc;
		}
	}
</style>
