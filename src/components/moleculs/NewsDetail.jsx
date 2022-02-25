import { ImageNewsDetail } from "../atoms/ImageNews";
import {
  TitleDetail,
  PublisherDetail,
  AuthorDetail,
  DescriptionDetail,
  LinkSourceDetail,
} from "../atoms/Text";

export default function NewsDetail({ children }) {
  const { title, author, description, url, urlToImage, publisherAt, content } =
    children;

  return (
    <div>
      <TitleDetail>{title}</TitleDetail>
      <PublisherDetail>{publisherAt}</PublisherDetail>
      <ImageNewsDetail src={urlToImage} alt={title} />
      <AuthorDetail>{author}</AuthorDetail>
      <DescriptionDetail>
        {description} {content}
      </DescriptionDetail>
      <LinkSourceDetail link={url}>{author}</LinkSourceDetail>
    </div>
  );
}
