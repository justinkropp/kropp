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
        mono: ['GeistMono', 'monospace']
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
  