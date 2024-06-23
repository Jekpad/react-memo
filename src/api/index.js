export async function getLeaderBoard() {
  let result = await fetch(`https://wedev-api.sky.pro/api/leaderboard`);

  if (!result.ok) {
    throw Error("Ошибка получения данных");
  }
  result = await result.json();

  return result;
}

export async function setLeader({ name, time }) {
  let result = await fetch(`https://wedev-api.sky.pro/api/leaderboard`, {
    method: "POST",
    body: JSON.stringify({
      name: name,
      time: time,
    }),
  });

  if (!result.ok) {
    throw Error("Ошибка отправки данных");
  }
}
