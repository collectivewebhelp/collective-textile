"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import NavItem from "@/components/nav-item";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

function NewsletterButton() {
  return (
    <button
      type="submit"
      style={{
        background: "none",
        border: "none",
        fontSize: 11,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color: "#ffffff",
        fontWeight: 700,
        cursor: "pointer",
        fontFamily: "'Courier New', Courier, monospace",
      }}
    >
      SEND
    </button>
  );
}

export default function Page() {
  const router = useRouter();

  const [entryMode] = useState<string | null>(() => {
    if (typeof window === "undefined") return null;
    return sessionStorage.getItem("ct-entry");
  });

  const [leavingTo, setLeavingTo] = useState<"archive" | "about" | null>(null);

  const returningHome = entryMode === "return-home";

  useEffect(() => {
    if (entryMode) {
      sessionStorage.removeItem("ct-entry");
    }
  }, [entryMode]);

  function goOut(
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    destination: "archive" | "about"
  ) {
    event.preventDefault();

    if (leavingTo) return;

    sessionStorage.setItem(
      "ct-entry",
      destination === "about" ? "home-to-about" : "home-to-archive"
    );

    setLeavingTo(destination);

    setTimeout(
      () => {
        router.push(href);
      },
      destination === "archive" ? 920 : 560
    );
  }

  const leavingArchive = leavingTo === "archive";
  const leavingAbout = leavingTo === "about";
  const leaving = leavingArchive || leavingAbout;

  return (
    <>
      <div className="desktop-layout">
        <div
          style={{
            position: "fixed",
            inset: 0,
            overflow: "hidden",
            fontFamily: "'Aileron', 'Helvetica Neue', sans-serif",
            background: "#f4f1ea",
          }}
        >
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "52%",
              height: "100%",
              background: "#f4f1ea",
              zIndex: 0,
              pointerEvents: "none",
            }}
          />

          <motion.div
            initial={{ y: "0%" }}
            animate={{
              y: leavingArchive ? "-100%" : "0%",
            }}
            transition={{
              duration: 0.92,
              ease: EASE,
            }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "48%",
              height: "100%",
              background: "#E3010F",
              zIndex: 0,
              pointerEvents: "none",
            }}
          />

          <motion.img
            src="/sheep.JPG"
            alt="Archive photograph"
            initial={{
              opacity: returningHome ? 0 : 0,
              x: returningHome ? "-2%" : "-8%",
            }}
            animate={{
              opacity: leaving ? 0 : 1,
              x: leaving ? "-2.5%" : "0%",
            }}
            transition={{
              opacity: {
                duration: leaving ? 0.78 : returningHome ? 0.82 : 1.2,
                delay: leaving ? 0.04 : returningHome ? 0.12 : 0.75,
                ease: EASE,
              },
              x: {
                duration: leaving ? 0.9 : returningHome ? 0.95 : 1.4,
                delay: leaving ? 0 : returningHome ? 0.04 : 0.55,
                ease: EASE,
              },
            }}
            style={{
              position: "fixed",
              left: 0,
              bottom: 0,
              width: "66.5%",
              height: "auto",
              display: "block",
              zIndex: 10,
              pointerEvents: "auto",
            }}
          />

          <motion.img
            src="/star.png"
            alt="Collective Textile star mark"
            className="star-desktop"
            initial={{
              opacity: returningHome ? 0 : 0,
              y: returningHome ? -12 : -24,
            }}
            animate={{
              opacity: leaving ? 0 : 1,
              y: leaving ? -18 : 0,
            }}
            transition={{
              opacity: {
                duration: leaving ? 0.76 : returningHome ? 0.78 : 1.1,
                delay: leaving ? 0.04 : returningHome ? 0.18 : 1.05,
                ease: EASE,
              },
              y: {
                duration: leaving ? 0.9 : returningHome ? 0.9 : 1.1,
                delay: leaving ? 0 : returningHome ? 0.08 : 0.85,
                ease: EASE,
              },
            }}
            style={{
              position: "fixed",
              top: -10,
              left: "calc(52% - 110px)",
              width: 220,
              height: "auto",
              zIndex: 20,
              background: "transparent",
              pointerEvents: "auto",
            }}
          />

          <motion.nav
            initial={{ opacity: returningHome ? 0 : 1 }}
            animate={{ opacity: leaving ? 0 : 1 }}
            transition={{
              duration: leaving ? 0.38 : returningHome ? 0.55 : 0,
              delay: leaving ? 0 : returningHome ? 0.18 : 0,
              ease: EASE,
            }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 60,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "baseline",
              gap: "2.5rem",
              padding: "1.4rem 2.5rem",
              pointerEvents: leaving ? "none" : "auto",
            }}
          >
            <a
              href="/archive"
              onClick={(event) => goOut(event, "/archive", "archive")}
              style={{ textDecoration: "none" }}
            >
              <NavItem color="light" underlineColor="#f4f1ea">
                (archive)
              </NavItem>
            </a>

            <NavItem color="light" underlineColor="#f4f1ea">
              (materials)
            </NavItem>

            <a
              href="/about"
              onClick={(event) => goOut(event, "/about", "about")}
              style={{ textDecoration: "none" }}
            >
              <NavItem color="light" underlineColor="#f4f1ea">
                (about)
              </NavItem>
            </a>
          </motion.nav>

          <motion.div
            initial={{ opacity: returningHome ? 0 : 0 }}
            animate={{ opacity: leaving ? 0 : 1 }}
            transition={{
              duration: leaving ? 0.38 : returningHome ? 0.6 : 1.1,
              delay: leaving ? 0 : returningHome ? 0.24 : 0.85,
              ease: EASE,
            }}
            style={{
              position: "fixed",
              bottom: "4%",
              right: "2.5rem",
              zIndex: 70,
              display: "flex",
              alignItems: "baseline",
              gap: "1rem",
              pointerEvents: leaving ? "none" : "auto",
            }}
          >
            <span
              style={{
                fontFamily: "'Aileron', 'Helvetica Neue', sans-serif",
                fontSize: 10,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(244,241,234,0.85)",
                fontWeight: 700,
              }}
            >
              Newsletter
            </span>

            <input
              type="email"
              placeholder="(Email)"
              style={{
                fontFamily: "'Aileron', 'Helvetica Neue', sans-serif",
                background: "transparent",
                border: "none",
                borderBottom: "1px solid rgba(244,241,234,0.85)",
                padding: "0.15rem 0.3rem",
                width: 200,
                fontSize: 10,
                letterSpacing: "0.1em",
                color: "rgba(244,241,234,0.85)",
                outline: "none",
              }}
            />

            <NewsletterButton />
          </motion.div>
        </div>
      </div>

      <div className="mobile-layout">
        <div
          style={{
            position: "fixed",
            inset: 0,
            overflow: "hidden",
            fontFamily: "'Aileron', 'Helvetica Neue', sans-serif",
            background: "#0f0f0d",
          }}
        >
          <img
            src="/preview.webp"
            alt="Hero"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 0,
            }}
          />

          <div
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.35)",
              zIndex: 1,
            }}
          />

          <nav
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 30,
              display: "flex",
              justifyContent: "center",
              gap: "1.8rem",
              padding: "1.2rem 1rem",
            }}
          >
            <a
              href="/archive"
              onClick={(event) => goOut(event, "/archive", "archive")}
              style={{ textDecoration: "none" }}
            >
              <NavItem color="light" underlineColor="#f4f1ea">
                (archive)
              </NavItem>
            </a>

            <NavItem color="light" underlineColor="#f4f1ea">
              (materials)
            </NavItem>

            <a
              href="/about"
              onClick={(event) => goOut(event, "/about", "about")}
              style={{ textDecoration: "none" }}
            >
              <NavItem color="light" underlineColor="#f4f1ea">
                (about)
              </NavItem>
            </a>
          </nav>
        </div>
      </div>

      <style>{`
        input::placeholder {
          color: rgba(255,255,255,0.6);
          font-weight: 500;
        }

        input:focus {
          border-bottom-color: currentColor !important;
        }

        .desktop-layout {
          display: none;
        }

        @media (min-width: 768px) {
          .desktop-layout {
            display: block;
          }
        }

        .mobile-layout {
          display: none;
        }

        @media (max-width: 767px) {
          .mobile-layout {
            display: block;
          }
        }

        @media (min-width: 768px) {
          .mobile-layout {
            display: none !important;
          }

          .star-desktop {
            display: block !important;
          }
        }

        @media (max-width: 767px) {
          .star-desktop {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}