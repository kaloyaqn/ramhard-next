export default {
    name: "cancellation_policy",
    title: "Право на отказ",
    type: "document",
    fields: [
        {
            name: "right_bg",
            title: "Право на отказ (на български)",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        },
        {
            name: "right_en",
            title: "Право на отказ (на английски)",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        },
        {
            name: "right_tr",
            title: "Право на отказ (на турски)",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        }
    ]
}