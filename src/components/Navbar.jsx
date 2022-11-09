import { motion } from "framer-motion";
export default function Navbar() {
  const variants = {
    initial: { y: 200, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring" } },
  };

  const links = ["home", "life", "set"];

  return (
    <motion.div
      className="w-fit p-4 flex gap-4 mx-auto"
      initial="initial"
      animate="visible"
      transition={{ staggerChildren: 0.1 }}
    >
      {links.map((link) => (
        <motion.a
          className="flex btn-ghost p-2 rounded-full"
          href={`/${link}`}
          variants={variants}
          key={link}
        >
          {link}
        </motion.a>
      ))}
    </motion.div>
  );
}
