import type { Metadata } from "next";
import HeaderDesktop from "../Components/Headers/Desktop/HeaderDesktop";
import HeaderMobileHome from "../Components/Headers/Mobile/HeaderMobileHome";
import FooterDesktop from "../Components/Footers/FooterDesktop";
import FooterMobile from "../Components/Footers/FooterMobile";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderDesktop />
      <HeaderMobileHome />
      {children}
      <FooterDesktop />
      <FooterMobile />
    </>
  );
}
