<script lang="ts">
	import type { TNotionDbMultiSelect } from '$lib/utils/notion/parseDbPageProperties';

	export let sources: TNotionDbMultiSelect;
</script>

<div class="flex-grow pl-4">
	{#if sources}
		{#each sources as source, index}
			<span class="text-xs text-gray-200"
				>{source}
				{#if index + 1 < sources.length}
					•
				{/if}
			</span>
		{/each}
	{/if}
</div>
