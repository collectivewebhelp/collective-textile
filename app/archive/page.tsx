"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import NavItem from "@/components/nav-item";
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
  return (
    <motion.button
      type="button"
      className="rug-card"
      onClick={onClick}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.04 * index,
        ease: EASE,
      }}
      whileHover={{
        y: -8,
        opacity: 0.82,
        transition: { duration: 0.45, ease: EASE },
      }}
      style={{
        border: "none",
        padding: 0,
        margin: 0,
        background: "transparent",
        cursor: "pointer",
        width: "100%",
        height: 420,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
      }}
    >
      <img
        src={rug.thumb}
        alt={rug.title}
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "contain",
          display: "block",
        }}
      />
    </motion.button>
  );
}

function MetadataRow({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "120px 1fr",
        gap: "1rem",
        padding: "0.62rem 0",
        borderBottom: "1px solid rgba(10,10,10,0.18)",
        fontFamily: "'Courier New', Courier, monospace",
        fontSize: 11,
        letterSpacing: "0.08em",
        lineHeight: 1.35,
        textTransform: "lowercase",
      }}
    >
      <dt style={{ fontWeight: 700, color: "rgba(10,10,10,0.95)" }}>
        {label}
      </dt>
      <dd style={{ margin: 0, color: "rgba(10,10,10,0.68)" }}>{value}</dd>
    </div>
  );
}

function RugDetail({ rug, onClose }: { rug: Rug; onClose: () => void }) {
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
      className="rug-detail"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55, ease: EASE }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 80,
        background: "rgba(255,255,255,0.94)",
        backdropFilter: "blur(2px)",
        fontFamily: "'Aileron', 'Helvetica Neue', sans-serif",
        color: "#0a0a0a",
      }}
    >
      <button
        type="button"
        onClick={onClose}
        style={{
          position: "fixed",
          top: "1.4rem",
          right: "2.5rem",
          zIndex: 90,
          border: "none",
          background: "transparent",
          padding: 0,
        }}
      >
        <NavItem color="dark" underlineColor="#0a0a0a">
          (close)
        </NavItem>
      </button>

      <div
        style={{
          height: "100%",
          display: "grid",
          gridTemplateColumns: "32fr 25fr 43fr",
          gap: "3.25rem",
          padding: "7rem 2.5rem 3rem",
          boxSizing: "border-box",
        }}
      >
        <section
          style={{
            maxWidth: 420,
            alignSelf: "center",
          }}
        >
          <h1
            style={{
              fontSize: 14,
              lineHeight: 1.5,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontWeight: 700,
              margin: "0 0 2rem",
            }}
          >
            {rug.title}
          </h1>

          <p
            style={{
              fontSize: 13,
              lineHeight: 1.72,
              letterSpacing: "0.045em",
              color: "rgba(10,10,10,0.78)",
              margin: "0 0 2.3rem",
            }}
          >
            {rug.description}
          </p>

          <dl
            style={{
              margin: "0 0 2.2rem",
              padding: 0,
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
            style={{ textDecoration: "none" }}
          >
            <NavItem color="dark" underlineColor="#0a0a0a">
              (inquire)
            </NavItem>
          </a>
        </section>

        <section
          style={{
            alignSelf: "center",
            height: "calc(100vh - 10rem)",
            background: "#f4f1ea",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <motion.div
            animate={{ opacity: hoveringImage ? 1 : 0.92 }}
            transition={{ duration: 0.45, ease: EASE }}
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
              textTransform: "uppercase",
              color: "rgba(10,10,10,0.55)",
            }}
          >
            detail view
          </div>
        </section>

        <section
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setHoveringImage(true)}
          onMouseLeave={() => setHoveringImage(false)}
          style={{
            alignSelf: "center",
            height: "calc(100vh - 10rem)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "crosshair",
          }}
        >
          <img
            src={rug.full}
            alt={rug.title}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
              display: "block",
            }}
          />
        </section>
      </div>
    </motion.div>
  );
}

export default function ArchivePage() {
  const [selectedRug, setSelectedRug] = useState<Rug | null>(null);

  function openRug(rug: Rug) {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return;
    }

    setSelectedRug(rug);
  }

  return (
    <>
      <main
        style={{
          minHeight: "100vh",
          background: "#ffffff",
          fontFamily: "'Aileron', 'Helvetica Neue', sans-serif",
          color: "#0a0a0a",
        }}
      >
        <motion.nav
          animate={{
            opacity: selectedRug ? 0.16 : 1,
          }}
          transition={{ duration: 0.45, ease: EASE }}
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
            pointerEvents: selectedRug ? "none" : "auto",
            background: "transparent",
          }}
        >
          <Link href="/" style={{ textDecoration: "none" }}>
            <NavItem color="dark" underlineColor="#0a0a0a">
              (home)
            </NavItem>
          </Link>

          <Link href="/materials" style={{ textDecoration: "none" }}>
            <NavItem color="dark" underlineColor="#0a0a0a">
              (materials)
            </NavItem>
          </Link>

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
          transition={{ duration: 0.55, ease: EASE }}
          style={{
            padding: "7rem 2.5rem 5rem",
            pointerEvents: selectedRug ? "none" : "auto",
          }}
        >
          <div className="archive-grid">
            {rugs.map((rug, index) => (
              <RugImage
                key={rug.slug}
                rug={rug}
                index={index}
                onClick={() => openRug(rug)}
              />
            ))}
          </div>
        </motion.section>

        <AnimatePresence>
          {selectedRug && (
            <RugDetail rug={selectedRug} onClose={() => setSelectedRug(null)} />
          )}
        </AnimatePresence>
      </main>

      <style>{`
        .archive-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          column-gap: 3.5rem;
          row-gap: 5.5rem;
          align-items: end;
        }

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

          main > section {
            padding: 5rem 0 3.2rem !important;
            box-sizing: border-box;
          }

          .archive-grid {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            gap: 0 !important;
            width: 100%;
          }

          .rug-card {
            width: 100vw !important;
            height: calc(100dvh - 5.2rem) !important;
            padding: 0 1.8rem !important;
            box-sizing: border-box !important;
            align-items: center !important;
            justify-content: center !important;
            cursor: default !important;
          }

          .rug-card img {
            max-width: 100% !important;
            max-height: 100% !important;
            object-fit: contain !important;
          }

          .rug-detail {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}