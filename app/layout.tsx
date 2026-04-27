import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Learn Bengali for Rachel",
  description: "Conversation-first Bengali lessons in English letters"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-slate-200 bg-white">
          <nav className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
            <Link href="/" className="font-semibold">Learn Bengali</Link>
            <div className="flex gap-4 text-sm">
              <Link href="/learn">Learn</Link>
              <Link href="/progress">Progress</Link>
              <Link href="/review/mistakes">Mistakes</Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-4xl p-4">{children}</main>
      </body>
    </html>
  );
}
