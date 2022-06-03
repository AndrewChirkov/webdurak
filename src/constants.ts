export const API_URL = "http://localhost:5000/api"
export const WS_URL = "ws://localhost:5555"

export const enum InitialValues {
  IntervalLoop = 5000
}

export const generateId = (length: number) => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};