interface dataObject {
    value: string,
    type: "image" | "text"
    oversize: boolean,
    image? : {
        source: string,
        orientation: 'landscape' | 'portrait'
    },
    note? : {
        value: string,
        color?: 'yellow' | 'green' 
    },
    text?: {
        value: string,
        attribution?: string
    }
}
export const data = [
    {
        value: "/photography/amsterdam1.jpg",
        type: "image",
        image: {
            source: "/photography/amsterdam1.jpg",
            orientation: 'landscape'
        },
        oversize: true
    },
    {
        value: "2",
        type: "image",
        image: {
            source: "/photography/amsterdam1.jpg",
            orientation: 'portrait',
            caption: 'caption1'
        },
        oversize: false
    },
    {
        value: "2",
        type: "note",
        note: {
            value: "Incididunt dolore est duis incididunt fugiat. Veniam minim do culpa fugiat nulla labore. Eu labore minim in nulla adipisicing laborum quis incididunt veniam nulla eu. Irure dolor amet dolor fugiat excepteur anim deserunt anim ut excepteur culpa ea dolor nisi. Sint voluptate deserunt eu fugiat sit do. Ad laboris aliquip qui reprehenderit veniam sunt amet occaecat velit.",
        },
        oversize: false
    },
    {
        value: "2",
        type: "text",
        text: {
            value: "A nice beautiful sentence that spans a couple of lines",
            attribution: "Stijn Bakker"
        },
        oversize: true
    },
    {
        value: "2",
        type: "image",
        image: {
            source: "/photography/amsterdam1.jpg",
            orientation: 'portrait'
        },
        oversize: false
    },
    {
        value: "2",
        type: "text",
        oversize: false
    },
    {
        value: "2",
        type: "text",
        oversize: false
    }
]