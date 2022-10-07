export default {
    name: "faq",
    title: "Често задавани въпроси",
    type: "document",
    fields: [    
        {
            name: "Q_one",
            title: "Въпрос 1",
            type: "string",
        },
        {
            name: "A_one",
            title: "Отговор 1",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        },
        {
            name: "Q_two",
            title: "Въпрос 2",
            type: "string"
        },
        {
            name: "A_two",
            title: "Отговор 2",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        },
        {
            name: "Q_three",
            title: "Въпрос 3",
            type: "string"
        },
        {
            name: "A_three",
            title: "Отговор 3",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        },
        {
            name: "Q_four",
            title: "Въпрос 4",
            type: "string"
        },
        {
            name: "A_four",
            title: "Отговор 4",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        },
        {
            name: "Q_five",
            title: "Въпрос 5",
            type: "string"
        },
        {
            name: "A_five",
            title: "Отговор 5",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        }
    ]
}