<script>
	let password = 'entrepreneurship';
	let passwordSet = 'entrepreneurship';
</script>

{#if password !== passwordSet}
	<div class="w-full min-h-screen flex items-center justify-center flex-col gap-4">
		<p class="font-bold text-sm">Ventura password protected:</p>
		<input
			type="password"
			bind:value={password}
			placeholder="password"
			class="text-center rounded"
		/>
	</div>
{:else if password === passwordSet}
	<div class=" mx-auto px-4 prose max-w-none">
		<slot />
	</div>
{/if}
