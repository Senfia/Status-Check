// isAuthenticated.js
import { jwtDecode } from "jwt-decode";

function isAuthenticated() {
  const token = localStorage.getItem("token");

  if (token) {
    const decoded = jwtDecode(token);
    return decoded;
  }

  return null;
}

export default isAuthenticated;
