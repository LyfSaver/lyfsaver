import mascotImg from "@/assets/mascot.png";
import { cn } from "@/lib/utils";

interface MascotProps {
  size?: number;
  className?: string;
  alt?: string;
  animate?: "float" | "wave" | "none";
  eager?: boolean;
}

export function Mascot({
  size = 220,
  className,
  alt = "LYF SAVER mascot — a friendly robot engineer helping students with final year projects",
  animate = "float",
  eager = false,
}: MascotProps) {
  return (
    <img
      src={mascotImg}
      width={size}
      height={size}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      className={cn(
        "select-none drop-shadow-[0_20px_40px_rgba(11,31,58,0.35)]",
        animate === "float" && "animate-float",
        animate === "wave" && "animate-wave",
        className,
      )}
      style={{ width: size, height: size }}
    />
  );
}
