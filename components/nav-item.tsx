"use client";

import { useState } from "react";

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

export default function NavItem({
  children,
  color,
  underlineColor,
}: {
  children: React.ReactNode;
  color: string;
  underlineColor: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...NAV_FONT,
        color: hovered
          ? color === "dark"
            ? "#000000"
            : "#ffffff"
          : color === "dark"
            ? "rgba(10,10,10,0.6)"
            : "rgba(244,241,234,0.85)",
      }}
    >
      {children}

      <span
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: hovered ? "100%" : "0%",
          height: "0.5px",
          background: underlineColor,
          transition: "width 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
          display: "block",
        }}
      />
    </span>
  );
}