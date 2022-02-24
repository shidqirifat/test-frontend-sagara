import React from "react";
import Logo from "../atoms/logo";
import LinkAnchor from "../atoms/LinkAnchor";

export default function Header() {
  return (
    <header className="bg-slate-900 border-b-4 border-black shadow-lg fixed w-full">
      <div className="py-4 px-8 max-w-5xl mx-auto flex justify-between items-center">
        <Logo src="/logo-full.png" />
        <LinkAnchor href="/login">Login</LinkAnchor>
      </div>
    </header>
  );
}
