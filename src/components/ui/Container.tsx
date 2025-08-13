import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export default function Container({ children, size = "lg", className = "" }: ContainerProps) {
  const sizeClasses = {
    sm: "max-w-3xl",
    md: "max-w-5xl", 
    lg: "max-w-7xl",
    xl: "max-w-full"
  };
  
  const classes = `mx-auto px-4 sm:px-6 lg:px-8 ${sizeClasses[size]} ${className}`.trim();
  
  return (
    <div className={classes}>
      {children}
    </div>
  );
}