"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import NavItem from "@/components/nav-item";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const rugImages = [
  "/thumbs/IMG_0999.jpg",
  "/thumbs/IMG_1004.jpg",
  "/thumbs/IMG_1014.jpg",
  "/thumbs/ct-rug-001.jpg",

  "/thumbs/IMG_1008.jpg",
  "/thumbs/IMG_1024.jpg",
  "/thumbs/IMG_1002.jpg",
  "/thumbs/ct-rug-002.jpg",

  "/thumbs/IMG_1012.jpg",
  "/thumbs/IMG_1040.jpg",
  "/thumbs/IMG_1005.jpg",
  "/thumbs/ct-rug-003.jpg",

  "/thumbs/IMG_1016.jpg",
  "/thumbs/IMG_1042.jpg",
  "/thumbs/IMG_1006.jpg",
  "/thumbs/ct-rug-004.jpg",

  "/thumbs/IMG_1028.jpg",
  "/thumbs/IMG_1057.jpg",
  "/thumbs/IMG_1007.jpg",
  "/thumbs/ct-rug-005.jpg",

  "/thumbs/IMG_1059.jpg",
  "/thumbs/IMG_1062.jpg",
  "/thumbs/IMG_1003.jpg",
  "/thumbs/ct-rug-006.jpg",

  "/thumbs/IMG_1064.jpg",
  "/thumbs/IMG_1066.jpg",
  "/thumbs/IMG_1072.jpg",
  "/thumbs/ct-rug-007.jpg",

  "/thumbs/IMG_1073.jpg",
  "/thumbs/IMG_1074.jpg",
  "/thumbs/IMG_1075.jpg",
  "/thumbs/IMG_1076.jpg",
];

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
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      }}
    >
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
          background: "transparent",
        }}
      >
        <Link href="/" style={{ textDecoration: "none" }}>
          <NavItem color="dark" underlineColor="#0a0a0a">
            (home)
          </NavItem>
        </Link>

        <NavItem color="dark" underlineColor="#0a0a0a">
          (materials)
        </NavItem>

        <Link href="/about" style={{ textDecoration: "none" }}>
          <NavItem color="dark" underlineColor="#0a0a0a">
            (about)
          </NavItem>
        </Link>
      </nav>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.7,
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