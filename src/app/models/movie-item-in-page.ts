import { Modified } from "./movie-page"

export class MovieInPage {
    modified?: Modified;
    _id?: string;
    name?: string;
    slug?: string;
    origin_name?: string;
    thumb_url?: string;
    poster_url?: string;
    year?: string | number | undefined;
}