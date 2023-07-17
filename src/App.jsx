import Movies from "./components/Movies/Movies";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="main">
      <Navbar />
      <Movies />
      <Footer />
    </div>
  );
};

export default App;
