import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

// Import pages
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Store } from "./pages/Store";

// Import components
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
