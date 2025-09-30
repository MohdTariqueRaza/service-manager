import { useEffect, useState } from "react";
import PageHeading from "../ui/PageHeading";
import Contacts from "../features/contact/Contacts";
import Message from "../features/contact/Message";
import ContactForm from "../features/contact/ContactForm";
import LetsTalk from "../features/contact/LetsTalk";

const Contact = () => {
  const [submittedData, setSubmittedData] = useState(null);

  useEffect(() => {
    document.title = "Service Manager - Contact Us";
    return () => {
      document.title = "Service Manager – Services & Blog Portal";
    };
  }, []);

  return (
    <div className="min-h-screen pb-12 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <PageHeading
            description="Ready to transform your business? Let's discuss how we can help you
            achieve your goals."
          >
            Get In <span className="text-gradient">Touch</span>
          </PageHeading>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <LetsTalk />
            <Contacts />
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            {submittedData ? (
              <Message setSubmittedData={setSubmittedData} />
            ) : (
              <ContactForm setSubmittedData={setSubmittedData} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
