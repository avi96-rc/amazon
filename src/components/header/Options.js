import React from 'react'
import sytled from 'styled-components'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Options = () => {
  return (
    <StyledDiv>
        <div className="sign-in margin-10">
            <p>Sign In</p>
            <h6>Account &amp; Lists</h6>
        </div>
        <div className="return margin-10">
            <p>Return </p>
            <h6>
            &amp; Order
            </h6>
        </div>
        <div className="basket margin-10">
            <div className="cart">
                <div className="badge">
                    <span>0</span>

                </div>

                <AiOutlineShoppingCart/>
                
            </div>
            <h6>Basket</h6>
        </div>
    </StyledDiv>
  )
}

export default Options

const StyledDiv = sytled.div`

    // border:1px solid white;
    display:flex;
    height:40px;
    align-items:center;
   
   

    .margin-10{
        margin-right:20px;
        white-space: nowrap;
        cursor:pointer;
    }
    .margin-10:hover{
        
            text-decoration: underline;
        
    }

    p{
        margin:0;
        padding:0;
        font-size:12px;
    }

    h6{
        margin:0;
        font-size:14px;
        font-weight:bold;

        // fontsize

    }
     
    div{
        // border:1px solid red;
    }

    .basket{
        display:flex;
        align-items:center;
        margin-right:0;
        
        // height:100%;
    }

    .cart{
        height:100%;
        width:40px;
        postition:relative;
        margin-Right: 3px; 
        
    }
    svg{
        height:100%;
        width:40px;
        margin-right:50px;
    }
    

    .badge{
        display: flex;
        align-Items: center;
        justify-Content: center;
        position:absolute;
        height:10px;
        width:10px;
        // border:1px solid red;
        border-radius: 40%;
        padding:4px;
        background: rgba(251,191,36);
        // top: 0;
        // left: 0;
        // transform: 
        color:black;
        font-Weight: bold;

    }

`;