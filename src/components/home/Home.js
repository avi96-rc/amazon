import React from 'react'
import styled from 'styled-components'
import Carousel from './Carousel'
import Content from './Content'

const Home = () => {
  return (
    <StyledHome>
      <Carousel/>
      <Content/>
      
    </StyledHome>
  )
}

export default Home

const StyledHome = styled.main`

/* border:1px solid green; */
height: 100vh;
width: 100%;
box-sizing: border-box;

`