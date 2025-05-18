import AboutUs from "./components/AboutUs";
import FeaturedTreats from "./components/FeaturedTreats";
import Footer from "./components/Footer";
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
    <AboutUs />
    <FeaturedTreats />
    <Footer />


    </div>
  );
}

export default App;
