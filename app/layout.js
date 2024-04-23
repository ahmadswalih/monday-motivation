import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Monday Motivation",
  description:
    "The application will list a monday motivation quote and a timer until the next weekend.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Reenie+Beanie&display=swap"
          rel="stylesheet"
        />
      </head>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-Q1QP8RE5WX"
      ></script>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-Q1QP8RE5WX"
      ></script>
      <script>
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-Q1QP8RE5WX');
      </script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
