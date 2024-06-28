import classNames from "classnames";
import { serializeTrackTime } from "../../utils/serializeTrackTime";
import styles from "./Leaderboard.module.css";
import { useLeaderboard } from "../../hooks/useLeaderboard";

const Leaderboard = () => {
  const { leaders } = useLeaderboard();

  return (
    <>
      <div className={classNames(styles.leaderboardCard, styles.leaderboardCardTitle)}>
        <p className={classNames(styles.leaderboardText, styles.leaderboardTitleText)}>Позиция</p>
        <p className={classNames(styles.leaderboardText, styles.leaderboardTitleText)}>Пользователь</p>
        <p className={classNames(styles.leaderboardText, styles.leaderboardTitleText)}>Время</p>
      </div>
      <div className={styles.leaderboardWrapper}>
        {Array.isArray(leaders) ? (
          leaders.map((leader, index) => (
            <div className={styles.leaderboardCard} key={index}>
              <p className={styles.leaderboardText}>#{index + 1}</p>
              <p className={styles.leaderboardText}>{leader.name}</p>
              <p className={styles.leaderboardText}>{serializeTrackTime(leader.time)}</p>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Leaderboard;
