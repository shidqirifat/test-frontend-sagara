import { TextAuthor, TextDescription } from "../atoms/TextNews";
import TitleNews from "../atoms/TitleNews";

export default function ContentNews({ children }) {
  return (
    <div className="px-4 pt-4 pb-8 mt-52">
      <TitleNews>{children}</TitleNews>
      <TextAuthor>{children.author}</TextAuthor>
      <TextDescription>{children.description}</TextDescription>
    </div>
  );
}
