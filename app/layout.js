export const metadata = {
  title: "Wild Oasis | Travel Made Easy",
  description: "Next App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
