import styled from "styled-components";
import { Link, useLocation } from 'react-router-dom';


export const NavbarContainer = styled.nav`
    width: 100%;
    /* height: ${(props) => (props.extendNavbar ? "100vh" : "80px")}; */
    height: 80px;
    background-color: white;
    display: flex;
    flex-direction: column;
    
`;

export const LeftContainer = styled.div`
    font-family: Raleway;
    flex: 70%;
    align-items: center;
    background-color: white;
    display: flex;
    font-weight: 400;
    padding-left: 101px;

`;

export const RightContainer = styled.div`
flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
  top: 20px;

`;

export const NavbarInnerContainer = styled.div`
height: 80px;
width: 100%;
display: flex;
    
`;

export const NavbarExtendedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 700px) {
        display: none;
    }
`;

export const NavbarLinkContainer = styled.div`
    display: flex;
    height: 56px;
    width: 100%;
    left: 101px;
    top: 24px;
    border-radius: 0px;
    border-bottom: 1px;

`

export const NavbarLink = styled(Link)`
    color: black;
    font-size: x-large;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    text-decoration: none;
    margin: 10px;
    font-size: 16px;
    font-weight: 400;
    border-bottom: 1px;

    @media (max-width: 700px) {
        display: none;
    }

`

export const NavbarLinkExtended = styled(Link)`
    color: black;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    text-decoration: none;
    margin: 10px;
    size: 16px;

    @media (max-width: 700px) {
        display: none;
    }

`

export const CartImg = styled.img`
    top: 50px;
    width: 35px;
    height: 35px;
    left: 184;
    margin: 10px;
`

export const OpenLinksButton = styled.button`
    width: 50px;
    height: 50px;
    top: 50px;
    left: 124px;
    font-size: x-large;
    margin: 10px;
    border: none;
    color: black;
    cursor: pointer;
`



export const iconImage = styled.div`
    
`
