import { motion } from "framer-motion";

interface SlideProps {
  children: string;
  delay: number;
}

export const Slide = ({ children, delay }: SlideProps) => {
  return (
    <motion.span
      style={{ display: "inline-block" }}
      initial={{ opacity: 0, y: 3 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: delay, // ✅ 이제 딜레이 계산 안함, 전달받은 값만 사용
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.span>
  );
};
