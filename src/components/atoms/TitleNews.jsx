import Link from "next/link";

export default function TitleNews({ children }) {
  return (
    <Link
      href={{
        pathname: `/news/${children.title}`,
        query: children,
      }}
    >
      <a className="news-title font-semibold text-xl">{children.title}</a>
    </Link>
  );
}
