function Card({ children }) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-10">
      {children}
    </div>
  );
}

export default Card;