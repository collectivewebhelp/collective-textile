"use client";

import Link from "next/link";
import Image from "next/image";
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
        duration: leaving ? 0.34 : 0.72,
        delay: leaving ? 0 : 0.38,
        ease: EASE,
      }}
      style={{
        position: "fixed",
        left: "1.1rem",
        right: "1.1rem",
        bottom: "1.15rem",
        zIndex: 70,
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        gap: "0.85rem",
        color: "#ffffff",
        pointerEvents: leaving ? "none" : "auto",
      }}
    >
      <span
        style={{
          fontFamily: "'Courier New', Courier, monospace",
          fontSize: 10,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#ffffff",
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
            color: "#ffffff",
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
            background: "rgba(255,255,255,0.8)",
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
          color: "#ffffff",
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
    }, destination === "archive" ? 920 : 500);
  }

  function goMobileAbout(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    if (leavingTo) return;

    sessionStorage.setItem("ct-entry", "home-to-about");
    setLeavingTo("about");

    setTimeout(() => {
      router.push("/about");
    }, 360);
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
            background: "#000000",
            height: "100dvh",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 1.015 }}
            animate={{
              opacity: leavingArchive ? 0 : 1,
              scale: leaving ? 1.004 : 1,
            }}
            transition={{
              duration: leaving ? 0.42 : 0.95,
              delay: 0,
              ease: EASE,
            }}
            style={{
              position: "absolute",
              top: -1,
              left: -1,
              width: "calc(100vw + 2px)",
              height: "calc(100dvh + 2px)",
              zIndex: 0,
              display: "block",
              background: "#000000",
              overflow: "hidden",
              willChange: "transform, opacity",
            }}
          >
            <Image
              src="/sheep.JPG"
              alt="Collective Textile mobile archive image"
              fill
              priority
              quality={100}
              sizes="100vw"
              style={{
                objectFit: "cover",
                objectPosition: "42% center",
                filter: "grayscale(100%)",
              }}
            />
          </motion.div>

          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              background: "rgba(0,0,0,0.18)",
              pointerEvents: "none",
            }}
          />

          <motion.nav
            initial={{ opacity: 0, y: -6 }}
            animate={{
              opacity: leaving ? 0 : 1,
              y: leaving ? -6 : 0,
            }}
            transition={{
              duration: leaving ? 0.3 : 0.65,
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
              <NavItem color="light" underlineColor="#f4f1ea">
                (archive)
              </NavItem>
            </Link>

            <Link href="/materials" style={{ textDecoration: "none" }}>
              <NavItem color="light" underlineColor="#f4f1ea">
                (materials)
              </NavItem>
            </Link>

            <a
              href="/about"
              onClick={goMobileAbout}
              style={{ textDecoration: "none" }}
            >
              <NavItem color="light" underlineColor="#f4f1ea">
                (about)
              </NavItem>
            </a>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{
              opacity: leaving ? 0 : 1,
              y: leaving ? 6 : 0,
            }}
            transition={{
              duration: leaving ? 0.3 : 0.75,
              delay: leaving ? 0 : 0.34,
              ease: EASE,
            }}
            style={{
              position: "fixed",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 25,
              display: "flex",
              justifyContent: "center",
              pointerEvents: "none",
            }}
          >
            <h1
              style={{
                margin: 0,
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: 21,
                lineHeight: 0.96,
                letterSpacing: "-0.035em",
                textTransform: "uppercase",
                fontWeight: 800,
                color: "#ffffff",
                textAlign: "left",
                width: "fit-content",
              }}
            >
              COLLECTIVE
              <br />
              TEXTILE
            </h1>
          </motion.div>

          <MobileNewsletter leaving={leaving} />
        </div>
      </div>

      <style>{`
        input::placeholder {
          color: rgba(255,255,255,0.78);
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
            background: #000000 !important;
          }

          .star-desktop {
            display: none !important;
          }

          html,
          body {
            width: 100%;
            height: 100%;
            overflow: hidden;
            background: #000000 !important;
          }
        }
      `}</style>
    </>
  );
}