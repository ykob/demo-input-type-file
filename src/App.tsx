import { css } from "styled-system/css";
import { Container, Heading } from "./components";

function App() {
  const fileReader = new FileReader();

  fileReader.onload = () => {
    console.log(fileReader.result);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      return;
    }
    if (file.type !== "image/png" && file.type !== "image/jpeg") {
      console.log("file type is not png or jpeg.");
    }
    fileReader.readAsDataURL(file);
  };

  return (
    <Container>
      <Heading className={css({ mb: 8 })}>Demo input type file</Heading>
      <input type="file" accept="image/png, image/jpeg" onChange={onChange} />
    </Container>
  );
}

export default App;
