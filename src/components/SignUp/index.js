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
export default function SignUp() {
  return (
    <>
      <Main>
        <Container>
          <RowBox>
            <Logo> MyWallet </Logo>
          </RowBox>
          <ColumnBox>
            <Input placeholder="Nome"></Input>
            <Input placeholder="Email"></Input>
            <Input placeholder="Senha"></Input>
            <Input placeholder="Confirme a senha"></Input>
            <Button> Cadastrar </Button>
          </ColumnBox>
          <RowBox>
            <Text> Já tem uma conta ? Entre agora! </Text>
          </RowBox>
        </Container>
      </Main>
    </>
  );
}