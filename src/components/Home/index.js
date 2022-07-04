import {
  Header,
  Name,
  Icon,
  Main,
  Records,
  Button,
  Box,
  Buttons,
  Container,
  Date,
  Description,
  Value,
  RecordContainer,
  Text,
  TextBox,
  RecordBox,
  Balance,
  BalanceBox,
  BalanceContainer,
} from "./styles";
import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import EntryExitContext from "../../contexts/EntryExitContext";
import TokenContext from "../../contexts/TokenContext";
import NameContext from "../../contexts/NameContext";
import UserEntriesContext from "../../contexts/UserEntriesContext";

export default function Home() {
  let navigate = useNavigate();
  let { token } = useContext(TokenContext);
  let { name } = useContext(NameContext);
  let { entryExit, setEntryExit } = useContext(EntryExitContext);
  let { userEntries, setUserEntries } = useContext(UserEntriesContext);

  let [balance, setBalance] = useState(0);

  const config = {
    headers: {
      Authorization: token,
    },
  };
  useEffect(() => {
    const promisse = axios.get("http://localhost:5000/entry", config);
    promisse.then((response) => {
      setUserEntries(response.data.userEntries);
      setBalance(response.data.balance);
      console.log("response", response.data);
    });
    promisse.catch((error) => {
      console.log("deu ruim", error);
    });
  }, []);

  return (
    <>
      <Header>
        <Container>
          <Name> Olá, {name} </Name>
          <Icon onClick={() => dropSession()}>
            <ion-icon name="exit-outline"></ion-icon>
          </Icon>
        </Container>
      </Header>
      <Main>
        <Records>
          {userEntries != undefined ? (
            userEntries.length > 0 ? (
              <>
                <RecordBox>
                  {userEntries.map((userEntrie) => {
                    return (
                      <>
                        <Record
                          date={userEntrie.date}
                          description={userEntrie.description}
                          value={userEntrie.value}
                          type={entryExit}
                        ></Record>
                      </>
                    );
                  })}
                </RecordBox>
                <BalanceContainer>
                  <BalanceBox>
                    <Balance>
                      <h1>SALDO</h1>
                    </Balance>
                    <Balance>
                      <p>{balance}</p>
                    </Balance>
                  </BalanceBox>
                </BalanceContainer>
              </>
            ) : (
              <>
                <TextBox>
                  <Text>Não há registros de entrada ou saída </Text>
                </TextBox>
              </>
            )
          ) : (
            <>
              <TextBox>
                <Text>Não há registros de entrada ou saída </Text>
              </TextBox>
            </>
          )}
        </Records>
      </Main>
      <Buttons>
        <Container>
          <Box>
            <Button
              onClick={() => {
                setEntryExit("entry");
                navigate("/entry");
              }}
            >
              Nova entrada
            </Button>
          </Box>
          <Box>
            <Button
              onClick={() => {
                setEntryExit("exit");
                navigate("/entry");
              }}
            >
              {" "}
              Nova saída{" "}
            </Button>
          </Box>
        </Container>
      </Buttons>
    </>
  );

  async function dropSession() {
    try {
      await axios.delete("http://localhost:5000/home", config);
      navigate("/");
    } catch (error) {
      console.log("Ocorreu um erro ao deslogar o usuário", error);
    }
 }
}

//ajustar a styled props das cores das entradas/saídas
//arquiteturar o back e o front end
//fazer o deploy do back end e do banco de dados

function Record(props) {
  return (
    <>
      <RecordContainer>
        <Date>{props.date}</Date>
        <Description>{props.description}</Description>
        <Value type={props.type}>{props.value}</Value>
      </RecordContainer>
    </>
  );
}
