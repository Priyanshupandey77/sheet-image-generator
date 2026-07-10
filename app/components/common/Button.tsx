"use client";
type ButtonProps = {
  children: any,
  onClick: any,
  disabled: any,
  type:any
};

export default function Button({
  children,
  onClick,
  disabled = false,
  type = "button",
}:ButtonProps) {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded"
      type={type}
      onClick={onClick}
      disabled={disabled}
      
    >
      {children}
    </button>
    
  );
}