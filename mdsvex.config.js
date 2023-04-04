import remarkFootnotes from 'remark-footnotes'
import remarkGfm from 'remark-gfm';
import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.mdx', '.svx'],
	remarkPlugins: [
		remarkGfm,
		[remarkFootnotes, {inlineNotes: true}]
	],
	smartypants: {
		dashes: 'oldschool'
	},
});

export default config;