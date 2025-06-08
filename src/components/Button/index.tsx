import clsx from "clsx";
import css from "./index.module.css";
export default function Button({
  label,
  variant,
}: {
  label: string;
  variant: "primary" | "outlined";
}) {
  return <button className={clsx(css.button, css[variant])}>{label}</button>;
}
