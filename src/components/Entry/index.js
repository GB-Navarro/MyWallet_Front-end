import { Header, Text, Main, Input, Button } from "./styles";
import { useContext } from "react";

import EntryExitContext from "../../contexts/EntryExitContext";

export default function Entry() {
  let { entryExit } = useContext(EntryExitContext);
  console.log(entryExit);

  return (
    <>
      <Header>
        <Text>{entryExit === "entry" ? "Nova entrada" : "Nova saida"}</Text>
      </Header>
      <Main>
        <Input placeholder="Valor"></Input>
        <Input placeholder="Descrição"></Input>
        <Button> Salvar Entrada </Button>
      </Main>
    </>
  );
}
