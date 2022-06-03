import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useLocation } from "react-router";
import { Route, Routes } from "react-router";
import { GameMain } from "../../../pages/Game/GameMain";
import { Login } from "../../../pages/Login/Login";
import { Main } from "../../../pages/Main/Main";
import { Register } from "../../../pages/Register/Register";
import { app } from "../../../store/app.state";
import { auth } from "../../../store/auth.state";
import { PrivateRouter } from "../PrivateRouter/PrivateRouter";

export const PathsRouter = observer(() => {
  const location = useLocation()

  useEffect(() => {
    switch(location.pathname) {
      case "/login":
      case "/register":
      case "/":
        auth.exit()
        break
    }
  }, [location])

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/game/durak" element={
        <PrivateRouter property={app.isAuth}>
          <GameMain />
        </PrivateRouter>
      } />
    </Routes>
  )
})