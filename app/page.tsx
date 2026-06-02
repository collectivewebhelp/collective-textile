"use client";

import { useState, useEffect } from "react";

const NAV_FONT: React.CSSProperties = {
  fontFamily: "'Courier New', Courier, monospace",
  fontSize: 11,
  letterSpacing: "0.15em",
  textTransform: "lowercase",
  fontWeight: 700,
  textDecoration: "none",
  position: "relative",
  paddingBottom: "3px",
  cursor: "pointer",
  display: "inline-block",
  transition: "color 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
};

function NavItem({
  children,
  onClick,
  color,
  underlineColor,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  color: string;
  underlineColor: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="#"
      onClick={(e) => { e.preventDefault(); onClick?.(); }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...NAV_FONT,
        color: hovered
          ? (color === "dark" ? "#000000" : "#ffffff")
          : (color === "dark" ? "rgba(10,10,10,0.6)" : "rgba(244,241,234,0.85)"),
      }}
    >
      {children}
      <span style={{
        position: "absolute", bottom: 0, left: 0,
        width: hovered ? "100%" : "0%", height: "0.5px",
        background: underlineColor,
        transition: "width 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
        display: "block",
      }} />
    </a>
  );
}

function NewsletterButton() {
  return (
    <button type="submit" style={{
      background: "none", border: "none", fontSize: 11,
      letterSpacing: "0.15em", textTransform: "uppercase",
      color: "#ffffff", fontWeight: 700, cursor: "pointer",
      fontFamily: "'Courier New', Courier, monospace",
    }}>SEND</button>
  );
}

function RugItem({ src }: { src: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ breakInside: "avoid", marginBottom: "1.2rem", cursor: "default" }}
    >
      <img src={src} alt="" style={{
        width: "100%", height: "auto", display: "block",
        opacity: hovered ? 0.88 : 1,
        transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
      }} />
    </div>
  );
}

const rugImages = [
  "/IMG_0999.jpg", "/IMG_1004.jpg", "/IMG_1008.jpg", "/IMG_1012.jpg",
  "/IMG_1016.jpg", "/IMG_1024.jpg", "/IMG_1028.jpg", "/IMG_1040.jpg",
  "/IMG_1042.jpg", "/IMG_1057.jpg", "/IMG_1059.jpg", "/IMG_1062.jpg",
  "/IMG_1064.jpg", "/IMG_1066.jpg", "/IMG_1072.jpg", "/IMG_1073.jpg",
  "/IMG_1074.jpg", "/IMG_1075.jpg", "/IMG_1076.jpg",
];

type View = "home" | "archive" | "about";

