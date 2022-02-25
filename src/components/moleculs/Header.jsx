import React, { useEffect, useState } from "react";
import Logo from "../atoms/logo";
import LinkAnchor from "../atoms/LinkAnchor";
import { useRouter } from "next/router";

export default function Header() {
  const [path, setPath] = useState();
  const router = useRouter();

  useEffect(() => {
    setPath(router.pathname);
  }, [path, router]);

  return (
    <header className="bg-slate-900 border-b-4 border-black shadow-lg w-full fixed z-10">
      <div className="py-4 px-8 max-w-5xl mx-auto flex justify-between items-center">
        <Logo src="/logo-full.png" />
        <LinkAnchor href={`/${path === "/login" ? "" : "login"}`}>
          {path === "/login" ? "Register" : "Login"}
        </LinkAnchor>
      </div>
    </header>
  );
}
