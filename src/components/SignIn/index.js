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
              <Text> Primeira vez? Cadastre-se! </Text>
            </RowBox>
          </Container>
        </Main>
      </>
    );
  }