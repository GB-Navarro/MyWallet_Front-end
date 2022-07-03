import GlobalStyles from "./globalStyles";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import Entry from "./components/Entry";

import TokenContext from "./contexts/TokenContext";
import NameContext from "./contexts/NameContext";
import EntryExitContext from "./contexts/EntryExitContext";
import EmailContext from "./contexts/EmailContext";

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [entryExit, setEntryExit] = useState("");
  const [emailContext, setEmailContext] = useState("");

  return (
    <>
      <GlobalStyles />
      <EmailContext.Provider value={{ emailContext, setEmailContext }}>
        <EntryExitContext.Provider value={{ entryExit, setEntryExit }}>
          <NameContext.Provider value={{ name, setName }}>
            <TokenContext.Provider value={{ token, setToken }}>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<SignIn />}></Route>
                  <Route path="/signup" element={<SignUp />}></Route>
                  <Route path="/home" element={<Home />}></Route>
                  <Route path="/entry" element={<Entry />}></Route>
                </Routes>
              </BrowserRouter>
            </TokenContext.Provider>
          </NameContext.Provider>
        </EntryExitContext.Provider>
      </EmailContext.Provider>
    </>
  );
}
