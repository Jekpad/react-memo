import styles from "./EndGameModal.module.css";

import { Button } from "../Button/Button";

import deadImageUrl from "./images/dead.png";
import celebrationImageUrl from "./images/celebration.png";
import { Link } from "react-router-dom";

export function EndGameModal({ isWon, isLeaderboard, gameDurationSeconds, gameDurationMinutes, onClick }) {
  const title = isWon ? "Вы победили!" : "Вы проиграли!";

  const imgSrc = isWon ? celebrationImageUrl : deadImageUrl;

  const imgAlt = isWon ? "celebration emodji" : "dead emodji";

  return (
    <div className={styles.modal}>
      <img className={styles.image} src={imgSrc} alt={imgAlt} />
      <h2 className={styles.title}>{title}</h2>
      {isLeaderboard && <input type="text" placeholder="Ваше имя" className={styles.leaderName} />}
      <p className={styles.description}>Затраченное время:</p>
      <div className={styles.time}>
        {gameDurationMinutes.toString().padStart("2", "0")}.{gameDurationSeconds.toString().padStart("2", "0")}
      </div>

      <div className={styles.buttonsContainer}>
        <Button onClick={onClick}>Начать сначала</Button>
        <Link to={"/"}>
          <Button>На главную</Button>
        </Link>
      </div>
    </div>
  );
}
