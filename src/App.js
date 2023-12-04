import { Routes, Route } from "react-router-dom";
import "./App.css";
import RegistrationComponent from "./registrationComponent/RegistrationComponent";
import Category from "./CategoryComponent/Category";
import Home from "./HomeComponent/Home";
import MovieCategory from "./MovieComponent/MovieCategory";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/registration" element={<RegistrationComponent />} />
        <Route path="/category" element={<Category />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Movie" element={<MovieCategory />} />
      </Routes>
    </div>
  );
}

export default App;
