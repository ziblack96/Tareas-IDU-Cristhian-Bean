/** @type {import('tailwindcss').Config} */

module.exports = {

    darkMode: 'media',
    content: ["./src/**/*.{html,ts}",],
    theme: {
        extend: {
                colors: {
                    baleada: '#f0f8ff',

                    customred: 
                    {
                        150: '#ffe5e5',
                        340: '#ffb3b3',
                        530: '#ff8080',
                        720: '#ff4d4d',
                        910: '#ff1a1a',
                    },
                },
                pixel: '720px',
                spacing: {
                    '72': '25rem',
                },
                screens: {
                    'apple-watch': '352px',
                    xs: '475px',
                },
            },
    },
    plugins: [],
};