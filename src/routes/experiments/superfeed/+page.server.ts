import { parseSuperfeedResponse, superfeedNotion } from "$lib/utils/notion/superfeedNotion";
import { data } from "../grid-spacing/data";

export const prerender = true;

export async function load() {
    const databaseId = import.meta.env.VITE_NOTION_SUPERFEED_DB_ID

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
                        contains: "Superfeed"
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
    })

    // console.log(response)

    if (response){
        const parsedResponse = parseSuperfeedResponse(response)
        // console.log('parsedResonse:')
        // console.log(parsedResponse)
        return {
            results: parsedResponse
        }
            
    }
};