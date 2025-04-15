import { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FAQ from "./components/faq"; // Capitalized properly

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // ESC key closes modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setSelectedProduct(null);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Lock scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedProduct ? "hidden" : "auto";
  }, [selectedProduct]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Navbar />

      <main className="flex-grow relative overflow-hidden">
        {/* ✅ Floating ProductDetails Modal */}
        {selectedProduct && (
          <div className="absolute inset-0 z-50 flex justify-center items-start pt-24 px-4">
            <ProductDetails
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)}
            />
          </div>
        )}

        {/* ✅ Background Blur When Modal is Active */}
        <div
          className={`transition duration-300 ease-in-out ${
            selectedProduct ? "blur-sm pointer-events-none select-none" : ""
          }`}
        >
          <ProductList onProductClick={setSelectedProduct} />
          <FAQ />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
