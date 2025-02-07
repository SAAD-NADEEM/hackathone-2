import FooterDesktop from "../Components/Footers/FooterDesktop";
import HeaderDesktop from "../Components/Headers/Desktop/HeaderDesktop";
import HeaderMobileBase from "../Components/Headers/Mobile/HeaderMobileBase";
import SideBar from "../Components/SideBar";


export default function CategoryLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <HeaderDesktop />
            <HeaderMobileBase />
            <main className="ctn-width-base flex-1 grid lg:grid-cols-[auto_1fr] mx-auto px-6 lg:px-0">
                <SideBar />
                {children}
            </main>
            <FooterDesktop />
        </>
    );
}
