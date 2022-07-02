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

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Link } from "react-router-dom";

export default function SignIn() {

  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let userData = {
    email: email,
    password: password
  }

  return (
    <>
      <Main>
        <Container>
          <RowBox>
            <Logo> MyWallet </Logo>
          </RowBox>
          <ColumnBox>
            <form onSubmit={userLogin}>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Input>
              <Input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Input>
              <Button> Entrar </Button>
            </form>
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

  async function userLogin(event) {
    event.preventDefault()
    let isLoginSuccessful = await sendUserLoginData();
    if(isLoginSuccessful){
      navigate("/home");
    }

  }

  async function sendUserLoginData(){
    const URL = "http://localhost:5000/sign-in";
    let isLoginSuccessful;
    try{
      let response = await axios.post(URL, userData);
      if(response.status === 200){
        isLoginSuccessful = true;
        return isLoginSuccessful;
      }else{
        isLoginSuccessful = false;
        return isLoginSuccessful;
      }
    }catch(error){
      console.log("Ocorreu um erro ao tentar realizar o login", error)
    }
  }
}
