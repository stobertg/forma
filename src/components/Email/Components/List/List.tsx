import React from 'react'
import { Spacing, Heading } from '@email'

interface ListProps {
  spacing?: 'small' | 'medium' | 'large'
  fontSize?: 'medium'
  listItems: {
    title: string | React.ReactNode
  }[]
}

export const List = ({ spacing, listItems, fontSize }:ListProps) => {
  return(

    <Spacing {...{ spacing }}>
      <ul style={{ marginLeft: 16 }}>
        { listItems.map(( item, i ) => (
          <li style={{ marginTop: 12, lineHeight: 1.5 }} key={`item-${ i }`}>
            <Heading size={ fontSize == 'medium' ? 'small' : undefined } title={ item.title } />
          </li>
        ))}
      </ul>
    </Spacing>

  )
}