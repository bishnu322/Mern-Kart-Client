interface IButtonProps {
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

export const Button: React.FC<IButtonProps> = ({
  type = "button",
  onClick,
  children,
  disabled = false,
}) => {
  return (
    <div>
      <button
        className="w-full bg-violet-500 p-3 rounded-md cursor-pointer text-white font-bold text-lg transition-all duration-300 hover:bg-violet-700 text-center disabled:bg-violet-400 disabled:cursor-not-allowed"
        type={type}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
};
