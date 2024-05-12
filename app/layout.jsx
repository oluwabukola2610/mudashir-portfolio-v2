import { Outfit } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Hero from "@/components/Hero";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://stephen-adeniji.vercel.app/"),

  title: {
    template: "Mudashir Roheemoh| %s",
    default: "Mudashir Roheemoh| Home",
  },
  description: `Mudashir Roheemoh's Portfolio Website`,
  verification: {
    google: "-l_9xMDmPYXcaA9WW6Xv3IoS2AqNaAzn1B6lTKIndpU",
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
    { name: "Roheemoh", url: "https://stephen-adeniji.vercel.app/" },
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
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta
          name="google-site-verification"
          content="-l_9xMDmPYXcaA9WW6Xv3IoS2AqNaAzn1B6lTKIndpU"
        />
      </Head>
      <body className={outfit.className}>
          <div className="mx-auto max-w-screen-xl flex flex-col justify-center">
            <div className="grid grid-cols-1  md:grid-cols-[45%50%] gap-8 justify-center">
              <Hero />
              {children}{" "}
            </div>
          </div>
      </body>
    </html>
  );
}
