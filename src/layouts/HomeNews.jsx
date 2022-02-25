import CardNews from "../components/organisms/CardNews";
import { motion, AnimatePresence } from "framer-motion";

export default function HomeNews({ children }) {
  const newsElement = children.map((news, index) => (
    <CardNews key={index}>{news}</CardNews>
  ));

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: 100 }}
        transition={{ duration: 1 }}
        className="text-slate-100 grid gap-6 px-8 max-w-5xl mx-auto"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
      >
        {newsElement}
      </motion.div>
    </AnimatePresence>
  );
}
