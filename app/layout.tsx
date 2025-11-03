import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agent Chat ? Explained Clearly",
  description: "Understand agent chat: what it is, how it works, and when to use it.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header className="site-header">
            <div className="brand">Agent Chat</div>
            <nav className="nav">
              <a href="#what">What</a>
              <a href="#why">Why</a>
              <a href="#how">How</a>
              <a href="#when">When</a>
              <a href="#faq">FAQ</a>
            </nav>
          </header>
          <main>{children}</main>
          <footer className="site-footer">
            <span>? {new Date().getFullYear()} Agent Chat</span>
          </footer>
        </div>
      </body>
    </html>
  );
}
