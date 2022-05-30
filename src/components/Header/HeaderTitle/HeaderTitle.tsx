import "./HeaderTitle.css"

interface HeaderTitleProps {
  text: string
}

export const HeaderTitle = (props: HeaderTitleProps) => {
  return (
    <div className="header-title">
      {props.text}
    </div>
  )
}