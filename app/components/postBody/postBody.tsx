import clsx from "clsx";
import styles from "./PostBody.module.scss";
import { krypton, ibm_plex_mono } from "app/fonts";
type Props = {
  children: React.ReactNode;
};

export default function PostBody({ children }: Props) {
  return (
    <div
      className={clsx(
        `prose lg:prose-lg max-w-none lg:max-w-[90vw] transition-colors dark:prose-invert prose-neutral leading-loose ${ibm_plex_mono.variable} ${krypton.variable} font-serif`,
        styles.postBody
      )}
    >
      {children}
    </div>
  );
}
