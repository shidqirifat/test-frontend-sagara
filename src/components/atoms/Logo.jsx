export default function Logo({ srcSmall, srcWidth }) {
  return (
    <div className="w-60 h-10 relative">
      <picture>
        <source media="(min-width: 520px)" srcSet={srcWidth} />
        <img src={srcSmall} alt="Logo Company" className="h-full w-auto" />
      </picture>
    </div>
  );
}
