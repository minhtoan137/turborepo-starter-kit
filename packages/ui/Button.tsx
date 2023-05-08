export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const Button = ({
  label = "Button",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};
