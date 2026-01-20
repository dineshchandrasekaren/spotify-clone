import {
  createElement,
  type HTMLAttributes,
  type PropsWithChildren,
  type FC,
  type HTMLElementType,
} from "react";

const CLASS_MAP = {
  h1: "scroll-m-20 text-center text-4xl font-extrabold tracking-tight",
  h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold",
  h3: "scroll-m-20 text-2xl font-semibold",
  h4: "scroll-m-20 text-xl font-semibold",
  p: "leading-7 [&:not(:first-child)]:mt-6",
  muted: "text-muted-foreground text-xl",
  large: "text-lg font-semibold",
} as const;

type Props = PropsWithChildren<HTMLAttributes<HTMLElement>>;

const createTypography = (tag: HTMLElementType, classes: string): FC<Props> => {
  return ({ children, className, ...props }) =>
    createElement(
      tag,
      {
        ...props,
        className: `${classes} ${className ?? ""}`,
      },
      children,
    );
};

export const Typography = {
  h1: createTypography("h1", CLASS_MAP.h1),
  h2: createTypography("h2", CLASS_MAP.h2),
  h3: createTypography("h3", CLASS_MAP.h3),
  h4: createTypography("h4", CLASS_MAP.h4),
  p: createTypography("p", CLASS_MAP.p),
  muted: createTypography("p", CLASS_MAP.muted),
  large: createTypography("p", CLASS_MAP.large),
} as const;

export default Typography;
