// import React, { useState } from 'react'
// import { Button } from '@components'
// import { styled } from '@theme'
// import { useForm } from 'react-hook-form'


// // For the container of the input field
// // This holds just the input field and the label - here we dictate the visual style for the input field

// const InputContain = styled('div', {
//   display: 'flex',
//   alignItems: 'center',
//   position: 'relative',
//   width: '100%',
//   height: 64,
//   padding: '0 24px',
//   border: '1px solid $inputBorder',
//   borderRadius: '$r2',
//   transition: '$s1',
//   fontFamily: '$sansSerif',

//   // For the different height structures that are supported for the input
//   // This is based on the context that the input needs to be used in. For example, in the left nav, the search field
//   // looks too weird when it has the normal height and needs to be reduced

//   variants: {
//     height: {
//       small: { height: 44 }
//     }
//   },

//   // For the label of the input field
//   // This sits in the center of the container and then animates up and shrinks to the top of the container

//   label: {
//     position: 'relative',
//     width: '100%',
//     textAlign: 'left',
//     transition: '$s1',
//     transformOrigin: 'left center',
//     userSelect: 'none',
//     zIndex: 1
//   },

//   button: {
//     height: '100%',

//     '> div': {
//       height: '100%',
//       borderRadius: '0 $pill $pill 0',
//     },
//   },

//   // When an input is focused into, we animate a few things
//   // We need to change the border color as an active indicator, as well as move and shrink the label to the top left

//   '&:focus-within': {
//     borderColor: '$white',

//     // Animate the label to the top left, shrink it, and change the color

//     label: {
//       color: '$moss',
//       transform: 'translateY( -12px ) scale( 0.8 )',
//     },
//   },

//   // Here we reset the input field, and dictate the sizing, position, and spacing within it
//   // This is so the whole container can be clicked and the user can start typing
//   // This is because the <input /> semantic itself has no visible styling, and the parent container holds the styling
//   // So that the label can visually work within the input field

//   input: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     padding: '16px 24px 0',
//     background: 'none',
//     border: 'none',
//     outline: 'none',
//     color: 'inherit',
//     fontWeight: 500,
//     fontSize: '1rem',
//     fontFamily: '$sansSerifBlack',

//     '& + div': {
//       height: '100%',
//     },
//   }
// })

// // -------------- Typescript declarations -------------- //

// interface InputProps {
//   height?: 'small'
//   name: string
//   label: string
//   size?: number
//   inputSize?: 'small'
//   pattern?: string
//   min?: number
//   max?: number
//   type: string
//   placeholder?: string
//   initialValue?: string
//   autoComplete?: string
//   buttonTitle?: string
//   onButtonClick?: React.MouseEventHandler<HTMLButtonElement>
//   register: any
// }

// // ------------- This is the end of declarations ------------ //

// export const Input = ({
//   height,
//   name,
//   size,
//   inputSize,
//   pattern,
//   min,
//   max,
//   type,
//   placeholder,
//   label,
//   autoComplete,
//   buttonTitle,
//   onButtonClick,
//   initialValue,
//   register
// }:InputProps ) => {

//   // const { register, handleSubmit, setValue, reset, watch } = useForm();
//   // const [ active, setActive ] = useState( false )
//   // const [ value, setValue ] = useState('' || initialValue)

//   // console.log(value)

//   // ------------- This is the end of declarations ------------ //

//   return (

//     <InputContent
//       {...{ inputSize }}
//       // state={ value ? 'active' : 'inactive' }
//     >
//       <InputContain {...{ height }}>
//         <label htmlFor={ name }>{ label }</label>

//         <input
//           ref={ register }
//           // id={ id }
//           // name={ id }
//           // size={ size }
//           // min={ min }
//           // maxLength={ max }
//           // type={ type }
//           // value={ value || initialValue }
//           // placeholder={ placeholder }
//           // pattern={ pattern }
//           // autoComplete={ autoComplete }
//           // onBlur={( event ) => event.preventDefault()}
//           // onChange={( event ) => { setValue( event.target.value ) }}
//         />

//         { buttonTitle ? (
//           <Button
//             variant="primary"
//             title={ buttonTitle }
//             onClick={ onButtonClick }
//           />
//         ) : null}
//       </InputContain>
//     </InputContent>

//   )
// }

import React from 'react'
import { styled } from '@theme'
import { useController, UseControllerProps } from "react-hook-form"

// For the container of the main input section
// This always holds the input but can have an icon, tooltip helper to the right of the field

const InputContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  width: '100%',

  // For the two different states of the input field - agnostic of any feedback text
  // This is to accomidate if there is text within the input, and if so, the title stays shrunken, on the top left

  variants: {
    state: {
      active: { label: { transform: 'translateY( -12px ) scale( 0.8 )' } },
      inactive: {}
    },

    inputSize: {
      small: {
        width: '50%',
        '@tablet': { width: '100%' }
      }
    }
  },
})

// For the container of the input field
// This holds just the input field and the label - here we dictate the visual style for the input field

const InputContain = styled('div', {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  height: 64,
  padding: '0 24px',
  border: '1px solid $inputBorder',
  borderRadius: '$r2',
  transition: '$s1',
  fontFamily: '$sansSerif',

  // For the different height structures that are supported for the input
  // This is based on the context that the input needs to be used in. For example, in the left nav, the search field
  // looks too weird when it has the normal height and needs to be reduced

  variants: {
    height: {
      small: { height: 44 }
    }
  },

  // For the label of the input field
  // This sits in the center of the container and then animates up and shrinks to the top of the container

  label: {
    position: 'relative',
    width: '100%',
    textAlign: 'left',
    transition: '$s1',
    transformOrigin: 'left center',
    userSelect: 'none',
    zIndex: 1
  },

  button: {
    height: '100%',

    '> div': {
      height: '100%',
      borderRadius: '0 $pill $pill 0',
    },
  },

  // When an input is focused into, we animate a few things
  // We need to change the border color as an active indicator, as well as move and shrink the label to the top left

  '&:focus-within': {
    borderColor: '$white',

    // Animate the label to the top left, shrink it, and change the color

    label: {
      color: '$moss',
      transform: 'translateY( -12px ) scale( 0.8 )',
    },
  },

  // Here we reset the input field, and dictate the sizing, position, and spacing within it
  // This is so the whole container can be clicked and the user can start typing
  // This is because the <input /> semantic itself has no visible styling, and the parent container holds the styling
  // So that the label can visually work within the input field

  input: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    padding: '16px 24px 0',
    background: 'none',
    border: 'none',
    outline: 'none',
    color: 'inherit',
    fontWeight: 500,
    fontSize: '1rem',
    fontFamily: '$sansSerifBlack',

    '& + div': {
      height: '100%',
    },
  }
})

type FormValues = {}

export const Input = ( props: UseControllerProps<FormValues> ) => {
  const { field, fieldState } = useController( props )

  return(

    <InputContent>
      <InputContain>
        <input { ...field } placeholder={ props.name } />
      </InputContain>
    </InputContent>

  )
}