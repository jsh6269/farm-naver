import "./App.css";
import HomePage from "./routes/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import bgImage from "./assets/common/bg.png";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FestivalPage from "./routes/FestivalPage";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          position: "absolute",
          zIndex: -999,
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "390px auto",
          backgroundPosition: "top left",
          height: "100vh",
          width: "100vw",
        }}
      />
      <div className="template-container flex flex-col items-center">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/festival" element={<FestivalPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
