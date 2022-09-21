import React, { useEffect, useState } from 'react'
import { styled } from '../../../stitches.config'

// For the master container of the foundational ReadingBar component
// This component is used to automate spacing, sizes, widths, ect for components wrapped within this components

const Bar = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: 10,
  padding: '0 !important',
  background: 'linear-gradient( 90deg, rgba(26, 204, 108, 1) 0%, rgba(6, 170, 89, 1) 100%, rgba(6, 170, 89, 1) 100% )',
  zIndex: 9999
})

// ---------- This is the end of declarations ---------- //

export const ReadingBar = () => {
  const [width, setWidth] = useState(0);

  // scroll function

  const scrollHeight = () => {
    const el = document.documentElement,
    ScrollTop = el.scrollTop || document.body.scrollTop,
    ScrollHeight = el.scrollHeight || document.body.scrollHeight;
    let percent = (ScrollTop / (ScrollHeight - el.clientHeight)) * 100;
    setWidth(percent);
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHeight);
    return () => window.removeEventListener("scroll", scrollHeight);
  });

  return(

    <Bar style={{ width: width + "%" }}></Bar>
    
  )
}
