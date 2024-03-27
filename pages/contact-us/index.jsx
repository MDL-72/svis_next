import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const ContactUsForm = dynamic(() => import("../../components/contactForm/contactUsForm"));

const LottieAnimation = dynamic(() => import("../../components/lottie/LottieAnimation"));

export default function ContactsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="contacts__cont">
        <div className="contacts__asset__cont">
          <LottieAnimation animationJson={"lottie-contact"} />
        </div>
        <div className="contacts__form__cont">
          <ContactUsForm />
        </div>
      </div>
      <div className="contacts__map__cont">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.30122759092!2d121.05583971521064!3d14.524754582824045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8b7b5da912f%3A0xbb59a2d2d382d8cd!2sSpring%20of%20Virtue%20Integrated%20School%2C%20Inc.!5e0!3m2!1sen!2sph!4v1669308461645!5m2!1sen!2sph"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="contacts__map__iframe"
          title="svis map"
        />
      </div>
    </>
  );
}
