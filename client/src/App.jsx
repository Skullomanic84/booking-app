import { Route, Routes } from "react-router-dom";
import { Home, Login, Register } from "./pages";
import Layout from "./layout/Layout";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App
