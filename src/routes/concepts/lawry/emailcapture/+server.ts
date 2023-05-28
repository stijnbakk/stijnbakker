import { notion } from "$lib/utils/notion"
import type { RequestEvent } from "./$types"
import { error } from '@sveltejs/kit'

// TODO: make more robust with validation of the body
// TODO: move to universally usable library to use with other projects as well
// TODO: make compatible with Notion dashboard (show unique counts)
// TODO: check if email exists, otherwise add concept to multi-select

const databaseId = import.meta.env.VITE_NOTION_DATABASE_ID

export async function POST({request}:RequestEvent){
    // DONE: Setup an api enpoint
    // retrieve an email and concept_id
    const requestBody = await request.json()
    console.log(requestBody)

    const response = await notion.pages.create({
        parent: {
            type: 'database_id',
            database_id: databaseId
        },
        properties:{
            "Email": {
                email: requestBody.email
            },
            "concept": {
                select: {
                    name: requestBody.concept_id
                }
            }

        }
    })
}