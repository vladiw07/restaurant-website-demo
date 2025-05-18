import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductCategories from "./components/ProductCategories";
import PromoBanner from "./components/PromoBanner";
import TopProducts from "./components/TopProducts";

function App() {
  return (
    <div className="bg-white">
      

    <Navbar />
    <Hero />
    <TopProducts />
    <PromoBanner />
    <ProductCategories />


    </div>
  );
}

export default App;
