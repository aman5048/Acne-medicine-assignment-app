import "./App.css";
import { AllRoutes } from "./routes/allRoutes";
import { Header, Footer } from "./components/common";

function App() {
  return (
    <div>
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
