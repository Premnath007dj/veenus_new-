import React from 'react';
import { cn } from '../../utils/cn';

const Button = React.forwardRef(({ 
  className, 
  variant = "default", 
  size = "default", 
  asChild = false, 
  ...props 
}, ref) => {
  const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-green focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    // Primary CTA: green background, white text, hover pulse
    default: "bg-primary-green text-white hover:bg-light-green hover:animate-pulse shadow-soft",
    destructive: "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg hover:shadow-xl border-0",
    // Secondary CTA: transparent, green border, text dark blue
    outline: "border-2 border-primary-green bg-transparent text-dark-blue hover:bg-light-green/40",
    secondary: "bg-transparent border-2 border-primary-green text-dark-blue hover:bg-light-green/40",
    ghost: "hover:bg-primary-50 hover:text-primary-700 text-primary-600",
    link: "text-primary-600 underline-offset-4 hover:underline",
    success: "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl border-0",
    warning: "bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-white shadow-lg hover:shadow-xl border-0",
  };
  
  const sizes = {
    default: "h-11 px-6 py-3",
    sm: "h-9 px-4 py-2 text-xs",
    lg: "h-12 px-8 py-4 text-base",
    xl: "h-14 px-10 py-5 text-lg",
    icon: "h-11 w-11",
  };

  const classes = cn(
    baseClasses,
    variants[variant],
    sizes[size],
    className
  );

  return (
    <button
      className={classes}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = "Button";

export default Button;