import Header from "@/components/Header";
export const dynamic = "force-dynamic";
import "./globals.css";
import { ThemeProvider } from "@/components/DarkMode/DarkMode";
export const metadata = {
  title: "Tattoo Location",
  description: "Find the perfect tattoo location",
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
          <main className="min-h-screen max-w-screen-xl flex flex-col items-center">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
