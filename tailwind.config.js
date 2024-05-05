module.exports = {
    content: [
      './_drafts/**/*.html',
      './_includes/**/*.html',
      './_layouts/**/*.html',
      './_posts/*.md',
      './*.md',
      './*.html',
    ],
    darkMode: 'class',
    theme: {
      fontFamily: {
        mono: ['GeistMono', 'monospace'],
        serif: ['Tiempos-Text'],
        headline: ['Tiempos-Headline'],
        logotype: ['Soehne-Breit'],
        headlinelight: ['Tiempos-Headline-Light'],
        sans: ['Soehne-Buch', 'HelveticaNeue', 'Helvetica Neue', 'Helvetica'],
        sanslight: ['Soehne-Leicht'],
      },

      extend: {
        fontFamily: {
        },

      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
    ]
  }
  