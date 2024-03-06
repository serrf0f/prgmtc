import { cx } from "hono/css";

export function Title({ className, ...props }: any) {
  return (
    <h1
      className={cx(
        "scroll-m-20 text-4xl font-extrabold tracking-tight mb-6 lg:text-5xl",
        className,
      )}
      {...props}
    />
  );
}
