import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/pages/main/MainPage";
import ErrorPage from "./components/pages/error/ErrorPage";
import CarPage from "./components/pages/car/CarPage";
import NavBar from "./components/pages/main/navBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/car/:id" element={<CarPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
