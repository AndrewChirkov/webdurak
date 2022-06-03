export interface NotifyData {
  id: string,
  type: NotifyType,
  title: string,
  text: string,
  duration: number
}

export const enum NotifyType {
  Warning = "warning",
  Info = "info",
  Success = "success"
}