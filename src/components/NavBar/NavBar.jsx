import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { Briefcase, DownloadSimple, User, Envelope, LinkedinLogo, Phone } from "@phosphor-icons/react";
import { preloadRoute } from "../../utils/routePreload";
import { siteConfig } from "../../data";

gsap.registerPlugin(SplitText);



const getMenuLinkHandlers = (path) => ({
  onMouseEnter: () => preloadRoute(path),
  onFocus: () => preloadRoute(path),
  onTouchStart: () => preloadRoute(path),
});

const NavBar = () => {
  const { navigation, person } = siteConfig;
  const location = useLocation();
  const menuRef = useRef(null);
  const contactDropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [copiedItem, setCopiedItem] = useState(null);
  const isAnimating = useRef(false);
  const footerSplitTexts = useRef([]);
  
  const linkedinUrl = "https://www.linkedin.com/in/himanshi22/";

  const handleCopy = (e, item, text) => {
    e.preventDefault();
    navigator.clipboard.writeText(text);
    setCopiedItem(item);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu(true);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!contactDropdownRef.current) return;

    gsap.set(contactDropdownRef.current, {
      opacity: 0,
      y: 10,
      pointerEvents: "none"
    });

    const footerElements = contactDropdownRef.current.querySelectorAll(".dropdown-item-subtitle");
    footerElements.forEach((element) => {
      if (!element.textContent?.trim()) return;
      const split = new SplitText(element, { type: "chars" });
      footerSplitTexts.current.push(split);
      gsap.set(split.chars, { opacity: 0, y: 5 });
    });

    const footerSplitTextInstances = footerSplitTexts.current;

    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        menuRef.current?.classList.add("hidden");
        closeMenu(true);
      } else {
        menuRef.current?.classList.remove("hidden");
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      footerSplitTextInstances.forEach((s) => s.revert());
    };
  }, []);

  const openMenu = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setIsOpen(true);

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimating.current = false;
      },
    });

    tl.to(contactDropdownRef.current, {
      duration: 0.4,
      y: 0,
      opacity: 1,
      pointerEvents: "auto",
      ease: "power3.out",
    });

    const allFooterChars = footerSplitTexts.current.flatMap((s) => s.chars);
    tl.to(allFooterChars, {
      opacity: 1,
      y: 0,
      duration: 0.3,
      stagger: 0.015,
      ease: "power2.out",
    }, "<0.1");
  };

  const closeMenu = (immediate = false) => {
    if (isAnimating.current) return;

    if (immediate) {
      isAnimating.current = false;
      setIsOpen(false);
      gsap.killTweensOf(contactDropdownRef.current);
      gsap.set(contactDropdownRef.current, { y: 10, opacity: 0, pointerEvents: "none" });
      const allFooterChars = footerSplitTexts.current.flatMap((s) => s.chars);
      gsap.killTweensOf(allFooterChars);
      gsap.set(allFooterChars, { opacity: 0, y: 5 });
      return;
    }

    isAnimating.current = true;
    setIsOpen(false);

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimating.current = false;
      },
    });

    tl.to(contactDropdownRef.current, {
      duration: 0.3,
      y: 10,
      opacity: 0,
      pointerEvents: "none",
      ease: "power3.in",
      onComplete: () => {
        const allFooterChars = footerSplitTexts.current.flatMap((s) => s.chars);
        gsap.set(allFooterChars, { opacity: 0, y: 5 });
      }
    });
  };

  const toggleMenu = () => {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  // Close dropdown on route change
  useEffect(() => {
    closeMenu(true);
  }, [location.pathname, location.hash]);

  return (
    <>
      <header className="header-nav" ref={menuRef}>
        <div className="header-inner">
          <nav className="header-center">
            <Link 
              to="/#case-studies" 
              className="nav-link" 
              onClick={(e) => {
                if (location.pathname === "/") {
                  e.preventDefault();
                  document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              {...getMenuLinkHandlers("/#case-studies")}
            >
              <span className="nav-text">Work</span>
              <span className="nav-icon"><Briefcase weight="bold" /></span>
            </Link>
            <a href={navigation.resumePath} download="Himanshi_Jain_Resume.pdf" className="nav-link">
              <span className="nav-text">Resume</span>
              <span className="nav-icon"><DownloadSimple weight="bold" /></span>
            </a>
            <Link to="/about" className="nav-link" {...getMenuLinkHandlers("/about")}>
              <span className="nav-text">About</span>
              <span className="nav-icon"><User weight="bold" /></span>
            </Link>
          </nav>

          <div className="header-right contact-dropdown-container">
            <button className="contact-cta" onClick={toggleMenu} aria-expanded={isOpen}>
              Contact
            </button>
              <div className="contact-dropdown" ref={contactDropdownRef}>
              <a href="#" onClick={(e) => handleCopy(e, 'email', person.email)} className="contact-dropdown-item">
                <div className="dropdown-item-icon">
                  <Envelope size={24} weight="regular" />
                </div>
                <div className="dropdown-item-content">
                  <span className="dropdown-item-title">Email</span>
                  <span className="dropdown-item-subtitle">{copiedItem === 'email' ? 'Copied to clipboard!' : person.email}</span>
                </div>
              </a>
              <a href={linkedinUrl} target="_blank" rel="noreferrer" className="contact-dropdown-item">
                <div className="dropdown-item-icon">
                  <LinkedinLogo size={24} weight="regular" />
                </div>
                <div className="dropdown-item-content">
                  <span className="dropdown-item-title">LinkedIn</span>
                  <span className="dropdown-item-subtitle">{linkedinUrl.replace("https://www.", "")}</span>
                </div>
              </a>
              <a href="#" onClick={(e) => handleCopy(e, 'phone', '+91 8401451216')} className="contact-dropdown-item">
                <div className="dropdown-item-icon">
                  <Phone size={24} weight="regular" />
                </div>
                <div className="dropdown-item-content">
                  <span className="dropdown-item-title">Phone</span>
                  <span className="dropdown-item-subtitle">{copiedItem === 'phone' ? 'Copied to clipboard!' : '+91 8401451216'}</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
