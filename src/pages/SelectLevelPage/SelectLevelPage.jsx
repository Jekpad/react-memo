import { Link } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import { useState } from "react";
import { Button } from "../../components/Button/Button";
import classNames from "classnames";

const DIFFICULTS = [1, 2, 3];

export function SelectLevelPage() {
  const [selectedDifficult, setSelectedDifficult] = useState(1);
  const [easyMode, setEasyMode] = useState(false);
  const lives = easyMode ? 3 : 1;

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выбери сложность</h1>
        <ul className={styles.levels}>
          {DIFFICULTS.map((difficult, i) => {
            const classLevel = classNames({
              [styles.level]: true,
              [styles.selected]: difficult === selectedDifficult,
            });
            return (
              <li key={i} value={difficult} className={classLevel} onClick={e => setSelectedDifficult(e.target.value)}>
                {difficult}
              </li>
            );
          })}
        </ul>
        <div className={styles.modeContainer}>
          <input
            className={styles.easyMode}
            type="checkbox"
            name="easy-mode"
            id="easy-mode"
            checked={easyMode}
            onChange={() => setEasyMode(!easyMode)}
          />
          <label className={styles.easyModeText} htmlFor="easy-mode">
            Режим "3 жизни"
          </label>
        </div>
        <Link to={`/game/${selectedDifficult * 3}/${lives}`}>
          <Button>Начать игру</Button>
        </Link>
        <Link to={`/leaderboard`}>
          <Button>Лидерборд</Button>
        </Link>
      </div>
    </div>
  );
}
