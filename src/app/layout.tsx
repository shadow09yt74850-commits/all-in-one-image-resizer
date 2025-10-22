// src/app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'All-in-One Image Resizer',
  description: 'Resize and compress images easily',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console verification meta tag */}
        <meta name="google-site-verification" content="2uAkDfXAO16opMrA1-ds2pPWbVEysp0pyuYELBjp4Rs" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
