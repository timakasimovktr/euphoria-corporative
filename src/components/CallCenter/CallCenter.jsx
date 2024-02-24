import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./CallCenter.scss";
import aboutUs from '../../images/AboutUsPic.png'
const CallCenter = () => {
  return (
    <>
      <Header />
      <div className="callcenter">
        <div className="callcenter-wrapper container">
          <h1>Колл-центр</h1>
          <div className="callcenter-info">
            <p>
              Мы гордимся тем, что с каждым днем удается изменять жизни наших
              клиентов к лучшему, поддерживая их в стремлении к активному образу
              жизни и наилучшему состоянию здоровья. Наши колл-центры всегда
              готовы предоставить вам высококвалифицированную консультацию и
              поддержку, а маркетинговая команда разрабатывает инновационные
              решения, которые делают продукты и услуги "Euphoria group"
              доступными и понятными для каждого.
            </p>
            <div className="callcenter-imgs">
                <img src={aboutUs} alt="" />
                <img src={aboutUs} alt="" />
                <img src={aboutUs} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CallCenter;
