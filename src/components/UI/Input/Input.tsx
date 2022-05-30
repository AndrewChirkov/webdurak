import { InputHTMLAttributes } from "react"
import "./Input.css"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string | JSX.Element;
  align?: "center" | "start" | "end" 
}

export const Input = (props: InputProps) => {
  const { label, name, ...otherProps } = props
  const textAlign = { textAlign: props.align || "center" }

  return (
    <>
      <div className="input-container">
        {label && <label htmlFor={name} className="input-label">{label}</label>}
        <input type="text" name={name} className="input" {...otherProps} style={textAlign} />
      </div>
    </>
  )
}