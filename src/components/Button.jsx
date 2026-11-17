function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
    >
      {text}
    </button>
  );
}

export default Button;