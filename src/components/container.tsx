import { PropsWithChildren } from "react";
import { container } from "styled-system/patterns";

export function Container({ children }: PropsWithChildren) {
  return <div className={styles}>{children}</div>;
}

const styles = container({
  py: 8,
});
