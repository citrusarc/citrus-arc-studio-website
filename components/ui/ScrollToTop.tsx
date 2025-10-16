"use client";

import Link from "next/link";
import { useCallback } from "react";

type ScrollToTopProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function ScrollToTop({
  href,
  children,
  className = "",
}: ScrollToTopProps) {
  const handleScrollToTop = useCallback(() => {
    const scrollToTop = (duration: number) => {
      const start = window.scrollY;
      const startTime = performance.now();

      const easeInOutQuad = (t: number) => {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      };

      const animateScroll = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeInOutQuad(progress);

        window.scrollTo(0, start * (1 - easedProgress));

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    };

    scrollToTop(500);
  }, []);

  return (
    <Link href={href} onClick={handleScrollToTop} className={className}>
      {children}
    </Link>
  );
}
