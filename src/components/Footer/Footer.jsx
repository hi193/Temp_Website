import React, { useEffect, useRef } from "react";
import "./Footer.css";

import { Link } from "react-router-dom";
import { siteConfig } from "../../data";
import { ArrowUpRight, Linkedin } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = ({ title }) => {
  const { person, contact, footer, navigation } = siteConfig;
  const linkedinUrl = navigation.socialLinks.find(link => link.label === "LinkedIn")?.href || "#";
  const footerRef = useRef(null);



  return (
    <div className="footer" ref={footerRef}>
      <div className="footer-row">
        <div className="footer-contact">
          <h3>
            {title || contact.header}
          </h3>

          <p className="secondary">
            {contact.description}
          </p>
        </div>

        <div className="footer-ctas">
          <a href={`mailto:${person.email}`} className="footer-cta-pill">
            {person.email} <ArrowUpRight size={18} />
          </a>
          <a href={navigation.resumePath} target="_blank" rel="noreferrer" className="footer-cta-pill">
            Download Resume <ArrowUpRight size={18} />
          </a>
          <a href={linkedinUrl} target="_blank" rel="noreferrer" className="footer-cta-icon footer-tooltip" data-tooltip="serious me">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
      <div className="footer-row">
        <div className="footer-copyright-line">
          <p className="primary sm">
            &copy; {person.fullName} {footer.copyrightYear}
          </p>
          <p className="primary sm">{footer.templateCredit}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
