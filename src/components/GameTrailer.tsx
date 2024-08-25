import useTrailers from "../Hooks/useTrailer";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);
  console.log(data);

  if (isLoading) return null;

  if (error) throw error;
  console.log(data?.results);

  const first = data?.results[0];

  return first ? (
    <video
      src={first.data[480]}
      poster={first.preview}
      controls
    />
  ) : null;
};

export default GameTrailer;
