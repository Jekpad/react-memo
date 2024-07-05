export async function getLeaderBoard() {
  let result = await fetch(`https://wedev-api.sky.pro/api/v2/leaderboard`);

  if (!result.ok) {
    throw Error("Ошибка получения данных");
  }
  result = await result.json();

  return result;
}

export async function setLeader({ name, time, achivments = [] }) {
  let result = await fetch(`https://wedev-api.sky.pro/api/v2/leaderboard`, {
    method: "POST",
    body: JSON.stringify({
      name: name,
      time: time,
      achivments: achivments,
    }),
  });

  if (!result.ok) {
    throw Error("Ошибка отправки данных");
  }
}
