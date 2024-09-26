import "./App.css";

import styled from "styled-components";
import BasicFormForLessons from "./pages/BasicFormForLesson/BasicFormForLesson";

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  font-family: ${(props) => props.theme.fonts.main};
  padding: 20px;
`;

function App() {
  return (
    <>
      <BasicFormForLessons />
    </>
  );
}

export default App;
