<script lang="ts">
    export let authors: Array<String>
</script>
<div class="flex-grow pl-4">
     {#each authors as author,index}
        <span class="text-xs text-gray-200">{author}
        {#if index+1 < authors.length}
            •
        {/if}
        </span>
    {/each}
	
</div>
