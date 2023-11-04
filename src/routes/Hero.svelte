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
				mb-4
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
			text-3xl sm:text-5xl lg:text-5xl xl:text-6xl
			mb-8"
			style:transform={`translate3d(0, ${scroll * -1.2}px,0)`}
		>
			I'm a <a href="/about">digital product builder</a><br />
			I also <a href="/writings">sometimes write</a><br />
			and take the occassional <a href="/photography">photograph</a> <br />

			<!-- I'm <a href="https://core-connect.io">lead at CoreConnect</a>,
			<span class="text-sm">(part of <a href="https://www.rb2.nl">rb2</a>)</span><br />
			founder at <a href="https://the.concepting.company">The Concepting Company</a>, <br />
			all-round <a href="/topics-of-interest">always-learner</a>, <br />
			and <a href="/photography">enthusiastic photographer</a> -->
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
