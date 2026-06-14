import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

type Variant = "primary" | "outline" | "ghost";

interface BaseProps {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  strength?: number;
}
interface LinkProps extends BaseProps {
  href: string;
  target?: string;
  rel?: string;
  onClick?: never;
  type?: never;
}
interface ButtonProps extends BaseProps {
  onClick?: () => void;
  type?: "button" | "submit";
  href?: never;
}
type Props = LinkProps | ButtonProps;

const styles: Record<Variant, string> = {
  primary:
    "bg-teal text-cream-100 hover:bg-teal-600 shadow-[0_10px_30px_-12px_rgba(14,59,56,0.7)]",
  outline:
    "border border-teal/30 text-teal hover:border-teal/70 hover:bg-teal/5",
  ghost: "text-cream-100/90 hover:text-cream-100",
};

/** Button/link with a subtle magnetic pull and scale on hover. */
export function MagneticButton(props: Props) {
  const { children, className = "", variant = "primary", strength = 0.4 } = props;
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 14, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 180, damping: 14, mass: 0.3 });

  const onMove = (e: MouseEvent) => {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const cls = `group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-medium tracking-tight transition-colors duration-300 will-change-transform ${styles[variant]} ${className}`;

  const motionProps = {
    ref: ref as never,
    style: { x: sx, y: sy },
    onMouseMove: onMove,
    onMouseLeave: reset,
    whileHover: reduced ? undefined : { scale: 1.035 },
    whileTap: reduced ? undefined : { scale: 0.97 },
    transition: { type: "spring" as const, stiffness: 260, damping: 18 },
    className: cls,
  };

  if ("href" in props && props.href) {
    return (
      <motion.a
        {...motionProps}
        href={props.href}
        target={props.target}
        rel={props.rel}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      {...motionProps}
      type={(props as ButtonProps).type ?? "button"}
      onClick={(props as ButtonProps).onClick}
    >
      {children}
    </motion.button>
  );
}
