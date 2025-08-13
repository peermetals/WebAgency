import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = false }: CardProps) {
  const baseClasses = "bg-white rounded-lg border";
  const hoverClasses = hover ? "hover:shadow-lg transition-shadow" : "";
  const classes = `${baseClasses} ${hoverClasses} ${className}`.trim();
  
  return (
    <div className={classes}>
      {children}
    </div>
  );
}