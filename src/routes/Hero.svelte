<script lang="ts">
	let scroll: number = 0;
</script>

<!-- <svelte:window bind:scrollY={scroll} /> -->
        
        <!-- p-5 md:p-10 lg:p-20 xl:p-28 -->
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
			<a href="#">concept designer</a>, <br />
			<a href="#">curious person</a>, <br />
			and <a href="#">enthusiastic photographer</a>
		</p>
		<div class="buttons" style:transform={`translate3d(0, ${scroll * -1.1}px,0)`}>
			<a href="https://cal.com/stijnbakker" class="">schedule</a>
			<a href="tel:0031630519248">call</a>
			<a href="stijn@stijnbakker.com">mail</a>
			<a href="https://www.linkedin.com/in/stijnbakker-innovation/">connect</a>
		</div>
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
	.buttons {
		line-height: 1.8;
		a {
			@apply py-2 px-4 
			border-2 border-black 
			inline-block rounded 
			hover:bg-black hover:text-white 
			transition-all 
			my-[0.15rem]
			text-xs sm:text-base;
		}
	}
</style>
