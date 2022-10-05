
export const globalStyle = {
  '@font-face': [
    {
      fontFamily: 'Labil-Black',
      src: 'local("LabilBlack"), url("../../../public/fonts/LabilGrotesk-Black.woff2")',
    },
    {
      fontFamily: 'CustomFont2',
      src: 'local("CustomFont2"), url("CustomFont2.woff2")',
    },  
  ],

  '*': {
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    color: 'inherit',
    fontSmoothing: 'antialiased',
  },

  body: {
    padding: 0,
    margin: 0,
    fontFamily: '$sansSerif',
    lineHeight: 1,
    fontSize: '1rem',
    background: '$siteBg',
    color: '$contentColor'
  },

  a: { textDecoration: 'none' },

  button: { cursor: 'pointer' },

  p: { margin: 0 },

  'fieldset, ul, figure, button': {
    border: 'none',
    padding: 0,
    margin: 0,
    appearance: 'none',
    background: 'none'
  }
}