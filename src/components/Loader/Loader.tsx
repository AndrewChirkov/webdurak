import { Status } from "../../types/global.types"
import "./Loader.css"

interface LoaderProps {
  status: Status | boolean
}

export const Loader = (props: LoaderProps) => {
  let statusClass = ""

  if (props.status === Status.Pending || props.status === true) {
    statusClass = "active"
  }

  if (props.status === Status.Done || props.status === false) {
    statusClass = ""
  }

  return (
    <div className={`loader-wrapper ${statusClass}`}>
      <div className="loader" />
    </div>
  )
}