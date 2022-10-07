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
            name: "About_more",
            title: "Повече информация",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        }
    ]
}