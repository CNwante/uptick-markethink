import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "rounded" | "plain";
  onClick?: () => void;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  onClick,
  className,
}) => {
  const baseStyle =
    "rounded-full border-solid py-3 font-semibold transition duration-200 cursor-pointer";

  const variantStyle = {
    primary:
      "bg-gradient-to-br from-lime-1 to-lime-2 hover:from-lime-2 hover:to-lime-2 px-8 text-white",
    secondary:
      "px-8 text-lime-2 border border-lime-3 hover:bg-lime-3 hover:text-white",
    rounded: "px-3 border border-lime-3 hover:bg-lime-3",
    plain: "text-lime-3 text-xl",
  };

  return (
    <button
      onClick={onClick}
      className={clsx(baseStyle, variantStyle[variant], className)}
    >
      {variant === "plain" ? (
        <>
          <span className="hover:underline">{children}</span>
          <span className="text-4xl">→</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};
