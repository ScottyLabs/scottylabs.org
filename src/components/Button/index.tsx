import clsx from "clsx";
import css from "./index.module.css";
export default function Button({
  label,
  variant,
  className,
}: {
  label: string;
  variant: "primary" | "outlined";
  className?: string;
}) {
  return (
    <button className={clsx(css.button, css[variant], className)}>
      {label}
    </button>
  );
}
