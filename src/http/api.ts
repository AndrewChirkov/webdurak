import axios from "axios";
import { API_URL } from "../constants";
import { app } from "../store/app.state";
import { AuthKey, LoginUserData, RegisterUserData } from "../types/auth.types";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Authorization': `Bearer ${app.authKey}`
  }
})

export class Api {
  static async register(registerUserData: RegisterUserData) {
    return api.post<AuthKey>('/auth/register', registerUserData)
  }

  static async login(loginUserData: LoginUserData) {
    return api.post<AuthKey>('/auth/login', loginUserData)
  }
}