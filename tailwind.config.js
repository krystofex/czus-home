module.exports = {
    purge: [],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                dark: {
                    background: '#151A21',
                    widget: '#242C37',
                    text: '#FFFFFF',
                },
                light: {
                    background: '#FFFFFF',
                    widget: '#FFFFFF',
                    text: '#000000',
                },
                nextBlue: '#0070f3',
                dogeBlood: '#FD4D4D',
            },

            boxShadow: {
                custom: '0px 3px 8px rgba(0, 0, 0, 0.24)',
            },

            borderRadius: {
                widget: '1em',
            },

            fontSize: {
                normal: '20px',
            },

            height: {
                search: '40px',
            },
            maxWidth: {
                weather: '430px',
            },
            lineHeight: {
                middle: '100%',
            },

            animation: {
                shake: 'shake 0.5s linear infinite',
                pulseOnce: 'pulse 0.5s linear',
            },
            keyframes: {
                shake: {
                    '0%': { transform: 'translate(0px, 0px), rotate(0.7deg)' },
                    '25%': {
                        transform: ' translate(0px, 0px) rotate(-0.7deg)',
                    },
                    '50% ': { transform: 'translate(0px, 0px) rotate(0.7deg)' },
                    '75%': { transform: 'translate(0px, 0px) rotate(-0.7deg)' },
                    '100%': { transform: 'translate(0px, 0px) rotate(0.7deg)' },
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
