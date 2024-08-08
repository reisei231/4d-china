import "./globals.css";
import Nav from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
// import Header from 'next/headers'
import Script from "next/script";
export const viewport = {
  initialScale: 1,
  userScalable: "no"
}
import localFont from "next/font/local";
import { ModalProvider } from "../../context/modal.context";


const myFont = localFont({ src: './../../public/fonts/Yahei.ttf' })

export default function RootLayout({ children }) {
  // return (
  //       <div className="main-container" style={{position:"relative"}}>
  //       <Nav/>
  //       {children}
  //       <Footer/>
  //       </div>
  // );

  return (
    <html lang="en">
      <body>
        <main className={`${myFont.className} main-container`} style={{position: 'relative'}}>
          <Nav />
          <ModalProvider>
          {children}
          </ModalProvider>
          <Script type="text/javascript" src="/2y7gmddrojat.js" />
          <Footer/>
        </main>
        <Script type="text/javascript" src="/2y7gmddrojat.js" />
      </body>
    </html>
  );
}
