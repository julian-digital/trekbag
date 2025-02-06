export default function Button({ className, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`btn ${className === "secondary" ? "btn--secondary" : ""}`}
    >
      {children}
    </button>
  );
}
