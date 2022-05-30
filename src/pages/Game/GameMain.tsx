import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import { HeaderUserInfo } from "../../components/Header/HeaderTypes/HeaderUserInfo/HeaderUserInfo"
import { Loader } from "../../components/Loader/Loader"
import { durak } from "../../store/durak.state"
import { user } from "../../store/user.state"

export const GameMain = observer(() => {

  useEffect(() => {
    user.updateUserData()
  }, [])

  return (
    <>
      <Loader status={user.status} />
      <div className="container">
        <HeaderUserInfo />
        <div className="pad-container">
          <button onClick={durak.getUsersList}>fetch users</button>
        </div>
      </div>
    </>
  )
})