"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import NavItem from "@/components/nav-item";
import { ReturnHomeLink } from "@/components/page-transition";
import { rugImages } from "@/lib/rug-images";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

function RugImage({ src, index }: { src: string; index: number }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <figure
      style={{
        margin: 0,
        padding: 0,
        height: "420px",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
      }}
    >
      <img
        src={src}
        alt=""
        loading={index < 8 ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setLoaded(true)}
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          width: "auto",
          height: "auto",
          display: "block",
          objectFit: "contain",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
    </figure>
  );
}

export default function ArchivePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        fontFamily: "'Aileron', 'Helvetica Neue', sans-serif",
      }}
    >
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.65,
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
          background: "transparent",
        }}
      >
        <ReturnHomeLink variant="archive" style={{ textDecoration: "none" }}>
          <NavItem color="dark" underlineColor="#0a0a0a">
            (home)
          </NavItem>
        </ReturnHomeLink>

        <NavItem color="dark" underlineColor="#0a0a0a">
          (materials)
        </NavItem>

        <Link href="/about" style={{ textDecoration: "none" }}>
          <NavItem color="dark" underlineColor="#0a0a0a">
            (about)
          </NavItem>
        </Link>
      </motion.nav>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.75,
          delay: 0.08,
          ease: EASE,
        }}
        style={{
          padding: "8.5rem 2.5rem 5rem 2.5rem",
        }}
      >
        <div
          className="archive-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            columnGap: "3rem",
            rowGap: "4.5rem",
            alignItems: "end",
          }}
        >
          {rugImages.map((src, index) => (
            <RugImage key={src} src={src} index={index} />
          ))}
        </div>
      </motion.section>

      <style>{`
        body {
          background: #ffffff;
        }

        @media (max-width: 1200px) {
          .archive-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
            column-gap: 2.5rem !important;
            row-gap: 4rem !important;
          }

          .archive-grid figure {
            height: 390px !important;
          }
        }

        @media (max-width: 800px) {
          main section {
            padding: 7.5rem 1.5rem 4rem 1.5rem !important;
          }

          .archive-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            column-gap: 1.5rem !important;
            row-gap: 3.5rem !important;
          }

          .archive-grid figure {
            height: 340px !important;
          }

          nav {
            gap: 1.5rem !important;
            padding: 1.2rem 1.5rem !important;
          }
        }

        @media (max-width: 520px) {
          .archive-grid {
            grid-template-columns: 1fr !important;
            row-gap: 3rem !important;
          }

          .archive-grid figure {
            height: 360px !important;
          }
        }
      `}</style>
    </main>
  );
}