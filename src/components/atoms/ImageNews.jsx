function ImageNewsCard({ src, alt }) {
  return (
    <div className="h-52 w-full overflow-hidden absolute">
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
}

function ImageNewsDetail({ src, alt }) {
  return <img src={src} alt={alt} className="w-full h-96 object-cover" />;
}

export { ImageNewsCard, ImageNewsDetail };
