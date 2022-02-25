export default function TextHero({ greetings = false, children }) {
  return (
    <>
      {greetings ? (
        <h1 className="font-bold text-slate-50 text-3xl p-2">{children}</h1>
      ) : (
        <h2 className="font-semibold text-slate-300 text-lg p-1">{children}</h2>
      )}
    </>
  );
}
