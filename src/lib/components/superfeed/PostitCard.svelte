<script lang="ts">

	import Card from "./card/Card.svelte";
	import type { TParsedSuperfeedItem } from "./types";

    // export let note:string
    export let item:TParsedSuperfeedItem

</script>
{#if item?.note}
<Card {item}>
    <div class="bg-yellow-200 pb-10 p-4">
        <p>
            {item?.note}
        </p>
    </div>
</Card>
{/if}