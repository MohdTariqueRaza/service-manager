import { useState } from "react";
import FooterQuickLinks from "./FooterQuickLinks";
import FooterServices from "./FooterServices";
import ContactInfo from "./ContactInfo";
import FooterBottomBar from "./FooterBottomBar";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import Subscribe from "./Subscribe";
import NewsletterForm from "./NewsletterForm";
import Heading from "./Heading";

const Footer = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <Logo />
              <p className="text-gray-300 mb-6 leading-relaxed mt-6">
                Transforming businesses with innovative solutions and
                exceptional service delivery. We help you achieve your goals
                with cutting-edge technology and expert guidance.
              </p>
              <SocialLinks />
            </div>
            <FooterQuickLinks />
            <FooterServices />
            <div>
              <Heading>Stay Updated</Heading>
              <div className="mb-6">
                {isSubscribed ? (
                  <Subscribe />
                ) : (
                  <NewsletterForm setIsSubscribed={setIsSubscribed} />
                )}
              </div>
              <ContactInfo />
            </div>
          </div>
        </div>
        <FooterBottomBar />
      </div>
    </footer>
  );
};

export default Footer;
