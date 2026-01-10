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
        className="w-full px-3 py-2 text-lg font-bold text-center text-white cursor-pointer bg-violet-600 rounded-md transition-all duration-300 hover:bg-violet-800 disabled:bg-violet-400 disabled:cursor-not-allowed"
        type={type}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
};
