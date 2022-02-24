import Layout from "../src/layouts/Main";
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}