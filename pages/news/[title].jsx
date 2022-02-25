export default function NewsDetail({ query }) {
  console.log(query);
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
    <div className="text-slate-50">
      <h1>{title}</h1>
      <h1>{author}</h1>
      <h1>{description}</h1>
      <h1>{source}</h1>
      <h1>{url}</h1>
      <h1>{publisherAt}</h1>
      <h1>{urlToImage}</h1>
      <h1>{content}</h1>
    </div>
  );
}

NewsDetail.getInitialProps = async ({ query }) => {
  return { query };
};
