export default function ImageNews({ src, alt }) {
  return (
    <div className="h-52 w-full overflow-hidden absolute">
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
}
