import ImageNews from "../atoms/ImageNews";
import ContentNews from "../moleculs/ContentNews";

export default function CardNews({ children }) {
  return (
    <div className="bg-slate-800 rounded-md relative overflow-hidden shadow-lg border border-slate-700">
      <ImageNews src={children.urlToImage} alt={children.title} />
      <ContentNews>{children}</ContentNews>
    </div>
  );
}
