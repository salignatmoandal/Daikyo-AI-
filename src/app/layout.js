import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create AI-Expense Tracker ",
  description: "SaaS Expense-Tracker ",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
    publishablekey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
    <html lang="en">
      <body className={inter.className}>{children}</body>
      
    </html>
    </ClerkProvider>
  );
}
