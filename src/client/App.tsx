import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./routes/Login";
import EscolherPet from "./routes/EscolherPet";
import CuidarPet from "./routes/CuidarPet";
import EscolherNome from "./routes/EscolherNome";

export function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/escolher-pet" element={<EscolherPet />} />
          <Route path="/cuidar-pet" element={<CuidarPet />} />
          <Route path="/escolher-nome" element={<EscolherNome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}