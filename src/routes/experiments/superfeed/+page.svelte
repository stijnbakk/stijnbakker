<script lang="ts">
	import type { ParsedResultList } from '$lib/utils/notion/superfeed.types.js';
	import Card from '$lib/components/superfeed/card/Card.svelte';
	import TweetCard from '$lib/components/superfeed/TweetCard.svelte';
	import WebsiteCard from '$lib/components/superfeed/WebsiteCard.svelte';
	import PostitCard from '$lib/components/superfeed/PostitCard.svelte';
	import PhotographyCard from '$lib/components/superfeed/PhotographyCard.svelte';
	import ArticleCard from '$lib/components/superfeed/ArticleCard.svelte';

	type TData = {
		results: ParsedResultList;
	};
	export let data: TData;

	// console.log(data);

</script>

<div class="p-10 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
	<PhotographyCard src="/photography/greece8.jpeg" orientation="portrait" />
	<PhotographyCard src="/photography/amsterdam1.jpg" featured={true} />
	<TweetCard
		username="stijnbakker"
		tweet="Software, like finance, is an intimidating jargon filled world for the people not in it. But,
	like finance, you as a business person also have an intuition that you need to have some grasp
	of it, as it being a more and more critical part of your business."
		imageUrl="/"
	/>
	<ArticleCard title="Inkbase - programmable ink" url="https://www.stijnbakker.com" note="This is awesome"/>
	<WebsiteCard title="StijnBakker.com" url="https://www.stijnbakker.com" note="Do veniam voluptate anim cupidatat sit amet deserunt nulla velit dolore dolor ipsum incididunt. Ipsum ullamco officia in elit exercitation fugiat consectetur ex sit. Tempor velit eu cillum est enim excepteur ipsum voluptate nulla non sit officia Lorem culpa est. Incididunt in sit aliqua velit sit eiusmod cupidatat sint nostrud dolor esse anim. Nisi veniam cillum esse laboris reprehenderit eiusmod laborum pariatur laboris consectetur ipsum adipisicing. Culpa aute ipsum deserunt duis cillum id pariatur eu. Lorem occaecat irure nostrud est ex aliqua ullamco ut ipsum Lorem ad nisi excepteur enim. Irure adipisicing aliquip adipisicing dolore duis aliqua esse aliqua dolor dolore cillum et excepteur fugiat." />
	<PostitCard
		note="Eu ex nostrud nostrud do laborum. Laborum ad nulla incididunt ullamco adipisicing consectetur eiusmod laboris non. Aliquip sit proident sunt. Ullamco cillum elit aliquip voluptate veniam voluptate velit sunt qui aliqua mollit quis esse. Velit ipsum do elit cupidatat aute aliqua esse laboris esse amet."
	/>

	<PhotographyCard src="/photography/amsterdam1.jpg" />
	<PhotographyCard src="/photography/greece2.jpeg" orientation="portrait" featured={true} />

	{#if data.results && Array.isArray(data.results)}
		{#each data.results as item, index}
			<!-- {#if item.type === 'Image'}
				<div class={setColumnNumber(index)}>
					<img src={item.url} class="w-full" />
				</div>
			{:else if item.type === 'Tweet'}
				<div class={`w-full px-2 pb-4 bg-white hover:bg-gray-100 rounded-md ${setColumnNumber}`}>
					<div class="mb-2">
						{@html item.embed}
					</div>
					<span class="bg-black p-1 text-white rounded">Test</span>
				</div>
			{:else if item.type === 'Website'}
				<a href={item.url}>
					<div class="hover:bg-gray-100 p-2 rounded">
						<div
							class={`bg-gray-200 w-full aspect-[14/10] rounded bg-cover bg-top `}
							style={`background-image: url(${item.screenshotUrl})`}
						/>
						<p>{item.title}</p>
					</div>
				</a>
			{:else if item.type === 'PostIt'}
				<div class="bg-yellow-200 p-10">
					<p>{item.note}</p>
				</div>
			{/if} -->
		{/each}
	{:else}
		<p>Loading...</p>
	{/if}
</div>
