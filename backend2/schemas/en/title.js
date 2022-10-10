export default {
    name: "hero_title_en",
    title: "Hero section",
    type: "document",
    fields: [
        {
            name: "Description",
            title: "Описание",
            description: "Напишете описанието на заглавната секция (английски)",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        },
        {
            name: "Image",
            title: "Снимка",
            description: "Променете снимката на заглавната секция (английски)",
            type: "image",
            options:{
                hotspot: true
            }
        },
    ],
}