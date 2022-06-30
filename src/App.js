import GlobalStyles from "./globalStyles"
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
import Home from "./components/Home"
import Entry from "./components/Entry";

import TokenContext from "./contexts/TokenContext";

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App(){

  const [token, setToken] = useState("");

  return(
    <>
      <GlobalStyles />
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
    </>
  )
}

