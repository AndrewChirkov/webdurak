import { action, makeObservable, observable, runInAction } from "mobx"
import { Commands } from "../types/commands.types"
import { User } from "../types/user.types"
import { app } from "./app.state"

class DurakState {
  users: User[] = []

  constructor() {
    makeObservable(this, {
      users: observable,
      getUsersList: action.bound
    })
  }

  getUsersList() {
    app.client.emit(Commands.GetUsers, (response: any) => {
      runInAction(() => {
        this.users = response
        console.log(response)
      })
    })
  }
}

export const durak = new DurakState()