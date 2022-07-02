import { Header, Name, Icon, Main, Records, Button, Box, Buttons, Container } from "./styles"
export default function Home() {
  return (
    <>
      <Header>
        <Name> Olá, fulano </Name>
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
            <Button>Nova entrada</Button>
          </Box>
          <Box>
            <Button> Nova saída </Button>
          </Box>
        </Container>
      </Buttons>
    </>
  );
}
