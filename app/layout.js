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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
