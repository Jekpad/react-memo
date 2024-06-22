export async function getLeaderBoard() {
  let result = await fetch(`https://wedev-api.sky.pro/api/leaderboard`);

  if (!result.ok) {
    throw Error("Ошибка получения данных");
  }
  result = await result.json();

  return result;
}
