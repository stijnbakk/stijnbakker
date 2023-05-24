<script lang="ts">

	import Card from "./card/Card.svelte";

    export let note:string

</script>
{#if note}
<Card type="postit">
    <div class="bg-yellow-200 pb-10 p-4">
        <p>
            {note}
        </p>
    </div>
</Card>
{/if}