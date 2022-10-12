export default {
    name: "cookies_policy",
    title: "Политика за бисквитки",
    type: "document",
    fields: [
        {
            name: "cookie_bg",
            title: "Политика за бисквитки (на български)",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        },
        {
            name: "cookie_en",
            title: "ППолитика за бисквитки (на английски)",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        },
        {
            name: "cookie_tr",
            title: "Политика за бисквитки (на турски)",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        }
    ]
}