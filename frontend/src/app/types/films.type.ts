export interface Films {
    films: Film[];
    total: number;
}

export interface Film {
    films: any;
    id: string;
    rating: number;
    director: string;
    image: string;
    cover: string;
    title: string;
    about: string;
    description: string;
    schedule: Shedules[];
}

export interface Shedules {
    id: string;
    daytime: Date;
    rows: number;
    seats: number;
    price: number;
    taken: string[];
}