export default {
    name: "footer_query",
    title: "Footer",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Загалвие (на български)",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        },
        {
            name: "title_en",
            title: "Загалвие (на английски)",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        },
        {
            name: "title_tr",
            title: "Загалвие (на турски)",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        }
    ]
}