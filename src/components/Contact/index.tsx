import person from "../../assets/contact/contactImg.webp";
import style from "./style.module.css";

function Contact() {
  return (
    <div className={style.containerContact}>
      <picture className={style.picture}>
        <img className={style.img} src={person} alt="person " />
      </picture>
      <div className={style.containerItems}>
        <h2 className={style.title}>Contact Me !</h2>
        <ul className={style.list}>
          <li>
            <p>marcialfantini@gmail.com</p>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/marcial-fantini-8692b8290/">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
