const ProductDetails = ({ product, onClose }) => {
  if (!product) {
    return <div className="p-10 text-center text-gray-500">Product not found</div>;
  }

  return (
    <div className="bg-white p-6 w-full max-w-2xl rounded-lg shadow-xl relative z-50 animate-fadeIn">
      {/* Close Button (Top Right) */}
      <button
        className="absolute top-4 right-4 text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded transition"
        onClick={onClose}
        aria-label="Close product details"
      >
        ✖
      </button>

      {/* Product Info */}
      <div className="flex flex-col items-center text-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-60 h-60 object-contain mb-6 rounded shadow"
        />
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <p className="text-lg text-blue-600 mb-2 font-semibold">{product.price}</p>
        <p className="text-gray-700">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
