//! THIS PAGE IS ROOT LAYOUT AND IS REQUIRED.

// Imported global CSS file
import '@/app/ui/global.css';
// Fonts
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Tailwind Antialised : Smooths out the font */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
