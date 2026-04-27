/**
 * CPPEM · Tailwind Config
 * Mapeia tokens do brandbook para classes utilitárias do Tailwind
 */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        navy:         '#0D1B3E',
        'navy-mid':   '#162247',
        'navy-light': '#1E2F5E',
        gold:         '#C9A227',
        'gold-light': '#E8C350',
        'gold-pale':  '#F5E4A8',
        'gold-dark':  '#A07B10',
        cream:        '#EDE8D8',
        'off-white':  '#F8F5EE',
        muted:        '#8A9BB8',
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        serif:   ['Libre Baskerville', 'serif'],
        sans:    ['DM Sans', 'sans-serif'],
      },
    },
  },
};
