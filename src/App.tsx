import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Nav />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
