export default {
    name: "hero_title",
    title: "Hero",
    type: "document",
    fields: [
        {
            name: "Title",
            title: "Заглавие",
            description: "Напиеште заглавието на заглавната секция",
            type: "string",            
        },
        {
            name: "Description",
            title: "Описание",
            description: "Напишете описанието на заглавната секция",
            type: "string"
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