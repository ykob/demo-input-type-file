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
      <input
        id={id}
        className={styles.input}
        type="file"
        accept="image/png, image/jpeg"
        onChange={onChange}
      />
      <label className={styles.label} htmlFor={id}>
        Select Image file
      </label>
    </div>
  );
}

const styles = {
  label: css({
    cursor: "pointer",
    "input:focus + &": {
      outline: "1px solid #000",
      outlineOffset: "2px",
    },
  }),
  input: visuallyHidden({}),
};
