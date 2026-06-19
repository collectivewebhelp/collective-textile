"use client";

import Link from "next/link";
import { useEffect, useState, type MouseEvent } from "react";
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

function MobileNewsletter({ leaving }: { leaving: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{
        opacity: leaving ? 0 : 1,
        y: leaving ? 4 : 0,
      }}
      transition={{
        duration: leaving ? 0.42 : 0.72,
        delay: leaving ? 0 : 0.38,
        ease: EASE,
      }}
      style={{
        position: "fixed",
        left: "1.1rem",
        right: "1.1rem",
        bottom: "1.15rem",
        zIndex: 30,
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        gap: "0.85rem",
      }}
    >
      <span
        style={{
          fontFamily: "'Courier New', Courier, monospace",
          fontSize: 10,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#0a0a0a",
        }}
      >
        NEWSLETTER
      </span>

      <div
        style={{
          position: "relative",
          flex: 1,
          maxWidth: 122,
          paddingBottom: "0.18rem",
        }}
      >
        <input
          type="email"
          placeholder="(EMAIL)"
          style={{
            fontFamily: "'Courier New', Courier, monospace",
            background: "transparent",
            border: "none",
            padding: 0,
            width: "100%",
            fontSize: 10,
            letterSpacing: "0.08em",
            color: "#0a0a0a",
            outline: "none",
            textTransform: "uppercase",
          }}
        />

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: leaving ? 0 : 1 }}
          transition={{
            duration: 0.85,
            delay: leaving ? 0 : 0.52,
            ease: EASE,
          }}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "1px",
            background: "rgba(10,10,10,0.65)",
            transformOrigin: "left center",
          }}
        />
      </div>

      <button
        type="submit"
        style={{
          background: "none",
          border: "none",
          padding: 0,
          fontFamily: "'Courier New', Courier, monospace",
          fontSize: 10,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#0a0a0a",
          cursor: "pointer",
        }}
      >
        SEND
      </button>
    </motion.div>
  );
}

export default function Page() {
  const router = useRouter();

  const [entryMode, setEntryMode] = useState<string | null>(null);
  const [leavingTo, setLeavingTo] = useState<"archive" | "about" | null>(null);

  useEffect(() => {
    const storedEntryMode = sessionStorage.getItem("ct-entry");

    if (storedEntryMode) {
      setEntryMode(storedEntryMode);
      sessionStorage.removeItem("ct-entry");
    }
  }, []);

  const returningHome = entryMode === "return-home";

  function goDesktopOut(
    event: MouseEvent<HTMLAnchorElement>,
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

    setTimeout(() => {
      router.push(href);
    }, destination === "archive" ? 920 : 560);
  }

  function goMobileAbout(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    if (leavingTo) return;

    setLeavingTo("about");

    setTimeout(() => {
      router.push("/about");
    }, 780);
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
              opacity: 0,
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
              opacity: 0,
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
            initial={{ opacity: 1 }}
            animate={{ opacity: leaving ? 0 : 1 }}
            transition={{
              duration: leaving ? 0.38 : 0.55,
              delay: leaving ? 0 : 0.18,
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
              onClick={(event) => goDesktopOut(event, "/archive", "archive")}
              style={{ textDecoration: "none" }}
            >
              <NavItem color="light" underlineColor="#f4f1ea">
                (archive)
              </NavItem>
            </a>

            <Link href="/materials" style={{ textDecoration: "none" }}>
              <NavItem color="light" underlineColor="#f4f1ea">
                (materials)
              </NavItem>
            </Link>

            <a
              href="/about"
              onClick={(event) => goDesktopOut(event, "/about", "about")}
              style={{ textDecoration: "none" }}
            >
              <NavItem color="light" underlineColor="#f4f1ea">
                (about)
              </NavItem>
            </a>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: leaving ? 0 : 1 }}
            transition={{
              duration: leaving ? 0.38 : 1.1,
              delay: leaving ? 0 : 0.85,
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

            <div
              style={{
                position: "relative",
                width: 200,
                paddingBottom: "0.2rem",
              }}
            >
              <input
                type="email"
                placeholder="(Email)"
                style={{
                  fontFamily: "'Aileron', 'Helvetica Neue', sans-serif",
                  background: "transparent",
                  border: "none",
                  padding: "0.15rem 0.3rem",
                  width: "100%",
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  color: "rgba(244,241,234,0.85)",
                  outline: "none",
                }}
              />

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.9,
                  delay: 1,
                  ease: EASE,
                }}
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: "1px",
                  background: "rgba(244,241,234,0.85)",
                  transformOrigin: "left center",
                }}
              />
            </div>

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
            background: "#ffffff",
            height: "100dvh",
          }}
        >
          <motion.img
            src="/hero.webp"
            alt="Collective Textile mobile archive image"
            initial={{ opacity: 0, scale: 1.004 }}
            animate={{
              opacity: leaving ? 0 : 1,
              scale: leaving ? 0.996 : 1,
            }}
            transition={{
              duration: leaving ? 0.62 : 0.9,
              delay: leaving ? 0.06 : 0,
              ease: EASE,
            }}
            style={{
              position: "absolute",
              top: "3.1rem",
              left: 0,
              right: 0,
              bottom: "3.75rem",
              width: "100vw",
              height: "calc(100dvh - 6.85rem)",
              objectFit: "contain",
              objectPosition: "center center",
              zIndex: 0,
              display: "block",
              background: "#ffffff",
            }}
          />

          <motion.nav
            initial={{ opacity: 0, y: -6 }}
            animate={{
              opacity: leaving ? 0 : 1,
              y: leaving ? -6 : 0,
            }}
            transition={{
              duration: leaving ? 0.42 : 0.65,
              delay: leaving ? 0 : 0.16,
              ease: EASE,
            }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 30,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              gap: "0.75rem",
              padding: "1.25rem 1.1rem",
              boxSizing: "border-box",
              width: "100%",
              pointerEvents: leaving ? "none" : "auto",
            }}
          >
            <Link href="/archive" style={{ textDecoration: "none" }}>
              <NavItem color="dark" underlineColor="#0a0a0a">
                (archive)
              </NavItem>
            </Link>

            <Link href="/materials" style={{ textDecoration: "none" }}>
              <NavItem color="dark" underlineColor="#0a0a0a">
                (materials)
              </NavItem>
            </Link>

            <a
              href="/about"
              onClick={goMobileAbout}
              style={{ textDecoration: "none" }}
            >
              <NavItem color="dark" underlineColor="#0a0a0a">
                (about)
              </NavItem>
            </a>
          </motion.nav>

          <MobileNewsletter leaving={leaving} />

          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: leavingAbout ? "0%" : "-100%" }}
            transition={{
              duration: 0.74,
              ease: EASE,
            }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              height: "50dvh",
              background: "#E3010F",
              zIndex: 80,
              pointerEvents: "none",
            }}
          />
        </div>
      </div>

      <style>{`
        input::placeholder {
          color: rgba(10,10,10,0.7);
          font-weight: 500;
        }

        .desktop-layout {
          display: none;
        }

        .mobile-layout {
          display: none;
        }

        @media (min-width: 768px) {
          .desktop-layout {
            display: block;
          }

          .mobile-layout {
            display: none !important;
          }

          .star-desktop {
            display: block !important;
          }
        }

        @media (max-width: 767px) {
          .desktop-layout {
            display: none !important;
          }

          .mobile-layout {
            display: block;
          }

          .star-desktop {
            display: none !important;
          }

          html,
          body {
            width: 100%;
            height: 100%;
            overflow: hidden;
            background: #ffffff !important;
          }
        }
      `}</style>
    </>
  );
}