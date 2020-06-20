module.exports = {
    purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
    theme: {
        extend: {
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
            },
            colors: {
                'blue-primary': '#36AAFC',
                'gray-primary': '#212121',
                'peach-primary': '#F7643C',
                'light-gray-primary': '#E6E7EA',
                success: '#0070f3',
                cyan: '#79FFE1',
            },
            spacing: {
                28: '7rem',
            },
            letterSpacing: {
                tighter: '-.04em',
            },
            lineHeight: {
                tight: 1.2,
            },
            fontSize: {
                '5xl': '2.5rem',
                '6xl': '2.75rem',
                '7xl': '4.5rem',
                '8xl': '3rem',
            },
            boxShadow: {
                small: '0 5px 10px rgba(0, 0, 0, 0.12)',
                medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
            },
        },
    },
    variants: {
        borderRadius: ['responsive', 'hover', 'focus', 'active'],
        backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    },
}
