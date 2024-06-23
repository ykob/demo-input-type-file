import { css } from "styled-system/css";
import { visuallyHidden } from "styled-system/patterns";

type InputFileProps = {
  id: string;
};

export function InputFile({ id }: InputFileProps) {
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
      <label htmlFor={id}>Select Image file</label>
      <input
        id={id}
        className={styles.input}
        type="file"
        accept="image/png, image/jpeg"
        onChange={onChange}
      />
    </div>
  );
}

const styles = {
  label: css({}),
  input: visuallyHidden({}),
};
