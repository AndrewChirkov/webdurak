import { action, makeObservable } from "mobx";
import { Api } from "../http/api";
import { LoginUserData, RegisterUserData } from "../types/auth.types";
import { app } from "./app.state";
import { Status } from "../types/global.types";

class AuthState {
  status: Status = null

  constructor() {
    makeObservable(this, {
      register: action.bound
    })
  }

  async register(registerUserData: RegisterUserData) {
    this.status = Status.Pending

    try {
      const response = await Api.register(registerUserData)
      const data = response.data

      app.setAuthorization(data.authKey)
      app.connectWs(data.authKey)

      this.status = Status.Done
    }
    catch(error) {
      console.error(error)
      this.status = Status.Error
    }
  }

  async login(loginUserData: LoginUserData) {
    this.status = Status.Pending

    try {
      const response = await Api.login(loginUserData)
      const data = response.data

      app.setAuthorization(data.authKey)
      app.connectWs(data.authKey)

      this.status = Status.Done
    }
    catch(error) {
      console.error(error)
      this.status = Status.Error
    }
  }

  async exit() {
    app.unsetAuthorization()
    app.connectWs(null)
  }
}

export const auth = new AuthState()