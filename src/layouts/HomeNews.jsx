import CardNews from "../components/organisms/CardNews";
import { motion } from "framer-motion";
import CONFIG from "../utils/CONFIG";

export default function HomeNews({ children }) {
  const newsElement = children.map((news, index) => (
    <CardNews key={index}>{news}</CardNews>
  ));

  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.6 }}
      variants={CONFIG.ANIMATION}
      className="text-slate-100 grid gap-6 px-8 max-w-5xl mx-auto"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
    >
      {newsElement}
    </motion.div>
  );
}
