import { parseSuperfeedQueryResults } from '$lib/components/superfeed/superfeed';
import { notionClient } from '$lib/utils/notion/notionClient';

export const prerender = true;

export async function load() {
	const databaseId = import.meta.env.VITE_NOTION_SUPERFEED_DB_ID;

	const response = await notionClient.databases.query({
		database_id: databaseId,
		filter: {
			and: [
				{
					property: 'Public',
					checkbox: {
						equals: true
					}
				},
				{
					property: 'Topic',
					multi_select: {
						contains: 'Treasure'
					}
				}
			]
		},
		sorts: [
			{
				property: 'Date_sort',
				direction: 'descending'
			}
		],
		page_size: 100
	});

	// console.log(response)

	if (response) {
		// TODO: make robust with try catch
		console.log(response);

		const parsedResults = parseSuperfeedQueryResults(response.results);
		// console.log(parsedResults);
		return {
			results: parsedResults
		};
	}
}
