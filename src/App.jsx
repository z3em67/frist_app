import "./App.css";
import Home from "./componants/Home";
import About from "./componants/About";
import Head from "./componants/Head";
import Product from "./componants/Product";
import Sing from "./componants/Sgin";
import { Outlet } from "react-router-dom";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign" element={<Sing />} />
          <Route path="/products" element={<Product />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

function Layout() {
  return (
    <>
      <Head />
      <Outlet />
    </>
  );
}
