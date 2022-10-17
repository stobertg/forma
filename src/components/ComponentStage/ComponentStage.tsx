import React from 'react'
import { styled } from '@theme'
import { Tabs } from '@components'

const StageWrap = styled('div', {

})

const StageHeader = styled('div', {

})

const StageContent = styled('div', {
  position: 'relative',
  width: '100%',
  padding: '50px 0',
  background: '$brandSecondary'
})

const StageFooter = styled('div', {

})

// -------------- Typescript declarations -------------- //

interface ComponentStageProps {
  tabs?: any
  tabContent?: any
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const ComponentStage = ({
    tabs,
    tabContent,
    children
  }: ComponentStageProps ) => {
  
  return(

    <StageWrap>
      { tabs ? (

        <Tabs
          defaultTab={ 1 }
          triggers={ tabs }
          tabContent={ tabContent }
        />

      ) : (

        <StageContent>{ children }</StageContent> 

      )}

      <StageFooter></StageFooter>
    </StageWrap>
    
  )
}
