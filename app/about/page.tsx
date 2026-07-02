"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import NavItem from "@/components/nav-item";
import { ReturnHomeLink } from "@/components/page-transition";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function MobileNewsletter({
  opacity,
  y,
}: {
  opacity: any;
  y: any;
}) {
  return (
    <motion.div
      style={{
        opacity,
        y,
        position: "absolute",
        left: "1.5rem",
        right: "1.5rem",
        bottom: "1.35rem",
        zIndex: 90,
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        gap: "0.85rem",
        pointerEvents: "auto",
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
          height: 14,
          paddingBottom: "0.18rem",
          overflow: "hidden",
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
            width: "160%",
            fontSize: 16,
            lineHeight: 1,
            letterSpacing: "0.08em",
            color: "#0a0a0a",
            outline: "none",
            textTransform: "uppercase",
            transform: "scale(0.625)",
            transformOrigin: "left top",
          }}
        />

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 0.8,
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

function MobileSocialLinks({
  opacity,
  y,
}: {
  opacity: any;
  y: any;
}) {
  return (
    <motion.div
      style={{
        opacity,
        y,
        display: "flex",
        alignItems: "baseline",
        gap: "1.35rem",
        marginTop: "1.05rem",
        pointerEvents: "auto",
      }}
    >
      <a
        href="https://www.instagram.com/collective_textile/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <NavItem color="dark" underlineColor="#0a0a0a">
          (instagram)
        </NavItem>
      </a>

      <a
        href="mailto:collectivetextile@gmail.com"
        style={{ textDecoration: "none" }}
      >
        <NavItem color="dark" underlineColor="#0a0a0a">
          (email)
        </NavItem>
      </a>
    </motion.div>
  );
}

function TabletNewsletter({ fromHome }: { fromHome: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.75,
        delay: fromHome ? 0.55 : 0.35,
        ease: EASE,
      }}
      style={{
        display: "flex",
        alignItems: "baseline",
        gap: "1rem",
        paddingTop: "2rem",
      }}
    >
      <span
        style={{
          fontFamily: "'Courier New', Courier, monospace",
          fontSize: 10,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#0a0a0a",
        }}
      >
        NEWSLETTER
      </span>

      <div
        style={{
          position: "relative",
          width: 180,
          height: 15,
          paddingBottom: "0.2rem",
          overflow: "hidden",
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
            width: "160%",
            fontSize: 16,
            lineHeight: 1,
            letterSpacing: "0.1em",
            color: "#0a0a0a",
            outline: "none",
            textTransform: "uppercase",
            transform: "scale(0.625)",
            transformOrigin: "left top",
          }}
        />

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 0.8,
            delay: fromHome ? 0.7 : 0.5,
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
          letterSpacing: "0.12em",
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
  const [entryMode] = useState<string | null>(() => {
    if (typeof window === "undefined") return null;
    return sessionStorage.getItem("ct-entry");
  });

  const fromHome = entryMode === "home-to-about";

  const [pictureHeight, setPictureHeight] = useState(330);

  const panelTargetY = useMotionValue(330);

  const panelY = useSpring(panelTargetY, {
    stiffness: 320,
    damping: 42,
    mass: 0.28,
    restDelta: 0.001,
  });

  const redContentPaddingTop = useTransform(
    panelY,
    [0, pictureHeight],
    [82, 28]
  );

  const mobileRevealOpacity = useTransform(panelY, [0, 70], [1, 0]);
  const mobileRevealY = useTransform(panelY, [0, 70], [0, 10]);

  const pictureHeightRef = useRef(330);
  const panelTargetRef = useRef(330);
  const touchStartY = useRef<number | null>(null);
  const touchTotalY = useRef(0);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (entryMode) {
      sessionStorage.removeItem("ct-entry");
    }
  }, [entryMode]);

  useEffect(() => {
    function getPictureHeight() {
      return Math.max(window.innerHeight * 0.43, 330);
    }

    function snapPanel(next: number) {
      const maxY = pictureHeightRef.current;
      const clamped = clamp(next, 0, maxY);

      panelTargetRef.current = clamped;
      panelTargetY.set(clamped);
    }

    function updateSize() {
      const nextPictureHeight = getPictureHeight();

      pictureHeightRef.current = nextPictureHeight;
      setPictureHeight(nextPictureHeight);

      if (!initializedRef.current) {
        initializedRef.current = true;
        snapPanel(nextPictureHeight);
        return;
      }

      snapPanel(clamp(panelTargetRef.current, 0, nextPictureHeight));
    }

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, [panelTargetY]);

  useEffect(() => {
    function snapToTop() {
      panelTargetRef.current = 0;
      panelTargetY.set(0);
    }

    function snapToRest() {
      const rest = pictureHeightRef.current;

      panelTargetRef.current = rest;
      panelTargetY.set(rest);
    }

    function onWheel(event: WheelEvent) {
      if (window.innerWidth >= 768) return;

      event.preventDefault();

      if (event.deltaY > 8) {
        snapToTop();
      }

      if (event.deltaY < -8) {
        snapToRest();
      }
    }

    function onTouchStart(event: TouchEvent) {
      if (window.innerWidth >= 768) return;

      touchStartY.current = event.touches[0]?.clientY ?? null;
      touchTotalY.current = 0;
    }

    function onTouchMove(event: TouchEvent) {
      if (window.innerWidth >= 768) return;
      if (touchStartY.current === null) return;

      event.preventDefault();

      const currentY = event.touches[0]?.clientY ?? touchStartY.current;
      const delta = touchStartY.current - currentY;

      touchTotalY.current += delta;
      touchStartY.current = currentY;
    }

    function onTouchEnd() {
      const threshold = 26;

      if (touchTotalY.current > threshold) {
        snapToTop();
      }

      if (touchTotalY.current < -threshold) {
        snapToRest();
      }

      touchStartY.current = null;
      touchTotalY.current = 0;
    }

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: false });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [panelTargetY]);

  return (
    <>
      <main
        className="about-desktop"
        style={{
          height: "100vh",
          overflow: "hidden",
          fontFamily: "'Aileron', 'Helvetica Neue', sans-serif",
          display: "grid",
          gridTemplateColumns: "52fr 48fr",
          background: "#f4f1ea",
        }}
      >
        <motion.nav
          initial={{ opacity: 0 }}
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

          <Link href="/materials" style={{ textDecoration: "none" }}>
            <NavItem color="dark" underlineColor="#0a0a0a">
              (materials)
            </NavItem>
          </Link>

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
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "165px",
              maxHeight: "220px",
              marginBottom: "0.35rem",
            }}
          >
            <motion.img
              src="/ascii-sheep.png"
              alt=""
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.78 }}
              transition={{
                duration: 0.9,
                delay: fromHome ? 0.45 : 0.7,
                ease: EASE,
              }}
              style={{
                width: "235px",
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
              fontSize: 16,
              lineHeight: 1.72,
              letterSpacing: "0.105em",
              fontWeight: 700,
              textTransform: "uppercase",
              color: "#0a0a0a",
              marginBottom: "22px",
              maxWidth: 480,
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
              fontSize: 13,
              lineHeight: 1.78,
              letterSpacing: "0.045em",
              fontWeight: 400,
              color: "rgba(10,10,10,0.68)",
              marginTop: "10px",
              marginBottom: "34px",
              maxWidth: 480,
            }}
          >
            Collective Textile showcases Moroccan carpets and textiles — focusing
            on the ancestral pattern repertoires formed over generations. We
            source pieces crafted for domestic use by sedentary or semi-nomadic
            women, spanning the early 20th century to the present day.
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
              fontSize: 13,
              lineHeight: 1.78,
              letterSpacing: "0.045em",
              fontWeight: 400,
              color: "rgba(10,10,10,0.68)",
              marginBottom: 0,
              maxWidth: 480,
            }}
          >
            Founded in Milan in 2018. Our catalogue is updated regularly —
            contact us to purchase or make a special request.
          </motion.p>
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
            alignItems: "flex-end",
            justifyContent: "center",
            padding: "4rem 2.5rem 2.5rem 2.5rem",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <motion.img
            src="/IMG_2146.jpeg"
            alt="Collective Textile founders"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.2,
              delay: fromHome ? 0.18 : 0.18,
              ease: EASE,
            }}
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
        </motion.section>
      </main>

      <main className="about-tablet">
        <section
          style={{
            minHeight: "100vh",
            background: "#f4f1ea",
            fontFamily: "'Aileron', 'Helvetica Neue', sans-serif",
            color: "#0a0a0a",
            overflow: "hidden",
          }}
        >
          <motion.nav
            initial={{ opacity: 0 }}
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
              justifyContent: "space-between",
              alignItems: "baseline",
              gap: "1rem",
              padding: "1.35rem 1.75rem",
              boxSizing: "border-box",
              pointerEvents: "auto",
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

            <ReturnHomeLink variant="about" style={{ textDecoration: "none" }}>
              <NavItem color="dark" underlineColor="#0a0a0a">
                (home)
              </NavItem>
            </ReturnHomeLink>
          </motion.nav>

          <motion.div
            initial={{ opacity: fromHome ? 0 : 1 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.85,
              delay: fromHome ? 0.08 : 0,
              ease: EASE,
            }}
            style={{
              height: "46vh",
              minHeight: 360,
              background: "#f4f1ea",
              overflow: "hidden",
            }}
          >
            <img
              src="/IMG_2146.jpeg"
              alt="Collective Textile founders"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 34%",
                display: "block",
              }}
            />
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.85,
              delay: fromHome ? 0.28 : 0.16,
              ease: EASE,
            }}
            style={{
              background: "#E3010F",
              minHeight: "54vh",
              padding: "4.8rem 3rem 3rem",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div style={{ maxWidth: 620 }}>
              <img
                src="/star.png"
                alt="Collective Textile star mark"
                style={{
                  width: 52,
                  height: "auto",
                  display: "block",
                  margin: "0 0 1.15rem",
                }}
              />

              <p
                style={{
                  fontSize: 22,
                  lineHeight: 1.12,
                  letterSpacing: "0.015em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  margin: "0 0 1rem",
                }}
              >
                Amidst the rapid tide of modernisation, the craft culture of the
                Amazigh people still thrives with unwavering resilience,
                safeguarding its most formidable asset:
              </p>

              <p
                style={{
                  fontSize: 22,
                  lineHeight: 1.12,
                  letterSpacing: "0.015em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  margin: "0 0 1.4rem",
                }}
              >
                The inherent spirit of playful creativity, that lies at the very
                core of its existence.
              </p>

              <p
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.48,
                  letterSpacing: "0.015em",
                  fontWeight: 400,
                  margin: "0 0 1rem",
                  maxWidth: 560,
                }}
              >
                <strong style={{ fontWeight: 700 }}>Collective Textile</strong>{" "}
                showcases Moroccan carpets and textiles, focusing on the
                ancestral pattern repertoires formed over generations.
              </p>

              <p
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.48,
                  letterSpacing: "0.015em",
                  fontWeight: 400,
                  margin: 0,
                  maxWidth: 560,
                }}
              >
                Founded in Milan in 2018. Our catalogue is updated regularly —
                contact us to purchase or make a special request.
              </p>
            </div>

            <TabletNewsletter fromHome={fromHome} />
          </motion.section>
        </section>
      </main>

      <main className="about-mobile">
        <section
          style={{
            position: "fixed",
            inset: 0,
            width: "100vw",
            height: "100dvh",
            background: "#f4f1ea",
            fontFamily: "'Aileron', 'Helvetica Neue', sans-serif",
            color: "#0a0a0a",
            overflow: "hidden",
            touchAction: "none",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: pictureHeight,
              background: "#f4f1ea",
              overflow: "hidden",
              zIndex: 1,
            }}
          >
            <motion.img
              src="/IMG_2146.jpeg"
              alt="Collective Textile founders"
              initial={{
                opacity: fromHome ? 0 : 1,
                scale: fromHome ? 1.006 : 1,
              }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: fromHome ? 0.78 : 0,
                delay: fromHome ? 0.04 : 0,
                ease: EASE,
              }}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 52%",
                display: "block",
                background: "#f4f1ea",
              }}
            />
          </div>

          <motion.section
            style={{
              y: panelY,
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "100dvh",
              zIndex: 10,
              background: "#E3010F",
              boxSizing: "border-box",
              paddingTop: redContentPaddingTop,
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
              paddingBottom: "1.35rem",
              display: "flex",
              flexDirection: "column",
              willChange: "transform",
            }}
          >
            <motion.img
              src="/star.png"
              alt="Collective Textile star mark"
              initial={{ opacity: fromHome ? 0 : 1, y: fromHome ? 8 : 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: fromHome ? 0.62 : 0,
                delay: fromHome ? 0.42 : 0,
                ease: EASE,
              }}
              style={{
                width: 43,
                height: "auto",
                display: "block",
                margin: "0 0 0.85rem",
              }}
            />

            <motion.div
              initial={{ opacity: fromHome ? 0 : 1, y: fromHome ? 10 : 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: fromHome ? 0.68 : 0,
                delay: fromHome ? 0.5 : 0,
                ease: EASE,
              }}
            >
              <p
                style={{
                  fontSize: 12.4,
                  lineHeight: 1.14,
                  letterSpacing: "0.008em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  margin: "0 0 0.72rem",
                  maxWidth: 318,
                }}
              >
                Amidst the rapid tide of modernisation, the craft culture of the
                Amazigh’s people still thrives with unwavering resilience,
                safeguarding its most formidable asset:
              </p>

              <p
                style={{
                  fontSize: 12.4,
                  lineHeight: 1.14,
                  letterSpacing: "0.008em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  margin: "0 0 0.95rem",
                  maxWidth: 318,
                }}
              >
                The inherent spirit of playful creativity, that lies at the very
                core of its existence.
              </p>

              <p
                style={{
                  fontSize: 11.4,
                  lineHeight: 1.2,
                  letterSpacing: "0.001em",
                  fontWeight: 400,
                  margin: "0 0 0.92rem",
                  maxWidth: 318,
                }}
              >
                <strong style={{ fontWeight: 700 }}>Collective Textile</strong>{" "}
                showcases Moroccan carpets and textiles, focusing on the
                ancestral pattern repertoires formed over generations. We source
                pieces crafted for domestic use by sedentary or semi-nomadic
                women, spanning the early 20th century to the present day.
              </p>

              <p
                style={{
                  fontSize: 11.4,
                  lineHeight: 1.2,
                  letterSpacing: "0.001em",
                  fontWeight: 400,
                  margin: 0,
                  maxWidth: 318,
                }}
              >
                Founded in Milan in 2018. Our catalogue is updated regularly —
                contact us to purchase or make a special request.
              </p>

              <MobileSocialLinks opacity={mobileRevealOpacity} y={mobileRevealY} />
            </motion.div>
          </motion.section>

          <nav
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 100,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              gap: "0.75rem",
              padding: "1.25rem 1.1rem",
              boxSizing: "border-box",
              width: "100%",
              pointerEvents: "auto",
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

            <Link href="/" style={{ textDecoration: "none" }}>
              <NavItem color="dark" underlineColor="#0a0a0a">
                (home)
              </NavItem>
            </Link>
          </nav>

          <MobileNewsletter opacity={mobileRevealOpacity} y={mobileRevealY} />
        </section>
      </main>

      <style>{`
        .about-desktop,
        .about-tablet {
          display: none !important;
        }

        .about-mobile {
          display: block !important;
        }

        input::placeholder {
          color: rgba(10,10,10,0.7);
          font-weight: 500;
        }

        input:focus {
          border-bottom-color: currentColor !important;
        }

        @media (min-width: 768px) and (max-width: 1199px) {
          .about-mobile,
          .about-desktop {
            display: none !important;
          }

          .about-tablet {
            display: block !important;
          }

          html,
          body {
            overflow: auto;
            background: #f4f1ea !important;
          }
        }

        @media (min-width: 1200px) {
          .about-desktop {
            display: grid !important;
          }

          .about-mobile,
          .about-tablet {
            display: none !important;
          }

          html,
          body {
            overflow: hidden;
            background: #f4f1ea !important;
          }
        }

        @media (max-width: 767px) {
          html,
          body {
            width: 100%;
            height: 100%;
            overflow: hidden;
            overscroll-behavior: none;
            background: #f4f1ea !important;
          }
        }
      `}</style>
    </>
  );
}