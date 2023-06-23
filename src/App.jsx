import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import GamePage from "./pages/GamePage";

function App() {
   return (
      <BrowserRouter>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<GamePage />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
