import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  margin: 5vh 0vh 5vh 0vh;
`;

export const Name = styled.div`
  color: #ffffff;
  font-size: 26px;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  padding-right: 40vw;
`;

export const Icon = styled.div`
  color: #ffffff;
  font-size: 22px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

export const Main = styled.main`
  width: 100vw;
  height: 65vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Records = styled.section`
  width: 90%;
  height: 90%;
  background-color: #ffffff;
  border-radius: 5px;
  padding-top: 10px;
`;

export const Button = styled.button`
  width: 150px;
  height: 100%;
  background-color: #a328d6;
  color: #ffffff;
  font-size: 17px;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  border: 1px solid #a328d6;
  border-radius: 5px;
`;

export const Box = styled.div`
`;

export const Buttons = styled.section`
  width: 100vw;
  height: 20vh;
  margin-bottom: 50px;
  display:flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 90%;
  height: 100%;
  display:flex;
  justify-content: space-between;
`;

export const Date = styled.p`
  color: #c6c6c6;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  margin: 0px 15px 0px 5px;
  background-color: #ffffff;
`;
export const Description = styled.p`
  color: #000000;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  margin-right: 35px;
  background-color: #ffffff;
`;
export const Value = styled.p`
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  background-color: #ffffff;
  color:${props => (props.type === "entry") ? "#03AC00":"#C70000"}
`;

export const RecordContainer = styled.div`
  display: flex;
  background-color: #ffffff;
  margin-bottom: 15px;
`;
export const Text = styled.h1`
  background-color: white;
  color: #868686;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
`;

export const TextBox = styled.div`
  height: 90%;
  background-color: #FFFFFF;
  text-align: center;
  display:flex;
  justify-content: center;
  align-items: center;
`;

export const RecordBox = styled.div`
  display:flex;
  flex-direction: column;
  background-color: #FFFFFF;
`

export const Balance = styled.div`
  h1{
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    font-size: 17px;
    background-color: #FFFFFF;
  }
  p{
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    font-size: 17px;
    background-color: #FFFFFF;
  }
  padding-right: 127px;
  background-color: #FFFFFF;
`

export const BalanceContainer = styled.section`
  display:flex;
  justify-content: flex-start;
  margin: 0px 15px 0px 5px;
  background-color: #FFFFFF;
`

export const BalanceBox = styled.div`
  display:flex;
  justify-content: space-around;
  align-items: flex-end;
  margin-right: 40px;
`