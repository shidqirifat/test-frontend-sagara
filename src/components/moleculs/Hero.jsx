import { motion, AnimatePresence } from "framer-motion";
import CONFIG from "../../utils/CONFIG";
import { TextHero } from "../atoms/Text";

export default function Hero({ user }) {
  return (
    <motion.div
      className="text-center mb-14"
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.6 }}
      variants={CONFIG.ANIMATION}
    >
      <TextHero greetings={true}>
        Hi, {user?.firstName} {user?.lastName}!
      </TextHero>
      <TextHero>Berikut berita yang sedang populer di minggu ini.</TextHero>
    </motion.div>
  );
}
