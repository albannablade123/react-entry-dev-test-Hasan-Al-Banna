import styled from "styled-components";

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

export const ImageCartPreview = styled.img`
    height: 288px;
    width: 200px;
    margin-top: 24px;
    margin-left: 24px;
`;
