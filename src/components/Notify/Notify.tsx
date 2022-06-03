import { observer } from "mobx-react-lite"
import { notify } from "../../store/notify.state"
import { NotifyData } from "../../types/notify.types"
import "./Notify.css"
import { NotifyLabel } from "./NotifyLabel/NotifyLabel"

export const Notify = observer(() => {
  return (
    <div className="notify-container">
      <div className="notify-wrapper">
        {notify.notifies.map((notifyLabel: NotifyData) => 
          <NotifyLabel
            key={notifyLabel.id}
            id={notifyLabel.id}
            type={notifyLabel.type}
            title={notifyLabel.title}
            text={notifyLabel.text}
            duration={notifyLabel.duration}
          />
        )}
      </div>
    </div>
  )
})