import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import AuthSessionProvider from "@/components/auth/AuthSessionProvider";
// import WaterBubbleBg from "@/components/WaterBubbleBg";
// import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-sans" });
const ibmPlex = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Lumora - The Future of Tech Learning",
  description: "Build real tech skills through mentorship, projects, accountability, and community-driven growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlex.variable} font-sans min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-foreground relative`}>
        {/* <CustomCursor /> */}
        {/* <WaterBubbleBg /> */}
        <div className="relative z-10">
          <AuthSessionProvider>
            {children}
          </AuthSessionProvider>
        </div>
      </body>
    </html>
  );
}
