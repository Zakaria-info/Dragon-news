import { Geist, Geist_Mono, Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable:"--font-poppins",
  subsets:["latin"],
  weight:["100","200","300","500","700","800"]
})
export const montserrat = Montserrat({
  variable:"--font-montserrat",
  subsets:["latin"],
  weight:["100","200","300","500","700","800"]
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dragon News",
  description: "Best News Portal in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${poppins.className}min-h-full flex flex-col`}>
        
        {children}
        
        </body>
    </html>
  );
}
