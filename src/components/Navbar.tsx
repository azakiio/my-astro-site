import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const variants = {
  initial: { y: 200, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring" } },
};

const keys = ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5"];

export default function Navbar({ breadCrumbs }: Props) {
  useEffect(() => {
    const keyNav = (e) => {
      const index = keys.slice(0, breadCrumbs.length - 1).indexOf(e.code);
      if (index !== -1 && breadCrumbs[index] && e.shiftKey) {
        location.assign(breadCrumbs[index].url);
      }
    };
    document.addEventListener("keypress", keyNav);
    return () => document.removeEventListener("keypress", keyNav);
  }, []);

  return (
    <motion.div
      className="w-fit p-4 flex gap-2 mx-auto"
      initial="initial"
      animate="visible"
      transition={{ staggerChildren: 0.1 }}
    >
      {breadCrumbs?.map(({ path, url }, i) => (
        <motion.a
          className={`flex btn-ghost p-2 rounded-full ${
            i === breadCrumbs?.length - 1 &&
            "underline underline-offset-8 decoration-2"
          }`}
          href={url}
          variants={variants}
          key={url}
        >
          {i ? path : "~"}
        </motion.a>
      ))}
    </motion.div>
  );
}

interface Props {
  breadCrumbs?: { path: string; url: string }[];
}
