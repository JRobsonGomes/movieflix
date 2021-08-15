import { Movie } from "./Movie";

export type MoviesResponse = {
    content: Movie[];
    size: number;
}