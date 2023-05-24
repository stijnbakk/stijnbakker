<script lang="ts">
	import SourceTag from "./SourceTag.svelte";
	import Tags from "./Tags.svelte";
	import TypeTag from "./TypeTag.svelte";

	

	export let authors: Array<string> = [];
	export let type: string;
	export let tags: Array<string> = [];
	export let note: string = '';
	export let featured: boolean = false;
	// TODO: add href option
</script>

<div class={`h-full md:flex justify-center items-center ${featured ? 'md:col-span-2' : ''}`}>
	<div class={`relative group`}>
		<div class="rounded relative overflow-hidden min-h-[50px] border">
			<slot />
			<div class="flex absolute bottom-0 w-full justify-end items-center">
				<SourceTag {authors} />
				<TypeTag {type} />
			</div>
		</div>
		<Tags {tags} />
		{#if note}
			<div
				class="absolute z-40 invisible opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:visible flex justify-center w-full"
			>
				<div>
				<div class="-mb-3 w-full flex justify-center">
					<div class="w-[20px] bg-yellow-200 aspect-square rotate-45" />
				</div>
				<div class="bg-yellow-200 p-4 rounded">
					<!-- <div class="absolute left-0 right-0 bottom-0 p-4 bg-gray-100 opacity-0 invisible transition-opacity duration-300 group-hover:opacity-100 group-hover:visible"> -->

					<p>
						{note}
					</p>
				</div>
				</div>
			</div>
		{/if}
	</div>
</div>
