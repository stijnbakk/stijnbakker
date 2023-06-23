import { notionClient } from '$lib/utils/notion/notionClient';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	try {
		console.log('POST request received on newsletter/signup');
		const data = await request.json();

		const databaseId = import.meta.env.VITE_NOTION_SUBSCRIBER_DB_ID;

		const response = await notionClient.pages.create({
			parent: {
				type: 'database_id',
				database_id: databaseId
			},
			properties: {
				Email: {
					type: 'email',
					email: data.email
				},
				Language: {
					type: 'select',
					select: {
						name: data.language
					}
				}
			}
		});

		if (response) {
			return new Response();
		} else {
			throw Error;
		}

		// add logic to retrieve body
		// add logic to post to notion
		// add logic to check notion response and throw success or error accordingly
	} catch {
		return new Response(JSON.stringify({ message: 'Some error' }), { status: 400 });
	}
};
