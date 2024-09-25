import { useState } from "react";
import "./App.css";

import Formularz from "./components/Formularz";

import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  font-family: ${(props) => props.theme.fonts.main};
  padding: 20px;
`;

function App() {
  return (
    <>
      <Formularz />
    </>
  );
}

export default App;
