import styles from "./EndGameModal.module.css";

import { Button } from "../Button/Button";

import deadImageUrl from "./images/dead.png";
import celebrationImageUrl from "./images/celebration.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { setLeader } from "../../api";

export function EndGameModal({ isWon, isLeaderboard, gameDurationSeconds, gameDurationMinutes, onClick }) {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const title = isLeaderboard && isWon ? "Вы попали на лидерборд!" : isWon ? "Вы победили!" : "Вы проиграли!";

  const imgSrc = isWon ? celebrationImageUrl : deadImageUrl;

  const imgAlt = isWon ? "celebration emodji" : "dead emodji";

  const saveResult = async onClick => {
    if (!isWon || !isLeaderboard) {
      onClick();
      return;
    }

    try {
      await setLeader({
        name: userName.length !== 0 ? userName : "Пользователь",
        time: parseInt(gameDurationMinutes * 60 + gameDurationSeconds),
      });
      onClick();
    } catch (e) {
      let err = e instanceof Error ? e.message : "Ошибка записи!";
      alert(`${err}\nПопробуйте снова!`);
    }
  };

  return (
    <div className={styles.modal}>
      <img className={styles.image} src={imgSrc} alt={imgAlt} />
      <h2 className={styles.title}>{title}</h2>
      {isLeaderboard && isWon && (
        <input
          type="text"
          placeholder="Ваше имя"
          className={styles.leaderName}
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />
      )}
      <p className={styles.description}>Затраченное время:</p>
      <div className={styles.time}>
        {gameDurationMinutes.toString().padStart("2", "0")}.{gameDurationSeconds.toString().padStart("2", "0")}
      </div>

      <div className={styles.buttonsContainer}>
        <Button onClick={() => saveResult(onClick)}>Начать сначала</Button>
        <Button onClick={() => saveResult(() => navigate("/"))}>На главную</Button>
        {isLeaderboard && isWon && (
          <Button onClick={() => saveResult(() => navigate("/leaderboard"))}>К лидерборду</Button>
        )}
      </div>
    </div>
  );
}
