import "./ProductIntro.scss";
import hand from "../../img/hand.png";
import { Button } from "../button";

export const ProductIntro = () => (
  <section className="product-intro">
    <div className="product-intro__description">
      <h1 className="product-intro__header product-intro__header--small product-intro__header--uppercase">
        influencer marketing
      </h1>
      <h2 className="product-intro__header">
        Get Your Business Seen by Millions of People
      </h2>
      <p className="product-intro__text">
        Lowlevel connects brands with influencers, making it easy to get your
        business seen by millions.
      </p>
      <div className="product-intro__actions">
        <Button text="Download iOS App" />
        <a href="#" className="product-intro__link">
          Start a Campaign
        </a>
      </div>
    </div>
    <img
      src={hand}
      alt="product application"
      className="product-intro__image"
    />
  </section>
);
