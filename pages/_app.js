import Layout from "../src/layouts/Main";
import "../styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";

export default function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div key={router.route}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </motion.div>
    </AnimatePresence>
  );
}
