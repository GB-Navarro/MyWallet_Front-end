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
import TokenContext from "./../../contexts/TokenContext.js";
import NameContext from "./../../contexts/NameContext.js";

import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import EmailContext from "../../contexts/EmailContext";


export default function SignIn() {

  let { setToken } = useContext(TokenContext);
  let { setName } = useContext(NameContext);
  let { setEmailContext } = useContext(EmailContext);

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
                required
              ></Input>
              <Input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
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
    try{
      let isLoginSuccessful = await sendUserLoginData();
      //let isUserDataGet = await getUserEntries();
      if(isLoginSuccessful){
        navigate("/home");
      }
    }catch(error){
      console.log(error);
    }
  }

  async function sendUserLoginData(){
    const URL = "https://fullstack-driven-mywallet.herokuapp.com/sign-in";
    let isLoginSuccessful;
    try{
      let response = await axios.post(URL, userData);
      if(response.status === 200){
        setToken(response.data.token);
        setName(response.data.name);
        setEmailContext(email);
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
