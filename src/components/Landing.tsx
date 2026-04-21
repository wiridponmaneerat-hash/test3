import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>สวัสดี! ฉันคือ</h2>
            <h1>
              วิริทธิ์พล
              <br />
              <span>แก้วดวงจันทร์</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>ครูผู้สร้างสรรค์</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">นักออกแบบ</div>
              <div className="landing-h2-2">นักพัฒนา</div>
            </h2>
            <h2>
              <div className="landing-h2-info">นักพัฒนา</div>
              <div className="landing-h2-info-1">นักออกแบบ</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
