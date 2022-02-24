import Head from "next/head";
import Header from "../components/moleculs/Header";
import { TextFooter } from "../components/atoms/Text";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Test Frontend</title>
        <meta name="description" content="Test Frontend" />
        <link rel="icon" href="/logo-short.png" />
      </Head>

      <div className="bg-gradient-to-b from-slate-900 to-slate-800">
        <Header />
        {children}
        <div className="p-3 text-center bg-slate-900 text-slate-100">
          <TextFooter>© Create by Shidqi</TextFooter>
          <TextFooter bold={false}>
            Frontend Intern at Sagara Technology
          </TextFooter>
        </div>
      </div>
    </>
  );
}
