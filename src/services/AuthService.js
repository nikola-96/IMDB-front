import HTTP from "./BaseService";
import { AUTH } from "./Endpoints";

class AuthService {
  constructor() {
    this.setAxiosDefaultAuthorizationHeader();
  }
  async register(user) {
    const response = await HTTP.post(AUTH.REGISTER, user);
    window.localStorage.setItem("loginToken", response.data.access_token);
    this.setAxiosDefaultAuthorizationHeader();

    return response.data;
  }
  login(email, password) {
    return HTTP.post(AUTH.LOGIN, { email, password }).then((response) => {
      window.localStorage.setItem("loginToken", response.data.access_token);
      this.setAxiosDefaultAuthorizationHeader();
    });
  }

  setAxiosDefaultAuthorizationHeader() {
    const TOKEN = window.localStorage.getItem("loginToken");
    if (!TOKEN) {
      return;
    }

    HTTP.defaults.headers.common["Authorization"] = `Bearer ${TOKEN}`;
  }

  logout() {
    window.localStorage.removeItem("loginToken");
    delete HTTP.defaults.headers.common["Authorization"];
  }

  isAuthenticated() {
    return !!window.localStorage.getItem("loginToken");
  }
}

const authService = new AuthService();
export default authService;
