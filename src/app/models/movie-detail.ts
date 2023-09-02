export class Movie {
    _id!: string;
    name!: string;
    origin_name!: string;
    content!: string;
    type?: string;
    status?: string;
    thumb_url!: string;
    trailer_url!: string;
    time!: string;
    episode_current?: string;
    episode_total?: string;
    quality?: string;
    lang?: string;
    notify?: string;
    showtimes?: string;
    slug?: string;
    year?: number;
    view?: number;
    actor?: string[];
    director?: string[];
    category?: Category[];
    country?: Country[];
    is_copyright?: boolean;
    chieurap?: boolean;
    poster_url?: string;
    sub_docquyen?: boolean;
    created?: {
        time?: string;
    };
    modified?: {
        time?: string;
    };
}

export class Episode {
    server_name?: string;
    server_data!: ServerData[];
}

export class ServerData {
    name?: string;
    slug?: string;
    filename?: string;
    link_embed?: string;
    link_m3u8?: string;
}

export class Category {
    id!: string;
    name!: string;
    slug!: string;
}

export class Country {
    id!: string;
    name!: string;
    slug!: string;
}

export class MovieDetail {
    status?: boolean;
    msg?: string;
    movie?: Movie;
    episodes?: Episode[];
}
