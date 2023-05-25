<script lang="ts">
	import Card from './card/Card.svelte';
	import type { TParsedSuperfeedItem } from './types';

	// export let username: string;
	// export let tweet: string;
	// export let imageUrl: string = '';
	export let item: TParsedSuperfeedItem

    const getUserProfileTagWithoutAtSign = (profileTag: string): string=> {
        return profileTag.startsWith('@')
				? profileTag.slice(1) // Remove the '@' sign if it exists
				: profileTag;
    }
	const getUserProfileUrl = (profileTag: string): string | undefined => {
		try {
			const profileWithoutAtSign = getUserProfileTagWithoutAtSign(profileTag)
			const twitterUrl = `https://twitter.com/${profileWithoutAtSign}`;
			return twitterUrl;
		} catch (error) {
			return undefined;
		}
	};
</script>
{#if item?.note && item?.name && item?.url}
<a href={item?.url}>
<Card {item}>
	<div class="mb-8 p-4 mt-3">
		<p><a href={getUserProfileUrl(item?.note)} class="text-sm font-bold mb-3 hover:underline">@{getUserProfileTagWithoutAtSign(item.note)}</a> • {item.date?.toLocaleDateString()}</p>
		<p class="mb-3">
			{item?.name}
		</p>
        {#if item?.image && Array.isArray(item?.image)}
		<!-- <img alt="123" class="w-full aspect-video bg-gray-300 object-cover rounded" src={item?.image}/> -->
        {/if}
	</div>
</Card>
</a>
{/if}