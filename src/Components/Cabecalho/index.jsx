import React from "react";
import styled from "styled-components";
import bank_logo from "../../assets/images/bank_logo.svg";
import { corPrimaria } from "../UI/variaveis";
import { useNome } from "../../hooks/Nome";
const BtnCabecalho = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;

  background: ${(props) => (props.primary ? "white" : corPrimaria)};
  color: ${(props) => (props.primary ? corPrimaria : "white")};
  @media (max-width: 800px){
    margin: 2px 0px;
  }

`;

const StyledCabecalho = styled.nav`
  background-color: ${corPrimaria};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;

  
  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: space-around;
    height: 200px;
    align-items: unset;
    padding: 0 6vw;
  }
`;
const MiniContainer = styled.div`
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`

const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

const Input = styled.input`
  border-radius: 3px;
  padding: 7px 10px;
  margin: 0 10px;
  outline: none;
  border: none;
  @media (max-width: 700px){
    margin: 2px 0px;
  }
`

const Cabecalho = () => {

  const { setNome } = useNome()

  return (
    <StyledCabecalho>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <MiniContainer>
        <Input
          onChange={(e)=> {setNome(e.target.value)}}
          placeholder="INSIRA SEU NOME"
        ></Input>
        <BtnCabecalho primary href="https://duoblog.vercel.app/alex" target="_blanket">
          Blog
        </BtnCabecalho>
        <BtnCabecalho href="https://google.com">Sair</BtnCabecalho>
      </MiniContainer>
    </StyledCabecalho>
  );
};

export default Cabecalho;
