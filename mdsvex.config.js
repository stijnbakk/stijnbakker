import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import rehypeHighlight from 'rehype-highlight';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx', '.mdx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: [rehypeHighlight]
});

// TODO: add syntax highlighting

export default config;
