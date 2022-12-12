import React, { useState, useEffect } from 'react'
import { styled } from '@theme'
import * as ProgressPrimitive from '@radix-ui/react-progress'

const ProgressWrap = styled(ProgressPrimitive.Root, {
  position: 'relative',
  overflow: 'hidden',
  background: '$bgSecondary',
  borderRadius: '$pill',
  width: '100%',
  height: 6,
  transform: 'translateZ(0)',
})

const ProgressIndicator = styled(ProgressPrimitive.Indicator, {
  backgroundColor: '$brandPrimary',
  width: '100%',
  height: '100%',
  transition: 'transform 660ms cubic-bezier(0.65, 0, 0.35, 1)',
  borderRadius: '$pill'
})

interface ProgressProps {
  value: number
}

export const Progress = ({ value }:ProgressProps) => {
  const [ progress, setProgress ] = useState( 0 )

  useEffect(() => {
    const timer = setTimeout(() => setProgress( value ), 500);
    return () => clearTimeout(timer);
  }, [value]);

  return(

    <ProgressWrap {...{ value }}>
      <ProgressIndicator style={{ transform: `translateX(-${100 - progress}%)` }} />
    </ProgressWrap>
      
  )
}