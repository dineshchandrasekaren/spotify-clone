import styles, { type CSPair } from "ansi-styles";
const { bold, color } = styles;
type Color = keyof typeof color;

export const boldText = (text: string) => `${bold.open}${text}${bold.close}`;
export const colorText = (text: string, color: Color) => {
  const selectedColor = styles.color[color] as CSPair;

  return `${selectedColor.open}${text}${selectedColor.close}`;
};
export const styleLogger = (
  text: string,
  color: Color = "white",
  isBold: boolean = true
) => {
  console.log(colorText(isBold ? boldText(text) : text, color));
};
