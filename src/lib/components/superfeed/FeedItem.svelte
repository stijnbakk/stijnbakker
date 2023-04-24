<script lang="ts">
    export let primaryTag:string = ""
    export let secondaryTags:string[] = []
</script>
<style lang="scss">
    @keyframes -global-fade-in {
        0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
    }
</style>
<!-- <Saos animation={'fade-in 0.5s'}> -->
<div class="flex flex-col">
    <div class='w-full'>
        <slot/>
    </div>
    <div class="flex flex-row">
        <div class="grow"></div>
        {#if secondaryTags}
            
        <div class=" px-3 py-1">
            {#if secondaryTags.length === 1}
            {secondaryTags[0]}
            {:else}
            {#each secondaryTags as secondaryTag }
                <span> {secondaryTag} </span> 
            {/each}
            {/if}
            
        </div>
        {/if}
        {#if primaryTag}
        <div class="bg-black py-1 px-3 text-white">
            {primaryTag}
        </div>
        {/if}
    </div>
</div>
<!-- </Saos> -->