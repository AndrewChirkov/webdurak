import { ChangeEvent, useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { Header } from "../../components/Header/Header"
import { HeaderType } from "../../components/Header/Header.types"
import { Button } from "../../components/UI/Button/Buttons"
import { Input } from "../../components/UI/Input/Input"
import { auth } from "../../store/auth.state"
import { Status } from "../../types/global.types"
import { LoginUserData } from "../../types/auth.types"
import "./Login.css"

export const Login = () => {
  const [loginUserData, setLoginUserData] = useState<LoginUserData>({ 
    name: "",
    password: ""
  })
  const navigate = useNavigate()

  const navigateToGame = () => {
    navigate("/game/durak")
  }

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginUserData((prevState) => ({ ...prevState, name: e.target.value }))
  }

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginUserData((prevState) => ({ ...prevState, password: e.target.value }))
  }

  const sendLoginForm = () => {
    auth.login(loginUserData)
  }

  useEffect(() => {
    auth.exit()
  }, [])

  useEffect(() => {
    if (auth.status === Status.Done) {
      navigateToGame()
    }
  })

  return (
    <div className="container">
      <Header type={HeaderType.LoginInfo} />
      <div className="pad-container">
        <div className="input-group">
          <Input onChange={handleChangeName} name="login-username" type="text" placeholder={"Введите никнейм"} value={loginUserData.name} />
          <Input onChange={handleChangePassword} name="login-password" type="password" placeholder={"Введите пароль"} value={loginUserData.password} />
          <Button onClick={sendLoginForm} text={auth.status === Status.Pending ? "Загружаемся..." : "Зарегистрироваться"} disabled={auth.status === Status.Pending ? true : false} />
        </div>
      </div>
    </div>
  )
}