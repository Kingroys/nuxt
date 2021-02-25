<template>
  <div>
    <div class="row">
      <div class="col"></div>
      <div class="col-6">
        <div class="pokemon-title">
          <title-count
            :text="title"
            :count="limit"
            class="text-center"
          ></title-count>
        </div>
        <div v-show="!pokemons.length">
          <image-element
            :src="loadingImage"
            alt="loading"
            height="200px"
            className="loading"
          ></image-element>
        </div>
        <div class="text-center">
          <pokemon-item
            v-for="(pokemon) in pokemons"
            :key="pokemon.name"
            :pokemon-name="pokemon.name"
            :fetch-pokemon="fetchPokemon"
            @select-pokemon-event="selectPokemon"
          ></pokemon-item>
        </div>
      </div>
      <div class="col">
        <pokemon-detail
          v-show="selectedPokemon.name"
          :pokemon="selectedPokemon"
          @close-pokemon-event="close"
        ></pokemon-detail>
      </div>
    </div>
  </div>
</template>

<script>
import ImageElement from '@/components/image/ImageElement';
import PokemonDetail from '@/components/pokemon/PokemonDetail';
import PokemonItem from '@/components/pokemon/PokemonItem';

export default {
  name: 'PokemonList',
  components: {ImageElement, PokemonItem, PokemonDetail},
  props: {
    pokemons: {
      type: [Array, Object],
      default: {},
    },
    limit: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      selectedPokemon: {},
      loadingImage: require(`~/assets/pokemongo.gif`),
    }
  },
  methods: {
    async fetchPokemon(pokemonName) {
      let fetchPokemon = await this.$axios.$get('https://pokeapi.co/api/v2/pokemon/' + pokemonName) ?? [];
      fetchPokemon.image = fetchPokemon['sprites']['front_shiny']
        || fetchPokemon['sprites']['front_default']
        || fetchPokemon['sprites']['other']['official-artwork']['front_default']
        || this.loadingImage;
      fetchPokemon.type = fetchPokemon['types'][0]['type']['name'] || '';

      return fetchPokemon;
    },
    async selectPokemon(pokemonName) {
      if (this.selectedPokemon.name === pokemonName) {
        this.close();
      } else {
        this.selectedPokemon = await this.fetchPokemon(pokemonName);
        this.inactiveAll();
        document.querySelector('.' + pokemonName).classList.add('active');
      }
    },
    close() {
      this.inactiveAll();
      this.selectedPokemon = {};
    },
    inactiveAll() {
      document.querySelectorAll('.pokemon-item').forEach(i => i.classList.remove('active'));
    },
  },
}
</script>

<style>
.loading {
  text-align: center;
  display: block;
  margin: 0 auto;
}

.pokemon-title {
  text-align: center;
  margin-bottom: 20px;
}
</style>
