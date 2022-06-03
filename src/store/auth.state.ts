import { makeAutoObservable } from "mobx";
import { Api } from "../http/api";
import { LoginUserData, RegisterUserData } from "../types/auth.types";
import { app } from "./app.state";
import { notify } from "./notify.state";
import { NotifyType } from "../types/notify.types";

class AuthState {
  loading: boolean

  constructor() {
    makeAutoObservable(this)
  }

  async register(registerUserData: RegisterUserData) {
    this.loading = true

    try {
      const response = await Api.register(registerUserData)
      const data = response.data

      app.setAuthorization(data.authKey)
      app.connectWs(data.authKey)

      this.loading = false
    }
    catch(error: any) {
      notify.make(error.code, error.response.data.message || error.message, NotifyType.Warning)
      this.loading = false
    }
  }

  async login(loginUserData: LoginUserData) {
    this.loading = true

    try {
      const response = await Api.login(loginUserData)
      const data = response.data

      app.setAuthorization(data.authKey)
      app.connectWs(data.authKey)

      this.loading = false
    }
    catch(error: any) {
      notify.make(error.code, error.response.data.message || error.message, NotifyType.Warning)
      this.loading = false
    }
  }

  exit() {
    app.unsetAuthorization()
  }
}

export const auth = new AuthState()