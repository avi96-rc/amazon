import React from 'react'
import styled from 'styled-components'
import {GiHamburgerMenu} from 'react-icons/gi'

const SubHeader = () => {

    const subList = [
        'all',
        'prime video',
        'amazon business',
        "toaday's Deals"
    ]
  return (
    <StyledSubHeader>

        <GiHamburgerMenu/>
        
        <ul>
            {subList.map((item)=><li>{item}</li>)}
            
        </ul>
    </StyledSubHeader>
  )
}

export default SubHeader

const StyledSubHeader = styled.div`

    color:white;
    height: 40px;
    background: rgba(35,47,62);
    padding:0px;
    display: flex;
    align-items: center;

    ul{

       /* margin-left:  20px; */
        padding: 0;
    }


    li{
        display: inline-block;
        margin-right: 5px;
        text-transform: capitalize;
        font-weight: 400;

    }

    svg{
        margin: 0 10px 0 20px;
        height: 20px;
        width: 20px;
        border-radius: 5px;
    }

`