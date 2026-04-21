import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          สิ่ง<span className="hat-h2">ที่</span>
          <div>
            ฉัน<span className="do-h2"> ทำ</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>พัฒนา</h3>
              <h4>รายละเอียด</h4>
              <p>
                พัฒนาเว็บไซต์และสื่อการเรียนรู้แบบโต้ตอบ เพื่อให้ผู้เรียนเข้าถึง
                เนื้อหาได้ง่าย ใช้งานจริงได้ และมีประสบการณ์ที่ดี
              </p>
              <h5>ทักษะและเครื่องมือ</h5>
              <div className="what-content-flex">
                <div className="what-tags">จาวาสคริปต์</div>
                <div className="what-tags">ไทป์สคริปต์</div>
                <div className="what-tags">ทรีเจเอส</div>
                <div className="what-tags">รีแอ็กต์</div>
                <div className="what-tags">ซีเอสเอส</div>
                <div className="what-tags">โหนดเจเอส</div>
                <div className="what-tags">เน็กซ์เจเอส</div>
                <div className="what-tags">เอ็กซ์เพรสเจเอส</div>
                <div className="what-tags">พีเอชพี</div>
                <div className="what-tags">มายเอสคิวแอล</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>ออกแบบ</h3>
              <h4>รายละเอียด</h4>
              <p>
                ออกแบบประสบการณ์การเรียนรู้และงานภาพให้สื่อสารชัดเจน สวยงาม
                และเหมาะสมกับบริบทของผู้เรียน
              </p>
              <h5>ทักษะและเครื่องมือ</h5>
              <div className="what-content-flex">
                <div className="what-tags">เบลนเดอร์</div>
                <div className="what-tags">ซีบรัช</div>
                <div className="what-tags">ออกแบบส่วนติดต่อผู้ใช้</div>
                <div className="what-tags">โมชั่น</div>
                <div className="what-tags">ริกกิง</div>
                <div className="what-tags">แอนิเมชันสามมิติ</div>
                <div className="what-tags">ออกแบบตัวละคร</div>
                <div className="what-tags">ปั้นโมเดล</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
