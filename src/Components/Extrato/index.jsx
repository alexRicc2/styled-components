import React from "react";
import { useState } from "react";
import { Box, Botao } from "../../Components/UI";
import { extratoLista } from "../../info";
import Items from "../Items";

const Extrato = () => {

  const [ show, setShow] = useState(false);

  return (
    <Box>
      {extratoLista.updates.slice(0,5).map(({ id, type, from, value, date }) => {
        return (
          <Items key={id} type={type} from={from} value={value} date={date} />
        );
      })}
      {show &&
        extratoLista.updates.slice(0,5).map(({ id, type, from, value, date }) => {
          return (
            <Items key={id} type={type} from={from} value={value} date={date} />
          );
        })
        }
      <Botao onClick={()=> setShow(prevState => !prevState)}>{show ? 'Ver Menos' : 'Ver Mais'}</Botao>
      
    </Box>
  );
};
export default Extrato;
