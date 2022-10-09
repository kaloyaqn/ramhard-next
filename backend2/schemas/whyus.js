export default {
    name: "whyus",
    title: "Защо нас",
    type: "document",
    fields: [
        {
            name: "Subtitle_one",
            title: "Описание на секцията",
            description: "Напишете описанието на втората секция",
            type: "string",
        },
        {
            name: "Title_two",
            title: "Заглавие на първата причина",
            description: "Напишете заглавието на причина 1",
            type: "string"        },
        {
            name: "Subtitle_two",
            title: "Описание на първата причина",
            type: "array",
           of: [
                {
                  type: 'block'
                }
            ]
        },
        {
            name: "Image_one",
            title: "Снимка на първата причина",

            description: "Променете снимката на причина 1",
            type: "image",
            options: {
                hotspot: true
            }
        }, 
        {
            name: "Title_three",
            title: "Заглавие на втората причина",

            description: "Напишете заглавието на причина 2",
            type: "string"
       },
        {
            name: "Subtitle_three",
            title: "Описание на втората причина",

            description: "Напишете описанието на причина 2",
            type: "array",
            of: [{
                  type: "block"  
            }                  
            ]
        },
        {
            name: "Image_two",
            title: "Снимка на втората причина",

            description: "Променете снимката на причина 2",
            type: "image",
            options: {
                hotspot: true
            }
        },        {
            name: "Title_four",
            title: "Заглавие на третата причина",

            description: "Напишете заглавието на причина 3",
           type: "string"
        },
        {
            name: "Subtitle_four",
            title: "Описание на третата причина",

            description: "Напишете описанието на причина 3",
           type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        },
        {
            name: "Image_three",
            title: "Снимка на третата причина",

            description: "Променете снимката на причина 3",
            type: "image",
            options: {
                hotspot: true
            }
        } 
    ],
}
  
         