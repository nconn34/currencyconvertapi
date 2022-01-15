export default class PokemonName{
    static async getPokemon(name){
        return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(function(response) {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .catch(function(error) {
          return error;
        });
    };
}