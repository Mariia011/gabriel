import "./globals.css";

export const metadata = {
  title: "Gabriel Record Studio",
  description: "My first project using next js and tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
