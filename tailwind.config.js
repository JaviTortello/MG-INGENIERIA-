/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'mg-blue': '#1e3a8a',
                'mg-slate': '#334155',
                'mg-silver': '#cbd5e1',
                'mg-gold': '#fbbf24',
            },
            animation: {
                'door-left': 'doorLeft 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
                'door-right': 'doorRight 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
            },
            keyframes: {
                doorLeft: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                doorRight: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(100%)' },
                },
            }
        },
    },
    plugins: [],
}
