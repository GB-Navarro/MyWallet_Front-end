import {
    Main,
    Container,
    RowBox,
    Logo,
    ColumnBox,
    Input,
    Button,
    Text,
  } from "./styles";

  import { Link } from "react-router-dom";

  export default function SignIn () {
    return (
      <>
        <Main>
          <Container>
            <RowBox>
              <Logo> MyWallet </Logo>
            </RowBox>
            <ColumnBox>
              <Input placeholder="Email"></Input>
              <Input placeholder="Senha"></Input>
              <Button> Entrar </Button>
            </ColumnBox>
            <RowBox>
              <Link to="/signup">
                <Text> Primeira vez? Cadastre-se! </Text>
              </Link>
            </RowBox>
          </Container>
        </Main>
      </>
    );
  }