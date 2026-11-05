import Header from "./Header"; // Import your header component
import Footer from "./Footer"; // Import your footer component
import CookieConsentBanner from "./CookieConsentBanner";
import PromoPopup from "./PromoPopup";

function Layout({ children, faq }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer faq={faq} />
      <PromoPopup />
      {/* <CookieConsentBanner /> */}
    </>
  );
}

export default Layout;
