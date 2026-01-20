import { useMemo } from "react";

function Card({ children, className = "" }) {
  const delay = useMemo(() => Math.random() * 0.5, []);
  const offset = useMemo(
    () => (Math.random() > 0.5 ? 20 : -20),
    []
  );

  return (
    <div
      className={`card pop-in ${className}`}
      style={{
        animationDelay: `${delay}s`,
        "--offset": `${offset}px`,
      }}
    >
      {children}
    </div>
  );
}

export default Card;
