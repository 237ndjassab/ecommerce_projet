import type { AuthInfo } from "../types/user";

const USER = btoa("ENTRY-01");

class Utils {
  static setAuthInfo(data: AuthInfo) {
    localStorage.setItem(USER, JSON.stringify(data));
  }

  static getAuthInfo() {
    const userInfo = localStorage.getItem(USER);
    if (userInfo) {
        const data = JSON.parse(userInfo);
        return data;
    } else {
      return null;
    }
  }
}

export default Utils;
