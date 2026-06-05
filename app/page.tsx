"use client";

import Link from "next/link";
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
  return (
    <>
      <div className="desktop-layout">
        <div
          style={{
            position: "fixed",
            inset: 0,
            overflow: "hidden",
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          }}
        >
          {/* Flag — cream left */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.35,
              delay: 0.1,
              ease: EASE,
            }}
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

          {/* Flag — red right */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.35,
              delay: 0.1,
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

          {/* Sheep photo */}
          <motion.img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sheep.JPG-wY18QyNQYYP2FYvceQTkYnArtEBI3L.jpeg"
            alt="Archive photograph"
            initial={{ opacity: 0, x: "-8%" }}
            animate={{ opacity: 1, x: "0%" }}
            transition={{
              opacity: {
                duration: 1.2,
                delay: 0.75,
                ease: EASE,
              },
              x: {
                duration: 1.4,
                delay: 0.55,
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

          {/* Star — larger original version */}
          <motion.img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/star-t0E9JWLbjVAvQ0C8SGFbNOZsxQkFRA.png"
            alt="Collective Textile star mark"
            className="star-desktop"
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              opacity: {
                duration: 1.1,
                delay: 1.05,
                ease: EASE,
              },
              y: {
                duration: 1.1,
                delay: 0.85,
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

          {/* Navigation */}
          <nav
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
            }}
          >
            <Link href="/archive" style={{ textDecoration: "none" }}>
              <NavItem color="light" underlineColor="#f4f1ea">
                (archive)
              </NavItem>
            </Link>

            <NavItem color="light" underlineColor="#f4f1ea">
              (materials)
            </NavItem>

            <Link href="/about" style={{ textDecoration: "none" }}>
              <NavItem color="light" underlineColor="#f4f1ea">
                (about)
              </NavItem>
            </Link>
          </nav>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.1,
              delay: 0.85,
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
              pointerEvents: "auto",
            }}
          >
            <span
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
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
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
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

      {/* Tablet Layout */}
      <div className="tablet-layout">
        <div
          style={{
            position: "fixed",
            inset: 0,
            overflow: "hidden",
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
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
            }}
          />

          <div
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "48%",
              height: "100%",
              background: "#E3010F",
              zIndex: 0,
            }}
          />

          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sheep.JPG-wY18QyNQYYP2FYvceQTkYnArtEBI3L.jpeg"
            alt="Archive photograph"
            style={{
              position: "fixed",
              left: 0,
              bottom: 0,
              width: "66.5%",
              height: "auto",
              display: "block",
              zIndex: 10,
            }}
          />

          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/star-t0E9JWLbjVAvQ0C8SGFbNOZsxQkFRA.png"
            alt="Star"
            className="star-tablet"
            style={{
              position: "fixed",
              top: -8,
              left: "calc(52% - 80px)",
              width: 160,
              height: "auto",
              zIndex: 20,
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
              justifyContent: "flex-end",
              alignItems: "baseline",
              gap: "1.5rem",
              padding: "1rem 1.5rem",
            }}
          >
            <Link href="/archive" style={{ textDecoration: "none" }}>
              <NavItem color="light" underlineColor="#f4f1ea">
                (archive)
              </NavItem>
            </Link>

            <NavItem color="light" underlineColor="#f4f1ea">
              (materials)
            </NavItem>

            <Link href="/about" style={{ textDecoration: "none" }}>
              <NavItem color="light" underlineColor="#f4f1ea">
                (about)
              </NavItem>
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="mobile-layout">
        <div
          style={{
            position: "fixed",
            inset: 0,
            overflow: "hidden",
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            background: "#0f0f0d",
          }}
        >
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/preview-kZ5kZ0VmqSPxrxbbEJLO1auLU6uuCG.webp"
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
            <Link href="/archive" style={{ textDecoration: "none" }}>
              <NavItem color="light" underlineColor="#f4f1ea">
                (archive)
              </NavItem>
            </Link>

            <NavItem color="light" underlineColor="#f4f1ea">
              (materials)
            </NavItem>

            <Link href="/about" style={{ textDecoration: "none" }}>
              <NavItem color="light" underlineColor="#f4f1ea">
                (about)
              </NavItem>
            </Link>
          </nav>
        </div>
      </div>

      <style>{`
        input::placeholder {
          color: rgba(255,255,255,0.6);
          font-weight: 500;
        }

        .desktop-layout {
          display: none;
        }

        @media (min-width: 1025px) {
          .desktop-layout {
            display: block;
          }
        }

        .tablet-layout {
          display: none;
        }

        @media (min-width: 768px) and (max-width: 1024px) {
          .tablet-layout {
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
        }

        @media (min-width: 768px) and (max-width: 1280px) {
          .desktop-layout {
            display: block;
          }

          .tablet-layout {
            display: none;
          }
        }

        @media (min-width: 1025px) {
          .star-desktop {
            display: block !important;
          }
        }

        @media (max-width: 767px) {
          .star-desktop {
            display: none !important;
          }
        }

        @media (min-width: 768px) and (max-width: 1024px) {
          .star-tablet {
            display: block !important;
            width: 140px;
            top: -6px;
            left: calc(52% - 70px);
          }
        }
      `}</style>
    </>
  );
}