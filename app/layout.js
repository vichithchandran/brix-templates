import {
  Poppins,
  Monomaniac_One,
  Montserrat,
  Open_Sans,
} from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const monomaniac = Monomaniac_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-monomaniac",
});

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-opensans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${monomaniac.variable} ${montserrat.variable} ${openSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
