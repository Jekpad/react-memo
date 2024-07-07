import { useParams } from "react-router-dom";

import { Cards } from "../../components/Cards/Cards";
import { useLivesContext } from "../../contexts/LivesContext";

export function GamePage() {
  const { pairsCount } = useParams();
  const { lives } = useLivesContext();

  return (
    <>
      <Cards pairsCount={parseInt(pairsCount, 10)} previewSeconds={0} lives={parseInt(lives, 10)}></Cards>
    </>
  );
}
