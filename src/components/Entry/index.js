import styled from "styled-components";

export default function Entry(){
    return(
        <>
            <Header> 
                <Text> Nova entrada </Text>
            </Header>
            <Main>
                <Input placeholder="Valor"></Input>
                <Input placeholder="Descrição"></Input>
                <Button> Salvar Entrada </Button>
            </Main>
        </>
    )
}

const Header = styled.header`
    margin: 15px 0px 25px 3vh;
`
const Text = styled.p`
    font-size:26px;
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    color: #FFFFFF;
`
const Main = styled.main`
    margin: 15px 0px 25px 3vh;
`
const Input = styled.input`
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
`
const Button = styled.button`
  width: 85%;
  height: 8vh;
  font-family: "Raleway", sans-serif;
  color: #ffffff;
  background-color: #a328d6;
  border: 1px solid #a328d6;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 700;
  margin: 15px 0px 40px 0px;
`