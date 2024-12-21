import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./components/organisms/About";
import Contact from "./pages/Contact";
import Investment from "./pages/Investment";

import "./App.css";
import Layout from "./components/layouts/Layout";
import IRA from "./pages/IRA";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="investment" element={<Investment />} />
          <Route path="ira" element={<IRA />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
