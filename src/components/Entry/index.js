import { Header, Text, Main, Input, Button } from "./styles";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useState } from "react";
import dayjs from "dayjs";
import axios from "axios";

import EntryExitContext from "../../contexts/EntryExitContext";
import TokenContext from "../../contexts/TokenContext"
import NameContext from "../../contexts/NameContext";
import EmailContext from "../../contexts/EmailContext";
export default function Entry() {

  const { name } = useContext(NameContext);
  const { entryExit } = useContext(EntryExitContext);
  const { token } = useContext(TokenContext);
  const { emailContext} = useContext(EmailContext)

  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  let data = {
    email: emailContext,
    type: entryExit,
    value: value,
    description: description,
    date: dayjs().format('DD/MM/YYYY')
  };

  const config = {
    headers: {
        Authorization: token
    }
}

  return (
    <>
      <Header>
        <Text>{entryExit === "entry" ? "Nova entrada" : "Nova saida"}</Text>
      </Header>
      <Main>
        <form onSubmit={dataRegister}>
          <Input
            type="text"
            placeholder="Valor"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            required
          ></Input>
          <Input
            type="text"
            placeholder="Descrição"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            required
          ></Input>
          <Button type="submit">
            {" "}
            Salvar Entrada{" "}
          </Button>
        </form>
      </Main>
    </>
  );

  function dataRegister(e) {
    e.preventDefault();
    let isDataSend;
    sendData();
    console.log(isDataSend);
    navigate("/home");
  }

  async function sendData() {
    const URL = "https://fullstack-driven-mywallet.herokuapp.com/entry";
    let promisse = axios.post(URL, data, config);
    promisse.then((response) => {
        console.log(response);
    })
  }
}
