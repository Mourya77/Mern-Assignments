const Button = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="flex justify-center items-center px-5 py-2">
        <button 
            onClick={handleClick}
             className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition bebas">
                Click Me
        </button>
    </div>
  );
};

export default Button;