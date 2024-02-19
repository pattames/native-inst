import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Products from "./components/Products";
import Community from "./components/Community";
import Support from "./components/Support";

function App() {
  return (
    <>
      <h1>Native</h1>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="" element={<Products />} />
        <Route path="" element={<Community />} />
        <Route path="" element={<Support />} />
      </Routes>
    </>
  );
}

export default App;
