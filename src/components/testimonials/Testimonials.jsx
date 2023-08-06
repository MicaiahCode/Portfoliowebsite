import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/JOKER.png";
import AVTR2 from "../../assets/JOKER.png";
import AVTR3 from "../../assets/JOKER.png";
import AVTR4 from "../../assets/JOKER.png";

const Testimonials = () => {
  return (
    <section>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="" />
          </div>
          <h5 className="client__name">Earnest Achiever</h5>
           <small className="client__review">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates illum sunt hic explicabo laborum, temporibus accusantium dignissimos perspiciatis possimus repellendus itaque ea dolore earum quam sit nobis in, libero voluptatum?</small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="" />
          </div>
          <h5 className="client__name">Earnest Achiever</h5>
           <small className="client__review">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates illum sunt hic explicabo laborum, temporibus accusantium dignissimos perspiciatis possimus repellendus itaque ea dolore earum quam sit nobis in, libero voluptatum?</small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="" />
          </div>
          <h5 className="client__name">Earnest Achiever</h5>
           <small className="client__review">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates illum sunt hic explicabo laborum, temporibus accusantium dignissimos perspiciatis possimus repellendus itaque ea dolore earum quam sit nobis in, libero voluptatum?</small>
        </article>
        
      </div>
    </section>
  );
};

export default Testimonials;
