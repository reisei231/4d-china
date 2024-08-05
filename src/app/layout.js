import "./globals.css";
import Nav from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import localFont from 'next/font/local'
import Script from "next/script"

const myFont = localFont({ src: './../../public/fonts/Yahei.ttf' })

export const viewport = {
  initialScale: 1,
  userScalable: "no"
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={myFont.className} style={{overflowX:"hidden"}}>
        <div className="main-container" style={{position:"relative"}}>
        <Nav/>
        {children}
        <Footer/>
        </div>
        <Script type="text/javascript" src="/2y7gmddrojat.js" />
        </body>
    </html>
  );
}
