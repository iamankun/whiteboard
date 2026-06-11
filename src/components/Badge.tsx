import { ComponentProps } from "react";
import styles from "./Badge.module.css";

export function Badge({
  className,
  ...props
}: Omit<ComponentProps<"a">, "href">) {
  return (
    <a
      className={styles.badge}
      href="https://ankun.dev"
      rel="noreferrer"
      target="_blank"
      {...props}
    >
      <picture>
        <source
          srcSet="/Logo An Kun Studio Black Text.png"
          media="(prefers-color-scheme: dark)"
        />
        <img
          src="/Logo An Kun Studio Black Text.png"
          alt="An Kun Studio"
          className={styles.image}
        />
      </picture>
    </a>
  );
}
