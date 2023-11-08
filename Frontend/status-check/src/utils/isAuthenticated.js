// isAuthenticated.js
import jwt_decode from "jwt-decode";

function isAuthenticated() {
  const token = localStorage.getItem("authToken");

  if (token) {
    const decoded = jwt_decode(token);
    return decoded;
  }

  return null;
}

export default isAuthenticated;
