<script>
	import Feature from './Feature.svelte';
</script>

<div class="p-4 py-20 container mx-auto">
	<h2 class="font-sans text-2xl mb-5 text-center">Features</h2>
	<div class="features w-full md:grid grid-cols-3 gap-10">
		<Feature
			title="Legal first-aid chatbot"
			description="Lawry knows your company and legal history. Based on that she can quickly help you make
			sense of a legal situation."
		/>
		<Feature
			title="Tailored lawyer recommendations"
			description="After getting a firmer grip on your legal challenge, and understanding your business, Lawry
			can recommend you a service and/or specialised laywer to help you out"
		/>
		<Feature
			title="(Semi) AI automated legal services"
			description="Let Lawry generate a patent or trademark search, a service contract, or terms and conditions
			for a fraction of the cost"
		/>
	</div>
</div>