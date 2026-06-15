"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import NavItem from "@/components/nav-item";
import { ReturnHomeLink } from "@/components/page-transition";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function AboutPage() {
  const [entryMode] = useState<string | null>(() => {
    if (typeof window === "undefined") return null;
    return sessionStorage.getItem("ct-entry");
  });

  const fromHome = entryMode === "home-to-about";

  useEffect(() => {
    if (entryMode) {
      sessionStorage.removeItem("ct-entry");
    }
  }, [entryMode]);

  return (
    <main
      style={{
        minHeight: "100vh",
        fontFamily: "'Aileron', 'Helvetica Neue', sans-serif",
        display: "grid",
        gridTemplateColumns: "52fr 48fr",
        background: "#f4f1ea",
      }}
    >
      <motion.nav
        initial={{ opacity: fromHome ? 0 : 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.65,
          delay: fromHome ? 0.18 : 0,
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
        }}
      >
        <Link href="/archive" style={{ textDecoration: "none" }}>
          <NavItem color="dark" underlineColor="#0a0a0a">
            (archive)
          </NavItem>
        </Link>

        <NavItem color="dark" underlineColor="#0a0a0a">
          (materials)
        </NavItem>

        <ReturnHomeLink variant="about" style={{ textDecoration: "none" }}>
          <NavItem color="dark" underlineColor="#0a0a0a">
            (home)
          </NavItem>
        </ReturnHomeLink>
      </motion.nav>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.85,
          delay: fromHome ? 0.18 : 0.08,
          ease: EASE,
        }}
        style={{
          background: "#f4f1ea",
          padding: "2.5rem 2rem 2rem 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            minHeight: "160px",
            maxHeight: "230px",
          }}
        >
          <motion.img
            src="/ascii-sheep.png"
            alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.78 }}
            transition={{
              duration: 0.8,
              delay: fromHome ? 0.5 : 0.75,
              ease: EASE,
            }}
            style={{
              width: "185px",
              height: "auto",
              display: "block",
            }}
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: fromHome ? 0.28 : 0.34,
            ease: EASE,
          }}
          style={{
            fontSize: 12,
            lineHeight: 1.75,
            letterSpacing: "0.12em",
            fontWeight: 700,
            textTransform: "uppercase",
            color: "#0a0a0a",
            marginBottom: "32px",
            maxWidth: 360,
          }}
        >
          Amidst the rapid tide of modernisation, the craft culture of the
          Amazigh people still thrives with unwavering resilience, safeguarding
          its most formidable asset: the inherent spirit of playful creativity,
          that lies at the very core of its existence.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: fromHome ? 0.4 : 0.46,
            ease: EASE,
          }}
          style={{
            fontSize: 10.5,
            lineHeight: 1.95,
            letterSpacing: "0.055em",
            fontWeight: 400,
            color: "rgba(10,10,10,0.68)",
            marginBottom: "24px",
            maxWidth: 350,
          }}
        >
          Collective Textile showcases Moroccan carpets and textiles — focusing
          on the ancestral pattern repertoires formed over generations. We source
          pieces crafted for domestic use by sedentary or semi-nomadic women,
          spanning the early 20th century to the present day.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: fromHome ? 0.52 : 0.58,
            ease: EASE,
          }}
          style={{
            fontSize: 10.5,
            lineHeight: 1.95,
            letterSpacing: "0.055em",
            fontWeight: 400,
            color: "rgba(10,10,10,0.68)",
            marginBottom: 0,
            maxWidth: 350,
          }}
        >
          Founded in Milan in 2018. Our catalogue is updated regularly — contact
          us to purchase or make a special request.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.75,
            delay: fromHome ? 0.62 : 0.72,
            ease: EASE,
          }}
          style={{
            marginTop: "auto",
            paddingTop: "2rem",
            display: "flex",
            alignItems: "baseline",
            gap: "1rem",
          }}
        >
          <span
            style={{
              fontSize: 10,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(10,10,10,0.7)",
              fontWeight: 700,
            }}
          >
            Newsletter
          </span>

          <input
            type="email"
            placeholder="(Email)"
            style={{
              background: "transparent",
              border: "none",
              borderBottom: "1px solid rgba(10,10,10,0.4)",
              padding: "0.15rem 0.3rem",
              width: 160,
              fontSize: 10,
              letterSpacing: "0.1em",
              color: "#0a0a0a",
              outline: "none",
            }}
          />

          <button
            type="submit"
            style={{
              background: "none",
              border: "none",
              padding: 0,
              fontSize: 10,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(10,10,10,0.7)",
              fontWeight: 700,
              cursor: "pointer",
              fontFamily: "'Aileron', 'Helvetica Neue', sans-serif",
            }}
          >
            Send
          </button>
        </motion.div>
      </motion.section>

      <motion.section
        initial={{ opacity: fromHome ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: fromHome ? 0 : 0.85,
          delay: fromHome ? 0 : 0.08,
          ease: EASE,
        }}
        style={{
          background: "#E3010F",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "4rem 2.5rem 2.5rem 2.5rem",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <img
          src="/IMG_2146.jpeg"
          alt="Collective Textile founders"
          style={{
            width: "85%",
            height: "72vh",
            objectFit: "cover",
            objectPosition: "center 10%",
            display: "block",
            flex: 1,
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "85%",
            paddingTop: "1.5rem",
          }}
        >
          <a
            href="https://www.instagram.com/collective_textile/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 9,
              letterSpacing: "0.22em",
              textTransform: "lowercase",
              color: "rgba(244,241,234,0.85)",
              textDecoration: "none",
            }}
          >
            (instagram)
          </a>

          <a
            href="mailto:collectivetextile@gmail.com"
            style={{
              fontSize: 9,
              letterSpacing: "0.22em",
              textTransform: "lowercase",
              color: "rgba(244,241,234,0.85)",
              textDecoration: "none",
            }}
          >
            (email)
          </a>
        </div>
      </motion.section>

      <style>{`
        input::placeholder {
          color: rgba(10,10,10,0.45);
          font-weight: 500;
        }

        input:focus {
          border-bottom-color: currentColor !important;
        }
      `}</style>
    </main>
  );
}