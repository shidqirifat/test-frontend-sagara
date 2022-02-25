import { motion, AnimatePresence } from "framer-motion";
import { TextHero } from "../atoms/Text";

export default function Hero({ user }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
      >
        <TextHero greetings={true}>
          Hi, {user?.firstName} {user?.lastName}!
        </TextHero>
        <TextHero>Berikut berita yang sedang populer di minggu ini.</TextHero>
      </motion.div>
    </AnimatePresence>
  );
}
