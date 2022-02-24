export default function Label({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="text-lg font-semibold text-slate-100">
      {children}
    </label>
  );
}
