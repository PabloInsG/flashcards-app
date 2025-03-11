import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col items-center gap-10 p-8 pb-20 ">
          <h1 className="text-2xl"><Link href="/">Tarjetas de memorizacion</Link></h1>
        {children}
        </div>
      </body>
    </html>
  );
}
