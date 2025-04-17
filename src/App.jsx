import "./App.css";
import HomePage from "./routes/HomePage";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import bgImage from "./assets/common/bg.png";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FestivalPage from "./routes/FestivalPage";
import { useEffect } from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div
        style={{
          position: "absolute",
          zIndex: -999,
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "390px auto",
          backgroundPosition: "top left",
          height: "100%",
          width: "100%",
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
