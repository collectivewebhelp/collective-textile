"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

type ReturnVariant = "archive" | "about";

export function ReturnHomeLink({
  children,
  style,
  variant,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  variant: ReturnVariant;
}) {
  const router = useRouter();
  const [active, setActive] = useState(false);

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    if (active) return;

    sessionStorage.setItem("ct-entry", "return-home");
    setActive(true);

    setTimeout(
      () => {
        router.push("/");
      },
      variant === "archive" ? 980 : 620
    );
  }

  return (
    <>
      <a href="/" onClick={handleClick} style={style}>
        {children}
      </a>

      <AnimatePresence>
        {active && variant === "archive" && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.42,
                ease: EASE,
              }}
              style={{
                position: "fixed",
                inset: 0,
                background: "#f4f1ea",
                zIndex: 9997,
                pointerEvents: "none",
              }}
            />

            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: "0%" }}
              transition={{
                duration: 0.92,
                delay: 0.04,
                ease: EASE,
              }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                width: "48%",
                height: "100vh",
                background: "#E3010F",
                zIndex: 9998,
                pointerEvents: "none",
              }}
            />
          </>
        )}

        {active && variant === "about" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.55,
              ease: EASE,
            }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "52%",
              height: "100vh",
              background: "#f4f1ea",
              zIndex: 9997,
              pointerEvents: "none",
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}