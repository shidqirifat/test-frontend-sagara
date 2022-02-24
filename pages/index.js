import Head from "next/head";
import Header from "../components/moleculs/Header";
import Gap from "../components/atoms/Gap";
import CardSignUp from "../components/organisms/CardSignUp";

export default function Home() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("object");
  }
  return (
    <>
      <Head>
        <title>Test Frontend</title>
        <meta name="description" content="Test Frontend" />
        <link rel="icon" href="/logo-short.png" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
        <Header />
        <Gap height={160} />

        <form onSubmit={handleSubmit}>
          <CardSignUp />
        </form>
        <Gap height={160} />
      </main>
    </>
  );
}
