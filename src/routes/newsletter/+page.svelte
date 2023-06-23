<script lang="ts">
	import type { PageData } from './$types';
	import SvelteSeo from 'svelte-seo';
	import SignUp from '../../lib/components/common/NewsletterSignUp.svelte';

	export let data: PageData;

	const title = 'Writings';
	const description = 'A collection of writings by Stijn Bakker';
</script>

<SvelteSeo {title} {description} />

<h1>Newsletter</h1>
<p>Coming soon</p>
<SignUp />

<!-- <ul>
	{#each data.posts as { slug, title, author, description, date }}
		<li>
			<a href="/newsletter/{slug}">
				{title}
			</a>
		</li>
	{/each}
</ul> -->

<slot />
