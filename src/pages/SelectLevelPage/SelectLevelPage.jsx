import { Link } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import { useState } from "react";

export function SelectLevelPage() {
  const [easyMode, setEasyMode] = useState(false);
  const lives = easyMode ? 3 : 1;
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выбери сложность</h1>
        <ul className={styles.levels}>
          <li className={styles.level}>
            <Link className={styles.levelLink} to={`/game/3/${lives}`}>
              1
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to={`/game/6/${lives}`}>
              2
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to={`/game/9/${lives}`}>
              3
            </Link>
          </li>
        </ul>
        <div className={styles.modeContainer}>
          <input
            type="checkbox"
            name="easy-mode"
            id="easy-mode"
            checked={easyMode}
            onChange={event => setEasyMode(!easyMode)}
          />
          <label htmlFor="easy-mode">Режим "3 жизни"</label>
        </div>
      </div>
    </div>
  );
}
