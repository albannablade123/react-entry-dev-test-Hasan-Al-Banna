import styled from "styled-components";
import { Link } from "react-router-dom";

export const CheckoutContainer = styled.nav`
  /* height: ${(props) => (props.extendNavbar ? "100vh" : "80px")}; */
  height: 80px;
  margin-top: 80px;
  margin-left: 101px;
  margin-right: 100px;
`;

export const CartTitle = styled.h2`
  /* height: ${(props) => (props.extendNavbar ? "100vh" : "80px")}; */
  height: 80px;
  margin-top: 0px;
  margin-bottom: 55px;
  font-weight: 700;
  font-size: 32px;
`;

export const CardContainer = styled.div`
  /* height: ${(props) => (props.extendNavbar ? "100vh" : "80px")}; */
  height: 336px;
  display: flex;
  max-height: 600px;
  overflow: auto;
`;

export const LeftCardContainer = styled.div`
  /* height: ${(props) => (props.extendNavbar ? "100vh" : "80px")}; */
`;
export const RightCardContainer = styled.div`
  text-align: right;
  display: flex;
  margin-left: auto;
`;

export const CountButton = styled.button`
  width: 45px;
  height: 45px;
  background-color: white;
  border-width: 1px;
  margin-bottom: auto;
  cursor: pointer;
`;

export const CounterText = styled.h2`
  text-align: center;
  margin-bottom: 3.5em;
  margin-top: 3.5em;
  font-weight: 500;
  font-size: 24px;
`;
export const CountContainer = styled.div`
  width: 45px;
  height: 288px;
  margin-top: 24px;
`;

export const ProductCartTitle = styled.h2`
  margin-top: 24px;
  font-family: Raleway;
  font-weight: 600;
  font-size: 30px;
  margin-bottom: 16px;
`;

export const ProductCartSubtitle = styled.div`
  font-style: Regular;
  font-family: Raleway;
  font-size: 30px;
  line-height: 77%;
  font-weight: 400;
  color: #1d1f22;
  margin-bottom: 20px;
`;

export const ImageCartPreview = styled.div`
  height: 288px;
  width: 200px;
  margin-top: 24px;
  margin-left: 24px;
  position: relative;
`;

export const CartDropdownContainer = styled.div`
  width: 400px;
  max-height: 677px;
  border-radius: 0px;
  padding: 32px, 16px, 32px, 16px;
  background-color: white;
  right: 0;
  display: inline-block;
  position: absolute;
  top: 80px;
  z-index: 100;
`;

export const CartItemsContainer = styled.div`
  background-color: white;
  width: 100%;
  height: 500px;
  align-items: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  overflow: overlay;
  cursor: default;
`;

export const CartContentContainer = styled.div`
  background-color: white;
  width: 90%;
  max-height: 538px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 70vh;
  overflow: auto;
`;

export const CartDropdownTitle = styled.h2`
  font-weight: 400;
  font-size: 16px;
  text-align: left;
  margin-bottom: 32px;
`;

export const CartDropdownCard = styled.div`
  height: 190px;
  display: flex;
  margin-bottom: 32px;
`;

export const CartCardLeftContainer = styled.div`
  background-color: white;
  width: 63%;
  height: 100%;
`;

export const CartProductTitle = styled.h1`
  font-weight: 300;
  font-size: 16px;
  font-family: Raleway;
  text-align: left;
`;

export const CartProductPrice = styled.h1`
  font-weight: 500;
  font-size: 16px;
  font-family: Raleway;
  text-align: left;
`;
export const CountDropdownContainer = styled.div`
  width: 45px;
  height: 190px;
`;

export const CounterDropdownText = styled.h2`
  text-align: center;
  margin-bottom: 2.3em;
  margin-top: 2.3em;
  font-weight: 500;
  font-size: 24px;
`;

export const CountDropdownButton = styled.button`
  width: 24px;
  height: 24px;
  background-color: white;
  border-width: 1px;
  margin-bottom: auto;
  cursor: pointer;
`;

export const ProductDropdownImage = styled.img`
  width: 121px;
  height: 190px;
`;

export const DropdownButtonContainer = styled.div`
  display: flex;
  margin-left: 16.5px;
  padding-bottom: 20px;
  margin-right: 16.5px;
  vertical-align: center;
  align-items: center;
`;

export const DropdownButton = styled.button`
  width: 110%;
  height: 40px;
  border-radius: 0px;
  font-weight: 600;
  font-family: Raleway;
`;

export const ProductSpecificationTitle = styled.div`
  font-family: Raleway;
  font-size: 10px;
  line-height: 77%;
  font-weight: 400;
  color: #1d1f22;
  margin-bottom: 8px;
  text-align: left;
`;

export const SelectionContainer = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

export const ButtonAttribute = styled.button`
  width: 100%;
  height: 24px;
  font-family: Source Sans Pro;
  font-weight: 400;
  font-size: 10px;
  margin-right: 8px;
  background-color: white;
  border-width: 1px;
  border-color: #1d1f22;
  cursor: pointer;
  text-align: center;
  font-size: 0.6vw;
  padding: 6px 2px;
`;

export const ButtonAttributeColorDropdown = styled.button`
  width: 16px;
  height: 16px;
  border: transparent;
  cursor: pointer;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;

export const TotalContainer = styled.div`
  display: flex;
  margin-left: 16px;
  margin-right: 16px;
  justify-content: space-between;
`;
export const TotalHeader = styled.h2`
  font-family: Roboto;
  font-weight: 700;
  font-size: 16px;
  color: #1d1f22;
  margin-right: auto;
`;

export const TotalCount = styled.h2`
  font-family: Roboto;
  font-weight: 700;
  font-size: 16px;
  color: #1d1f22;
`;

export const CheckoutTotalContainer = styled.div`
  margin-top: 32px;
  width: 279px;
  height: 159px;
`;

export const CheckoutTotalTextDiv = styled.div`
  display: flex;
`;

export const CheckoutTotalTextBold = styled.h2`
  font-family: Raleway;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
`;

export const CheckoutTotalTextNormal = styled.h2`
  font-family: Raleway;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
`;

export const CheckoutButton = styled.button`
  border-radius: 0px;
  cursor: pointer;
  background-color: #5ece7b;
  width: 279px;
  height: 43px;
  border: #5ece7b;
  color: white;
`;

export const ButtonImage = styled.button`
  width: 24px;
  height: 24px;
  background-color: #1d1f22;
  position: absolute;
  border: #1d1f22;
  color: white;
  cursor: pointer;
`;

export const CartContentContainerEmpty = styled.div`
  background-color: white;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export const SelectionContainerDropdown = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

export const ButtonSelectedDropdown = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;
