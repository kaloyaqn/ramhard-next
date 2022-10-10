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
            name: "Description_en",
            title: "Описание (на английски)",
            description: "Напишете описанието на заглавната секция (на английски)",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        },
        {
            name: "Description_tr",
            title: "Описание (на турски)",
            description: "Напишете описанието на заглавната секция (на турски)",
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