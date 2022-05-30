import { HeaderType } from "./Header.types"
import "./Header.css"
import { HeaderUserInfo } from "./HeaderTypes/HeaderUserInfo/HeaderUserInfo"
import { HeaderGameInfo } from "./HeaderTypes/HeaderGameInfo/HeaderGameInfo"
import { HeaderRegisterInfo } from "./HeaderTypes/HeaderRegisterInfo/HeaderRegisterInfo"
import { HeaderLoginInfo } from "./HeaderTypes/HeaderLoginInfo/HeaderLoginInfo"
import { ReactNode } from "react"

interface HeaderProps {
  type?: HeaderType,
  children?: ReactNode
}

export const Header = (props: HeaderProps) => {
  switch (props.type) {
    case HeaderType.UserInfo: 
      return <HeaderUserInfo />
    case HeaderType.GameInfo: 
      return <HeaderGameInfo />
    case HeaderType.RegisterInfo: 
      return <HeaderRegisterInfo />
    case HeaderType.LoginInfo: 
      return <HeaderLoginInfo />
    default: 
      return (
        <div className="header">
          {props.children}
        </div>
      )
  }
}