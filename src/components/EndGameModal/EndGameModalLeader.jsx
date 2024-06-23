import styles from "./EndGameModal.module.css";

import { Button } from "../Button/Button";

import celebrationImageUrl from "./images/celebration.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setLeader } from "../../api";

const EndGameModalLeader = ({ gameDurationSeconds, gameDurationMinutes, onClick }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  const saveResult = async onClick => {
    try {
      await setLeader({
        name: userName.length !== 0 ? userName : "Пользователь",
        time: parseInt(gameDurationMinutes * 60 + gameDurationSeconds),
      });

      onClick();
    } catch (e) {
      let err = e instanceof Error ? e.message : "Ошибка записи!";
      console.log(err);
    }
  };

  return (
    <div className={styles.modal}>
      <img className={styles.image} src={celebrationImageUrl} alt={"celebration emodji"} />
      <h2 className={styles.title}>Вы попали на Лидерборд!</h2>
      <input
        type="text"
        placeholder="Ваше имя"
        className={styles.leaderName}
        value={userName}
        onChange={e => setUserName(e.target.value)}
      />
      <p className={styles.description}>Затраченное время:</p>
      <div className={styles.time}>
        {gameDurationMinutes.toString().padStart("2", "0")}.{gameDurationSeconds.toString().padStart("2", "0")}
      </div>

      <div className={styles.buttonsContainer}>
        <Button onClick={() => saveResult(onClick)}>Начать сначала</Button>
        <Button onClick={() => saveResult(() => navigate("/"))}>На главную</Button>
      </div>
    </div>
  );
};

export default EndGameModalLeader;
