//! THIS PAGE IS ROOT LAYOUT AND IS REQUIRED.

// Imported global CSS file
import '@/app/ui/global.css';
// Fonts
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

// Creates global Metadata, we can overwrite if we want to change it for spesific page
export const metadata: Metadata = {
  title: {
    // % in the template will be replaced with the spesific title
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

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
