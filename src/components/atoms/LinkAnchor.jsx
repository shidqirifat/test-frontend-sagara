import Link from "next/link";

export default function LinkAnchor({ href, children }) {
  return (
    <div>
      <Link href={href}>
        <a className="text-slate-50 font-semibold text-xl">{children}</a>
      </Link>
    </div>
  );
}
