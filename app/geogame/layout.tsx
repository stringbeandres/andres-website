import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GeoGame",
};

export default function GeoGameLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
