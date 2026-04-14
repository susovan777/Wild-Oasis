import './global.css';
import Header from './_components/Header.jsx';
import { Josefin_Sans } from 'next/font/google';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  // title: "Wild Oasis | Travel Made Easy",
  title: {
    template: '%s | Wild Oasis',
    default: 'Welcome | Wild Oasis',
  },
  description:
    'Luxarious cabin hotel, surrounded by beautiful mountains and dark forest',
  icons: {
    icon: '/icon.png', // custom location
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col min-h-screen bg-primary-950 text-primary-50 antialiased ${josefin.className}`}
      >
        <Header />
        <main className="flex-1 grid">{children}</main>
      </body>
    </html>
  );
}
