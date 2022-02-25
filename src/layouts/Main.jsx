import Head from "next/head";
import Header from "../components/moleculs/Header";
import Footer from "../components/moleculs/Footer";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Layout({ children }) {
  const [heightScreen, setHeightScreen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/login") setHeightScreen(true);
    else setHeightScreen(false);
  });

  return (
    <>
      <Head>
        <title>Test Frontend</title>
        <meta name="description" content="Test Frontend" />
        <link rel="icon" href="/logo-short.png" />
      </Head>

      <div
        className={`bg-gradient-to-b from-slate-900 to-slate-800 ${
          heightScreen ? "h-screen" : ""
        }`}
      >
        <Header />
        {children}
        <Footer heightScreen={heightScreen} />
      </div>
    </>
  );
}
