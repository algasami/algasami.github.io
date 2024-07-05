import clsx from "clsx";
import styles from "./PostBody.module.scss";
import { ubuntu_mono, roboto_serif } from "app/fonts";
type Props = {
  children: React.ReactNode;
};

export default function PostBody({ children }: Props) {
  return (
    <div
      className={clsx(
        `lg:prose-lg prose dark:prose-invert max-w-none lg:max-w-[90vw] transition-colors ${roboto_serif.variable} ${ubuntu_mono.variable} font-serif`,
        styles.postBody
      )}
    >
      {children}
    </div>
  );
}
