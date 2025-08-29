import "./global.css";
import { Poppins } from "next/font/google";

// Load Google Font with next/font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // choose weights you need
  variable: "--font-sans",       // maps to Tailwind's theme
});

export const metadata = {
  title: "Mysore Coffee Hub",
  description: "Your daily dose of authentic Mysore coffee ☕",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
