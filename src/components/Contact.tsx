import { MdArrowOutward } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>ติดต่อ</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>อีเมล</h4>
            <p>
              <a href="wiridpon11234@gmail.com" data-cursor="disable">
                wiridpon11234@gmail.com
              </a>
            </p>
            <h4>โทรศัพท์</h4>
            <p>
              <a href="tel:0917844365" data-cursor="disable">
                0917844365
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>โซเชียล</h4>
            <a
              href="https://github.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              กิตฮับ <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              ลิงก์อิน <MdArrowOutward />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              ทวิตเตอร์ <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              อินสตาแกรม <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              ออกแบบและพัฒนาเว็บไซต์ <br /> โดย <span>วิริทธิ์พล แก้วดวงจันทร์</span>
            </h2>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
