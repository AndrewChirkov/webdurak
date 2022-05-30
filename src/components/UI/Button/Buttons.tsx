import { ButtonHTMLAttributes } from "react";
import { ButtonColor, ButtonSize } from "./Button.types";
import "./Button.css"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: JSX.Element;
  size?: ButtonSize;
  color?: ButtonColor;
}


export const Button = (props: ButtonProps) => {
  const { size, color, ...otherProps } = props
  const buttonSizeClass = size || ButtonSize.Medium
  const buttonColorClass = color || ButtonColor.Blue

  return (
    <button className={`button ${buttonSizeClass} ${buttonColorClass}`} {...otherProps}>
      {props.icon}
      {props.text}
    </button>
  )
} 