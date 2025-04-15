import { useState } from "react";

function TextForm() {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted value:", input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Submit Form</h2>
      <input
        type="text"
        placeholder="Enter something..."
        className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
  className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
}

export default TextForm;
