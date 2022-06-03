import { InputHTMLAttributes, useEffect } from "react"
import { notify } from "../../../store/notify.state";
import { NotifyType } from "../../../types/notify.types";
import "./Input.css"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string | JSX.Element;
  align?: "center" | "start" | "end"
  error?: any
}

export const Input = (props: InputProps) => {
  const { label, name, ...otherProps } = props
  const textAlign = { textAlign: props.align || "center" }
  const errorClass = props.error ? "error" : ""

  useEffect(() => {
    if (props.error) {
      notify.make("Неверное заполнение полей", props.error, NotifyType.Warning)
    }
  }, [props.error])

  return (
    <>
      <div className="input-container">
        {label && <label htmlFor={name} className="input-label">{label}</label>}
        <input type="text" name={name} className={`input ${errorClass}`} {...otherProps} style={textAlign} />
      </div>
    </>
  )
}