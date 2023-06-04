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
      style={{ backgroundColor: "purple" }}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-white display-4">{`Razan's Collections`}</h1>
      <p className="text-white-50 lead">Breathtaking Collections for You</p>
    </motion.header>
  );
};

export default Header;
