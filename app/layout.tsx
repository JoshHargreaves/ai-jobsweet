"use client";
import Header from "@/components/Header/header";
import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar/sidebar";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [show, setShow] = useState(false);
  const [profile, setProfile] = useState(false);
  const [menu, setMenu] = useState(false);
  const [menu1, setMenu1] = useState(false);
  const [menu2, setMenu2] = useState(false);
  const [menu3, setMenu3] = useState(false);
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full h-full bg-gray-200">
          <div className="flex flex-no-wrap">
            <Sidebar show={show} setShow={setShow}></Sidebar>
            <div className="w-full">
              <Header show={show} setShow={setShow}></Header>
              <div className="container mx-auto py-10  w-full px-6">
                <div className="w-full h-full border-gray-300">
                  <main className="grid min-h-screen text-slate-900 justify-center gap-4 overflow-hidden">
                    {children}
                  </main>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
