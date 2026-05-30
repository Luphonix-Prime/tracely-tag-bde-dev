import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
// @ts-ignore: side-effect import for global CSS
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingOptimizer from "@/components/LoadingOptimizer";
import LoadingScreen from "@/components/LoadingScreen";
import {
  generateMetadata as genMeta,
  generateOrganizationSchema,
  generateWebsiteSchema,
} from "@/lib/metadata";
import { GoogleAnalytics } from "@next/third-parties/google";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = genMeta({
  title: "TracelyTag",
  description:
    "Digital Identity For Every Product. Enable product transparency and authenticity with TracelyTag's GS1-compliant smart tagging platform.",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <html lang="en" suppressHydrationWarning className="snap-y snap-proximity scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <link rel="icon" href="/images/logo-icon.png" sizes="any" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingScreen />
          <LoadingOptimizer />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-EXQH24QS39" />
    </html>
  );
}
