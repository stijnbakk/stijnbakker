<script lang="ts">
	export let type: string;
</script>

{#if typeof(type) === 'string'}
<div
	class="text-white rounded-tl-md h-full bg-black flex items-center justify-center px-3 py-2 font-bold text-xs flex-grow-0 lowercase"
	>{type}</div
>
{/if}
