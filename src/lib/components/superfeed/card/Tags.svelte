<script lang="ts">
    export let tags: Array<String>
        let tagsLength:number = 0
    </script>
<div class="text-xs text-gray-300 py-2 text-right">
    {#each tags as tag,index}
        <span>{tag}
        {#if index+1 < tags.length}
            •
        {/if}
        </span>
    {/each}
</div>