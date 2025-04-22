'use client';

import { motion } from 'framer-motion';

type Direction = 'up' | 'down' | 'left' | 'right' | null;

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
}

export const FadeIn = ({
  children,
  delay = 0,
  direction = null,
  className = '',
}: FadeInProps) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
      x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
}

export const ScaleIn = ({ children, delay = 0 }: ScaleInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

interface HoverScaleProps {
  children: React.ReactNode;
  scale?: number;
}

export const HoverScale = ({ children, scale = 1.05 }: HoverScaleProps) => {
  return (
    <motion.div whileHover={{ scale }} transition={{ duration: 0.2 }}>
      {children}
    </motion.div>
  );
};
