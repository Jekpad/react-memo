import { useEffect } from "react";
import { getLeaderBoard } from "../../api";
import { useState } from "react";
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";
import styles from "./LeaderboardPage.module.css";
import classNames from "classnames";
import { serializeTrackTime } from "../../utils/serializeTrackTime";

const LeaderboardPage = () => {
  const [leaders, setLeaders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeaders = async () => {
      try {
        const data = await getLeaderBoard();
        setLeaders([...data.leaders]);
      } catch (err) {
        const errMsg = err instanceof Error ? err.message : "Произошла непредвиденная ошибка. Обновите страницу";
        setError(errMsg);
      }
    };
    fetchLeaders();
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h1 className={styles.pageTitle}>Лидербоард</h1>
          <Link to={"/"}>
            <Button>Начать игру</Button>
          </Link>
        </header>

        {error && <h1>{error}</h1>}
        <div className={styles.leaderboardWrapper}>
          <div className={classNames(styles.leaderboardCard, styles.leaderboardCardTitle)}>
            <p className={classNames(styles.leaderboardText, styles.leaderboardTitleText)}>Позиция</p>
            <p className={classNames(styles.leaderboardText, styles.leaderboardTitleText)}>Пользователь</p>
            <p className={classNames(styles.leaderboardText, styles.leaderboardTitleText)}>Время</p>
          </div>

          {Array.isArray(leaders) ? (
            leaders.map(leader => (
              <div className={styles.leaderboardCard} key={leader.key}>
                <p className={styles.leaderboardText}>#{leader.id}</p>
                <p className={styles.leaderboardText}>{leader.name}</p>
                <p className={styles.leaderboardText}>{serializeTrackTime(leader.time)}</p>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default LeaderboardPage;
