export default {
    name: "aboutus",
    title: "За нас",
    type: "document",
    fields: [
        {   
            name: "About_title",
            title: "Заглавие на информацията относно сервиза",
            type: "string"
        },
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
            name: "About_button_name",
            title: "Име на бутона",
            type: "string"
        }
    ]
}