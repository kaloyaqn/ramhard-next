export default {
    name: "whyus",
    title: "Защо нас",
    type: "document",
    fields: [
        {
            name: "Subtitle_one",
            title: "Описание на секцията",
            description: "Напишете описанието на заглавието на секцията (текстът под заглавието).",
            type: "string",
        },
        {
            name: "Subtitle_one_en",
            title: "Описание на секцията (на английски)",
            description: "Напишете описанието на заглавието на секцията (текстът под заглавието).",
            type: "string",
        },
        {
            name: "Subtitle_one_tr",
            title: "Описание на секцията (на турски)",
            description: "Напишете описанието на заглавието на секцията (текстът под заглавието).",
            type: "string",
        },
        {
            name: "Title_two",
            title: "Заглавие на първата причина",
            description: "Напишете заглавието на първата причина.",
            type: "string"        
        },
        {
            name: "Title_two_en",
            title: "Заглавие на първата причина (на английски)",
            description: "Напишете заглавието на първата причина.",
            type: "string"        
        },
        {
            name: "Title_two_tr",
            title: "Заглавие на първата причина (на турски)",
            description: "Напишете заглавието на първата причина.",
            type: "string"        
        },
        {
            name: "Subtitle_two",
            title: "Описание на първата причина",
            description: "Напишете описанието на първата причина.",
            type: "array",
            of: [
                {
                  type: 'block'
                }
            ]
        },
        {
            name: "Subtitle_two_en",
            title: "Описание на първата причина (на английски)",
            description: "Напишете описанието на първата причина.",
            type: "array",
            of: [
                {
                  type: 'block'
                }
            ]
        },
        {
            name: "Subtitle_two_tr",
            title: "Описание на първата причина (на турски)",
            description: "Напишете описанието на първата причина.",
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
            name: "Title_three_en",
            title: "Заглавие на втората причина (на английски)",
            description: "Напишете заглавието на причина 2",
            type: "string"
        },
        {
            name: "Title_three_tr",
            title: "Заглавие на втората причина (на турски)",
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
            name: "Subtitle_three_en",
            title: "Описание на втората причина (на английски)",
            description: "Напишете описанието на причина 2",
            type: "array",
            of: [{
                  type: "block"  
            }                  
            ]
        },
        {
            name: "Subtitle_three_tr",
            title: "Описание на втората причина (на турски)",
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
        },        
        {
            name: "Title_four",
            title: "Заглавие на третата причина",
            description: "Напишете заглавието на причина 3",
            type: "string"
        },
        {
            name: "Title_four_en",
            title: "Заглавие на третата причина (на английски)",
            description: "Напишете заглавието на причина 3",
            type: "string"
        },
        {
            name: "Title_four_tr",
            title: "Заглавие на третата причина (на турски)",
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
            name: "Subtitle_four_en",
            title: "Описание на третата причина (на английски)",
            description: "Напишете описанието на причина 3",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        },
        {
            name: "Subtitle_four_tr",
            title: "Описание на третата причина (на турски)",
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
  
         