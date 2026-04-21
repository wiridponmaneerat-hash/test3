import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const navItems = [
  { label: "หน้าแรก", href: "#landingDiv", className: "is-home" },
  { label: "ข้อมูลของผู้\nรับการประเมิน", href: "#about" },
  { label: "ภาระงานเป็นไปตามที่\nก.ค.ศ กำหนด", href: "#work" },
  { label: "ด้านที่ 1\nด้านวิชาชีพ", href: "#work" },
  { label: "ด้านที่ 2\nด้านคุณลักษณะส่วนบุคคล", href: "#contact" },
  { label: "ด้านที่ 3\nด้านสังคม", href: "#contact" },
];

const Navbar = () => {
  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    const links = document.querySelectorAll(".header-nav a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        const target = element.getAttribute("data-href");
        if (!target) return;
        if (window.innerWidth > 1024) {
          const targetEl = document.querySelector(target);
          if (!targetEl) return;
          e.preventDefault();
          smoother.scrollTo(target, true, "top top");
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
  }, []);
  return (
    <>
      <div className="header">
        <nav className="header-nav" aria-label="Main navigation">
          <ul>
            {navItems.map((item) => (
              <li key={item.label} className={item.className || ""}>
                <a data-href={item.href} href={item.href}>
                  {item.label.split("\n").map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
