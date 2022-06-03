import axios from "axios";
import { API_URL } from "../constants";
import { AuthKey, LoginUserData, RegisterUserData } from "../types/auth.types";

const api = axios.create({
  baseURL: API_URL
})

export class Api {
  static async register(registerUserData: RegisterUserData) {
    return api.post<AuthKey>('/auth/register', registerUserData)
  }

  static async login(loginUserData: LoginUserData) {
    return api.post<AuthKey>('/auth/login', loginUserData)
  }
}