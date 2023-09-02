export class Modified {
    time?: string;
}

export class Item {
    modified!: Modified;
    _id!: string;
    name!: string;
    slug!: string;
    origin_name!: string;
    thumb_url!: string;
    poster_url!: string;
    year?: number;
}

export class Pagination {
    totalItems?: number;
    totalItemsPerPage?: number;
    currentPage?: number;
    totalPages?: number;
}

export class MoviePage {
    status?: boolean;
    items!: Item[];
    pathImage?: string;
    pagination?: Pagination;
}
