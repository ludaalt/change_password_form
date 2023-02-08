import styled from "styled-components";
import Form from "./components/Form";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <AppContainer>
      <Form />
    </AppContainer>
  );
};
export default App;
