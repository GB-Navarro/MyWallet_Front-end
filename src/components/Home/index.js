import styled from "styled-components";

export default function Home() {
    return (
        <>
            <Header>
                <Name> Olá, fulano </Name>
                <Icon> <ion-icon name="exit-outline"></ion-icon> </Icon>
            </Header>
            <Main>
                <Records>

                </Records>
                
            </Main>
            <Buttons>
                <Container>
                    <Box>
                        <Button> 
                            Nova entrada 
                        </Button>
                    </Box>
                    <Box>
                        <Button> Nova saída </Button>
                    </Box>
                </Container>
            </Buttons>      
        </>
    )
}

const Header = styled.header`
    display:flex;
    justify-content: space-around;
    margin: 5vh 0vh 5vh 0vh;
`

const Name = styled.div`
    color: #FFFFFF;
    font-size: 26px;
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    padding-right: 40vw;
`

const Icon = styled.div`
    color: #FFFFFF;
    font-size: 22px;
    font-weight: bold;
    display:flex;
    align-items: center;
`

const Main = styled.main`
    width: 100vw;
    height: 65vh;
    display:flex;
    justify-content: center;
    align-items: center;
`

const Records = styled.section`
    width: 87%;
    height: 90%;
    background-color: #FFFFFF;
    border-radius: 5px;
`

const Button = styled.button`
    width: 150px;
    height: 100%;
    background-color: #A328D6;
    color: #FFFFFF;
    font-size: 17px;
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    border: 1px solid #A328D6;
    border-radius: 5px;
`

const Box = styled.div`
    margin: 0px 12px 0px 12px;
`

const Buttons = styled.section`
    width: 100vw;
    height: 20vh;
    margin-bottom: 50px;
`

const Container = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    justify-content: center;
`