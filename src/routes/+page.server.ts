import { parseSuperfeedQueryResults } from '$lib/components/superfeed/superfeed';
import { superfeedNotion } from '$lib/utils/notion/superfeedNotion';

export const prerender = true;

export async function load() {
	const databaseId = import.meta.env.VITE_NOTION_SUPERFEED_DB_ID;

	const response = await superfeedNotion.databases.query({
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
						contains: 'Superfeed'
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

		const parsedResults = parseSuperfeedQueryResults(response.results);
		// console.log(parsedResults);
		return {
			results: parsedResults
		};
	}
}
