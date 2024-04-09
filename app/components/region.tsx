export function Region({
  color,
  children,
  title,
  subtitle,
}: {
  color: string;
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}) {
  return (
    <article
      className={`rounded-xl mt-5 m-2 xl:mx-3 p-3 flex flex-col border border-gray-700 dark:border-gray-500 dark:shadow-md shadow-lg dark:shadow-zinc-900 dark:hover:shadow-purple-900 hover:shadow-zinc-200 hover:shadow-lg transition-all bg-orange-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50`}
      style={{ maxWidth: "700px" }}
    >
      <span className="flex flex-row justify-between">
        <h3 className="flex mr-2 title font-semibold">
          <span className="self-end">{title}</span>
        </h3>
        {subtitle && (
          <footer className="flex ml-2 subtitle">
            <span className="self-end my-2">{subtitle}</span>
          </footer>
        )}
      </span>
      {children}
    </article>
  );
}
