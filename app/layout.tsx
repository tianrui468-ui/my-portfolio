import type { Metadata } from "next";
import "./globals.css";
import { EditProvider } from "@/context/EditContext";
import EditToggle from "@/components/edit-toggle";
import CursorEffects from "@/components/cursor";

export const metadata: Metadata = {
  title: "个人作品集 - 开发者与设计师",
  description: "展示Web开发项目的个人作品集和博客",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <EditProvider>
          {/* <EditToggle /> */}
          <CursorEffects />
          {children}
        </EditProvider>
      </body>
    </html>
  );
}
