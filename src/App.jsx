import { BrowserRouter, Route, Routes } from "react-router-dom";
import NormalComponent from "./Components/NormalComponent";
import ProtectedComponent from "./Components/ProtectedComponent";
import Header from "./Components/Header";
import Home from "./Components/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/normalcomponent" element={<NormalComponent />} />
        <Route path="/protectedcomponent" element={<ProtectedComponent />} />
      </Routes>
    </BrowserRouter>
  );
}
