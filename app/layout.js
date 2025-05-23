
import Navbar from "./components/Navbar";
import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <header className="fixed z-[9999]">
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