export default function Page() {
  const [view, setView] = useState<View>("home");
  const [prevView, setPrevView] = useState<View>("home");
  const [archiveGridVisible, setArchiveGridVisible] = useState(false);

  const navigateTo = (next: View) => {
    if (next === view) return;
    setPrevView(view);
    if (next === "archive") {
      setView("archive");
      setTimeout(() => setArchiveGridVisible(true), 600);
    } else if (view === "archive" && next === "about") {
      setArchiveGridVisible(false);
      setTimeout(() => setView("about"), 1100);
    } else {
      setArchiveGridVisible(false);
      setView(next);
    }
  };

  useEffect(() => {
    rugImages.forEach(src => { const img = new Image(); img.src = src; });
  }, []);

  const aboutOpen = view === "about";
  const archiveOpen = view === "archive";
  const navColor = archiveOpen ? "dark" : "light";
  const navUnderline = archiveOpen ? "#0a0a0a" : "#f4f1ea";

  return (
    <>
      <div className="desktop-layout">
        <div style={{ position: "fixed", inset: 0, overflow: "hidden", fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>

          {/* Flag — cream left */}
          <div style={{
            position: "fixed", top: 0, left: 0, width: "52%", height: "100%",
            background: "#f4f1ea", zIndex: 0,
            opacity: aboutOpen ? 0 : 1,
            transition: "opacity 1.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
            pointerEvents: "none",
          }} />

          {/* Flag — red right */}
          <div style={{ position: "fixed", top: 0, right: 0, width: "48%", height: "100%", background: "#E3010F", zIndex: 0 }} />

          {/* Sheep photo */}
          <div style={{
            position: "fixed", top: "15%", left: 0, width: "58%", height: "78%",
            zIndex: 10, overflow: "hidden",
            opacity: aboutOpen ? 0 : 1,
            transform: aboutOpen ? "translateX(-58%)" : "translateX(0px)",
            transition: aboutOpen
              ? "opacity 2s cubic-bezier(0.16, 1, 0.3, 1) 0.8s, transform 2.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s"
              : "opacity 2s cubic-bezier(0.16, 1, 0.3, 1) 0s, transform 2s cubic-bezier(0.16, 1, 0.3, 1) 0s",
            pointerEvents: aboutOpen ? "none" : "auto",
          }}>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sheep.JPG-wY18QyNQYYP2FYvceQTkYnArtEBI3L.jpeg"
              alt="Archive photograph"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%" }}
            />
          </div>

          {/* Star */}
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/star-t0E9JWLbjVAvQ0C8SGFbNOZsxQkFRA.png"
            alt="Collective Textile star mark"
            className="star-desktop"
            style={{
              position: "fixed", top: -10, left: "calc(52% - 110px)", width: 220, height: "auto",
              zIndex: 20, background: "transparent",
              opacity: aboutOpen ? 0 : 1,
              transition: aboutOpen
                ? "opacity 2s cubic-bezier(0.16, 1, 0.3, 1) 0.8s"
                : "opacity 2s cubic-bezier(0.16, 1, 0.3, 1) 0s",
              pointerEvents: aboutOpen ? "none" : "auto",
            }}
          />

          {/* Navigation */}
          <nav style={{
            position: "fixed", top: 0, left: 0, right: 0, zIndex: 60,
            display: "flex", justifyContent: "flex-end", alignItems: "baseline",
            gap: "2.5rem", padding: "1.4rem 2.5rem",
          }}>
            <NavItem color={navColor} underlineColor={navUnderline} onClick={() => archiveOpen ? navigateTo("home") : navigateTo("archive")}>
              {archiveOpen ? "(home)" : "(archive)"}
            </NavItem>
            <NavItem color={navColor} underlineColor={navUnderline}>(materials)</NavItem>
            <NavItem color={navColor} underlineColor={navUnderline} onClick={() => aboutOpen ? navigateTo("home") : navigateTo("about")}>
              {aboutOpen ? "(home)" : "(about)"}
            </NavItem>
          </nav>

          {/* Newsletter */}
          <div style={{
            position: "fixed", bottom: "4%", right: "2.5rem", zIndex: 70,
            display: "flex", alignItems: "baseline", gap: "1rem",
            opacity: aboutOpen || archiveOpen ? 0 : 1,
            pointerEvents: aboutOpen || archiveOpen ? "none" : "auto",
            transition: "opacity 1.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}>
            <span style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(244,241,234,0.85)", fontWeight: 700 }}>Newsletter</span>
            <input
              type="email" placeholder="(Email)"
              style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", background: "transparent", border: "none", borderBottom: "1px solid rgba(244,241,234,0.85)", padding: "0.15rem 0.3rem", width: 200, fontSize: 10, letterSpacing: "0.1em", color: "rgba(244,241,234,0.85)", outline: "none" }}
              onFocus={e => (e.target.style.borderBottomColor = "#ffffff")}
              onBlur={e => (e.target.style.borderBottomColor = "rgba(244,241,234,0.85)")}
            />
            <span style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(244,241,234,0.85)", fontWeight: 700, cursor: "pointer" }}>Send</span>
          </div>

          {/* About overlay */}
          <div style={{
            position: "fixed", inset: 0, zIndex: 56,
            opacity: aboutOpen ? 1 : 0,
            pointerEvents: aboutOpen ? "auto" : "none",
            transition: "opacity 1s cubic-bezier(0.16, 1, 0.3, 1)",
            display: "grid", gridTemplateColumns: "52fr 48fr",
          }}>
            <div style={{ background: "#ffffff", padding: "2.5rem 2rem 2rem 2rem", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start" }}>
              <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "flex-start", minHeight: "180px", maxHeight: "260px" }}>
                <img src="/ascii-sheep.png" alt="" style={{ width: "200px", height: "auto", display: "block", opacity: 0.8 }} />
              </div>
              <p style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 11, lineHeight: 1.8, letterSpacing: "0.14em", fontWeight: 700, textTransform: "uppercase", color: "#0a0a0a", marginBottom: "28px", maxWidth: 320 }}>
                Amidst the rapid tide of modernisation, the craft culture of the Amazigh people still thrives with unwavering resilience, safeguarding its most formidable asset: the inherent spirit of playful creativity, that lies at the very core of its existence.
              </p>
              <p style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 10, lineHeight: 1.9, letterSpacing: "0.06em", fontWeight: 400, color: "rgba(10,10,10,0.7)", marginBottom: "24px", maxWidth: 320 }}>
                Collective Textile showcases Moroccan carpets and textiles — focusing on the ancestral pattern repertoires formed over generations. We source pieces crafted for domestic use by sedentary or semi-nomadic women, spanning the early 20th century to the present day.
              </p>
              <p style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 10, lineHeight: 1.9, letterSpacing: "0.06em", fontWeight: 400, color: "rgba(10,10,10,0.7)", marginBottom: "0", maxWidth: 320 }}>
                Founded in Milan in 2018. Our catalogue is updated regularly — contact us to purchase or make a special request.
              </p>
              <div style={{ marginTop: "auto", paddingTop: "2rem", display: "flex", alignItems: "baseline", gap: "1rem" }}>
                <span style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(10,10,10,0.7)", fontWeight: 700 }}>Newsletter</span>
                <input type="email" placeholder="(Email)"
                  style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", background: "transparent", border: "none", borderBottom: "1px solid rgba(10,10,10,0.4)", padding: "0.15rem 0.3rem", width: 160, fontSize: 10, letterSpacing: "0.1em", color: "#0a0a0a", outline: "none" }}
                  onFocus={e => (e.target.style.borderBottomColor = "#0a0a0a")}
                  onBlur={e => (e.target.style.borderBottomColor = "rgba(10,10,10,0.4)")}
                />
                <span style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(10,10,10,0.7)", fontWeight: 700, cursor: "pointer" }}>Send</span>
              </div>
            </div>
            <div style={{
              background: "#E3010F",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              padding: "4rem 2.5rem 2.5rem 2.5rem", height: "100%", overflow: "hidden",
            }}>
              <img src="/IMG_2146.jpeg" alt="Collective Textile founders" style={{ width: "85%", height: "72vh", objectFit: "cover", objectPosition: "center 10%", display: "block", flex: 1 }} />
              <div style={{ display: "flex", justifyContent: "space-between", width: "85%", paddingTop: "1.5rem" }}>
                <a href="https://www.instagram.com/collective_textile/" target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 9, letterSpacing: "0.22em", textTransform: "lowercase", color: "rgba(244,241,234,0.85)", textDecoration: "none", transition: "color 0.6s cubic-bezier(0.16, 1, 0.3, 1)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#ffffff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(244,241,234,0.85)")}
                >(instagram)</a>
                <a href="mailto:collectivetextile@gmail.com"
                  style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 9, letterSpacing: "0.22em", textTransform: "lowercase", color: "rgba(244,241,234,0.85)", textDecoration: "none", transition: "color 0.6s cubic-bezier(0.16, 1, 0.3, 1)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#ffffff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(244,241,234,0.85)")}
                >(email)</a>
              </div>
            </div>
          </div>

          {/* Archive overlay */}
          <div style={{
            position: "fixed", inset: 0, zIndex: 55,
            background: "#ffffff",
            opacity: archiveOpen ? 1 : 0,
            pointerEvents: archiveOpen ? "auto" : "none",
            transition: "opacity 1s cubic-bezier(0.16, 1, 0.3, 1)",
            overflowY: "auto",
          }}>
            <div style={{
              padding: "5rem 2.5rem 4rem 2.5rem",
              columns: 5, columnGap: "1.2rem",
              opacity: archiveGridVisible ? 1 : 0,
              transition: "opacity 1.6s cubic-bezier(0.16, 1, 0.3, 1)",
            }}>
              {rugImages.map((src, index) => (
                <RugItem key={index} src={src} />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Tablet Layout */}
      <div className="tablet-layout">
        <div style={{ position: "fixed", inset: 0, overflow: "hidden", fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
          <div style={{ position: "fixed", top: 0, left: 0, width: "52%", height: "100%", background: "#f4f1ea", zIndex: 0 }} />
          <div style={{ position: "fixed", top: 0, right: 0, width: "48%", height: "100%", background: "#E3010F", zIndex: 0 }} />
          <div style={{ position: "fixed", top: "15%", left: 0, width: "58%", height: "70vh", zIndex: 10, overflow: "hidden" }}>
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sheep.JPG-wY18QyNQYYP2FYvceQTkYnArtEBI3L.jpeg" alt="Archive photograph" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%" }} />
          </div>
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/star-t0E9JWLbjVAvQ0C8SGFbNOZsxQkFRA.png" alt="Star" className="star-tablet" style={{ position: "fixed", top: -8, left: "calc(52% - 80px)", width: 160, height: "auto", zIndex: 20 }} />
          <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 30, display: "flex", justifyContent: "flex-end", alignItems: "baseline", gap: "1.5rem", padding: "1rem 1.5rem" }}>
            <NavItem color="light" underlineColor="#f4f1ea" onClick={() => archiveOpen ? navigateTo("home") : navigateTo("archive")}>{archiveOpen ? "(home)" : "(archive)"}</NavItem>
            <NavItem color="light" underlineColor="#f4f1ea">(materials)</NavItem>
            <NavItem color="light" underlineColor="#f4f1ea" onClick={() => aboutOpen ? navigateTo("home") : navigateTo("about")}>{aboutOpen ? "(home)" : "(about)"}</NavItem>
          </nav>
          <div style={{ position: "fixed", bottom: "6%", right: "1.5rem", zIndex: 30, display: "flex", alignItems: "baseline", gap: "0.7rem" }}>
            <span style={{ fontFamily: "'Courier New', Courier, monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff", fontWeight: 700 }}>NEWSLETTER</span>
            <input type="email" placeholder="(EMAIL)" style={{ fontFamily: "'Courier New', Courier, monospace", background: "transparent", border: "none", borderBottom: "1px solid rgba(255,255,255,0.5)", padding: "0.2rem 0.3rem", width: 120, fontSize: 11, color: "#ffffff", outline: "none" }} />
            <NewsletterButton />
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="mobile-layout">
        <div style={{ position: "fixed", inset: 0, overflow: "hidden", fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", background: "#0f0f0d" }}>
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/preview-kZ5kZ0VmqSPxrxbbEJLO1auLU6uuCG.webp" alt="Hero" style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} />
          <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.35)", zIndex: 1 }} />
          <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 30, display: "flex", justifyContent: "center", gap: "1.8rem", padding: "1.2rem 1rem" }}>
            <NavItem color="light" underlineColor="#f4f1ea">(archive)</NavItem>
            <NavItem color="light" underlineColor="#f4f1ea">(materials)</NavItem>
            <NavItem color="light" underlineColor="#f4f1ea">(about)</NavItem>
          </nav>
          <div style={{ position: "fixed", bottom: "5%", left: 0, right: 0, zIndex: 30, display: "flex", justifyContent: "center", alignItems: "baseline", gap: "0.6rem" }}>
            <span style={{ fontFamily: "'Courier New', Courier, monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(244,241,234,0.85)", fontWeight: 700 }}>NEWSLETTER</span>
            <input type="email" placeholder="(EMAIL)" style={{ fontFamily: "'Courier New', Courier, monospace", background: "transparent", border: "none", borderBottom: "1px solid rgba(255,255,255,0.5)", padding: "0.2rem 0.3rem", width: 120, fontSize: 11, color: "rgba(244,241,234,0.85)", outline: "none" }} />
            <button type="submit" style={{ fontFamily: "'Courier New', Courier, monospace", background: "none", border: "none", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(244,241,234,0.85)", fontWeight: 700 }}>SEND</button>
          </div>
        </div>
      </div>

      <style>{`
        input::placeholder { color: rgba(255,255,255,0.6); font-weight: 500; }
        .desktop-layout { display: none; }
        @media (min-width: 1025px) { .desktop-layout { display: block; } }
        .tablet-layout { display: none; }
        @media (min-width: 768px) and (max-width: 1024px) { .tablet-layout { display: block; } }
        .mobile-layout { display: none; }
        @media (max-width: 767px) { .mobile-layout { display: block; } }
        @media (min-width: 768px) { .mobile-layout { display: none !important; } }
        @media (min-width: 768px) and (max-width: 1280px) { .desktop-layout { display: block; } .tablet-layout { display: none; } }
        @media (min-width: 1025px) { .star-desktop { display: block !important; } }
        @media (max-width: 767px) { .star-desktop { display: none !important; } }
        @media (min-width: 768px) and (max-width: 1024px) { .star-tablet { display: block !important; width: 140px; top: -6px; left: calc(52% - 70px); } }
      `}</style>
    </>
  );
}
