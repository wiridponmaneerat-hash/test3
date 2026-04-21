import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";



const Work = () => {
  const works = [
    {
      title: "สร้างเกม Scratch",
      desc: "นักเรียนออกแบบเกมเอง",
      image: "/images/work1.jpg"
    },
    {
      title: "โปรเจกต์ IoT",
      desc: "ควบคุมไฟผ่านมือถือ",
      image: "/images/work2.jpg"
    },
    {
      title: "เว็บไซต์ผลงาน",
      desc: "นักเรียนสร้างเว็บตัวเอง",
      image: "/images/work3.jpg"
    },
    {
      title: "เว็บไซต์ผลงาน",
      desc: "นักเรียนสร้างเว็บตัวเอง",
      image: "/images/work3.jpg"
    },
    {
      title: "เว็บไซต์ผลงาน",
      desc: "นักเรียนสร้างเว็บตัวเอง",
      image: "/images/work3.jpg"
    }
  ];
  useEffect(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          ผลงาน <span>ของฉัน</span>
        </h2>
        <div className="work-flex">
          {works.map((work, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{String(index + 1).padStart(2, "0")}</h3>

                  <div>
                    <h4>{work.title}</h4>
                    <p>{work.desc}</p>
                  </div>
                </div>
              </div>
              <WorkImage image={work.image} alt={work.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
