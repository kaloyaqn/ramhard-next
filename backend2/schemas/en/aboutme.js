export default {
    name: "ourprocess_en",
    title: "Our process",
    type: "document",
    fields: [
        {
            name: "Description",
            title: "Описание",
            type: "string"
        },
        {
            name: "Arg_one",
            title: "Стъпка 1",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        },
        {
            name: "Desc_arg_one",
            title: "Описание на стъпка 1",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        },
        {
            name: "Arg_two",
            title: "Стъпка 2",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        },
        {
            name: "Desc_arg_two",
            title: "Описание на стъпка 2",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        },
        {
            name: "Arg_three",
            title: "Стъпка 3",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        },
        {
            name: "Desc_arg_three",
            title: "Описание на стъпка 3",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        }
    ]
}