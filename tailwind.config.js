module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            animation: {
                shake: "shake 0.5s linear infinite",
            },
            keyframes: {
                shake: {
                    "0%": { transform: "translate(0px, 0px), rotate(0.7deg)" },
                    "25%": { transform: " translate(0px, 0px) rotate(-0.7deg)" },
                    "50% ": { transform: "translate(0px, 0px) rotate(0.7deg)" },
                    "75%": { transform: "translate(0px, 0px) rotate(-0.7deg)" },
                    "100%": { transform: "translate(0px, 0px) rotate(0.7deg)" },
                },
            },
        },

        colors: {
            dark: {
                background: "#151A21",
                widget: "#242C37",
            },
            light: {
                background: "#FFFFFF",
                widget: "#FFFFFF",
            },
            next: "#0070f3",
        },

        boxShadow: {
            custom: "0px 3px 8px rgba(0, 0, 0, 0.24)",
        },
        borderRadius: {
            widget: "1em",
        },
        fontSize: {
            normal: "20px",
        },

        height: {
            search: "40px",
        },
        maxWidth: {
            weather: "430px",
        },
        lineHeight: {
            middle: "100%",
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};