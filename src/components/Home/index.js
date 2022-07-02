import { Header, Name, Icon, Main, Records, Button, Box, Buttons, Container } from "./styles"
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import TokenContext from "../../contexts/TokenContext";
import NameContext from "../../contexts/NameContext";
import EntryExitContext from "../../contexts/EntryExitContext";

export default function Home() {

  let navigate = useNavigate();
  let {token} = useContext(TokenContext);
  let {name} = useContext(NameContext);
  let {setEntryExit} = useContext(EntryExitContext);

  return (
    <>
      <Header>
        <Name> Olá, {name} </Name>
        <Icon>
          <ion-icon name="exit-outline"></ion-icon>
        </Icon>
      </Header>
      <Main>
        <Records></Records>
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
