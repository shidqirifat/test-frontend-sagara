import { ImageNewsDetail } from "../atoms/ImageNews";
import {
  TitleDetail,
  PublisherDetail,
  AuthorDetail,
  DescriptionDetail,
  LinkSourceDetail,
} from "../atoms/Text";
import { motion, AnimatePresence } from "framer-motion";

export default function NewsDetail({ children }) {
  const { title, author, description, url, urlToImage, publisherAt, content } =
    children;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
      >
        <TitleDetail>{title}</TitleDetail>
        <PublisherDetail>{publisherAt}</PublisherDetail>
        <ImageNewsDetail src={urlToImage} alt={title} />
        <AuthorDetail>{author}</AuthorDetail>
        <DescriptionDetail>
          {description} {content}
        </DescriptionDetail>
        <LinkSourceDetail link={url}>{author}</LinkSourceDetail>
      </motion.div>
    </AnimatePresence>
  );
}
