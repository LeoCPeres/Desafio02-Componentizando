import { useEffect, useState, useContext } from "react";
import { Button } from "./Button";
import { api } from "../services/api";
import { GenreContext } from "../contexts/GenreContext";

interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

export function SideBar() {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  const { handleToggleSelectedGenre, selectedGenreId } =
    useContext(GenreContext);

  useEffect(() => {
    api.get<GenreResponseProps[]>("genres").then((response) => {
      setGenres(response.data);
    });
  }, []);

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleToggleSelectedGenre(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
