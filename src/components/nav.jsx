import { motion } from "framer-motion";
export default function Nav() {
  const variants = {
    initial: { y: 200, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring" } },
  };

  const links = ["Home", "life", "Set"];

  return (
    <motion.div
      className="w-fit p-4 flex gap-4"
      initial="initial"
      animate="visible"
      transition={{ staggerChildren: 0.1 }}
    >
      {links.map((link) => (
        <motion.a className="flex" href={`/${link}`} variants={variants}>
          {link}
        </motion.a>
      ))}
    </motion.div>
  );
}
