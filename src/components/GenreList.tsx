import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../Hooks/useGenres";
import getCropppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;

  if (isLoading)
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="lg"
      />
    );

  return (
    <>
      <Heading
        fontSize="2xl"
        marginBottom={3}
      >
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem
            key={genre.id}
            paddingY="5px"
          >
            <HStack
              _hover={{
                bgGradient: "linear(to-r, black, purple)",
              }}
            >
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCropppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                onClick={() => setSelectedGenreId(genre.id)}
                fontSize="md"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
