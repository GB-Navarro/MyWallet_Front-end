import { Header, Name, Icon, Main, Records, Button, Box, Buttons, Container, Date, Description, Value, RecordContainer } from "./styles"
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import EntryExitContext from "../../contexts/EntryExitContext";
import TokenContext from "../../contexts/TokenContext";
import EmailContext from "../../contexts/EmailContext";
import NameContext from "../../contexts/NameContext";


export default function Home() {

  let navigate = useNavigate();
  let {token} = useContext(TokenContext);
  let {name} = useContext(NameContext);
  let {email} = useContext(EmailContext);
  let { entryExit, setEntryExit} = useContext(EntryExitContext);

  let [userEntries, setUserEntries] = useState([]);

  const config = {
    headers: {
        Authorization: token
    }
  }

  return (
    <>
      <Header>
        <Name onClick={() => getUserEntries()}> Olá, {name} </Name>
        <Icon onClick={() => dropSession()}>
          <ion-icon name="exit-outline"></ion-icon>
        </Icon>
      </Header>
      <Main>
        <Records>
          {userEntries.length > 0 ? 
          userEntries.map((userEntrie) => {
            return (
              <>
                <Record date={userEntrie.date} description={userEntrie.description} value={userEntrie.value} type={entryExit}></Record>
              </>
            )
          })
          :
            <>
              <h1>O usuário não possui entradas</h1>
            </>
          }
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

  async function getUserEntries(){
    const response = await axios.get("http://localhost:5000/entry", config);
    console.log(response);
    setUserEntries(response.data);
    console.log(userEntries);
  }

  async function dropSession(){
    try{
      const response = await axios.delete("http://localhost:5000/home", config);
      navigate("/");
    }catch(error){
      console.log("Ocorreu um erro ao deslogar o usuário", error);
    }
    
  }
}

function Record(props){
  return(
    <>
      <RecordContainer>
        <Date>{props.date}</Date>
        <Description>{props.description}</Description>
        <Value>{props.value}</Value>
      </RecordContainer>
      
    </>
  )
}

