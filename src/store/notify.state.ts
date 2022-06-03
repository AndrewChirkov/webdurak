import { makeAutoObservable, runInAction } from "mobx";
import { generateId } from "../constants";
import { NotifyData, NotifyType } from "../types/notify.types";

class NotifyState {
  notifies: NotifyData[] = []

  constructor() {
    makeAutoObservable(this)
  }

  make(title: string, text: string,  type: NotifyType = NotifyType.Info, duration: number = 5000) {
    const notify: NotifyData = { type, text, title, duration, id: generateId(10) }

    this.notifies.push(notify)
  }

  remove(notifyId: string) {
    setTimeout(() => {
      runInAction(() => {
        this.notifies = this.notifies.filter((notify: NotifyData) => notify.id !== notifyId)
      })
    }, 500)
  }

  removeAll() {
    this.notifies = []
  }
}

export const notify = new NotifyState()