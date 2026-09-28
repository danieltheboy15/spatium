import React from "react";
import { useLocation } from "react-router-dom";

const BANNER_MAPPING: Record<string, { text: string; href: string }> = {
  "/": {
    text: "Click here to take advantage of $99/Monthly unlimited care membership!",
    href: "https://app.clientforge-ai.com/spatium-book",
  },
  "/body-sculpting": {
    text: "Click here to take advantage of 50% off EMSCULPT NEO session now!",
    href: "https://app.clientforge-ai.com/spatium-book",
  },
  "/weight-loss-program-spatium": {
    text: "Click here to take advantage of $199 promotional offer on GLP-1!",
    href: "https://app.clientforge-ai.com/spatium-book",
  },
  "/dawn-primary-care-service": {
    text: "Click here to take advantage of $99/Monthly unlimited care membership!",
    href: "https://app.clientforge-ai.com/spatium-book",
  },
};

export const TopBanner: React.FC = () => {
  const { pathname } = useLocation();
  const banner = BANNER_MAPPING[pathname];

  if (!banner) return null;

  return (
    <a
      href={banner.href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-[72px] left-0 right-0 z-40 flex items-center justify-center gap-2 bg-destructive text-white py-2.5 px-4 text-sm font-semibold hover:bg-destructive/90 transition-colors cursor-pointer"
    >
      <span className="animate-pulse text-lg leading-none">🔥</span>
      <span>{banner.text}</span>
    </a>
  );
};
