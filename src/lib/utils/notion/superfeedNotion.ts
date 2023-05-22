import { Client } from '@notionhq/client';

export const superfeedNotion = new Client({
	auth: import.meta.env.VITE_NOTION_SUPERFEED_SECRET
});

export const parseSuperfeedResponse = (rawResponse) => {
	// console.log(rawResponse);
	// Check if response is valid

	// Parse to list of results
	const resultList = rawResponse.results;
	const parsedResultList: ParsedResultList = [];

	// Work top to bottom to convert results into required format
	resultList.forEach((element) => {
		// console.log(element.properties.Type.select.name);
		switch (element.properties.Type.select.name) {
			case 'Tweet':
				// console.log('type is Tweet');
				parsedResultList.push(parseTweet(element));
				break;

			case 'Image':
				// console.log('type is Image');
				parsedResultList.push(parseImage(element));
				break;

			case 'Website':
				parsedResultList.push(parseWebsite(element));
				break;
			
			case 'Post-it':
				parsedResultList.push(parsePostit(element));
				break;

			default:
				// console.log('type is unknown');
				break;
		}
	});

	return parsedResultList;
};

const parseTweet = (notionPageObject): Tweet | EmptySuperfeedItem => {

    try {
        const stringArraysOfEmbed = notionPageObject.properties.Note.rich_text
        const embed = stringArraysOfEmbed.map(entry => entry.plain_text).join('') || undefined

        if(embed){
            return {
                type: "Tweet",
                embed
            }
        } else {
            return {
                type: "Empty",
                error: "Error fetching the tweet"
            }
        }
    
    } catch {
        return {
			type: 'Empty',
			error: 'Error fetching the tweet'
		}
    }
};

const parseImage = (notionPageObject): Image | EmptySuperfeedItem => {
	// console.log(notionPageObject);

    // type is image
    // first check if there is an image attached, if there is, take that as the url
    try{
        const url = notionPageObject.properties.Image.files[0].file.url
        return {
            type: "Image",
            url
        }
    } catch {
        return {
			type: 'Empty',
			error: 'Image retrieval failed in parseImage'
		} as EmptySuperfeedItem;
    }
};

const parseWebsite = (notionPageObject): Website | EmptySuperfeedItem => {
	try {
		// console.log('parseWebsite input:')
		// console.log(notionPageObject.properties)

		// support functions
		const stringArraysOfName = notionPageObject.properties.Name.title
        // const embed = stringArraysOfEmbed.map(entry => entry.plain_text).join('') || undefined
		// console.log('Name {title : []}: ', notionPageObject.properties.Name.title[0].plain_text)

		// extracting the data from the bject

		const url = notionPageObject.properties.URL.url
		const title = notionPageObject.properties.Name.title[0].plain_text
		// TODO: add note logic (optional field)
		const screenshotUrl = notionPageObject.properties.Image.files[0].file.url || undefined

		return {
			type: 'Website',
			url,
			title,
			screenshotUrl
		}
		

	} catch {
		return {
			type: 'Empty',
			error: 'Website retrieval failed'
		}
	}
}

const parsePostit = (notionPageObject): Postit | EmptySuperfeedItem => {
	try {
		console.log('parsePostit input:')
		console.log(notionPageObject.properties)

		// support functions
		// const stringArraysOfName = notionPageObject.properties.Name.title
        // const embed = stringArraysOfEmbed.map(entry => entry.plain_text).join('') || undefined
		// console.log('Name {title : []}: ', notionPageObject.properties.Name.title[0].plain_text)

		// extracting the data from the bject

		// const url = notionPageObject.properties.URL.url
		const title = notionPageObject.properties.Name.title[0].plain_text
		const note = notionPageObject.properties.Note.rich_text[0].plain_text

		console.log('title:', title)
		console.log('note:', note)
		// TODO: add note logic (optional field)
		// const screenshotUrl = notionPageObject.properties.Image.files[0].file.url || undefined

		return {
			type: 'PostIt',
			title,
			note
		}
		

	} catch {
		return {
			type: 'Empty',
			error: 'Postit retrieval failed'
		}
	}
}
