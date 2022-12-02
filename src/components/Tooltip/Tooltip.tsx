import React from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { styled, keyframes } from '@theme'

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const TooltipWrap = styled(TooltipPrimitive.Root, {

})

const TooltipContent = styled(TooltipPrimitive.Content, {
  padding: '10px 15px',
  fontSize: 15,
  borderRadius: '$r1',
  lineHeight: 1,
  color: '$white50',
  backgroundColor: '$brandPrimary',
  boxShadow: '0 2px 10px rgba( 0, 0, 0, 0.3 )',
  userSelect: 'none',
  animationDuration: '300ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  '&[data-state="delayed-open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  }
})

const TooltipArrow = styled(TooltipPrimitive.Arrow, {

})

const TooltipTrigger = styled(TooltipPrimitive.Trigger, {

})

interface TooltipProps {
  tooltipText: string
  children: React.ReactNode
}

export const Tooltip = ({ tooltipText, children }:TooltipProps) => {
  return(

    <TooltipPrimitive.Provider delayDuration={ 100 }>
      <TooltipWrap>
        <TooltipTrigger>{ children }</TooltipTrigger>

        <TooltipPrimitive.Portal>
          <TooltipContent>
            { tooltipText }
            <TooltipArrow />
          </TooltipContent>
        </TooltipPrimitive.Portal>
      </TooltipWrap>
    </TooltipPrimitive.Provider>
  
  )
}