module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        vapor: '#F8F9FA',
        midnight: '#0F172A',
        stone: '#D6D3CD',
        cyan: '#3B8EA5'
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      spacing: {
        '128': '32rem',
        '160': '40rem'
      }
    }
  },
  plugins: []
}