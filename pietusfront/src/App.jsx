import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import { Home } from "./pages/Home";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { AdminLayout } from "./layouts/AdminLayout";
import { CategoryPanel } from "./components/CategoryPanel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/admindashboard" element={<AdminLayout/>}/>
        <Route  index element={<p>Welcome to admin panel</p>}/>
        <Route  path="users" element={<p>Welcome to users information</p>}/>
        <Route  path="dishes" element={<p>Welcome to dishes information</p>}/>
        <Route  path="categories" element={<CategoryPanel />}/>

        {/* <Route path="/alldishes" element={<AllDishes/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;