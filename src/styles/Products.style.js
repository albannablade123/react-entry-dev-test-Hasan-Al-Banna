import styled from "styled-components";
import { Link, useLocation } from 'react-router-dom';


export const CategoryTitle = styled.h2`
margin-top: 0px;
margin-bottom: 103px;
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 42px;
line-height: 160%;

/* --c-text */

color: #1D1F22;
`;

export const ProductsContainer = styled.div`
    padding: 70px 110px;
    padding-right: 102px;

`


export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 25em 25rem 25rem;
    grid-gap: 1rem;
    grid-auto-flow: row;
    text-align: center;
`

export const CardTitle = styled.h5`
    font-family: 'Raleway';
    font-style: normal;
    color: white;
    font-weight: 300;
    font-size: 18px;
    text-align: left;
    vertical-align: center;
    line-height: 28.8px;
    color: #1D1F22;
    margin-bottom: 0px;
`

export const CardPriceTitle = styled.h5`
    font-family: 'Raleway';
    font-style: normal;
    color: white;
    font-weight: 700;
    font-size: 18px;
    color: #1D1F22;
    text-align: left;
    margin-top: 0px;

`


export const Card = styled.div`
    width: 344px;
    height: 400px;
    margin: 10px;
    padding: 16px;
    position: relative;
`

export const CardImage = styled.img`
    width: 100%;
    height: 75%;
`

export const StockTextContainer = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const StockText = styled.h2`
    font-family: Raleway;
    font-weight: 400;
    font-size: 24px;
`

export const AddToCartCircularButton = styled.button`
    border-radius: 100%;
    position: absolute;
    top: 66%;
    left: 75%;
    background-color: #5ECE7B;
    height: 52px;
    width: 52px;
    box-shadow: '0px 4px 35px #E5E5E5';
    border-width: 0px;

`


