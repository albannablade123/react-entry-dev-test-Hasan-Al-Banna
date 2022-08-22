import styled from "styled-components";
import { Link, useLocation } from 'react-router-dom';

export const ProductItemContainer = styled.div`
    padding: 60px 100px;
    display: flex;
`

export const ImageGrid = styled.div`
    width: 80px;
    color: white;
`

export const ImagePreview = styled.img`
    height: 80px;
    width: 100%;
    margin-bottom: 40px;
`

export const ImageContainer = styled.img`
    height: 511px;
    width: 610px;
    margin-bottom: 40px;
    margin-left: 40px;
    margin-right: 100px;
`

export const ProductItemContent = styled.div`
    width: 292px;
    height: 595px;
`

export const ProductTitle = styled.div`
    font-style: semiBold;
    font-family: Raleway;
    font-size: 30px;
    line-height: 77%;
    font-weight: 700;
    color: #1D1F22;
    margin-bottom: 16px;
`
export const ProductSubtitle = styled.div`
    font-style: Regular;
    font-family: Raleway;
    font-size: 30px;
    line-height: 77%;
    font-weight: 400;
    color: #1D1F22;
    margin-bottom: 43px;
`

export const ProductSpecificationTitle = styled.div`
    font-family: Roboto Condensed;
    font-size: 18px;
    line-height: 77%;
    font-weight: 700;
    color: #1D1F22;
    margin-bottom: 8px;
`

export const CartButton = styled.button`
    background: #5ECE7B;
    height: 52px;
    width: 292px;
    border: #5ECE7B;

    font-size: 16px;
    font-family: Raleway;
    color: white;
    vertical-align: center;
    
`

export const SelectionContainer = styled.div`
    display: flex;
    margin-bottom: 24px;
`

export const ButtonSize = styled.button`
    width: 63px;
    height: 45px;
    font-family: Source Sans Pro;
    font-weight: 400;
    font-size: 16px;
    margin-right: 12px;
    background-color: white;
    border-width: 1px;
`

export const ButtonColor1 = styled.button`
    width: 32px;
    height: 32px;
    font-family: Source Sans Pro;
    font-weight: 400;
    font-size: 16px;
    margin-right: 12px;
    border: transparent;
    background-color: #D3D2D5;
`

export const ButtonColor2 = styled.button`
    width: 32px;
    height: 32px;
    font-family: Source Sans Pro;
    font-weight: 400;
    font-size: 16px;
    margin-right: 12px;
    border: transparent;
    background-color: #2B2B2B;
`

export const ButtonColor3 = styled.button`
    width: 32px;
    height: 32px;
    font-family: Source Sans Pro;
    font-weight: 400;
    font-size: 16px;
    margin-right: 12px;
    border: transparent;
    background-color: #0F6450;

`

export const PriceText = styled.h3`
    font-family: Raleway;
    font-weight: 700;
    font-size: 24px;
    font-style: bold;
    margin-top: 10px;
    margin-bottom: 20px;
`

