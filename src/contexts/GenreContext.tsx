import { createContext, ReactNode, useState } from "react";

type GenreContextType = {
  selectedGenreId: number;
  handleToggleSelectedGenre: (id: number) => void;
};

type GenreContextProviderProps = {
  children: ReactNode;
};

export const GenreContext = createContext({} as GenreContextType);

export function GenreContextProvider(props: GenreContextProviderProps) {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleToggleSelectedGenre(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <GenreContext.Provider
      value={{
        handleToggleSelectedGenre,
        selectedGenreId,
      }}
    >
      {props.children}
    </GenreContext.Provider>
  );
}
