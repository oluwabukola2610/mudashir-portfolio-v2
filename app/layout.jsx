import { Outfit } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Header from "@/components/Header";
import { ProgressBarProvider, ThemeProvider } from "@/components/Providers";
import BackToTopButton from "@/components/BackToTopButton";
import Footer from "@/components/Footer";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://mudashir-roheemoh.vercel.app/"),

  title: {
    template: "Mudashir Roheemoh| %s",
    default: "Mudashir Roheemoh| Home",
  },
  description: `Mudashir Roheemoh's Portfolio Website`,
  verification: {
    google: "K5Ps2Gi-DdTPMs4js_p7qNkIgDR9OHAV7-TnHMpV7RU",
  },
  referrer: "origin-when-cross-origin",
  keywords: [
    "Mudashir",
    "Oluwabukola",
    "Roheemoh",
    "Mudashir Roheemoh ",
    "Mudashir Oluwabukola Roheemoh",
    "Portfolio",
    "Projects",
    "Contact",
    "Website",
    "Portfolio Website",
  ],
  authors: [
    { name: "Mudashir" },
    { name: "Roheemoh", url: "https://mudashir-roheemoh.vercel.app/" },
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  openGraph: {
    images: "/opengraph-image.jpg",
    title: "Mudashir Roheemoh | Developer Extraordinaire",

    description:
      "Welcome to my digital hub! Explore my projects, journey, and passion for turning ideas into reality with code.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta
          name="google-site-verification"
          content="K5Ps2Gi-DdTPMs4js_p7qNkIgDR9OHAV7-TnHMpV7RU"
        />
      </Head>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <ProgressBarProvider>
            <Header />
            {children}
            <BackToTopButton />
            <Footer />
          </ProgressBarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
