export default{
    name: "cta",
    title: "ЦТА",
    type: "document",
    fields: [
        {
            name: "Title",
            title: "Заглавие",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        },
        {
            name: "Title_en",
            title: "Заглавие (на английски)",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        },
        {
            name: "Title_tr",
            title: "Заглавие (на турски)",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        }
    ]
}