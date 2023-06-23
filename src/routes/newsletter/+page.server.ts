// import type { PageServerLoad } from '../$types';
import { slugFromPath } from '$lib/slugFromPath';
import type { PageServerLoad } from './$types';
import { dev } from '$app/environment';

export const load: PageServerLoad = async ({ url }) => {
	const modules = import.meta.glob(`/src/routes/newsletter/letters/*.{md,svx,svelte.md}`);

	const postPromises = Object.entries(modules).map(([path, resolver]) =>
		resolver().then(
			(post) =>
				({
					slug: slugFromPath(path),
					...(post as unknown as App.MdsvexFile).metadata
				} as App.BlogPost)
		)
	);

	const posts = await Promise.all(postPromises);
	const publishedPosts = dev ? posts : posts.filter((post) => post.published);

	publishedPosts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

	return { posts: publishedPosts };
};
