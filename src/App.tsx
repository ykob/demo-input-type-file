import { Container } from "./components";

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
      <h1>Demo input[type="file"]</h1>
      <input type="file" accept="image/png, image/jpeg" onChange={onChange} />
    </Container>
  );
}

export default App;
