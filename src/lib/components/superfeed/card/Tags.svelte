<script lang="ts">
	import type { TNotionDbMultiSelect } from "$lib/utils/notion/parseDbPageProperties";

    export let tags: TNotionDbMultiSelect
        let tagsLength:number = 0
    </script>
{#if tags}
<div class="text-xs text-gray-300 py-2 text-right invisible opacity-0 transition-all duration-300  group-hover:opacity-100 group-hover:visible">
    {#each tags as tag,index}
        <span>{tag}
        {#if index+1 < tags.length}
            •
        {/if}
        </span>
    {/each}
</div>
{/if}