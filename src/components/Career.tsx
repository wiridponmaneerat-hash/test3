import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          ประวัติการศึกษา
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ตำแหน่งงาน</h4>
                <h5>ชื่อหน่วยงาน</h5>
              </div>
              <h3>20XX</h3>
            </div>
            <p>
              รับผิดชอบงานด้านการจัดการเรียนรู้ การพัฒนาหลักสูตร และการใช้
              เทคโนโลยีเพื่อยกระดับผลสัมฤทธิ์ของผู้เรียนอย่างต่อเนื่อง
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ตำแหน่งงาน</h4>
                <h5>ชื่อหน่วยงาน</h5>
              </div>
              <h3>20XX</h3>
            </div>
            <p>
              พัฒนาสื่อการสอนและโครงงานเชิงปฏิบัติให้สอดคล้องกับมาตรฐาน
              การศึกษา พร้อมส่งเสริมทักษะดิจิทัลของผู้เรียน
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ตำแหน่งงาน</h4>
                <h5>ชื่อหน่วยงาน</h5>
              </div>
              <h3>ปัจจุบัน</h3>
            </div>
            <p>
              มุ่งเน้นการพัฒนานวัตกรรมการสอนและดูแลผู้เรียนแบบองค์รวม เพื่อ
              สร้างผลลัพธ์ที่ยั่งยืนทั้งด้านวิชาการและคุณลักษณะอันพึงประสงค์
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
