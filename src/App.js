import "./index.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Footer from "./components/Footer";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ItemListContainer from "./components/ItemListContainer";
import ItemList from "./components/ItemList";

function App() {
  return (
    
    <BrowserRouter>
    <Header />
    <Banner />
    <Routes>
    <Route path="/" element={<ItemListContainer />}/>
    </Routes>
      
      
      {/* <ItemListContainer /> */}
      <Footer />
      
    </BrowserRouter>
  );
}

export default App;
