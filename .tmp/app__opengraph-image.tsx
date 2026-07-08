import { ImageResponse } from "next/og";
export const runtime = "edge";
export const alt = "Velora Studio — אתרים שנבנים סביב הסיבה שהלקוח אמור לבחור בך";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() { return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 70, color: "white", background: "linear-gradient(135deg,#11131A 0%,#24106D 65%,#4F46E5 100%)", fontFamily: "Arial", direction: "rtl" }}><div style={{ display: "flex", fontSize: 24, fontWeight: 700, letterSpacing: 5 }}>VELORA STUDIO</div><div style={{ display: "flex", flexDirection: "column", maxWidth: 950 }}><div style={{ display: "flex", fontSize: 64, fontWeight: 800, lineHeight: 1.15 }}>לא מתחילים מתבנית.</div><div style={{ display: "flex", fontSize: 56, lineHeight: 1.2, color: "#C7D2FE" }}>מתחילים מהסיבה שהלקוח אמור לבחור בך.</div></div><div style={{ display: "flex", fontSize: 21, color: "#CBD5E1" }}>Strategy · Copy · Design · Development · Motion</div></div>, size); }
