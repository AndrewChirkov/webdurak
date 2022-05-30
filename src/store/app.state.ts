import { makeAutoObservable, runInAction } from "mobx"
import { io, Socket } from "socket.io-client"
import { WS_URL } from "../constants"
import { Status } from "../types/global.types"

class AppState {
  authKey: string = localStorage.getItem('authKey')
  isAuth: boolean = this.authKey ? true : false
  status: Status
  loading: boolean = true
  client: Socket

  constructor() {
    makeAutoObservable(this)
  }

  connectWs(authKey: string | null) {
    this.startLoading()
    this.client = io(WS_URL, {
      auth: {
        authKey: authKey
      },
      transports: ["websocket"]
    })
  
    this.client.on("connect", () => {
      this.endLoading()
      console.log("connected, id = ", this.client.id)
    })
  
    this.client.on("disconnect", () => {
      console.log("disconnected");
    })
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
}

export const app = new AppState()