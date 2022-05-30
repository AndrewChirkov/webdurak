import { useNavigate } from "react-router"
import { ButtonColor } from "../../components/UI/Button/Button.types"
import { Button } from "../../components/UI/Button/Buttons"
import { Logo } from "../../components/UI/Logo/Logo"
import "./Main.css"

export const Main = () => {
  const navigate = useNavigate()

  const navigateToRegister = () => {
    navigate("/register")
  }

  const navigateToLogin = () => {
    navigate("/login")
  }

  return (
    <div className="pad-container main-page">
      <div className="logo-wrapper">
        <div className="logo-title"><span>Web</span>Durak</div>
        <Logo />
      </div>
      <div className="buttons-group">
        <Button text={"Регистрация"} onClick={navigateToRegister} />
        <Button text={"Войти"} onClick={navigateToLogin} color={ButtonColor.Green} />
      </div>
    </div>
  )
}