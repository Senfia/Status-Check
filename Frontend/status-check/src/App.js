import { Routes, Route } from "react-router-dom";
// import Container from "react-bootstrap/esm/Container";
// import Row from "react-bootstrap/esm/Row";
// import Col from "react-bootstrap/esm/Col";
import NavBar from "./components/NavBar";
import DashboardPage from "./components/dashboardPage";
import RegistrationPage from "./components/register";
import LoginPage from "./components/login";
import SettingsPage from "./components/settingsPage";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<DashboardPage />}></Route>
        <Route path="register" element={<RegistrationPage />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="dashboard" element={<DashboardPage />}></Route>
        <Route path="settings" element={<SettingsPage />}></Route>
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
