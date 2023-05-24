<script lang="ts">
	import Card from './card/Card.svelte';

	export let username: string;
	export let tweet: string;
	export let imageUrl: string = '';

    const getUserProfileTagWithoutAtSign = (profileTag: string): string=> {
        return profileTag.startsWith('@')
				? profileTag.slice(1) // Remove the '@' sign if it exists
				: profileTag;
    }
	const getUserProfileUrl = (profileTag: string): URL | undefined => {
		try {
			const profileWithoutAtSign = getUserProfileTagWithoutAtSign(profileTag)
			const twitterUrl = `https://twitter.com/${profileWithoutAtSign}`;
			return new URL(twitterUrl);
		} catch (error) {
			return undefined;
		}
	};
</script>
{#if username && tweet}
<Card type="tweet" tags={['test', 'test2']} authors={['Stijn Bakker']}>
	<div class="mb-8 p-4 mt-3">
		<p class="text-sm font-bold mb-3">{getUserProfileTagWithoutAtSign(username)} • 21 may 2023</p>
		<p class="mb-3">
			Software, like finance, is an intimidating jargon filled world for the people not in it. But,
			like finance, you as a business person also have an intuition that you need to have some grasp
			of it, as it being a more and more critical part of your business.
		</p>
        {#if imageUrl}
		<img alt="123" class="w-full aspect-video bg-gray-300 rounded" src={imageUrl}/>
        {/if}
	</div>
</Card>
{/if}