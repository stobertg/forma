import React from 'react'
import { Tr, Image, Button } from '@email'

// -------------- Typescript declarations -------------- //

interface ProductThumbProps {

}

// ---------- This is the end of declarations ---------- //

export const ProductThumb = ({

  }: ProductThumbProps ) => {
  
  return(

    <Tr bgColor="#fff">
      <div><Image src="/products/sony/earbuds-noisecancelling.png" alt="Sony Earbuds" /></div>
      <Button title="Shop Forma Store" />
    </Tr>
    
  )
}
