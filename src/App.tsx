import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/pages/login/LoginPage";
import MainPage from "./components/pages/main/MainPage";
import ErrorPage from "./components/pages/error/ErrorPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main/:userName" element={<MainPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
