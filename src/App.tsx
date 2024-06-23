import { css } from "styled-system/css";
import { Container, Heading, InputFile } from "./components";

function App() {
  return (
    <Container>
      <Heading className={css({ mb: 8 })}>Demo input type file</Heading>
      <InputFile id="input-image-file" />
    </Container>
  );
}

export default App;
