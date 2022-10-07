export default {
    name: "whyus",
    title: "Защо нас",
    type: "document",
    fields: [
        {
            name: "Subtitle_one",
            title: "Описание на секцията",
            type: "string"
        },
        {
            name: "Title_two",
            title: "Заглавие на първата причина",
            type: "string"
        },
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
            type: "image",
            options: {
                hotspot: true
            }
        }, 
        {
            name: "Title_three",
            title: "Заглавие на втората причина",
            type: "string"
        },
        {
            name: "Subtitle_three",
            title: "Описание на втората причина",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        },
        {
            name: "Image_two",
            title: "Снимка на втората причина",
            type: "image",
            options: {
                hotspot: true
            }
        },        {
            name: "Title_four",
            title: "Заглавие на третата причина",
            type: "string"
        },
        {
            name: "Subtitle_four",
            title: "Описание на третата причина",
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
            type: "image",
            options: {
                hotspot: true
            }
        } 
    ],
}
  
         