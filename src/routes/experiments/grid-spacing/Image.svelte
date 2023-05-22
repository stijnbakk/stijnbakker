<script>
export let item;

</script>

<div class="w-full ">
    <div
        class={`
    ${item.image?.orientation === 'landscape' ? 'aspect-[3/2]' : 'aspect-[2/3]'}
    bg-no-repeat bg-[url('${item.image?.source}')] bg-cover bg-center
    h-full rounded shadow
    
    `}
    >
        {#if item.image?.caption}
        <div
            class="w-full h-full flex items-end justify-end opacity-0 hover:opacity-100 transition-all duration-200"
        >
            <div class="bg-white p-3 m-3 rounded">{item.image?.caption}</div>
        </div>
        {/if}
    </div>
</div>