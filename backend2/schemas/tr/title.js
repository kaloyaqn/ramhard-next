export default {
    name: "hero_title",
    title: "Начална секция",
    type: "document",
    fields: [
        {
            name: "Description",
            title: "Описание",
            description: "Напишете описанието на заглавната секция",
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
            description: "Променете снимката на заглавната секция",
            type: "image",
            options:{
                hotspot: true
            }
        },
    ],
}