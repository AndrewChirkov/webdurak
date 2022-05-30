import "./Money.css"

interface MoneyProps {
  count: number
}

export const Money = (props: MoneyProps) => {
  return (
    <div className="money-wrapper">
      <div className="money-icon" />
      <div className="money-count">{props.count?.toLocaleString('de-DE')}</div>
    </div>
  )
}