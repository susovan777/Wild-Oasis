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
      <body className={`${josefin.className} min-h-screen `}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
