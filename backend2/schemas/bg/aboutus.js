export default {
    name: "aboutus",
    title: "За нас",
    type: "document",
    fields: [
        {
            name: "About_desc",
            title: "Описание на информацията относно сервиза",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        },
        {
            name: "About_desc_en",
            title: "Описание на информацията относно сервиза (на английски)",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        },
        {
            name: "About_desc_tr",
            title: "Описание на информацията относно сервиза (на турски)",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        },
        {
            name: "About_more",
            title: "Повече информация",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        },
        {
            name: "About_more_en",
            title: "Повече информация (на английски)",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        },
        {
            name: "About_more_tr",
            title: "Повече информация (на турски)",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        }
    ]
}