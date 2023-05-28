<script>
	import Opportunity from './Opportunity.svelte';
</script>

<div class="container mx-auto py-20">
	<h2 class="text-2xl mb-8 text-center">Potential for growth</h2>
	<div class="features w-full grid md:grid-cols-3 lg:grid-cols-5 gap-4">
		<Opportunity
			title="Semi-automated document drafting"
			description="Conduct trademark and patent searches. Generate service contracts, privacy statements and condition documents tailored to specific businesses"
		/>
		<Opportunity
			title="Contract management"
			description="Let Lawry take care of contract sifting, expiration dates and notifications."
		/>
		<Opportunity
			title="Legal-firm management platform"
			description="Enable a small legal firm to manage clients, quotes, hour registration and invoicing using lawry's built-in AI tooling to speed up work process."
		/>
		<Opportunity
			title="Digital lawyer platform"
			description="Search lawyers, recommendations and (digitally) interact with them for quick advice or setting up an appointment."
		/>
		<Opportunity
			title="Digital document vault"
			description="Store and timestamp ideas, store and monitor all service contracts in one place."
		/>
		
	</div>
</div>
