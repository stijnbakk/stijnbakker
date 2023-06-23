// import type { PageServerLoad } from '../$types';
import { slugFromPath } from '$lib/slugFromPath';
import type { PageServerLoad } from './$types';

// const MAX_POSTS = 10;
// TODO: Fix sitemap generation for blog - ie. fix static generation for blog

export const load: PageServerLoad = async ({ url }) => {
	const modules = import.meta.glob(`/src/routes/writings/posts/*.{md,svx,svelte.md}`);

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
	const publishedPosts = posts.filter((post) => post.published);

	// publishedPosts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));
	publishedPosts.sort((a, b) => (new Date(b.date) > new Date(a.date) ? -1 : 1));

	return { posts: publishedPosts };
};
