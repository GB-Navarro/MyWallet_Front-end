import { Header, Text, Main, Input, Button } from "./styles";

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