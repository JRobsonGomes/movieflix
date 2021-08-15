import { Reviews } from "./Reviews";

export type Movie = {
    id: number;
    title: string;
    subTitle: string;
    year: number;
    imgUri: string;
    synopsis: string;
    genreId: number;
    reviews: Reviews[]
}