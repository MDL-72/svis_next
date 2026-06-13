import SiteNav from "@/components/layout/site-nav";
import SiteFooter from "@/components/layout/site-footer";
import Messenger from "@/components/fb-messenger/messenger";

type SiteLayoutProps = {
  children: React.ReactNode;
};

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <>
      <SiteNav />
      <main>{children}</main>
      <Messenger />
      <SiteFooter />
    </>
  );
}
