import { motion } from "framer-motion";
import { ReactNode } from "react";
import "./Container.css";

interface ContainerProps {
  children?: ReactNode;
  className: string;
}

export const Container = (props: ContainerProps) => {
  return (
    <motion.div
      className={props.className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {props.children}
    </motion.div>
  );
};
