export const metadata = {
  title: "Adder",
  description: "Add two numbers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
