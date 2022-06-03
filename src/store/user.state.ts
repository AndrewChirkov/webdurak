import { makeAutoObservable, runInAction } from "mobx";
import { User } from "../types/user.types";
import { Commands } from "../types/commands.types";
import { app } from "./app.state";
import { InitialValues } from "../constants";

class UserState {
  userId: string = null
  name: string = null
  date: Date = null
  balance: number = null
  loading: boolean

  constructor() {
    makeAutoObservable(this)
  }

  loopOfUpdate() {
    setInterval(() => {
      app.client.emit(Commands.GetUserData, (response: User) => {
        runInAction(() => {
          this.updateUserData(response)
        })
      })
    }, InitialValues.IntervalLoop)
  }

  getUserData() {
    this.loading = true

    app.client.emit(Commands.GetUserData, (response: User) => {
      runInAction(() => {
        this.updateUserData(response)
        this.loading = false
      })
    })
  }

  updateUserData(user: User) {
    this.balance = user.balance
    this.date = user.date
    this.name = user.name
    this.userId = user.userId
  }
}

export const user = new UserState()