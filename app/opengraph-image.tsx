import { ImageResponse } from "next/og";
import { copy } from "@/lib/data";

export const runtime = "edge";
export const alt = copy.metadata.opengraphAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 70, color: "white", background: "linear-gradient(135deg,#11131A 0%,#24106D 65%,#4F46E5 100%)", fontFamily: "Arial", direction: "rtl" }}>
      <div style={{ display: "flex", fontSize: 24, fontWeight: 700, letterSpacing: 5 }}>{copy.brand.name.toUpperCase()}</div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 950 }}>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 800, lineHeight: 1.15 }}>{copy.metadata.opengraphTitleLine1}</div>
        <div style={{ display: "flex", fontSize: 56, lineHeight: 1.2, color: "#C7D2FE" }}>{copy.metadata.opengraphTitleLine2}</div>
      </div>
      <div style={{ display: "flex", fontSize: 21, color: "#CBD5E1" }}>{copy.metadata.opengraphFooter}</div>
    </div>,
    size
  );
}
