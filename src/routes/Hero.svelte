<script lang="ts">
	import ReachOut from '$lib/components/common/ReachOut.svelte';

	let scroll: number = 0;
</script>

<div
	class="
		
        flex items-center
        mx-10
		mb-10 sm:mb-0
		min-h-[calc(100vh-7.5rem)]
		"
	style:transform={`translate3d(0, ${scroll * -1.1}px,0)`}
>
	<div>
		<h1
			class="
				font-serif font-bold
				inline-block
				text-3xl sm:text-5xl lg:text-6xl xl:text-7xl
				leading-normal
				"
			style:transform={`translate3d(0, ${scroll * -1.3}px,0)`}
		>
			Hi, I'm Stijn <span class="mr-6" />
			<img
				src="/stijn.jpeg"
				class="rounded-full h-28 lg:h-40 inline-block grayscale mix-blend-multiply"
				alt="Stijn Bakker"
			/>
		</h1>

		<p
			class="
			introduction
			font-serif font-light
			text-3xl sm:text-5xl lg:text-6xl xl:text-7xl
			mb-8"
			style:transform={`translate3d(0, ${scroll * -1.2}px,0)`}
		>
			I'm a <a href="/freelance">freelance strategist</a>,<br />
			<a href="/concepts">concept designer</a>, <br />
			<a href="/topics-of-interest">curious person</a>, <br />
			and <a href="/photography">enthusiastic photographer</a>
		</p>
		<ReachOut />
	</div>
</div>

<style lang="scss">
	.introduction {
		line-height: 1.3;

		a {
			@apply transition-all duration-300
			underline underline-offset-8 
			hover:bg-black hover:text-white 
			rounded-md;
		}
	}
</style>
