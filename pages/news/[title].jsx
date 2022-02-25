import Gap from "../../src/components/atoms/Gap";

export default function NewsDetail({ query }) {
  const {
    title,
    author,
    description,
    source,
    url,
    urlToImage,
    publisherAt,
    content,
  } = query;

  return (
    <div className="text-slate-50 max-w-4xl mx-auto">
      <Gap height={120} />
      <h1>{title}</h1>
      <h1>{publisherAt}</h1>
      <img src={urlToImage} alt={title} />
      <h1>{source}</h1>
      <h1>{author}</h1>
      <h1>{description}</h1>
      <h1>{content}</h1>
      <h1>{url}</h1>
    </div>
  );
}

NewsDetail.getInitialProps = async ({ query }) => ({ query });
