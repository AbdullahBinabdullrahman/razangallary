import React from "react";
import { motion } from "framer-motion";

const headerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const Header = () => {
  return (
    <motion.header
      className="text-center py-5"
      style={{ backgroundColor: "#FAD5A5" }}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-white display-4">{`مجموعة رزان `}</h1>
      <p className="text-white-100 lead mt-1 text-white ">
        مجموعة تحبس الانفاس
      </p>
    </motion.header>
  );
};

export default Header;
