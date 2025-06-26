import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <header>
        <Link href="/">Home</Link>
        <Link href="/raffle">Raffle</Link>
      </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
