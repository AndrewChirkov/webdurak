import "./Loader.css"

interface LoaderProps {
  loading: boolean
}

export const Loader = (props: LoaderProps) => {
  let statusClass = ""

  if (props.loading) {
    statusClass = "active"
  }

  if (!props.loading) {
    statusClass = ""
  }

  return (
    <div className={`loader-wrapper ${statusClass}`}>
      <div className="loader" />
    </div>
  )
}