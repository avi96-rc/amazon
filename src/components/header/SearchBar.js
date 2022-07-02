import React from 'react'
import styled from 'styled-components'
import {AiOutlineSearch} from 'react-icons/ai'

const SearchBar = () => {
  return (
    <StyledSearch>
      
            <input type="text" />
            <div>
                <AiOutlineSearch/>
            </div>
        
    </StyledSearch>
  )
}

export default SearchBar

const StyledSearch = styled.form`
    /* border:1px solid white; */
    height:40px;
    display: flex;
    align-items: center;
    /* box-sizing: border-box; */
    /* flex-grow: 2 ; */
    width: 100%;
    margin: 0 20px;

    input{

    height: 100%;
    box-sizing: border-box;
    padding: 20px 10px;
    outline: none;
    border: 0px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    width: calc(100% - 50px);

    }

    div{
        background-color: rgba(251,191,36);
        /* border: 1px solid red; */
        /* padding:20px; */
        height: 40px;
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        
    }


    svg{
        height: 20px;
        width: 20px;
        color: black;
    }


`