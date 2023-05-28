<h2 class="font-serif text-3xl text-center mt-12">Other features</h2>
<div class="grid md:grid-cols-3 w-full p-10 gap-5">
	<div
		class="feature_item bg-[url('/concepts/docr/small_assets.png')] min-h-[250px] bg-contain bg-no-repeat bg-right my-auto row-span-2 
		rounded-t-2xl md:rounded-l-2xl 
		flex justify-center items-center h-full"
	>
		<div class="grid grid-cols-2">
			<div>
				<h3 class="mb-4">Integrated asset library<br />and bibliography</h3>
				<p class="hidden md:block">Don't worry about numbering, captions or reference formatting.</p>
			</div>
			<div />
		</div>
	</div>

	<div class="feature_item flex items-center">
        <div>
		<h3 class="mb-4">Advanced versioning with git</h3>
        <p class="hidden md:block">Use industry-standard git for advanced version control to collaborate on complex large documents</p>
    </div>
	</div>
	<div
		class="feature_item bg-[url('/concepts/docr/small_flat.png')] min-h-[250px] bg-contain bg-no-repeat bg-right my-auto row-span-2 
		md:rounded-r-2xl 
		flex items-center h-full"
	>
		<div class="grid grid-cols-2">
			<div>
				<h3 class="mb-4">Flat file structure</h3>
                <p class="hidden md:block">A docr-file is in actuality a zip file with some other files in there. You can dive right in and make changes directly to the code.</p>
			</div>
			<div />
		</div>
	</div>
	<div class="feature_item flex items-center rounded-b-2xl md:rounded-none">
        <div>
		<h3 class="mb-4">Open source technologies</h3>
		<p class="hidden md:block">Built using simple open technologies, to ensure that you will always be able to open your files.</p>
    </div>

	</div>
</div>

<style>
	.feature_item {
		@apply bg-gray-100 p-5 overflow-hidden;
	}
	.feature_item:hover {
		@apply bg-gray-200;
	}
	h3 {
		@apply font-serif text-xl;
	}
</style>
