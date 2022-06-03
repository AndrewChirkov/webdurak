import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { notify } from "../../../store/notify.state"
import { NotifyData, NotifyType } from "../../../types/notify.types"
import "./NotifyLabel.css"

interface NotifyLabelProps extends Partial<NotifyData> {}

export const NotifyLabel = (props: NotifyLabelProps) => {
  const [hidden, setHidden] = useState(false)
  const hiddenClass = hidden ? "hide" : ""
  let icon: JSX.Element

  switch(props.type) {
    case NotifyType.Warning:
      icon = <FontAwesomeIcon icon={faXmark} size="2x" />
      break
  }

  function removeNotify() {
    setHidden(true)
    notify.remove(props.id)
  }

  return (
    <div className={`notify-label ${props.type} ${hiddenClass}`}>
      <div className="notify-label-wrapper">
        <div className="notify-icon">{icon}</div>
        <div className="notify-description">
          <div className="notify-title">{props.title || "Notify"}</div>
          <div className="notify-text">{props.text}</div>
        </div>
      </div>
      <div className="notify-line" onAnimationEnd={removeNotify} style={{ animationDuration: `${props.duration}ms` }}/>
    </div>
  )
}