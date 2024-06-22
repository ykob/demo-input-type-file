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
    <div>
      <h1>Demo input[type="file"]</h1>
      <input type="file" accept="image/png, image/jpeg" onChange={onChange} />
    </div>
  );
}

export default App;
