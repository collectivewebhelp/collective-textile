"use client";

import Link from "next/link";
import { motion } from "motion/react";
import NavItem from "@/components/nav-item";
import { ReturnHomeLink } from "@/components/page-transition";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

function MobileNewsletter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: 0.38,
        ease: EASE,
      }}
      style={{
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        gap: "0.85rem",
        width: "100%",
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
            padding: "0",
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
          animate={{ scaleX: 1 }}
          transition={{
            duration: 0.85,
            delay: 0.52,
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

export default function AboutPage() {
  return (
    <>
      <main className="about-desktop">
        <section
          style={{
            height: "100vh",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "52fr 48fr",
            fontFamily: "'Aileron', 'Helvetica Neue', sans-serif",
            background: "#f4f1ea",
          }}
        >
          <div
            style={{
              position: "relative",
              padding: "5.8rem 4rem 2.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              color: "#0a0a0a",
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

              <ReturnHomeLink variant="about">
                <NavItem color="dark" underlineColor="#0a0a0a">
                  (home)
                </NavItem>
              </ReturnHomeLink>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE }}
              style={{
                width: "100%",
                maxWidth: 480,
              }}
            >
              <div
                style={{
                  minHeight: 165,
                  maxHeight: 220,
                  marginBottom: "0.35rem",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
              >
                <img
                  src="/ascii-sheep.png"
                  alt="ASCII sheep"
                  style={{
                    width: 235,
                    height: "auto",
                    display: "block",
                  }}
                />
              </div>

              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.72,
                  letterSpacing: "0.105em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  margin: "0 0 22px",
                }}
              >
                Amidst the rapid tide of modernisation, the craft culture of the
                Amazigh’s people still thrives with unwavering resilience,
                safeguarding its most formidable asset.
              </p>

              <p
                style={{
                  fontSize: 13,
                  lineHeight: 1.78,
                  letterSpacing: "0.045em",
                  color: "rgba(10,10,10,0.68)",
                  margin: "10px 0 34px",
                }}
              >
                The inherent spirit of playful creativity, that lies at the very
                core of its existence. Collective Textile showcases Moroccan
                carpets and textiles, focusing on the ancestral pattern
                repertoires formed over generations.
              </p>

              <p
                style={{
                  fontSize: 13,
                  lineHeight: 1.78,
                  letterSpacing: "0.045em",
                  color: "rgba(10,10,10,0.68)",
                  margin: 0,
                }}
              >
                We source pieces crafted for domestic use by sedentary or
                semi-nomadic women, spanning the early 20th century to the
                present day.
              </p>
            </motion.div>
          </div>

          <div
            style={{
              background: "#E3010F",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              padding: "4rem 2.5rem 2.5rem",
            }}
          >
            <motion.img
              src="/IMG_2146.jpeg"
              alt="Collective Textile portrait"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: EASE }}
              style={{
                width: "85%",
                height: "72vh",
                objectFit: "cover",
                objectPosition: "center 10%",
                display: "block",
              }}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "87%",
                paddingTop: "1.5rem",
              }}
            >
              <a
                href="https://www.instagram.com/collective_textile/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <NavItem color="light" underlineColor="#f4f1ea">
                  (instagram)
                </NavItem>
              </a>

              <a
                href="mailto:collectivetextile@gmail.com"
                style={{ textDecoration: "none" }}
              >
                <NavItem color="light" underlineColor="#f4f1ea">
                  (email)
                </NavItem>
              </a>
            </div>
          </div>
        </section>
      </main>

      <main className="about-mobile">
        <section
          style={{
            height: "100dvh",
            background: "#f4f1ea",
            fontFamily: "'Aileron', 'Helvetica Neue', sans-serif",
            color: "#0a0a0a",
            overflow: "hidden",
            display: "grid",
            gridTemplateRows: "50dvh 50dvh",
          }}
        >
          <div
            style={{
              background: "#E3010F",
              position: "relative",
              padding: "4.5rem 2rem 1.35rem",
              boxSizing: "border-box",
              overflow: "hidden",
            }}
          >
            <nav
              style={{
                position: "absolute",
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

              <Link href="/" style={{ textDecoration: "none" }}>
                <NavItem color="light" underlineColor="#f4f1ea">
                  (home)
                </NavItem>
              </Link>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.12, ease: EASE }}
              style={{
                maxWidth: 276,
                margin: "0 auto",
              }}
            >
              <img
                src="/star.png"
                alt="Collective Textile star mark"
                style={{
                  width: 48,
                  height: "auto",
                  display: "block",
                  margin: "0 0 1.2rem",
                }}
              />

              <p
                style={{
                  fontSize: 9.4,
                  lineHeight: 1.38,
                  letterSpacing: "0.055em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  margin: "0 0 0.62rem",
                }}
              >
                Amidst the rapid tide of modernisation, the craft culture of the
                Amazigh’s people still thrives with unwavering resilience,
                safeguarding its most formidable asset.
              </p>

              <p
                style={{
                  fontSize: 9.4,
                  lineHeight: 1.38,
                  letterSpacing: "0.055em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  margin: "0 0 0.72rem",
                }}
              >
                The inherent spirit of playful creativity, that lies at the very
                core of its existence.
              </p>

              <p
                style={{
                  fontSize: 9.6,
                  lineHeight: 1.38,
                  letterSpacing: "0.005em",
                  margin: "0 0 0.62rem",
                }}
              >
                Collective Textile showcases Moroccan carpets and textiles,
                focusing on ancestral pattern repertoires formed over
                generations. We source pieces crafted for domestic use by
                sedentary or semi-nomadic women.
              </p>

              <p
                style={{
                  fontSize: 9.6,
                  lineHeight: 1.38,
                  letterSpacing: "0.005em",
                  margin: 0,
                }}
              >
                Founded in Milan in 2018. Our catalogue is updated regularly —
                contact us to purchase or make a special request.
              </p>
            </motion.div>
          </div>

          <div
            style={{
              position: "relative",
              background: "#f4f1ea",
              overflow: "hidden",
            }}
          >
            <motion.img
              src="/IMG_2146.jpeg"
              alt="Collective Textile portrait"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.05, delay: 0.12, ease: EASE }}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center center",
                display: "block",
              }}
            />

            <div
              style={{
                position: "absolute",
                left: "1.1rem",
                right: "1.1rem",
                bottom: "1.15rem",
                zIndex: 20,
              }}
            >
              <MobileNewsletter />
            </div>
          </div>
        </section>
      </main>

      <style>{`
        .about-desktop {
          display: none;
        }

        .about-mobile {
          display: block;
        }

        input::placeholder {
          color: rgba(10,10,10,0.7);
          font-weight: 500;
        }

        @media (min-width: 768px) {
          .about-desktop {
            display: block;
          }

          .about-mobile {
            display: none;
          }
        }

        @media (max-width: 767px) {
          html,
          body {
            width: 100%;
            height: 100%;
            overflow: hidden;
          }
        }
      `}</style>
    </>
  );
}