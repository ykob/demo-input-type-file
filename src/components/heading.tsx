import { ComponentProps } from "react";
import { css, cx } from "styled-system/css";

type Props = ComponentProps<"h1">;

export function Heading({ children, className, ...props }: Props) {
  return (
    <h1 className={cx(style, className)} {...props}>
      {children}
    </h1>
  );
}

const style = css({
  fontSize: "4xl",
});
