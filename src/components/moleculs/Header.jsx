import React, { useEffect, useState } from "react";
import Logo from "../atoms/Logo";
import LinkAnchor from "../atoms/LinkAnchor";
import { useRouter } from "next/router";
import { authLogout } from "../../utils/auth-helper";

export default function Header() {
  const [path, setPath] = useState();
  const [navigation, setNavigation] = useState();
  const router = useRouter();

  useEffect(() => {
    setPath(router.pathname);
    if (router.pathname === "/register") setNavigation("Login");
    else if (router.pathname === "/login") setNavigation("Register");
    else setNavigation("Logout");
  }, [path, router]);

  function handleLogout(e) {
    if (e.target.innerText === "Logout") authLogout();
  }

  return (
    <header className="bg-slate-900 border-b-4 border-black shadow-lg w-full fixed z-10">
      <div className="py-4 px-4 sm:px-8 max-w-5xl mx-auto flex justify-between items-center">
        <Logo srcSmall="/logo-short.png" srcWidth="/logo-full.png" />
        <LinkAnchor
          href={`/${path === "/login" ? "register" : "login"}`}
          handleLogout={handleLogout}
        >
          {navigation}
        </LinkAnchor>
      </div>
    </header>
  );
}
