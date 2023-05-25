import { Client } from '@notionhq/client';

export const superfeedNotion = new Client({
	auth: import.meta.env.VITE_NOTION_SUPERFEED_SECRET
});