import { createBrowserRouter } from "react-router-dom";
import { GamePage } from "./pages/GamePage/GamePage";
import { SelectLevelPage } from "./pages/SelectLevelPage/SelectLevelPage";
import LeaderboardPage from "./pages/LeaderboardPage/LeaderboardPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <SelectLevelPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/game/:pairsCount",
      element: <GamePage />,
    },
    {
      path: "/leaderboard",
      element: <LeaderboardPage />,
    },
  ],
  /**
   * basename нужен для корректной работы в gh pages
   * он же указан в homepage package.json и в index.html
   */
  { basename: "/react-memo" },
);
