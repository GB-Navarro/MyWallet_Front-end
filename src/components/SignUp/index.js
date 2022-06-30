import styled from "styled-components";
export default function SignUp (){
    return(
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
    )
}

const Main = styled.main`
    width: 100vw;
    height: 100vh;
    background-color: #8C11BE;
`

const Logo = styled.h1`
    font-family: 'Saira Stencil One', cursive; 
    font-size: 32px;
    font-weight: 400;
    color: #FFFFFF;
    margin-bottom:30px;
`

const RowBox = styled.div`
    display:flex;
    justify-content: center;
`

const ColumnBox = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`

const Input = styled.input`
    width: 85%;
    height: 8vh;
    font-family: 'Raleway', sans-serif;
    color: #000000;
    background-color: #FFFFFF;
    border: 1px solid #FFFFFF;
    border-radius: 5px;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 400;
    padding: 18px 0px 18px 15px;
`

const Button = styled.button`
    width: 85%;
    height: 8vh;
    font-family: 'Raleway', sans-serif;
    color: #FFFFFF;
    background-color: #A328D6;
    border: 1px solid #A328D6;
    font-size:20px;
    font-weight: 700;
    margin: 15px 0px 40px 0px;
`

const Text = styled.p`
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 15px;
    color: #FFFFFF;
`

const Container = styled.div`
    height: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
`

/*
font-family: 'Raleway', sans-serif;
font-family: 'Saira Stencil One', cursive; 
*/