import styled from "styled-components";

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
`;

export const Logo = styled.h1`
  font-family: "Saira Stencil One", cursive;
  font-size: 32px;
  font-weight: 400;
  color: #ffffff;
  margin-bottom: 30px;
`;

export const RowBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const ColumnBox = styled.div`
  form{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  width: 85%;
  height: 8vh;
  font-family: "Raleway", sans-serif;
  color: #000000;
  background-color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 400;
  padding: 18px 0px 18px 15px;
`;

export const Button = styled.button`
  width: 85%;
  height: 8vh;
  font-family: "Raleway", sans-serif;
  color: #ffffff;
  background-color: #a328d6;
  border: 1px solid #a328d6;
  font-size: 20px;
  font-weight: 700;
  margin: 15px 0px 40px 0px;
`;

export const Text = styled.p`
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #ffffff;
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
