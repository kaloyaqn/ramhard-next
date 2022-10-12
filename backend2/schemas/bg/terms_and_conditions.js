export default {
    name: "terms_and_conditions",
    title: "Правила и условия",
    type: "document",
    fields: [
        {
            name: "terms_bg",
            title: "Правила и условия (на български)",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        },
        {
            name: "terms_en",
            title: "Правила и условия (на английски)",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        },
        {
            name: "terms_tr",
            title: "Правила и условия (на турски)",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        }
    ]
}