import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import UserContext from "./context/UserContext";
import { Routes, Route } from "react-router-dom";
import { theme } from "./styles/custom-mui-theme/CustomComponents";
import { ThemeProvider } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import CustomerService from "./pages/CustomerService";
import Bag from "./pages/Bag";

function App() {
  const location = useLocation();
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <UserContext>
          {location.pathname === "/" ? (
            <Nav isHome={true} />
          ) : (
            <Nav isHome={false} />
          )}
          <Routes>
            <Route path={"/"} element={<HomePage />} />
            <Route path={"/product"} element={<ProductPage />} />
            <Route path={"/bag"} element={<Bag />} />
            <Route path={"/customerservice"} element={<CustomerService />} />
            <Route path={"/signup"} element={<SignUp />} />
            <Route path={"/signin"} element={<SignIn />} />
          </Routes>
          <Footer />
        </UserContext>
      </div>
    </ThemeProvider>
  );
}

export default App;
