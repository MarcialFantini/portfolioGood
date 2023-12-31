import style from "./style.module.css";

interface PropsCard {
  url: string;
  title: string;
  text: string;
  isActive: boolean;
}

export function CardSkill(props: PropsCard) {
  return (
    <div
      className={
        style.cardContainer + " " + (props.isActive ? style.active : "")
      }
    >
      <picture className={style.picture}>
        <img src={props.url} className={style.img} alt="" />
      </picture>
      <h4 className={style.title}>{props.title}</h4>
      <p className={style.text}>{props.text}</p>
    </div>
  );
}
