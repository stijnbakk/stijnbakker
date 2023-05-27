<script lang="ts">
	import type { TNotionDbSelect } from "$lib/utils/notion/parseDbPageProperties";

	export let type: TNotionDbSelect;
</script>

{#if typeof(type) === 'string'}
<div
	class="text-white rounded-tl-md h-full bg-black flex items-center justify-center px-3 py-2 font-bold text-xs flex-grow-0 lowercase invisible opacity-0 transition-all duration-300  group-hover:opacity-100 group-hover:visible"
	>{type}</div
>
{/if}
