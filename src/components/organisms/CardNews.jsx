import { ImageNewsCard } from "../atoms/ImageNews";
import ContentNews from "../moleculs/ContentNews";
import Link from "next/link";

export default function CardNews({ children }) {
  return (
    <Link
      href={{
        pathname: `/news/${children.title}`,
        query: children,
      }}
    >
      <div className="bg-slate-800 rounded-md relative cursor-pointer overflow-hidden shadow-lg border border-slate-700 hover:bg-slate-700 transition">
        <ImageNewsCard src={children.urlToImage} alt={children.title} />
        <ContentNews>{children}</ContentNews>
      </div>
    </Link>
  );
}
