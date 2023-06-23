<script lang="ts">
	import { page } from '$app/stores';
	type MenuItem = {
		label: string;
		url?: string;
		subItems?: MenuItem[];
	};

	let menu: MenuItem[] = [
		{
			label: 'About',
			url: '/about'
		},
		{
			label: 'Freelance',
			url: '/freelance'
		},
		{
			label: 'Other',
			subItems: [
				{ label: 'Treasure chest', url: '/treasure' },
				{ label: 'Topics of interest', url: '/topics-of-interest' },
				{ label: 'Concepts', url: '/concepts' },
				{ label: 'Legacy portfolio', url: '/portfolio' },
				{ label: 'Writings', url: '/writings' },
				{ label: 'Photography', url: '/photography' }
			]
		}
	];

	function isActive(url: string): boolean {
		return $page.url.pathname === url;
	}

	function isChildActive(item: MenuItem): boolean | undefined {
		return item.subItems && item.subItems.some((subItem) => isActive(subItem.url as string));
	}
	let mobileMenuOpen: boolean = false;
	let selectedTopLevel: MenuItem | null = null;

	function navigate(url: string) {
		mobileMenuOpen = false;
		selectedTopLevel = null;
		location.href = url;
	}
</script>

<!-- Desktop Menu -->
<div class="hidden md:flex">
	{#each menu as item}
		<div class="relative group">
			<button
				class={`text-black py-4 px-3 lowercase underline-offset-2 ${
					isActive(item.url) || isChildActive(item) ? 'active' : ''
				} hover:underline`}
				on:click={() => {
					item.url ? navigate(item.url) : null;
				}}
			>
				{item.label}
			</button>

			{#if item.subItems}
				<div
					class="absolute top-full right-0 w-auto min-w-[120px] bg-white z-10 group-hover:block hidden"
				>
					{#each item.subItems as subItem}
						<a
							href="#"
							class={`block px-4 py-2 lowercase text-sm text-gray-700 ${
								isActive(subItem.url) ? 'active' : ''
							} hover:underline`}
							on:click={() => navigate(subItem.url)}
						>
							{subItem.label}
						</a>
					{/each}
				</div>
			{/if}
		</div>
	{/each}
</div>

<!-- Mobile Menu -->
<div class="md:hidden fixed top-4 right-4 z-50">
	<button
		class="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
		on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
	>
		☰
	</button>

	{#if mobileMenuOpen}
		<div class="fixed inset-0 z-50 bg-gray-900 flex flex-col items-center justify-center">
			{#if selectedTopLevel === null}
				{#each menu as item}
					<button
						class="text-white text-xl mb-4 hover:text-gray-300"
						on:click={() => {
							item.url ? navigate(item.url) : (selectedTopLevel = item);
						}}
					>
						<!-- on:click={() => {item.url ? navigate(item.url) : null}} -->
						{item.label}
					</button>
				{/each}
			{:else}
				<button class="text-white text-xl mb-4" on:click={() => (selectedTopLevel = null)}>
					&larr; Back
				</button>
				{#each selectedTopLevel.subItems as subItem}
					<button
						class="text-white lowercase text-xl mb-4 hover:text-gray-300"
						on:click={() => navigate(subItem.url)}
					>
						{subItem.label}
					</button>
				{/each}
			{/if}
			<button
				class="absolute top-4 right-4 text-white text-2xl"
				on:click={() => (mobileMenuOpen = false)}
			>
				&times;
			</button>
		</div>
	{/if}
</div>

<style lang="scss">
	.active {
		@apply font-bold underline;
	}
</style>
