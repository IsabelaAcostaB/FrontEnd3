import styled from 'styled-components';

/*------- General-------*/

export const Body = styled.div
`
    background-color: papayawhip;
    box-sizing: border-box;
    font-family: 'Be Vietnam Pro', sans-serif;
    margin: 0;
    padding: 0;
`

/*------- Header -------*/

export const Header = styled.div
`
    background-color: papayawhip; 
    color:palevioletred;
    padding: 20px 40px;
    
`
export const Header_h1 = styled.h1
` 
    font-size: 55px;
`
export const Cart = styled.div
`
    color: palevioletred;
    text-align:right;
`
export const Count = styled.span
`
    background-color: white;
    border-radius: 50px;
    font-weight: bold;
    margin: 10px;
    padding: 8px;
`

/*------- List of Items -------*/

export const Container = styled.div
`
    display: flex;
    justify-content: center;
    flex-direction: row;
`

/*------- Items -------*/

export const Product = styled.div
`
    background: linear-gradient(to bottom right,#e0e0e0, #e8decf);
    border: 0.5px solid #ddd;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    margin:20px;
    padding: 50px;
    width: 33%;
`
export const Stock = styled.h5
`
    font-size:15px;
    text-align: center; 
`
export const Button = styled.button
`
    border: 2px solid palevioletred;
    border-radius: 10px;
    background-color:transparent;
    color: palevioletred;
    font-size: 1em;
    font-weight:bold;
    height:40px;
    margin: 1em;
    text-transform: uppercase;
    &: hover{
        background-color:palevioletred;
        color: white;
    }
    &: active {
        background-color:#eb91af;
        border: 2px solid #eb91af;
    }
    &: disabled{
        border: 2px solid #b3afaf;
        color: #b3afaf;
        background-color:transparent;
    }
    
`

export const NoStock = styled(Count)
`
    background-color: #f5424e;
    width:60px;
`




