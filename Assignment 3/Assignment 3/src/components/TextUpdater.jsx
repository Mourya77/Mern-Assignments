import { useState } from "react";

function TextUpdater() {
  const [text, setText] = useState("");

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Live Text Updater</h2>
      <input
        type="text"
        placeholder="Type something..."
        className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="mt-3 text-gray-700">Current text: <strong>{text}</strong></p>
    </div>
  );
}

export default TextUpdater;
