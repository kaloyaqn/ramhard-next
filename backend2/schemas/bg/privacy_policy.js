export default {
    name: "privacy_policy",
    title: "Политика за поверителност",
    type: "document",
    fields: [
        {
            name: "policy_bg",
            title: "Политика за поверителност (на български)",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        },
        {
            name: "policy_en",
            title: "Политика за поверителност (на английски)",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        },
        {
            name: "policy_tr",
            title: "Политика за поверителност (на турски)",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        }
    ]
}