import Link from "next/link";

export default function LinkAnchor({ href, children, handleLogout }) {
  return (
    <div>
      <Link href={href}>
        <a
          className="text-slate-50 font-semibold text-xl"
          onClick={handleLogout}
        >
          {children}
        </a>
      </Link>
    </div>
  );
}
