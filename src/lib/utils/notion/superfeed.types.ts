export type ParsedResultList = Array<Tweet | EmptySuperfeedItem>
// type ParsedResultList = Array<Tweet | PostIt | Image | EmptySuperfeedItem> 
interface Tweet {
    type: "Tweet",
    embed?: string,
    url?: string
}

interface PostIt {
    type: "PostIt",
    title?: string,
    note: string
}

interface Image {
    type: "Image",
    url: URL,
    caption?: string,
    attribution?: string
}

interface Website {
    type: "Website",
    url: URL,
    title: string,
    note?: string,
    screenshotUrl?: string
}

interface EmptySuperfeedItem {
    type:"Empty",
    error: string
}