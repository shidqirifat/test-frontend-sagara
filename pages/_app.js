import Layout from "../src/layouts/Main";
import '../styles/globals.css';
import { motion, AnimatePresence } from "framer-motion"

export default function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <motion.div key={router.route} exit={{ opacity: 0, y: 100 }} transition={{ duration: 1 }}>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  )
}