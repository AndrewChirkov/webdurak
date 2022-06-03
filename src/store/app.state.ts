import { makeAutoObservable } from "mobx"
import { io, Socket } from "socket.io-client"
import { WS_URL } from "../constants"
import { Commands } from "../types/commands.types"
import { NotifyType } from "../types/notify.types"
import { notify } from "./notify.state"
import { user } from "./user.state"

class AppState {
  authKey: string = localStorage.getItem('authKey')
  isAuth: boolean = this.authKey ? true : false
  loading: boolean = true
  client: Socket

  constructor() {
    makeAutoObservable(this)
  }

  connectWs(authKey: string | null) {
    this.client = io(WS_URL, {
      auth: {
        authKey: authKey
      },
      transports: ["websocket"]
    })
  
    this.client.on("connect", () => {
      this.verifyAuth(authKey)
      this.endLoading()

      console.log("connected, id = ", this.client.id)
    })

    this.client.on("exception", (error: any) => {
      this.connectWs(null)
      notify.make(error.status, error.message, NotifyType.Warning, 3000)
      setTimeout(() => {
        this.goToMainPage()
      }, 3000)
    })
  
    this.client.on("disconnect", () => {
      console.log("disconnected");
    })
  }

  verifyAuth(authKey: string) {
    if (authKey) {
      this.client.emit(Commands.VerifyAuth, (response: string) => {
        if (response !== authKey) {
          this.goToMainPage()
        }

        if (response === authKey) {
          user.loopOfUpdate()
        }
      })
    }
  }

  setAuthorization(authkey: string) {
    this.isAuth = true
    this.authKey = authkey
    localStorage.setItem('authKey', authkey)
  }

  unsetAuthorization() {
    this.isAuth = false
    this.authKey = null
    localStorage.removeItem('authKey')
  }

  startLoading() {
    this.loading = true
  }

  endLoading() {
    this.loading = false
  }

  toggleLoading() {
    this.loading = !this.loading
  }

  goToMainPage() {
    window.location.href = "/"
  }
}

export const app = new AppState()