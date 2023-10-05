import Header from "@/components/Header";
export const dynamic = "force-dynamic";
import "./globals.css";
import { ThemeProvider } from "@/components/DarkMode/DarkMode";
export const metadata = {
  title: "TattooNest",
  description:
    "Discover the top tattoo studios near you on TattooNest. Explore a diverse selection of talented artists and unique designs. Find your next tattoo and book your appointment today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="max-w-screen-xl m-auto flex flex-col items-center">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
