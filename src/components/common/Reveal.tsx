import React, { useEffect, useRef, useState } from 'react';

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, inView] as const;
}

export interface RevealProps {
  as?: React.ElementType;
  variant?: 'left' | 'right' | '';
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  onClick?: () => void;
}

export function Reveal({ as: Tag = 'div', variant = '', className = '', style, children, onClick }: RevealProps) {
  const [ref, inView] = useReveal<HTMLDivElement>();
  const variantClass = variant ? `reveal-${variant}` : 'reveal';
  return (
    <Tag
      ref={ref}
      style={style}
      className={`${variantClass} ${inView ? 'in-view' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </Tag>
  );
}
