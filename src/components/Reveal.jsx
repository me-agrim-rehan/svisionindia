import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";

export default function Reveal({ children, className = "" }) {

  return (

    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>

  );
}