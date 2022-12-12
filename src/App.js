import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Banner from "./components/Banner";
import ItemListContainer from "./components/ItemListContainer";

import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <Banner /> */}
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/detalles:id" element={<ItemListContainer />} />
        <Route path="/categoria" element={<ItemListContainer />} />
      </Routes>

      {/* <ItemListContainer /> */}
    </BrowserRouter>
  );
}

export default App;
