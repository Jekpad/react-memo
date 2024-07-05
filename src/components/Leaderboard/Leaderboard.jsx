import classNames from "classnames";
import { serializeTrackTime } from "../../utils/serializeTrackTime";
import styles from "./Leaderboard.module.css";
import { useLeaderboard } from "../../hooks/useLeaderboard";
import Icon from "../../components/Icon/Icon";
import Tooltip from "../Tooltip/Tooltip";
const Leaderboard = () => {
  const { leaders } = useLeaderboard();

  return (
    <>
      <div className={classNames(styles.leaderboardCard, styles.leaderboardCardTitle)}>
        <p className={classNames(styles.leaderboardText, styles.leaderboardTitleText)}>Позиция</p>
        <p className={classNames(styles.leaderboardText, styles.leaderboardTitleText)}>Пользователь</p>
        <p className={classNames(styles.leaderboardText, styles.leaderboardTitleText)}>Достижения</p>
        <p className={classNames(styles.leaderboardText, styles.leaderboardTitleText)}>Время</p>
      </div>
      <div className={styles.leaderboardWrapper}>
        {Array.isArray(leaders) ? (
          leaders.map((leader, index) => (
            <div className={styles.leaderboardCard} key={index}>
              <p className={styles.leaderboardText}>#{index + 1}</p>
              <p className={styles.leaderboardText}>{leader.name}</p>
              <div>
                {Number(leader.achievements[1]) === 1 ? (
                  <Tooltip message={"Игра пройдена без супер-сил"}>
                    <Icon iconName="puzzle-color" width={"32px"} height={"32px"} />
                  </Tooltip>
                ) : (
                  <Icon iconName="puzzle-shape" width={"32px"} height={"32px"} />
                )}
                {Number(leader.achievements[1]) === 2 ? (
                  <Tooltip message={"Игра пройдена без супер-сил"}>
                    <Icon iconName="magic-ball-color" width={"32px"} height={"32px"} />
                  </Tooltip>
                ) : (
                  <Icon iconName="magic-ball-shape" width={"32px"} height={"32px"} />
                )}
              </div>
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
