"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import NavItem from "@/components/nav-item";
import { ReturnHomeLink } from "@/components/page-transition";
import { rugs, type Rug } from "@/lib/rugs";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

function RugImage({
  rug,
  index,
  onClick,
}: {
  rug: Rug;
  index: number;
  onClick: () => void;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        margin: 0,
        padding: 0,
        border: "none",
        background: "transparent",
        height: "420px",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      <motion.img
        src={rug.thumb}
        alt={rug.title}
        loading={index < 8 ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setLoaded(true)}
        whileHover={{
          y: -8,
          opacity: 0.82,
        }}
        transition={{
          duration: 0.65,
          ease: EASE,
        }}
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
    </button>
  );
}

function MetadataRow({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "120px 1fr",
        columnGap: "1.25rem",
        padding: "0.58rem 0",
        borderBottom: "1px solid rgba(10,10,10,0.18)",
        fontFamily: "'Courier New', Courier, monospace",
        fontSize: 11,
        lineHeight: 1.35,
        letterSpacing: "0.08em",
        color: "#0a0a0a",
      }}
    >
      <dt
        style={{
          margin: 0,
          fontWeight: 700,
          textTransform: "lowercase",
        }}
      >
        {label}
      </dt>

      <dd
        style={{
          margin: 0,
          fontWeight: 400,
          textTransform: "lowercase",
        }}
      >
        {value}
      </dd>
    </div>
  );
}

function RugDetail({
  rug,
  onClose,
}: {
  rug: Rug;
  onClose: () => void;
}) {
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const [hoveringImage, setHoveringImage] = useState(false);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    setZoomPosition({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.75,
        ease: EASE,
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 80,
        background: "rgba(255,255,255,0.94)",
        backdropFilter: "blur(2px)",
        fontFamily: "'Aileron', 'Helvetica Neue', sans-serif",
        display: "grid",
        gridTemplateColumns: "32fr 25fr 43fr",
        columnGap: "3.25rem",
        padding: "7rem 2.5rem 3rem 2.5rem",
      }}
    >
      <button
        type="button"
        onClick={onClose}
        style={{
          position: "fixed",
          top: "1.4rem",
          right: "2.5rem",
          zIndex: 100,
          background: "transparent",
          border: "none",
          padding: 0,
          cursor: "pointer",
        }}
      >
        <NavItem color="dark" underlineColor="#0a0a0a">
          (close)
        </NavItem>
      </button>

      <motion.section
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.85,
          delay: 0.12,
          ease: EASE,
        }}
        style={{
          alignSelf: "start",
          maxWidth: 420,
        }}
      >
        <h1
          style={{
            margin: 0,
            marginBottom: "1.7rem",
            fontSize: 14,
            lineHeight: 1.45,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontWeight: 700,
            color: "#0a0a0a",
          }}
        >
          {rug.title}
        </h1>

        <p
          style={{
            margin: 0,
            marginBottom: "2.1rem",
            fontSize: 13,
            lineHeight: 1.72,
            letterSpacing: "0.045em",
            color: "rgba(10,10,10,0.78)",
            fontWeight: 400,
          }}
        >
          {rug.description}
        </p>

        <dl
          style={{
            margin: 0,
            borderTop: "1px solid rgba(10,10,10,0.18)",
          }}
        >
          <MetadataRow label="dimensions" value={rug.dimensions} />
          <MetadataRow label="material" value={rug.material} />
          <MetadataRow label="technique" value={rug.technique} />
          <MetadataRow label="condition" value={rug.condition} />
          <MetadataRow label="origin" value={rug.origin} />
          <MetadataRow label="period" value={rug.period} />
        </dl>

        <a
          href="mailto:collectivetextile@gmail.com"
          style={{
            display: "inline-block",
            marginTop: "2rem",
            textDecoration: "none",
          }}
        >
          <NavItem color="dark" underlineColor="#0a0a0a">
            (inquire)
          </NavItem>
        </a>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.95,
          delay: 0.18,
          ease: EASE,
        }}
        style={{
          height: "calc(100vh - 10rem)",
          alignSelf: "start",
          background: "#f4f1ea",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <motion.div
          animate={{
            opacity: hoveringImage ? 1 : 0.92,
          }}
          transition={{
            duration: 0.45,
            ease: EASE,
          }}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${rug.full})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "260%",
            backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
          }}
        />

        <div
          style={{
            position: "absolute",
            left: "1rem",
            bottom: "1rem",
            fontFamily: "'Courier New', Courier, monospace",
            fontSize: 10,
            letterSpacing: "0.12em",
            fontWeight: 700,
            color: "rgba(10,10,10,0.45)",
            textTransform: "lowercase",
            pointerEvents: "none",
          }}
        >
          detail view
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.05,
          delay: 0.22,
          ease: EASE,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHoveringImage(true)}
        onMouseLeave={() => {
          setHoveringImage(false);
          setZoomPosition({ x: 50, y: 50 });
        }}
        style={{
          height: "calc(100vh - 10rem)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          cursor: "crosshair",
        }}
      >
        <img
          src={rug.full}
          alt=""
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            width: "auto",
            height: "auto",
            objectFit: "contain",
            display: "block",
          }}
        />
      </motion.section>
    </motion.div>
  );
}

export default function ArchivePage() {
  const [selectedRug, setSelectedRug] = useState<Rug | null>(null);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        fontFamily: "'Aileron', 'Helvetica Neue', sans-serif",
      }}
    >
      <motion.nav
        animate={{
          opacity: selectedRug ? 0.16 : 1,
        }}
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
          pointerEvents: selectedRug ? "none" : "auto",
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
        animate={{
          opacity: selectedRug ? 0.1 : 1,
          scale: selectedRug ? 0.985 : 1,
        }}
        transition={{
          duration: 0.85,
          ease: EASE,
        }}
        style={{
          padding: "8.5rem 2.5rem 5rem 2.5rem",
          pointerEvents: selectedRug ? "none" : "auto",
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
          {rugs.map((rug, index) => (
            <RugImage
              key={rug.slug}
              rug={rug}
              index={index}
              onClick={() => setSelectedRug(rug)}
            />
          ))}
        </div>
      </motion.section>

      <AnimatePresence>
        {selectedRug && (
          <RugDetail rug={selectedRug} onClose={() => setSelectedRug(null)} />
        )}
      </AnimatePresence>

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

          .archive-grid button {
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

          .archive-grid button {
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

          .archive-grid button {
            height: 360px !important;
          }
        }
      `}</style>
    </main>
  );
}