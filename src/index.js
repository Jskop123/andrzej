import ReactDOM from "react-dom/client";
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact"
import Offers from "./Pages/Offers/Offers"
import Works from "./Pages/Works/Works"



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="offers" element={<Offers />} />
          <Route path="works" element={<Works />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);



