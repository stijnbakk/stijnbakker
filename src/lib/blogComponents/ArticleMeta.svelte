<script lang="ts">
	export let author: string;
	export let date: string;

	const formattedDate = new Date(date).toDateString();
</script>

<p>
	<span class="author">{author}</span>
	<span class="date">{formattedDate}</span>
</p>