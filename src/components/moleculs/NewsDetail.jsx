import { ImageNewsDetail } from "../atoms/ImageNews";
import {
  TitleDetail,
  PublisherDetail,
  AuthorDetail,
  DescriptionDetail,
  LinkSourceDetail,
} from "../atoms/Text";
import { motion } from "framer-motion";
import CONFIG from "../../utils/CONFIG";

export default function NewsDetail({ children }) {
  const { title, author, description, url, urlToImage, publisherAt, content } =
    children;

  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.6 }}
      variants={CONFIG.ANIMATION}
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
  );
}
