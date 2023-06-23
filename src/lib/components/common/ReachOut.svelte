<script>
	import Icon from '@iconify/svelte';
</script>

<div class="buttons">
	<a href="mailto:stijn@stijnbakker.com"><Icon icon="uil:envelope" class="icon" /></a>
	<a href="tel:0031630519248"><Icon icon="uil:phone" class="icon" /></a>
	<a href="https://www.linkedin.com/in/stijnbakker-innovation/"
		><Icon icon="uil:linkedin" class="icon" /></a
	>
	<a href="https://www.twitter.com/stijnbakker"><Icon icon="uil:twitter" class="icon" /></a>
	<!-- <a href="/newsletter"><Icon icon="uil:newspaper" class="icon" /></a> -->
</div>

<style lang="scss">
	.buttons {
		@apply flex flex-row gap-2 -ml-2 text-xl;
		.icon {
			@apply h-10;
		}
		a {
			@apply p-2
			inline-block rounded 
			hover:bg-black hover:text-white 
			transition-all 
			my-[0.15rem]
			text-xl sm:text-base;
		}
	}
</style>
