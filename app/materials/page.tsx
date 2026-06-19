"use client";

import Link from "next/link";
import { motion } from "motion/react";
import NavItem from "@/components/nav-item";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function MaterialsPage() {
  return (
    <>
      <main
        style={{
          minHeight: "100vh",
          background: "#ffffff",
          fontFamily: "'Aileron', 'Helvetica Neue', sans-serif",
          color: "#0a0a0a",
          overflow: "hidden",
        }}
      >
        <nav
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 40,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "baseline",
            gap: "2.5rem",
            padding: "1.4rem 2.5rem",
            background: "#ffffff",
          }}
        >
          <Link href="/" style={{ textDecoration: "none" }}>
            <NavItem color="dark" underlineColor="#0a0a0a">
              (home)
            </NavItem>
          </Link>

          <Link href="/archive" style={{ textDecoration: "none" }}>
            <NavItem color="dark" underlineColor="#0a0a0a">
              (archive)
            </NavItem>
          </Link>

          <Link href="/about" style={{ textDecoration: "none" }}>
            <NavItem color="dark" underlineColor="#0a0a0a">
              (about)
            </NavItem>
          </Link>
        </nav>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: EASE }}
          style={{
            minHeight: "100vh",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
            gap: "4rem",
            padding: "6rem 2.5rem 3rem",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "calc(100vh - 9rem)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="/LoomWIP.png"
              alt="Materials work in progress"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>

          <div>
            <h1
              style={{
                fontFamily: "'Courier New', Courier, monospace",
                fontSize: 11,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontWeight: 700,
                margin: 0,
              }}
            >
              WORK IN PROGRESS
            </h1>
          </div>
        </motion.section>
      </main>

      <style>{`
        @media (max-width: 767px) {
          html,
          body {
            background: #ffffff;
          }

          main {
            min-height: 100dvh;
            background: #ffffff;
            overflow-x: hidden;
          }

          nav {
            justify-content: space-between !important;
            gap: 0.75rem !important;
            padding: 1.25rem 1.1rem !important;
            box-sizing: border-box !important;
            width: 100% !important;
            background: #ffffff !important;
          }

          section {
            min-height: 100dvh !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
            gap: 1.6rem !important;
            padding: 5rem 1.1rem 2rem !important;
          }

          section > div:first-child {
            height: auto !important;
            max-height: 68dvh !important;
          }

          section img {
            max-height: 68dvh !important;
            width: 100% !important;
            object-fit: contain !important;
          }

          h1 {
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}