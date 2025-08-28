import { motion } from "framer-motion";
import { useState } from "react";
import type { ReactNode, FC } from "react";

interface DraggablePillProps {
  children: ReactNode;
  className?: string;
}

const DraggablePill: FC<DraggablePillProps> = ({ children, className }) => {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <motion.div
      className={className}
      drag
      dragConstraints={{ top: 0, bottom: 200, left: -100, right: 100 }}
      dragElastic={0.5}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      animate={{
        y: isDragging ? 0 : 10,
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 10,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default DraggablePill;
