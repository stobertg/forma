import { Typeface } from './fonts'

export const globalStyle = {
  '@font-face': Typeface,

  '*': {
    boxSizing: 'border-box',
    fontFamily: '$sansSerif',
    color: 'inherit',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale'
  },

  body: {
    padding: 0,
    margin: 0,
    lineHeight: 1,
    fontSize: '1rem',
    background: '$white50',
    color: '$textPrimary'
  },

  a: { 
    textDecoration: 'none',
    color: '$textLink'
  },

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
