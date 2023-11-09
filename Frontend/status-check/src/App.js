import { Routes, Route } from "react-router-dom";
import DashboardPage from "./components/dashboardPage";
import SettingsPage from "./components/settingsPage";
import Footer from "./components/footer";
import AddMonitorPage from "./components/addMonitor";
import Missing from "./components/Missing";
import LoginPage from "./components/login"; // Import the login page
import LogoutPage from "./components/LogOut";
import RegistrationPage from "./components/register"; // Import the registration page
import ProtectedRoute from "./utils/ProtectedRoute";
//import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="addMonitor" element={<AddMonitorPage />} />
          </Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="logout" element={<LogoutPage />} />
          <Route path="register" element={<RegistrationPage />} />
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="*" element={<Missing />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
