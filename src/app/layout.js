import "./globals.css";
import Footer from "../components/Footer"; // Import Footer component

export const metadata = {
  title: "Cyclades Records",
  description: "A new electronic blend is rising.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header Section */}
        <header className="top-left-logo">
          <a href="/">
            <img src="/cyclades_logo_white.png" alt="Cyclades Records Logo" />
          </a>
        </header>

        {/* Main Content */}
        {children}

        {/* Footer Section */}
        <Footer />
      </body>
    </html>
  );
}
