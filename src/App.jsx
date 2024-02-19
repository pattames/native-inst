import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Products from "./components/Products";
import Community from "./components/Community";
import Support from "./components/Support";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="catalog" element={<Products />} />
        <Route path="community" element={<Community />} />
        <Route path="support" element={<Support />} />

      </Routes>
    </>
  );
}

export default App;
