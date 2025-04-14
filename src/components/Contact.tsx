import React, { useEffect, useRef } from "react";

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  // WhatsApp API URL
  const whatsappNumber = "+919729445577";
  const whatsappMessage = encodeURIComponent("Hello! I'm interested in your services.");
  const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-24">
      <div className="max-container">
        <div ref={contactRef} className="opacity-0 translate-y-10 transition-all duration-700 ease-out">
          <h2 className="section-title mb-16 justify-center items-center text-center">Get in Touch</h2>

          <div className="max-w-lg mx-auto text-center">
            <p className="text-gray-600 mb-8 leading-relaxed">
              Have a project in mind or just want to say hello? We'd love to hear from you.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Email</h4>
                <a href="mailto:hello@taj.studio" className="text-gray-600 link-underline">
                info@jyotifilms.in
                </a>
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <p className="text-gray-600"><b>Head office</b>:HNo 237, near Govt. Hospital, Budhwal, Mahendergarh-HR123023</p>
                <p className="text-gray-600"><b>Corporate office</b>:Punch Market, Old Bus Stand, Behror, Rajsthan-301701</p>
              </div>
              <div>
                <h4 className="font-medium">Mobile</h4>
                <p className="text-gray-600">+919729445577</p>
              </div>
            </div>

            {/* WhatsApp Button */}
            <a href={whatsappURL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block bg-green-500 text-white px-4 py-2 rounded-md shadow hover:bg-green-600">
              Message us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
