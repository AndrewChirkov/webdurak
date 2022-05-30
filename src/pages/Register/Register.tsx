import { ChangeEvent, useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { Header } from "../../components/Header/Header"
import { HeaderType } from "../../components/Header/Header.types"
import { Button } from "../../components/UI/Button/Buttons"
import { Input } from "../../components/UI/Input/Input"
import { auth } from "../../store/auth.state"
import { Status } from "../../types/global.types"
import { RegisterUserData } from "../../types/auth.types"
import "./Register.css"

export const Register = () => {
  const [registerUserData, setRegisterUserData] = useState<RegisterUserData>({ 
    name: "",
    email: "",
    password: ""
  })
  const navigate = useNavigate()

  const navigateToGame = () => {
    navigate("/game/durak")
  }

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setRegisterUserData((prevState) => ({ ...prevState, name: e.target.value }))
  }

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setRegisterUserData((prevState) => ({ ...prevState, email: e.target.value }))
  }

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setRegisterUserData((prevState) => ({ ...prevState, password: e.target.value }))
  }

  const sendRegisterForm = () => {
    auth.register(registerUserData)
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
      <Header type={HeaderType.RegisterInfo} />
      <div className="pad-container">
        <div className="input-group">
          <Input onChange={handleChangeName} name="register-name" type="text" placeholder={"Введите никнейм"} value={registerUserData.name} />
          <Input onChange={handleChangeEmail} name="register-email" type="email" placeholder={"Введите email"} value={registerUserData.email} />
          <Input onChange={handleChangePassword} name="register-password" type="password" placeholder={"Введите пароль"} value={registerUserData.password} />
          <Button onClick={sendRegisterForm} text={auth.status === Status.Pending ? "Загружаемся..." : "Зарегистрироваться"} disabled={auth.status === Status.Pending ? true : false} />
        </div>
      </div>
    </div>
  )
}