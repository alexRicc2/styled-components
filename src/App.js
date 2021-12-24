import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./Components/UI/temas";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";
import { NomeProvider } from './hooks/Nome';
function App() {
  const [tema, setTema] = useState(true);

  const toggleTema = () => {
    setTema((tema) => !tema);
  };

  return (
   
      <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
        <NomeProvider>
        <GlobalStyle />
        <BtnTema onClick={toggleTema}>
          <SwitcherTema tema={tema} />
        </BtnTema>
        <Cabecalho />
        <Container />
        </NomeProvider>
      </ThemeProvider>
    
  );
}

export default App;





