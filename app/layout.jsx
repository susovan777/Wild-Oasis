import './global.css'
import { Josefin_Sans } from 'next/font/google';
import Header from './_components/Header.jsx';

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
      <body className={`${josefin.className} antialiased flex flex-col min-h-screen bg-gray-900 text-primary-50`}>
        <Header />
        <main className='max-w-7xl mx-auto flex-1 px-8 py-12'>{children}</main>
      </body>
    </html>
  );
}
