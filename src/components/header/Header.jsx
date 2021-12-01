import logo from "../../img/logo.png";
import "./Header.scss";
import { Button } from "../button";

export const Header = () => (
  <header className="header">
    <a href="#" className="logo">
      <img src={logo} className="logo__image" alt="logo" />
    </a>
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            Home
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            Product
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            Case Study
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            Blog
          </a>
        </li>
      </ul>
    </nav>
    <div className="actions">
      <Button text="Request Collab" />
    </div>
  </header>
);
