import { action, makeObservable, observable, runInAction } from "mobx";
import { User } from "../types/user.types";
import { Status } from "../types/global.types";
import { Commands } from "../types/commands.types";
import { app } from "./app.state";

class UserState {
  userId: string = null
  name: string = null
  date: Date = null
  balance: number = null
  status: Status

  constructor() {
    makeObservable(this, {
      userId: observable,
      name: observable,
      date: observable,
      balance: observable,
      updateUserData: action.bound
    })
  }

  updateUserData() {
    this.status = Status.Pending

    try {
      app.client.emit(Commands.GetUserData, (response: User) => {
        runInAction(() => {
          this.balance = response.balance
          this.date = response.date
          this.name = response.name
          this.userId = response.userId

          this.status = Status.Done
        })
      })

    }
    catch(error) {
      console.log(error)
      this.status = Status.Error
    }
  }
}

export const user = new UserState()