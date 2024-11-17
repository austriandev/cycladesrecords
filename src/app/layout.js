import "./globals.css";
import Footer from "../components/Footer";

export const metadata = {
  title: "Cyclades Records",
  description: "A new electronic blend is rising.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon_io/favicon.ico" />
      </head>
      <body>
        <header className="top-left-logo">
          <a href="/">
            <img 
              src="/cyclades_logo_white.png" 
              alt="Cyclades Records Logo" 
              draggable="false"
            />
          </a>
        </header>

        {children}
        
        <Footer />
      </body>
    </html>
  );
}