<script lang="ts">
	import { onMount } from 'svelte';
	import SourceTag from './SourceTag.svelte';
	import Tags from './Tags.svelte';
	import TypeTag from './TypeTag.svelte';
	import type { TParsedSuperfeedItem } from '../types';

	// export let authors: Array<string> = [];
	// export let type: string;
	// export let tags: Array<string> = [];
	export let note: string = '';
	// export let featured: boolean = false;
	// TODO: add href option

	export let item: TParsedSuperfeedItem;

	const checkIfFeaturedExists = (attributes: Array<string> | undefined): boolean => {
		try {
			if (Array.isArray(attributes)) {
				return attributes.includes('featured');
			}
			return false; 
		} catch {
			return false;
		}
	};
</script>

<div
	class={`h-full `}
>
	<div class={`relative group`}>
		<div class="rounded relative overflow-hidden border">
			<slot />
			<div class="flex absolute bottom-0  w-full justify-end items-center">
				<SourceTag sources={item?.sources} />
				<TypeTag type={item?.type} />
			</div>
		</div>
		<Tags tags={item?.tags} />
		{#if note}
			<div
				class="absolute z-40 invisible opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:visible flex justify-center w-full"
			>
				<div>
					<div class="-mb-3 w-full flex justify-center">
						<div class="w-[20px] bg-white border-[1px] border-gray-200 z-10 aspect-square rotate-45" />
					</div>
					<div class="bg-white p-4 rounded border-[1px] border-gray-200 z-20">
						<p>
							{note}
						</p>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>
