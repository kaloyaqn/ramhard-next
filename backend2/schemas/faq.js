export default {
    name: "faq",
    title: "Често задавани въпроси",
    type: "document",
    fields: [
        {
            name: "Title",
            title: "Zaglavie",
            type: "string",
        },
        {
            name: "Description",
            title: "Opisanie",
            type: 'array',
            of:[{type: 'block'}]
        }
    ]
}