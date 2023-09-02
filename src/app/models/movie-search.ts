export class Modified {
    time?: string;
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

export class Item {
    modified!: Modified;
    _id!: string;
    name!: string;
    origin_name!: string;
    type?:string;
    thumb_url!: string;
    time?:string;
    episode_current?:string;
    quality?:string;
    lang?:string;
    slug!: string;
    year?: number;
    category?: Category[];
    country?:Country[];
    chieurap?:boolean;
    poster_url!: string;
    sub_docquyen?:boolean;
    score?:string|number
}