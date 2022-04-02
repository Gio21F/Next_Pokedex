export interface PokemonListResponse {
    count:    number;
    next:     string | null;
    previous: null | string;
    results:  SmallPokemon[];
}

export interface SmallPokemon {
    id:    number;
    name:  string;
    url:   string;
    image: string;

}