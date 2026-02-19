import { motion } from "motion/react";

const DURATION = 0.25;
const STAGGER = 0.025;

interface DominosProps {
  children: string;
}

export const DominosAnimated = ({ children }: DominosProps) => {
  return (
    <motion.p
      initial="initial"
      animate="hovered"
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black sm:text-7xl md:text-8xl lg:text-9xl"
      style={{
        lineHeight: 0.75,
        wordSpacing: "0.05em",
      }}
    >
      <div className="text-balance text-4xl md:text-6xl font-[Montserrat] font-bold">
        {children.split("").map((l: string, i: number) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 1.5,
            }}
            className="inline-block"
            key={i}
          >
            {l === " " ? "\u00A0" : l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0 text-balance text-4xl md:text-6xl font-[Montserrat] font-bold">
        {children.split("").map((l: string, i: number) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 1.5,
            }}
            className="inline-block"
            key={i}
          >
            {l === " " ? "\u00A0" : l}
          </motion.span>
        ))}
      </div>
    </motion.p>
  );
};
