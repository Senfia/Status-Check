import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import DashboardPage from "./components/dashboardPage";
import SettingsPage from "./components/settingsPage";
import Footer from "./components/footer";
import AddMonitorPage from "./components/addMonitor";
import LoginPage from "./components/login"; // Import the login page
import RegistrationPage from "./components/register"; // Import the registration page
//import isAuthenticated from "./utils/isAuthenticated";
import ProtectedRoute from "./utils/ProtectedRoute";

// Define a PrivateRoute component to protect routes
// const PrivateRoute = ({ path, element }) => {
//   return isAuthenticated() ? (
//     <Route path={path} element={element} />
//   ) : (
//     <Navigate to="/login" replace />
//   );
// };

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <ProtectedRoute path="dashboard" element={<DashboardPage />} />
          <ProtectedRoute path="settings" element={<SettingsPage />} />
          <ProtectedRoute path="addMonitor" element={<AddMonitorPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegistrationPage />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
