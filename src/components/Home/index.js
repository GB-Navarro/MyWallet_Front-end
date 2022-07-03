import { Header, Name, Icon, Main, Records, Button, Box, Buttons, Container, Date, Description, Value, RecordContainer } from "./styles"
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import TokenContext from "../../contexts/TokenContext";
import NameContext from "../../contexts/NameContext";
import EntryExitContext from "../../contexts/EntryExitContext";

export default function Home() {

  let navigate = useNavigate();
  let {token} = useContext(TokenContext);
  let {name} = useContext(NameContext);
  let { entryExit, setEntryExit} = useContext(EntryExitContext);

  let [date, setDate] = useState("");
  let [description, setDescription] = useState("");
  let [value, setValue] = useState("");

  return (
    <>
      <Header>
        <Name> Olá, {name} </Name>
        <Icon>
          <ion-icon name="exit-outline"></ion-icon>
        </Icon>
      </Header>
      <Main>
        <Records>
          <Record date={date} description={description} value={value} type={entryExit}></Record>
          <Record date={date} description={description} value={value} type={entryExit}></Record>
          <Record date={date} description={description} value={value} type={entryExit}></Record>
          <Record date={date} description={description} value={value} type={entryExit}></Record>
          <Record date={date} description={description} value={value} type={entryExit}></Record>
        </Records>
      </Main>
      <Buttons>
        <Container>
          <Box>
            <Button onClick={() => {
              setEntryExit("entry");
              navigate("/entry");
            }}>Nova entrada</Button>
          </Box>
          <Box>
            <Button onClick={() => {
              setEntryExit("exit");
              navigate("/entry");
            }}> Nova saída </Button>
          </Box>
        </Container>
      </Buttons>
    </>
  );
}

function Record(props){
  return(
    <>
      <RecordContainer>
        <Date>02/07/2022</Date>
        <Description>Almoço com a gata</Description>
        <Value>200</Value>
      </RecordContainer>
      
    </>
  )
}

