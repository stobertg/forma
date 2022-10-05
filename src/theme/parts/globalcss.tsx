import { Typeface } from './fonts'

export const globalStyle = {
  '@font-face': Typeface,

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
