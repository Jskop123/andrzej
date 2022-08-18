import React from "react"
import ReactDOM from "react-dom/client"
import './index.css'
import { HashRouter, Routes, Route } from "react-router-dom"
import Layout from "./Pages/Layout/Layout"
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"
import Offers from "./Pages/Offers/Offers"
import Works from "./Pages/Works/Works"
import Movies from "./Pages/Works/Movies/Movies"
import Photos from "./Pages/Works/Photos/Photos"



export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="offers" element={<Offers />} />
          <Route path="works" element={<Works />} />
          <Route path="works/movies" element={<Movies />} />
          <Route path="works/photos" element={<Photos />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);



